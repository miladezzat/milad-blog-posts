---
tags: [MongoDB]
title: How To Install MongoDB in Fedora 34/33
created: '2021-06-30T14:29:16.517Z'
modified: '2021-06-30T14:40:32.338Z'
---

# How To Install MongoDB in Fedora 34/33

MongoDB is a fully flexible index support and rich queries database. It is classified as a NoSQL database program, which uses JSON-like documents with optional schemas. Similar to the relational database system, It also supports joins in queries.

MongoDB has released a new stable version 4.4 with lots of major enhancements. This tutorial will help you to install <strong>MongoDB 4.4</strong> on Fedora Linux systems.

## Step 1 – Configure Repository
The MongoDB official team provides an Yum repository for installing MongoDB on a Fedora system. Create a new configuration file with Mongodb yum repository. Edit a file in a editor:

```shell
sudo gedit /etc/yum.repos.d/mongodb.repo
```
Add the below content

```bash
[Mongodb]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/8/mongodb-org/4.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc
```
Save the file and close it.

## Step 2 – Install MongoDB on Fedora
Let’s use the DNF package manager to install the MongoDB server on the Fedora system. This will also install all required dependencies to your system.

To install MongoDB on Fedora, type:

```shell
sudo dnf install mongodb-org mongodb-org-server 
```

## Step 3 – Start MongoDB Service
MongoDB server has been installed on your Fedora systems. Let’s enable the MongoDB systemd service and start it.

```shell
sudo systemctl enable mongod.service 
sudo systemctl start mongod.service 
```
Once the service is started, check the current status with the following command.

```shell
sudo systemctl status mongod.service 
```

![image](/images/install-mongo-on-fedora-1.png)


## Step 4 – Connect to MongoDB Shell

Use the following command to check the installed MongoDB version

```shell
mongod --version 
```
![image](/images/install-mongo-on-fedora-2.png)

Connect MongoDB using the command line and execute some test commands for checking proper working.

```shell
 mongo
```

![image](/images/install-mongo-on-fedora-3.png)

Congratulation’s You have successfully installed mongodb server on Fedora system. For practice only you may use [MongoDB browser shell](https://university.mongodb.com/).

References: http://docs.mongodb.org/manual/installation/
