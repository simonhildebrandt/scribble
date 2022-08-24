---
createdAt: 2022-08-08T03:32:26+00:00
tags: 
 - project
---
I've always been interested in word games, and found playing them socially online a great joy. 

Developing your own Wordle, etc, is an easy ambition to imagine - the first thing you need, though, is a reliable dictionary.

Dictionarily is a service that publishes dictionaries - dictionaries that can be be efficiently consumed in places like web games. The current version is published [here](https://github.com/simonhildebrandt/dictionarily) - it uses a [trie data structure](https://github.com/kamilmielnik/trie) in the published corpus, which reduces the delivered size while also providing a streamlined hydration mechanism for the client. 

Ultimately the goal is to provide a sophisticated interface where customers can build and combine (add, subtract) different source dictionaries into a variety of personalised dictionaries to serve different groups of users (based on language or other constraints.)