---
tags: [TypeScript]
author: Milad E. Fahmy
title: Array Type Inference
created: '2021-06-13T19:57:55.855Z'
modified: '2021-06-13T20:02:28.049Z'
---

# Array Type Inference
<p>
TypeScript can infer variable types from initial values and return statements. Even still, we may not know exactly what type inference to expect when dealing with arrays. For example: </p>


```ts
  let examAnswer = [true, false, false]
```

<p>What is the type of examAnswers? It seems it could equally well be boolean[] or [boolean, boolean, boolean]. In reality, it is always the first of these, since this is the less restrictive type. This enables us to expand the array:</p>

```ts
examAnswers[3] = true; // No type error.
```

<p>Since tuples have fixed lengths, we wouldn’t be able add additional boolean elements to a tuple:</p>

```ts
let tupleOfExamAnswers: [boolean, boolean, boolean] = [true, false, false];
tupleOfExamAnswers[3] = true; // Type error! The tuple only has 3 elements.
```