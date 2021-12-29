---
tags: [DevOps]
author: Milad E. Fahmy
title: Docker
created: '2021-06-26T19:19:50.096Z'
modified: '2021-06-26T20:25:04.563Z'
date: '2021-06-26'
summary: Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.
---

# Docker

1. what is docker

<span style="color:green;"> Docker </span> is a platform for building, running and shipping applications.

> <strong>Docker</strong> is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.  [Wikipedia
](https://en.wikipedia.org/wiki/Docker_(software))

Note: docker help us consistently build, run and ship applications

2. Virtual Machines <strong>vs </strong> Containers

<strong> Container </strong> is an isolated environment for running an application
- allow running multiple apps in isolation
- are lightweight
- use <strong>OS </strong> of the host
- start quickly
- need less hardware resources

<strong> Virtual Machine </strong> is an abstriction of a machine (physical hardware)

3. Architecture of Docker

<strong> Containers </strong> share the kernal of <b>os</b>
<strong> Akernal</strong> managmes applications and hardware resources
![container_vs_virtual_machines](/images/Container_VM_Implementation.png)

1. Installing Docker
you can visit: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/) to install docker on your Operating system

5. Development Workflow

To build and run your app by docker, you need to make `Dockerfile`, it's an plain text file that contain the instruction for docker


6. Docker in action

Instructions for deploying app
- Start with an OS
- Install node
- Copy app files
- Rung node app.js

- Example:
  - create folder `hello-docker`
  - in folder create file `app.js`
  - in file set the following code:

    ```js
    console.log('Hello, Docker');
    ``` 
    - create `Dockerfile` (width captal D only) in the root of your app
    - set the following instruction in the file: 
    ```txt
    FROM node:alpine
    COPY . /app
    WORKDIR /app

    CMD node app.js
    ``` 
    - to build and run your app by docker, open terminal in the folder that contain you app and run the following commands
      1. docker build -t hello-docker .
      2. you can check you images created by: docker images or docker image ls
      3.  docker run hello-docker

