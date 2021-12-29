---
tags: [git]
author: Milad E. Fahmy
title: How do I rename a local Git branch?
created: '2021-07-06T09:28:10.586Z'
modified: '2021-07-06T09:31:23.488Z'
---

# How do I rename a local Git branch?

If you want to rename a branch while pointed to any branch, do:

```bash
  git branch -m <oldname> <newname>
```
If you want to rename the current branch, you can do:

```bash
git branch -m <newname>
```

If you want to push the local branch and reset the upstream branch:

```bash
git push origin -u <newname>
```

And finally if you want to Delete the remote branch:

```bash
git push origin --delete <oldname>
```

A way to remember this is -m is for "move" (or mv), which is how you rename files. Adding an alias could also help. To do so, run the following:

```bash
git config --global alias.rename 'branch -m'
```

If you are on Windows or another case-insensitive filesystem, and there are only capitalization changes in the name, you need to use -M, otherwise, git will throw branch already exists error:

```bash
git branch -M <newname>
```

For more info: https://git-scm.com/docs/git-branch/2.28.0