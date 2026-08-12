---
layout: ../../../layouts/PostLayout.astro
title: 'Entropia de cadeias de Markov: da física à vida artificial'
date: 2026-08-12
category: 'Modelos e Algoritmos'
lang: "pt-br"
excerpt: "Como Boltzmann inspira uma definição de entropia para cadeias de Markov, aplicada ao modelo de célula de Dyson."
source: 'https://chillphysicsenjoyer.substack.com/p/the-entropy-of-a-markov-chain'
heroImage: "/hero/entropia-de-cadeias-de-markov-da-fisica-a-vida-artificial.jpg"
hero_credit: "Photo by Makalu on Pixabay"
hero_legenda: "spain, andalusia, province of cadiz, cadiz, city, historic center, historic centre, nature, jardines de la plaza de espana, monument to the constitution of 1812, monument to the 1812 constitution, monument, historical, p"
---
A entropia nasceu na termodinâmica do século XIX, mas segue viva em modelos modernos de sistemas complexos. Em um ensaio publicado em chillphysicsenjoyer.substack.com, o autor explora como estender o conceito a cadeias de Markov, usando o modelo de célula de Dyson como laboratório.

Clausius, em 1865, definiu a entropia ao decompor processos físicos em cadeias de máquinas. Para processos irreversíveis, a entropia sempre aumenta; em processos reversíveis, como o motor ideal de Carnot, a variação é zero. Essa é a segunda lei da termodinâmica.

A entropia não é mensurável diretamente com um termômetro, mas permite calcular grandezas derivadas que são observáveis. O autor já havia especulado sobre 'vida como entropia', inspirado por Schrödinger (1944) e o conceito de negentropia: a vida manteria a ordem local consumindo energia do ambiente.

Para dar concretude a essa ideia, o autor recorre a modelos. O modelo de Dyson de uma célula é uma cadeia de Markov que converge para um de três estados de equilíbrio: 'vida', 'morte' e um terceiro. A questão é: como definir entropia nesse contexto de forma consistente com a física?

A saída vem de Boltzmann, que relacionou entropia ao número de estados possíveis de um sistema. Se observamos variáveis macroscópicas como temperatura, pressão e volume, há muitas configurações microscópicas compatíveis. Quanto mais configurações, maior a entropia.

Um exemplo: um gás a zero absoluto, com moléculas fixas e paradas, tem poucas configurações possíveis. Já um gás aquecido tem inúmeras. Temperatura alta, entropia alta — não é coincidência que o número de estados também aumente.

Boltzmann formalizou isso: a entropia é o logaritmo do número de estados, multiplicado pela constante de Boltzmann. A equação é simples, mas a prova é profunda e ainda desafia matemáticos.

Para tornar o exemplo concreto, o autor usa o modelo de ímã de Curie. Nele, elétrons podem estar com spin para cima ou para baixo; a energia depende do alinhamento com o campo magnético. Considere um sistema de 5 átomos com energia E = 1. Isso exige três spins para cima e dois para baixo.

As configurações possíveis são combinações de 5 elementos tomados 3 a 3, totalizando 10. Essas 10 configurações formam o macroestado 'E = 1'. Pela fórmula de Boltzmann, a entropia é log₂ 10 = 3,32 bits. Assim, a entropia vira função da energia.

Agora, como contar a entropia de uma cadeia de Markov como a de Dyson? No modelo, há N sítios, cada um podendo estar vazio, ativo ou inativo. O sistema converge para um equilíbrio, com probabilidades fixas para cada estado.

Suponha um equilíbrio com 1/2 de chance de vazio, 1/4 de ativo e 1/4 de inativo. Com 8 sítios, teríamos 4 vazios, 2 ativos e 2 inativos. O número de configurações é dado pelo coeficiente multinomial: fatorial de 8 dividido pelos fatoriais de 4, 2 e 2, resultando em 96.

A entropia é o logaritmo desse número, multiplicado pela constante de Boltzmann. O autor promete explorar em posts futuros como a entropia evolui com a topologia do grafo e em que condições ela aumenta.

O ensaio agradece a David Pfau pelas discussões e assume que todos os erros são do autor. As referências incluem Clausius (1865) e Schrödinger (1944).

A ponte entre termodinâmica e teoria da informação é um passo elegante para entender fenômenos emergentes como a vida. Modelos simples, como o de Dyson, ajudam a testar ideias abstratas e a dar significado matemático a conceitos vagos.
