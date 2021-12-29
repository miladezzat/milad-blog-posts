---
tags: [Nodejs]
author: Milad E. Fahmy
title: Asymmetric Encryption using Nodejs Crypto module
created: '2021-07-18T11:34:50.364Z'
modified: '2021-07-18T11:35:18.146Z'
date: '2021-07-18'
---

# Asymmetric Encryption using Nodejs Crypto module

A library is not necessary. Enter [crypto](https://nodejs.org/api/crypto.html).

Here's  little module you could use to encrypt/decrypt strings with RSA keys:

```js
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");

const encryptStringWithRsaPublicKey = function (toEncrypt, relativeOrAbsolutePathToPublicKey) {
  const absolutePath = path.resolve(relativeOrAbsolutePathToPublicKey);

  const publicKey = fs.readFileSync(absolutePath, "utf8");
  const buffer = Buffer.from(toEncrypt);
  const encrypted = crypto.publicEncrypt(publicKey, buffer);

  return encrypted.toString("base64");
};

const decryptStringWithRsaPrivateKey = function (toDecrypt, relativeOrAbsolutePathtoPrivateKey) {
  const absolutePath = path.resolve(relativeOrAbsolutePathtoPrivateKey);

  const privateKey = fs.readFileSync(absolutePath, "utf8");
  const buffer = Buffer.from(toDecrypt, "base64");
  const decrypted = crypto.privateDecrypt(privateKey, buffer);

  return decrypted.toString("utf8");
};

module.exports = {
  encryptStringWithRsaPublicKey: encryptStringWithRsaPublicKey,
  decryptStringWithRsaPrivateKey: decryptStringWithRsaPrivateKey
}
```

I would recommend not using synchronous fs methods where possible, and you could use [promises](https://en.wikipedia.org/wiki/Futures_and_promises) to make this better, but for simple use cases this is the approach that I have seen work and would take.