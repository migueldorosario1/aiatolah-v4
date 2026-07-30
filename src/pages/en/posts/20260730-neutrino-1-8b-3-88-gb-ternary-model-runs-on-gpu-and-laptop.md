---
layout: ../../../layouts/PostLayout.astro
title: 'Neutrino-1 8B: 3.88 GB ternary model runs on GPU and laptop'
date: 2026-07-30
category: 'Models and Algorithms'
lang: "en"
excerpt: "Fermion Research launches Neutrino-1 8B with ternary weights that fit in 3.88 GB, serving GPU, Mac and CPU from the same artifact."
source: 'https://www.fermionresearch.com/models/neutrino-8b/'
heroImage: "/hero/neutrino-1-8b-modelo-ternario-de-3-88-gb-roda-em-gpu-e-lapto.jpg"
---
Fermion Research announced Neutrino-1 8B, an 8.19 billion parameter language model that stores all its 252 transformer linear layers in a proprietary ternary weight format, eight times smaller than fp16. The result is a single 3.88 GB file that runs on datacenter GPUs, Apple Silicon, and desktop CPUs without conversion.

According to Fermion Research, the ternary format keeps weights compressed at rest and decodes them inside matrix kernels, so nothing in the decoding path is stored as fp16 or fp32. This changes inference economics: since single-stream decoding is limited by how many bytes are moved per token, a 3.88 GB working set decodes at rates that a 16 GB fp16 artifact cannot achieve on the same memory system.

The entire model fits alongside its KV cache on an 8 GB GPU or a 16 GB laptop. The same container serves all platforms without conversion.

**Architecture**

Neutrino-1 8B is a dense decoder-only transformer with grouped-query attention, which keeps the KV cache at a quarter of the query width — 144 KiB per token in fp16. A 4 thousand token session consumes 0.60 GB of cache alongside the 3.88 GB of weights.

Only the transformer linear layers carry the encoded format. The two embedding tensors remain int8 because their rows are read one token at a time, and the normalization weights are too small to be worth encoding. One third of the file is vocabulary.

Of the 6.95 billion encoded weights, 62.63% are zero and the rest split into 18.68% positive and 18.69% negative — balanced to a hundredth of a point without any explicit constraint. The balance is not uniform across depth: the feed-forward gate and down projections reach 70 to 72% zeros in layers 1 to 3, while all four attention projections maintain about 62% at all depths.

**Single format, three ports**

The download is an encoded transport of the container, not a compressed copy of an fp16 model: it expands bit-exactly to the file that every runtime executes, and that single file runs on both datacenter GPU and laptop.

Fermion Research provides three ways to run:
- **Single command**: `pip install fermion-research` downloads the container and the platform's native binary. CPU runtimes for macOS arm64 and Linux x86-64, with a bit-exact torch reference path.
- **llama.cpp port**: the container converted to GGUF with the company's weight types, loaded by a public fork of llama.cpp. Full CUDA offload support.
- **Apple Silicon port**: native Python runtime with custom Metal kernels. The container is memory-mapped and the compressed plans are decoded inside GEMV kernels.

**Performance**

Fermion Research disclosed single-stream decoding rates with the same artifact on different surfaces:
- 24.9 tok/s on an Apple M5, CPU only, 9 threads
- 30.7 tok/s on an NVIDIA L4, 4.68 GiB with 4 thousand token context
- 33.7 tok/s on a MacBook base M5

**Speculative decoding**

Neutrino-1 0.6B acts as a draft model: it generates a token sequence, the 8B evaluates the entire sequence in a single forward pass, and the agreeing prefix is kept. A draft token is only accepted when it equals the 8B's argmax, ensuring the output is identical to pure greedy. In 27,648 consecutive tokens tested, there were zero divergences.

Speedup depends on prompt class. On counting prompts, the 8B accepts the full six-token draft each pass, emitting about seven tokens per 8B forward. On factual prompts, acceptance stays at 96.5%. A dynamic controller adjusts draft size per class.

Both containers have the same format and run on the same binaries, so the draft loads in the same process as the verifier without separate deployment. Its 328 MB sits alongside the 8B's 3.88 GB, and 4 thousand tokens of shared context cost exactly one gibibyte of cache for the pair.

The combination is not datacenter-exclusive. On a 16 GB Apple M5, both models load in a single MLX process under a 6 GiB limit and peak at 4.3 GiB together, with the draft occupying 0.53 GiB. The exactness gate returns 6 out of 6 prompts token-identical with and without draft, and on factual prompts the draft rate is 25.71 tok/s versus 22.00 tok/s without draft, with acceptance of 0.744.

**Availability and license**

Neutrino-1 8B is distributed in a single public repository containing weights, native binaries, GGUF package, and MLX package, all versioned together. There is no waitlist or restricted preview.

The weights are open under the Apache 2.0 License, allowing commercial use, modification, fine-tuning, and redistribution without needing to request or fill out an acceptance form. The model is derived from Qwen3-8B, also Apache-2.0. The pip package is Apache-2.0; the llama.cpp fork is MIT, following upstream.

To run, simply install with `pip install fermion-research` and use `fermion chat`. The OpenAI-compatible server is available at `fermion serve`.
