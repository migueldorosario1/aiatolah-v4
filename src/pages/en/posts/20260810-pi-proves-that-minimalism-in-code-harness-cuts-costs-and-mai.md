---
layout: ../../../layouts/PostLayout.astro
title: 'Pi proves that minimalism in code harness cuts costs and maintains quality'
date: 2026-08-10
category: 'Development'
lang: "en"
excerpt: "Databricks study and Shopify case show that the minimalist Pi harness outperforms competitors with lower cost."
source: 'https://earendil.com/posts/pi-autoresearch-and-databricks/'
heroImage: "/hero/pi-prova-que-minimalismo-em-harness-de-codigo-corta-custos-e.jpg"
hero_credit: "Photo by Antonio Batinić on Pexels"
hero_legenda: "Pi prova que minimalismo em harness de código corta custos e mantém qualidade"
---
In a market where AI has made code cheaper and tools grow in complexity, the Pi harness chooses the opposite path. With only four native tools and a system prompt of less than 1,000 tokens, it bets on simplicity as a competitive differentiator.

According to earendil.com, Pi's philosophy is that most tasks can be solved with the basics — and the rest can be built through extensions. This seemingly counterintuitive approach has proven to be cheaper and more efficient in practice.

## Databricks study: cost per task

Databricks recently released the study 'Benchmarking Coding Agents on Databricks' Multi-Million Line Codebase', aiming to compare coding agents on real tasks and evaluate cost-effectiveness. To avoid biases from saturated external benchmarks, they created their own set based on tasks their engineers regularly perform.

The results surprised the industry. In the researchers' words, 'the harness from which a model is called drastically impacts cost and quality' and 'in many cases, simple harnesses like Pi performed best on our workloads'. Combined with Opus 4.8 in xhigh configuration, Pi achieved the highest overall pass rate, with significantly lower cost than Claude Code and Codex.

## Disciplined context

Pi stands out because it doesn't wrap the model in layers of instructions that get lost in the hierarchy. It stays out of the model's way, allowing the team to add only what they truly need for their workflow.

The Databricks study separates model from harness and reveals an important fact: running the same model with the same reasoning effort on different harnesses, 'cost per task differed significantly (more than 2x in some cases), while quality remained the same'. Pi sends about 3x less context per turn, maintains a leaner working set, and finishes tasks in fewer runs.

This 'context discipline' also applies at the model level. earendil.com observed that complex flows on Haiku 4.5 often came out more expensive than on Sonnet 4.6, especially with code execution, because the agent needed more turns to complete the task. Now, the same principle applies to the harness: stronger, more expensive models with an efficient harness can be cheaper than the opposite.

## Shopify and extensibility

Pi's minimalism does not mean inflexibility. On the contrary, it is the first widely used agentic infrastructure built for extensibility and self-editing.

Shopify validated this design in practice. David Cortés, from Shopify engineering, described building pi-autoresearch directly as a Pi extension, simply by asking: 'Pi, create an extension for Autoresearch...'. Pi reads its own extension documentation and starts building a new workflow.

Autoresearch is an autonomous optimization loop with coding agents. When you ask for a change, it runs experiments to discover what works and what causes regressions. As long as the target is measurable, it discards regressions and keeps self-improving.

The extension quickly became a serious internal productivity tool at Shopify. Reported cases include unit tests '300 times faster', React component assembly '20% faster', reduced build time in several projects, and improvements in pnpm performance.

The crucial point is that Pi doesn't come with any of these tools ready-made. Instead of assuming the vendor knows your workflow and trying to package everything, Pi assumes you know what's best and offers the extensibility to create your own flow.

## Why minimalism wins now

About a year ago, it was argued that native harnesses had a structural advantage, as models were built around them. That argument has weakened. Frontier models are now very competent at understanding a terminal-style coding environment and acting within it. Anthropic, for example, reduced Claude Code's system prompt by 80% — a clear sign of this trend.

The question has shifted from 'how native is the harness' to 'how does it handle context to avoid redundancy and act with clean primitives'. Models need a clean interface with the environment and a harness that doesn't waste context.

Pi offers that: less prompt overhead and repeated context, cheaper runs, and fewer unnecessary abstractions. Because it's extensible, you don't lose power, you gain selectivity — you add complexity only when it 'earns its place'.

Moreover, local models are evolving fast, and Pi's context discipline is especially valuable in that scenario. Local models often have smaller context windows and prefill can take a long time. Keeping a stable prompt prefix avoids minutes of re-prefill. With its minimal system prompt and lean toolset, Pi becomes an ideal harness for local models.

Pi is proving that it's possible to be cheaper, more minimalist, and more performant at the same time.
