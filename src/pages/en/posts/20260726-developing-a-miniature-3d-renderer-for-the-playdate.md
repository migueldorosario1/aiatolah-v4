---
layout: ../../../layouts/PostLayout.astro
title: 'Developing a Miniature 3D Renderer for the Playdate'
date: 2026-07-26
category: 'Development'
lang: "en"
excerpt: "See how the challenge of creating a 3D software renderer for the Playdate handheld device went."
source: 'https://saffroncr.itch.io/katavatis/devlog/1534514/building-a-tiny-3d-renderer-for-a-tiny-handheld'
heroImage: "/hero/desenvolvendo-um-renderizador-3d-miniatura-para-o-playdate.jpg"
---
Recently, the journey of writing a 3D software renderer for the Playdate was shared in a fascinating insight. Initially, without a performance baseline, the path began with a simple test: a raycaster.

Based on code examples from Ken Silverman's web page, this raycaster became a standard for testing 3D processing capability and screen drawing performance on low-power devices. The goal was to benchmark the most relevant aspects for a 3D renderer: the speed of float manipulation and vector math, memory operations, screen drawing speed, as well as issues with framebuffer setup and usage.

The initial results were worse than expected, indicating that the project would not be easy. The raycaster was not developed with maximum performance in mind, and although it is believed it can be optimized, the focus was on measuring the device's potential.

According to saffroncr.itch.io, despite the processing limitation, the Playdate's low-resolution screen and 1-bit display offer significant memory gains. Based on these results, the developer expressed confidence in creating an experience that, from the player's perspective, resembles that of the 3DO or Sega Saturn consoles.

These consoles were known for custom hardware for drawing polygons and modest CPUs. While the graphics hardware handled most of the heavy lifting, manufacturers could use cheaper CPUs. However, the inflexibility of these machines made them poor at rendering graphics differently, as evidenced by the failed Doom ports.

The Playdate, on the other hand, has no 3D hardware; everything you want to render in 3D must be done by the CPU. No polygon sorting, rasterization, depth buffer, automatic triangle clipping against the view frustum, texture mapping, filtering, or perspective correction. Nothing.

A brief explanation about 3D graphics: we live in a three-dimensional world, with depth, height, and width. Notions like perspective, movement, scale, shadows, and occlusion allow us to perceive these three dimensions. Computer graphics use similar techniques. A 3D game processes information from a 3D scene, positions a camera in that space, and projects the scene onto a 2D plane, comparable to the three-dimensional world projected onto our retinas.

The rasterizer, part of the renderer, converts the projected geometry into pixels, necessary for drawing on computer screens. It identifies how to paint textures, handles overlapping polygons, clipping, etc., and writes the results to the framebuffer, which contains the 2D image of a frame, displayed on the screen.

In most modern hardware, this task is done by the GPU. On the Playdate, without a GPU, the CPU must transform polygon vertices, project them, clip, sort, texture, and write the resulting pixel to the framebuffer, and do it fast enough to produce new frames several times per second.

Regarding loading BSP (Binary Space Partitioning) map files and the decision to use or not a z-buffer, the developer adopted the BSP format to avoid writing a level editor and map compiler from scratch, allowing the use of tools like TrenchBroom for level design and ericw-tools to compile the map, visibility data, and lighting, saving significant time.

Using BSPs facilitated the project, reusing tools and saving time. The 3D software renderer was built from scratch to ensure complete understanding and the ability to iterate on it, testing ideas and finding the game's look.
