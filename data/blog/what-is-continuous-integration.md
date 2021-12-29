---
author: Milad E. Fahmy
tags: [DevOps]
title: What is Continuous Integration?
created: '2021-07-28T20:59:51.255Z'
modified: '2021-07-28T21:12:50.015Z'
---

# What is Continuous Integration?


## Continuous Integration Explained

**Continuous integration** is a [DevOps](https://milad-ezzat.vercel.app/posts/what-is-devops) software development practice where developers regularly merge their code changes into a central repository, after which automated builds and tests are run. Continuous integration most often refers to the build or integration stage of the software release process and entails both an automation component (e.g. a CI or build service) and a cultural component (e.g. learning to integrate frequently). The key goals of continuous integration are to find and address bugs quicker, improve software quality, and reduce the time it takes to validate and release new software updates.

## Why is Continuous Integration Needed?

In the past, developers on a team might work in isolation for an extended period of time and only merge their changes to the master branch once their work was completed. This made merging code changes difficult and time-consuming, and also resulted in bugs accumulating for a long time without correction. These factors made it harder to deliver updates to customers quickly.

## How does Continuous Integration Work?

With continuous integration, developers frequently commit to a shared repository using a version control system such as Git. Prior to each commit, developers may choose to run local unit tests on their code as an extra verification layer before integrating. A continuous integration service automatically builds and runs unit tests on the new code changes to immediately surface any errors.
![https://d1.awsstatic.com/product-marketing/DevOps/continuous_integration.4f4cddb8556e2b1a0ca0872ace4d5fe2f68bbc58.png](https://d1.awsstatic.com/product-marketing/DevOps/continuous_integration.4f4cddb8556e2b1a0ca0872ace4d5fe2f68bbc58.png)


Continuous integration refers to the build and unit testing stages of the software release process. Every revision that is committed triggers an automated build and test.

With [continuous delivery](https://milad-ezzat.vercel.app/posts/what-is-continuous-delivery), code changes are automatically built, tested, and prepared for a release to production. Continuous delivery expands upon continuous integration by deploying all code changes to a testing environment and/or a production environment after the build stage.

## Continuous Integration Benefits

### Improve Developer Productivity

Continuous integration helps your team be more productive by freeing developers from manual tasks and encouraging behaviors that help reduce the number of errors and bugs released to customers.

### Find and Address Bugs Quicker

With more frequent testing, your team can discover and address bugs earlier before they grow into larger problems later.

### Deliver Updates Faster

Continuous integration helps your team deliver updates to their customers faster and more frequently.

