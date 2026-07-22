---
layout: ../../../layouts/PostLayout.astro
title: 'NEO Radar: Engine Rastreia 41.812 Asteroides Reais Precisamente'
date: 2026-07-22
category: 'Modelos e Algoritmos'
lang: "pt-br"
excerpt: "Nova ferramenta orbital simula todos os planetas com alta fidelidade, usando algoritmos precisos para rastreamento de objetos espaciais."
source: 'https://neoradar.space'
---
O NEO Radar representa um avanço significativo na mecânica orbital, funcionando como um motor baseado em navegador para rastreamento de Objetos Pró-Terra. A ferramenta incorpora 47 objetos de alta fidelidade com dinâmicas completas de N-body RK4, além de 41.812 asteroides do catálogo MPC com posições reais. Todos os oito planetas são simulados integralmente.

Cada trajetória no NEO Radar é integrada a partir das efemérides JPL Horizons com perturbação gravitacional completa dos planetas externos. Os números exibidos correspondem exatamente aos que um planejador de missão utilizaria em suas análises. A conversão de anomal média para anomal excêntrica utiliza Newton-Raphson com semente adaptativa, convergindo para 1×10⁻¹² em menos de quatro iterações, mesmo para órbitas de alta excentricidade.

É possível alternar a gravidade dos planetas externos ativada ou desativada. O cone de incerteza se alarga visivelmente em trajetórias de sobrevoo de Júpiter, um problema que os planejadores de missão chamam de 'problema da fechadura de chave'.

Os dados são extraídos diretamente do JPL Horizons e fixados em disco para acesso instantâneo. Arcos de observação e parâmetros de incerteza acompanham cada objeto, sem aproximações ou deriva. Segundo neoradar.space, cada trajetória do NEO Radar é comparada com as efemérides JPL Horizons em uma janela de 50 anos. Enquanto modelos simplificados de dois corpos derivam dezenas de milhares de quilômetros, o NEO Radar permanece dentro do cone de incerteza real.

A precisão da posição é calculada como desvio RMS da verdade fundamental do JPL na mesma janela de 50 anos para os 47 objetos de alta fidelidade.
