---
tags: [Database]
author: Milad E. Fahmy
title: Database Design Fundamentals For Software Engineers | Introduction & File-based system
date: '2022-07-12'
modified: '2022-07-12T10:53:35.026Z'
summary: A database is an organized collection of structured information, or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS).
---

# 1 - Database Design Fundamentals For Software Engineers

You use database at everything you use, for example facebook, youtube, etc.

**Index**| **Content**
--|---
**1**| [Introduction & File-based system](https://milad-ezzat.vercel.app/blog/database/database-design-fundamentals-for-software-engineers-introduction)
**2**| [What is Database?](https://milad-ezzat.vercel.app/blog/database/database-design-fundamentals-for-software-engineers-what-is-database)
**3**| [Database Management System (DBMS)](https://milad-ezzat.vercel.app/blog/database/database-design-fundamentals-for-software-engineers-database-management-system)
**4**| [Characteristics of the Database Approach](https://milad-ezzat.vercel.app/blog/database/database-design-fundamentals-for-software-engineers-characteristics-of-the-database-approach)
**5**| [Benefits of the Database Approach](https://milad-ezzat.vercel.app/blog/database/database-design-fundamentals-for-software-engineers-benefits-of-using-the-database-approach)

----------------------------------

## 1 - Introduction & File-based system

### Before Database systems

First, from some decades we hadn't know the database, but we used something called **File-base system**

> ***File-Base System*** is a type of software that allows users to access and organize small groups of data. that's mean if you want to save data you can use the files, and the organization and know the location filed depends on you


### Advantage of **File-Based System**

1. **Backup**
    It is possible to take faster and automatic back-up of database stored in files of computer-based systems.
    computer systems provide functionalities to serve this purpose.it is also possible to develop specific application program for this purpose.

2. **Data Retrieval**
    Computer-based systems provide enhanced data retrieval techniques to retrieve data stored in files in easy and efficient way.

3. **Editing**
    It is easy to edit any information stored in computers in form of files.
    Specific application programs or editing software can be used for this purpose.

5. **Remote Access**
    In computer-based systems,it is possible to access data remotely.
    so,to access data it is not necessary for a user to remain present at location where these data are kept.

6. **Sharing**
    Data stored in files of computer-based systems ca be shared among multiple users at a same time.


### Disadvantage of **File-Based System**

1. **Data redundancy**
    A situation that occurs in a database when a field needs to be updated in more than one copy

2. **Data inconsistency**
    A situation where various copies of the same data are conflicting, wastes storage space and duplicates effort.

3. **Difficult data access**
    A situation where the user must be know the location of every files

4. **Security Problems**
    A situation, if one user have access to view his data, he can update it without **Authorization**

5. **Difficult concurrent access**
    To access some data on some file, you must know the file location


