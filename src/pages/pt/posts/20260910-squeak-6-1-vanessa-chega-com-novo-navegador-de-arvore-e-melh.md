---
layout: ../../../layouts/PostLayout.astro
title: 'Squeak 6.1 ''Vanessa'' chega com novo navegador de árvore e melhorias de kernel'
date: 2026-09-10
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Squeak 6.1 'Vanessa' traz novo tree browser, retorno do Objectland, 1700+ patches e homenagem a Vanessa Freudenberg."
source: 'https://squeak.org/release_notes/6.1/'
heroImage: "/hero/squeak-6-1-vanessa-chega-com-novo-navegador-de-arvore-e-melh.jpg"
hero_credit: "Ryan Finnie via Openverse (by-sa)"
hero_legenda: "Squeak 6.1 'Vanessa' chega com novo navegador de árvore e melhorias de kernel"
---
A comunidade Squeak anunciou o lançamento do Squeak 6.1, apelidado de 'Vanessa', em homenagem a Vanessa Freudenberg (1972-2025), uma das figuras centrais do projeto. A versão chega às vésperas do 30º aniversário do sistema, com um pacote robusto de novidades.

Segundo o squeak.org, desde a última versão, há quatro anos, foram mesclados mais de 1.700 patches, com mais de 9.000 mudanças de métodos. O número impressiona e reflete o ritmo acelerado de desenvolvimento da comunidade.

Entre os destaques, está um novo navegador de árvore, que permite navegar por classes e categorias usando morphs hierárquicos reformulados. A ferramenta promete facilitar a exploração do sistema, com painéis que mostram categorias, classes e categorias de mensagens, além de integrar pacotes Monticello.

Outro retorno aguardado é o Objectland, também conhecido como 'Worlds of Squeak', um ambiente lúdico que havia sumido das versões recentes. A volta do Objectland é um aceno à tradição do Squeak como ferramenta educacional e criativa.

O kernel também recebeu atenção especial, com várias correções e mudanças na infraestrutura para simulação, desenrolamento e agendamento de processos, além de reformulação de classes. Essas alterações visam estabilizar e modernizar a base do sistema.

No campo das ferramentas, o release traz melhorias significativas em inspeção, depuração, perfilamento e versionamento de código. O novo comando 'send until…' nos depuradores permite buscar condições específicas em envios de mensagens aninhados, e o comando 'run to here' foi aprimorado para alcançar expressões em blocos.

A interface gráfica, baseada no Morphic, passou por uma grande reforma. Os tree morphs ganharam novas cores, atalhos de teclado e mouse, e um modo de filtro configurável. Agora é possível buscar em toda a árvore, nos nós visíveis ou na seleção atual, com destaque dos termos pesquisados.

O suporte a arrastar e soltar também foi melhorado: ao arrastar um item, os nós se expandem automaticamente após um segundo de hover. Isso facilita a organização de classes e categorias diretamente no mundo Squeak.

Editores de texto também receberam polimento: links são sublinhados ao passar o mouse, e o clique e a seleção de texto ficaram mais convenientes. Ao envolver seleções em aspas simples ou duplas, as aspas aninhadas agora são escapadas automaticamente.

A compatibilidade com telas de alta densidade (high-DPI) foi ampliada para botões, barras de rolagem, sliders, menus, listas de múltipla seleção, árvores, sombras e outros elementos. O suporte multilíngue também foi melhorado em diversos pontos.

Uma correção notável resolveu um problema que impedia janelas recolhidas de aplicar um novo tema de interface e que causava um vazamento de memória potencialmente significativo. Outra correção importante evitou um aviso incorreto no macOS sobre o VM ser configurado como aplicativo singleton.

A estabilidade geral foi reforçada, com correções em layout, renderização, eventos e desempenho de widgets grandes, como árvores e morphs de transformação. A compatibilidade com o MVC (Model-View-Controller) também foi melhorada, reduzindo problemas de concorrência.

O Squeak 6.1 também traz melhorias no ST80, o suporte ao ambiente clássico, incluindo um novo item para fechar o mundo, suporte a high-DPI em visualizações de sistema e o método View>>imageForm para capturar screenshots de visualizações.

As notas de release são interativas e otimizadas para visualização dentro do próprio Squeak. Os links interativos abrem no SqueakJS, um VM de Smalltalk baseado em navegador, com algumas limitações. Para a melhor experiência, a recomendação é baixar o Squeak e ler as notas diretamente no sistema.

A versão 6.1 consolida o Squeak como uma plataforma viva e em constante evolução, mantendo o espírito de experimentação e comunidade que a caracteriza. Com a homenagem a Vanessa Freudenberg, o lançamento também celebra o legado de uma pessoa fundamental para o projeto.

Para mais detalhes, consulte as notas de release completas no site oficial do Squeak.
