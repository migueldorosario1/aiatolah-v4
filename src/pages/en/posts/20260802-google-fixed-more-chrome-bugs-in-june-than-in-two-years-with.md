---
layout: ../../../layouts/PostLayout.astro
title: 'Google fixed more Chrome bugs in June than in two years, with AI'
date: 2026-08-02
category: 'Security and Ethics'
lang: "en"
excerpt: "With AI agents, Google fixed 1072 Chrome security bugs in two months, surpassing 23 previous versions."
source: 'https://blog.google/security/chrome-stronger-with-every-update/'
heroImage: "/hero/google-corrigiu-mais-bugs-do-chrome-em-junho-do-que-em-dois.jpg"
---
Google announced that, thanks to the intensive use of artificial intelligence, it fixed more Chrome security bugs in June 2026 than in the previous two years. The information was released on the company's official blog, blog.google.

The company states that it is experiencing a massive shift in the software security industry. Large language models (LLMs) are enabling automated discovery of vulnerabilities at an unprecedented scale, surpassing the limits of human expertise.

The goal is to use AI models to find and fix hundreds of security bugs faster than ever. Google detailed how it is doing this on three fronts: finding, triaging, and fixing vulnerabilities.

## Finding vulnerabilities

The Chrome security team has used LLMs for years. In 2023, they developed ways to increase fuzzing coverage. In 2024, they worked with Project Zero on Naptime. In 2025, they collaborated with DeepMind and Project Zero on Big Sleep, an agent that found bugs in the V8 engine and the graphics stack.

In early 2026, they built an agent harness using Gemini to find vulnerabilities across Chrome's codebase, with greater efficiency and fewer false positives. One of the bugs found was a sandbox escape that allowed a compromised renderer to trick the browser into reading local files — a bug that survived for more than 13 years in the code.

Google improved the harness by adding support for multiple models, building a knowledge base with CVEs and Git history, encouraging SECURITY.md files, adding a 'critic' agent, and running the models multiple times to handle non-determinism.

All of this was done securely: the models analyze code strictly at rest, on machines without internet access, with strict allowlists and no unrestricted mode.

## Automated triage

Security report triage, which previously took 5 to 30 minutes per bug, is now automated with AI. The process has four phases: filtering noise, reproducing bugs, enriching with metadata, and automatic assignment.

Google estimates this saves hundreds of hours of work per month.

## Fixing bugs at scale

To fix bugs at scale, Google uses multi-agent workflows: a fix agent generates multiple candidate fixes, a critic agent evaluates the best one, and test agents write tests. This mimics a code review process.

The result: in the last two Chrome versions, 149 and 150, 1072 security bugs were fixed, surpassing the total of the previous 23 milestones combined.

Google also integrated tools like BigSleep and CodeMender into the continuous integration system, running every 24 hours. In May, the results were significant.

The company also saw an increase in external bug reports: in March, it received more reports than in all of 2025. Therefore, it adjusted the VRP program to focus on submissions that complement internal discovery.

With this approach, Google reinforces its commitment to Chrome security, using AI to stay one step ahead of attackers.