---
layout: ../../../layouts/PostLayout.astro
title: 'Kimi K3 on MI355X: AMD Beats B300 in Performance per Dollar'
date: 2026-08-04
category: 'Hardware and Infrastructure'
lang: "en"
excerpt: "AMD MI355X runs Kimi K3 at 952 tok/s per node, beating B300 in performance per dollar. Wafer.ai details optimizations."
source: 'https://www.wafer.ai/blog/kimi-k3-mi355x'
heroImage: "/hero/kimi-k3-no-mi355x-amd-vence-b300-em-desempenho-por-dolar.jpg"
---
AMD continues to prove its value in performance per dollar. According to wafer.ai, the MI355X runs the Kimi K3 model at about 952 tokens per second per node, surpassing NVIDIA's competition in cost efficiency.

The Kimi K3 marks a new era for open source, promising intelligence at the Fable/Sol level. But smarter models are bigger: the Kimi K3 has 2.8 trillion parameters, requiring more than 1.5 TB of VRAM before even allocating the KV cache for 1 million tokens of context.

Not even a B200 node (8 GPUs) can fit the Kimi K3. The options are to serve on a node of B300s, with 288GB of VRAM per GPU, or use two B200 nodes (TP16). But the AMD MI355X also has 288GB of VRAM, at a cost about 2.4 times lower than the B300 and 1.7 times lower than the B200.

Wafer.ai highlights that AMD's software support has always been a problem, but the company already offers day-0 support for the Kimi K3. The results are impressive: in a benchmark with 1,024 input tokens and 400 output tokens, the MI355X achieves 952 tok/s per node and 118 tok/s in single stream.

This represents more than 3.8 times the aggregate throughput per node and more than 1.3 times the single-stream decode of the TP16 B200 deployment (which has 498 tok/s across two nodes, about 249 per node). B300 nodes still win in aggregate throughput, with about 1.65 times more, but at 2.4 times the price, the MI355X crushes the B300 in performance per dollar.

The comparative table shows: 8× MI355X (TP8) with 118 tok/s per stream, 952 tok/s aggregate, 119 tok/s per GPU, and 48 tok/s per dollar; 2×8 B200 (TP16) with 90 tok/s, 498 tok/s, 31 tok/s per GPU, and 7 tok/s per dollar; B300 (TP8+DCP8) with 172 tok/s, 1,568 tok/s, 196 tok/s per GPU, and 33 tok/s per dollar.

The prices considered are $2.50 per GPU-hour for the MI355X, $6.00 for the B300, and $4.25 for the B200. Wafer.ai argues that the B200 numbers are somewhat deflated due to all-reduce between nodes, but notes that the Kimi K3 is one of the first models where the MI355X's focus on HBM capacity gives a practical advantage over the B200.

To achieve these numbers, the team used speculative decoding. The K3 does not come with draft tensors, so the only option is an external block diffusion draft: RadixArk's Kimi-K3-DSpark. On CUDA, it works directly; on ROCm, there was a NameError with top_k_renorm_prob.

The fix was a single PyTorch function, no custom kernel. With speculative decoding fixed, the gain was ~2.2 times in single stream, ~1.7 times per stream under moderate load, and +18% in aggregate.

Prefill optimization was also crucial. The MI355X suffered from TTFT: a cold prefill of 172k tokens took ~51s, versus ~23s on the B300. The problem was a generic Triton attention kernel, which was replaced by AITER's MLA kernel after a shape adjustment (zero-padding from 12 to 16 heads).

The result: the MLA ASM kernel runs at ~13k tok/s in steady state, versus ~4-7k for Triton, speeding up prefill by ~2-3 times. This improves TTFT, not aggregate throughput.

Wafer.ai concludes that achieving the best performance per dollar on the MI355X was relatively simple, with fewer bugs than GLM5.2 and no need for custom kernels. The question remains: is the CUDA moat dead?
