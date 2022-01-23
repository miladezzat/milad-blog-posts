---
tags: [Redis]
title: Storing Lists in Redis
author: Milad E. Fahmy
date: '2022-01-16'
summary: The Redis database internally stores List as a linked list. This linked list has a `head` and `tail`
---

## Insertion Commands

> The Redis database internally stores List as a linked list. This linked list has a `head` and `tail`. [Read More](https://www.programiz.com/dsa/linked-list)

> In computer science, a linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence.

## Insertion List Command
1. LPUSH
This command is ued for inserting data from the `head` of array.
```bash
LPUHS key values...
```
2. LRANGE
This command is used to get the elments from the are between range, if you want to get all elements in the array you can run this `LRANGE key 0 -1`

```bash
LRANGE key start end
```
3. LPOP
This commad is used to remove one element from the `head`
```bash
LPOP key
```
4. RPUSH
This command is used to insert data from the `tail`
```bash
RPUSH key values...
```
5. RPOP
This commad is used to remove elements from the `tail`


## Modification Commands

1. LLEN 
This command is used to get the length of the list
```bash
LLEN key
```
2. LSET
This command is used to update the value at a given index
```bash
LSET key index value
```
3. LINDEX
This command is used to find the element at a particular index in the list.
```bash
LINDEX key index
```
4. LPUSHX
This command is used to insert elemnt at a head
```
LPUHSX key value
```
5. LINSERT 
This command is used to inset element at specific place 
```bash
LINSERT key before/after pivot value
```
The pivot is the value before which we need to insert the number.



