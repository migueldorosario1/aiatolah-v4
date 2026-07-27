---
layout: ../../../layouts/PostLayout.astro
title: 'Inflect-Micro-v2: Advancing Speech Synthesis Under 10M Parameters'
date: 2026-07-27
category: 'Models and Algorithms'
lang: "en"
excerpt: "Inflect-Micro-v2 offers full English speech synthesis with a fixed model, capable of handling long texts and running on CPU or CUDA."
source: 'https://huggingface.co/owensong/Inflect-Micro-v2'
heroImage: "/hero/inflect-micro-v2-avancando-na-sintese-de-voz-sob-10m-paramet.jpg"
---
The Inflect-Micro-v2 model, released by Hugging Face, represents a significant advancement in text-to-speech synthesis, presenting a complete model with fewer than 10 million parameters. With a total of 9,356,513 parameters and a size of 37.53 MB in the FP32 version, this model offers a mono output at 24 kHz, highlighting its efficiency and data compression.

The creator, Owen, mentions that if the Inflect-v2 model gains popularity among users, he intends to continue the project with a v3 version, expanding it to include more languages, voices, and stability improvements. To support development, users who find the model useful are encouraged to leave a like on the Hugging Face platform.

Inflect-Micro-v2 stands out through its evaluations on various aspects, including human preference, predicted naturalness, multi-ASR intelligibility, and runtime, rather than providing only an unverified score. The Micro version focuses on quality under 10 million parameters, while the Nano aims for an even smaller footprint under 4 million.

Evaluations show that Inflect-Micro-v2 achieved a preference rate of 66.2% in the final community study, demonstrating a clear community trend. The model obtained a performance of 4.395 on UTMOS22, a learned predictor not based on human MOS. In terms of intelligibility on unseen texts, the model presented word error rates (WER) of 2.52% and 5.45% on the Qwen3-ASR and Nemotron 3.5 benchmarks, respectively.

Regarding CPU runtime, Inflect-Micro-v2 synthesizes audio faster than real-time. Using a Hugging Face CPU update instance (8 vCPU, 32 GB RAM) and four framework threads, the model performed at 6.28 times real-time.

Users interested in installing and using Inflect-Micro-v2 locally can do so via the command 'hf download owensong/Inflect-Micro-v2 --local-dir Inflect-Micro-v2', followed by installing dependencies and running the model on their device.

Inflect-Micro-v2, with its emphasis on quality and ability to handle long texts, represents a notable advancement in speech synthesis technology, offering a viable solution for local and compact applications.
