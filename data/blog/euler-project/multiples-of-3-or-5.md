---
tags: [Euler Project]
title: Multiples of 3 or 5
date: '2021-12-31'
summary: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
---

# Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.


## Solution

```js
let sum = 0;

for (let index = 3; index < 1000; index += 1) {
    if (index % 3 == 0 || index % 5 === 0) {
        sum += index;
    }
}
console.log(sum);
```--