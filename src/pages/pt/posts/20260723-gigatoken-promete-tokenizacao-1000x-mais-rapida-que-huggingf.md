---
layout: ../../../layouts/PostLayout.astro
title: 'GigaToken promete tokenização 1000x mais rápida que HuggingFace'
date: 2026-07-23
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Nova biblioteca Rust alcança GB/s em tokenização, superando HuggingFace e tiktoken em benchmarks."
source: 'https://github.com/marcelroed/gigatoken/'
heroImage: "/hero/gigatoken-promete-tokenizacao-1000x-mais-rapida-que-huggingf.jpg"
---
O desenvolvedor Marcel Röed lançou o GigaToken, uma biblioteca de tokenização para modelos de linguagem que promete ser até 1000 vezes mais rápida que a HuggingFace Tokenizers. O projeto está disponível no GitHub e pode ser instalado via pip.

Segundo o repositório, tanto a HuggingFace Tokenizers quanto o tiktoken já rodam em Rust multithread, mas o GigaToken consegue taxas de gigabytes por segundo em hardware moderno. A biblioteca suporta uma ampla gama de CPUs e a maioria dos tokenizadores comuns.

O GigaToken pode ser usado com API própria ou em modo de compatibilidade com HuggingFace e tiktoken. No modo compatível, a saída é idêntica à das bibliotecas originais, mas o desempenho é um pouco menor — ainda assim muito superior.

Os benchmarks foram realizados no arquivo owt_train.txt (11,9 GB), representativo de texto extraído do CommonCrawl. Os testes rodaram em três configurações: AMD EPYC 9565 72-Core dual socket (144 núcleos), Apple M4 Max (16 núcleos) e AMD Ryzen 7 9800X3D (8 núcleos/16 threads).

No EPYC, o GigaToken atingiu 24,53 GB/s com o tokenizador GPT-2, contra 24,8 MB/s da HuggingFace — uma vantagem de 989 vezes. Para Phi-4, foram 24,00 GB/s (801x). Para Qwen 3, 22,16 GB/s (648x). Para DeepSeek V3/R1/V4, 19,69 GB/s (750x). Para Kimi K2, 18,85 GB/s (sem comparação).

No Apple M4 Max, o GigaToken alcançou 8,79 GB/s com GPT-2, 1.268 vezes mais rápido que HuggingFace. Para OLMo 2/3, 7,56 GB/s (1.299x). Para Qwen 2/2.5, 6,37 GB/s (1.105x).

No Ryzen 7 9800X3D, o GigaToken fez 6,27 GB/s com GPT-2 (106x). Para Phi-4, 6,09 GB/s (110x). Para Qwen 3, 5,34 GB/s (98x).

Os tokenizadores baseados em SentencePiece são os mais lentos no GigaToken, com ganhos menores. Por exemplo, Gemma 4 atingiu 4,82 GB/s no EPYC (14x) e Mistral 7B v0.3, 3,57 GB/s (10x).

O GigaToken lê o arquivo inteiro sem divisão prévia, fazendo mais trabalho que as alternativas, que recebem apenas os primeiros 100 MB (HuggingFace) ou 1 GB (tiktoken) já pré-divididos. Ainda assim, a velocidade é muito superior.

O projeto é código aberto e pode ser uma ferramenta importante para quem precisa tokenizar grandes volumes de texto rapidamente, especialmente em pipelines de treinamento ou inferência em lote.
