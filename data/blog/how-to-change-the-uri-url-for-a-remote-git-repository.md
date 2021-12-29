---
tags: [git]
author: Milad E. Fahmy
title: How to change the uri url for a remote git repository
created: '2021-07-18T14:03:22.890Z'
modified: '2021-07-18T14:08:00.067Z'
date: '2021-07-18'
---

# How to change the uri url for a remote git repository

1. check your remote url

```shell
git remote -v
```

2. change you url

```bash
  git remote set-url origin <new.git.url/here>
```

> see `git help remote` or you can edit `.git/config`  and change the URLs there. You're not in any danger of losing history unless you do something very silly (and if you're worried, just make a copy of your repo, since your repo is your history.)


3. you can check it if it change again: 

```shell
git remote -v
```


for more information about change [remote repository](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories) 

https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories