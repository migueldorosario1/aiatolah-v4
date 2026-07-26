---
layout: ../../../layouts/PostLayout.astro
title: 'ascdraw: editor de diagramas ASCII/UTF-8 nativo e open source atinge 120+ FPS'
date: 2026-07-26
heroImage: "/hero/ascdraw-editor-de-diagramas-ascii-utf-8-nativo-e-open-source.jpg"
hero_credit: "Photo by Google DeepMind on Pexels"
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Ferramenta gratuita e GPLv3 para diagramas em texto, com canvas infinito, camadas e exportação TXT/JSON/PNG."
source: 'https://github.com/exlee/ascdraw'
---
O desenvolvedor Przemysław Alexander Kamiński (exlee) lançou o ascdraw, um editor de diagramas ASCII/UTF-8 nativo, orientado ao teclado e com renderização acima de 120 FPS. O software é distribuído sob licença GPLv3, com pagamento opcional de US$ 9,99 ou €9,99 para licença pessoal.

Segundo o repositório no GitHub, o ascdraw oferece uma tela Unicode efetivamente infinita para linhas conectadas, símbolos, formas, texto, edição retangular, camadas e exportação nos formatos TXT, JSON e PNG. A ferramenta ainda está em evolução, mas já é utilizável.

O editor opera em modo Stamp por padrão, com menus numerados e atalhos de teclado. As direções são controladas pelas setas ou pelas teclas h, j, k, l. Ações como desenhar, apagar, selecionar e mover são combinadas com Ctrl, Alt e Shift. O modo Texto é ativado com a tecla i, e o modo de substituição contínua com Enter ou Shift+R.

Entre os modos disponíveis estão: Stamp (símbolos, setas, preenchimentos), Line (linhas Unicode conectadas), Shape (retângulos contornados ou preenchidos) e Utils (empurrar/puxar linhas e colunas, mover visão). O modo Files/Togls (tecla 0) permite carregar, salvar, exportar, trocar tema e ativar cores ou camadas.

Funcionalidades opcionais incluem cores (16 cores estilo ANSI, preservadas em PNG e JSON), camadas (adicionar, ocultar, reordenar, mesclar) e modo escuro (menos polido, segundo o autor, que prefere fundo branco).

O ascdraw pode editar documentos nativos com salvamento automático: `ascdraw drawing.json`. Também funciona como filtro de edição externa para editores como Kakoune, Neovim e Emacs, lendo da entrada padrão e escrevendo na saída padrão.

A configuração é feita via arquivos TOML, com defaults empacotados e overrides em `$XDG_CONFIG_HOME/ascdraw/config.toml` ou `~/.config/ascdraw/config.toml`. O comando `ascdraw --show-config` exibe a configuração mesclada.

O desenvolvimento contou com auxílio dos modelos OpenAI GPT-5.5 e GPT-5.6. O código está disponível no GitHub e pode ser compilado com Rust via `cargo build --release --locked`.
