---
createdAt: 2022-10-25T00:01:50+00:00
tags: 
 - project
 - web
 - javascript
---
After years of building dinky web toys, my focus has been increasingly on the fastest, most seemless ways for users to identify themselves, share information through a playful, grokkable interface. 

The platform aspect of this (for me, so far) has been [Firebase](https://firebase.google.com/). But simultaneously I've studied strategies like [CRDTs](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) - promoting the data and it's correctness to equal priority with its availability. Then, discovering [Gun](https://gun.eco/), I felt like I had a new and potentially game-changing way to approach some of these goals.

Thinking about what kind of project would allow me to explore these tools at some kind of scale, I came up with Scrawl.

## Scrawl
Scrawl is designed as a near-infinite 2D drawing space - a potentially limitless canvas that anyone can contribute to. Using a peer-to-peer architecture, Scrawl allows real-time collaborative editing, with space for everyone who wants to join in.

The project is based off three parts - the [[Scrawl Editor|Scrawl Editor]] (a simple pixel art editor instrumented to share its state) a web app allowing browsing and editing tiles in the canvas, and a Gun server (to allow discovery of peers and utilities that support the app.)



