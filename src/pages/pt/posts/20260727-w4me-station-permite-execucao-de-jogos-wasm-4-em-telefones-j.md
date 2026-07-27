---
layout: ../../../layouts/PostLayout.astro
title: 'W4ME Station permite execução de jogos WASM-4 em telefones Java ME'
date: 2026-07-27
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "W4ME Station, uma nova runtime WASM-4 para dispositivos Java ME, traz jogos WebAssembly sem modificação para dispositivos CLDC 1.1/MIDP 2.0."
source: 'https://github.com/mulfyx/w4me-station'
heroImage: "/hero/w4me-station-permite-execucao-de-jogos-wasm-4-em-telefones-j.jpg"
---
A W4ME Station, uma solução inovadora para dispositivos Java ME, trouxe a oportunidade de rodar jogos WebAssembly em dispositivos mais antigos, como os feature phones da década de 2000. Segundo a github.com, esta runtime permite a execução de 'carregadores' WebAssembly não modificados em dispositivos compatíveis com CLDC 1.1 e MIDP 2.0.

O pacote inclui 13 jogos em um arquivo JAR de apenas 275 KB, sem a necessidade de conexão à rede ou uso de JIT, garantindo um desempenho eficiente e rápido. Como destacado em github.com, ambos os variantes da release não ultrapassam os 300 KB.

| Variante | Aplicativo | Descritor |
|---|---|---|
| Completa, com navegação opcional por arquivos JSR-75 | w4me-station.jar | w4me-station.jad |
| Base, sem classes JSR-75 | w4me-station-base.jar | w4me-station-base.jad |

As SHA-256 checksums estão armazenadas ao lado dos artefatos da versão 1.0.0. A W4ME Station visa dispositivos CLDC 1.0 / MIDP 2.0, sendo independente e não endossada pelos mantenedores do WASM-4.

A lista de jogos incluídos é diversa e envolvente, oferecendo uma variedade de experiências de jogo para os usuários:

1. Sokoban
2. Wasm Wars
3. Annoying Robots
4. Waternet
5. Dragon Poker Draw
6. Tic Tac Toe
7. Watris
8. Glowfish Chess
9. Duck Maze
10. Rubido
11. Untangle
12. Sound Demo
13. Plasma Cube

Além desses, o W4ME Station permite a instalação de arquivos .wasm adicionais diretamente do dispositivo.

Os recursos da plataforma incluem a validação da execução WebAssembly com um cache fixo de largura W4IR, APIs do host WASM-4 para gráficos, entrada, áudio, disco, texto e rastreamento, além de suporte a controles de teclado, botões e dispositivo touchscreen. Outros recursos incluem armazenamento de disco persistente por cartridge com geração de RMS com soma de verificação e controle global de som RMS.

O lançamento da versão 1.0.0 também é acompanhado por uma documentação detalhada sobre compatibilidade e limitações, além de informações de instalação, desenvolvimento e testes. A W4ME Station é desenvolvida sob a licença MIT, com os jogos.bundleados mantendo suas próprias licenças.
