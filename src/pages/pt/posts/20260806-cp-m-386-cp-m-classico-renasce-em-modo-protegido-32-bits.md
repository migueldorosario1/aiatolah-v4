---
layout: ../../../layouts/PostLayout.astro
title: 'CP/M-386: CP/M clássico renasce em modo protegido 32 bits'
date: 2026-08-06
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Projeto traz CP/M para 386 protected mode com Ring-3 TPA, boot por floppy ou GRUB e alta compatibilidade com CP/M-68K e 2.2."
source: 'https://github.com/johnsonjh/cpm386'
heroImage: "/hero/cp-m-386-cp-m-classico-renasce-em-modo-protegido-32-bits.jpg"
---
O clássico CP/M, sistema operacional que dominou a era dos microcomputadores antes do DOS, ganha uma nova vida para a arquitetura x86 moderna. O projeto CP/M-386, disponível no GitHub, traz o sistema para o modo protegido de 32 bits dos processadores 386, derivado diretamente do CP/M-68K.

Segundo o repositório no GitHub, o CP/M-386 está em estágio inicial de desenvolvimento, mas já apresenta uma implementação completa do modo protegido com Ring-3 TPA. O sistema pode ser inicializado via disquete 3,5 polegadas de 1,44MB ou como kernel Multiboot do GRUB.

O projeto suporta consoles de texto VGA (endereço 0xB8000) e serial COM1 (9600/N/8/1, 0x3F8). Ainda não há drivers para disco rígido, CD, USB, rede ou som, mas o sistema é compatível com processadores 386 ou superiores com pelo menos 2MB de memória.

Sistemas com BIOS PC ou UEFI com CSM são suportados. O hardware coberto inclui VGA, controlador 8042 PS/2, UART 8250/16450/16550, RTC CMOS e PIT 8253/8254.

A compatibilidade com outras implementações de CP/M é um dos destaques. O BDOS do CP/M-386 cobre 100% do CP/M-68K 1.3 e do CP/M 2.2, 71% do CP/M-Plus, 62% do DOS-Plus e 50% do MP/M 2.1. O sistema atualmente reporta BDOS 2.2 para aplicativos.

A maior parte das funções do CP/M-Plus (CP/M 3) também é suportada. Mais de 60% das adições do DOS-Plus foram implementadas, e aproximadamente metade das extensões do MP/M está completa. A funcionalidade ausente concentra-se em chamadas multiusuário, multitarefa, filas de mensagens e controle de processos, que não se aplicam a uma implementação single-user.

Extensões exclusivas do CP/M-386 foram adicionadas ao BDOS para acomodar novos recursos, como acesso direto a vídeo, temporização de alta resolução e gerador de números pseudoaleatórios (PRNG).

Para compilar o CP/M-386, são necessárias várias dependências: AWK, Cpmtools (versão 2.23 ou posterior), GNU Binutils, GNU Coreutils, GCC ou LLVM Clang, GNU Make, NASM e QEMU (apenas para testes). O projeto alerta que versões antigas do cpmtools podem parecer funcionar, mas têm bugs conhecidos.

A compilação é suportada em NetBSD, FreeBSD e na maioria das distribuições Linux recentes. As versões mínimas verificadas incluem CentOS Stream 9, Fedora 36, Debian 12, Ubuntu 18.04 (com gcc-16 do PPA), Ubuntu 22.04, Alpine 3.24 e OpenSUSE Leap 15.4.

O build recomendado usa GCC, mas também é possível compilar com Clang. O projeto recomenda GCC, pois o código i386 gerado pelo Clang é maior. É importante executar 'make clean' ao trocar de compilador ou ajustar flags. Bibliotecas de suporte de 32 bits são necessárias para rodar a suíte de testes.

No FreeBSD, há um aviso: os pacotes cpmtools2 estão quebrados, com mkfs.cpm não funcional. Para compilar com sucesso, é preciso reconstruir o cpmtools e garantir que não esteja vinculado ao libdsk. Se ocorrer o erro 'Disc rejected by driver', as ferramentas estão quebradas.

O build produz dois artefatos principais: cpm386.elf (imagem de kernel Multiboot) e floppy.img (imagem de disquete inicializável de 1,44MB). Binários pré-compilados estão disponíveis para download.

Para testar no QEMU, o kernel Multiboot pode ser executado com: qemu-system-i386 -m 2M -serial stdio -monitor none -kernel cpm386.elf. Alternativamente, o carregador de MBR de disquete: qemu-system-i386 -m 2M -serial stdio -monitor none -drive if=floppy,format=raw,file=floppy.img -boot a.

É possível desabilitar o VGA com -nographic -display none -vga none para usar apenas o console serial, ou desabilitar a serial com -serial none para usar apenas VGA.

O projeto inclui uma vasta gama de utilitários, como ACLOCKDV.386 (relógio em texto VGA), ACLOCKVT.386 (versão ANSI), CLEARTPA.386 (limpa a TPA), CLS.386 (limpa tela), DELAY.386 (teste de atraso), DUMPDIR.386 (dump de diretório), DUMPFCB.386 (dump de FCB), FPARSE.386 (teste de F_PARSE), GETSN.386 (número serial), GFXTEST.386 (demo gráfico), HD.386 (hex dump), HELLO.386 (primeiro programa CP/M-386), ILLEGAL.386 (teste de proteção Ring-3), IOTEST.386 (testes de I/O), JULIA.386 (fractal Julia), LS.386 (listar arquivos), MANDEL.386 (fractal Mandelbrot), MEM.386 (mapa de memória), MORE.386 (pager estilo UNIX), OD.386 (dump octal), PAUSE.386 (espera tecla), PRINTENV.386 (imprime ambiente), PRNG.386 (teste de PRNG), REBOOT.386 (reinicia), RM.386 (remove arquivos), STAT.386 (porta do STAT do CP/M-Z8000), SYNC.386 (sincroniza discos), TOD.386 (relógio), TOUCH.386 (cria arquivo), TRUNCATE.386 (trunca arquivo), VER.386 (versão), VGAFONT.386 (fonte de texto), VGAOFF.386/VGAON.386 (desliga/liga console VGA), VGATEXT.386 (acesso direto a texto VGA) e muitos outros.

O repositório também traz scripts SUBMIT como DEMO.SUB e PROFILE.SUB, que é executado automaticamente na inicialização.

Em relação ao uso de IA, o projeto é claro: não há código gerado por IA no sistema operacional atualmente, embora existam alguns testes, comentários e análises feitos com IA. O autor pretende que o projeto seja uma experiência de aprendizado. Contribuições com grandes quantidades de código gerado por LLM serão rejeitadas imediatamente. O uso de ferramentas de IA por contribuidores é permitido, sujeito aos termos da LLVM AI Tool Use Policy, mas essa permissão pode ser retirada a qualquer momento.

As estatísticas de código mostram um projeto substancial: 65 arquivos C com 20.635 linhas de código, 22 cabeçalhos C, 6 arquivos de assembly, entre outros, totalizando 100 arquivos e 24.464 linhas de código.

O CP/M-386 é distribuído sob a licença MIT, permissiva. O projeto tem como lar canônico o GitLab, com espelho no GitHub. Bryan W. Sparks, da DRDOS, Inc., sucessor dos direitos do CP/M da Digital Research, concedeu autorização ilimitada para usar, distribuir, modificar e aprimorar a tecnologia CP/M.

O CP/M-386 representa um esforço notável para preservar e modernizar um sistema operacional histórico, trazendo-o para a era de 32 bits com recursos de proteção de memória. Para entusiastas de software retrô e desenvolvedores interessados em sistemas operacionais, é um projeto fascinante para explorar.
