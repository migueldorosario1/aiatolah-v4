---
layout: ../../../layouts/PostLayout.astro
title: 'Kimi K3 no MI355X: AMD vence B300 em desempenho por dólar'
date: 2026-08-04
category: 'Hardware e Infra'
lang: "pt-br"
excerpt: "AMD MI355X roda Kimi K3 com 952 tok/s por nó, superando B300 em performance por dólar. Wafer.ai detalha otimizações."
source: 'https://www.wafer.ai/blog/kimi-k3-mi355x'
heroImage: "/hero/kimi-k3-no-mi355x-amd-vence-b300-em-desempenho-por-dolar.jpg"
---
A AMD segue provando seu valor em desempenho por dólar. Segundo a wafer.ai, o MI355X roda o modelo Kimi K3 a cerca de 952 tokens por segundo por nó, superando a concorrência da NVIDIA em eficiência de custo.

O Kimi K3 marca uma nova era para o código aberto, prometendo inteligência em nível Fable/Sol. Mas modelos mais inteligentes são maiores: o Kimi K3 tem 2,8 trilhões de parâmetros, exigindo mais de 1,5 TB de VRAM antes mesmo de alocar o cache KV para 1 milhão de tokens de contexto.

Nem um nó B200 (8 GPUs) consegue comportar o Kimi K3. As opções são servir em um nó de B300s, com 288GB de VRAM por GPU, ou usar dois nós B200 (TP16). Mas a AMD MI355X também tem 288GB de VRAM, a um custo cerca de 2,4 vezes menor que o B300 e 1,7 vezes menor que o B200.

A wafer.ai destaca que o suporte de software da AMD sempre foi um problema, mas a empresa já oferece suporte day-0 para o Kimi K3. Os resultados são impressionantes: em um benchmark com 1.024 tokens de entrada e 400 de saída, o MI355X atinge 952 tok/s por nó e 118 tok/s em stream único.

Isso representa mais de 3,8 vezes a taxa de transferência agregada por nó e mais de 1,3 vezes o decode de stream único da implantação TP16 B200 (que tem 498 tok/s em dois nós, cerca de 249 por nó). Os nós B300 ainda vencem em taxa de transferência agregada, com cerca de 1,65 vezes mais, mas a 2,4 vezes o preço, o MI355X esmaga o B300 em desempenho por dólar.

A tabela comparativa mostra: 8× MI355X (TP8) com 118 tok/s por stream, 952 tok/s agregados, 119 tok/s por GPU e 48 tok/s por dólar; 2×8 B200 (TP16) com 90 tok/s, 498 tok/s, 31 tok/s por GPU e 7 tok/s por dólar; B300 (TP8+DCP8) com 172 tok/s, 1.568 tok/s, 196 tok/s por GPU e 33 tok/s por dólar.

Os preços considerados são US$ 2,50 por GPU-hora para o MI355X, US$ 6,00 para o B300 e US$ 4,25 para o B200. A wafer.ai defende que os números do B200 são um pouco deflacionados por causa do all-reduce entre nós, mas ressalta que o Kimi K3 é um dos primeiros modelos em que o foco do MI355X em capacidade HBM dá uma vantagem prática sobre o B200.

Para alcançar esses números, a equipe usou decodificação especulativa. O K3 não vem com tensores de rascunho, então a única opção é um rascunho externo de difusão de bloco: RadixArk’s Kimi-K3-DSpark. No CUDA, funciona direto; no ROCm, houve um erro de NameError com top_k_renorm_prob.

A correção foi uma única função PyTorch, sem kernel customizado. Com a decodificação especulativa corrigida, o ganho foi de ~2,2 vezes em stream único, ~1,7 vezes por stream em carga moderada e +18% no agregado.

A otimização de prefill também foi crucial. O MI355X sofria com TTFT: um prefill frio de 172k tokens levava ~51s, contra ~23s no B300. O problema era um kernel de atenção genérico do Triton, que foi substituído pelo kernel MLA da AITER após um ajuste de shape (zero-padding de 12 para 16 cabeças).

O resultado: o kernel MLA ASM roda a ~13k tok/s em estado estacionário, contra ~4-7k do Triton, acelerando o prefill em ~2-3 vezes. Isso melhora o TTFT, não a taxa de transferência agregada.

A wafer.ai conclui que alcançar o melhor desempenho por dólar no MI355X foi relativamente simples, com menos bugs que o GLM5.2 e sem necessidade de kernels customizados. A pergunta que fica: o fosso do CUDA está morto?
