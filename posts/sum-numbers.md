---
tags: [TypeScript]
title: Summations the multiple numbers
created: '2021-06-13T20:31:41.680Z'
modified: '2021-06-13T20:31:43.553Z'
---

# Summations the multiple numbers

```ts
function sums(...numbers:number[]): number {
    let sum = 0;
    
    for (const number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(sums(1,2,3,4));
```