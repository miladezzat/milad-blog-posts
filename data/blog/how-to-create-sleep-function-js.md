---
tags: [JavaScript]
author: Milad E. Fahmy
title: Sleep function
created: '2021-06-12T17:16:26.012Z'
modified: '2021-06-12T17:18:34.647Z'
---

# Sleep function

<p> when you need to delay some code <code> async await </code> before running </p>

```js
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// await sleep(200); // 200 millisecond
```