---
layout: ../../../layouts/PostLayout.astro
title: 'Textual fingerprint analysis reveals similarity between Kimi and Claude'
date: 2026-07-26
category: 'Models and Algorithms'
lang: "en"
excerpt: "Typebulb tool compares models by writing patterns; Kimi (Moonshot) and Claude (Anthropic) appear as the most similar."
source: 'https://typebulb.com/u/lab/you-re-relatively-right/full'
heroImage: "/hero/analise-de-impressao-digital-textual-revela-semelhanca-entre.jpg"
---
A new linguistic analysis tool developed by Typebulb is drawing attention from the AI community. Dubbed 'You're relatively right!', the application uses character trigrams and word n-grams to build a similarity heatmap between language models.

According to Typebulb, the tool calculates cross-entropy between each model's trigram distributions, using a pooled background of all models for smoothing. The result is a distance matrix that reveals which LLMs write most similarly.

The most commented data so far is the high similarity between Kimi, from Chinese startup Moonshot AI, and Claude, from Anthropic. The analysis suggests that the two models share patterns of lexical choice and phrase structure that distinguish them from the rest of the field.

The tool also identifies 'tell-tales' — terms or phrases that both models use at a frequency well above the average of the other tested models. To be considered a 'tell', the term must appear in at least three responses from each model (to avoid bias from a single response) and have a combined usage rate at least twice that of the field.

The algorithm applies a 'look-elsewhere' correction for multiple comparisons, ensuring that the signals found are statistically robust. The combined surprise — the log probability that both models would achieve their counts given the field rate — is used to rank the most distinctive terms.

The analysis uses the cl100k_base tokenizer (the same as GPT-4) to filter out very common terms: a term must cost more tokens than the number of words it contains, ensuring they are truly rare expressions and not just articles or prepositions.

Typebulb has made the tool's source code available in React with TypeScript, allowing the community to run their own analyses. Model metadata — including origin lab and release date — is loaded from a separate JSON data block.

The similarity between Kimi and Claude raises questions about architectural or training data influences. Kimi is an open-source Chinese model, while Claude is a proprietary American model. The tool does not specify the cause of the similarity, only measures it.

For the open-source community, the news is relevant: it shows that simple statistical text analysis methods can reveal relationships between models, helping to map the LLM ecosystem independently.

Typebulb plans to expand the tool to include more models and additional metrics, such as word bigram analysis and response length distributions. For now, the heatmap already offers a fascinating snapshot of who writes like whom in the world of LLMs.