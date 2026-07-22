---
layout: ../../../layouts/PostLayout.astro
title: 'Kimi K3 supera GPT-5.6 e Opus 4.8 em benchmark agêntico, mas custa caro'
date: 2026-07-22
category: 'Modelos e Algoritmos'
lang: "pt-br"
excerpt: "Modelo chinês de 2,8T parâmetros alcança segundo maior Elo no AA-Briefcase, atrás apenas de Claude Fable 5, com custo de US$ 10,57 por tarefa."
source: 'https://artificialanalysis.ai/articles/kimi-k3-agentic-knowledge-benchmark'
---
A Moonshot AI lançou na semana passada o Kimi K3, um modelo de 2,8 trilhões de parâmetros que já ocupa a vice-liderança no benchmark proprietário AA-Briefcase, segundo o site artificialanalysis.ai.

O Kimi K3 alcançou um Elo de 1543 no AA-Briefcase, superando modelos como GPT-5.6 Sol (1501), Claude Sonnet 5 (1388) e Claude Opus 4.8 (1347). Apenas o Claude Fable 5, com 1574, ficou à frente. A melhoria em relação ao antecessor Kimi K2.6 foi de 727 pontos.

O AA-Briefcase é um benchmark desenvolvido pelo Artificial Analysis para medir desempenho em tarefas agênticas de conhecimento. Ele utiliza um conjunto de dados privado com milhares de arquivos de entrada complexos, exigindo entregas como planilhas, apresentações e protótipos de interface. A pontuação combina correção, qualidade analítica e qualidade de apresentação.

No índice Artificial Analysis Intelligence Index, o Kimi K3 marca 57 pontos, comparável a Opus 4.8 e GPT-5.5. O modelo fica atrás apenas de Fable 5 no AA-Briefcase, mas seu custo por tarefa é elevado: US$ 10,57 em média, um dos mais altos do ranking.

Esse custo é impulsionado pelo preço dos tokens — US$ 3 por milhão de tokens de entrada e US$ 15 por milhão de tokens de saída, com 90% de desconto para tokens em cache — e pelo alto número de turns por tarefa: 83 em média, contra 67 do Fable 5 e 50 do GPT-5.6 Sol. O modelo também gera 120 mil tokens de saída por tarefa, ante 42 mil do K2.6.

O tempo médio por tarefa é de 56,4 minutos, um dos mais altos registrados no AA-Briefcase. Isso representa cerca de 2,5 vezes o tempo do Claude Fable 5 e 3,8 vezes o do Grok 4.5 (high). A lentidão se deve ao maior número de turns, ao alto volume de tokens de saída e à velocidade inferior da API própria da Kimi.

Em termos de qualidade analítica, o Kimi K3 se destaca: alcançou Elo de 1754, praticamente empatado com o Claude Fable 5 (1744). Já na qualidade de apresentação, ficou abaixo: Elo de 1471, inferior ao GPT-5.6 Sol (1660) e ao Claude Opus 4.8 (1492). A taxa de aprovação nos critérios do benchmark foi de 51%, segunda maior, atrás apenas dos 56% do Fable 5.

O lançamento do Kimi K3 faz parte de uma onda recente de modelos de fronteira. Em oito dias, seis laboratórios diferentes lançaram modelos com pontuação acima de 50 no Artificial Analysis Intelligence Index — incluindo Grok 4.5, GPT-5.6, Muse Spark 1.1 e o próprio Kimi K3. Em junho, apenas dois laboratórios tinham modelos nesse patamar.

Apesar do alto custo e do tempo elevado por tarefa, o Kimi K3 representa um avanço significativo para a Moonshot AI e para o ecossistema de modelos abertos chineses. Sua performance analítica rivaliza com os melhores modelos fechados do Ocidente, reforçando a tese de que a inteligência artificial de fronteira não é monopólio de nenhum país.
