---
layout: ../../../layouts/PostLayout.astro
title: 'Fine-tuning de US$ 500 supera modelos fronteira em revisão de catálogos'
date: 2026-08-02
category: 'Modelos e Algoritmos'
lang: "pt-br"
excerpt: "Com RL em modelo aberto de 9B, empresa supera GPT-5.5 e Claude Opus 4.8 em tarefa jurídica por fração do custo."
source: 'https://fermisense.com/when-machines-take-the-wheel/'
heroImage: "/hero/fine-tuning-de-us-500-supera-modelos-fronteira-em-revisao-de.jpg"
---
Um fine-tuning de apenas US$ 500 com reinforcement learning em um modelo aberto de 9 bilhões de parâmetros superou modelos fronteira em uma tarefa de revisão de catálogos. O caso é um dos três relatados pelo site fermisense.com, que mostra como a combinação de modelo open-source, dados proprietários e RL contra uma versão pontuada do fluxo de trabalho vem se consolidando como um manual vencedor.

O primeiro exemplo vem da Bridgewater Associates, um dos maiores hedge funds do mundo. Seus analistas precisam filtrar um fluxo constante de artigos, arquivos e e-mails, julgando quais documentos são relevantes para a tese de investimento da firma e onde começa o conteúdo padronizado. O problema é que 'relevante' significa relevante segundo o julgamento interno da Bridgewater, e nenhum prompting em modelos fronteira conseguiu absorver esse julgamento de forma confiável. A empresa então decidiu treinar um modelo aberto com rótulos de seus próprios investidores especialistas. O modelo treinado comete cerca de 30% menos erros que o melhor modelo fronteira, a uma fração do custo de inferência.

O segundo caso é da Harvey, que constrói agentes de IA para escritórios de advocacia. Suas cargas de trabalho mais difíceis são de longo horizonte: due diligence de transações e redação de memorandos jurídicos, onde o agente navega por grandes conjuntos de documentos, erros se acumulam entre etapas e até os melhores modelos fronteira com esforço máximo de raciocínio ficavam aquém do padrão de qualidade. A Harvey aplicou reinforcement learning em um modelo de pesos abertos e obteve um agente jurídico que supera tanto o GPT-5.5 quanto o Claude Opus 4.8 em suas próprias rubricas.

O terceiro exemplo é da Intercom, plataforma de atendimento ao cliente cujo agente de IA, Fin, resolve quase dois milhões de problemas de clientes por semana. Nesse volume, o problema é a economia unitária: o preço por chamada dos modelos fronteira aumenta rapidamente, e cada ponto na taxa de resolução importa. Por isso, o grupo de IA da Intercom pós-treinou seu próprio modelo vertical de suporte, o Fin Apex, com bilhões de interações de atendimento ao cliente. A Intercom relata que ele resolve mais problemas que os melhores modelos fronteira, sendo mais barato de executar.

O mesmo padrão se repete em muitos outros casos. O artigo do fermisense.com lista no apêndice mais oito implantações, com o que cada modelo foi treinado para fazer e o que mudou depois que entrou em produção. A lição é clara: com dados certos e uma etapa de RL, modelos abertos pequenos podem superar gigantes fechados em tarefas específicas, por uma fração do custo.
