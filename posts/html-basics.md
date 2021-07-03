---
tags: [html]
author: Milad E. Fahmy
title: HTML Basic
created: '2021-06-20T15:24:24.609Z'
modified: '2021-06-20T15:55:28.570Z'
---

# HTML Basic

<p>In this chapter we will show some basic HTML examples.</p>
<p>Don't worry if I use tags you have not learned about yet.</p>

## HTML Documents

<p>All HTML documents must start with a document type declaration:  

```html
<!DOCTYPE html>
``` 
</p>

<p>The HTML document itself begins with:   
 
 ```html
 <html> and ends with </html>.
 ```
</p>
<p>The visible part of the HTML document is between:

```html 
<body> and </body>. 
``` 
</p>

## Example 

```html
 <!DOCTYPE html>
    <html>
    <body>
        <h1>My First Heading</h1>
        <p>My first paragraph.</p>
    </body>
</html> 
```

#### The <!DOCTYPE> Declaration

The <strong> `<!DOCTYPE>` </strong> declaration represents the document type, and helps browsers to display web pages correctly.
<p>It must only appear once, at the top of the page (before any HTML tags).</p>

The <code> `<!DOCTYPE>` </code> declaration is not case sensitive.
The <code> `<!DOCTYPE>` </code> declaration for HTML5 is: <code>  `<!DOCTYPE html>` </code>

## HTML Headings

HTML headings are defined with the <code>`<h1>`</code> to <code>`<h6>` </code>tags
<code>`<h1>`</code> defines the most important heading. <code>`<h6>`</code>
defines the least important heading: 

```html
    <h1>This is heading 1</h1>
    <h2>This is heading 2</h2>
    <h3>This is heading 3</h3> 
```

## HTML Paragraphs

HTML paragraphs are defined with the <code> `<p>` </code>tag: 

```html
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p> 
```

## HTML Links
HTML links are defined with the <code>`<a>`</code> tag:

```html
    <a href="https://milad-ezzat.vercel.app/">This is a link</a> 
```

<p>The link's destination is specified in the href attribute. </p>

<p>Attributes are used to provide additional information about HTML elements.</p>
<p>You will learn more about attributes in a later chapter.</p>

## HTML Images

HTML images are defined with the <code>`<img>`</code> tag.

<p>The source file (src), alternative text (alt), width, and height are provided as attributes: </p>

```html
 <img src="https://milad-ezzat.vercel.app/_next/image?url=%2Fimages%2Fprofile.png&w=256&q=75" alt="milad-ezzat.vercel.app" width="104" height="142"> 
```

### How to View HTML Source?

<p>Have you ever seen a Web page and wondered "Hey! How did they do that?"</p>

#### View HTML Source Code:
<p>Right-click in an HTML page and select "View Page Source" (in Chrome) or "View Source" (in Edge), or similar in other browsers. This will open a window containing the HTML source code of the page.</p>

#### Inspect an HTML Element:

<p> Right-click on an element (or a blank area), and choose "Inspect" or "Inspect Element" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens. </p>
