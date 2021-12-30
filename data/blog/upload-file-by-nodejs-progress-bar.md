---
tags: [Nodejs]
title: File upload with progress bar (nodejs)
created: '2021-10-23T08:30:29.755Z'
modified: '2021-10-23T09:39:25.328Z'
date: '2021-10-23'
summary: In the tutorial  we will learning how to upload files by nodejs & html without any third party package
---

# File upload with progress bar (nodejs)

![file-uploader](/images/file-uploader.png)
we will create a file upload service by using pure nodejs and html without any library.

1. [Create backend for uploading image](#create-backend-by-nodejs)
2. [Create frontend](#create-frontend)


## Create backend by nodejs

### **Create nodejs server**

**Note** create empty file called `index.js` and write the following

```js
const http = require('http');

const httpServer = http.createServer();

const port = 3000;

httpServer.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

Explain the code:
1. `const http = require('http');` the `http` is the built in node module, if you want to learn more about http you can visit the origin website https://nodejs.org/api/http.html or https://nodejs.dev/learn/the-nodejs-http-module

2. `const httpServer = http.createServer();` the `http` contains method called `createServer` that we can use it to create server, it is a method turns your computer into an HTTP server

3. `const port = 3000;`  this is the port that the server listen ont it

4. `httpServer.listen`, The `http.server.listen()` is an inbuilt application programming interface of class Server within the http module which is used to start the server from accepting new connections.

**Syntax**
```js
const server.listen(options[, callback])
```
**Parameters**: This method accepts the following two parameters:
* option: It can be the port, host, path, backlog, exclusive, readableAll, writableAll, ipv6Only, etc depending upon user need.
* callback: It is an optional parameter, it is the callback function that is passed as a parameter.

**Return Value**: This method returns nothing but a callback function.

### **Service Html page**

1. **Firstly:** listen on the coming requests
```js
httpServer.on('request', (req, res) => {});
```
**Syntax:**
```
httpServer.on(string, callback)
```

**Example** 
```js
 // serve the index.html file
  if (req.url === '/') {
    res.writeHead(200, { 'Content-type': 'text/html' });

    return res.end(fs.readFileSync('./index.html'));
  }
```

2. **Second:** create endpoint to upload the file
```js
// upload file and response with its url
  if (req.url === '/upload') {

    if (req.headers['content-type'] === 'application/json' && req.headers['done'] === 'true') {
      res.setHeader('Content-Type', 'application/json');

      return res.end(JSON.stringify({ url: `${req.headers.host}/public/${req.headers['file-name']}` }));
    }

    const fileName = req.headers['file-name'];

    req.on('data', (chunk) => {
      fs.appendFileSync(__dirname + '/public/' + fileName, chunk)
    });

    res.end('uploaded');
  }
```

***Explain the code***
1. `if (req.url === '/upload')` check the `req.url` is `/upload`;

2. this code for check if the file uploaded, and response with the file `url`
```js

    if (req.headers['content-type'] === 'application/json' && req.headers['done'] === 'true') {
      res.setHeader('Content-Type', 'application/json');

      return res.end(JSON.stringify({ url: `${req.headers.host}/public/${req.headers['file-name']}` }));
    }
```

3. `const fileName = req.headers['file-name'];` this line, extract the file-name for request headers
4. This code listen on the data uploaded via request and append it to file name, at the `pubilc` folder
```js
 req.on('data', (chunk) => {
      fs.appendFileSync(__dirname + '/public/' + fileName, chunk)
    });
```

5. `res.end('uploaded')`, the line end the response


### **Read file uploaded**

```js
const mime = { // this the files uploaded types
  html: 'text/html',
  txt: 'text/plain',
  css: 'text/css',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  js: 'application/javascript',
  json: 'application/json',
  mp4: 'video/mp4',
};

  // read file uploaded
  const fileRegex = new RegExp(`^/public/.*`, 'i');
  if (fileRegex.test(req.url)) {
    try {
      const fileExtension = path.extname(`${decodeURI(req.url)}`);
      const type = mime[path.extname(fileExtension).slice(1)] || 'text/plain';
      const s = fs.createReadStream(`${decodeURI(req.url).replace('/', '')}`);

      res.writeHead(200, { 'Content-type': type });

      s.pipe(res);
    } catch (error) {
      return res.end('no file');
    }
  }
```
1. `const fileRegex = new RegExp(^/public/.*, 'i');` create regex expression to check the coming url request is file uploaded url


2. `if (fileRegex.test(req.url)) ` check if the url is file uploaded url
3. `const type = mime[path.extname(fileExtension).slice(1)] || 'text/plain';`, get the file uploaded type
4.  `const s = fs.createReadStream(${decodeURI(req.url).replace('/', '')}`);` create a read stream, for more information about stream in nodejs visit [https://nodejs.org/en/knowledge/advanced/streams/how-to-use-fs-create-read-stream/](https://nodejs.org/en/knowledge/advanced/streams/how-to-use-fs-create-read-stream/)
5. `s.pipe(res);` response by file using pipe, The `readable.pipe()` method in a Readable Stream is used to attach a Writable stream to the readable stream so that it consequently switches into flowing mode and then pushes all the data that it has to the attached Writable.


## Create Frontend

1. Create empty html page called `index` at the root folder, and write the following
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>File uploader</title>
</head>
<body>
  
</body>
</html>
```

2. In the body write the following

```html
  <h1>My file uploader</h1> // this is just header

  File: <input type='file' id='f'> // this is the input, that we used for uploading files
  <button id='btnUpload'>Read & Upload</button> // just button
  <div id='divOutput'>
    // the output of uploading display here, progress bar 
  </div>

  <div id="url"></div> // the url of the file uploaded
```

3. At the end of the body, create `script` tag and write the following code
```js
    const btnUpload = document.getElementById("btnUpload"); // get the button upload
    const divOutput = document.getElementById("divOutput"); // get the output file
    const f = document.getElementById("f"); // get the file input
```
4. We will use the `FileReader` object to read the files by browsers as chunks from more information about `FileReader` you can visit [https://developer.mozilla.org/en-US/docs/Web/API/FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)

5. `const fileReader = new FileReader();` create instance for filereader
6. `const theFile = f.files[0];` get the file 
7. `fileReader.onload`, this method listen on load file
8. calculate the number of chunks of file, ` const chunkCount = Math.floor((ev.target.result.byteLength / (1024 * 1024)) * 0.5) + 1;`
9. `const CHUNK_SIZE = ev.target.result.byteLength / chunkCount;` chunk size
10. `const fileName = uuid() + '-' + theFile.name;` create unique file name for uploaded file
11. uuid, this is a method to create unique id for file,
```js
function uuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
        function (c) {
          let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        }) + '-' + Date.now().toString(32);
    }
```

13. Upload the file chunks and display the progress bar

```js
for (let chunkId = 0; chunkId < chunkCount + 1; chunkId++) {

          const chunk = ev.target.result.slice(chunkId * CHUNK_SIZE, chunkId * CHUNK_SIZE + CHUNK_SIZE);

          await fetch("http://localhost:3000/upload", {
            "method": "POST",
            "headers": {
              "content-type": "application/octet-stream",
              "content-length": chunk.length,
              "file-name": fileName
            },
            "body": chunk
          });

          divOutput.innerHTML = `
          <div id="progressbar">
            <div style ="background-color: orange; width: ${Math.floor(chunkId * CHUNK_SIZE * 100 / ev.target.result.byteLength, 0)}%; height: 20px;border-radius: 10px;">
              ${Math.floor(chunkId * CHUNK_SIZE * 100 / ev.target.result.byteLength, 0)}%
            </div>
          </div>
          `;
        }
```

14.  After finished the upload file, we will send the `done` uploaded to the server and display the file uploaded url
```js
 const response = await fetch("http://localhost:3000/upload", {
          "method": "POST",

          "headers": {
            "content-type": "application/json",
            "file-name": fileName,
            done: true,
          },

          "body": JSON.stringify({ "done": true }),
        });

        const data = await response.json();
        document.getElementById('url').innerHTML = `<a href=${data.url}> ${data.url} </a>`;
```
15. `fileReader.readAsArrayBuffer(theFile);` read the file as buffer

for the source code on github [https://github.com/miladezzat/file-uploader-with-progress-bar](https://github.com/miladezzat/file-uploader-with-progress-bar)
