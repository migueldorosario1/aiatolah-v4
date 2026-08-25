---
layout: ../../../layouts/PostLayout.astro
title: 'Auto mode becomes default in Claude Code for Pro, Max, and Team plans'
date: 2026-08-25
category: 'Development'
lang: "en"
excerpt: "Claude Code adopts auto mode as default on 08/14; superior security to manual review in tests."
source: 'https://claude.com/blog/auto-mode-default-in-claude-code'
heroImage: "/hero/auto-mode-vira-padrao-no-claude-code-para-planos-pro-max-e-t.jpg"
hero_credit: "theglobalpanorama via Openverse (by-sa)"
hero_legenda: "Auto mode vira padrão no Claude Code para planos Pro, Max e Team"
---
A Anthropic anunciou que o auto mode se torna o padrão no Claude Code para os planos Pro, Max e Team. A mudança vale para novas sessões a partir de 14 de agosto, segundo claude.com.

Quem já definiu outro padrão pode receber um aviso único perguntando se deseja migrar. Quem fixou uma preferência não será afetado. O classificador do auto mode usa poucos tokens extras por chamada de ferramenta, e a empresa deixou de cobrar por esse custo nesses planos, com efeito imediato.

No Enterprise, na API, na Plataforma Claude na AWS, no Amazon Bedrock, no Agent Platform do Google Cloud e no Microsoft Foundry, o auto mode continua opcional por enquanto. A ideia é dar tempo para os administradores avaliarem. No próximo mês, com os parceiros de nuvem, a Anthropic planeja torná-lo padrão em todas essas superfícies, também sem cobrança pelo classificador. Enquanto isso, administradores do Enterprise podem ativá-lo via configurações gerenciadas.

O auto mode equilibra o desejo de não ser interrompido com a prevenção de ações nocivas. Em vez de prompts, cada chamada de ferramenta passa por um classificador que bloqueia ações irreversíveis, destrutivas ou voltadas para fora do ambiente. Quando algo é bloqueado, o Claude geralmente encontra um caminho mais seguro ou pede autorização direta. Se não progredir — três bloqueios seguidos ou vinte na sessão — o Claude Code volta para aprovações manuais.

A empresa passou meses testando se o auto mode é tão seguro quanto a revisão manual. Foram feitos red-teaming interno, avaliações de terceiros, um estudo controlado com 1.053 testadores pagos e análise de sessões reais de produção. Em todas as métricas, o auto mode igualou ou superou a revisão manual.

O auto mode também permite que o Claude trabalhe de forma autônoma por mais tempo. Isso torna modelos de longa duração, como o Claude Opus 5, mais práticos para tarefas extensas. Reduzir a sobrecarga do usuário aumenta a produtividade: entre adotantes Teams e Enterprise, quem usa auto mode entrega cerca de 25% mais pull requests. Times da Adobe, Nuro, Gusto e Garner Health já usam o auto mode como padrão em produção.

Os dados de segurança mostram que a revisão manual pode virar hábito: usuários aprovam 97% dos prompts de permissão no Claude Code. Embora muitos comandos sejam seguros, uma taxa tão alta sugere cliques reflexivos, não análise cuidadosa. Em contraste, quando o Claude apresenta um plano, os usuários rejeitam 39%; para pedidos individuais de permissão, a rejeição cai para 3%.

O padrão aparece também nos arquivos de configuração. Em junho de 2026, 49,5% dos usuários ativos da CLI criaram manualmente uma regra de permissão para Bash — 5% permitem qualquer comando shell e 43% têm regras de interpretador como Bash(python:*) ou Bash(node:*), quase equivalentes na prática. Esse número cresce cerca de 5 pontos percentuais a cada 5 semanas. Além disso, 62% dos usuários usaram bypassPermissions ou clicaram em 'não perguntar de novo' no Bash, e 25% das sessões interativas começam em modo de permissões bypass.

No auto mode, as regras de permissão continuam valendo antes do classificador, exceto regras amplas que permitem execução arbitrária de código, como python:*. Essas regras são deixadas de lado no auto mode, pois permitiriam que comandos pulassem o classificador. Os arquivos de configuração não são modificados e as regras voltam a valer ao trocar de modo.

A pesquisa, interna e de terceiros, indica que o auto mode é mais seguro do que a interação típica com prompts. No estudo com 1.053 testadores pagos, eles trabalharam em um ambiente controlado, sem saber o que era medido. Em determinado momento, um prompt era trocado por um comando claramente perigoso. Os testadores detectaram o comando perigoso apenas 13,6% das vezes (143 de 1.053), enquanto o auto mode bloqueou 89% (937 de 1.053). Em confronto direto, o auto mode bloqueou 800 comandos que humanos aprovaram; humanos bloquearam apenas 6 que o auto mode permitiu. Em sessões longas, os humanos pioraram: bloqueavam cerca de 17% no início, caindo para 5% após 50 prompts; o auto mode manteve a taxa estável.

A análise de sessões reais, de maio a junho de 2026, mostrou que o auto mode gera menos ações nocivas. Entre sessões sinalizadas para revisão, as manuais continham danos sérios não intencionais mais que o dobro das de auto mode. Em severidade de produção (7+), 6,3% das sessões manuais tinham ação nociva não solicitada, contra 2,4% no auto mode.

A Anthropic também trabalhou com a Apollo Research, startup de segurança de IA do Reino Unido, em um piloto de duas semanas injetando ataques sintéticos em trajetórias reais de codificação. O ciclo find-fix-verify fortaleceu o classificador, dando mais contexto sobre o ambiente protegido.

A mudança reflete uma tendência de agentes mais autônomos, com segurança embutida. Para quem prefere controle manual, ainda é possível definir outro padrão.
