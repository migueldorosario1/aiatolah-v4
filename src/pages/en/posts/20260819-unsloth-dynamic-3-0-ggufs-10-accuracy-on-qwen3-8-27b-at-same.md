---
layout: ../../../layouts/PostLayout.astro
title: 'Unsloth Dynamic 3.0 GGUFs: +10% Accuracy on Qwen3.8-27B at Same Size'
date: 2026-08-19
category: 'Models and Algorithms'
lang: "en"
excerpt: "Unsloth launches Dynamic v3.0 for Qwen3.8-27B: +10% top-1% accuracy vs competitors, Divergence-300 @32 and KL Divergence improved, no QAT/QAD — per unsloth"
source: 'https://unsloth.ai/docs/basics/dynamic-3.0-ggufs'
heroImage: "/hero/unsloth-dynamic-3-0-ggufs-10-precisao-em-qwen3-8-27b-com-mes.jpg"
hero_credit: "deltaMike via Openverse (by)"
hero_legenda: "Unsloth Dynamic 3.0 GGUFs: +10% precisão em Qwen3.8-27B com mesmo tamanho"
---
Unsloth Dynamic v3.0 has been officially released as the new generation of dynamic quantization, representing a significant improvement over v2.0. The update delivers GGUF quants of the Qwen3.8-27B model that achieve over 10% higher top-1% accuracy compared to all other providers — while maintaining *exactly the same disk size*.

According to unsloth.ai, this is an update to the first preliminary release of Dynamic v3.0 announced earlier. The new GGUF files are compatible with most inference engines, including llama.cpp and Unsloth Desktop.

The v3.0 methodology preserves more model quality without increasing footprint. Superior results were observed on metrics such as Divergence-300 @32 and KL Divergence. The advancement stems from a much higher-quality imatrix calibration dataset — composed of diverse sources and specifically refined for agent coding, conversation, and multilingual performance tasks.

There is *no training* on the imatrix calibration dataset. Nor are Quantization-Aware Training (QAT) or Quantization-Aware Distillation (QAD) techniques used. Everything is done exclusively via post-training quantization (PTQ). The imatrix file used is publicly available for testing, evaluation, and community use — encouraging collaborative variations and fine-tunes of Qwen3.8 based on Unsloth’s quants and imatrix.

Structural optimizations were made: the MTP module was removed from quants smaller than UD-Q2_K_XL (i.e., up to 8.37 GB), saving ~500 MB of disk space. For users requiring MTP, it can be used separately with Q4_0.

Smaller UD-1bit quants were also introduced, such as the 6.2 GB UD-IQ1_S (without MTP), which retains ~72% of top-1% accuracy — while being 89% smaller than the original.

The UD-Q2_K_XL quant achieves approximately +8% higher top-1% accuracy than the next best competitor. At 9.83 GB, it successfully generated a functional HTML program with only a minor JavaScript bug — something that failed in prior versions.

To assess real-world robustness, Unsloth created the Divergence-300 @32 benchmark: a set of 300 examples held *out-of-distribution* from the calibration dataset, drawn from Terminal-Bench 2.1, DeepSWE, Harbor, MathArena 2025–26, and non-Latin/long prompts. Greedy argmax decoding over 32 tokens was performed in BF16 and across all quantized versions. This method measures output trajectory similarity against the BF16 baseline — making it a more reliable metric than isolated top-1%.

In KL Divergence benchmarks, Unsloth’s UD-3 quants achieve up to +10% extra top-1% accuracy *at the same disk size* — especially at smaller quantization sizes. All graphs exclude the MTP header from disk-size calculations to ensure fair comparison.

Unsloth demonstrates no overfitting: comparing UD-3 vs the older UD-2 on unseen sets (Wikitext and code) shows large KL Divergence improvements — though larger models still use UD-2 while experiments continue. Rigorous leakage control is enforced using *completely disjoint* datasets for calibration and testing. The absence of QAT/QAD further reinforces low overfitting propensity.

Dynamic v2.0, previously launched, had already set new benchmarks on Aider Polyglot, MMLU 5-shot, and KL Divergence. Prior updates included benchmarks for Qwen3.6 and Gemma 4 (Apr 20, 2026), Qwen3.5 with tool-call template fixes (Feb 27, 2026), and DeepSeek V3.1 results on Aider Polyglot (Sep 10, 2025).

Unsloth also highlights its active role in fixing bugs in major models: direct collaborations with the Qwen3, Meta (Llama 4), Mistral (Devstral), Google (Gemma 1–3), and Microsoft (Phi-3/4) teams have yielded measurable accuracy improvements.

Dynamic GGUFs now run natively in Unsloth Studio. The company built an internal evaluation framework to faithfully replicate official MMLU 5-shot scores for Llama 4 and Gemma 3 — enabling rigorous comparisons between full-precision, Dynamic v2.0, QAT, and standard imatrix quants.

The choice of KL Divergence as the central metric follows recommendations from the paper 'Accuracy is Not All You Need', which shows its strong correlation with 'flips' — i.e., changes from correct to incorrect answers (and vice versa). Perplexity is discarded because it masks errors via token-level value cancellation.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
