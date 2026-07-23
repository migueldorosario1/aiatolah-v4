---
layout: ../../../layouts/PostLayout.astro
title: 'GigaToken promises tokenization 1000x faster than HuggingFace'
date: 2026-07-23
category: 'Development'
lang: "en"
excerpt: "New Rust library achieves GB/s tokenization, outperforming HuggingFace and tiktoken in benchmarks."
source: 'https://github.com/marcelroed/gigatoken/'
heroImage: "/hero/gigatoken-promete-tokenizacao-1000x-mais-rapida-que-huggingf.jpg"
---
Developer Marcel Röed has released GigaToken, a tokenization library for language models that promises to be up to 1000 times faster than HuggingFace Tokenizers. The project is available on GitHub and can be installed via pip.

According to the repository, both HuggingFace Tokenizers and tiktoken already run on multithreaded Rust, but GigaToken achieves gigabytes per second rates on modern hardware. The library supports a wide range of CPUs and most common tokenizers.

GigaToken can be used with its own API or in compatibility mode with HuggingFace and tiktoken. In compatible mode, the output is identical to the original libraries, but performance is slightly lower — still much higher.

Benchmarks were performed on the file owt_train.txt (11.9 GB), representative of text extracted from CommonCrawl. Tests ran on three configurations: AMD EPYC 9565 72-Core dual socket (144 cores), Apple M4 Max (16 cores), and AMD Ryzen 7 9800X3D (8 cores/16 threads).

On the EPYC, GigaToken reached 24.53 GB/s with the GPT-2 tokenizer, compared to 24.8 MB/s for HuggingFace — a 989x advantage. For Phi-4, it was 24.00 GB/s (801x). For Qwen 3, 22.16 GB/s (648x). For DeepSeek V3/R1/V4, 19.69 GB/s (750x). For Kimi K2, 18.85 GB/s (no comparison).

On the Apple M4 Max, GigaToken achieved 8.79 GB/s with GPT-2, 1,268x faster than HuggingFace. For OLMo 2/3, 7.56 GB/s (1,299x). For Qwen 2/2.5, 6.37 GB/s (1,105x).

On the Ryzen 7 9800X3D, GigaToken did 6.27 GB/s with GPT-2 (106x). For Phi-4, 6.09 GB/s (110x). For Qwen 3, 5.34 GB/s (98x).

SentencePiece-based tokenizers are the slowest on GigaToken, with smaller gains. For example, Gemma 4 reached 4.82 GB/s on EPYC (14x) and Mistral 7B v0.3, 3.57 GB/s (10x).

GigaToken reads the entire file without prior splitting, doing more work than alternatives, which receive only the first 100 MB (HuggingFace) or 1 GB (tiktoken) already pre-split. Still, the speed is much higher.

The project is open source and can be an important tool for those who need to tokenize large volumes of text quickly, especially in training or batch inference pipelines.
