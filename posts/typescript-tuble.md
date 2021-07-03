---
tags: [TypeScript]
title: Tuples
created: '2021-06-13T18:37:01.616Z'
modified: '2021-06-13T18:40:42.683Z'
---

# Tuples
<p>So far we’ve looked at arrays with all elements of the same type. But, as we know, JavaScript arrays are flexible and can have elements of different types. With TypeScript, we can also define arrays with a fixed sequence of types: </p>

<code lang="js">
let ourTuple: [string, number, string, boolean] = 
    ['Is', 7, 'our favorite number?', false];
</code>
<p>In TypeScript, when an array is typed with elements of specific types, it’s called a tuple. The tuple above (ourTuple) contains the elements: 'Is', 7 , 'our favorite number?' , false and the tuple has a type of [string, number, string, boolean]. Tuple types specify both the lengths and the orders of compatible tuples, and will cause an error if either of these conditions are not met: </p>

<code>
let numbersTuple: [number, number, number] = [1,2,3,4]; 
// Type Error! numbersTuple should only have three elements.
let mixedTuple: [number, string, boolean] = ['hi', 3, true] 
// Type Error! The first elements should be a number,
//the second a string, and the third a boolean. 
</code>

<p>As far as JavaScript is concerned, tuples act just like arrays. They both have .length properties. We can access (or change) the elements of both using [index]. But despite their similarities, tuples and arrays do not have compatible types within TypeScript. Specifically, we can’t assign an array to a tuple variable, even when the elements are of the correct type: </p>

<code>
let tup: [string, string] = ['hi', 'bye'];
let arr: string[] = ['there','there'];
tup = ['there', 'there']; // No Errors.
tup = arr; 
    // Type Error! An array cannot be assigned to a tuple.
</code>
