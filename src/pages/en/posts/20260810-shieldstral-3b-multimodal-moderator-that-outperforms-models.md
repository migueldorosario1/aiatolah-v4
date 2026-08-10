---
layout: ../../../layouts/PostLayout.astro
title: 'Shieldstral: 3B multimodal moderator that outperforms models 7x larger'
date: 2026-08-10
category: 'Security and Ethics'
lang: "en"
excerpt: "Mistral releases Shieldstral, a 3B multimodal safety classifier under Apache 2.0, outperforming models up to 7x larger."
source: 'https://mistral.ai/news/shieldstral/'
heroImage: "/hero/shieldstral-moderador-multimodal-de-3b-que-supera-modelos-7x.jpg"
hero_credit: "Photo by Harpal Singh on Unsplash"
hero_legenda: "Shieldstral: moderador multimodal de 3B que supera modelos 7x maiores"
---
Mistral AI has introduced Shieldstral, a 3-billion-parameter multimodal safety classifier with open weights. The model promises to outperform guardrails up to seven times larger in text moderation and sets a new state of the art in multimodal moderation.

The approach deviates from the norm: instead of fixed harm taxonomies, Shieldstral treats moderation as a question-answering task adaptable to policies. The user writes the policy in natural language at inference time, and the model returns a calibrated safety score.

According to Mistral, the model accepts policies in plain language at inference, unifying text and image safety evaluation without retraining. This allows a single checkpoint to adapt to new policies at deployment time.

Shieldstral was released under the Apache 2.0 license, as part of the newly formed Open Secure AI Alliance, of which Mistral is an inaugural member alongside NVIDIA and other organizations. The model runs efficiently on a single 16GB NVIDIA GPU.

Shieldstral's architecture is innovative: each request has three parts — an evaluation context, a yes/no question, and the content to be judged (text, image, or prompt-response pair). At inference, the model reads only the 'yes' and 'no' logits and normalizes them into a continuous safety score.

This formulation unifies prompt classification, response moderation, refusal detection, and toxicity into a single problem. Policies live entirely in the prompt, allowing a single checkpoint to adapt to new policies without retraining.

In benchmarks, Shieldstral matches or surpasses open guard models up to seven times larger in text safety, refusal detection, policy adaptability, and multimodal benchmarks. All evaluation examples were kept out of training.

Building the model involved four main challenges. First, unifying heterogeneous data: public safety datasets disagree on taxonomies and labels, so each dataset was converted to the same instruction-question-document format, with wording variation for generalization.

Second, teaching discrimination, not memorization: instead of training with fixed labels, contrastive pairs of safe texts rewritten to violate a specific policy but not another were created. This trains the model to distinguish which policy is violated, a skill that transfers to new policies.

Third, anchoring safety in images: since unsafe images cannot be synthesized by an LLM, visual safety data is scarce. The team supplemented with general image datasets as high-quality negatives and filtered image-question pairs with a vision-language reranker.

Fourth, combining complementary checkpoints: the model was fine-tuned with LoRA and merged via SLERP, combining a checkpoint calibrated on public data, one with fine policy discrimination, and the base instruct model. The merge recovers calibration and adaptability in a single model.

Shieldstral was built end-to-end on Mistral's own Forge platform, which managed infrastructure, data and model sharding, metrics, and logging. This allowed the team to focus on data, which determines the quality of the safety model.

Mistral sees Shieldstral as a step toward moderation that adapts to context, rather than forcing every product into a frozen taxonomy. Next steps include improving multilingual coverage, robustness for long documents, and broader multimodal safety.

The model is available for download, and the company invites the community to build on top of it. Mistral is also hiring to help improve AI.

With Shieldstral, Mistral reinforces the trend of open and efficient models, showing that it is possible to achieve high-level safety with a compact and adaptable model, without relying on closed giants.
