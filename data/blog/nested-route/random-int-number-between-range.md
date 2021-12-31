---
tags: [javascript]
author: Milad E. Fahmy
title: Random integer number
date: '2021-12-31'
draft: false
summary: 'How to create a random int number between range?'
---

## Create a random int number

```js
getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
```