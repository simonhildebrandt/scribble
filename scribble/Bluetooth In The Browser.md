---
createdAt: 2022-06-08T00:30:05+00:00
tags: 
 - project
 - public-speaking
 - javascript
---
(This blog post represents my evolving notes for [my presentation at Web Directions Code](https://webdirections.org/code/speakers/simon-hildebrandt.php) ) - the finished presentation (with all the working code) is here: https://github.com/simonhildebrandt/bluetooth

"browsers can now do Bluetooth - crazy, huh? Here's some background on Bluetooth (history and technology) and here's the browser api. Here's a weird custom device demonstrating what an embedded device with Bluetooth can report, here's a website receiving that info, and (bonus) here's that info streaming to anyone else **looking** at that website (probably bridged with Firebase.)"


## Setup

According to: https://winaero.com/enable-or-disable-bluetooth-device-permissions-in-google-chrome/

Activate via chrome://flags/#enable-web-bluetooth-new-permissions-backend

Restart browser

## Basics

https://en.wikipedia.org/wiki/Bluetooth

**Bluetooth** is a short-range [wireless](https://en.wikipedia.org/wiki/Wireless "Wireless") technology standard that is used for exchanging data between fixed and mobile devices over short distances and building [personal area networks](https://en.wikipedia.org/wiki/Personal_area_network "Personal area network") (PANs). In the most widely used mode, transmission power is limited to 2.5 [milliwatts](https://en.wikipedia.org/wiki/Milliwatt "Milliwatt"), giving it a very short range of up to 10 metres (33 ft). 

It employs [UHF](https://en.wikipedia.org/wiki/Ultra_high_frequency "Ultra high frequency") [radio waves](https://en.wikipedia.org/wiki/Radio_wave "Radio wave") in the [ISM bands](https://en.wikipedia.org/wiki/ISM_band "ISM band"), from 2.402 GHz to 2.48 GHz. It is mainly used as an alternative to wire connections, to exchange files between nearby portable devices and connect [cell phones](https://en.wikipedia.org/wiki/Cell_phone "Cell phone") and music players with [wireless headphones](https://en.wikipedia.org/wiki/Wireless_headphone "Wireless headphone").

Bluetooth 4.0 included Classic Bluetooth, Bluetooth high speed and Bluetooth Low Energy.

We're now at Bluetooth 5.0.

## Profiles

A group of services to serve a particular function

Core profiles:

**Generic Access Profile (GAP)** 
Provides the basis for all other profiles. GAP defines how two Bluetooth units discover and establish a connection with each other.

**Generic Attribute Profile (GATT)**
Provides profile discovery and description services for [Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy "Bluetooth Low Energy") protocol. It defines how ATT attributes are grouped together into sets to form services.

Fun profiles:

Mesh


## Services

A group of behaviours 

## Notifications

## Characteristics

