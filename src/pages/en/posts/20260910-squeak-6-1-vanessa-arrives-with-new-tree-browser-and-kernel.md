---
layout: ../../../layouts/PostLayout.astro
title: 'Squeak 6.1 ''Vanessa'' arrives with new tree browser and kernel improvements'
date: 2026-09-10
category: 'Development'
lang: "en"
excerpt: "Squeak 6.1 'Vanessa' brings a new tree browser, the return of Objectland, 1700+ patches, and a tribute to Vanessa Freudenberg."
source: 'https://squeak.org/release_notes/6.1/'
heroImage: "/hero/squeak-6-1-vanessa-chega-com-novo-navegador-de-arvore-e-melh.jpg"
hero_credit: "Ryan Finnie via Openverse (by-sa)"
hero_legenda: "Squeak 6.1 'Vanessa' arrives with new tree browser and kernel improvements"
---
The Squeak community has announced the release of Squeak 6.1, nicknamed 'Vanessa', in honor of Vanessa Freudenberg (1972-2025), one of the central figures of the project. The version arrives on the eve of the system's 30th anniversary, with a robust package of new features.

According to squeak.org, since the last version, four years ago, more than 1,700 patches have been merged, with over 9,000 method changes. The number is impressive and reflects the community's accelerated pace of development.

Among the highlights is a new tree browser, which allows navigating classes and categories using revamped hierarchical morphs. The tool promises to make exploring the system easier, with panels that show categories, classes, and message categories, as well as integrating Monticello packages.

Another awaited return is Objectland, also known as 'Worlds of Squeak', a playful environment that had disappeared from recent versions. The return of Objectland is a nod to Squeak's tradition as an educational and creative tool.

The kernel also received special attention, with various fixes and changes to the infrastructure for simulation, unwinding, and process scheduling, as well as class redesigns. These changes aim to stabilize and modernize the system's foundation.

In the tools area, the release brings significant improvements in inspection, debugging, profiling, and code versioning. The new 'send until…' command in debuggers allows searching for specific conditions in nested message sends, and the 'run to here' command has been improved to reach expressions in blocks.

The graphical interface, based on Morphic, underwent a major overhaul. Tree morphs gained new colors, keyboard and mouse shortcuts, and a configurable filter mode. It is now possible to search the entire tree, visible nodes, or the current selection, with highlighting of search terms.

Drag-and-drop support has also been improved: when dragging an item, nodes expand automatically after one second of hover. This makes it easier to organize classes and categories directly in the Squeak world.

Text editors also received polish: links are underlined on hover, and clicking and selecting text have become more convenient. When wrapping selections in single or double quotes, nested quotes are now automatically escaped.

High-density (high-DPI) screen compatibility has been extended to buttons, scrollbars, sliders, menus, multi-selection lists, trees, shadows, and other elements. Multilingual support has also been improved in several places.

A notable fix resolved an issue that prevented collapsed windows from applying a new interface theme and that caused a potentially significant memory leak. Another important fix prevented an incorrect warning on macOS about the VM being configured as a singleton application.

Overall stability has been reinforced, with fixes in layout, rendering, events, and performance of large widgets such as trees and transformation morphs. Compatibility with MVC (Model-View-Controller) has also been improved, reducing concurrency issues.

Squeak 6.1 also brings improvements to ST80, support for the classic environment, including a new item to close the world, high-DPI support in system views, and the View>>imageForm method for capturing screenshots of views.

The release notes are interactive and optimized for viewing within Squeak itself. Interactive links open in SqueakJS, a browser-based Smalltalk VM, with some limitations. For the best experience, the recommendation is to download Squeak and read the notes directly in the system.

Version 6.1 consolidates Squeak as a living and constantly evolving platform, maintaining the spirit of experimentation and community that characterizes it. With the tribute to Vanessa Freudenberg, the release also celebrates the legacy of a person fundamental to the project.

For more details, see the full release notes on the official Squeak website.
