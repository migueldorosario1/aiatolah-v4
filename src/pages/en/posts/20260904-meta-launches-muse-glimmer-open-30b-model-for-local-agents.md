---
layout: ../../../layouts/PostLayout.astro
title: 'Meta launches Muse Glimmer: open 30B model for local agents'
date: 2026-09-04
category: 'Models and Algorithms'
lang: "en"
excerpt: "Meta Superintelligence Labs releases Muse Glimmer weights under Apache 2.0, optimized to run on consumer GPUs."
source: 'https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model'
heroImage: "/hero/meta-lanca-muse-glimmer-modelo-aberto-de-30b-para-agentes-lo.jpg"
hero_credit: "mrbill via Openverse (by)"
hero_legenda: "Meta lança Muse Glimmer: modelo aberto de 30B para agentes locais"
---
Meta Superintelligence Labs has introduced Muse Glimmer, a 30-billion parameter model designed for local agent workflows. The weights have been open-sourced under the Apache 2.0 license, reinforcing the company's tradition of sharing fundamental research.

According to research.meta.ai, the model is small enough to run on a Mac or PC with a single consumer GPU. This enables use cases such as local agents, function calling, local coding, and LLM-as-a-judge evaluation.

Muse Glimmer delivers strong performance on agentic use benchmarks when compared to other leading models in its size category.

## Why local?

Foundation models have achieved remarkable capabilities in reasoning, code generation, and tool use, but most deployments still rely on cloud infrastructure and network access. Running models locally allows you to use AI anywhere, anytime, with or without internet.

The open-source community has shown that smaller models, when effectively trained, can approach frontier performance on specific tasks. Muse Glimmer is optimized exactly for these local use cases.

## How it was trained

An agent that manages your schedule, drafts messages, organizes files, and learns how you work needs deep access to personal context. It also requires multiple capabilities in tandem: long-horizon execution, precise tool calling, multimodal understanding, long-context memory, and instruction following.

Muse Glimmer was designed to balance capability with the memory and compute constraints of local hardware. This required a compact architecture, a new distillation recipe that transfers agentic reasoning from a much larger teacher model, and inference optimizations including quantization.

Training occurred in three phases. In pre-training, the model was trained on Muse Spark outputs using logit distillation, with a data mix similar to the teacher's. Mid-training used longer-context and more agent-focused data with richer reasoning traces. Post-training combined supervised fine-tuning with a mixture of on-policy distillation and reinforcement learning across general, reasoning, coding, and agentic domains.

Muse Glimmer was evaluated under Meta's Advanced AI Scaling Framework standards and analyzed for open-weight release across all relevant categories.

## Agentic capabilities

The model was trained and evaluated on several fronts. It achieves strong success rates on full-task benchmarks, including DeepSearch QA, MCP-Atlas, τ-Bench, and SWE-Bench, which measure the ability to work in scaffolds, write and debug code, and resolve multi-turn requests end-to-end.

Muse Glimmer handles a wide range of function calls, invoking tools with precise schemas over extended workflows. It also chains reasoning over long horizons, maintaining coherent plans in complex flows.

When a tool call fails or returns an unexpected result, the model is trained to diagnose the error and retry, rather than stop. Through a dedicated perception encoder, the model accepts interleaved text and images, allowing agents to interpret screenshots, charts, and documents alongside the conversation.

Muse Glimmer works with OpenClaw and other agentic orchestration standards. It supports different reasoning intensities to choose the right balance between quality and speed. Additionally, it was trained on data from over 100 languages.

## Performance and optimizations

Meta evaluated Muse Glimmer on a wide range of benchmarks. Compared with Gemma4-31B and Qwen3.6-27B, the model performs well for its size class across several widely used LLM benchmarks.

To run on consumer hardware, Meta applied two key optimizations. In full precision, a 30-billion parameter model would require over 55 GB of memory, which is unfeasible for consumer GPUs. Using quantization to approximately 4 bits, the language model shrinks to under 20 GB, leaving room for working memory, the perception encoder, and the speculative decoding drafter to run simultaneously within a 24 GB or 32 GB envelope.

The second optimization is speculative decoding. Muse Glimmer comes with a lightweight 'drafter' model based on DFlash, which proposes entire blocks of tokens at once. The main model verifies these proposals in parallel, accepting correct tokens and correcting errors. This generates text significantly faster than token-by-token generation, with identical quality.

Meta measured the speed of the K-Quant-17GB model with the quantized drafter on MacBook M4-Max, M5-Max, and on an RTX-5090. The result is fast enough for fluid conversation and real-time agent interaction, all running on-device.

## Availability and next steps

Muse Glimmer weights are now available on Hugging Face. In the coming days, the model can be run locally via partners such as Ollama, LM Studio, and Unsloth, or deployed with edge frameworks like llama.cpp, ExecuTorch, and MLX. It can also be served at scale with vLLM and SGLang, or accessed quickly via partners like Together AI, Fireworks AI, and OpenRouter.

Developers can customize the model using PyTorch's TorchTitan training feature. Meta is also working with partners such as AMD, Arm, Dell, Intel, and NVIDIA to optimize performance across different devices.

The company released developer documentation, including guidance on setting up custom scaffolds. The release reinforces Meta's commitment to open research, now extended to the field of agentic AI, giving developers access to local agentic capabilities.
