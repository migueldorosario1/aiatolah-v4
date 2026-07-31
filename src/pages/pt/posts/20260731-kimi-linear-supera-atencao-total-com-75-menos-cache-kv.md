---
layout: ../../../layouts/PostLayout.astro
title: 'Kimi Linear supera atenção total com 75% menos cache KV'
date: 2026-07-31
category: 'Modelos e Algoritmos'
lang: "pt-br"
excerpt: "Arquitetura híbrida de atenção linear da Moonshot AI bate full attention em todos os cenários, com ganhos de eficiência e código aberto."
source: 'https://arxiv.org/abs/2510.26692'
heroImage: "/hero/kimi-linear-supera-atencao-total-com-75-menos-cache-kv.jpg"
---
Pesquisadores da Moonshot AI publicaram no arxiv.org o Kimi Linear, uma arquitetura híbrida de atenção linear que, pela primeira vez, supera a atenção total em comparações justas em múltiplos cenários — incluindo contextos curtos, longos e regimes de escalonamento com reinforcement learning.

No centro da proposta está o Kimi Delta Attention (KDA), um módulo de atenção linear expressivo que estende o Gated DeltaNet com um mecanismo de gating mais refinado. Isso permite uso mais eficaz da memória limitada de RNNs de estado finito.

O algoritmo chunkwise desenvolvido pela equipe alcança alta eficiência de hardware por meio de uma variante especializada de matrizes de transição Diagonal-Plus-Low-Rank (DPLR). Essa abordagem reduz substancialmente a computação em comparação com a formulação DPLR geral, mantendo-se mais consistente com a regra delta clássica.

Os pesquisadores pré-treinaram um modelo Kimi Linear com 3B parâmetros ativados e 48B parâmetros totais, baseado em uma combinação híbrida por camadas de KDA e Multi-Head Latent Attention (MLA).

Os experimentos mostram que, com uma receita de treinamento idêntica, o Kimi Linear supera o MLA completo com margem considerável em todas as tarefas avaliadas. Ao mesmo tempo, reduz o uso de cache KV em até 75% e alcança até 6 vezes a taxa de decodificação para um contexto de 1M.

Esses resultados demonstram que o Kimi Linear pode ser um substituto direto para arquiteturas de atenção total, com desempenho e eficiência superiores, inclusive em tarefas com comprimentos maiores de entrada e saída.

Para apoiar pesquisas futuras, a equipe disponibilizou como código aberto o kernel KDA e implementações para vLLM, além de liberar os checkpoints do modelo pré-treinado e ajustado por instruções.

O artigo está disponível no arxiv.org sob o título 'Kimi Linear: An Expressive, Efficient Attention Architecture'.
