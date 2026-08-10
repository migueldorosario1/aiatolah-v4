---
layout: ../../../layouts/PostLayout.astro
title: 'Bug no kernel do Lean refuta Collatz: lições de solidez'
date: 2026-08-10
category: 'Segurança e Ética'
lang: "pt-br"
excerpt: "Ramana Kumar anunciou refutação da conjectura de Collatz verificada em Lean, mas prova tinha bug no kernel. Lições sobre solidez e proof objects."
source: 'https://lawrencecpaulson.github.io//2026/07/30/Collatz.html'
heroImage: "/hero/bug-no-kernel-do-lean-refuta-collatz-licoes-de-solidez.jpg"
hero_credit: "Photo by Daniil Komov on Pexels"
hero_legenda: "Bug no kernel do Lean refuta Collatz: lições de solidez"
---
Notícia sensacional: a conjectura de Collatz foi refutada. Ramana Kumar provou sua negação, com verificação no Lean e dupla checagem pelo verificador independente Nanoda. Infelizmente, a prova está errada: explorou um bug no kernel do Lean, e o Nanoda também não detectou o erro.

Lawrence Paulson, em seu blog, não escreve para zombar. Bugs de solidez já foram encontrados no Isabelle e em outros assistentes de prova; amanhã pode surgir um novo e monstruoso bug. Mas há lições importantes.

A conjectura de Collatz existe há quase um século, atraindo matemáticos sérios e excêntricos. O procedimento: comece com N; se par, divida por dois; se ímpar, faça 3N+1. A conjectura diz que sempre se chega a 1, e testes extensivos não acharam contraexemplo. Trabalhos recentes mostram que modelos de linguagem são bons em achar contraexemplos, então por que não tentar Collatz? Resolver isso seria uma sensação.

Paulson lembra que, há meio século, sabemos que objetos de prova são desnecessários. Robin Milner criou a linguagem ML para apoiar assistentes de prova, com tipos abstratos para isolar o kernel. As regras de inferência, confinadas ao tipo abstrato, seriam uma API para criar teoremas.

Mesmo assim, parte da comunidade insiste em armazenar objetos de prova, vendo-os como certificados verificáveis independentemente. Mas Paulson não conhece um único caso em que um verificador independente detectou um erro de solidez que passou pelo kernel. No caso Collatz, o Nanoda também foi enganado. O peso de memória dos objetos de prova é como dirigir puxando um carro reserva: o carro quebra, e o reserva também não funciona.

A causa do bug no Lean, segundo rumores, foram tipos indutivos aninhados no kernel. Bugs de solidez no Rocq vieram de pattern matching com funções recursivas no kernel. Paulson não entende por que teorias de tipos dependentes não expressam recursão a partir de um cálculo mais básico. Em contraste, na teoria dos conjuntos e na teoria simples de tipos, assume-se muito pouco: união, separação, pareamento, substituição; lógica e λ-cálculo. Com 'trabalho honesto', obtêm-se definições indutivas, registros, funções recursivas, pattern matching e funções parciais, tudo fora do kernel, sem contradições.

Nos anos 1980, Paulson trabalhava com a teoria de tipos de Martin-Löf, que só reconhecia recursão primitiva. Ele definiu um sistema de combinadores para expressar funções recursivas terminais, mas a resposta 'correta' era estender a teoria com recursão geral. Seu trabalho foi citado como 'Paulson estendeu MLTT com recursão', sem entender que ele obteve recursão por trabalho honesto.

O trabalho honesto é árduo, como quebrar pedras. Definições indutivas viram operadores monótonos em conjuntos; o menor ponto fixo dá a definição indutiva, o maior, a co-indutiva. No Isabelle, isso é tratado com funtores naturais limitados. Construir funções recursivas do zero é tedioso: começa-se com uma relação bem-fundada e prova-se a existência por indução bem-fundada. O trabalho de Paulson em MLTT ajudou nisso. Isabelle/HOL suporta definições recursivas gerais, com pattern matching e checagem de terminação, tudo fora do kernel.

Há uma ironia: objetos de prova são vistos como garantia de solidez, mas o oposto é verdadeiro. Se solidez é a preocupação principal, escolha HOL Light ou HOL4. O Isabelle teve mais bugs que esses, mas poucos, e bem menos que certos outros sistemas.

A lição final: a solidez não vem de objetos de prova, mas de kernels enxutos e da construção de tudo a partir de axiomas mínimos. O episódio Collatz é um alerta para a comunidade de assistentes de prova.
