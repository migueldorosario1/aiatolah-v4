---
layout: ../../../layouts/PostLayout.astro
title: 'Kimi Linear Outperforms Full Attention with 75% Less KV Cache'
date: 2026-07-31
category: 'Models and Algorithms'
lang: "en"
excerpt: "Moonshot AI's hybrid linear attention architecture outperforms full attention in all scenarios, with efficiency gains and open source."
source: 'https://arxiv.org/abs/2510.26692'
heroImage: "/hero/kimi-linear-supera-atencao-total-com-75-menos-cache-kv.jpg"
---
Researchers from Moonshot AI have published on arxiv.org the Kimi Linear, a hybrid linear attention architecture that, for the first time, outperforms full attention in fair comparisons across multiple scenarios — including short, long contexts, and scaling regimes with reinforcement learning.

At the center of the proposal is the Kimi Delta Attention (KDA), an expressive linear attention module that extends Gated DeltaNet with a more refined gating mechanism. This allows for more effective use of the limited memory of finite-state RNNs.

The chunkwise algorithm developed by the team achieves high hardware efficiency through a specialized variant of Diagonal-Plus-Low-Rank (DPLR) transition matrices. This approach significantly reduces computation compared to the general DPLR formulation while staying more consistent with the classic delta rule.

The researchers pre-trained a 3B activated and 48B total parameter Kimi Linear model, based on a layer-wise hybrid combination of KDA and Multi-Head Latent Attention (MLA).

Experiments show that with an identical training recipe, Kimi Linear significantly outperforms full MLA in all evaluated tasks. Meanwhile, it reduces KV cache usage by up to 75% and achieves up to 6x the decoding rate for a 1M context.

These results demonstrate that Kimi Linear can be a direct replacement for full attention architectures, with superior performance and efficiency, even in tasks with longer input and output lengths.

To support future research, the team has open-sourced the KDA kernel and implementations for vLLM, as well as releasing the pre-trained and instruction-tuned model checkpoints.

The paper is available on arxiv.org under the title 'Kimi Linear: An Expressive, Efficient Attention Architecture'.
