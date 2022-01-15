---
tags: [Redis]
author: Milad E. Fahmy
title: Introduction to redis and Strings in Redis
date: '2022-01-15'
summary: Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker
---

# Redis

> **Redis** is an in-memory data structure store, used as a distributed, in-memory key–value database, cache and message broker, with optional durability. Redis supports different kinds of abstract data structures, such as strings, lists, maps, sets, sorted sets, HyperLogLogs, bitmaps, streams, and spatial indices.

> **Redis** is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker. Redis provides data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes, and streams. Redis has built-in replication, Lua scripting, LRU eviction, transactions, and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster [Read More](https://redis.io/)

## Redis Data types

1. String
2. List
3. Set
4. sored Set
5. Hash

## Storing Strings in Redis: Insertion and Retrieval Commands

1. SET Command
```bash
SET key value
```
2. GET Command
```bash
GET key
```
3. SETEX Command
```bash
SETEX key seconds value
```
4. PSETEX command
```js
PSETEX key milliseconds value
```
5. SETNX Command
```bash
SETNX key value ## command is used if a key is already present, and not update the value
```
6. STRLEN Command
```bash
STRLEN key ## Get the value length of a key
```
7. MSET Command
```bash
MSET key1 value key2 value ## set multiple keys values
```
8. MGET Command
```bash
MGET key1 key2 ## Get multiple values of keys
```

## Storing Strings in Redis: Utility Commands

1. KETS
This get all keys on the database
```bash
KEYS *
```
2. INCR
This increment value of key by one, but the value must be a number, if other it will retunr `(error) ERR value is not an integer or out of range`.
```bash
INCR key
```
3. INCRBY
The same as `INCR` but increase by specific count.
```bash
INCRBY key count
```
4. INCRBYFLOAT
The same as `INCR` but increase by specific float number.
```bash
INCRBYFLOAT key floatValue
```
5. DECR
This for decrease value by one, it must be a number
```bash
DECR key
```
6. DECRBY
The same as `DECR`, but decrease by specific count
```bash
DECRBY key count
```
7. DEL
This for deleting key from database
```js
DEL key
```
8. FLUSHALL
This for deleting all keys from database
```bash
FLUSHALL
```
9. APPEND
This for appending string to key
```bash
APPEND key valueToBeAppended
```