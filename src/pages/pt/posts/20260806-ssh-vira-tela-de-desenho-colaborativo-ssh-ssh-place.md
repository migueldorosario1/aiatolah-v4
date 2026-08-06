---
layout: ../../../layouts/PostLayout.astro
title: 'SSH vira tela de desenho colaborativo: ssh ssh.place'
date: 2026-08-06
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "ssh.place transforma SSH em canvas colaborativo: 200x60 células, sem conta, um pixel a cada 15s."
source: 'https://ssh.place'
heroImage: "/hero/ssh-vira-tela-de-desenho-colaborativo-ssh-ssh-place.jpg"
---
O SSH, protocolo clássico de administração remota, ganhou um uso inusitado: virar uma tela de desenho colaborativo. O projeto ssh.place, apresentado no Hacker News, permite que qualquer pessoa desenhe em um canvas compartilhado usando apenas uma conexão SSH.

Segundo ssh.place, a proposta é simples: 'One canvas. Everyone draws on it over SSH.' Não há conta para criar nem instalação de software. Basta digitar `ssh ssh.place` no terminal e começar a desenhar.

O canvas tem 200 por 60 células, e cada usuário pode fazer uma colocação a cada 15 segundos. O ritmo é pensado para desenho colaborativo em tempo real, sem flood.

Qualquer chave SSH funciona. Não há cadastro: 'Any SSH key works. There is nothing to sign up for.' A autenticação é feita pela própria chave, o que mantém o anonimato e a simplicidade.

A navegação é feita com as teclas `wasd` ou `hjkl`, e as teclas de `0` a `9` selecionam cores. A tecla `tab` percorre as 16 cores disponíveis. O canvas é exclusivamente colorido: o servidor rejeita qualquer caractere, então não é possível escrever texto.

'This canvas is color only. The server turns down anything with a character in it, so you cannot write text here. Draw something instead.' A restrição força os usuários a se expressarem visualmente, criando um espaço de arte coletiva.

O cooldown é vinculado à chave SSH, então reconectar não reseta o tempo de espera. A página web apenas lê o canvas; as alterações acontecem exclusivamente via SSH. 'This page only reads the canvas. It changes over SSH and nowhere else.'

A ideia é um exemplo criativo de uso de protocolos tradicionais para novas formas de interação. Em um momento em que a IA e as interfaces gráficas dominam, o ssh.place resgata a simplicidade do terminal.

O projeto também levanta questões sobre colaboração e moderação em espaços digitais. Sem texto, o desenho se torna a única linguagem, o que pode reduzir conflitos e incentivar a criatividade.

Para desenvolvedores, é uma demonstração prática de como o SSH pode ser usado além da administração de servidores. A implementação é enxuta e acessível, e o código está disponível para quem quiser explorar.

O ssh.place é um convite a repensar ferramentas antigas com novos olhos. Em vez de mais um app web, um protocolo de décadas vira palco para arte coletiva.

A iniciativa reforça o espírito democrático da tecnologia: sem barreiras de entrada, qualquer pessoa com uma chave SSH pode participar. É um pequeno gesto em direção a uma internet mais aberta e colaborativa.

Se você tem um terminal e uma chave SSH, experimente: `ssh ssh.place`. O canvas está esperando por seus traços.
