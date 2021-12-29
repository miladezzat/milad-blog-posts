---
tags: [javascript]
author: Milad E. Fahmy
title: Callback Functions In JavaScript
created: '2021-06-28T15:06:47.314Z'
date: '2021-06-15'
modified: '2021-06-28T15:13:26.043Z'
summary: In computer programming, a callback, also known as a “call-after” function, is any executable code that is passed as an argument to other code
---

# Callback Functions In JavaScript

![head](/images/callback-javascript-1.jpeg)


> “ In computer programming, a callback, also known as a “call-after” function, is any executable code that is passed as an argument to other code; that other code is expected to call back (execute) the argument at a given time. This execution may be immediate as in a synchronous callback, or it might happen at a later time as in an asynchronous callback. Programming languages support callbacks in different ways, often implementing them with subroutines, lambda expressions, blocks, or function pointers.” wikipedia.

> “A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.” MDN

## Functions are Objects:

The first thing we need to know is that in JavaScript, functions are first-class objects. As such, we can work with them in the same way we work with other objects, like assigning them to variables and passing them as arguments into other functions. This is important, because it’s the latter technique that allows us to extend functionality in our applications.

## Callback Functions

The let us can say a  **callback function** is a function that is passed as an argument to another function, to be “called back” at a later time. A function that accepts other functions as arguments is called a higher-order function, which contains the logic for when the callback function gets executed. It’s the combination of these two that allow us to extend our functionality.

### Examples:
![example](/images/callback-javascript-2.png)

**Example One:** createWelcome is the higher-order function, which accepts two arguments, the second one being the callback. The logWelcomed function is being used to pass in as our callback function. When we execute the createWelcome function (1), notice that we are not appending parentheses to logQuote when we pass it in as an argument. This is because we do not want to execute our callback function right away, we simply want to pass the function definition along to the higher-order function so that it can be executed later.
Also, we need to ensure that if the callback function we pass in expects arguments, that we supply those arguments when executing the callback (2). In the above example, that would be the callback(myMsg); statement, since we know that logWelcome expects a quote to be passed in. other example in MDN: [https://developer.mozilla.org/en-US/docs/Glossary/Callback_function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function).

## Why use Callbacks?
Most of the time we are creating programs and applications that operate in a synchronous manner. In other words, some of our operations are started only after the preceding ones have completed. Often when we request data from other sources, such as an external API, we don’t always know when our data will be served back. In these instances we want to wait for the response, but we don’t always want our entire application grinding to a halt while our data is being fetched. These situations are where callback functions come in handy.
