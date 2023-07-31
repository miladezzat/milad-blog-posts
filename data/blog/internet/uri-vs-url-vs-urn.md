---
tags: [Internet]
title: URI Vs. URL Vs. URN
date: '2023-07-31'
summary: What is URI, URL, and URN? What are the differences between them? When should we use each of them?
---


## What is URI?
A **Uniform Resource Identifier (URI)** is a sequence of characters identifying a hypertext resource. A resource can be abstract or physical, existing, or yet to be created in the future. The URI syntax is flexible enough to cover all those cases.

### URI General Syntax

[The syntax of a generic URI](https://datatracker.ietf.org/doc/html/rfc1630) defines a URI as a sequence of components we refer to as the scheme, authority, path, query, and fragment:
![URI](/static/images/URI_syntax_diagram.svg-1.png)

### URI Components
Now, let’s those components in more detail.

The scheme is the first component. It’s a sequence of characters beginning with a letter, followed by any combination of letters, digits, plus (+), period (.), or hyphen (-) signs. In the canonical form, the letters are lowercase, although the syntax is case-insensitive. The scheme is mandatory, so we can’t omit it.


The second component, authority, consists of three parts: the user authentication information, a host, and a port with the following syntax:

[username"@"]host[":"port]
The third component is the path. It’s a sequence of path segments separated by slashes (/).

Then follows the query, which is an optional component containing a query string preceded by a question mark. Often, it consists of a sequence of attribute-value pairs separated by delimiters as ampersands (&) or semicolons (;).

Finally, the fragment is an optional component that contains an identifier of a secondary resource preceded by a hash sign. For instance, we can use fragments to refer to a section heading on a web page.

## What is URL?
A **URL (Uniform Resource Locator)** is the web address of an internet resource, like a webpage.

You can see the URL of the webpage you’re on in the address bar at the top of your browser’s window.

URLs are important. Because they help users access the webpage they want to view.

Plus, if you’re doing SEO, they can help you set up your website for SEO success by providing information to search engines about the content and purpose of a webpage.

So they can rank it appropriately.

In this post, you’ll learn how URLs are structured and how to optimize them for better search engine rankings.

Let’s start.

### URL Structure Explained
The structure of a URL breaks down into seven distinct parts. Like this:
![URL](/static/images/url.png)

1. **Protocol**
The protocol tells your browser how to connect to a webpage.
It could be HTTP (hypertext transfer protocol) or HTTPS (HTTP secure).
The main difference between the two is that HTTPS encrypts and protects any data transmitted between the server and browser. 
So when users interact with your site, their sensitive information (like login and credit card details) is safe from attackers.
Websites that show a lock icon in the address bar are using HTTPS.

2. **Subdomain**
A subdomain is a string of letters or a complete word that appears before a URL’s first dot.

The most popular subdomain is www. It stands for World Wide Web, communicating that the URL is a web address.

In the past, it was common to use www. But nowadays you can omit it from your URLs if you want.

It doesn’t matter whether you use it or not. It all depends on your personal preference.

3. **Domain**
A domain is the main part of the URL that identifies the website. Like eBay, Expedia, or Semrush.

If you’re shopping around for a domain name, our advice is to choose something short and catchy.

Short and catchy domain names are easier for people to remember. So they are more likely to return to your website.

Plus, they're easier to fit into logos and other branding materials compared to long, complicated ones. 

4. **Top-Level Domain (TLD)**
The TLD (also called domain extension) is the part that comes after the name of your website, like “.com.”

You’ll come across many TLDs on the internet. Here is a list of five of the most common ones. And what kinds of websites they’re suited for:

**.com:** Commercial websites
**.org:** Nonprofit organizations
**.net:** Software and hosting companies providing network services
**.edu:** Educational institutions (universities, colleges, schools, etc.)
**.gov:** Government agencies and departments

5. **Subfolder**
A subfolder is a folder or directory that is located within the top-most directory (or main directory) in your site hierarchy.

For example, consider the URL “www.domain.com/shoes/”

In this URL, the “shoes” subfolder is located within the main directory of the website, which is “www.domain.com”

Similar to subdomains, subfolders are used to separate website content into logical sections.

This makes it easier for visitors to understand where they are on the website.

6. **Page** OR **Slug**
A slug is the part of a URL that identifies a specific page or a post on a website. It helps users understand the context and content of a page.

Look at this URL slug, for example: “/uri-vs-url-vs-urn/”

Reading this slug alone, users can get an idea of what the page is about.

But sometimes, you’ll also come across URL slugs that read like this: “/785321/”
7. **URL Parameters**
URL parameters (or query strings) are part of a URL that comes after a question mark (?).

They’re composed of keys and values, separated by an equal sign (=). 

The key tells you what kind of information is being passed. The value is the actual information being passed.

8. **Anchor**
An anchor link (or "page jump") is a special URL that takes you to a specific place on a page. For example, the table of contents in this guide contains anchor links that take you to each heading

## What is URN?
A **uniform resource name (URN)** is an Internet resource with a static name that remains valid even if its data is moved to another location. Unlike a uniform resource locator (URL), which cannot work if the content is moved, a URN is always able to track the resource of certain data on the Web, hence resolving a frequent issue of moving of data

> Techopedia Explains Uniform Resource Name
>URN and URL are sometimes wrongly used interchangeably, but in case of a URL, the user must know the location of a specific resource, but the URN only has to know the name of the resource. The user does not have to know if the resource has been moved or still resides at the same location. Both URL and URN are parts of a uniform resource identifier, but differ in syntax and functionality. URNs were primarily conceptualized in the 1990s to be a constituent of a three-part information architecture for the Internet; the other two parts being URLs and Uniform Resource Characteristics (URCs), which is a metadata framework.


## Summary
- URI is a superset of URL and URN.
- URL is a subset of URI.
- URN is a subset of URI.
  ![URI](/static/images/url-vs-uri-vs-urn.png)
