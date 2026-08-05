---
layout: ../../../layouts/PostLayout.astro
title: 'Clone portátil do Fasttracker II em C com SDL 2 chega à v2.22'
date: 2026-08-05
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Desenvolvedor lança clone do Fasttracker II em C com SDL 2, versão 2.22, com código aberto no GitHub e suporte a Linux, Windows e macOS."
source: 'https://16-bits.org/ft2.php'
heroImage: "/hero/clone-portatil-do-fasttracker-ii-em-c-com-sdl-2-chega-a-v2-2.jpg"
---
O tracker musical dos anos 90 ganha uma nova vida: um desenvolvedor publicou um clone portátil do Fasttracker II, escrito em C e usando a biblioteca SDL 2. A versão 2.22 foi disponibilizada em 19 de julho de 2026, segundo 16-bits.org.

O projeto é totalmente open source, com código-fonte disponível no GitHub. Quem quiser compilar do zero encontra o arquivo 'HOW-TO-COMPILE.txt' com as instruções. O programa compila nativamente em Linux.

O Fasttracker II original é um software clássico de criação de música por amostras, muito usado na cena demoscene e por músicos eletrônicos nos anos 90. Este clone busca manter a experiência original, mas com portabilidade para sistemas modernos.

A versão 2.22 traz correções e melhorias, mas o desenvolvedor alerta para um problema: se você tiver mais de um monitor conectado ao PC, com taxas de atualização diferentes, pode encontrar alguns bugs no programa.

No Windows, há uma observação importante para usuários com GPU NVIDIA: se as combinações ALT+F4 e ALT+F5 (usadas para copiar e colar blocos) não funcionarem, é preciso desativar esses atalhos no 'GeForce Experience', caso esteja instalado.

No macOS, o usuário precisa clicar com o botão direito no aplicativo e escolher 'Abrir' na primeira execução. Em versões modernas do sistema, também é necessário permitir a execução em Ajustes do Sistema -> Privacidade e Segurança. Vários atalhos importantes do FT2 estão ocupados pelo sistema e precisam ser reatribuídos ou removidos. Para alternar para tela cheia, use ALT+Enter ou Ctrl+Cmd+F.

No Linux, para que ALT+F4 (copiar padrão) e ALT+F5 (colar padrão) funcionem, é preciso alterar esses atalhos do sistema operacional para outras combinações.

O projeto é um exemplo de como o espírito do software livre mantém viva a cultura dos trackers. Com o código aberto, qualquer pessoa pode estudar, modificar e contribuir, garantindo que essa ferramenta histórica continue acessível para novas gerações de músicos e programadores.

A iniciativa reforça a importância do open source como contraponto ao software proprietário, permitindo que ferramentas essenciais da cultura digital não se percam no tempo. O clone do Fasttracker II é mais um passo nessa direção, unindo nostalgia, técnica e liberdade.

Para mais detalhes, acesse a página do projeto em 16-bits.org e o repositório no GitHub.
