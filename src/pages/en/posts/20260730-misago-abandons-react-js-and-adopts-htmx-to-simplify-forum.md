---
layout: ../../../layouts/PostLayout.astro
title: 'Misago abandons React.js and adopts HTMX to simplify forum'
date: 2026-07-30
category: 'Development'
lang: "en"
excerpt: "Open source forum project Misago removes React.js from codebase and adopts HTMX, eliminating template duplication and improving performance."
source: 'https://misago-project.org/t/removing-reactjs-from-the-codebase-and-adapting-htmx-for-ui-interactivity/1267/'
heroImage: "/hero/misago-abandona-react-js-e-adota-htmx-para-simplificar-forum.jpg"
---
The Misago project, an open source forum software, announced the removal of React.js from its codebase and the adoption of HTMX for interface interactivity. The decision was detailed in a discussion on the project's official forum.

According to Misago, the previous approach had significant problems. Many pages were implemented twice: as Django templates and as React.js components. This confused users who customized the HTML, seeing their changes appear for a second before being replaced by React's HTML.

Additionally, every view accessible to users and visitors had to be done in duplicate: as a Django view with templates and as a React route with components. This required an API and JSON serializers to feed the data, which made response generation slower.

Part of the translation messages were duplicated, living in 'django.po' and 'djangojs.po' files. The JavaScript translation files also increased the initial download size. Too much JavaScript could kill performance, especially on older and slower mobile devices.

To allow plugins to replace or inject custom HTML, it was necessary to implement both Django templates and React components. Misago would need to implement a JavaScript build step as part of the site construction in 'misago-docker'. Plugin developers would need to know both technologies.

The project considered two solutions: completely abandon Django views and templates, keeping only minimal versions for search engines, focusing on an API and the entire UI as a React app; or reduce Django to an API and use a JavaScript framework with server-side rendering, like Next.js or Remix.run.

However, the team realized that much forum software still takes the old approach: render as much as possible on the server and use client-side JavaScript only to improve interactivity at specific points. And users are happy with that. This approach has none of the listed problems.

Internet forums have quite a bit of interactivity, but it is isolated in specific places on the page: moderation actions, following a topic, writing a reply, viewing latest notifications, voting in a poll. All of this can be achieved without React.js and was done that way for years before they decided that reloading the entire page is something to avoid.

HTMX is a small library that allows developers to specify parts of the HTML as dynamic islands that can be swapped with new HTML rendered on the server upon interaction. For example, the topic list is a large island. With a bit of HTMX included in the Django template, changing the current category in the topic list could pull new HTML from Django only for the new list, keeping the rest of the page unchanged.

Misago's backend would only need to be changed to return only the HTML of that island when the request comes from HTMX, instead of the full page. There is no need for JSON serialization or writing dedicated JavaScript or React.

HTMX is a declarative way to do what was done with jQuery 20 years ago: '$.get('url', '#outlet')'. Or like Rails Turbolinks. The Misago team concluded that this is the correct approach for forum software, especially for those who hate infinite scroll or want to keep things simple.

The change represents a move against unnecessary complexity brought by heavy JavaScript frameworks in applications that don't need a full SPA. Misago opted for simplicity and performance, aligning with a growing trend of returning to server-side rendering with targeted interactivity improvements.
