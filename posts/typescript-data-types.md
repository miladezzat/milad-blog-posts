---
tags: [TypeScript]
author: Milad E. Fahmy
title: Type Inferences
created: '2021-06-10T09:32:56.283Z'
modified: '2021-06-10T16:37:52.129Z'
---

# Type Inferences

> TypeScript is a superset of JavaScript that adds types.

## Primitive data types (javascript's built in data types)
- boolean
- number
- null
- string
- undefined

> if we tey to reassign a variable to a value of different type, `TypeScript` will surface an error.
___________________________________

## Type Shapes

<p> The bulit-in types in JavaScript each have known properties and methods that always exist. All `string`s for example, are known to have s `.length` property and `.toLowerCase()` method </p>

> TypeScript's `tsc` command will let you know if your code tried to access properties and methods that don't exist:
```javascript
  "My".toLowercase();
   // Property 'toLowercase' does not exist on type '"MY"'.
   // Did you mean 'toLowerCase'? 
```
_____________________

## Any

<p> Varaibles of type `any` can be assigned to any value and TypeScript won't give an error if they're reassigned to a differnet type later on </p>

<p>There are some places where TypeScript will not try to infer what type something is—generally when a variable is declared without being assigned an initial value. In situations where it isn’t able to infer a type, TypeScript will consider a variable to be of type any </p>

```ts
  // the following code is correct
  let onOrOff
  onOrOff = 1;
  onOrOff = false;
```
________________________

## Variable Type Annotations

<p> we can declare varaible without assign it an initial value, but we can declare what type it will be contain in the future by useing `:` after varaible name and set data type </p>

```ts
let mustBeAString : string;
mustBeAString = 'CatDog'; // correct

mustBeAString = 1337;
// Error: Type 'number' is not assignable to type 'string' 
```