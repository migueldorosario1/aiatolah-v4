---
layout: ../../../layouts/PostLayout.astro
title: 'W4ME Station Enables Running WASM-4 Games on Java ME Phones'
date: 2026-07-27
category: 'Development'
lang: "en"
excerpt: "W4ME Station, a new WASM-4 runtime for Java ME devices, brings unmodified WebAssembly games to CLDC 1.1/MIDP 2.0 devices."
source: 'https://github.com/mulfyx/w4me-station'
heroImage: "/hero/w4me-station-permite-execucao-de-jogos-wasm-4-em-telefones-j.jpg"
---
W4ME Station, an innovative solution for Java ME devices, has brought the opportunity to run WebAssembly games on older devices, such as feature phones from the 2000s. According to github.com, this runtime allows the execution of unmodified WebAssembly 'cartridges' on devices compatible with CLDC 1.1 and MIDP 2.0.

The package includes 13 games in a JAR file of only 275 KB, without the need for network connection or JIT usage, ensuring efficient and fast performance. As highlighted on github.com, both release variants do not exceed 300 KB.

| Variant | Application | Descriptor |
|---|---|---|
| Full, with optional JSR-75 file navigation | w4me-station.jar | w4me-station.jad |
| Base, without JSR-75 classes | w4me-station-base.jar | w4me-station-base.jad |

The SHA-256 checksums are stored alongside the version 1.0.0 artifacts. W4ME Station targets CLDC 1.0 / MIDP 2.0 devices, is independent, and is not endorsed by the WASM-4 maintainers.

The list of included games is diverse and engaging, offering a variety of gaming experiences for users:

1. Sokoban
2. Wasm Wars
3. Annoying Robots
4. Waternet
5. Dragon Poker Draw
6. Tic Tac Toe
7. Watris
8. Glowfish Chess
9. Duck Maze
10. Rubido
11. Untangle
12. Sound Demo
13. Plasma Cube

In addition to these, W4ME Station allows installation of additional .wasm files directly from the device.

Platform features include validation of WebAssembly execution with a fixed W4IR width cache, WASM-4 host APIs for graphics, input, audio, disk, text, and tracing, as well as support for keyboard, button, and touchscreen device controls. Other features include persistent disk storage per cartridge with checksummed RMS generation and global RMS sound control.

The version 1.0.0 release is also accompanied by detailed documentation on compatibility and limitations, as well as installation, development, and testing information. W4ME Station is developed under the MIT license, with the bundled games retaining their own licenses.
