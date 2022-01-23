---
tags: [Redis]
title: Sets In Redis
author: Milad E. Fahmy
date: '2022-01-17'
summary: Redis internally uses a hash table to store the elements as a Set.
---

![redis-sets](/static/redis/sets-redis.png)

> In mathematics, a set is a collection of elements. The elements that make up a set can be any kind of mathematical objects: numbers, symbols, points in space, lines, other geometrical shapes, variables, or even other sets. The set with no element is the empty set; a set with a single element is a singleton.

we looked at storing lists of elements in Redis. The problem with a list is that it allows duplicate elements. If we need to add unique elements, we can use a Set instead of a List.

Redis internally uses a hash table to store the elements as a Set. The image below depicts how elements are stored in a Set. There is no particular order. The elements are stored randomly, and repetition is not allowed.


## Insertion Commands

1. SADD
This command is used to add members to set
```bash
SADD key members...
```

2. SMEMBERS
This command is used to view all members in the set
```bash
SMEMBERS key
```
3. SISMEMBER
This command is used to check if the member is exists, return `1` if exits, and `0` if not exists
```
SISMEMBER member
```
4. SCARD
This command is used to get count of members in the set
```bash
SCARD key
```
5. SDIFF
This command is used to get the difference between two sets
```bash
DIFF key1 key2
```

## Modification Commands

1. SUNION
This command is used to to find the union of two sets or more
```bash
SUNION key1 key2 key3 ...
```
2. SREM
This command is used to remove member or more from set
```bash
SREM key member1 member2 ...
```
3. SPOP
This command is used to remove one or more random members from the set
```
SPOP key
```
4. SMOVE
This command is used to move member from one set to another.

```bash
SMOVE source dest member
```

You can read more about Redis sets at [the official website](https://redis.io/commands/set)
