---
tags: [TypeScript]
title: Arrays
date: '2021-06-11T11:55:28.232Z'
modified: '2021-06-11T12:24:12.294Z'
---

# Arrays

<p>In JavaScript array can contain any type of data or mix of data types</p>

## Array Type Annotations
<p>The TypeScript type annotation for array types is fairly straightforward: we put [] after the element type. In this code, names is an Array that can only contain strings:</p>

```ts
let names: string[] = ['Danny', 'Samntha'];
// or you can declare as the following
let names: Array<string> = ['Danny','Samantha'];
```
<p>if you try to assign number to `names` array, you will get a type error</p>

```ts
let names: string[] = [1,2,3] // Type Error!

names.push(562) // Type Error!
```

## Multi-dimensional Arrays
<p>You can declare multi demensional arrays as:</p>

```ts 
let myArray: string[][]
```

