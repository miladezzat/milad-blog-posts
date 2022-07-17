---
tags: [Database]
author: Milad E. Fahmy
title: Database Design Fundamentals For Software Engineers | Schemas and Instances
date: '2022-07-17'
modified: '2022-07-17T08:04:52.900Z'
summary: The data which is stored in the database at a particular moment of time is called an instance of the database
metaTagImage: /static/images/databases/datbase-schema-and-instance.jpg
---


# Schemas and Instances

![database schema and instance](/static/images/databases/datbase-schema-and-instance.jpg)

> The data which is stored in the database at a particular moment of time is called an **instance of the database**. The overall design of a database is called schema. **A database schema** is the skeleton structure of the database.

1. **Database schema**
2. **Database instance**


## **Database schema**

![database schema and instance](/static/images/databases/database-schema.png)

A **schema** is the blueprint of a database. The names of tables, columns of each table, datatype, functions, and other objects are included in the schema. We use the **schema diagram** to display the schema of a database.

> Note: It is important to note that the **schema diagram** is not the same thing as the **schema**.

> Note: This schema modification or alteration is known as **schema evolution**.

## **Database instance**

![database schema and instance](/static/images/databases/database-instance.gif)

An instance is the information collected in a database at some specific moment in time, also known as the
**database state**.

> A database instance is a set of memory structures that manage database files. A database is a set of physical files on disk created by the CREATE DATABASE statement. The instance manages its associated data and serves the users of the database.

