---
layout: ../../../layouts/PostLayout.astro
title: 'ADLC Team Skills: padrões de equipe para Claude Code e Codex'
date: 2026-08-09
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Projeto open-source leva padrões de engenharia a agentes de IA como Claude Code e Codex, com diretrizes versionadas."
source: 'https://github.com/tikalk/adlc-team-skills'
heroImage: "/hero/adlc-team-skills-padroes-de-equipe-para-claude-code-e-codex.jpg"
hero_credit: "Photo by Google DeepMind on Pexels"
hero_legenda: "ADLC Team Skills: padrões de equipe para Claude Code e Codex"
---
O repositório tikalk/adlc-team-skills, no GitHub, propõe uma camada de equipe para agentes de IA como Claude Code, Codex, OpenCode, Cursor e GitHub Copilot. A ideia é substituir o 'vibe coding' individual por um padrão compartilhado e versionado.

Segundo o projeto, dicas de prompt isoladas geram ganhos rápidos para desenvolvedores solo, mas em escala de equipe resultam em dívida técnica caótica, perda de contexto, PRs difíceis de revisar e perda de propriedade do código. A velocidade está resolvida; confiança e verificação são o novo gargalo.

O ADLC Team Skills é a camada de equipe do Twelve-Factor Agentic SDLC, um framework open-source. Ele transforma agentes de IA de 'adivinhadores isolados' em membros de equipe que seguem a constituição, a estratégia de produto, os padrões de arquitetura e os benchmarks de avaliação do time.

O repositório companheiro tikalk/agentic-sdlc-team-ai-directives guarda os módulos de contexto versionados: constituição, regras, personas, exemplos, índice CDR e manifesto de skills.

A instalação é simples, via npx. O comando `npx adlc-skills-cli add tikalk/adlc-team-skills -a opencode` instala skills, gera comandos de barra e conecta eventos de início de sessão. Já `npx skills add tikalk/adlc-team-skills -a claude -g` instala apenas as skills, sem comandos ou eventos.

O projeto funciona com qualquer agente que suporte o padrão Agent Skills. O `adlc-skills-cli` gera comandos de barra e conecta hooks de `session_start` para nove agentes de codificação. Repositórios sem `.events.json` recebem apenas comandos.

A orquestração é universal: o `mission-brief` descobre skills de qualquer fonte, como mattpocock/skills, addy osmani/agent-skills, superpowers, spec-kit ou repositórios próprios, e as integra dinamicamente ao pipeline. Sem vendor lock-in.

O `team-boot` roda automaticamente no início da sessão via hook de evento. Em projetos não configurados, ele emite um aviso para o usuário executar `/team-setup`. O `team-setup` também pode ser chamado manualmente, oferecendo quatro modos: clonar do GitHub, apontar para um caminho local, verificar configuração existente ou criar uma nova estrutura.

O modo 3 cria um novo diretório `team-ai-directives` com README, AGENTS.md, CDR.md, `.skills.json`, constituição placeholder e índices OKF, além de inicializar o Git. O `team-constitution` substitui interativamente o placeholder por princípios reais.

A comparação entre 'vibe coding' e ADLC é clara. Sem ADLC, a sessão começa do zero, com o agente ignorando arquitetura, regras e padrões. Com ADLC, o `team-boot` carrega automaticamente a constituição e decisões ativas.

Em vez de despejar um prompt wall de 10 mil tokens, o `team-boot` injeta um índice compacto de cerca de 100 tokens. O `team-discover` busca apenas as regras relevantes para a tarefa. Isso reduz desperdício de tokens e evita deriva de instruções.

A ambiguidade leva o agente a inventar funções ou esquemas de banco. O `mission-brief` define contrato formal com Goal, Constraints, Non-Goals e Success Criteria antes de escrever código.

Aprendizados não se perdem: o `levelup-specify` extrai traços de execução da sessão e commita novas regras diretamente no Git. Regressões silenciosas são detectadas por avaliações automatizadas com LLM judges e graders binários antes da revisão humana.

O projeto estrutura-se em quatro pilares: Estratégia e Diretrizes, Produto e Arquitetura, Workflow Spec-Driven, e Governança e Avaliações. No topo, o 'Great Filter' representa a revisão macro do líder humano.

Os padrões da equipe vivem em um repositório Git versionado, não em máquinas locais. O `team-boot` monta a constituição, índices CDR, PDR/ADR e registro de skills no prompt do sistema.

O `team-repair` reindexa o CDR.md, verifica conflitos de regras e a atualidade das diretrizes. Sem decisões documentadas, cada sessão de implementação re-deriva ou interpreta mal a intenção do produto.

Os Product Decision Records (PDRs) capturam decisões de produto em arquivos individuais, com fluxo interativo de clarificação e compilação em PRD.md. Os Architectural Decision Records (ADRs) usam os viewpoints de Rozanski & Woods (Funcional, Segurança, Implantação, Performance) e compõem um AD.md unificado.

O `product-roadmap` acompanha o progresso em quatro camadas: decisões (PDRs), execução (issues via MCP), evidência de código e marcos.

O mantra é 'Debug the Spec, Not the Code': quando o agente erra, adiciona-se a restrição ausente à especificação, para que o erro não se repita. E nunca se deixa o agente que escreveu o código julgar se ele é bom: 'Separe o Criador do Verificador'.

As skills de avaliação constroem suítes de nível aplicacional com PromptFoo ou DeepEval, seguindo Eval-Driven Development. Rodam checagens rápidas Tier 1 e subagentes LLM judge Tier 2 para testar o código contra riscos de negócio antes da revisão humana.

O projeto é uma resposta à necessidade de confiança e verificação na engenharia de IA, colocando a equipe no centro da estratégia.
