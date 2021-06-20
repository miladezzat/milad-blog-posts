---
favorited: true
tags: [MongoDB, Nodejs]
title: How to take backup and restore backup in MongoDB
created: '2021-06-20T08:02:22.442Z'
modified: '2021-06-20T08:39:13.704Z'
---

# How to take backup and restore backup in MongoDB

## How to take backup in mongoDB
1. Create Backups from Non-Local mongodb Instances

```bash
  mongodump --uri=mongodb+srv://<PROJECT_NAME_ON_MONGO_ATLAS>.ppmkd.gcp.mongodb.net/<YOUR_DATABASE_NAME>  --username=<YOUR_USER_NAME>  --password=<YOUR_PASSWORD> --out=<PATH_TO_SET_BACK_UP> --gzip
```
2. Create backup from local

```bash
mongodump --uri=mongodb://localhost:<YOUR_PORT>/<DB_NAME>     --out=./ --gzip
```

## How to restore backup in mongoDB

1. Restore to remote

```bash
mongorestore --uri=mongodb+srv://<PROJECT_NAME_ON_MONGO_ATLAS>.ppmkd.gcp.mongodb.net/<YOUR_DATABASE_NAME> --db=<YOUR_DATABASE>  --username=<YOUR_USER_NAME>  --password=<YOUR_PASSWORD> --gzip <PATH_TO_FOLDER_THAT_CONTAINS_BACKUP>
```

2. Restore to local

```bash
mongorestore --uri=mongodb://localhost:<YOUR_PORT> --db=<DB_NAME>  --gzip <PATH_TO_FOLDER_THAT_CONTAINS_BACKUP>
```

