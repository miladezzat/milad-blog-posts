---
tags: [GIT]
author: Milad E. Fahmy
title: Cherry picking in Git
created: '2021-06-29T11:04:06.732Z'
modified: '2021-06-29T11:07:40.464Z'
date: '2021-06-29'
---

# Cherry picking in Git
![Cherry picking in Git](/images/git-cherry-pick-merge-commit.png)

Cherry picking in Git means to choose a commit from one branch and apply it onto another. This is in contrast with other ways such as merge and rebase which normally apply many commits onto another branch. 

1. Make sure you are on the branch you want to apply the commit to.
```shell
 git switch <branch_name>
```

2. To get a commit you want execute the following:
```shell
 git cherry-pick <commit-hash>
```

for more about `git cherry-pick`: [https://git-scm.com/docs/git-cherry-pick](https://git-scm.com/docs/git-cherry-pick)

