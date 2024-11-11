---
createdAt: 2024-11-11T11:45:00+11:00
tags:
  - project
  - ruby
  - yaml
---

A recent production issue at work reminded me that the YAML format has plenty of gotchas, and we should probably be linting our YAML files. Looking around I found a reasonably thorough Python tool, and a very naive Ruby one; with our Ruby stack I'd like a thorough Ruby option. 

So I spent some hours learning the lower level Psych APIs and built one - it's here: https://github.com/simonhildebrandt/yaml-linter

(First version just identifies re-used mapping keys, which is the particular problem we tripped over - hopefully future versions will check for known ambiguous valuers like 'no' and maybe even do some fuzzy-matching to check for typos.)