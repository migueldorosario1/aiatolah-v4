---
layout: ../../../layouts/PostLayout.astro
title: 'BitNet em um BBC Micro: modelo de linguagem em 13KB de pesos'
date: 2026-08-06
category: 'Hardware e Infra'
lang: "pt-br"
excerpt: "Projeto roda um modelo autoregressivo BitNet em um BBC Micro de 1980, com 13KB de pesos e código de inferência em C."
source: 'https://mattbeton.com/blog/bitnet-6502.html'
heroImage: "/hero/bitnet-em-um-bbc-micro-modelo-de-linguagem-em-13kb-de-pesos.jpg"
---
O MOS 6502, processador de 8 bits lançado em 1975, foi o cérebro de máquinas lendárias como o BBC Micro e o Apple II. Agora, um projeto ousado conseguiu fazer esse chip rodar um modelo de linguagem autoregressivo moderno, com pesos quantizados em apenas 13KB.

Segundo mattbeton.com, o autor teve acesso ao BBC Model B de seu pai, dos anos 80, e decidiu testar os limites do hardware com técnicas atuais de machine learning. O desafio era enorme: o modelo e o código de inferência precisavam caber em 25KB de memória de usuário.

A configuração final usou 9KB para o código de inferência e 13KB para os pesos do modelo. O processador, que só opera com inteiros de 8 bits e não tem instrução de multiplicação, exigiu soluções criativas.

O código de inferência foi escrito em C e compilado com o CC65, que gera código para o conjunto de instruções do 6502. O binário treinado em um MacBook foi transferido para o BBC Micro via PlayUEF e um cabo caseiro de 3.5mm para fita, convencendo o computador de que estava lendo uma fita cassete.

O emulador sim65 permitiu verificar a paridade entre o binário C e a implementação de referência em Python. O motor de inferência completo também foi testado no emulador jsbeeb antes de rodar no hardware real.

O projeto é aberto: é possível executar o modelo no navegador, com um BBC Micro virtual que carrega a imagem UEF diretamente do GitHub e digita os comandos automaticamente. A geração de texto leva alguns minutos.

## Modelagem

O objetivo era construir um modelo de linguagem autoregressivo, que produz tokens um a um, similar aos modelos de fronteira. A função do modelo é prever o próximo token a partir do contexto, como em 'the cat sat on the ma' → 't'.

Em modelos de larga escala, um token seria uma palavra ou subpalavra. Neste projeto, o vocabulário foi reduzido a 26 letras mais o caractere de espaço. Um vocabulário maior consumiria muitos parâmetros com os codificadores/decodificadores.

Uma camada de embedding mapeia os tokens para uma dimensão oculta de 56. Em seguida, camadas de mistura modelam dependências recorrentes entre os tokens.

## BitNet: quantização ternária

O BitNet foi introduzido como um método para inferência rápida em CPU. Ele quantiza os pesos para o conjunto ternário {-1, 0, 1}, transformando multiplicações de matrizes em sequências de adições e subtrações.

No 6502, uma multiplicação de 8×8 com acumulação custa cerca de 150 ciclos de clock. Com pesos ternários, o mesmo cálculo leva apenas 30 ciclos, tornando a inferência muito mais rápida.

Cada parâmetro BitNet ocupa apenas 1,58 bits (log2(3)), contra 8 bits de um int8 ou 32 de um float32. É possível empacotar 4 ou 5 parâmetros por byte. O projeto optou por 4 parâmetros por byte, pois o empacotamento com 5 exigiria divisões por 3, que não são nativas no 6502 e tornariam a descompactação lenta.

Com 13KB e 4 parâmetros por byte, cabem 52 mil parâmetros BitNet. A validação experimental mostrou que mais parâmetros com menor quantização oferecem melhor custo-benefício do que poucos parâmetros de alta precisão.

O treinamento usa o truque do estimador de passagem direta: o peso é armazenado em float32, quantizado para ternário no forward, mas os gradientes fluem em precisão total no backward. A cabeça final do modelo (LM head) é mantida em int4 para melhor distribuição de probabilidade sobre o vocabulário.

## Por que não atenção?

Modelos tradicionais como GPT-3 usam atenção para modelar relações sequenciais. A atenção permite recall exato de cada token, mas exige um custo computacional que cresce com o tamanho do contexto. No 6502, com apenas 32KB de RAM, o cache KV cresceria rapidamente, consumindo o espaço reservado para os pesos.

Para o dataset deste projeto, basta um recall de curto prazo para aprender a soletrar palavras e produzir formas gramaticais simples. A atenção não é necessária.

## Modelos recorrentes

Arquiteturas como SSMs (S4, Mamba) e RNNs (GRU, LSTM) têm a propriedade de que cada forward pass tem a mesma forma computacional, com um estado fixo h. Isso as torna muito mais adequadas para inferência com memória limitada.

Por que não GRU? Modelos recorrentes sofrem com o problema do gradiente desaparecendo/explodindo. Erros se acumulam com o comprimento da sequência, e no regime BitNet a estabilidade é difícil de alcançar. O autor relata divergência em todas as tentativas de treino com GRU.

Mamba, por outro lado, faz uma atualização escalar por canal, com decaimento calculado na inferência, sempre menor que 1, tornando a explosão impossível. Por isso, Mamba foi escolhido como modelo alvo.

## Ativações e acumulação de 16 bits

As ativações são armazenadas em 8 bits. Cada termo acumulado tem magnitude ≤ 128, permitindo acumular até 256 termos em 16 bits sem estouro.

O projeto é uma demonstração impressionante de que é possível rodar modelos de linguagem modernos em hardware de 50 anos atrás, com técnicas de quantização e arquiteturas eficientes. Uma prova de que a IA pode ser democrática e acessível, mesmo nos dispositivos mais humildes.
