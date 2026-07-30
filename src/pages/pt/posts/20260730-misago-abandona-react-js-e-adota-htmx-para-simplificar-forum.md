---
layout: ../../../layouts/PostLayout.astro
title: 'Misago abandona React.js e adota HTMX para simplificar fórum'
date: 2026-07-30
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Projeto de fórum open source Misago remove React.js do código e adota HTMX, eliminando duplicação de templates e melhorando desempenho."
source: 'https://misago-project.org/t/removing-reactjs-from-the-codebase-and-adapting-htmx-for-ui-interactivity/1267/'
heroImage: "/hero/misago-abandona-react-js-e-adota-htmx-para-simplificar-forum.jpg"
---
O projeto Misago, um software de fórum open source, anunciou a remoção do React.js de sua base de código e a adoção do HTMX para interatividade na interface. A decisão foi detalhada em uma discussão no fórum oficial do projeto.

Segundo o Misago, a abordagem anterior tinha problemas significativos. Muitas páginas eram implementadas duas vezes: como templates Django e como componentes React.js. Isso confundia usuários que personalizavam o HTML, vendo suas alterações aparecerem por um segundo antes de serem substituídas pelo HTML do React.

Além disso, cada view acessível a usuários e visitantes precisava ser feita em dobro: como view Django com templates e como rota React com componentes. Isso exigia uma API e serializadores JSON para alimentar os dados, o que tornava a geração de respostas mais lenta.

Parte das mensagens de tradução era duplicada, vivendo em arquivos 'django.po' e 'djangojs.po'. Os arquivos de tradução JavaScript também aumentavam o tamanho inicial do download. Muito JavaScript podia matar a performance, especialmente em dispositivos móveis mais antigos e lentos.

Para permitir que plugins substituíssem ou injetassem HTML personalizado, era necessário implementar tanto templates Django quanto componentes React. O Misago precisaria implementar uma etapa de build JavaScript como parte da construção do site em 'misago-docker'. Desenvolvedores de plugins precisariam conhecer ambas as tecnologias.

O projeto considerou duas soluções: abandonar completamente as views e templates Django, mantendo apenas versões mínimas para motores de busca, focando em uma API e toda a UI como app React; ou reduzir Django a uma API e usar um framework JavaScript com renderização no servidor, como Next.js ou Remix.run.

No entanto, a equipe percebeu que muito software de fórum ainda faz a abordagem antiga: renderizar o máximo possível no servidor e usar JavaScript no cliente apenas para melhorar a interatividade em pontos específicos. E os usuários ficam felizes com isso. Essa abordagem não tem nenhum dos problemas listados.

Fóruns na internet têm bastante interatividade, mas ela é isolada em lugares específicos da página: ações de moderação, acompanhar um tópico, escrever uma resposta, ver últimas notificações, votar em enquete. Tudo isso pode ser alcançado sem React.js e era feito assim por anos antes de decidirem que recarregar a página inteira é algo a ser evitado.

HTMX é uma biblioteca pequena que permite aos desenvolvedores especificar partes do HTML como ilhas dinâmicas que podem ser trocadas por novo HTML renderizado no servidor mediante interação. Por exemplo, a lista de tópicos é uma ilha grande. Com um pouco de HTMX incluído no template Django, mudar a categoria atual na lista de tópicos poderia puxar novo HTML do Django apenas para a nova lista, mantendo o resto da página inalterado.

O backend do Misago precisaria apenas ser alterado para retornar apenas o HTML dessa ilha quando a requisição viesse do HTMX, em vez da página completa. Não há necessidade de serialização JSON ou escrever JavaScript ou React dedicados.

HTMX é uma forma declarativa de fazer o que se fazia com jQuery há 20 anos: '$.get('url', '#outlet')'. Ou como Rails Turbolinks. A equipe do Misago concluiu que essa é a abordagem correta para software de fórum, especialmente para quem odeia scroll infinito ou quer manter as coisas simples.

A mudança representa um movimento contra a complexidade desnecessária trazida por frameworks JavaScript pesados em aplicações que não precisam de uma SPA completa. O Misago optou por simplicidade e desempenho, alinhando-se a uma tendência crescente de retorno ao server-side rendering com melhorias pontuais de interatividade.
