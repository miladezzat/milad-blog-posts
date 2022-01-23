---
tags: [Redis]
title: Sorted Set In Redis
author: Milad E. Fahmy
date: '2022-01-23'
summary: Redis Sorted Sets are, similarly to Redis Sets, non repeating collections of Strings. The difference is that every member of a Sorted Set is associated with a score
---

![redis-sets](/static/redis/sorted-set.jpg)

In mathematics, especially order theory, a partially ordered set formalizes and generalizes the intuitive concept of an ordering, sequencing, or arrangement of the elements of a set

> Redis Sorted Sets are, similarly to Redis Sets, non repeating collections of Strings. The difference is that every member of a Sorted Set is associated with a score, that is used keep the Sorted Set in order, from the smallest to the greatest score. While members are unique, scores may be repeated. [Read More](https://redis.io/commands/ZADD)


## Insertion Commands

1. ZADD
This command is used to add elements to the sorted set in the Redis database.
```bash
ZADD key score value score value ...
```

2. ZRANGE
This command is for fetching all the elements for a particular key. If we need to fetch all the elements in the sorted set, we can provide `-1` in the end field as shown below.

```bash
ZRANGE key start end 
```

3. ZRANGEBYSCORE
This command is for fetching the elements in a particular range of scores.

```bash
ZRANGEBYSCORE key startScore endScore
```

4. ZCARD
To get the number of elements in the sorted set, `ZCARD` is used.

```bash
ZCARD key 
```

5. ZCOUNT
This command is used to find the number of elements within a certain range of scores.
```bash
ZCOUNT key minScore maxScore
```

## Utility Commands

1. ZREM
This command is used to remove a member from the sorted set.
```bash
ZREM key value
```

2. ZRANK
This command is used to find the index of an element in the sorted set. If the rank of an element is 0, then its score is the lowest

```bash
ZRANK key member
```

3. ZREVRANK
This command is used to find the rank from the reverse. If the rank of an element is 0, then the score is the highest.

```bash
ZREVRANK key member
```
4. ZSCORE 
This command is used to get the score of an element.
```bash
ZSCORE key member
```



