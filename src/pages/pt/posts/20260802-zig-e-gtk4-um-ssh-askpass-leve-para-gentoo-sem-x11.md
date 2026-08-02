---
layout: ../../../layouts/PostLayout.astro
title: 'Zig e GTK4: um ssh-askpass leve para Gentoo sem X11'
date: 2026-08-02
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Desenvolvedor cria ssh-askpass em Zig e GTK4 para evitar dependências X11 e KDE no Gentoo."
source: 'https://xn--gckvb8fzb.com/a-gtk4-ssh-askpass-in-zig/'
heroImage: "/hero/zig-e-gtk4-um-ssh-askpass-leve-para-gentoo-sem-x11.jpg"
---
Um desenvolvedor do Gentoo, cansado das opções de ssh-askpass que arrastam X11 ou uma pilha KDE inteira, decidiu escrever a própria solução. O resultado é um utilitário feito em Zig 0.16 e GTK4, com bindings escritos à mão que mantêm o X fora da compilação.

O autor roda um Gentoo endurecido no laptop e, na maioria das vezes, não precisa de ssh-askpass porque usa chaves -sk para a maioria dos sistemas. Mas existe uma situação clássica em que o recurso é necessário: quando um programa quer a frase secreta de uma chave ED25519 comum, mas não tem terminal para ler.

O caso típico é o `go get`, ou o toolchain Go em geral, buscando um módulo privado via SSH durante uma compilação sem TTY. O OpenSSH não consegue solicitar entrada em um pipe, então executa o que `SSH_ASKPASS` aponta e coloca o prompt de frase secreta em uma janela.

Por anos, o autor não tinha nada instalado para isso e precisava contornar a situação. O motivo principal é o que o Portage do Gentoo oferece. Uma busca por `ssh-askpass` retorna cinco pacotes: `kde-plasma/ksshaskpass`, `lxqt-base/lxqt-openssh-askpass`, `net-misc/gnome-ssh-askpass`, `net-misc/ssh-askpass-fullscreen` e `net-misc/x11-ssh-askpass`.

Cada um tem pelo menos um inconveniente que o autor não queria tolerar. O sistema dele roda com a flag USE global `-X`, então qualquer coisa que precise de X11 está descartada antes mesmo de olhar. Dos cinco, `kde-plasma/ksshaskpass` é o único sem dependência de X11, o que o tornaria a escolha óbvia.

O problema é tudo o mais que vem junto. Como usuário do Sway, o autor não queria uma pilha KDE completa na máquina só para digitar uma frase secreta ocasional. E é exatamente isso que a instalação do `ksshaskpass` puxa: uma lista enorme de pacotes KDE Frameworks, incluindo `kwallet`, `kconfig`, `ki18n` e vários outros.

A simulação do emerge mostra dezenas de pacotes, de `kde-frameworks/kf-env-6` a `kde-plasma/ksshaskpass-6.6.6`. São 32 KiB de tamanho para o pacote principal, mas a cadeia de dependências é desproporcional.

Já o `lxqt-base/lxqt-openssh-askpass` precisa de X diretamente. Além disso, puxa alguns pacotes de framework KDE e um Qt compilado com suporte a X, o que colide com o `dev-qt/qtbase` já instalado no sistema, compilado com `-X`. O Portage para em um conflito de slot.

A resolução de dependências levou 3,10 segundos e mostrou um conflito clássico: o `qtbase` instalado não tem suporte a X, mas o `kwindowsystem` do KDE exige `qtbase` com `X`. O emerge sugere mudanças de USE, mas isso quebraria a configuração atual.

Diante desse cenário, o autor decidiu escrever o próprio ssh-askpass. A escolha por Zig 0.16 e GTK4 é interessante: Zig é uma linguagem de sistemas moderna, com foco em simplicidade e segurança, enquanto GTK4 é um toolkit gráfico que funciona bem com Wayland, o que combina com o Sway.

Os bindings foram escritos à mão, o que significa que não há dependência de ferramentas de geração automática. Isso mantém o X fora da compilação e garante que o utilitário seja leve e enxuto.

A solução resolve um problema real para usuários de Gentoo que rodam sistemas sem X11, mas precisam de um prompt gráfico para chaves SSH. Em vez de aceitar uma pilha pesada, o desenvolvedor optou por uma alternativa minimalista e eficiente.

O artigo original, publicado em xn--gckvb8fzb.com, detalha o processo e mostra que, às vezes, a melhor saída é escrever a própria ferramenta. A comunidade de software livre agradece.
