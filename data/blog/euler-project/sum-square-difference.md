---
tags: [Euler Project]
title: Sum square difference
date: '2021-12-31'
summary: The sum of the squares of the first ten natural numbers is
---

# Sum square difference

The sum of the squares of the first ten natural numbers is,

![/images/euler-project/sum-square-difference-2021-12-31 20-45-09.png](/images/euler-project/sum-square-difference-2021-12-31 20-45-09.png)

The square of the sum of the first ten natural numbers is,

![/images/euler-project/sum-square-difference-2021-12-31 20-46-30.png](/images/euler-project/sum-square-difference-2021-12-31 20-46-30.png)

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is

.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

```js
const sumOfSquares = (from = 1, to = 1) => {
    let sum = 0;
    for (let index = from; index <= to; index++) {
        const number = index
        sum += number ** 2;
    }

    return sum;
}

const squareOfSum = (from = 1, to = 1) => {
    let sum = 0;

    for (let index = from; index <= to; index++) {
        sum += index;
    }

    return sum ** 2;
}

console.log(squareOfSum(1, 100) - sumOfSquares(1, 100));
```