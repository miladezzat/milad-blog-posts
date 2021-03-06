---
tags: [TypeScript]
author: Milad E. Fahmy
title: Array Type Inference
date: '2021-06-13'
modified: '2021-06-13T20:02:28.049Z'
summary: TypeScript can infer variable types from initial values and return statements. Even still, we may not know exactly what type inference to expect when dealing with arrays
---

# Array Type Inference

TypeScript can infer variable types from initial values and return statements. Even still, we may not know exactly what type inference to expect when dealing with arrays. For example: 


```ts
  let examAnswer = [true, false, false]
```

What is the type of examAnswers? It seems it could equally well be boolean[] or [boolean, boolean, boolean]. In reality, it is always the first of these, since this is the less restrictive type. This enables us to expand the array:

```ts
examAnswers[3] = true; // No type error.
```

Since tuples have fixed lengths, we wouldn’t be able add additional boolean elements to a tuple:

```ts
let tupleOfExamAnswers: [boolean, boolean, boolean] = [true, false, false];
tupleOfExamAnswers[3] = true; // Type error! The tuple only has 3 elements.
```