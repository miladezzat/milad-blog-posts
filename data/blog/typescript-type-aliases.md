---
tags: [TypeScript]
author: Milad E. Fahmy
title: Type Aliases in TypeScript
created: '2021-06-17T19:16:03.538Z'
modified: '2021-06-17T19:23:23.303Z'
date: '2021-06-17'
---

# Type Aliases

One great way to customize the types in our programs is to use type aliases. These are alternative type names that we choose for convenience. We use the format type ` <alias name> = <type>: `

```ts
type MyString = string;
let myVar: MyString = 'Hi'; // Valid code.
```

Coming up with alternate names for `string` may not be very useful, but this can be done with any type whatsoever. Type aliases are truly useful for referring to complicated types that need to be repeated, especially object types and tuple types. Recall our earlier company example:

```ts
let aCompany: { 
  companyName: string, 
  boss: { name: string, age: number }, 
  employees: { name: string, age: number }[], 
  employeeOfTheMonth: { name: string, age: number },  
  moneyEarned: number
};
```

There’s so much needless repetition here! (And the more times we repeat something, the more opportunity there is for typos.) This can be cleaned up with type aliases:

```ts
type Person = { name: string, age: number };
let aCompany: {
  companyName: string, 
  boss: Person, 
  employees: Person[], 
  employeeOfTheMonth: Person,  
  moneyEarned: number
};
```

Everyone knows the famous Shakespeare quotation “What’s in a name? That which we call a string by any other name would smell as sweet”. TypeScript aliases are nothing more than names. They have absolutely no influence over how types work. For example, the following code does not lead to type errors:

```ts
type MyString = string; 
type MyOtherString = string;
let firstString: MyString = 'test';
let secondString: MyOtherString = firstString; // Valid code.
```
The reason this works is that MyString and MyOtherString are not distinct types. They are just alternative names for the same thing.

Using type aliases, we can make our code much simpler to understand. Let’s give it a try!
