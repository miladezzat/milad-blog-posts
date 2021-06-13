# Summations the multiple numbers

```ts
function sums(...numbers) {
    let sum = 0;
    
    for (const number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(sums(1,2,3,4));
```