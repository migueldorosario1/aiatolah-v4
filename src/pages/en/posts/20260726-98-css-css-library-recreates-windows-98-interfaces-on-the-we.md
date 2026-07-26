---
layout: ../../../layouts/PostLayout.astro
title: '98.css: CSS library recreates Windows 98 interfaces on the web'
date: 2026-07-26
category: 'Development'
lang: "en"
excerpt: "98.css is a CSS library that faithfully recreates the appearance of Windows 98. No JavaScript, compatible with any framework, and focused on accessibility."
source: 'https://jdan.github.io/98.css/#status-bar'
heroImage: "/hero/98-css-biblioteca-css-recria-interfaces-do-windows-98-na-web.jpg"
---
Designer Jordan Scales, under the pseudonym jdan.github.io, has launched 98.css, a CSS library that allows building interfaces faithful to Windows 98. The project is available on GitHub and can be installed via npm or directly imported from unpkg.

The library contains no JavaScript — it only styles HTML with CSS. This makes it compatible with any frontend framework, such as React or vanilla JavaScript. According to jdan.github.io, accessibility is a primary goal, and the use of semantic HTML is encouraged.

Available components include buttons, checkboxes, radio buttons, group boxes, text fields, and sliders. Each follows the original specifications of Windows 98: standard buttons measure 75px in width by 23px in height, with raised borders that become sunken when clicked. Disabled buttons maintain the raised border but with a faded appearance.

Checkboxes and radio buttons require associated labels via the 'for' attribute to ensure usability with assistive technologies. Group boxes are implemented with the fieldset tag and can contain a legend via legend. Text fields support single lines (input type='text') or multiple (textarea), and can be disabled with predefined values.

Sliders are rendered with a bar that defines the adjustment range and an indicator of the current position. The library also offers classes such as 'field-row' and 'field-row-stacked' for organizing groups of inputs.

The project is open source and aims to facilitate the creation of retro interfaces without sacrificing accessibility. Full documentation is available on the official site, with code examples for each component.
