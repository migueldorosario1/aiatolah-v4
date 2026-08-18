---
layout: ../../../layouts/PostLayout.astro
title: 'Oberon System migra de RISC-5 para RISC-V em novo projeto'
date: 2026-08-18
category: 'Hardware e Infra'
lang: "pt-br"
excerpt: "Projeto migra o Oberon System de Wirth para RISC-V, usando compilador OP2 e emulador RV32, mantendo fidelidade ao livro original."
source: 'https://github.com/rochus-keller/OberonSystem/tree/op2-rv32'
heroImage: "/hero/oberon-system-migra-de-risc-5-para-risc-v-em-novo-projeto.jpg"
hero_credit: "Photo by Tanha Tamanna  Syed on Pexels"
hero_legenda: "Oberon System migra de RISC-5 para RISC-V em novo projeto"
---
Um desenvolvedor publicou no GitHub uma versão do Project Oberon System migrada do processador RISC-5 para a arquitetura RISC-V. O trabalho usa o compilador OP2 com backend RV32 e um emulador de máquina virtual baseado no rv32emu, reproduzindo o mapa de memória descrito por Niklaus Wirth em seu livro.

Segundo o repositório, a migração troca a linguagem Oberon-07 pela mais comum Oberon 90, mantendo os módulos Kernel.Mod, Display.Mod e Input.Mod inalterados. O sistema roda nativamente na VM RISC-V, com uma captura de tela disponível no projeto.

O Project Oberon foi criado entre 1986 e 1989 por Niklaus Wirth e Jürg Gutknecht na ETH Zürich. Eles implementaram um sistema completo — sistema operacional, compilador, linguagem, editores de texto e gráficos — e documentaram tudo no livro 'Project Oberon - The Design of an Operating System and Compiler', de 1992.

Após a aposentadoria, Wirth continuou o projeto. Os fontes publicados em projectoberon.net usam Oberon-07, sua última simplificação da linguagem. Uma revisão gratuita do livro de 2013 mantém o propósito original: servir como exemplo de um sistema real, em uso e explicado em detalhes.

O livro de 1992 usava o processador National Semiconductor NS32032, que não estava mais disponível. Wirth então projetou seu próprio processador, o RISC-5, para estender a simplicidade ao hardware. Ele o implementou em FPGA e o sistema rodava em uma placa de baixo custo (Xilinx Spartan-3 da Digilent, com 1 MB de RAM estática).

Com as simplificações, todo o código que antes era em assembly passou a ser escrito em Oberon, de drivers a operações de raster. O contrato hardware/software do sistema consiste em um mapa de memória e um conjunto de instruções.

A colisão de nomes com RISC-V é curiosa, mas há parentesco real na filosofia de design. RISC-V, desenvolvido em UC Berkeley a partir de 2010, é a quinta arquitetura RISC da linha Berkeley (RISC-I, RISC-II, SOAR, SPUR). Ambos compartilham objetivos: ISA regular de 32 bits, load/store, amigável ao compilador, com instruções base de 32 bits fixas.

Migrar o Oberon System para RISC-V é uma forma pragmática de levar o sistema a hardware contemporâneo, preservando seus princípios. A Espressif oferece microcontroladores ESP32 baratos, e placas como a Olimex ESP32-P4-PC fornecem todos os recursos necessários a preço atraente. Como o Oberon não exige MMU, é adequado para esse tipo de microcontrolador.

Até agora, a migração roda em uma máquina RISC-V emulada, o que ajuda na depuração e mantém o código próximo ao livro. Iterações futuras devem migrar o sistema (e também o System 3) para a placa Olimex.

O autor optou por reutilizar o compilador OP2, que já havia usado na migração do Oberon System 3 para Raspberry Pi. O OP2 faz parte da herança ETH Oberon, com separação front end/back end que já produziu código para SPARC, MIPS, i386, ARMv7 e agora RV32. Isso evita manter outro compilador e mantém o código próximo ao livro.

Os fontes originais foram baixados de projectoberon.net em 2026-04-14, incluindo arquivos como inner.zip, outer.zip, systools.zip, graph.zip e apptools.zip. A data de modificação mais recente é 2018-11-28.

A migração envolveu renomear INTEGER para LONGINT, fornecer built-ins do Oberon 07 via SYS.Mod, usar SYSTEM.BYTE ou CHAR para dados de byte, e adaptar case statements para IF com type guards. Atribuições de array usam COPY, e literais de byte-string são inicializados em runtime.

O repositório inclui um emulador de máquina RISC-V baseado em rv32emu, semelhante ao RISC-5 descrito no livro. Todos os módulos são linkados na imagem de boot, sem carregamento dinâmico. Os arquivos po.bin e disk.img funcionam em todas as plataformas; apenas o executável rv32vm é dependente de plataforma.

Há scripts de build para Linux (Debian Bookworm), um projeto qmake para macOS e suporte ao sistema BUSY, que requer apenas compilador C99 e SDL2, testado em Linux e Windows. Para rodar no Windows, use o comando: rv32vm.exe --base 0x0 --disk disk.img po.bin.

Este projeto é um exemplo de como sistemas clássicos podem ser preservados e adaptados a hardware moderno, mantendo a filosofia de simplicidade e abertura que caracteriza o Oberon.
