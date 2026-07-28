---
layout: ../../../layouts/PostLayout.astro
title: 'GrapheneOS details defenses against data extraction from locked devices'
date: 2026-07-28
category: 'Security and Ethics'
lang: "en"
excerpt: "GrapheneOS explains its protection layers: rate limiting, insider attack resistance, duress PIN, and automatic reboot for data security."
source: 'https://discuss.grapheneos.org/d/40700-grapheneos-protections-against-data-extraction-from-locked-devices'
heroImage: "/hero/grapheneos-detalha-defesas-contra-extracao-de-dados-em-dispo.jpg"
---
GrapheneOS, an operating system focused on privacy and security, has published a detailed breakdown of its defenses against data extraction from locked devices. According to discuss.grapheneos.org, the system relies heavily on the standard security features of Android 17 and the most secure hardware available for Android.

Currently, only Pixels offer the hardware security features and updates required by GrapheneOS. This will change in 2027 thanks to a partnership with Motorola Mobility and Qualcomm's progress.

Disk encryption provides strong protection for data. Even the most sophisticated attackers will not be able to break it directly. They need to exploit the operating system while it is in the After First Unlock state or brute-force the PIN/password.

Android 16 QPR2 requires a secure element that implements rate limiting with progressively increasing delays. There are 4 hours after 10 attempts and 41 days after 15. Only 20 attempts are allowed. For usability, the 5 most recent unique failed attempts are rejected early to avoid waste. GrapheneOS only supports devices with the latest generation of secure element rate limiting.

The secure element on supported devices also has resistance to insider attacks. This is implemented by requiring the owner user to successfully authenticate before the secure element firmware can be updated. A valid signing key and a higher version number are not sufficient. The goal is to prevent any government from bypassing rate limiting by coercing the creation of a firmware update that removes the limitation.

Pixels have used a secure element with an internal timer implementing rate limiting and insider attack resistance since the Pixel 2, released in late 2017. The secure element and integration with the operating system have greatly improved since then.

GrapheneOS also raises the character limit for passwords from 16 to 128. This allows the use of high-entropy passphrases without relying on the secure element's rate limiting.

To make a strong passphrase convenient without spoiling it with biometric unlock, GrapheneOS adds an optional fingerprint PIN as a second factor. The number of fingerprint attempts is reduced from 20 to 5, and failure to enter the second-factor PIN counts towards that. This allows using 6 to 8 random words as the primary unlock method and fingerprint+PIN with a short PIN for convenience.

GrapheneOS greatly improves protections against operating system exploitation with hardened memory allocators and other features. It heavily uses hardware-based security features, including memory tagging (MTE) to protect against exploits.

GrapheneOS adds specialized protection against physical access attacks. For example, it blocks new USB connections at the software and hardware level by default while locked and disables USB data as soon as there are no active USB connections.

GrapheneOS implemented an automatic reboot timer for locked devices in June 2021. It can be configured between 10 minutes and 72 hours. It was enabled by default at 72 hours and later reduced to 18 hours. It automatically returns the device to the Before First Unlock state due to memory clearing during shutdown and reboot. Apple and Google added a similar timer in iOS 18.1 and Android 16.

Android uses separate encryption keys for each secondary user and Private Space. GrapheneOS adds support for putting both back into the Before First Unlock state without rebooting, via 'end session' for secondary users or toggles to do so by default.

The duress PIN/password feature is a minor feature that fits into the overall picture. It wipes the device when entered in any system prompt for the current profile's PIN or password. It works on all profiles, including secondary users and Private Spaces. The duress PIN also wipes the device when entered as the second-factor PIN for fingerprint unlock.

There are several ways to use the feature, including writing it on a phone case or on a paper in a wallet. People should carefully consider how to use it in a real coercion situation. GrapheneOS does not rely on the duress PIN to protect user data, but it completely removes the possibility of recovery, even with the PIN/password of each profile.

The GrapheneOS features page provides an overview of what the system offers compared to stock Android 17. The release notes are more exhaustive, covering everything when it is added, changed, or removed.
