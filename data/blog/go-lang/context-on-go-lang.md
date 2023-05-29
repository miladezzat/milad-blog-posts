---
tags: [GoLang]
author: Milad E. Fahmy
title: Context in GoLang
date: '2023-05-29'
modified: '2023-05-29T11:22:04.023Z'
summary: In Go, the context package provides a powerful mechanism for managing the lifecycle of operations and propagating cancellation signals across goroutine.
---


# Context in GoLang

![](/static/images/go/context-go-lang.webp)


## What is Context?

In Go, the context package provides a powerful mechanism for managing the lifecycle of operations and **propagating cancellation signals across goroutine**. It allows you to set deadlines, timeouts, and cancellation signals, helping you control the execution of your code and handle resource cleanup gracefully. There are three commonly used functions in the context package for managing cancellation: WithCancel, WithTimeout, and WithDeadline.

> **1.WithCancel:** WithCancel returns a derived Context and a CancelFunc. You can call the CancelFunc to cancel the Context manually. This is useful when you want to cancel an operation explicitly or based on some condition.
>
> **2.WithTimeout:** WithTimeout returns a derived Context that is automatically canceled after a specified timeout duration. This is useful when you want to limit the execution time of an operation
>
> **3.WithDeadline:** WithDeadline returns a derived Context that is automatically canceled at a specified deadline time. This is useful when you want to set an absolute deadline for an operation.


withTimeout and withDeadline are very much similar. infact, withtimeout used deadline internally.

Let’s, jump into few examples:-

1. With Cancel:-

```go
func. main(){
 ctx, cancelFunc := context.WithCancel(context.Background())

 go stopTheTaskIfNotInterested(ctx)

// cancelling the context 
cancelFunc()
}

func stopTheTaskIfNotInterested(ctx context.Context) {

 for {

  select {

  case <-ctx.Done():

   fmt.Println("exiting the task... because parent not interested..!!")
   return

  }
 }
}
```

2. with Timeout:-

```go
func. main(){
 ctx, cancelFunc := context.WithTimeout(ctx, time.Second*1)

 go stopTheTaskIfNotCompletedWithInGivenTime(ctx)

// cancelling the context 
defer func() {
  cancelFunc()

 }()

}


func stopTheTaskIfNotCompletedWithInGivenTime(ctx context.Context) {
 
for {

  select {

  case <-ctx.Done():

   fmt.Println("exiting the task. because i am not able to complete with in time..!!!")
   return

  }
 }
}
```

3. withDeadLine:-

```go
func. main(){
 ctx, cancelFunc := context.WithDeadline(context.Background(), time.Now().Add(time.Second*2))

 go stopTheTaskIfNotCompletedWithInGivenTime(ctx)

// cancelling the context 
defer func() {
  cancelFunc()

 }()

}

func stopTheTaskIfNotCompletedWithInGivenTime(ctx context.Context) {
 
for {

  select {

  case <-ctx.Done():

   fmt.Println("exiting the task. because i am not able to complete with in time..!!!")
   return

  }
 }
}
```

***few general use cases of context:-***

1. Graceful Shutdown of servers (when you want to drain all the request before existing the application)
2. Managing Go routine Lifecycle(when you want to cancel , set timeouts to long running tasks)
3. Tracing
4. Cancellation and Timeout
5. Passing request scoped data
6. Managing request scoped data