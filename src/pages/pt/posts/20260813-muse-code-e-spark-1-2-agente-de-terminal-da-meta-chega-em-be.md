---
layout: ../../../layouts/PostLayout.astro
title: 'Muse Code e Spark 1.2: agente de terminal da Meta chega em beta'
date: 2026-08-13
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Meta lança Muse Code, agente de codificação em terminal, com o modelo Muse Spark 1.2, focado em tarefas complexas e otimização de kernels."
source: 'https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2'
heroImage: "/hero/muse-code-e-spark-1-2-agente-de-terminal-da-meta-chega-em-be.jpg"
hero_credit: "Photo by MARCO on Unsplash"
hero_legenda: "Muse Code e Spark 1.2: agente de terminal da Meta chega em beta"
---
A Meta apresentou o Muse Code (beta), um agente de codificação que roda no terminal, e o Muse Spark 1.2, o modelo que o alimenta. A novidade foi divulgada no blog de pesquisa da empresa, research.meta.ai, como parte de um movimento em direção à fronteira da IA, com modelos maiores e mais capazes a caminho.

O Muse Code é projetado para enfrentar tarefas complexas de engenharia de software em grandes repositórios. Ele planeja mudanças, escreve código e valida os resultados, coordenando múltiplos subagentes persistentes para cada tarefa. Isso permite resolver problemas difíceis com mais rapidez, precisão e menos intervenção humana.

## Agentes assíncronos em segundo plano

O Muse Code opera com um loop de agente simples, complementado por um conjunto de agentes assíncronos em segundo plano. Esses agentes especializados permanecem ativos durante toda a sessão, em vez de serem criados para tarefas individuais, evitando coleta redundante de informações. Eles executam os próximos passos e decidem quando se comunicar com o agente principal, reduzindo a latência e a necessidade de orientação em tarefas difíceis e de múltiplas etapas.

## Design de runtime à prova de falhas

O runtime do Muse Code usa um log de eventos local, onde cada chamada de modelo, execução de ferramenta, aprovação e edição é registrada. Essa fonte única de verdade torna o runtime replay-exact e restart-safe: após uma falha, o agente pode retomar exatamente de onde parou. Isso permite que o Muse Code execute tarefas de longa duração sem ser interrompido por erros.

## Habilidades integradas

O Muse Code vem com várias habilidades padrão. O comando /plan transforma uma tarefa em um plano com aprovação; o /grill testa o plano até que ele se sustente; e o /goal trabalha para concluir o objetivo especificado.

## Muse Spark 1.2: foco em codificação

O Muse Spark 1.2 é uma atualização do Muse Spark 1.1, com melhorias em geração de código, depuração complexa, compreensão de codebase e fluxos de trabalho de desenvolvimento ponta a ponta. A Meta escalou significativamente o treinamento computacional em tarefas de codificação, expandindo a diversidade do ambiente de treinamento. O modelo mantém sua força em outras áreas, como agentes gerais.

## Co-treinamento com o Muse Code

O Muse Spark 1.2 foi co-treinado com o Muse Code para garantir o melhor desempenho e usabilidade quando usados juntos. O treinamento incluiu trajetórias de harness rejeitadas e otimizações de receita para objetivos, compactação e subagentes, além da integração do conjunto de ferramentas do Muse Code para maximizar a compatibilidade.

## Longo horizonte e auto-melhoria

O Muse Spark 1.2 foi extensivamente treinado em tarefas de codificação de longo horizonte, incluindo geração de repositórios inteiros, projetos ponta a ponta e auto-pesquisa. Ele usa planejamento para sequenciar o trabalho, condicionamento de objetivos para manter a direção e compactação de contexto para reter o conhecimento necessário.

A Meta também usou o Muse Spark 1.1 para gerar ambientes de codificação desafiadores e templates de instrução. O modelo então avaliou soluções candidatas com base em quão bem elas satisfaziam esses requisitos, produzindo um dataset de treinamento escalável para o Muse Spark 1.2. Esse ciclo de auto-melhoria ajudou o modelo a seguir instruções complexas com mais precisão que seu predecessor.

## Estudo de caso: otimização de kernels GPU

A Meta testou a capacidade do modelo de otimizar iterativamente kernels GPU em mais de 1.000 chamadas de ferramentas (até 24 horas). Usando o ambiente de codificação agêntica do Muse Code, o modelo escreve, compila, perfila e melhora progressivamente o desempenho do kernel em relação a uma implementação de linha de base. Os benchmarks foram feitos em kernels KDA e MLA para GPUs NVIDIA Hopper.

A linha de base é a implementação FLA Triton do KDA. Os modelos foram proibidos de importar bibliotecas de terceiros, como FLA, diretamente; em vez disso, tiveram que aplicar conhecimento especializado de otimização de kernel para implementar o algoritmo em Triton. O Muse Spark 1.2 combinou um kernel de preparação paralelo por blocos com uma varredura sequencial entre blocos, incorporando otimizações específicas do KDA, como recentralizar a decadência cumulativa gated no ponto médio do bloco.

## Disponibilidade

O Muse Spark 1.2 está disponível hoje no Muse Code e na Meta Model API, com acesso global expandido. A Meta promete novos recursos de harness e modelos mais poderosos em breve.
