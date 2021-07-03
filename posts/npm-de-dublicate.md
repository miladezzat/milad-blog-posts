---
tags: [npm]
author: Milad E. Fahmy
title: 'De Duplicated'
created: '2021-06-27T14:52:45.357Z'
modified: '2021-06-27T14:53:05.665Z'
---

# [De Duplicated](https://www.npmjs.com/package/de_duplicated) [![npm version](https://badge.fury.io/js/de_duplicated.svg)](https://badge.fury.io/js/de_duplicated) [![GitHub forks](https://img.shields.io/github/forks/miladezzat/DE_DUPLICATE)](https://github.com/miladezzat/DE_DUPLICATE/network) [![GitHub issues](https://img.shields.io/github/issues/miladezzat/DE_DUPLICATE)](https://github.com/miladezzat/DE_DUPLICATE/issues) [![GitHub stars](https://img.shields.io/github/stars/miladezzat/DE_DUPLICATE)](https://github.com/miladezzat/DE_DUPLICATE/stargazers) [![Build Status](https://travis-ci.org/miladezzat/DE_DUPLICATE.svg?branch=master)](https://travis-ci.org/miladezzat/DE_DUPLICATE)

This is package  for deleting the duplicated elements in array, there are contain two methods, first method called simpleArray, this method de_duplicated the simple elements just numbers or strings or both, and second method is complexArray the de_duplicated object elements in array  

## Getting Started

download the package in your prject and require it, and use it

### Prerequisites

you should have node.js in your local machine

```
no examples
```

### Installing

open terminale and go to your project directory and write
``` shell
    npm install de_duplicated
```

### How To Use it
After install package

1. Examples for simple array:
```js
//example 1
const DE_Duplicated = require('de_duplicated')

let simpleArray = [2, 5, 8, 2, 2, 8, 5, 2, 3];

let uniqueSimpleArray = DE_Duplicated.simpleArray(simpleArray);

console.log(uniqueSimpleArray);
//result
    //[ 2, 5, 8, 3 ]
```


```js
//example 2
const DE_Duplicated = require('de_duplicated')

let simpleArray = ['john', 'milad', 'Milad', 'john', 'John'];

let uniqueSimpleArray = DE_Duplicated.simpleArray(simpleArray);

console.log(uniqueSimpleArray);
// result
    //[ 'john', 'milad' ]

   // Note that: The simpleArray method case insenstive for string 
```
```js
 //example 3
const DE_Duplicated = require('de_duplicated')

let simpleArray = [1, 2, 1, 2, 5, 8, 8, 5, 'john', 'milad', 'Milad', 'john', 'John'];

let uniqueSimpleArray = DE_Duplicated.simpleArray(simpleArray);

console.log(uniqueSimpleArray);
//result
    //[ 1, 2, 5, 8, 'john', 'milad' ]

    //Note That: The simpleArray method case insenstive for string 
```
2. Examples for complex array
```js
    //example 1
const DE_Duplicated = require('de_duplicated')

let compexArray = [
    { id: 1, name: "Milad", age: 24 },
    { id: 2, name: "Milad", age: 24 },
    { id: 1, name: "Milad", age: 24 },
    { id: 3, name: "Milad", age: 24 },
    { id: 1, name: "Milad", age: 24 },
    { id: 2, name: "Milad", age: 24 },
]

let uniqueCompexArray = DE_Duplicated.complexArray(compexArray, 'id');

console.log(uniqueCompexArray);
// result
   /* [
        { id: 1, name: 'Milad', age: 24 },
        { id: 2, name: 'Milad', age: 24 },
        { id: 3, name: 'Milad', age: 24 }
    ]*/
```
```js
    //example 2
const DE_Duplicated = require('de_duplicated')

let compexArray = [
    { id: 1, name: "Milad", age: 24 },
    { id: 2, name: "John", age: 24 },
    { id: 1, name: "Milad", age: 24 },
    { id: 3, name: "John", age: 24 },
    { id: 1, name: "Milad", age: 24 },
    { id: 2, name: "Milad", age: 24 },
]

let uniqueCompexArray = DE_Duplicated.complexArray(compexArray, 'name');

console.log(uniqueCompexArray);
//result
    //[ { id: 1, name: 'Milad', age: 24 }, { id: 2, name: 'John', age: 24 } ]
```
```js
    //example 3
const DE_Duplicated = require('de_duplicated')

let compexArray = [
    { id: 1, name: "Milad", age: 24 },
    { id: 2, name: "milad", age: 24 },
    { id: 1, name: "Milad", age: 24 },
    { id: 3, name: "milad", age: 24 },
    { id: 1, name: "Milad", age: 24 },
    { id: 2, name: "Milad", age: 24 },
]

let uniqueCompexArray = DE_Duplicated.complexArray(compexArray, 'name');

console.log(uniqueCompexArray);
//resulat
    /*[
    { id: 1, name: 'Milad', age: 24 },
    { id: 2, name: 'milad', age: 24 }
    ]*/

    //Note that : The complexArray method case senstive for string 
```

## Running the tests

### Break down into end to end tests


```
Not now an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [JavaScript](https://developer.mozilla.org/ar/docs/Web/JavaScript)

## Contributing

## Versioning

## Authors

* **Milad E. Fahmy** - *Initial work* - [Milad E. Fahmy](https://github.com/miladezzat/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments


