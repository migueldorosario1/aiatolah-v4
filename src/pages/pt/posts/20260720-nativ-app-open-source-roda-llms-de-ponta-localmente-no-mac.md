---
layout: ../../../layouts/PostLayout.astro
title: 'Nativ: app open-source roda LLMs de ponta localmente no Mac'
date: 2026-07-20
category: 'Desenvolvimento'
lang: "pt-br"
source: 'https://blaizzy.github.io/nativ/'
---
Um novo aplicativo de código aberto promete rodar modelos de linguagem de ponta diretamente no Mac, sem depender de nuvem ou assinaturas. O Nativ, desenvolvido pelo pesquisador Blaizzy, é um desktop app para Apple Silicon (M1 e superiores) que integra modelos como Google Gemma, Cohere Command R e Liquid AI.

Segundo o repositório oficial em blaizzy.github.io/nativ, o Nativ é construído sobre MLX-VLM, a biblioteca de machine learning da Apple, e é otimizado para memória unificada e Metal. Isso significa que não há camadas de tradução ou wrappers – o modelo roda direto no hardware.

A interface oferece streaming, markdown, destaque de sintaxe e entrada de imagem. Toda resposta é gerada localmente. O app também exibe métricas em tempo real: tokens por segundo, pressão de memória, estado térmico e tempo até o primeiro token.

O Nativ não exige criação de conta, credenciais ou pagamento. O manifesto do projeto, disponível no site, critica outros aplicativos 'locais' que seriam 'cascas proprietárias' sobre motores open source. O Nativ, por outro lado, é totalmente open source sob licença MIT – incluindo o código do desktop, carregadores de modelo e gráficos de telemetria.

O app também funciona como endpoint para agentes de código. Ferramentas como Claude Code, Codex ou Aider podem se conectar ao Nativ para rodar modelos localmente, mantendo o fluxo de trabalho familiar.

Os modelos parceiros incluem Google Gemma 2, Cohere Command R e Liquid AI. O Nativ recomenda o modelo mais adequado para o hardware do usuário, mas permite escolha manual.

O projeto é mantido por pesquisadores e hackers, sem roteiro de VC, sem nível empresarial e sem dark patterns que transformem prompts em dados de treinamento. A proposta é clara: software feito pela comunidade, para a comunidade, gratuito para sempre.
