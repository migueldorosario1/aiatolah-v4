---
layout: ../../../layouts/PostLayout.astro
title: 'Hexágonos mágicos de todas as ordens: descoberta com IA'
date: 2026-08-18
category: 'Modelos e Algoritmos'
lang: "pt-br"
excerpt: "Pesquisador usa IA para encontrar hexágonos mágicos de todas as ordens até 21, quebrando recorde anterior."
source: 'https://gukov.dev/math/2026/08/02/new-magic-hexagons.html'
heroImage: "/hero/hexagonos-magicos-de-todas-as-ordens-descoberta-com-ia.jpg"
hero_credit: "Photo by Aedrian Salazar on Unsplash"
hero_legenda: "Hexágonos mágicos de todas as ordens: descoberta com IA"
---
O número 19 sempre foi especial para os matemáticos: é um primo gêmeo e, até recentemente, era o número de células do único hexágono mágico normal não trivial. Mas essa exclusividade acabou.

Segundo gukov.dev, um pesquisador conseguiu demonstrar que existem hexágonos mágicos de todas as ordens, usando uma combinação de observações matemáticas e inteligência artificial. A descoberta foi publicada em agosto de 2026.

## O que é um hexágono mágico?

Um hexágono mágico é uma grade hexagonal de números em que todas as linhas retas, em três direções, somam o mesmo valor. Um hexágono mágico normal contém números consecutivos de 1 até o total de células, que é dado por 3n² - 3n + 1 para um hexágono de ordem n.

Por décadas, acreditava-se que o único hexágono mágico normal não trivial era o de ordem 3, com 19 células. A prova disso é simples: a soma de todos os números deve ser divisível pelo número de linhas em cada direção, que é 2n - 1. Para n > 3, essa condição falha.

## Hexágonos anormais

Para contornar essa limitação, o pesquisador relaxou uma restrição: os números ainda são consecutivos, mas não precisam começar em 1. Isso abre espaço para novas soluções, chamadas de hexágonos mágicos anormais.

Encontrar essas soluções, porém, é extremamente difícil. Não há construção algorítmica conhecida; a única abordagem era buscar em um espaço de possibilidades gigantesco. Até julho de 2026, o maior hexágono conhecido era de ordem 9, encontrado por Klaus Meffert em 2024.

## A estratégia: reduzir o espaço de busca

Em vez de tentar acelerar a busca, o pesquisador focou em reduzir o espaço de busca. Ele observou que hexágonos antissimétricos são mais simples: se os números variam de -K a K, com 0 no centro, e células opostas têm valores opostos, muitas restrições desaparecem automaticamente.

Outra observação crucial: todo hexágono de soma zero pode ser construído a partir de anéis locais de 6 pontos, com padrões alternados de +1 e -1. Isso leva a uma representação em campo de potencial, que satisfaz as restrições de linha por construção.

## A IA entra em cena

O pesquisador, que também ajudava a pré-resolver problemas para a Midnight Code Cup 2026, decidiu usar um LLM, o GPT-5.6 Sol, em vez de um solucionador genérico. O modelo conectou o problema a Heffter arrays, o que levou a um algoritmo de simulated annealing personalizado.

Com otimizações de performance (Numba, eliminação de gargalos), o programa rodou em um servidor doméstico com cerca de 24 núcleos por alguns dias. O resultado: hexágonos mágicos de todas as ordens até n=21, superando o recorde anterior de n=9.

Os valores das células parecem caóticos, mas os campos de potencial revelam estruturas suaves, como mapas de terreno. Isso sugere que pode haver uma estrutura maior escondida, que o pesquisador pretende investigar.

A descoberta mostra como a IA pode acelerar a pesquisa matemática, encontrando soluções que seriam praticamente impossíveis de achar manualmente. E levanta a questão: o que mais está escondido nesses padrões?
