---
tags: [Nodejs]
author: Milad E. Fahmy
title: Naming Conventions
created: '2021-07-14T14:01:05.018Z'
modified: '2021-07-14T14:36:26.739Z'
---

# Best Way to Nodejs Project 📚

## Naming Conventions 

1.  Folders (Directors) names `(this-is-kebab-case)`
    * lowercase and separate words by `(-)`
    * should contain an `index` to `export` all files from it
    * Should contain letters only
  
2. Files names `(this-is-kebab-case)`
   * lowercase and separate words by `(-)`
   * if the file contains a single function make its name the function name
   * if the file contains class make the file name as class name
   * Should contain letters only

3. Constant names `(THIS_IS_SNAKE_CASE)`
   * Should be all upper case and separate words by `( _ )`  
   * Should contain letters only

4. Variables names `(camelCase)`
   * Should be camelCase
   * Should contain letters only
  
5. Methods (Functions) names `(camelCase)`
   * Should be camelCase
   * should begin with a verb 
   * should contain letters only
  
6. Classes names `(PascalCase)`
    * Should as in `PascalCase` start with an uppercase letter with every word like `UserClass`
    * Should be a noun
    * Should contain letters only