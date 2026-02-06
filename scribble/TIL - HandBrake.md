---
createdAt: 2025-11-07T00:05:50+00:00
tags:
  - chromecast
  - media
  - handbrake
  - encoding
---

Optimising media for my Chromecasts is fiddly - here's what's been working for me currently:

```
HandBrakeCLI -Z "Chromecast 1080p30 Surround" -i infile.mkv -o outfile.mp4
cp -R /home/qbittorrent-nox/Downloads/
```
