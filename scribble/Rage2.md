---
createdAt: 2026-06-01T00:05:50+00:00
tags:
  - cloudflare
  - web
  - project
  - chakraui
  - claude
  - ai
---

A few years ago I volunteered to help [Patrick Galbraith](https://www.pjgalbraith.com/) get the excellent [RageAgain](https://rageagain.com/#/home) up and running again, after its scraper ran afoul of changes to the source website. When I noticed that it had broken again, I decided to have a go at building my own instead - this is the result, Rage².

Currently hosted at [rage.requisite.link](https://rage.requisite.link/), I started from a clean slate with scraping, video searching and UI. I used my usual stack of React and Chakra UI, and decided to try out [Cloudflare's Workers](https://developers.cloudflare.com/workers/) for compute and scheduling, and [Drizzle](https://orm.drizzle.team/) for the ORM layer.

I also decided to try out Claude for this project. I'm deeply conflicted about AI use despite its sudden ubiquity in my profession and technical community, so I decided vibe-coding a project was a good way to familiarise myself with the affordances of this very new, fraught technology. Overall it performed as expected - surprisingly capable at boilerplate, surprisingly naive when it needed to consider the project holistically. (The emotional experience of outsourcing one of my favourite things in the world? That's worth a whole post of its own.)
