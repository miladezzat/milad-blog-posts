---
tags: [TypeScript]
title: Summations the multiple numbers
created: '2021-06-13T20:31:41.680Z'
modified: '2021-07-01T11:58:43.613Z'
---

# Summations the multiple numbers

## First way:

```ts
function sums(...numbers:number[]): number {
    let sum = 0;
    
    for (const number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(sums(1,2,3,4)); // 10
```

## Second Way

```ts
function sum(...numbers:number[]): number {
    return numbers.reduce((a, b)=> a+b );
}

console.log(sum(5,6,4)); // 15
```
