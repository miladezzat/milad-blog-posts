---
tags: [JavaScript]
title: Create uuid (unique id)
created: '2021-06-12T17:16:26.012Z'
modified: '2021-06-12T17:27:32.045Z'
---

# Create uuid (unique id)

<p>If you want to create unique id by javascript that's 
very easy there are many ways to do this: </p>

## First One 
<p>This function running in node and browers</p>

```js
function uuid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, 
        function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
     })+'-' + Date.now().toString(32);
}
// const id= uuid();
// console.log(`id: ${id}, with length: ${id.length}`); 
// id: 1dad2eff-e29b-4540-85f7-6b99b19de051-1f80k5mu6, with length: 46
```
____________
## Second One 
<p> This function worked only in nodejs </p>

```js
function uuid2() {
    let os = require('os');
    let faces = os.networkInterfaces();    
    let key = Object.keys(faces)[1];
    let net = faces[key];
    let mac = net[1].mac;
    mac = mac.replace(/:/g,"");    
    let lastPart =  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
        let r = Math.random() * 16 | 0, v = char == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(32)
    }) + '-' + Date.now().toString(32)
    return `${mac}-${lastPart}`
}

// const id= uuid2();
// console.log(`id: ${id}, with length: ${id.length}`);
// id: 34cff613d4c2-256c8026-8ecd-46f4-8a8b-39db67017301-1f80k282m, with length: 59
```
