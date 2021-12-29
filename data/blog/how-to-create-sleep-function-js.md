---
tags: [JavaScript]
author: Milad E. Fahmy
title: Sleep function
created: '2021-06-12T17:16:26.012Z'
modified: '2021-06-12T17:18:34.647Z'
date: '2021-06-12'
---

# Sleep function

when you need to delay some code `async await` before running.

```js
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// await sleep(200); // 200 millisecond
```