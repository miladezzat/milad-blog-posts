---
tags: [Redis]
title: Hashes In Redis
author: Milad E. Fahmy
date: '2022-01-23'
summary: Redis Hashes are maps between the string fields and the string values.
---

![redis-sets](/static/redis/hashes.webp)

> Redis Hashes are maps between the string fields and the string values. Hence, they are the perfect data type to represent objects. In Redis, every hash can store up to more than 4 billion field-value pairs. [Read More](https://redis.com/ebook/part-1-getting-started/chapter-1-getting-to-know-redis/1-2-what-redis-data-structures-look-like/1-2-4-hashes-in-redis/)

> In computing, a hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. [Read More](https://en.wikipedia.org/wiki/Hash_table)

## Hashed Commands

1. HMSET
This command is used to store a hash in Redis.
```bash
HMSET key field value field value ...
```
2. HGETALL
This command is used to get all the field value pairs for a given key.
```bash
HGETALL key
```
3. HGET
This command is used to get specific field.
```bahs
HGET key field
```
4. HEXISTS
This command used to check if the field is exits, if it exists will return 1, else it will return 0
```bash
HEXISTS key field
```
5. HDEL
This command is used to delete a specific field at hash
```bash
HDEL key field
```
6. HSETNX
This command is used to update the hash, we can use it to add key-value-pair to exists hash

```bash
HSETNX key field value
```