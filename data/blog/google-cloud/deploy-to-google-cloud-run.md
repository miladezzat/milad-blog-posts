---
tags: [Google Cloud, Google Cloud Run]
author: Milad E. Fahmy
title: Deploy To Google Cloud Run
date: '2024-07-16'
modified: '2024-07-16T11:22:04.023Z'
summary: How to deploy application to google cloud run?
---

# Deploy to Cloud Run with GitHub Actions

![head](/static/images/google-cloud/deploy-to-google-cloud-run.jpg)


**Prerequisites**

- A Google Cloud project
- A GitHub repository
- Cloud Run Service (you can create it from google cloud dashboard)

## Create Workload Identity Federation

Using Workload Identity Federation, you can provide on-premises or multicloud workloads with access to Google Cloud resources by using federated identities instead of a service account key.

1. Create a Workload Identity Pool
   > It is recommended to create and manage workload identity pools from a single dedicated project.

**You can create it via the command line or the dashboard:**

```bash
gcloud iam workload-identity-pools create "WORKLOAD_IDENTITY_POOL_ID" \
  --location="global" \
  --description="The pool to authenticate GitHub actions for my APIs pool." \
  --display-name="My APIs Project Pool" \
  --project="PROJECT_ID"
```

2. Create a Workload Identity Pool Provider
   The `issuer-uri` identifies GitHub as the identity provider and lets Workload Identity discover the OIDC metadata and JSON Web Key Set (JWKs) endpoints. Google Cloud uses these endpoints to validate tokens.

GitHub issues a unique token for each workflow job. This token contains claims that describe the identity of the workflow. By using attribute mapping, we translate the claims in the token so that we can use them in principal/principalSet identifiers to grant access to service accounts or create an attribute condition.

```bash
gcloud iam workload-identity-pools providers create-oidc gcr-d-apis-oidc \
  --workload-identity-pool="gcr-d-apis-pool" \
  --issuer-uri="https://token.actions.githubusercontent.com/" \
  --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.repository_owner=assertion.repository_owner,attribute.branch=assertion.sub.extract('/heads/main/')" \
  --location=global \
  --attribute-condition="assertion.repository_owner=='SamTech-inc'" \
  --project="PROJECT_ID"
```

## Create a Service Account

Create a service account for each repository and assign them appropriate IAM permissions.

**You can use the Dashboard, but the service account must have the following permissions:**

- roles/artifactregistry.admin
- roles/artifactregistry.writer
- roles/cloudbuild.builds.editor
- roles/iam.serviceAccountUser
- roles/iam.workloadIdentityUser
- roles/run.admin
- roles/storage.admin
- roles/storage.objectAdmin
- roles/viewer

## Add IAM Bindings for the Workload Pool

Utilize previously mapped attributes to create principals/principalSets, and then use them in IAM bindings to grant permissions to create short-lived credentials for the appropriate service account.

```bash
gcloud iam service-accounts add-iam-policy-binding "SERVICE_ACCOUNT_EMAIL" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principal://iam.googleapis.com/projects/PROJECT_ID/locations/global/workloadIdentityPools/gcr-d-apis-pool/subject/repo:SamTech-inc/gcr-d-apis:ref:refs/heads/main" \
  --project="PROJECT_ID"
```

## Update the GitHub Actions Workflow to Use the Workload Identity Pool to Authenticate to Google Cloud

In your GitHub repository, add a `.github` folder that contains the `workflows` folder.

```yml
## my-apis/.github/workflows/deploy-to-google-cloudrun.yml
name: Deploy to Cloud Run from Source

on:
  push:
    branches: [ "main" ]

env:
  PROJECT_ID: ${{ secrets.GCP_PROJECT_ID }} # Update Google Cloud project ID
  SERVICE: ${{ secrets.GCP_SERVICE_NAME }} # Update Cloud Run service name
  REGION: ${{ secrets.GCP_REGION }} # Update Cloud Run service region
  GCP_SERVICE_ACCOUNT_EMAIL: ${{ secrets.GCP_SERVICE_ACCOUNT_EMAIL }} # Update service account email
  WORKLOAD_IDENTITY_PROVIDER: ${{ secrets.GCP_WORKLOAD_IDENTITY_PROVIDER }} # Update workload identity provider

jobs:
  deploy-to-cloudrun:
    permissions:
      id-token: write
      contents: read

    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - id: 'auth-to-google-cloud'
        name: 'Authenticate to Google Cloud'
        uses: 'google-github-actions/auth@v1'
        with:
          create_credentials_file: true
          workload_identity_provider: ${{ env.WORKLOAD_IDENTITY_PROVIDER }}
          service_account: ${{ env.GCP_SERVICE_ACCOUNT_EMAIL }}

      - name: Set up Cloud SDK
        uses: google-github-actions/setup-gcloud@v0.2.1
        with:
          version: 'latest'
          project_id: ${{ env.PROJECT_ID }}
          credentials_file_path: ${{ steps.auth-to-google-cloud.outputs.credentials_file_path }}

      - name: 'Build and push Docker image'
        run: |
          gcloud builds submit --tag gcr.io/${{ env.PROJECT_ID }}/${{ env.SERVICE }}:${{ github.sha }}

      - name: 'Deploy to Cloud Run'
        run: |
          gcloud run deploy ${{ env.SERVICE }} \
            --image gcr.io/${{ env.PROJECT_ID }}/${{ env.SERVICE }}:${{ github.sha }} \
            --region ${{ env.REGION }} \
            --platform managed \
            --allow-unauthenticated

      - name: 'Test deployment'
        run: |
          SERVICE_URL=$(gcloud run services describe ${{ env.SERVICE }} --region ${{ env.REGION }} --format "value(status.url)")
          echo "Service URL: $SERVICE_URL"
          curl "$SERVICE_URL"
        continue-on-error: true
```

## Add Secrets to GitHub Repository

Add the following secrets to your GitHub repository:

- GCP_PROJECT_ID
- GCP_SERVICE_NAME
- GCP_REGION
- GCP_SERVICE_ACCOUNT_EMAIL
- GCP_WORKLOAD_IDENTITY_PROVIDER

  > Note that: The workload identity pool (GCP_WORKLOAD_IDENTITY_PROVIDER) is configured as "projects/PROJECT_ID/locations/global/workloadIdentityPools/WORKLOAD_IDENTITY_POOL_ID/providers/WORKLOAD_IDENTITY_PROVIDER_ID"

## Deploy to Cloud Run

Push your changes to the main branch, and the GitHub Actions workflow will deploy your application to Cloud Run.

## Conclusion

In this tutorial, you learned how to use Workload Identity Federation to authenticate GitHub Actions to Google Cloud. You also learned how to create a Workload Identity Pool, a Workload Identity Pool Provider, and a Service Account. Finally, you updated the GitHub Actions workflow to use the Workload Identity Pool to authenticate to Google Cloud and deployed your application to Cloud Run.

## References

- [Workload Identity Federation](https://cloud.google.com/iam/docs/workload-identity-federation)
- [GitHub Actions](https://docs.github.com/en/actions)
