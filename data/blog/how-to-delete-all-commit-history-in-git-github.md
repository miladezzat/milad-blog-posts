---
tags: [git]
author: Milad E. Fahmy
title: How to delete all commit history in git/github
created: '2021-07-18T23:49:48.308Z'
modified: '2021-07-18T23:57:12.122Z'
---

# How to delete all commit history in git/github

Deleting the `.git` folder may cause problems in your git repository. If you want to delete all your commit history but keep the code in its current state, it is very safe to do it as in the following:

1. Checkout

```bash
git checkout --orphan latest_branch
```

2. Add all the files

```bash
git add -A
```

3. Commit the changes

```bash
git commit -am "commit message"
```

4. Delete the branch

```bash
git branch -D main
```

5. Rename the current branch to main

```bash
git branch -m main
```

6. Finally, force update your repository

```bash
git push -f origin main
```


Sometimes you may need to create a brand new branch on a git project that doesn't contain anything present on the other branches nor shares an history with them, called `orphan` branch.

This snippet describes how to do it:

```bash
BRANCH_NAME=$1
git checkout --orphan $BRANCH_NAME
git rm -rf .
rm .gitignore
echo "# $BRANCH_NAME" > README.md
git add README.md
git commit -m "Initial commit for branch $BRANCH_NAME"
git push origin $BRANCH_NAME
```

This snippet can be used as a sequence of commands, replacing $1 with any value for the branch name, or in a bash script, for example naming it orphan_branch.sh and running it with `sh ./orphan_branch.sh new_branch_name`.

for more info about `--orphan`: [https://git-scm.com/docs/git-checkout](https://git-scm.com/docs/git-checkout)