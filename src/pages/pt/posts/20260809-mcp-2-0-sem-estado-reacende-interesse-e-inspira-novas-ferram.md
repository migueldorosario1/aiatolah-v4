---
layout: ../../../layouts/PostLayout.astro
title: 'MCP 2.0 sem estado reacende interesse e inspira novas ferramentas'
date: 2026-08-09
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Nova especificação stateless do MCP simplifica implementação e leva a criação de mcp-explorer e datasette-mcp."
source: 'https://simonwillison.net/2026/Jul/31/stateless-mcp/'
heroImage: "/hero/mcp-2-0-sem-estado-reacende-interesse-e-inspira-novas-ferram.jpg"
hero_credit: "Photo by Karolina Grabowska www.kaboompics.com on Pexels"
hero_legenda: "MCP 2.0 sem estado reacende interesse e inspira novas ferramentas"
---
A especificação 2026-07-28 do Model Context Protocol, apelidada de MCP 2.0, chegou em 28 de julho e já é considerada a maior mudança no protocolo desde seu lançamento. Segundo Simon Willison, em seu blog, essa atualização reacendeu seu interesse pessoal no MCP, que havia sido ofuscado por alternativas como Skills.

O MCP, criado pela Anthropic em novembro de 2024, padroniza a exposição de ferramentas para agentes de IA. Durante 2025, o protocolo ganhou enorme popularidade, mas acabou perdendo espaço para abordagens baseadas em terminal e curl, que se mostraram mais flexíveis. No entanto, Willison agora vê o MCP como uma opção mais segura e controlável.

A grande novidade do MCP stateless é a eliminação da necessidade de sessões persistentes. No modelo antigo, eram necessárias duas requisições HTTP: uma para inicializar a sessão e obter um ID, e outra para chamar a ferramenta. Agora, uma única requisição com cabeçalhos como `MCP-Protocol-Version` e `Mcp-Method` resolve tudo.

Essa simplificação reduz drasticamente a complexidade de implementação, tanto para clientes quanto para servidores. Além disso, facilita a construção de aplicações web escaláveis, já que não é preciso manter estado no servidor nem se preocupar com roteamento de sessões.

Para explorar o novo protocolo, Willison criou o `mcp-explorer`, uma ferramenta CLI em Python que permite listar, inspecionar e chamar ferramentas de qualquer servidor MCP stateless. O utilitário pode ser executado diretamente com `uvx`, sem instalação, e foi desenvolvido com ajuda do Codex.

O segundo projeto é o `datasette-mcp`, um plugin para Datasette que adiciona um endpoint `/-/mcp` a qualquer instância. Com apenas três ferramentas — `list_databases`, `get_database_schema` e `execute_sql` — o plugin permite que agentes como ChatGPT ou Claude executem consultas SQL em bancos de dados hospedados. Willison já o utiliza em seu próprio blog, em datasette.simonwillison.net.

Por fim, o `llm-mcp-client` é uma integração oficial do MCP com a ferramenta LLM de Willison. Em um teste, o agente executou sete consultas SQL para responder a uma pergunta sobre notas recentes. O autor planeja incorporar o plugin ao núcleo do LLM e experimentar o MCP em outros projetos.

Willison destaca que o MCP oferece uma forma mais segura de construir agentes, em comparação com a execução arbitrária de comandos em um ambiente de rede aberto. Ele pretende usar o protocolo com mais frequência em aplicações sensíveis baseadas em LLMs.
