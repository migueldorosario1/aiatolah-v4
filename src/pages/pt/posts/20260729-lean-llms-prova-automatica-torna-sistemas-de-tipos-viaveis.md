---
layout: ../../../layouts/PostLayout.astro
title: 'Lean + LLMs: prova automática torna sistemas de tipos viáveis'
date: 2026-07-29
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Engenheiro do Google mostra que LLMs podem automatizar provas em Lean, reduzindo drasticamente o esforço de verificação formal."
source: 'https://www.imperialviolet.org/2026/07/26/zstd-lean.html'
heroImage: "/hero/lean-llms-prova-automatica-torna-sistemas-de-tipos-viaveis.jpg"
---
A verificação formal sempre foi um sonho distante para a maioria dos programadores. Linguagens com tipos dependentes, como Coq (agora Rocq) e Lean, prometem checar invariantes complexas automaticamente, mas o custo em tempo de prova sempre foi proibitivo.

Segundo um engenheiro do Google em post no imperialviolet.org, o problema clássico é que 'com grande poder de tipos vem grande esforço de prova'. O projeto seL4, por exemplo, gastou cerca de 10 vezes mais tempo provando do que projetando e implementando, e gerou mais de 20 vezes mais linhas de código de prova do que código C.

Ferramentas como F* tentam automatizar com solvers SMT, mas o autor relata que é 'muito fácil criar algo que faz o solver SMT disparar e rodar por horas'. A solução acaba virando 'misticismo' — o programador precisa desenvolver um sexto sentido para o que agrada o solver.

Agora, LLMs combinados com o princípio de irrelevância de prova mudam esse cenário. Como o conteúdo da prova é irrelevante (apenas sua existência importa), um LLM pode gerar provas sem se preocupar com estrutura elegante. Em testes limitados, o autor afirma que LLMs conseguem evitar que o type checker exploda.

Para testar a ideia, ele construiu um descompressor Zstandard em Lean. Zstandard (de Yann Collet, baseado no trabalho seminal de Jarek Duda) está vencendo a competição para substituir gzip como compactador canônico. Oferece melhor codificação entrópica e velocidades de descompressão impressionantes.

O RFC do Zstandard é 'bastante conciso', exigindo múltiplas leituras. O autor descobriu que seu colega Nigel Tao já escreveu uma explicação melhor, então focou no codificador entrópico FSE.

FSE é uma máquina de estados com mais estados que símbolos. Cada símbolo ocupa uma fração dos estados proporcional à sua probabilidade. Diferente de Huffman, que força bits inteiros por símbolo, FSE permite médias fracionárias: metade dos estados de um símbolo lê 1 bit, metade lê 2 bits, atingindo a média desejada.

A tabela de estados nunca é transmitida — o RFC prescreve um algoritmo para construí-la a partir das probabilidades. Assim, apenas as probabilidades precisam ser enviadas.

O autor conclui que LLMs podem tornar sistemas de tipos dependentes 'dramaticamente mais práticos'. A automação de provas via LLMs reduz a necessidade de 'proof engineering' — a arte de estruturar provas para facilitar manutenção.

Ainda há desafios: provas complexas podem fazer o type checker consumir muita memória. Mas, com LLMs, o equilíbrio entre poder de tipos e esforço de prova pode finalmente pender para o lado prático.
