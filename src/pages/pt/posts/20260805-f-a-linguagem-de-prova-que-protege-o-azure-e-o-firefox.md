---
layout: ../../../layouts/PostLayout.astro
title: 'F*: a linguagem de prova que protege o Azure e o Firefox'
date: 2026-08-05
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Conheça F*, linguagem open source da Microsoft Research e Inria usada em criptografia verificada no Azure, Firefox e Linux."
source: 'https://fstar-lang.org/'
heroImage: "/hero/f-a-linguagem-de-prova-que-protege-o-azure-e-o-firefox.jpg"
---
F* (pronuncia-se 'F star') é uma linguagem de programação orientada a provas, de propósito geral, que combina tipos dependentes com automação de provas via SMT e táticas interativas. Ela suporta tanto programação puramente funcional quanto com efeitos.

Segundo o site oficial fstar-lang.org, programas em F* compilam por padrão para OCaml, mas também podem ser extraídos para F#, C ou Wasm usando a ferramenta KaRaMeL, ou para assembly via toolchain Vale. A linguagem é implementada em F* e inicializada com OCaml.

F* é open source, distribuída sob licença Apache 2.0, e está disponível no GitHub. Binários para Windows, Linux e Mac OS X são publicados regularmente na página de releases. Também é possível instalar via OPAM, Docker, Nix ou compilar a partir do código-fonte.

O desenvolvimento é ativo, conduzido por Microsoft Research, Inria e pela comunidade. Um livro online chamado 'Proof-oriented Programming In F*' está em andamento, com atualizações regulares, e há um tutorial para Low*, um subconjunto de baixo nível que pode ser compilado para C via KaRaMeL.

F* é usada em projetos industriais e acadêmicos. O Projeto Everest é um guarda-chuva que desenvolve software de comunicação segura de alta garantia em F*. Vários subprojetos nasceram dele, como HACL*, ValeCrypt e EverCrypt.

HACL* é uma biblioteca de primitivas criptográficas de alta garantia, escrita em F* e extraída para C. ValeCrypt fornece implementações formalmente provadas em Vale, um framework para linguagem assembly verificada embutido em F*. EverCrypt combina ambos em um provedor criptográfico único.

Código desses projetos está em produção em vários lugares, incluindo Mozilla Firefox, o kernel Linux, Python, mbedTLS, a blockchain Tezos, o SDK de votação eletrônica ElectionGuard e a VPN Wireguard.

EverParse é um gerador de parsers para formatos binários que produz código C extraído de F* formalmente provado. Parsers do EverParse são usados em produção no Windows Hyper-V, onde cada pacote de rede que passa pela plataforma Azure é analisado e validado por código gerado pelo EverParse. Também é usado no ebpf-for-windows.

A pesquisa em F* é ativa nas comunidades de linguagens de programação e métodos formais, além de aplicações em segurança e sistemas. Um dos conceitos centrais é a mônada de Dijkstra, introduzida em 2013 no PLDI, que permite verificar programas de ordem superior. Trabalhos posteriores, como 'Dijkstra Monads for Free' (POPL 2017) e 'Dijkstra Monads for All' (ICFP 2019), generalizaram e automatizaram essa abordagem.

Outros marcos incluem a lógica de separação concorrente SteelCore (ICFP 2020), base do DSL Steel, e PulseCore (PLDI 2025), uma lógica de separação concorrente impredicativa que fundamenta a linguagem Pulse, embutida em F* para programação orientada a provas.

Na área de segurança, F* foi usada para verificar a camada de registro TLS 1.3 (S&P 2017), a biblioteca criptográfica HACL* (CCS 2017), o protocolo Signal via LibSignal* compilado para Wasm (S&P 2019) e o provedor EverCrypt (S&P 2020).

Também há implementações verificadas do QUIC record layer (S&P 2021), do protocolo de boot medido DICE (USENIX Security 2021) e do padrão ACME (CCS 2021). O framework DY* permite análise simbólica de protocolos criptográficos executáveis.

F* se destaca como uma ferramenta madura para verificação formal, com adoção real em infraestruturas críticas. Sua natureza open source e o desenvolvimento colaborativo entre Microsoft Research, Inria e a comunidade reforçam o papel do código aberto como contraponto democrático a soluções fechadas.

Para quem quer aprender, o livro online e os materiais de cursos em escolas sazonais são recursos valiosos. A linguagem continua evoluindo, com novas pesquisas e aplicações surgindo constantemente.
