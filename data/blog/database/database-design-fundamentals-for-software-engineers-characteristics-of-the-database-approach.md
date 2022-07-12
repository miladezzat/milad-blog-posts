---
tags: [Database]
author: Milad E. Fahmy
title: Database Design Fundamentals For Software Engineers | Characteristics of the Database Approach
date: '2022-07-12'
modified: '2022-07-12T10:52:56.755Z'
summary: A database system is self-describing because it not only contains the database itself.
---

# 4 - Characteristics of the Database Approach

**Index**| **Content**
--|---
**1**| [Introduction & File-based system](https://milad-ezzat.vercel.app/blog/database/database-design-fundamentals-for-software-engineers-introduction)
**2**| [What is Database?](https://milad-ezzat.vercel.app/blog/database/database-design-fundamentals-for-software-engineers-what-is-database)
**3**| [Database Management System (DBMS)](https://milad-ezzat.vercel.app/blog/database/database-design-fundamentals-for-software-engineers-database-management-system)
**4**| [Characteristics of the Database Approach](https://milad-ezzat.vercel.app/blog/database/database-design-fundamentals-for-software-engineers-characteristics-of-the-database-approach)
**5**| [Benefits of the Database Approach](https://milad-ezzat.vercel.app/blog/database/database-design-fundamentals-for-software-engineers-benefits-of-using-the-database-approach)

----------------------------------


## What are Characteristics of the Database Approach?

1. **Self-describing nature of a database system**
A database system is self-describing because it not only contains the database itself,
but also the **meta-data**, which defines and describes the data and relationships between tables in the database. This information is stored in a catalog by the DBMS software.

2. **Insulation between program and data**
In the database approach, the data structure is stored in the system catalog and not in the programs. Therefore, one change is all that is needed to change the structure of a file. This insulation between the programs and data is also called
program-data independence.

3. **Support for multiple views of data**
A database supports multiple views of data. A **view** is a subset of the database, which is defined and dedicated for particular users of the system. Multiple users in the system might have different views of the system

4. **Sharing data and multiuser system**
Current database systems are designed for multiple users. That is, they allow many users to access the same database at the same time. This access is achieved through features called **concurrency control strategies** .