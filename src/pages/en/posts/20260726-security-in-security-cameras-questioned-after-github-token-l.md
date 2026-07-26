---
layout: ../../../layouts/PostLayout.astro
title: 'Security in security cameras questioned after GitHub token leak'
date: 2026-07-26
category: 'Security and Ethics'
lang: "en"
excerpt: "GitHub admin token discovered in Hanwha security camera firmware, exposing hundreds of repositories."
source: 'https://hhh.hn/hanwha-github-token/'
heroImage: "/hero/seguranca-em-cameras-de-seguranca-questionada-apos-vazamento.jpg"
---
Recently, concerns about the security of security cameras have been put to the test when a significant vulnerability was revealed. With AXIS promoting the execution of Linux applications on their cameras, the focus intensified on vulnerability and credential management. An incident involving Hanwha Vision, a company new to many, showed the gravity of the situation.

In the company's investigation, it was possible to access firmware blobs for each camera model, which is considered positive. Upon analyzing an image file, a tarball with the camera's AI features and a fwimage.tgz that binwalk flagged as encrypted was found. After research, it was discovered that the password to decrypt the file is composed of 'HTW' plus the model number, such as in 'HTWXNP-9300RW'.

Inside the tarball, another fwimage.tgz was encrypted differently, indicating the need for a different approach than the one used by Matt Brown in his analysis. Analysis of the fwupgrader binary revealed obfuscation in the decoding of the rootfs, where the AES key is XORed against a small static key table in the binary and reassembles itself at runtime.

The KEY and IV hard-coded (the same across the entire model line) were: KEY = dfa049bb922e63e2decc764af5628068e5b7a2662e479a615b14643e567579b0 and IV = 53f926801b81454a4f889c9a390db6e6. With this information, it was possible to access the root of the system.

Some interesting data was found, including a GitHub token present in about 30 files. The token had administrator privileges in hundreds of Hanwha's GitHub organization repositories. The presence of the token was a consequence of the UI build with vite, where a variable is defined as the content of process.env at build time.

Other sensitive information, such as IP addresses associated with the US Department of Defense, was found, raising questions about Hanwha Vision's relationship with the American government. Hanwha Vision, founded as Samsung Techwin, is a subsidiary of the Hanwha group and previously had products associated with the defense sector.

Upon checking for other tokens, about 500 firmwares were downloaded from Hanwha's page, resulting in 62% extraction with the same technique and the discovery of three identical tokens. After a brief report was sent to Hanwha, the company responded in 12 hours, informing that the token had been revoked.

This incident highlights the need for greater care with security and credential management in connected devices and software.
