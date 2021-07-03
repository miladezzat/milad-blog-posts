---
tags: [TypeScript]
author: Milad E. Fahmy
title: Spread Syntax
created: '2021-06-13T20:08:31.898Z'
modified: '2021-06-13T20:16:19.399Z'
---

# Spread Syntax

<p>Like the finest wines and cheeses, TypeScript’s tuples pair beautifully with JavaScript’s spread syntax. This is most useful for function calls that use lots of arguments, like this:</p>

```ts
function gpsNavigate(startLatitudeDegrees:number, startLatitudeMinutes:number, startNorthOrSouth:string, startLongitudeDegrees: number, startLongitudeMinutes: number, startEastOrWest:string, endLatitudeDegrees:number, endLatitudeMinutes:number , endNorthOrSouth:string, endLongitudeDegrees: number, endLongitudeMinutes: number,  endEastOrWest:string) {
  /* navigation subroutine here */
}
```

The function call `gpsNavigate(40, 43.2, 'N', 73, 59.8, 'W', 25, 0, 'N', 71, 0, 'W')` calculates a route from the Codecademy offices in New York City (40 degrees 43.2 minutes north, 73 degrees 59.8 minutes west) to selected coordinates in the Bermuda Triangle. We all agree that this function call is awkward to read.

Instead, we can use tuple variables that represent the starting and ending coordinates:
```ts
let c-odecademyCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: [number, number, string, number, number, string] = [25, 0 , 'N' , 71, 0, 'W'];
```

These tuple type annotations guarantee that the types of the elements will be valid function parameters for gpsNavigate().

Now, we use JavaScript’s spread syntax to write a very readable function call:

```ts
gpsNavigate(...codecademyCoordinates, ...bermudaTCoordinates);
// And by the way, this makes the return trip really convenient to compute too:
gpsNavigate(...bermudaTCoordinates, ...codecademyCoordinates);
// If there is a return trip .
```