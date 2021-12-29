---
tags: [html]
author: Milad E. Fahmy
title: HTML Basic
created: '2021-06-20T15:24:24.609Z'
modified: '2021-06-20T15:55:28.570Z'
---

# HTML Basic

In this chapter we will show some basic HTML examples.
Don't worry if I use tags you have not learned about yet.

## HTML Documents

All HTML documents must start with a document type declaration: 

```html
<!DOCTYPE html>
``` 

The HTML document itself begins with:   
 
 ```html
 <html> and ends with </html>.
 ```

The visible part of the HTML document is between:

```html 
<body> and </body>. 
``` 

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

The **`<!DOCTYPE>`** declaration represents the document type, and helps browsers to display web pages correctly.
It must only appear once, at the top of the page (before any HTML tags).

The `<!DOCTYPE>` declaration is not case sensitive.
The `<!DOCTYPE>` declaration for HTML5 is: `<!DOCTYPE html>`

## HTML Headings

HTML headings are defined with the `<h1>` to `<h6>` tags
`<h1>` defines the most important heading. `<h6>`
defines the least important heading: 

```html
    <h1>This is heading 1</h1>
    <h2>This is heading 2</h2>
    <h3>This is heading 3</h3> 
```

## HTML Paragraphs

HTML paragraphs are defined with the  `<p>` tag: 

```html
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p> 
```

## HTML Links
HTML links are defined with the `<a>` tag:

```html
    <a href="https://milad-ezzat.vercel.app/">This is a link</a> 
```

The link's destination is specified in the href attribute. 

Attributes are used to provide additional information about HTML elements.
You will learn more about attributes in a later chapter.

## HTML Images

HTML images are defined with the `<img>` tag.

The source file (src), alternative text (alt), width, and height are provided as attributes:

```html
 <img src="https://milad-ezzat.vercel.app/_next/image?url=%2Fimages%2Fprofile.png&w=256&q=75" alt="milad-ezzat.vercel.app" width="104" height="142"> 
```

### How to View HTML Source?

Have you ever seen a Web page and wondered "Hey! How did they do that?"

#### View HTML Source Code:
Right-click in an HTML page and select "View Page Source" (in Chrome) or "View Source" (in Edge), or similar in other browsers. This will open a window containing the HTML source code of the page.

#### Inspect an HTML Element:

Right-click on an element (or a blank area), and choose "Inspect" or "Inspect Element" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.
