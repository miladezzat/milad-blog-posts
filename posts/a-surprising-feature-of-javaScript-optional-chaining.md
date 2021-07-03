---
tags: [javascript]
author: Milad E. Fahmy
title: A surprising feature of JavaScript optional chaining
created: '2021-06-27T16:51:28.742Z'
modified: '2021-06-27T16:58:40.514Z'
---

# A surprising feature of JavaScript optional chaining

In 2020 JavaScript gained a new feature – optional chaining. It solves a problem we've had ... forever. With many workarounds and standard solutions over the years.

![a-surprising-feature-of-javaScript-optional-chaining](/images/a-surprising-feature-of-javaScript-optional-chaining.png)

## The problem optional chaining solves

You get an object like this:

```js
const object = {
  greet: "hai",
  deepProp: {
    greet: "hello",
    deeperProp: {
      greet: "ohai",
    },
  },
}
```

JSON response from an API or reading from a database. Perhaps a blob you've built up on the frontend.

How do you access the 3rd level `greet`, if `object`, `deepProp`, and `deeperProp` might be undefined?

You could rely on JavaScript's evaluation semantics. Last value from expression is returned.

```js
const greeting =
  object &&
  object.deepProp &&
  object.deepProp.deeperProp &&
  object.deepProp.deeperProp.greet
```

Confusing for newbies, annoying to write, easy to get wrong. Exploding complexity to boot.

A clearer way to write that are conditionals:
```js
let greeting = undefined
if (object) {
  if (object.deepProp) {
    if (object.deepProp.deeperProp) {
      greeting = object.deepProp.deeperProp
    }
  }
}
```

Clearer, more verbose, nobody writes this in production code. Feels weird to use conditionals for assignment. 🤷

Another common approach is to use a library like Lodash:

```js
const greeting = _.get(object, "deepProp.deeperProp.greet")
```

Personally not a fan. Feels unnecessary.

## Use optional chaining

With [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) you can do this natively:
```js
const greeting = object?.deepProp?.deeperProp?.greet
```
😍

You've probably seen that before. Everyone's been very excited after wishing this existed for 10+ years.

But you might've missed that the operator is ?., not ?. This is important because you can optionally chain anything 🤯

Function calls:

```js
object?.deepProp?.function?.(args);
```

Array access:
```js
object?.deepProp?.deepArray?.[5];
```

