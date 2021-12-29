---
tags: [NPM]
author: Milad E. Fahmy
title: Error Handler E2
created: '2021-06-27T13:00:22.267Z'
modified: '2021-06-27T13:01:17.902Z'
---

# [Error Handler E2](https://www.npmjs.com/package/error-handler-e2)
[![Build Status](https://travis-ci.org/miladezzat/error-handler-e2.svg?branch=master)](https://travis-ci.org/miladezzat/error-handler-e2)
[![npm version](https://badge.fury.io/js/error-handler-e2.svg)](https://badge.fury.io/js/error-handler-e2)&nbsp;

This package will help you to handle errors, 
and logging errors with nice style for debugging, and you can use handleHttpError 
middleware

## Sponsor This Project
you can [support us](https://ko-fi.com/miladefahmy) with a little, but this 
become more for us.

## Getting Start 
You need download package in your project and import any function you need

## Installing && Using
```
    npm install npm i error-handler-e2
    //or
    yarn add error-handler-e2

    const ErrorHandlerrE2 = require("error-handler-e2");
    //or
    import ErrorHandlerrE2 from "error-handler-e2";
```

## Examples
### Using Functions

1. create custom error
```js
    const { createCustomError } = require("error-handler-e2").functions; 

    //params createCustomError({message: String, error: ErrorObj, [options]})
    const myError = createCustomError({
      message = "Testing Error message", 
      error = {},       
    });

```
2. create Http Error
```js
    const { createHttpError } = require("error-handler-e2").functions;

    //params createHttpError({message: String, statusCode: Number, [options]})
    const httpError = createHttpError({
         message = "This is message",
        statusCode = 404,
    })
```
3. Logging Errors
```js
    const { createCustomError,createHttpError ,logErrors } 
            = require("error-handler-e2").functions; 

    //params createHttpError({message: String, statusCode: Number, [options]})
    const httpError = createHttpError({
         message = "This is message",
        statusCode = 404,
    })

    //params createCustomError({message: String, error: ErrorObj, [options]})
    const myError = createCustomError({
      message = "Testing Error message", 
      error = {},       
    });

    logErrors({
        error: httpError,
        file: "index.js",
        path: `${__dirname}/${__filename}`,
    });
    logErrors({
        error: myError,
        file: "index.js",
        path: `${__dirname}/${__filename}`,
    });

```

### Using Middlewares
```js
    const { handleHttpError } = require('error-handler-e2).middlwares;
    const { createHttpError } = require('error-handler-e2).functions;

    //params createHttpError({message: String, statusCode: Number, [options]})
    const httpError = createHttpError({
         message = "This is message",
        statusCode = 404,
    });

    //you need throw httpError, when catch error
    throw httpError;

    //after your routes, using handle error middleware
    app.use(handleHttpError());

```

## Authors 
[Milad](<https://github.com/miladezzat>)
