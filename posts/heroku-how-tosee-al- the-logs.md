---
tags: [Heroku]
author: Milad E. Fahmy
title: Heroku - How to see all the logs
created: '2021-06-30T15:14:59.225Z'
modified: '2021-06-30T15:19:06.291Z'
---

# Heroku - How to see all the logs

## Step 1 : install heroku cli

// in ubuntu
```shell
sudo snap install --classic heroku
```
for more intstallion: https://devcenter.heroku.com/articles/heroku-cli

## Step 2: login to heroku

```shell
heroku login
```

## Step 3: see logs of specific app

```shell
heroku logs -t --app <APP_NAME>
```
