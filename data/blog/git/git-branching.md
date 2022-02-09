---
tags: [GIT]
title: Git Branching
date: '2022-02-06'
summary: Branching is a feature available in most modern version control systems.
metaTagImage: /static/images/git/branching.png
---

![git branching](/static/images/git/branching.png)

## Related Links
   - [Introduction To Git](https://milad-ezzat.vercel.app/blog/git/introduction-to-git)
   - [Git Basics](https://milad-ezzat.vercel.app/blog/git/git-basic)
   - [Git Branching](https://milad-ezzat.vercel.app/blog/git/git-branching)
   - [Git Stash](https://milad-ezzat.vercel.app/blog/git/git-stash)

## Topics

1. What is Branching In Git?
2. Create Branch
3. Detached heads
4. What about Git Tags?


## What is Branching In Git?

![What is Branching In Git?](/static/images/git/git-branching.svg)

**Branching** is a feature available in most modern version control systems. ... Instead of copying files from directory to directory, Git stores a branch as a reference to a commit. In this sense, a branch represents the tip of a series of commits—it's not a container for commits. [Read More](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)

A **branch** is a version of the repository that diverges from the main working project. It is a feature available in most modern version control systems. 

## Create Branch

![Create Branch](/static/images/git/git-branches.png)

There are two ways to create a new:
- `git branch <BRANCH_NAME>`
- `git check -b <BRANCH_NAME>`

> The easiest way to create a Git branch is to use the `git checkout` command with the `-b` option for a new branch. Next, you just have to specify the name for the branch you want to create. To achieve that, you will run the `git checkout` command with the `-b` option and add `feature` as the branch name. [Read More](https://www.atlassian.com/git/tutorials/using-branches/git-checkout)

## Detached Heads

![Detached Heads](/static/images/git/head-detached.png)

**A detached head** state simply means you are not on a branch and operating your git files from a specific commit in your repository.

**Example** In this repository, the main branch is called the master, and the release tag is in history, thus leading to an old project release. Currently, the master is the checked-out version. We can confirm this by the fact that the head is pointing towards a commit and not the master branch.

> A detached HEAD occurs when you are viewing a single commit in the history of a Git repository. You'll see a message whenever you enter into detached HEAD state informing you that you are no longer on a branch. [Read More](https://www.cloudbees.com/blog/git-detached-head)


## What about Git Tags ?

![What about Git Tags](/static/images/git/git-tag.jpeg)

> Tags are ref's that point to specific points in Git history. Tagging is generally used to capture a point in history that is used for a marked version release (i.e. v1. 0.1). A tag is like a branch that doesn't change. [full manual](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

- **Creating New Tags** `git tag <TAG_NAME>`, this will create tag from the branch you that on it, if you want to create a tag from specific branch you can run this `git tag <TAG_NAME> <BRANCH_NAME>`

- **List Tags** `git tag`
- **Deleting Tag** `git tag -d <TAG_NAME>`



