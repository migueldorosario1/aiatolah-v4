---
layout: ../../../layouts/PostLayout.astro
title: 'Inflect-Micro-v2: Avançando na Síntese de Voz sob 10M Parâmetros'
date: 2026-07-27
category: 'Modelos e Algoritmos'
lang: "pt-br"
excerpt: "O Inflect-Micro-v2 oferece sintese de voz completa em inglês com um modelo fixo, capaz de manusear textos longos e funcionar em CPU ou CUDA."
source: 'https://huggingface.co/owensong/Inflect-Micro-v2'
heroImage: "/hero/inflect-micro-v2-avancando-na-sintese-de-voz-sob-10m-paramet.jpg"
---
O modelo Inflect-Micro-v2, lançado pela Hugging Face, representa um avanço significativo na sintese de voz por texto, apresentando um modelo completo em menos de 10 milhões de parâmetros. Com um total de 9,356,513 parâmetros e um tamanho de 37.53 MB na versão FP32, este modelo oferece uma saída mono de 24 kHz, o que destaca sua eficiência e compactação de dados.

O criador, Owen, menciona que, caso o modelo Inflect-v2 ganhe popularidade entre os usuários, ele pretende continuar o projeto com uma versão v3, expandindo-o para incluir mais idiomas, vozes e melhorias na estabilidade. Para apoiar o desenvolvimento, é incentivado aos usuários que acharem o modelo útil deixem um like na plataforma Hugging Face.

O Inflect-Micro-v2 destaca-se por meio de suas avaliações em vários aspectos, incluindo preferência humana, naturalidade predita, inteligibilidade multi-ASR e tempo de execução, em vez de fornecer apenas uma pontuação não verificada. A versão Micro se concentra na qualidade abaixo de 10 milhões de parâmetros, enquanto a Nano visa um pé menor abaixo de 4 milhões.

Avaliações mostram que o Inflect-Micro-v2 teve um índice de preferência de 66,2% no estudo comunitário final, demonstrando uma tendência clara da comunidade. O modelo obteve um desempenho de 4.395 na UTMOS22, um preditor aprendido não baseado em MOS humano. Em termos de inteligibilidade em textos não vistos, o modelo apresentou taxas de erro em reconhecimento de fala (WER) de 2.52% e 5.45% nas bases Qwen3-ASR e Nemotron 3.5, respectivamente.

Em relação ao tempo de execução na CPU, o Inflect-Micro-v2 sintetiza áudio mais rápido que em tempo real. Utilizando uma instância de atualização de CPU da Hugging Face (8 vCPU, 32 GB de RAM) e quatro threads do framework, o modelo teve um desempenho de 6.28 vezes o tempo real.

Os usuários interessados em instalar e utilizar o Inflect-Micro-v2 localmente podem fazê-lo através do comando 'hf download owensong/Inflect-Micro-v2 --local-dir Inflect-Micro-v2', seguido da instalação de dependências e execução do modelo em seu dispositivo.

O Inflect-Micro-v2, com sua ênfase na qualidade e capacidade de manipular textos longos, representa um avanço notável na tecnologia de sintese de voz, oferecendo uma solução viável para aplicações locais e compactas.
