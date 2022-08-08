---
createdAt: 2022-08-08T00:30:05+00:00
---
When I started using [Firebase](https://firebase.google.com/) I found two things awkward (that were supposedly strengths of the platform!) - securing access to data, and user authentication.

I still struggle with access control, but to take control of my auth issues I decided to try building my own solution. The result: [Login With Link](http://login-with.link) - a minimal passwordless authentication system.

It uses Firebase (ironically) for hosting, database and cloud functions, and Amazon's SES for email sending. It's currently free for hobbyist usage, and the code is [here](https://github.com/simonhildebrandt/login-with-link).