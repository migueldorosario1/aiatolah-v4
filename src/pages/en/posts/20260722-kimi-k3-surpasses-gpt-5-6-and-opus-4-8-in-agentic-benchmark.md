---
layout: ../../../layouts/PostLayout.astro
title: 'Kimi K3 surpasses GPT-5.6 and Opus 4.8 in agentic benchmark, but costs a lot'
date: 2026-07-22
heroImage: "/hero/kimi-k3-supera-gpt-5-6-e-opus-4-8-em-benchmark-agentico-mas.jpg"
hero_credit: "Wikimedia Commons (CC BY-SA 3.0) — Indrajit Das"
category: 'Models and Algorithms'
lang: "en"
excerpt: "Chinese 2.8T parameter model achieves second highest Elo on AA-Briefcase, behind only Claude Fable 5, with a cost of US$10.57 per task."
source: 'https://artificialanalysis.ai/articles/kimi-k3-agentic-knowledge-benchmark'
---
Moonshot AI launched the Kimi K3 last week, a 2.8 trillion parameter model that already occupies second place in the proprietary AA-Briefcase benchmark, according to artificialanalysis.ai.

The Kimi K3 achieved an Elo of 1543 on AA-Briefcase, surpassing models such as GPT-5.6 Sol (1501), Claude Sonnet 5 (1388), and Claude Opus 4.8 (1347). Only Claude Fable 5, with 1574, was ahead. The improvement over its predecessor Kimi K2.6 was 727 points.

AA-Briefcase is a benchmark developed by Artificial Analysis to measure performance on knowledge-intensive agentic tasks. It uses a private dataset with thousands of complex input files, requiring deliverables such as spreadsheets, presentations, and interface prototypes. The score combines correctness, analytical quality, and presentation quality.

On the Artificial Analysis Intelligence Index, Kimi K3 scores 57 points, comparable to Opus 4.8 and GPT-5.5. The model trails only Fable 5 on AA-Briefcase, but its cost per task is high: US$10.57 on average, one of the highest in the ranking.

This cost is driven by token pricing — US$3 per million input tokens and US$15 per million output tokens, with 90% discount for cached tokens — and by the high number of turns per task: 83 on average, compared to 67 for Fable 5 and 50 for GPT-5.6 Sol. The model also generates 120k output tokens per task, versus 42k for K2.6.

The average time per task is 56.4 minutes, one of the highest recorded on AA-Briefcase. This is about 2.5 times the time of Claude Fable 5 and 3.8 times that of Grok 4.5 (high). The slowness is due to the higher number of turns, high output token volume, and the lower speed of Kimi's own API.

In terms of analytical quality, Kimi K3 stands out: it achieved an Elo of 1754, practically tied with Claude Fable 5 (1744). However, in presentation quality, it scored lower: Elo of 1471, below GPT-5.6 Sol (1660) and Claude Opus 4.8 (1492). The pass rate on benchmark criteria was 51%, second highest, behind only Fable 5's 56%.

The launch of Kimi K3 is part of a recent wave of frontier models. In eight days, six different labs released models scoring above 50 on the Artificial Analysis Intelligence Index — including Grok 4.5, GPT-5.6, Muse Spark 1.1, and Kimi K3 itself. In June, only two labs had models at this level.

Despite the high cost and long task time, Kimi K3 represents a significant advance for Moonshot AI and the Chinese open model ecosystem. Its analytical performance rivals the best closed Western models, reinforcing the thesis that frontier artificial intelligence is not a monopoly of any country.
