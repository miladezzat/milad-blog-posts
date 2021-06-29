---
tags: [javascript, linux, TypeScript, ubuntu]
title: Untitled
created: '2021-06-29T08:00:34.085Z'
modified: '2021-06-29T08:04:47.289Z'
---

![How to install typescript on Ubuntu](/images/How-to-install-typescript-on-Ubuntu-1.jpeg)

# How to install typescript on Ubuntu


## 1. Install node
Firstly you have to install node, if you haven't done that yet just type these two commands:

```shell
curl -fsSL https://deb.nodesource.com/setup_15.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## 2. Install TypeScript
When your node is installed, you can proceed to install TypeScript:

```shell
npm install -g typescript
```

## 3. Check if everything works
Now check if everything working properly by typing this simple command:

```shell
tsc
```

You should see a version of TypeScript you just install, and a list of options for `tsc` command.
