---
layout: ../../../layouts/PostLayout.astro
title: 'Google corrigiu mais bugs do Chrome em junho do que em dois anos, com IA'
date: 2026-08-02
category: 'Segurança e Ética'
lang: "pt-br"
excerpt: "Com agentes de IA, o Google corrigiu 1072 bugs de segurança no Chrome em dois meses, superando 23 versões anteriores."
source: 'https://blog.google/security/chrome-stronger-with-every-update/'
heroImage: "/hero/google-corrigiu-mais-bugs-do-chrome-em-junho-do-que-em-dois.jpg"
---
O Google anunciou que, graças ao uso intensivo de inteligência artificial, corrigiu mais bugs de segurança no Chrome em junho de 2026 do que nos dois anos anteriores. A informação foi divulgada no blog oficial da empresa, blog.google.

A empresa afirma que está vivendo uma mudança massiva na indústria de segurança de software. Modelos de linguagem de grande escala (LLMs) estão permitindo a descoberta automatizada de vulnerabilidades em uma escala sem precedentes, superando os limites da expertise humana.

O objetivo é usar modelos de IA para encontrar e corrigir centenas de bugs de segurança mais rápido do que nunca. O Google detalhou como está fazendo isso em três frentes: encontrar, triar e corrigir vulnerabilidades.

## Encontrando vulnerabilidades

A equipe de segurança do Chrome usa LLMs há anos. Em 2023, desenvolveram formas de aumentar a cobertura de fuzzing. Em 2024, trabalharam com o Project Zero no Naptime. Em 2025, colaboraram com DeepMind e Project Zero no Big Sleep, um agente que encontrou bugs no motor V8 e na stack gráfica.

No início de 2026, construíram um harness de agente usando Gemini para encontrar vulnerabilidades em todo o código do Chrome, com maior eficiência e menos falsos positivos. Um dos bugs encontrados foi uma sandbox escape que permitia a um renderizador comprometido enganar o navegador para ler arquivos locais — um bug que sobreviveu por mais de 13 anos no código.

O Google melhorou o harness adicionando suporte a múltiplos modelos, construindo uma base de conhecimento com CVEs e histórico do Git, incentivando arquivos SECURITY.md, adicionando um agente 'crítico' e rodando os modelos várias vezes para lidar com a não-determinismo.

Tudo isso foi feito com segurança: os modelos analisam código estritamente em repouso, em máquinas sem acesso à internet, com allowlists rígidas e sem modo irrestrito.

## Triagem automatizada

A triagem de relatórios de segurança, que antes levava de 5 a 30 minutos por bug, agora é automatizada com IA. O processo tem quatro fases: filtrar ruído, reproduzir bugs, enriquecer com metadados e atribuir automaticamente.

O Google estima que isso economiza centenas de horas de trabalho por mês.

## Corrigindo bugs em escala

Para corrigir bugs em escala, o Google usa workflows multi-agente: um agente de correção gera múltiplas correções candidatas, um agente crítico avalia a melhor, e agentes de teste escrevem testes. Isso imita um processo de revisão de código.

O resultado: nas últimas duas versões do Chrome, 149 e 150, foram corrigidos 1072 bugs de segurança, superando o total dos 23 marcos anteriores combinados.

O Google também integrou ferramentas como BigSleep e CodeMender ao sistema de integração contínua, rodando a cada 24 horas. Em maio, os resultados foram significativos.

A empresa também viu um aumento nos relatórios de bugs externos: em março, recebeu mais relatórios do que em todo o ano de 2025. Por isso, ajustou o programa VRP para focar em submissões que complementem a descoberta interna.

Com essa abordagem, o Google reforça seu compromisso com a segurança do Chrome, usando IA para estar sempre um passo à frente dos atacantes.
