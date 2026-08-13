---
layout: ../../../layouts/PostLayout.astro
title: 'How to Create a Nintendo 64 Game in 2026: The Saga of Xibalba 64'
date: 2026-08-13
category: 'Development'
lang: "en"
excerpt: "Developer ported JavaScript engine to C and created an FPS for N64, with physical release by Modretro."
source: 'https://phoboslab.org/log/2026/08/xibalba64-making-of'
heroImage: "/hero/como-criar-um-jogo-para-nintendo-64-em-2026-a-saga-de-xibalb.jpg"
hero_credit: "Photo by Sunriseforever on Pixabay"
hero_legenda: "game console, sony, video games, lights, neon, freezelight, gamepad, joystick, console, ps4, xbox, dark, joysticks, playstation, controller, play, game, technology, fun, gamer, games, leisure, video games, video games, v"
---
The developer behind phoboslab.org revealed the behind-the-scenes of creating Xibalba 64, an FPS inspired by Wolfenstein 3D for the Nintendo 64. The game will be published by Modretro as a physical launch title for the M64, a modern clone of the console, complete with cartridge, packaging, and manual.

According to the author, this is only the second physical release of a new game for the N64 since the end of the console's original commercial life. The first was Xeno Crisis, by Bitmap Bureau, released in 2023. No other new game had been released for the N64 since Tony Hawk's Pro Skater 3, in 2002.

The project's foundation is the high_impact engine, a rewrite in C of the JavaScript engine Impact, originally created in 2010. The engine was adapted to support multiple platform and rendering backends, which facilitated the creation of a backend for the N64.

The N64 is peculiar hardware: besides the 93 MHz MIPS CPU (big-endian), it has two coprocessors: the RDP (Reality Display Processor), with fixed function, and the RSP (Reality Signal Processor), a programmable vector processor. Both are in the same physical package, known as RCP (Reality Coprocessor).

Initially, Nintendo strictly controlled access to the RSP, using only its official library, libultra. Only later did it allow studios to write their own microcode. Programming on raw hardware is unfeasible, and using the official libultra would risk a lawsuit for copyright infringement.

The solution came from the homebrew scene: Libdragon, described as 'SDL for the N64', offers functions to draw sprites, triangles, sound, controls, and more. The developer took only a few nights to create a backend for high_impact using Libdragon, testing with the game Biolab Disaster.

The development environment was praised: Libdragon brings compilers, complete documentation, and examples. An important tip: use the 'preview' branch, as the 'stable' branch is outdated.

For testing, the author used the Ares emulator, which faithfully emulates the RDP and RSP, including precise timing. But the famous slowness of the N64's memory can only be tested on real hardware, which caused some disappointments.

The solution was to use a SummerCart64, an open-source cartridge that allows running .z64 ROMs. The device has a USB-C port, allowing you to send the ROM directly from the PC via sc64deployer. The author connected the N64 to the PC via USB and used a $10 USB analog video capture device to display the output in a window on the desktop.

The game Xibalba 64 is an expansion of the Xibalba demo, created in 2014 to demonstrate the JavaScript engine. The new game has more levels, more enemies, and more weapons. Although it is 3D, the gameplay is essentially 2D, without elevation, similar to Wolfenstein 3D.

To integrate 2D physics with 3D rendering, the author used a union in C that allows treating a 3D vector as 2D when necessary. The initial port of existing levels and enemies took about two weeks; then, months of optimization and expansion followed.

The developer maintained the ability to compile the game with SDL2 or Sokol backends, facilitating playtesting. The level editor, a single HTML file, was extended to support lightmaps and display real sprites.

The story shows that, even decades after the console's end, it is still possible to create new games for the N64 with modern tools and the homebrew community.
