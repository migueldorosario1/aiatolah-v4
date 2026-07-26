---
layout: ../../../layouts/PostLayout.astro
title: 'Análise de impressão digital textual revela semelhança entre Kimi e Claude'
date: 2026-07-26
category: 'Modelos e Algoritmos'
lang: "pt-br"
excerpt: "Ferramenta do Typebulb compara modelos por padrões de escrita; Kimi (Moonshot) e Claude (Anthropic) aparecem como os mais similares."
source: 'https://typebulb.com/u/lab/you-re-relatively-right/full'
heroImage: "/hero/analise-de-impressao-digital-textual-revela-semelhanca-entre.jpg"
---
Uma nova ferramenta de análise linguística desenvolvida pelo Typebulb está chamando a atenção da comunidade de IA. Batizada de 'You're relatively right!', a aplicação usa trigramas de caracteres e n-gramas de palavras para construir um mapa de calor de similaridade entre modelos de linguagem.

Segundo o Typebulb, a ferramenta calcula a entropia cruzada entre as distribuições de trigramas de cada modelo, usando um fundo pooled de todos os modelos para suavização. O resultado é uma matriz de distância que revela quais LLMs escrevem de forma mais parecida.

O dado mais comentado até agora é a alta similaridade entre o Kimi, da startup chinesa Moonshot AI, e o Claude, da Anthropic. A análise sugere que os dois modelos compartilham padrões de escolha lexical e estrutura frasal que os distinguem do restante do campo.

A ferramenta também identifica 'tell-tales' — termos ou frases que ambos os modelos usam com frequência muito acima da média do resto dos modelos testados. Para ser considerado um 'tell', o termo precisa aparecer em pelo menos três respostas de cada modelo (para evitar viés de uma única resposta) e ter uma taxa de uso conjunta pelo menos duas vezes maior que a taxa do campo.

O algoritmo aplica uma correção de 'look-elsewhere' para múltiplas comparações, garantindo que os sinais encontrados sejam estatisticamente robustos. A surpresa combinada — a probabilidade logarítmica de que ambos os modelos atingissem suas contagens dada a taxa do campo — é usada para ranquear os termos mais distintivos.

A análise usa o tokenizador cl100k_base (o mesmo do GPT-4) para filtrar termos muito comuns: um termo precisa custar mais tokens do que o número de palavras que contém, garantindo que sejam expressões realmente raras e não apenas artigos ou preposições.

O Typebulb disponibilizou o código-fonte da ferramenta em React com TypeScript, permitindo que a comunidade execute suas próprias análises. Os metadados dos modelos — incluindo laboratório de origem e data de lançamento — são carregados de um bloco de dados JSON separado.

A similaridade entre Kimi e Claude levanta questões sobre influências arquiteturais ou de dados de treinamento. Kimi é um modelo chinês de código aberto, enquanto Claude é um modelo proprietário americano. A ferramenta não especifica a causa da similaridade, apenas a mede.

Para a comunidade open source, a notícia é relevante: mostra que métodos simples de análise estatística de texto podem revelar parentescos entre modelos, ajudando a mapear o ecossistema de LLMs de forma independente.

O Typebulb planeja expandir a ferramenta para incluir mais modelos e métricas adicionais, como análise de bigramas de palavras e distribuições de comprimento de resposta. Por enquanto, o mapa de calor já oferece um retrato fascinante de quem escreve como quem no mundo dos LLMs.
