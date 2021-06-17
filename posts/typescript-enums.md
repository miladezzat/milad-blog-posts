---
tags: [TypeScript]
title: TypeScript Enums
created: '2021-06-17T18:16:18.743Z'
modified: '2021-06-17T18:24:28.696Z'
---

# Enums

<p>Our first example of a complex type is also one of the most useful: enums. We use enums when we’d like to enumerate all the possible values that a variable could have. This is in contrast to most of the other types we have studied. A variable of the string type can have any string as a value; there are infinitely many possible strings, and it would be impossible to list them all. Similarly, a variable of the boolean[] type can have any array of booleans as its value; again, the possibilities are infinite. </p>

```ts
enum Direction {
  North,
  South,
  East,
  West
}
```

There are many situations when we might want to limit the possible values of a variable. For example, the code above defines the `enum Direction`, representing four compass directions: `Direction.North`, `Direction.South`, `Direction.East`, and `Direction.West`. Any other values, like Direction.Southeast, are not allowed. Check out the example below: 

```ts
let whichWayToArcticOcean: Direction;
whichWayToArcticOcean = Direction.North; // No type error.
whichWayToArcticOcean = Direction.Southeast; // Type error: Southeast is not a valid value for the Direction enum.
whichWayToArcticOcean = West; // Wrong syntax, we must use Direction.West instead. 
```
As shown above, an enum type can be used in a type annotation like any other type.

Under the hood, TypeScript processes these kinds of `enum` types using numbers. Enum values are assigned a numerical value according to their listed order. The first value is assigned a number of 0, the second a number of 1, and onwards

For example, if we set whichWayToArticOcean = Direction.North, then whichWayToArticOcean == 0 evaluates to true. Furthermore, we can reassign whichWayToArticOcean to a number value, like whichWayToArticOcean = 2, and it does not raise a type error. This is because Direction.North, Direction.South, Direction.East, and Direction.West are equal to 0, 1, 2, and 3, respectively.

We can change the starting number, writing something like:

```ts
enum Direction {
  North = 7,
  South,
  East,
  West
}
```

Here, Direction.North, Direction.South, Direction.East, and Direction.West are equal to 7, 8, 9, and 10, respectively.

We can also specify all numbers separately, if needed: 
```ts
enum Direction {
  North = 8,
  South = 2,
  East = 6,
  West = 4
}
```
