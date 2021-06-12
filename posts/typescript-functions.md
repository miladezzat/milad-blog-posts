---
tags: [TypeScript]
title: Functions
created: '2021-06-11T09:52:02.396Z'
modified: '2021-06-11T11:35:34.099Z'
---

# Functions

## Parameter Type Annotations

<p>In TypeScript, function parameters may be given type annotations with the same syntax as variable declarations `name: string`</p>

```ts
 function greet(name: string){
   console.log(`Hello, ${name}`);
 }

 greet('Milad') // Prints: Hello, Milad

 greet(12345) // Error: argument '12345' is not assignable to parameter of type 'string'
```

by placing `:string` after `name` parameter, we're declaring that `name` is of type `string`.


## Optional Parameters-

<p>TypeScript normally gives an error if we don't provide a value for all arguments in a function.</p>

```ts
function greet(name: string){
  console.log(`Hello, ${name || 'Anonymous'}`);
}

greet('Milad); // Prints: Hello, Milad
greet(); // Prints: TypeScript Error: Expected 1 arguments, but got 0.
```
>for making a parameter is opional we add `?` after parameter, this tells TypeScript that the parameter is allowed to be `undefined` and doesn't always have to be provided.

```ts
function greet(name?: string){
  console.log(`Hello, ${name || 'Anonymous' }!`);
}
greet(); // Prints: Hello, Ananymous!
```
## Default Parameters

<p>if a parameter is assigned a default value, TypeScript will infer the variable type to be the same as the default value's type.</p>

```ts
function greet(name = 'Anonymous'){
  console.log(`Hello, ${name}`);
}
```

>note: `greet()` function can recieve s `string` or `undefined`

## Inferring Return Types

<p>TypeScript can also infer the types of values returned by functions.</p>

```ts
function createGreeting (name: string){
  return `Hello, ${name} !`
}

const myGreeting = createGreeting('Aisle Nevertell');
```
Here’s how TypeScript can infer myGreeting above to be of type string:
1. `createGreeting()`’s return statement is followed by a string variable, so `createGreeting()` is inferred to return string.
2. `createGreeting('Aisle Nevertell')` therefore must result in a value of type string.
3. `myGreeting` is initialized to `createGreeting('Aisle Nevertell')`, which is a value with the type string.

## Explicit Return Types

<p>If we’d like to be explicit about what type a function returns, we can add an explicit type annotation after its closing parenthesis. Here, we use the same syntax as other type annotations, a colon followed by the type. TypeScript will produce an error for any return statement in that function that doesn’t return the right type of value. </p>

```ts
  function createGreeting(name?: string): string {
    if (name) {
      return `Hello, ${name}!`;
    }
  
    return undefined;
    //Typescript Error: Type 'undefined' is not assignable to type 'string'.
  };
```
## Void Return Type

<p>It is often preferred to use type annotations for functions, even when those functions don't return anything</p>

```ts
// without any annotation return type
function lgGreeting(name: string){
  console.log(`Hello, ${name}!`); 
}
```

```ts
// with void annotation type
function logGreeting(name:string): void{
  console.log(`Hello, ${name}!`)
}
```

## Documenting Functions

<p>TypeScript recognize JavaScript comment syntax:</p>

```ts
// This is a single line comment

/*
This is a 
multiline
comment
*/
```

But it’s common in TypeScript to see a third comment style: documentation comments. A documentation comment is denoted with the first line /** and a final line */. It’s common for each line within the comment to start with an asterisk (*):

``` ts
/**
* This is a documentation comment
*/
```
