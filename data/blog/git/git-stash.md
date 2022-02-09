---
tags: [GIT]
title: Git Stash
date: '2022-02-09'
summary: Git stash is a built-in command with the distributed Version control tool in Git that locally stores all the most recent changes in a workspace and resets the state of the workspace to the prior commit state.
metaTagImage: /static/images/git/git-stash.png
---

## Related Links
   - [Introduction To Git](https://milad-ezzat.vercel.app/blog/git/introduction-to-git)
   - [Git Basics](https://milad-ezzat.vercel.app/blog/git/git-basic)
   - [Git Branching](https://milad-ezzat.vercel.app/blog/git/git-branching)
   - [Git Stash](https://milad-ezzat.vercel.app/blog/git/git-stash)


## What is git stash?

![Git Stash](/static/images/git/git-stash.png)

Git stash is a built-in command with the distributed Version control tool in Git that locally stores all the most recent changes in a workspace and resets the state of the workspace to the prior commit state. [for more manual](https://git-scm.com/docs/git-stash)

## Stash options

1. git stash

This will take  uncommitted changes and add them for later using, but the files that you change on them must be tracked before

2. git stash -u

This will take all uncommitted changes and put them on the stash stack

3. git stash list

This will list all stashes

4. git stash pop

This will pop the stashed as stack (FILO)

1. git stash show `<ID>`

This will give you details about specific stash 

6. git stash show --patch `<ID>`

This will give you more details about stash

7. git stash drop
This will remove all stash stack

8. git stash drop `<ID>`

This will remove specific stash


> A stack is a container of objects that are inserted and removed according to the last-in first-out (LIFO) principle. In the pushdown stacks only two operations are allowed: push the item into the stack, and pop the item out of the stack. A stack is a limited access data structure - elements can be added and removed from the stack only at the top. push adds an item to the top of the stack, pop removes the item from the top. A helpful analogy is to think of a stack of books; you can remove only the top book, also you can add a new book on the top. 

![stack](/static/images/git/stack.bmp)


### Resources

1. [Git Stash atlassian](https://www.atlassian.com/git/tutorials/saving-changes/git-stash)
2. [Git FAQ](https://www.git-tower.com/learn/git/faq/save-changes-with-git-stash)
3. [Stack Vs Queue](https://www.andrew.cmu.edu/course/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html)