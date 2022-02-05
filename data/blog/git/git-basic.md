---
tags: [GIT]
title: Git Basics
date: '2022-02-05'
summary: Git is a software program, it's easy to install on your local PC, based on you operating system.
metaTagImage: /static/images/git/git-basics.png
---

![Git Basics](/static/images/git/git-basics.png)

- **How to install Git**
- **Git Commands**
    - `git init` 
    - `.git folder`
    - `git log`
    - `git status`
    - `git add`
    - `git commit`
    - `git diff`
    - `git clone`
    - `git reset`

## How to install Git 🚀

Git is a software program, it's easy to install on your local PC, based on you operating system.

you can follow this [link](https://git-scm.com/downloads) to download and install it.

> Installing Git easy peasy lemon squeezy 😉


## Git Commands

1. GIT INIT

> git-init - Create an empty Git repository or reinitialize an existing one, for more options and [full manual of init](https://git-scm.com/docs/git-init)

The `git init` command creates a new Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository. Most other Git commands are not available outside of an initialized repository, so this is usually the first command you'll run in a new project.

2. .GIT Folder

Executing `git init` creates a `.git` subdirectory in the current working directory, which contains all of the necessary Git metadata for the new repository. This metadata includes subdirectories for objects, refs, and template files. A HEAD file is also created which points to the currently checked out commit.

3. GIT LOG

This command is used to View the commits history. for [full manual](https://git-scm.com/docs/git-log)

there is good options I loved on the for `git log`, `--oneline` this option is a way to view the log is one line per commit, which is much more concise and useful for many purposes, and other option `--graph`, now you get a visual representation of the history. Parsing this graph can be tricky.

4. GIT STATUS

The `git status` command displays the state of the **working directory** and the **staging area**. It lets you see which changes have been staged, which haven’t, and which files aren’t being tracked by Git. Status output does not show you any information regarding the committed project history. for the [full manual](https://git-scm.com/docs/git-status).

5. GIT ADD

The `git add` command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way—changes are not actually recorded until you run git commit . for [full manual](https://git-scm.com/docs/git-add).

6. GIT COMMIT

The `git commit` command captures a snapshot of the project's currently staged changes. Committed snapshots can be thought of as "safe" versions of a project—Git will never change them unless you explicitly ask it to. ... These two commands git commit and git add are two of the most frequently used. for [full manual](https://git-scm.com/docs/git-commit).

7. GIT DIFF

`git diff` is a multi-use Git command that when executed runs a diff function on Git data sources. These data sources can be commits, branches, files and more. The git diff command is often used along with git status and git log to analyze the current state of a Git repo. for [full manual](https://git-scm.com/docs/git-diff).

8. GIT CLONE

`git clone` is a Git command line utility which is used to target an existing repository and create a clone, or copy of the target repository. Cloning a local or remote repository. Cloning a bare repository. Using shallow options to partially clone repositories. Git URL syntax and supported protocols. you can clone remote repo as `git clone <REPO_URL>` or you can clone local repo like: `git clone <LOCAL_REPO_PATH> <NAME_OF_CLONED_REPO>`. for [full manual](https://git-scm.com/docs/git-clone)

9. GIT RESET

The `git reset` command is a complex and versatile tool for undoing changes. It has three primary forms of invocation. These forms correspond to command line arguments `--soft`, `--mixed`, `--hard`. The three arguments each correspond to Git's three internal state management mechanism's, The Commit Tree (HEAD), The Staging Index, and The Working Directory. for [full manual](https://git-scm.com/docs/git-reset).



