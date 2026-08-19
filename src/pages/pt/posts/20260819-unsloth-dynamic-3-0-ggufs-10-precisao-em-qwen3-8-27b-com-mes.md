---
layout: ../../../layouts/PostLayout.astro
title: 'Unsloth Dynamic 3.0 GGUFs: +10% precisão em Qwen3.8-27B com mesmo tamanho'
date: 2026-08-19
category: 'Modelos e Algoritmos'
lang: "pt-br"
excerpt: "Unsloth lança Dynamic v3.0 para Qwen3.8-27B: +10% top-1% accuracy vs concorrentes, Divergence-300 @32 e KL Divergence aprimorados, sem QAT/QAD — segundo un"
source: 'https://unsloth.ai/docs/basics/dynamic-3.0-ggufs'
heroImage: "/hero/unsloth-dynamic-3-0-ggufs-10-precisao-em-qwen3-8-27b-com-mes.jpg"
hero_credit: "deltaMike via Openverse (by)"
hero_legenda: "Unsloth Dynamic 3.0 GGUFs: +10% precisão em Qwen3.8-27B com mesmo tamanho"
---
Unsloth Dynamic v3.0 foi lançado oficialmente como nova geração de quantização dinâmica, representando uma melhoria significativa sobre a versão v2.0. A atualização traz quants GGUF do modelo Qwen3.8-27B que alcançam mais de 10% a mais em top-1% accuracy comparado a todos os demais provedores — mantendo exatamente o mesmo tamanho em disco.

Segundo unsloth.ai, essa é uma atualização da primeira versão preliminar de Dynamic v3.0 divulgada anteriormente. Os novos arquivos GGUF são compatíveis com a maioria dos motores de inferência, incluindo llama.cpp e Unsloth Desktop.

A metodologia v3.0 preserva mais qualidade do modelo sem aumentar o footprint. Resultados superiores foram observados em métricas como Divergence-300 @32 e KL Divergence. O avanço se deve a um conjunto de calibração imatrix de muito maior qualidade, composto por fontes diversas e refinado especificamente para tarefas de codificação agente, conversação e desempenho multilíngue.

Não há treinamento no dataset de calibração imatrix. Também não são usadas técnicas de Quantization-Aware Training (QAT) ou Quantization-Aware Distillation (QAD). Tudo é feito exclusivamente via pós-treinamento (PTQ). O arquivo imatrix utilizado está publicamente disponível para testes, avaliação e uso pela comunidade — incentivando variações e fine-tunes colaborativos de Qwen3.8 com base nos quants e no imatrix da Unsloth.

Foram feitas otimizações estruturais: o módulo MTP foi removido de quants menores que UD-Q2_K_XL (ou seja, até 8,37 GB), economizando cerca de 500 MB de espaço em disco. Para quem precisa do MTP, ele pode ser usado separadamente com Q4_0.

Também foram introduzidos quants UD-1bit menores, como o UD-IQ1_S de 6,2 GB (sem MTP), que mantém cerca de 72% da precisão top-1% — ao mesmo tempo em que é 89% menor que a versão original.

O quant UD-Q2_K_XL atinge aproximadamente +8% a mais em top-1% accuracy que o próximo melhor concorrente. Com 9,83 GB, ele conseguiu gerar um programa HTML funcional com apenas um pequeno bug em JavaScript — algo que falhava nas versões anteriores.

Para avaliar robustez real, a Unsloth criou o benchmark Divergence-300 @32: um conjunto de 300 exemplos mantidos fora do dataset de calibração, extraídos de Terminal-Bench 2.1, DeepSWE, Harbor, MathArena 2025–26 e prompts não latinos/longos. Foi feita decodificação greedy argmax por 32 tokens em BF16 e em todas as versões quantizadas. Esse método mede a similaridade das trajetórias de saída com a versão BF16 — tornando-se uma métrica mais confiável que top-1% isolado.

Nos benchmarks de KL Divergence, os quants UD-3 da Unsloth obtêm até +10% extra em top-1% accuracy no mesmo espaço em disco — especialmente em tamanhos menores de quantização. Todos os gráficos excluem o cabeçalho MTP do cálculo de espaço em disco para garantir comparação justa.

A Unsloth demonstra que não há overfitting: ao comparar UD-3 com o antigo UD-2 em conjuntos não vistos (Wikitext e código), houve grande melhoria no KL Divergence — embora os modelos maiores ainda usem UD-2 enquanto experimentos continuam. O controle rigoroso contra vazamentos é feito com datasets totalmente distintos para calibração e teste. A ausência de QAT/QAD reforça a baixa propensão a overfitting.

A Dynamic v2.0, lançada anteriormente, já havia estabelecido novos patamares em Aider Polyglot, MMLU 5-shot e KL Divergence. Atualizações anteriores incluíram benchmarks para Qwen3.6 e Gemma 4 (20 abr 2026), Qwen3.5 com correções em templates de chamada de ferramentas (27 fev 2026) e resultados do DeepSeek V3.1 em Aider Polyglot (10 set 2025).

A Unsloth também destaca seu papel ativo na correção de bugs em modelos principais: colaborações diretas com as equipes de Qwen3, Meta (Llama 4), Mistral (Devstral), Google (Gemma 1–3) e Microsoft (Phi-3/4) resultaram em melhorias mensuráveis de precisão.

Os GGUFs Dynamic agora rodam nativamente no Unsloth Studio. A empresa construiu um framework interno de avaliação para replicar com fidelidade os scores oficiais de MMLU 5-shot de Llama 4 e Gemma 3 — permitindo comparações rigorosas entre precisão total, Dynamic v2.0, QAT e quants imatrix padrão.

A escolha da KL Divergence como métrica central segue recomendações do artigo 'Accuracy is Not All You Need', que mostra sua forte correlação com 'flips' — mudanças de respostas corretas para incorretas (e vice-versa). Perplexity é descartada por mascarar erros via cancelamento de valores de tokens.
