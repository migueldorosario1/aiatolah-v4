---
layout: ../../../layouts/PostLayout.astro
title: 'Cloudflare OS: plataforma aberta para agentes e apps no trabalho'
date: 2026-08-11
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Cloudflare abre o código do Cloudflare OS, plataforma que dá a cada pessoa um agente e workspace com contexto da empresa."
source: 'https://blog.cloudflare.com/cloudflare-os/'
heroImage: "/hero/cloudflare-os-plataforma-aberta-para-agentes-e-apps-no-traba.jpg"
hero_credit: "Photo by JoshuaWoroniecki on Pixabay"
hero_legenda: "laptop, digital device, technology, portable, computer, laptop computer, pc, macbook, laptop, laptop, laptop, technology, technology, technology, technology, computer, computer, computer, computer, computer"
---
A Cloudflare anunciou a abertura do código do Cloudflare OS, uma plataforma que promete levar o poder dos agentes de IA para toda a organização, não apenas para desenvolvedores. A ideia é dar a cada pessoa um agente e um workspace construídos em torno da empresa: como ela funciona, o que sabe e os sistemas que usa.

Segundo o blog.cloudflare.com, a plataforma foi testada internamente desde maio deste ano, com milhares de funcionários de todas as áreas usando-a diariamente para criar documentos, slides, automatizar tarefas e construir pequenos apps de visualização de dados.

A versão que está sendo aberta agora incorpora lições dessa primeira rodada. O CIO da empresa, Sam Rhea, detalha a jornada em um post separado.

## O que mudou da primeira versão

A primeira versão era centrada em workspaces privados, com apps estáticos e processos determinísticos que ainda consumiam tokens de modelo. Mas a colaboração expôs um problema mais fundamental: o acesso a um servidor MCP dizia quais ferramentas um agente podia chamar, mas não quais recursos subjacentes ele havia observado.

Com o compartilhamento de workspaces, apps e saídas, era preciso garantir que a colaboração não expusesse informações que alguém não tivesse permissão de ver. A solução foi reconstruir o Cloudflare OS sobre uma nova fundação, onde a segurança é parte da plataforma, e não uma preocupação de cada pessoa que constrói um app ou usa um agente.

## Como funciona o Cloudflare OS

O Cloudflare OS começa com uma conversa no navegador, como muitas ferramentas de IA. A diferença é que cada conversa é fundamentada no contexto e nas habilidades que a organização curou. Um workspace pode receber um objetivo e usar esse conhecimento para trabalhar com as ferramentas e dados que a empresa já utiliza.

A plataforma combina três partes: um workspace de agente com runtime isolado para escrever e executar código; um novo framework de segurança e governança para acesso seguro a dados e serviços internos; e uma plataforma para apps pessoais e modificáveis que as pessoas podem construir, compartilhar e continuar alterando.

O que começa como uma conversa pode se tornar um documento, um app ou um workflow que continua fazendo o trabalho.

## Workspace para todos

Os workspaces foram desenhados para qualquer pessoa na empresa, sem necessidade de ser desenvolvedor ou saber usar terminal. Eles combinam sessões de agente, estado persistente, saídas e arquivos, acesso a recursos e um runtime isolado.

Os workspaces vêm carregados com o contexto e as habilidades que o time ou a empresa coletaram. Se alguém descobriu a melhor forma de fazer algo, todos podem se beneficiar, sem precisar explicar o mesmo processo, terminologia e boas práticas a um modelo toda vez.

Entre as possibilidades: pesquisar e responder perguntas usando contexto da empresa; criar documentos, slides e planilhas que podem permanecer conectados a dados vivos; construir apps colaborativos com interface própria; e executar workflows determinísticos, onde o código cuida das etapas previsíveis e o modelo entra apenas onde agrega valor.

O Cloudflare OS dá aos agentes e apps acesso governado a sistemas de registro por meio de 'Gatekeepers' e também suporta servidores MCP existentes via 'MCP Server Portals'.

## Segurança e governança

Um dos primeiros pedidos de quem experimenta IA no trabalho é por chaves de API para sistemas da empresa. Mas entregar chaves a pessoas e agentes é perigoso e não escala: elas costumam dar acesso amplo e de longa duração, difícil de restringir, compartilhar com segurança e auditar.

O MCP oferece uma alternativa melhor, segurando a credencial e expondo um conjunto definido de ferramentas. Mas controlar quais ferramentas um agente pode chamar é só o primeiro passo. O MCP sozinho não diz quais recursos subjacentes o agente observou. Ele pode combinar informações entre sistemas, enviá-las a um lugar menos restrito ou expô-las por meio de apps e saídas a pessoas que não deveriam ver os recursos originais.

Por isso, a autorização precisa considerar para onde os dados podem ir em seguida.

## Agentes começam sem acesso

O Cloudflare Access controla quem entra no Cloudflare OS. Dentro dele, todo agente e app começa sem acesso a nada. Um agente pode pedir acesso a um recurso específico, que você concede ou nega. O código gerado recebe esse recurso como uma 'typed binding', e a credencial fica completamente isolada do agente e do código gerado.

O código do servidor roda em um 'Dynamic Worker' com rede de saída global desabilitada. O código do cliente roda em um frame isolado no navegador. A plataforma foi desenhada para pertencer à empresa que a executa: você pode personalizar as interfaces, conectar suas ferramentas e adicionar as habilidades e o contexto que capturam como sua organização funciona.

Com o código aberto, qualquer organização pode implantar o Cloudflare OS, conectá-lo a sistemas internos e torná-lo seu.
