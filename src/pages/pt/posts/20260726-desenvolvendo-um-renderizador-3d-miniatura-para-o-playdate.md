---
layout: ../../../layouts/PostLayout.astro
title: 'Desenvolvendo um Renderizador 3D Miniatura para o Playdate'
date: 2026-07-26
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Veja como foi o desafio de criar um renderizador de software 3D para o aparelho portátil Playdate."
source: 'https://saffroncr.itch.io/katavatis/devlog/1534514/building-a-tiny-3d-renderer-for-a-tiny-handheld'
heroImage: "/hero/desenvolvendo-um-renderizador-3d-miniatura-para-o-playdate.jpg"
---
Recentemente, a jornada de escrever um renderizador de software em 3D para o Playdate foi compartilhada em um insight fascinante. Inicialmente, sem uma base de desempenho, o caminho começou com um simples teste: um raycaster.

Baseado em exemplos de código da página web de Ken Silverman, este raycaster tornou-se um padrão para testar a capacidade de processamento 3D e o desempenho de desenho de tela em dispositivos de baixa potência. O objetivo era benchmarkar os aspectos mais relevantes para um renderizador 3D: a velocidade de manipulação de floats e matemática vetorial, operações de memória, velocidade de desenho na tela, bem como problemas com a configuração e utilização de um framebuffer.

Os resultados iniciais foram piores do que o esperado, indicando que o projeto não seria fácil. O raycaster não foi desenvolvido com desempenho máximo em mente, e, apesar de acreditar que pode ser otimizado, o foco era medir o potencial do dispositivo.

Segundo saffroncr.itch.io, apesar da limitação de processamento, a tela de baixa resolução e o uso de exibição de 1-bit do Playdate oferecem ganhos de memória significativos. Com base nesses resultados, o desenvolvedor expressou confiança em criar uma experiência que, do ponto de vista do jogador, se assemelhe à dos consoles 3DO ou Sega Saturn.

Esses consoles eram conhecidos por hardware personalizado para desenhar polígonos e CPUs modestos. Enquanto o hardware gráfico era responsável pela maior parte do trabalho pesado, os fabricantes podiam usar CPUs mais baratas. Porém, a inflexibilidade dessas máquinas tornava-as ruins para renderizar gráficos de maneira diferente, como evidenciado nas portas fracassadas de Doom.

O Playdate, por outro lado, não possui hardware 3D; tudo o que se deseja renderizar em 3D deve ser feito pela CPU. Sem ordenação de polígonos, rasterização, buffer de profundidade, clipping automático de triângulos contra o frustum de visão, mapeamento de texturas, filtragem ou correção de perspectiva. Nada.

Uma breve explicação sobre gráficos 3D: vivemos em um mundo tridimensional, com profundidade, altura e largura. Noções como perspectiva, movimento, escala, sombras e oclusão nos permitem perceber esses três维度. Os gráficos computacionais usam técnicas semelhantes. Um jogo 3D processa a informação de uma cena 3D, posiciona uma câmera nesse espaço e projeta a cena em um plano 2D, comparável ao mundo tridimensional projetado em nossas retinas.

O rasterizador, parte do renderizador, converte a geometria projetada em pixels, necessários para desenhar em telas de computador. Identifica como pintar texturas, lida com polígonos sobrepostos, clipping, etc., e grava os resultados no framebuffer, que contém a imagem 2D de um quadro, exibido na tela.

Na maioria dos hardwares modernos, essa tarefa é feita pela GPU. No Playdate, sem GPU, a CPU deve transformar vértices de polígonos, projetá-los, clipping, ordená-los, texturá-los e escrever o pixel resultante no framebuffer, e fazer isso rapidamente o suficiente para produzir novos quadros várias vezes por segundo.

Sobre o carregamento de arquivos de mapa BSP (Binary Space Partitioning) e a decisão de usar ou não um z-buffer, o desenvolvedor adotou o formato BSP para não precisar escrever um editor de níveis e compilador de mapas do zero, pudesse usar ferramentas como TrenchBroom para design de nível e ericw-tools para compilar o mapa, dados de visibilidade e iluminação, economizando tempo significativo.

O uso de BSPs facilitou o projeto, reaproveitando ferramentas e economizando tempo. O renderizador 3D de software foi construído do zero, para garantir uma compreensão completa e a capacidade de iterar sobre ele, testando ideias e encontrando a aparência do jogo.
