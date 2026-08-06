---
layout: ../../../layouts/PostLayout.astro
title: 'Agente ''Locksmith Loop'' migra COBOL para Java com 91,9% de cobertura'
date: 2026-08-06
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Método agêntico valida migração de COBOL para Java com oráculo determinístico, alcançando 91,9% de cobertura em caso real."
source: 'https://arxiv.org/abs/2607.28271'
heroImage: "/hero/agente-locksmith-loop-migra-cobol-para-java-com-91-9-de-cobe.jpg"
---
A migração de programas legados em COBOL para Java é um dos maiores desafios da engenharia de software. A falta de dados de teste e a dificuldade de validar todos os casos extremos tornam o processo lento e arriscado.

Um novo artigo no arxiv.org propõe uma abordagem agêntica para resolver esse problema. O método, chamado 'Locksmith Loop', usa um oráculo determinístico para validar a saída do código gerado por agentes de IA.

A técnica começa com a preparação de dois ambientes de execução: o código-fonte COBOL e o alvo Java gerado são instrumentados com mocks e executados fora do mainframe, em hardware comum. Em seguida, um loop agêntico iterativo realiza uma 'busca por testemunhas' (Witness Search) sobre os mocks de entrada para penetrar nos ramos do programa.

Quando os limites de roteamento são alcançados, um analisador identifica um 'Parágrafo Bloqueado' (Locked Paragraph), uma condição que impede uma exploração mais profunda. O método então aplica mutações que preservam a paridade para continuar a exploração.

Os pesquisadores testaram o Locksmith em três estudos de caso de migração COBOL-Java, abrangendo dois programas de código aberto e um programa COBOL interno de produção. Os programas variavam de 430 a 4.114 linhas de código-fonte.

O Locksmith melhorou consistentemente a cobertura além dos platôs de busca de entrada, alcançando cobertura quase completa nos dois programas de código aberto e 91,90% de cobertura de ramos no programa COBOL interno de produção.

O Java gerado correspondeu à referência COBOL sob verificações de paridade determinísticas em todos os casos de teste aceitos. Isso demonstra, segundo os autores, uma nova abordagem para validar a saída de codificação agêntica usando um oráculo determinístico.

A importância desse trabalho vai além da migração de COBOL. Ele mostra como agentes de IA podem ser usados de forma confiável em tarefas críticas, desde que haja um mecanismo de validação rigoroso.

O 'Locksmith Loop' é um passo em direção a uma engenharia de software mais automatizada e segura, especialmente para sistemas legados que ainda sustentam grande parte da infraestrutura global.

A pesquisa foi submetida ao arxiv.org em 30 de julho de 2026, na categoria de Engenharia de Software. O artigo completo está disponível para leitura e traz detalhes sobre a implementação e os resultados.

Essa abordagem reforça a tendência de usar agentes de IA não apenas para gerar código, mas também para validá-lo de forma sistemática, reduzindo o risco de bugs e aumentando a confiança na migração de sistemas críticos.

Com a crescente pressão para modernizar sistemas legados, métodos como o Locksmith podem se tornar ferramentas essenciais para empresas e governos que dependem de COBOL há décadas.

A combinação de código aberto, hardware commodity e validação determinística aponta para um futuro onde a IA pode assumir tarefas complexas com maior segurança e transparência.
