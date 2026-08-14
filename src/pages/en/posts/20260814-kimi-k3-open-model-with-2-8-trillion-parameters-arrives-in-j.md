---
layout: ../../../layouts/PostLayout.astro
title: 'Kimi K3: open model with 2.8 trillion parameters arrives in July'
date: 2026-08-14
category: 'Models and Algorithms'
lang: "en"
excerpt: "Kimi K3, from Moonshot AI, is the first open source model in the 3 trillion parameter class, with 1M context and native vision."
source: 'https://platform.kimi.ai/docs/guide/kimi-k3-quickstart'
heroImage: "/hero/kimi-k3-modelo-aberto-de-2-8-trilhoes-de-parametros-chega-em.jpg"
hero_credit: "Photo by Steve A Johnson on Pexels"
hero_legenda: "Kimi K3: modelo aberto de 2,8 trilhões de parâmetros chega em julho"
---
Moonshot AI has unveiled the Kimi K3, its most capable flagship model to date, with 2.8 trillion parameters. The announcement was made on the company's official platform, platform.kimi.ai, which highlights the innovative architecture and the promise of releasing the weights by July 27, 2026.

The Kimi K3 is built on two architectural innovations: Kimi Delta Attention (KDA), a hybrid linear attention mechanism, and Attention Residuals (AttnRes). These changes are designed to improve information flow in long sequences and deeper models.

The model also brings native visual understanding and a 1 million token context window. It is the world's first open source model in the 3 trillion parameter class, according to the platform.

The company states that the K3 is aimed at frontier intelligence scenarios, such as long-horizon coding, knowledge work, and reasoning. Moonshot AI is working with inference partners and open source maintainers to align technical details and ensure a reliable launch in the ecosystem.

The full model weights will be released by July 27, 2026. More details on architecture, training, and evaluation will be published in the Kimi K3 technical report.

## Unprecedented scale in open source

The Kimi K3 is the first open source model to reach 2.8 trillion parameters. This is the latest step in Kimi's ongoing effort to push the boundaries of scale: in 9 of the last 12 months (July 2025 to July 2026), Kimi models have maintained the frontier in open model scale.

The architecture uses Stable LatentMoE, a framework that increases the sparsity of Mixture of Experts (MoE). The model efficiently activates 16 of 896 experts. Combined with improvements in training methodology and data recipes, the K3 has approximately 2.5 times the overall scaling efficiency of the K2, converting compute into capability more effectively.

## Coding and knowledge work

The Kimi K3 has strong long-horizon coding capabilities. With minimal human supervision, it can sustain long-duration engineering tasks, understand and work with large codebases, and coordinate terminal tools.

The model also excels in tasks that combine software engineering and visual reasoning. It can use screenshots and visual feedback to improve workflows in game development, frontend engineering, CAD, and related scenarios.

In knowledge work, the K3 advances end-to-end tasks. Beyond public benchmarks, Kimi K3 (max) shows consistent gains in internal evaluations, which reflect recurring task patterns and challenges from real agent-user collaboration workflows. The model demonstrates consistent advantages in production-oriented workflows.

## Access and requirements

The Kimi K3 is a flagship model: it is unlocked after a successful top-up (minimum $1). The accumulated top-up amount also determines the account level and rate limits (concurrency, RPM, TPM, TPD).

To get started, Python 3.9+ and the OpenAI SDK are required. The model always has reasoning mode enabled and supports configuration of reasoning effort with the top-level request field `reasoning_effort`, which accepts `low`, `high`, and `max` (default `max`).

For multi-turn conversations and tool calls, you must add the full assistant message returned by the API to the next request. Do not keep only the `content`.

## Streaming, vision, and structured output

Streaming provides separate deltas of `reasoning_content` and `content` from the final response. For vision messages, the `content` must be an array of objects, not a serialized string. Public image URLs are not supported; use base64 or `ms://<file-id>`.

For structured output, use `json_schema` with `strict: true` to constrain the final `content` of the message. Parse only that field, not the `reasoning_content`.

Partial mode allows continuing from a text prefix, adding an assistant message with `partial=True` at the end of `messages`.

## Tools and caching

The K3 supports `tool_choice='required'` in the first turn to require at least one tool call. After each execution, return the full assistant message and append a tool result with the corresponding `tool_call_id`.

Dynamic tool loading allows placing a complete tool definition in a `system` message without `content`. The declaration takes effect at the position in `messages` and must be maintained in the subsequent history.

Prefix caching is activated only when the prompt tokens of the previous request exceed 256. If they are smaller, the request is not cached and is discarded.

## Official tools and limits

Official tools are integrated via Formula: fetch the definitions at the `/tools` endpoint, add them to the `tools` field of Chat Completions, and when the model returns `tool_calls`, send each function name and arguments to the `/fibers` endpoint. Add the full assistant message and the Fiber output as the corresponding tool message.

Important limits: `max_completion_tokens` defaults to 131072 and can be configured up to 1048576. `temperature=1.0`, `top_p=0.95`, `n=1`, `presence_penalty=0`, and `frequency_penalty=0` are fixed and must be omitted. Web search is being updated and is not recommended for production in the short term.

## Pricing and FAQ

The Kimi K3 offers 1M token context and uses uniform pay-as-you-go pricing, with no tiers by context length. Input (with separate rates for cache hit and miss) and output are charged per token. It is not possible to turn off chain-of-thought: the K3 always thinks. If reasoning takes too long, set `reasoning_effort` to `low`.

The release of the Kimi K3 represents a milestone for open source, bringing trillion-parameter scale to the community. The expectation is that the model will drive advances in coding, reasoning, and knowledge work, consolidating Kimi's position at the frontier of open AI.
