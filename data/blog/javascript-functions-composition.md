---
tags: [javascript]
author: Milad E. Fahmy
title: JavaScript Functions Composition
created: '2021-06-28T19:17:08.575Z'
modified: '2021-06-28T19:24:15.047Z'
---

# JavaScript Functions Composition

![JavaScript Functions Composition](/images/functions-composition.jpeg)
## First: In mathematics
function composition is an operation that takes two functions f and g and produces a function h such that h(x) = g(f(x)).
In this operation, the function g is applied to the result of applying the function f to x.
That is, the functions f : X → Y and g : Y → Z are composed to yield a function that maps x in X to g(f(x)) in Z.

## Second : In computer science
function composition is an act or mechanism to combine simple functions to build more complicated ones. Like the usual composition of functions in mathematics, the result of each function is passed as the argument of the next, and the result of the last one is the result of the whole.

______________________________________

We can called a composition is about creating small functions and creating bigger and more complete functions with them. Think of a function as a brick, composition is how you would make those bricks work together to build a wall or a house.


> Note: A good function should follow the “DOT” rule: Do One Thing

<q>In functional programming languages, function composition can be naturally expressed as a higher-order function or operator. such as JavaScript </q>

## Well Lets go with Example:
Ok, let’s code something then. Imagine that you are a company that is in charge of manipulating text. You receive a bunch of words, and your customers want them back in a certain way.

> A client comes at you with a text and says:
I want the words shorter than 5 characters to be upper cased.

Good, we create three functions to execute those actions. One function takes the text and return words in lowercase. The second function looks for short words and upper-case them. Finally, the third recreates the text from the array received.

![functions-composition-javascript-1](/images/functions-composition-javascript-1.png)

Now, we create functions that do client need, but the client need use these functions to send the text and we make our functions work:

![functions-composition-javascript-2](/images/functions-composition-javascript-2.png)

Good, the prev code will work nice, but we have lot of manual use of functions, let us to combine auto without need send result of one to other:

![functions-composition-javascript-3](/images/functions-composition-javascript-3.png)

Cool, that’s nice, But: what if we had a function that took all the functions as inputs and just made composition happened by itself? We could call it compose. let’s go to create one function:

![functions-composition-javascript-4](/images/functions-composition-javascript-4.png)

Good, the prev code will work with three or four functions but, what if we had function can combine any number of functions as params:

> Finally, the engineers come up with the compose function:

![functions-composition-javascript-5](/images/functions-composition-javascript-5.png)
