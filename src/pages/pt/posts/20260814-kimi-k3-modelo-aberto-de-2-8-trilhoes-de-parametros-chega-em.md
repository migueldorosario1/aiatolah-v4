---
layout: ../../../layouts/PostLayout.astro
title: 'Kimi K3: modelo aberto de 2,8 trilhões de parâmetros chega em julho'
date: 2026-08-14
category: 'Modelos e Algoritmos'
lang: "pt-br"
excerpt: "Kimi K3, da Moonshot AI, é o primeiro modelo open source na classe de 3 trilhões de parâmetros, com 1M de contexto e visão nativa."
source: 'https://platform.kimi.ai/docs/guide/kimi-k3-quickstart'
heroImage: "/hero/kimi-k3-modelo-aberto-de-2-8-trilhoes-de-parametros-chega-em.jpg"
hero_credit: "Photo by Steve A Johnson on Pexels"
hero_legenda: "Kimi K3: modelo aberto de 2,8 trilhões de parâmetros chega em julho"
---
A Moonshot AI apresentou o Kimi K3, seu modelo carro-chefe mais capaz até hoje, com 2,8 trilhões de parâmetros. O anúncio foi feito na plataforma oficial da empresa, platform.kimi.ai, que destaca a arquitetura inovadora e a promessa de liberação dos pesos até 27 de julho de 2026.

O Kimi K3 é construído sobre duas novidades arquiteturais: o Kimi Delta Attention (KDA), um mecanismo de atenção linear híbrido, e o Attention Residuals (AttnRes). Essas mudanças foram projetadas para melhorar o fluxo de informações em sequências longas e modelos mais profundos.

O modelo também traz compreensão visual nativa e uma janela de contexto de 1 milhão de tokens. É o primeiro modelo open source do mundo na classe de 3 trilhões de parâmetros, segundo a plataforma.

A empresa afirma que o K3 é voltado para cenários de inteligência de fronteira, como codificação de longo horizonte, trabalho de conhecimento e raciocínio. A Moonshot AI está trabalhando com parceiros de inferência e mantenedores de open source para alinhar detalhes técnicos e garantir um lançamento confiável no ecossistema.

Os pesos completos do modelo serão liberados até 27 de julho de 2026. Mais detalhes sobre arquitetura, treinamento e avaliação serão publicados no relatório técnico do Kimi K3.

## Escala inédita em open source

O Kimi K3 é o primeiro modelo open source a atingir 2,8 trilhões de parâmetros. Esse é o passo mais recente no esforço contínuo da Kimi para expandir os limites de escala: em 9 dos últimos 12 meses (julho de 2025 a julho de 2026), os modelos Kimi mantiveram a fronteira em escala de modelos abertos.

A arquitetura usa o Stable LatentMoE, um framework que aumenta a esparsidade do Mixture of Experts (MoE). O modelo ativa eficientemente 16 dos 896 especialistas. Combinado com melhorias em metodologia de treinamento e receitas de dados, o K3 tem aproximadamente 2,5 vezes a eficiência de escala geral do K2, convertendo computação em capacidade de forma mais eficaz.

## Codificação e trabalho de conhecimento

O Kimi K3 tem fortes capacidades de codificação de longo horizonte. Com supervisão humana mínima, ele pode sustentar tarefas de engenharia de longa duração, entender e trabalhar com grandes bases de código e coordenar ferramentas de terminal.

O modelo também se destaca em tarefas que combinam engenharia de software e raciocínio visual. Ele pode usar capturas de tela e feedback visual para melhorar fluxos de trabalho em desenvolvimento de jogos, engenharia de frontend, CAD e cenários relacionados.

No trabalho de conhecimento, o K3 avança em tarefas de ponta a ponta. Além dos benchmarks públicos, o Kimi K3 (max) mostra ganhos consistentes em avaliações internas, que refletem padrões recorrentes de tarefas e desafios de fluxos de trabalho reais de colaboração agente-usuário. O modelo demonstra vantagens consistentes em fluxos de trabalho orientados à produção.

## Acesso e requisitos

O Kimi K3 é um modelo carro-chefe: ele é desbloqueado após uma recarga bem-sucedida (mínimo de US$ 1). O valor acumulado da recarga também determina o nível da conta e os limites de taxa (concorrência, RPM, TPM, TPD).

Para começar, é necessário Python 3.9+ e o SDK da OpenAI. O modelo sempre tem o modo de raciocínio ativado e suporta configuração do esforço de raciocínio com o campo de solicitação de nível superior `reasoning_effort`, que aceita `low`, `high` e `max` (padrão `max`).

Para conversas de múltiplas voltas e chamadas de ferramenta, é preciso adicionar a mensagem completa do assistente retornada pela API à próxima solicitação. Não mantenha apenas o `content`.

## Streaming, visão e saída estruturada

O streaming fornece deltas separados de `reasoning_content` e `content` da resposta final. Para mensagens de visão, o `content` deve ser um array de objetos, não uma string serializada. Não há suporte a URLs públicas de imagem; use base64 ou `ms://<file-id>`.

Para saída estruturada, use `json_schema` com `strict: true` para restringir o `content` final da mensagem. Analise apenas esse campo, não o `reasoning_content`.

O modo parcial permite continuar a partir de um prefixo de texto, adicionando uma mensagem do assistente com `partial=True` no final de `messages`.

## Ferramentas e cache

O K3 suporta `tool_choice='required'` no primeiro turno para exigir pelo menos uma chamada de ferramenta. Após cada execução, retorne a mensagem completa do assistente e anexe um resultado de ferramenta com o `tool_call_id` correspondente.

O carregamento dinâmico de ferramentas permite colocar uma definição completa de ferramenta em uma mensagem de `system` sem `content`. A declaração entra em vigor na posição em `messages` e deve ser mantida no histórico posterior.

O cache de prefixo é ativado apenas quando os tokens de prompt da solicitação anterior excedem 256. Se forem menores, a solicitação não é armazenada em cache e é descartada.

## Ferramentas oficiais e limites

As ferramentas oficiais são integradas via Formula: busque as definições no endpoint `/tools`, adicione-as ao campo `tools` do Chat Completions e, quando o modelo retornar `tool_calls`, envie cada nome de função e argumentos ao endpoint `/fibers`. Adicione a mensagem completa do assistente e a saída do Fiber como mensagem de ferramenta correspondente.

Limites importantes: `max_completion_tokens` padrão é 131072 e pode ser configurado até 1048576. `temperature=1.0`, `top_p=0.95`, `n=1`, `presence_penalty=0` e `frequency_penalty=0` são fixos e devem ser omitidos. A busca na web está sendo atualizada e não é recomendada para produção no curto prazo.

## Preço e FAQ

O Kimi K3 oferece contexto de 1M de tokens e usa preço pré-pago uniforme, sem camadas por comprimento de contexto. Entrada (com taxas separadas para cache hit e miss) e saída são cobradas por token. Não é possível desligar o chain-of-thought: o K3 sempre pensa. Se o raciocínio demorar muito, defina `reasoning_effort` para `low`.

O lançamento do Kimi K3 representa um marco para o open source, trazendo escala de trilhões de parâmetros para a comunidade. A expectativa é que o modelo impulsione avanços em codificação, raciocínio e trabalho de conhecimento, consolidando a posição da Kimi na fronteira da IA aberta.
