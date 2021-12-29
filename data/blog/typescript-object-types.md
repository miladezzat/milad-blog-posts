---
tags: [TypeScript]
author: Milad E. Fahmy
title: Object Types in TypeScript
created: '2021-06-17T18:56:40.384Z'
modified: '2021-06-17T19:09:06.860Z'
---

# Object Types 
It’s time, we can finally discuss object-oriented programming and how it relates to TypeScript! TypeScript’s object types are extremely useful, as they allow us extremely fine-level control over variable types in our programs. They’re also the most common custom types, so we’ll have to understand them if we want to read other people’s programs.

Here’s a type annotation for an object meant to represent a person:

```ts
let aPerson: {name: string, age: number};
```
The type annotation looks like an object literal, but instead of values appearing after properties, we have types. Notice that the variable aPerson has yet to be assigned a value. Trying to assign a value to aPerson that doesn’t have name and age properties of the specified types will lead to a type error:

```ts
aPerson = {name: 'Milad Ezzat', age: "wouldn't you like to know"}; // Type error: age property has the wrong type.
aPerson = {name: 'Milad', yearsOld: 5000}; // Type error: no age property. 
aPerson = {name: 'Melo', age: 22}; // Valid code
```

Above, in the case of Milad, the object had properties of the correct types. Still, a type error was thrown because the properties didn’t have the correct names.
TypeScript places no restrictions on the types of an object’s properties. They can be enums, arrays, and even other object types!

```ts
let aCompany: {
  companyName: string, 
  boss: {name: string, age: number}, 
  employees: {name: string, age: number}[], 
  employeeOfTheMonth: {name: string, age: number},  
  moneyEarned: number
};
```

This is only an introduction to TypeScript’s object types. A thorough description would deserve a lesson of its own (which we will soon arrive at if we keep learning). For now, let’s practice the basics some more.
