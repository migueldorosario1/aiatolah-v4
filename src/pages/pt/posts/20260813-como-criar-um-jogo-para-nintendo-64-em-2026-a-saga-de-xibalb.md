---
layout: ../../../layouts/PostLayout.astro
title: 'Como criar um jogo para Nintendo 64 em 2026: a saga de Xibalba 64'
date: 2026-08-13
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Desenvolvedor portou engine JavaScript para C e criou um FPS para N64, com lançamento físico pela Modretro."
source: 'https://phoboslab.org/log/2026/08/xibalba64-making-of'
heroImage: "/hero/como-criar-um-jogo-para-nintendo-64-em-2026-a-saga-de-xibalb.jpg"
hero_credit: "Photo by Sunriseforever on Pixabay"
hero_legenda: "game console, sony, video games, lights, neon, freezelight, gamepad, joystick, console, ps4, xbox, dark, joysticks, playstation, controller, play, game, technology, fun, gamer, games, leisure, video games, video games, v"
---
O desenvolvedor por trás do phoboslab.org revelou os bastidores da criação de Xibalba 64, um FPS inspirado em Wolfenstein 3D para o Nintendo 64. O jogo será publicado pela Modretro como título de lançamento físico para o M64, um clone moderno do console, com direito a cartucho, embalagem e manual.

Segundo o autor, esta é apenas a segunda publicação física de um jogo novo para o N64 desde o fim da vida comercial original do console. O primeiro foi Xeno Crisis, da Bitmap Bureau, lançado em 2023. Nenhum outro jogo inédito havia sido lançado para o N64 desde Tony Hawk's Pro Skater 3, em 2002.

A base do projeto é a engine high_impact, uma reescrita em C da engine JavaScript Impact, criada originalmente em 2010. A engine foi adaptada para suportar múltiplos backends de plataforma e renderização, o que facilitou a criação de um backend para o N64.

O N64 é um hardware peculiar: além da CPU MIPS de 93 MHz (big-endian), possui dois coprocessadores: o RDP (Reality Display Processor), de função fixa, e o RSP (Reality Signal Processor), um processador vetorial programável. Ambos ficam no mesmo pacote físico, conhecido como RCP (Reality Coprocessor).

No início, a Nintendo controlava rigorosamente o acesso ao RSP, usando apenas sua biblioteca oficial, a libultra. Só depois permitiu que estúdios escrevessem microcódigo próprio. Programar no hardware puro é inviável, e usar a libultra oficial arriscaria um processo por violação de direitos autorais.

A solução veio da cena homebrew: o Libdragon, descrito como 'SDL para o N64', oferece funções para desenhar sprites, triângulos, som, controle e mais. O desenvolvedor levou apenas algumas noites para criar um backend para a high_impact usando Libdragon, testando com o jogo Biolab Disaster.

O ambiente de desenvolvimento foi elogiado: o Libdragon traz compiladores, documentação completa e exemplos. Uma dica importante: usar o branch 'preview', pois o branch 'stable' está defasado.

Para testar, o autor usou o emulador Ares, que emula fielmente o RDP e o RSP, incluindo timing preciso. Mas a famosa lentidão da memória do N64 só pode ser testada em hardware real, o que causou algumas decepções.

A solução foi usar um SummerCart64, um cartucho open-source que permite rodar ROMs .z64. O dispositivo tem porta USB-C, permitindo enviar a ROM diretamente do PC via sc64deployer. O autor conectou o N64 ao PC via USB e usou um capturador de vídeo analógico USB de US$ 10 para exibir a saída em uma janela no desktop.

O jogo Xibalba 64 é uma expansão do demo Xibalba, criado em 2014 para demonstrar a engine JavaScript. O novo jogo tem mais fases, mais inimigos e mais armas. Apesar de ser 3D, a jogabilidade é essencialmente 2D, sem elevação, similar a Wolfenstein 3D.

Para integrar a física 2D com a renderização 3D, o autor usou uma união em C que permite tratar um vetor 3D como 2D quando necessário. O port inicial das fases e inimigos existentes levou cerca de duas semanas; depois, foram meses de otimização e expansão.

O desenvolvedor manteve a capacidade de compilar o jogo com backends SDL2 ou Sokol, facilitando o playteste. O editor de fases, um arquivo HTML único, foi estendido para suportar lightmaps e exibir sprites reais.

A história mostra que, mesmo décadas após o fim do console, ainda é possível criar jogos novos para o N64 com ferramentas modernas e a comunidade homebrew.
