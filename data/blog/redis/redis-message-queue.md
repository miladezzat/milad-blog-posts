---
tags: [Redis]
title: Redis Message Queue
author: Milad E. Fahmy
date: '2022-01-17'
summary:  A message queue is a queue of messages sent between applications. It includes a sequence of work objects that are waiting to be processed.
---

![redis-sets](/static/redis/message-queue.png)

> A message queue is a queue of messages sent between applications. It includes a sequence of work objects that are waiting to be processed. ... Another application, called a consumer, connects to the queue and gets the messages to be processed. Messages placed onto the queue are stored until the consumer retrieves them.

> In computer science, message queues and mailboxes are software-engineering components typically used for inter-process communication, or for inter-thread communication within the same process. They use a queue for messaging – the passing of control or of content.

> Modern software applications have moved from being a single monolithic unit to loosely coupled collections of services. While this new architecture brings many benefits, those services still need to interact with each other, creating the need for robust and efficient messaging solutions.
[Read More](https://redis.com/solutions/use-cases/messaging/)


1. Subscribing to a channel
A user can subscribe to a channel using the `SUBSCRIBE` command. This command takes the name of the channel as an argument
```bash
SUBSCRIBE channelName
```
2. Publishing to a channel
A user can publish to a channel using the `PUBLISH` command.
```bash
PUBLISH channel message
```
3. A channel with multiple subscribers
It is possible for different clients to subscribe to the same channel. Whenever a publisher publishes this channel, all the receivers receive the message.

4. Unsubscribing from a channel in Redis
A client can easily unsubscribe from a channel using the `UNSUBSCRIBE` command.

```bash
UNSUBSCRIBE channelName
```
5. Subscribing to a group of channels
If a client wants to subscribe to all the channels starting with a particular character or string, they can use the `PSUBSCRIBE` command.

```bash
PSUBSCRIBE string*
```
6. Unsubscribing from a group of channels
A client can unsubscribe to a group of channels using `PUNSUBSCRIBE` command.
```bash
PUNSUBSCRIBE string*
```
