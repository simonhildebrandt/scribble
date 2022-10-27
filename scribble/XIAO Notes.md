---
createdAt: 2022-09-11T00:01:50+00:00
tags:
 - notes
---
Spent a few hours wrestling with my new [XIAO](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) (planned brains of my [[Light Tiles|Light Tiles]]) and I should note down all the stuff that tripped me up.

 - First I followed the default instructions - but missed the notes about 'two different board definitions' [here](https://wiki.seeedstudio.com/XIAO_BLE/#two-arduino-libraries) . There seems to be some uncertainty about which board I should use, but I saw success using 'Seeed nRF52 mbed-enabled Boards -> Seeed XIAO BLE - nRF52840' for Bluetooth stuff (opposite of those instructions?)
 - It booted as expected the first time, but quickly (once I started trying to use serial commands?) got into a state where I couldn't convince it to accept new sketches ("No data received on serial port. Not able to proceed.") After experimentally trying a few tricks (activating the bootloader with a double-tap of the reset button, for example, and booting CircuitPython, [deleting the existing `.uf2` file](https://forum.seeedstudio.com/t/seeeduino-xiao-dead-unable-to-upload-sketches-after-code-upload-solved/258219)) I noticed that the port I was trying to send to ( `/dev/cu.Bluetooth-Incoming-Port`) had company - just while the bootloader was active - (`/dev/cu.usbmodem1101 (Seeed XIAO BLE - nRF52840`). Switching to that one got me running again. (Of course that required me to reset into bootloader mode again, every time I uploaded a new sketch.)
 - Successfully made it through the bulk of the [BLE usage demo](https://wiki.seeedstudio.com/XIAO-BLE-Sense-Bluetooth-Usage/).
  - A quick hack at [BLE from browser](https://github.com/simonhildebrandt/bluetooth), no sign of my XIAO in the list of available devices to pair with? 
  - Alongside getting more confidence on BLE, next up will be driving some WS2812B Addressable RGB LEDs.