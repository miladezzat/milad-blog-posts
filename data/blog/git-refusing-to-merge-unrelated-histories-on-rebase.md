---
tags: [git]
author: Milad E. Fahmy
title: Git refusing to merge unrelated histories on rebase
created: '2021-07-18T12:11:11.778Z'
modified: '2021-07-18T12:15:45.778Z'
date: '2021-07-18'
summary: During git rebase origin/development the following error message is shown from Git
---

# Git refusing to merge unrelated histories on rebase

During git rebase origin/development the following error message is shown from Git

```bash
fatal: refusing to merge unrelated histories
Error redoing merge 1234deadbeef1234deadbeef
```

> `git merge` used to allow merging two branches that have no common base by default, which led to a brand new history of an existing project created and then get pulled by an unsuspecting maintainer, which allowed an unnecessary parallel history merged into the existing project. The command has been taught **not to allow** this by default, with an escape hatch `--allow-unrelated-histories` option to be used in a rare event that merges histories of two projects that started their lives independently.

See the Git [release changelog](https://github.com/git/git/blob/master/Documentation/RelNotes/2.9.0.txt#L58-L68) for more information.

You can use `--allow-unrelated-histories` to force the merge to happen.

```bash
git pull origin <BRANCH_NAME> --allow-unrelated-histories
```