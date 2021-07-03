---
tags: [JavaScript]
author: Milad E. Fahmy
title: Introduction to HTML
created: '2021-06-17T06:24:39.185Z'
modified: '2021-06-17T07:53:31.892Z'
---

# Introduction
HTML is the standard markup language for creating Web pages.

## What is HTML?
  - HTML stands for **Hyper Text Markup Language**
  - HTML is the standard markup language for creating Web pages
  - HTML describes the structure of a Web page    
  - HTML elements tell the browser how to display the content

## A Simple HTML Document

```js
<!DOCTYPE html>
 <html>
  <head>
   <title>Page Title</title>
  </head>
  <body>

   <h1>My First Heading</h1>
   <p>My first paragraph.</p>

  </body>
</html> 
```

## Example Explained
  
  - The `<!DOCTYPE html>`declaration defines that this document is an HTML5 document
  - The  `<html>` element is the root element of an HTML page
  - The `<head>`  element contains meta information about the HTML page
  - The  `<title>`  element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
  - The `<body>` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
  - The `<h1>` element defines a large heading
  - The `<p>` element defines a paragraph

## What is an HTML Element?

An HTML element is defined by a start tag, some content, and an end tag:
`<tagname>Content goes here...</tagname>`

The HTML element is everything from the start tag to the end tag:
`<h1>My First Heading</h1>`
`<p>My first paragraph.</p> `

| Start Tage | Content Tag        | End Tag |
| ---------- | ------------------ | ------- |
| `<h1>`     | My First header    | `</h1>` |
| `<p>`      | My First Paragraph | `</p>`  |
| `<br>`     | none               | none    |

