---
tags: [GIT]
title: Introduction To Git
date: '2022-02-05'
summary: Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.
metaTagImage: /static/images/git/waht-is-source-control-system.png
---

1. **What Is Source Control ?**
2. **What Is Distributed Version Control System ?**
3. **What is Git ?**
    - **What Is Phases of Git ?**
4. **What about GitHub ?**

## What is source control ?

![What is source control ?](/static/images/git/waht-is-source-control-system.png)

**Source Code Control System (SCCS)** is a **version control system** designed to track changes in source code and other text files during the development of a piece of software. This allows the user to retrieve any of the previous versions of the original source code and the changes which are stored.

**Version control**, also known as source control, is the practice of tracking and managing changes to software code. Version control systems are software tools that help software teams manage changes to source code over time. As development environments have accelerated, version control systems help software teams work faster and smarter. They are especially useful for **DevOps** teams since they help them to reduce development time and increase successful deployments.

**Version control software** keeps track of every modification to the code in a special kind of database. If a mistake is made, developers can turn back the clock and compare earlier versions of the code to help fix the mistake while minimizing disruption to all team members.


> Source control (or version control) is the practice of tracking and managing changes to code. Source control management (SCM) systems provide a running history of code development and help to resolve conflicts when merging contributions from multiple sources. [For More](https://aws.amazon.com/devops/source-control/)

> In software engineering, version control is a class of systems responsible for managing changes to computer programs, documents, large web sites, or other collections of information. Version control is a component of software configuration management. "Wikipedia"


## What Is Distributed Version Control System ?

![What Is Distributed Version Control System ?](/static/images/git/what-is-distributed-version-control-system.png)

> In software development, **distributed version control** is a form of version control in which the complete codebase, including its full history, is mirrored on every developer's computer. "Wikipedia"

Changes to files are tracked between computers. For example, my workstation and yours. In the beginning, this required specific coordination strategies to maintain consistency in projects, so all the developers could keep track of what was happening to files at any given time.

## What Is Git ?

![## What Is Git ?](/static/images/git/what-is-git.png)

> Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows. "Wikipedia"

> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. [For More](https://git-scm.com/)

**Git** is an Open Source Distributed Version Control System. It is designed for
- Speed
- Simplicity
- Fully Distributed
- Excellent support for parallel development, support for hundreds of parallel branches.
- Integrity

As we remember from our previous section at this blog, in a **Distributed Version Control system** a local copy is saved on each node (computer of a person who is part of the project). There is also a centralized server where all the team members push their changes. This way Git is resilient to crashes as each node has its own copy of the source tree.

You can read more about git on this [AWS Article](https://aws.amazon.com/devops/source-control/git/)

### What Is Phases of Git ?

![What Is Phases of Git ?](/static/images/git/git-4-phases.png)

Git has **four phases**, let’s understand the four phases of git that are `working area (working directory)`, `Staging area/Added content/Git index`, `Local git repo`, and `Remote git Repo` As many of you might not be familiar with these areas and the mechanism behind it,

**The four areas of Git:**
-  **working area (working directory)** -> It’s a place where we keep our current files on which we are about to work.
- **Staging area/Added content/Git index** -> Intermediate area, a place where we put our files before commit
- **Local Repo** -> Contains entire history of Project
- **Remote Repo** -> as the Local repo but on the remote server

## What about GitHub ?

![What about GitHub ?](/static/images/git/what-about-github.webp)

> GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. ... You'll create your own Hello World repository and learn GitHub's pull request workflow, a popular way to create and review code.

It's less obvious that Git, the tool invented to coordinate the development of the Linux kernel, and GitHub, the tool-based culture that surrounds it, will be as widely relevant. Most people don't sling code for a living. But as the work products and processes of every profession are increasingly digitized, many of us will gravitate to tools designed to coordinate our work on shared digital artifacts. That's why Git and GitHub are finding their way into workflows that produce artifacts other than, or in addition to, code.
