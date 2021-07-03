---
tags: [network]
title: What is proxy server ?
created: '2021-07-02T12:49:47.801Z'
modified: '2021-07-02T13:48:09.529Z'
---

# What is proxy server ?

![proxy-server-1](/images/proxy-server-1.png)

> In computer networking, a proxy server is a server application or appliance that acts as an intermediary for requests from clients seeking resources from servers that provide those resources. [Wikipedia](https://en.wikipedia.org/wiki/Proxy_server)


Every computer that is connected to the network has an [IP](https://milad-ezzat.vercel.app/posts/what-is-ip-address) (Internet Protocol) address that identifies the device uniquely. Similarly, the proxy server is a computer on the network that has its own IP address. But sometimes, we want to access those websites or servers that are restricted and we do not want to show our identity (IP address). In such a scenario, the proxy server comes into existence. We can achieve the same by using the proxy server. It provides varying levels of functionality, security, and privacy that depend on the use case, needs, or policies of the company. In this section, we will discuss what is a proxy server, its types, advantages, need, and working of proxy servers.


## Proxy Server

The proxy server is a computer on the internet that accepts the incoming requests from the client and forwards those requests to the destination server. It works as a gateway between the end-user and the internet. It has its own IP address. It separates the client system and web server from the global network.

In other words, we can say that the proxy server allows us to access any websites with a different IP address. It plays an intermediary role between users and targeted websites or servers. It collects and provides information related to user requests. The most important point about a proxy server is that it does not encrypt traffic.

### There are two main purposes of proxy server:
  - To keep the system behind it anonymous.
  - To speed up access to a resource through caching.

## Mechanism of Proxy Server

![proxy-server-2](/images/proxy-server-2.jpeg)

The proxy server accepts the request from the client and produces a response based on the following conditions:

1. If the requested data or page already exists in the local cache, the proxy server itself provides the required retrieval to the client.
2. If the requested data or page does not exist in the local cache, the proxy server forwards that request to the destination server.
3. The proxy servers transfer the replies to the client and also being cached to them.

Therefore, it can be said that the proxy server acts as a client as well as the [server](https://milad-ezzat.vercel.app/posts/what-is-a-server).
![proxy-server-3](/images/proxy-server-3.png)


## Types of Proxy Servers

There are many types of proxy servers available. The two most common types of proxy servers are forward and reverse proxy servers. The other proxy server has its own feature and advantages. Let's discuss each in detail.

1. <strong> Open or Forward Proxy Server: </strong> It is the most widely recognized type of intermediary worker that is gotten to by the customer. An open or forward proxy server refers to those sorts of intermediaries that get demands from web clients and afterward peruse destinations to gather the mentioned information. After collecting the data from the sites, it forwards the data to the internet users directly. It bypasses the firewall made by authorities. The following image shows forward proxy configuration.
![proxy-server-4](/images/proxy-server-4.jpg)

2. <strong> Reverse Proxy Server: </strong> It is a proxy server that is installed in the neighborhood of multiple other internal resources. It validated and processes a transaction in such a way that the clients do not communicate directly. The most popular reverse proxies are Varnish and Squid. The following image shows the reverse proxy configuration.
![proxy-server-5](/images/proxy-server-5.jpg)

## Advantages of Proxy Server

There are the following benefits of using the proxy server:

  - It improves the security and enhances the privacy of the user.
  - It hides the identity (IP address) of the user.
  - It controls the traffic and prevents crashes.
  - Also, saves bandwidth by caching files and compressing incoming traffic.
  - Protect our network from malware.
  - Allows access to the restricted content.

## Need of Proxy Server

  - It reduces the chances of data breaches.
  - It adds a subsidiary layer of security between server and outside traffic.
  - It also protects from hackers.
  - It filters the requests.

## Working of Proxy Server

As we have discussed above, the proxy server has its own IP address and it works as a gateway between the client and the internet. The client's computer knows the IP address of the proxy server. When the client sends a request on the internet, the request is re-routed to the proxy. After that, the proxy server gets the response from the destination or targeted server/site and forwards the data from the page to the client's browser (Chrome, Safari, etc.).

## Proxy Server Vs. VPN

Proxy server and VPN (Virtual Private Network) are quite similar. Both allow clients to hide their IP addresses, location and allows access to the restricted websites. The only difference is that the proxy server does not encrypt the traffic while VPN does the same. Another difference is that no one can track the activity of the VPN user while the activity of the proxy server user can be tracked.
  

