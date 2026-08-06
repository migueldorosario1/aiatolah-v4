---
layout: ../../../layouts/PostLayout.astro
title: 'SSH becomes a collaborative drawing canvas: ssh ssh.place'
date: 2026-08-06
category: 'Development'
lang: "en"
excerpt: "ssh.place turns SSH into a collaborative canvas: 200x60 cells, no account, one pixel every 15s."
source: 'https://ssh.place'
heroImage: "/hero/ssh-vira-tela-de-desenho-colaborativo-ssh-ssh-place.jpg"
---
SSH, the classic remote administration protocol, has gained an unusual use: turning into a collaborative drawing canvas. The ssh.place project, presented on Hacker News, allows anyone to draw on a shared canvas using only an SSH connection.

According to ssh.place, the proposal is simple: 'One canvas. Everyone draws on it over SSH.' There is no account to create or software to install. Just type `ssh ssh.place` in the terminal and start drawing.

The canvas is 200 by 60 cells, and each user can make a placement every 15 seconds. The pace is designed for real-time collaborative drawing, without flooding.

Any SSH key works. There is no registration: 'Any SSH key works. There is nothing to sign up for.' Authentication is done by the key itself, which maintains anonymity and simplicity.

Navigation is done with the `wasd` or `hjkl` keys, and the keys `0` to `9` select colors. The `tab` key cycles through the 16 available colors. The canvas is exclusively colored: the server rejects any character, so it is not possible to write text.

'This canvas is color only. The server turns down anything with a character in it, so you cannot write text here. Draw something instead.' The restriction forces users to express themselves visually, creating a space for collective art.

The cooldown is tied to the SSH key, so reconnecting does not reset the waiting time. The web page only reads the canvas; changes happen exclusively via SSH. 'This page only reads the canvas. It changes over SSH and nowhere else.'

The idea is a creative example of using traditional protocols for new forms of interaction. At a time when AI and graphical interfaces dominate, ssh.place rescues the simplicity of the terminal.

The project also raises questions about collaboration and moderation in digital spaces. Without text, drawing becomes the only language, which can reduce conflicts and encourage creativity.

For developers, it is a practical demonstration of how SSH can be used beyond server administration. The implementation is lean and accessible, and the code is available for those who want to explore.

ssh.place is an invitation to rethink old tools with new eyes. Instead of yet another web app, a decades-old protocol becomes a stage for collective art.

The initiative reinforces the democratic spirit of technology: without entry barriers, anyone with an SSH key can participate. It is a small gesture towards a more open and collaborative internet.

If you have a terminal and an SSH key, try it: `ssh ssh.place`. The canvas is waiting for your strokes.
