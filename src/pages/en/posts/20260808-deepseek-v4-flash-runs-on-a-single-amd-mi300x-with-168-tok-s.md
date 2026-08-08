---
layout: ../../../layouts/PostLayout.astro
title: 'DeepSeek V4 Flash runs on a single AMD MI300X with 168 tok/s'
date: 2026-08-08
category: 'Hardware and Infrastructure'
lang: "en"
excerpt: "Repository shows how to run DeepSeek V4 Flash on an AMD MI300X, with 168 tok/s and 256K context, without quantization."
source: 'https://github.com/ryanzhou/deepseek-v4-flash-mi300x'
heroImage: "/hero/deepseek-v4-flash-roda-em-um-unico-amd-mi300x-com-168-tok-s.jpg"
hero_credit: "Photo by tweasel on Pixabay"
hero_legenda: "processor, pc, computers, amd, technology, amd, amd, amd, amd, amd"
---
A recently published GitHub repository details the setup for running DeepSeek V4 Flash (checkpoint 0731) on a single AMD MI300X GPU in production. The author, Ryan Zhou, shares patches, tweaks, and tuning tables that allow the 304-billion-parameter model to operate without additional quantization or weight offloading.

According to github.com, the stack uses vLLM ROCm nightly 0.26.1rc1.dev229+g124154a88.rocm723 and AITER 0.1.19. The results are impressive: 168.6 tok/s in single-stream decode, prefill of approximately 7.9–8.5K tok/s, and 542 tok/s aggregated with 8 concurrent streams. In a burst of 64 streams, the system achieves 830 tok/s without OOM or engine errors.

The validated context is 256K tokens, although the architecture supports up to 1M. The weights occupy 156.67 GiB in HBM, without additional quantization. The MI300X has 192 GB of HBM3 and 5.3 TB/s of bandwidth, about 2.4 times the HBM capacity of an H100 SXM5, at a list cost roughly half, according to the Doubleword analysis cited in the repository.

The official vLLM recipe is aimed at NVIDIA and newer AMD GPUs like MI325X and MI355X. To run on the MI300X, specific adjustments were needed: fixes for the FP8 format (the fnuz variant from AMD/Graphcore, which differs from the OCP standard), MoE routing under high concurrency, causal speculative verification, and CPU KV synchronization. The repository collects these fixes and pins the versions used in production.

The work of Fergus Finn and the Doubleword repository were fundamental in identifying the FP8 incompatibility, the lack of AITER fast paths on gfx942, risks of HIP-graph in sparse MLA decode, and bugs in MoE routing. The author then created correction overlays, a validated serving configuration with DSpark probabilistic drafting, and AITER tuning tables for the recurrent shapes on gfx942.

The KV strategy is hybrid: 20 GB of GPU cache fp8_ds_mla + 96 GiB of native CPU offload, with fencing correction in the load path. The stack uses Docker Compose with digest-pinned images, read-only mounted overlays, and diffs against the upstream base. The author provides SHA256SUMS to verify artifact integrity before the first start.

A healthy startup takes about 5 minutes and should show messages like 'Model loading took 156.67 GiB', 'GPU KV cache size: 1,927,444 tokens', and 'Capturing CUDA graphs (FULL)'. After capture, the VRAM high-water mark is ~204.5 GB out of 205.8 GB; if too little memory remains, the server may fail on the first request.

The overlays include fixes for the Triton MoE kernel (MXFP4), interleave layout for fused-SiLU, OGS geometry for gfx942, cache writer with FNUZ FP8 and preshuffle, 64-bit offsets in paged-MQA kernels, and deterministic prefill with BLOCK_H=64. Each overlay is a complete file mounted over the original, with the diff recorded.

The repository is a clear example of how the open-source community is adapting cutting-edge models to alternative hardware, reducing dependence on NVIDIA GPUs. With a single MI300X, it is possible to serve a 304B model with competitive performance, democratizing access to high-level AI.

For more details, see the original repository on GitHub.
