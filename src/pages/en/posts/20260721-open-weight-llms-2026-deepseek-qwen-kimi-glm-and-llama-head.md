---
layout: ../../../layouts/PostLayout.astro
title: 'Open-weight LLMs 2026: DeepSeek, Qwen, Kimi, GLM and Llama Head-to-Head'
date: 2026-07-21
heroImage: "/hero/open-weight-llms-2026-deepseek-qwen-kimi-glm-e-llama-frente.jpg"
hero_credit: "Wikimedia Commons (CC BY-SA 2.0) — Christopher Bowns"
category: 'Models and Algorithms'
lang: "en"
excerpt: "Technical comparison of price, context, license and performance of the leading open models in 2026, with emphasis on Chinese ones."
source: 'https://wavect.io/blog/open-weight-llm-comparison-2026/'
---
A year ago, choosing an LLM meant deciding between Western APIs and debating which was best. That debate is over. The open-weight families, mostly Chinese, have closed most of the gap in coding and reasoning at a fraction of the price per token, and several already operate under licenses that allow self-hosting on European infrastructure. The landscape has changed, and the cost lever has shifted along with it.

According to wavect.io, the problem is that 'open-weight' is not a single decision. DeepSeek, Qwen, Kimi, GLM and Llama differ in license, context window, strength in coding versus reasoning, and whether you can legally run them where your data resides. Choosing by the main benchmark can lead to a model that fails on your task or that you are not allowed to deploy.

What really separates the families in 2026?

Each family made a different bet. DeepSeek is the price disruptor: MIT license, strong general reasoning and coding, with prices that have anchored the market floor. Qwen (Alibaba) is the broadest family, with many sizes and Apache 2.0 license at the open levels. Kimi K2 (Moonshot) is the specialist in agentic coding, with a large mixture-of-experts model under a modified MIT license. GLM (Zhipu) is the coding-focused flagship, with MIT license and long context window. Llama (Meta) is the Western incumbent, with a huge ecosystem, but a community license that restricts use in the EU.

The pattern: Chinese families compete on price and increasingly on coding quality. Llama competes on ecosystem and context length, but carries license baggage that hits European teams.

Price, context and license in comparison

DeepSeek (Flash): input ~$0.14–0.55/1M tokens, output ~$0.28–2.20, context 128K–1M, MIT license. Best for high volume and cost-sensitive.

Qwen (Max, hosted): input ~$0.80–1.25, output ~$3.75–3.90, context 256K–1M, Apache 2.0 at open levels. Broad family, permissive open levels.

Kimi K2: input ~$0.60–0.95, output ~$2.50–4.00, context ~256K, modified MIT license. Best for agentic coding and tool use.

GLM (Flagship): input ~$1.00–1.40, output ~$3.20–4.40, context up to ~1M, MIT license. Best for long-horizon coding agents.

Llama (Maverick): price varies by host, context up to ~10M, community license with use restriction in the EU. Best for Western ecosystem and very long context.

Two points stand out: Chinese families cost 10 to 30 times less than leading Western tiers, resetting the cost math for high-volume products. And license is not a footnote: MIT and Apache 2.0 allow self-hosting and use in proprietary products; Llama's community license, with restrictions, can take it off the table before even discussing price.

Which family wins in coding or reasoning?

There is no single winner. For long-horizon coding agents, GLM and Kimi K2 are built for it, trading blows with the Western frontier on software engineering benchmarks. For general reasoning and breadth, DeepSeek and Qwen cover the widest variety of tasks. Raw coding accuracy on isolated tasks is now within a few percentage points of leading Western models. The hardest reasoning still leans toward the West, but the gap that mattered two years ago has largely closed for everyday engineering work.

Self-hosting in the EU without compliance headache

For a European team, this is where the families separate most. DeepSeek, GLM and Kimi, with MIT or modified MIT licenses, can be downloaded and run on EU infrastructure. Data never leaves your jurisdiction. Qwen, at the open levels with Apache 2.0, also self-hosts cleanly, but the Max level is hosted only and runs outside the EU. Llama, with its community license that restricts use in the EU, is a legal question, not a technical one.

The deeper point: self-hosting a Chinese open-weight model on European infrastructure is the move that gives both the price and the data residency story. Running the same model on a Chinese cloud provider does not offer the same guarantee.
