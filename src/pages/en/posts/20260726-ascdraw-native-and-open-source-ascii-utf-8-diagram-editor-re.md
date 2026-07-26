---
layout: ../../../layouts/PostLayout.astro
title: 'ascdraw: native and open-source ASCII/UTF-8 diagram editor reaches 120+ FPS'
date: 2026-07-26
category: 'Development'
lang: "en"
excerpt: "Free GPLv3 tool for text diagrams, with infinite canvas, layers, and exportation in TXT/JSON/PNG formats."
source: 'https://github.com/exlee/ascdraw'
heroImage: "/hero/ascdraw-editor-de-diagramas-ascii-utf-8-nativo-e-open-source.jpg"
hero_credit: "Photo by Google DeepMind on Pexels"
---
Developer Przemysław Alexander Kamiński (exlee) has released ascdraw, a native ASCII/UTF-8 diagram editor, keyboard-oriented, and with rendering over 120 FPS. The software is distributed under the GPLv3 license, with an optional payment of $9.99 or €9.99 for personal license.

According to the GitHub repository, ascdraw offers an effectively infinite Unicode canvas for connected lines, symbols, shapes, text, rectangular editing, layers, and exportation in TXT, JSON, and PNG formats. The tool is still evolving but is already usable.

The editor operates in Stamp mode by default, with numbered menus and keyboard shortcuts. Directions are controlled by the arrow keys or the h, j, k, l keys. Actions such as drawing, erasing, selecting, and moving are combined with Ctrl, Alt, and Shift. The Text mode is activated with the i key, and the continuous replacement mode with Enter or Shift+R.

Among the available modes are: Stamp (symbols, arrows, fillings), Line (connected Unicode lines), Shape (outlined or filled rectangles), and Utils (push/pull lines and columns, move view). The Files/Togls mode (key 0) allows loading, saving, exporting, changing themes, and activating colors or layers.

Optional features include colors (16 ANSI-style colors, preserved in PNG and JSON), layers (add, hide, reorder, merge), and dark mode (less polished, according to the author, who prefers a white background).

ascdraw can edit native documents with automatic saving: `ascdraw drawing.json`. It also works as an external editing filter for editors such as Kakoune, Neovim, and Emacs, reading from standard input and writing to standard output.

Configuration is done via TOML files, with defaults packaged and overrides in `$XDG_CONFIG_HOME/ascdraw/config.toml` or `~/.config/ascdraw/config.toml`. The command `ascdraw --show-config` displays the merged configuration.

Development was assisted by OpenAI GPT-5.5 and GPT-5.6 models. The code is available on GitHub and can be compiled with Rust via `cargo build --release --locked`.
