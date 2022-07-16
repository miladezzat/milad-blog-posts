---
tags: [Database]
author: Milad E. Fahmy
title: Database Design Fundamentals For Software Engineers | Data Models
date: '2022-07-16'
modified: '2022-07-16T22:12:00.132Z'
summary: A database model is a type of data model that determines the logical structure of a database.
metaTagImage: /static/images/databases/data-models.png
---

# Data Models


## Introduction to Data Models

![data models](/static/images/databases/data-models.png)

> A database model is a type of data model that determines the logical structure of a database. It fundamentally determines in which manner data can be stored, organized and manipulated. The most popular example of a database model is the relational model, which uses a table-based format.

- Types of Data Models
    1. High-level conceptual data models
        - Entity relationship model
    2. Record-based logical data models
        - hierarchical model
        - network model  
        - relational model 

    3. Physical data models



1. **High-level conceptual data models**

**High-level conceptual data models** provide a way to present data that is similar to how people perceive data. 

> ***High-level conceptual data models*** provide concepts for presenting data in ways that are close to the way people perceive data. A typical example is the entity relationship model, which uses main concepts like entities, attributes and relationships.

- **Entity relationship model**
  An ***entity*** represents a real-world object such as an employee or a project. The entity has ***attributes*** that represent properties such as an employee’s name, address, and birthdate. A ***relationship*** represents an
association among entities.

2. **Record-based logical data models**

> ***Record-based logical data models*** provide concepts users can understand but are not too far from the way data is stored in the computer. Three well-known data models of this type are relational data models, network data models and hierarchical data models. The relational model represents data as relations, or tables.

***Record-based logical data models*** provide concepts users can understand but are still similar to the way data is stored on the computer. Three well-known data models of this type are: **hierarchical**, **network**, and **relational** data models.

- **Hierarchical model**
data is organized into a tree-like structure, implying a **single parent for each record**. This structure mandates that **each child record has only one parent**.

- **Network model**
The **network model** expands upon the hierarchical structure, allowing each record to have multiple parent and child records, forming a generalized graph structure. It was the most popular model before being replaced by the relational model.

- **Relational model**
The ***relational model*** represents data as relations or tables.


3. **Physical data models**

> **A physical data model** is a representation of a data design as implemented, or intended to be implemented, in a database management system. In the lifecycle of a project it typically derives from a logical data model, though it may be reverse-engineered from a given database implementation.

**The physical data model** represents, how data is stored in computer memory?, how it is scattered and ordered in the memory?, and how it would be retrieved from memory?. Basically physical data model represents each table, its columns, and specifications, etc.
