---
author: Milad E. Fahmy
tags: [javascript]
title: Variables & Variables Naming In JavaScript
created: '2021-06-28T13:44:40.333Z'
modified: '2021-06-28T13:59:27.786Z'
date: '2021-06-28'
---

# Variables & Variables Naming In JavaScript

![header](/images/varaible-javascript-1.jpeg)

## First Let us take about variables in computer science

In computer programming, a variable or scalar is a storage address, It is a symbolic name for (or reference to) information. The variable name is usual way to reference the stored value.

> Remember That: variable in programming may not directly correspond to the concept of variables in maths.

>  ‘Wikipedia’
The value of a computing variable is not necessarily part of an equation or formula as in mathematics. Variables in computer programming are frequently given long names to make them relatively descriptive of their use, whereas variables in mathematics often have terse, one- or two-character names for brevity in transcription and manipulation.

![2](/images/varaible-javascript-2.jpeg)

Compilers and Interpreters have to replace variable’s symbolic names with the actual addresses of the data on memory storage

## Variable Properties

There are 6 properties associated with a variable. The first three are very important as you start to program. The last three are important as you advance and improve your skills (and the complexity of the programs you are creating).

### Memorize These!
1. A Name
2. A Type
3. A Value
4. A Scope
5. A Life Time
6. A Location (in Memory)

## Clarification of Properties

1. A Name
  The name is Symbolic. It represents the “title” of the information that is being stored with the variable. The name is perhaps the most important property to the programmer, because this is how we “access” the variable. Every variable must have a unique name!

2. A Type
  The type represents what “kind” of data is stored with the variable. In C, Java, ActionScript, etc, the type of a variable must be explicitly declared when the name is created. In JavaScript, Matlab , the type of the variable is inferred from the data put into the variable.

3. A Value
A variable, by its very name, changes over time. Thus if the variable is myVar and is assigned the value 21. At another point, myVar may be assigned the value 27.

4. A Scope
Good programs are “divided” into small self contained sections (called functions) much like a good novel is broken into chapters, and a good chapter is broken into paragraphs, etc. A variable that is seen and used in one function is NOT available in another section. This allows us to reuse variable names, such as age. In one function ‘age’ could refer to the age of a student, and in another function ‘age’ could refer to the vintage of a fine wine.
Further this prevents us from “accidentally” changing information that is important to another part of our program.

5. A Life Time
The life time of a variable is strongly related to the scope of the variable. When a program begins, variables “come to life” when the program reaches the line of code where they are “declared”. Variables “die” when the program leaves the “Scope” of the variable.

6. A Location (in Memory)
we don’t have to worry too much about where in the computer hardware the variable is stored. The computer (JavaScript/Matlab/C/Action-script, etc., via the compiler and Interpreter) does this for us.

> Finlay we can think a variable as a box name or title it refers to the content of box.

## Variables in JavaScript:
JavaScript is an one of programming language, so variables in JavaScript like in computer science variables

## Variable name legal and illegal in JavaScript:
* you can’t enclose it in quotation marks.
* The name can’t be a number ot start with number.
* It can’t be any of JavaScript’s keywords (like alert, var, const ,..etc).

### Rules for naming Variables in JavaScript
1. A Variable name can’t contain any space
2. A variable name can contain only letters, numbers, dollar signs, and underscores
3. Though a variable name can’t be any of JavaScript’s keywords, but can contain
like(myVar, myAlert)
4. Capital letters are fine, but be careful. variable names are case sensitive
x is not X, Milad is not milad

> Note best practice for naming use camelCase:
A camelCase name begins in lower case, if there’s more than one word in the name each subsequent word gets an initial cap. Example: userName, firstName, lastName 
Variable naming is the most default thing in programming, it very default to choose right variable names to your coding, so You should make your variable names descriptive 

## JavaScript best practices:
1. Call things by their name — easy, short and readable variable and function names
write short variable name like x,y or data, it is very easy for you, but when you back to code after long or just short time, it is difficult to remember, for what that variable refers to.

2. Avoid globals
Global variables and function names are an incredibly bad idea. The reason is that every JavaScript file included in the page runs in the same scope. If you have global variables or functions in your code, scripts included after yours that contain the same variable and function names will overwrite your variables/functions.

3. Stick to a strict coding style
Browsers are very forgiving when it comes to JavaScript syntax. This should not however be a reason for you to write sloppy code that relies on browsers to make it work. useful tool for check your syntactical quality of your code: JSLint.

4. Comment as much as needed but not more
comments in programming is very good idea and very useful thing if you can use it in right way. if it not descriptive enough that’s bad idea for you, also you write comment for every thing in your code this complex for reading code.

**For more reading:** [https://www.w3.org/wiki/JavaScript_best_practices]( https://www.w3.org/wiki/JavaScript_best_practices)

