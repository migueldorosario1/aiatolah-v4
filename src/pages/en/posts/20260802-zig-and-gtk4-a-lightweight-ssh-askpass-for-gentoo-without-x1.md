---
layout: ../../../layouts/PostLayout.astro
title: 'Zig and GTK4: a lightweight ssh-askpass for Gentoo without X11'
date: 2026-08-02
category: 'Development'
lang: "en"
excerpt: "Developer creates ssh-askpass in Zig and GTK4 to avoid X11 and KDE dependencies on Gentoo."
source: 'https://xn--gckvb8fzb.com/a-gtk4-ssh-askpass-in-zig/'
heroImage: "/hero/zig-e-gtk4-um-ssh-askpass-leve-para-gentoo-sem-x11.jpg"
---
A Gentoo developer, tired of ssh-askpass options that drag in X11 or an entire KDE stack, decided to write their own solution. The result is a utility made in Zig 0.16 and GTK4, with hand-written bindings that keep X out of the compilation.

The author runs a hardened Gentoo on their laptop and, most of the time, doesn't need ssh-askpass because they use -sk keys for most systems. But there is a classic situation where the feature is needed: when a program wants the passphrase of a common ED25519 key, but has no terminal to read.

The typical case is `go get`, or the Go toolchain in general, fetching a private module via SSH during a build without a TTY. OpenSSH cannot prompt for input on a pipe, so it executes what `SSH_ASKPASS` points to and puts the passphrase prompt in a window.

For years, the author had nothing installed for this and had to work around the situation. The main reason is what Gentoo's Portage offers. A search for `ssh-askpass` returns five packages: `kde-plasma/ksshaskpass`, `lxqt-base/lxqt-openssh-askpass`, `net-misc/gnome-ssh-askpass`, `net-misc/ssh-askpass-fullscreen`, and `net-misc/x11-ssh-askpass`.

Each has at least one drawback that the author didn't want to tolerate. Their system runs with the global USE flag `-X`, so anything that needs X11 is ruled out before even looking. Of the five, `kde-plasma/ksshaskpass` is the only one without an X11 dependency, which would make it the obvious choice.

The problem is everything else that comes along. As a Sway user, the author didn't want a full KDE stack on the machine just to type an occasional passphrase. And that's exactly what installing `ksshaskpass` pulls in: a huge list of KDE Frameworks packages, including `kwallet`, `kconfig`, `ki18n`, and several others.

The emerge simulation shows dozens of packages, from `kde-frameworks/kf-env-6` to `kde-plasma/ksshaskpass-6.6.6`. That's 32 KiB in size for the main package, but the dependency chain is disproportionate.

On the other hand, `lxqt-base/lxqt-openssh-askpass` needs X directly. Additionally, it pulls some KDE framework packages and a Qt compiled with X support, which conflicts with the `dev-qt/qtbase` already installed on the system, compiled with `-X`. Portage stops at a slot conflict.

The dependency resolution took 3.10 seconds and showed a classic conflict: the installed `qtbase` has no X support, but KDE's `kwindowsystem` requires `qtbase` with `X`. Emerge suggests USE changes, but that would break the current configuration.

Faced with this scenario, the author decided to write their own ssh-askpass. The choice of Zig 0.16 and GTK4 is interesting: Zig is a modern systems language, focused on simplicity and safety, while GTK4 is a graphical toolkit that works well with Wayland, which matches Sway.

The bindings were hand-written, meaning there is no dependency on automatic generation tools. This keeps X out of the compilation and ensures the utility is lightweight and lean.

The solution solves a real problem for Gentoo users running systems without X11, but needing a graphical prompt for SSH keys. Instead of accepting a heavy stack, the developer opted for a minimalist and efficient alternative.

The original article, published on xn--gckvb8fzb.com, details the process and shows that sometimes the best way out is to write your own tool. The free software community thanks you.
