---
layout: ../../../layouts/PostLayout.astro
title: 'Oberon System migrates from RISC-5 to RISC-V in new project'
date: 2026-08-18
category: 'Hardware and Infrastructure'
lang: "en"
excerpt: "Project migrates Wirth's Oberon System to RISC-V, using OP2 compiler and RV32 emulator, staying faithful to the original book."
source: 'https://github.com/rochus-keller/OberonSystem/tree/op2-rv32'
heroImage: "/hero/oberon-system-migra-de-risc-5-para-risc-v-em-novo-projeto.jpg"
hero_credit: "Photo by Tanha Tamanna  Syed on Pexels"
hero_legenda: "Oberon System migra de RISC-5 para RISC-V em novo projeto"
---
A developer published on GitHub a version of the Project Oberon System migrated from the RISC-5 processor to the RISC-V architecture. The work uses the OP2 compiler with RV32 backend and a virtual machine emulator based on rv32emu, reproducing the memory map described by Niklaus Wirth in his book.

According to the repository, the migration swaps the Oberon-07 language for the more common Oberon 90, keeping the Kernel.Mod, Display.Mod, and Input.Mod modules unchanged. The system runs natively on the RISC-V VM, with a screenshot available in the project.

The Project Oberon was created between 1986 and 1989 by Niklaus Wirth and Jürg Gutknecht at ETH Zürich. They implemented a complete system — operating system, compiler, language, text and graphics editors — and documented everything in the book 'Project Oberon - The Design of an Operating System and Compiler', from 1992.

After retirement, Wirth continued the project. The sources published on projectoberon.net use Oberon-07, his latest simplification of the language. A free revision of the 2013 book maintains the original purpose: to serve as an example of a real system, in use and explained in detail.

The 1992 book used the National Semiconductor NS32032 processor, which was no longer available. Wirth then designed his own processor, the RISC-5, to extend simplicity to hardware. He implemented it on an FPGA and the system ran on a low-cost board (Digilent Xilinx Spartan-3, with 1 MB of static RAM).

With the simplifications, all code that was previously in assembly came to be written in Oberon, from drivers to raster operations. The hardware/software contract of the system consists of a memory map and an instruction set.

The name collision with RISC-V is curious, but there is real kinship in design philosophy. RISC-V, developed at UC Berkeley starting in 2010, is the fifth RISC architecture of the Berkeley line (RISC-I, RISC-II, SOAR, SPUR). Both share goals: regular 32-bit ISA, load/store, compiler-friendly, with fixed 32-bit base instructions.

Migrating the Oberon System to RISC-V is a pragmatic way to bring the system to contemporary hardware while preserving its principles. Espressif offers cheap ESP32 microcontrollers, and boards like the Olimex ESP32-P4-PC provide all necessary resources at an attractive price. Since Oberon does not require an MMU, it is suitable for this type of microcontroller.

So far, the migration runs on an emulated RISC-V machine, which aids debugging and keeps the code close to the book. Future iterations should migrate the system (and also System 3) to the Olimex board.

The author chose to reuse the OP2 compiler, which he had already used in the migration of Oberon System 3 to Raspberry Pi. OP2 is part of the ETH Oberon heritage, with front end/back end separation that has already produced code for SPARC, MIPS, i386, ARMv7, and now RV32. This avoids maintaining another compiler and keeps the code close to the book.

The original sources were downloaded from projectoberon.net on 2026-04-14, including files like inner.zip, outer.zip, systools.zip, graph.zip, and apptools.zip. The most recent modification date is 2018-11-28.

The migration involved renaming INTEGER to LONGINT, providing Oberon 07 built-ins via SYS.Mod, using SYSTEM.BYTE or CHAR for byte data, and adapting case statements to IF with type guards. Array assignments use COPY, and byte-string literals are initialized at runtime.

The repository includes a RISC-V machine emulator based on rv32emu, similar to the RISC-5 described in the book. All modules are linked into the boot image, without dynamic loading. The files po.bin and disk.img work on all platforms; only the rv32vm executable is platform-dependent.

There are build scripts for Linux (Debian Bookworm), a qmake project for macOS, and support for the BUSY system, which requires only a C99 compiler and SDL2, tested on Linux and Windows. To run on Windows, use the command: rv32vm.exe --base 0x0 --disk disk.img po.bin.

This project is an example of how classic systems can be preserved and adapted to modern hardware, maintaining the philosophy of simplicity and openness that characterizes Oberon.
