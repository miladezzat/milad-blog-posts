---
tags: [TypeScript]
title: Generic Functions
created: '2021-06-17T20:55:44.444Z'
modified: '2021-06-17T20:56:32.002Z'
---

# Generic Functions

We can also use generics to create collections of typed functions. Generic functions like these are probably easiest to understand via an example. And for once, the example is actually useful! Imagine we wanted to create a function that returns arrays filled with a certain value. Let’s just write the JavaScript for now:

```js
function getFilledArray(value, n) {
  return Array(n).fill(value);
}
```

Here, getFilledArray('cheese', 3) evaluates to ['cheese', 'cheese', 'cheese']. No problem, right? Well, we run into a problem when we try to specify the function’s return type. We know it should be an array of whatever value‘s type is—do we have to write a separate type annotation for every type of value? Nope. Here, we are rescued by generic functions! 

```ts
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}
```

The above code tells TypeScript to make sure that value and the returned array have the same type T. When the function is invoked, we will provide T‘s value. For example, we can invoke the function using getFilledArray<string>('cheese', 3), which sets T equal to string. This still evaluates to ['cheese', 'cheese', 'cheese'], but the function is now correctly typed and less prone to errors. The function getFilledArray<string> is precisely the same as if we had written (value: string, n: number): string[] in its type annotation.

In general, writing generic functions with function functionName<T> allows us to use T within the type annotation as a type placeholder. Later, when the function is invoked, T is replaced with the provided type. 
