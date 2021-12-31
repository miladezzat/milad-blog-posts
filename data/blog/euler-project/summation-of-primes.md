---
tags: [Euler Project]
title: Summation of primes
date: '2021-12-31'
summary: The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
---

# Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.


```js
const isPrime = (number) => {
    if (number <= 1) {
        return false;
    };

    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            return false;
        }
    }

    return true;
}

const summationOfPrimes = (number) => {
    let sum = 0;
    for (let index = 1; index <= number; index++) {
        if (isPrime(index)) {
            sum += index;
        }
    }

    return sum;
}

console.log(summationOfPrimes(2 * 1000000));
```