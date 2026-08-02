---
layout: ../../../layouts/PostLayout.astro
title: 'Defcon 34 badge brings open source chip that becomes a security key'
date: 2026-08-02
category: 'Hardware and Infrastructure'
lang: "en"
excerpt: "Baochip-1x chip, created by bunnie Huang, is open source and can be inspected down to the silicon."
source: 'https://www.wired.com/story/defcon-34-badge-baochip-andrew-bunnie-huang/'
heroImage: "/hero/defcon-34-badge-traz-chip-open-source-que-vira-chave-de-segu.jpg"
---
Every year, the Defcon conference gifts its attendees with elaborate electronic badges, full of puzzles and cryptographic challenges. But this year's edition, Defcon 34, innovates: instead of the badge design being the star, the highlight is on the internal hardware.

The legendary hardware hacker Andrew 'bunnie' Huang was invited to create the badges, revealed here for the first time. They include an innovative open source chip, designed by Huang, that promises to advance the state of security, transparency, and trustworthiness in computing.

The chip is not just part of the badge. Its central module can be removed and used after the conference as a hardware security token, giving the badge a second life beyond Defcon.

The chip, called Baochip-1x, is a 'mostly' open source microcontroller, with three years of development. Huang published on GitHub the source code for the operating system, firmware, processor core, cryptographic engines, and input/output system, allowing inspection and use by anyone.

The chip is also packaged in a way that researchers can examine the silicon internally and compare it with the published design, without having to trust that the manufactured chip is what the designers intended.

Traditional chips are black boxes, with an opaque casing that hides the circuitry. Even previous open source chips, which made specifications and code available, were encapsulated in impermeable plastic, creating a supply chain problem: users had to trust that nothing changed during manufacturing, such as the addition of a backdoor.

Unlike conventional chips, the Baochip is packaged so that infrared light can pass through the back of the silicon, allowing visual inspection of internal structures. Huang plans to demonstrate the technique at the conference, letting attendees inspect the chip under infrared light.

'I've been doing various things in the line of trust, silicon, and verification transparency' for years, Huang tells WIRED. 'It's this whole story I've been building to try to have a chip that we can trust down to the core, down to the transistor. You can actually see the RAM arrays on the chip.'

## Building a chip

Building a new chip is expensive, potentially costing millions of dollars for manufacturing. But Huang had a big opportunity three years ago when the company Crossbar contacted him. The company wanted to create a secure, open source chip, but didn't know how. Huang agreed to help with one condition: that they let him 'hitch a ride' on their manufacturing batch, placing his CPU on the same wafer, sharing the costs.

'They see it as: if you put me on the chip, they get two products for the price of one,' says Huang. This kind of 'ride-sharing' is not uncommon, he adds, although the industry doesn't like to discuss it publicly.

The result is a Crossbar chip that includes both Crossbar's microprocessor and Huang's. The Baochip is essentially the same chip, but with the Crossbar microprocessor disabled, since Huang doesn't have the rights to distribute it.

The Crossbar version uses a proprietary ARM core, while Huang's version uses a RISC-V core, whose implementation is open source. The RISC-V instruction set is also open and publicly documented. The two versions can use the same infrastructure and peripherals, activating different CPU cores.

There are some closed-source elements in Huang's chip. Some low-level physical design and manufacturing elements, including those associated with TSMC's 22-nanometer manufacturing process, are proprietary. 'But if you look at the spectrum of how open you can get, this is very, very far beyond any other security-focused chip,' says Huang.

## Badge origins

Previous Defcon badges used off-the-shelf commercial chips, not custom open source silicon. The idea to use the Baochip came from a meeting last year when Huang talked with Defcon founder Jeff Moss about his progress on the chip. Huang said he planned to release it this summer through his company, Baochip.

Moss realized the concept fit perfectly with this year's conference theme: 'agency,' which Defcon defines as the technologies we use and the choices we make to increase self-determination. He and Huang saw a great opportunity to boost adoption of the chip. So far, the Baochip has only been distributed in a small development version; the 27,000 Defcon badges represent its first major distribution.

Moss had one requirement: the badges should have a life beyond the conference, not become trash. He had always been frustrated with the design and limitations of security tokens and crypto wallets, which can be broken at the hardware level. He thought Huang's chip could be a more secure alternative.

'I've always dreamed of the idea that you put your secrets in hardware, and if an attacker breaks in, they can't get your secrets,' Moss tells WIRED.

The detachable module of the badge can serve as a FIDO security token. Its software supports time-based one-time passwords and password management. Huang says it's 'probably the world's first open source security token that you can completely inspect down to the bootloader and the transistors.'

The removable module also includes a camera to scan QR codes and enroll in authentication systems. But, following Defcon's privacy practices and the ban on surreptitious photography, the camera is very low resolution and nearsighted, and the chip, by default, only uses black-and-white data, with no support for photo storage.

'It's great for scanning QR codes and practically bad for everything else,' says Huang.

The badge doesn't abandon the conference life. Huang included features to encourage interaction: LEDs that blink in different palettes and patterns, depending on the badge type (general, speakers, goons, and the black Uber badges for winners and VIPs). Each type starts with a specific color and pattern, but users can add colors and create more complex patterns when badges communicate with each other.

## How secure is it?

The chip runs an operating system written in Rust and includes secure boot, a true random number generator, and hardware features to harden it against attacks. Huang believes it will be particularly resistant to non-physical remote attacks.

The chip also uses resistive RAM (RRAM), a type of non-volatile memory that Huang says is harder to physically extract than conventional flash memory. With flash, 'if you disassemble down to the flash cells, you can just see the state,' he explains.
