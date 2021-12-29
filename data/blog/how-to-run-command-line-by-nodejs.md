---
tags: [Nodejs]
author: Milad E. Fahmy
title: How to run command line by nodejs
created: '2021-06-24T19:58:23.750Z'
modified: '2021-06-24T20:02:37.981Z'
---

# How to run command line by nodejs


```js
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function processChild() {
    try {
            const { stdout, stderr } = await exec('ls');
            if(stdout){
              console.log('stdout: ', stdout);
            } 

            if(stderr){
              console.log('stderr:', stderr);
            }            
    } catch (e) {
        console.error(e);
    }
};

processChild();
```

> Note: [https://nodejs.org/api/child_process.html](https://nodejs.org/api/child_process.html) 
