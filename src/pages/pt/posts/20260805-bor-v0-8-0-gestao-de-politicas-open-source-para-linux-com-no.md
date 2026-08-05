---
layout: ../../../layouts/PostLayout.astro
title: 'Bor v0.8.0: gestão de políticas open source para Linux com novos tipos'
date: 2026-08-05
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Bor v0.8.0 adiciona Thunderbird, Edge e Firewalld, reformula UI e reforça segurança."
source: 'https://getbor.dev/blog/2026-08-02-bor-v080-release/'
heroImage: "/hero/bor-v0-8-0-gestao-de-politicas-open-source-para-linux-com-no.jpg"
---
O Bor v0.8.0 chegou. A nova versão do gerenciador de políticas open source para desktops Linux traz três novos tipos de política — Thunderbird, Microsoft Edge for Business e zonas Firewalld — além de uma reformulação completa da interface web, RBAC mais granular e uma passada dedicada de endurecimento de segurança. O changelog completo está na página de release do GitHub.

## Thunderbird policy type

O Mozilla Thunderbird agora pode ser gerenciado em desktops inscritos com o mesmo mecanismo usado para o Firefox ESR. O agente escreve o arquivo policies.json que o Thunderbird espera, mesclado de todas as políticas vinculadas; remover a última política restaura o arquivo original. Instalações Flatpak são detectadas e aplicadas junto com instalações RPM/DEB, e o arquivo gerenciado é protegido pelo vigia de adulteração — edições externas são detectadas e imediatamente restauradas. A interface web traz um editor de políticas completo com o catálogo inteiro de políticas do Thunderbird.

## Microsoft Edge for Business policy type

Para frotas rodando Edge no Linux, o agente escreve bor_managed.json em cada diretório de políticas gerenciadas do Edge e o limpa de todos os diretórios quando a última política vinculada é removida. A interface web fornece um editor baseado em árvore com o catálogo de políticas do Edge, validação JSON e uma pré-visualização da configuração antes de habilitar.

## Firewalld zone policy type

O novo tipo de política Firewalld gerencia zonas firewalld em nós inscritos: serviços, portas, portas de encaminhamento, regras ricas, mascaramento, interfaces, fontes e o alvo da zona. O agente escreve XML de zona em /etc/firewalld/zones/, valida com firewall-cmd --check-config e recarrega o firewalld. Como todos os outros arquivos gerenciados, os arquivos de zona são protegidos contra adulteração.

## Polkit: condições variáveis

As regras Polkit agora suportam condições variáveis via action.lookup(), permitindo que uma regra corresponda a variáveis de ação — por exemplo, permitir montagens apenas para unidades removíveis. Também foi corrigido: múltiplos IDs de ação em uma regra agora são corretamente unidos com ||.

## RBAC por ação

A administração de usuários e papéis agora é protegida por permissões por ação, em vez de uma única permissão genérica, permitindo delegação mais granular de tarefas administrativas.

## Reformulação da interface web

Uma passada completa de modernização sobre a interface PatternFly 6, abrangendo vários sprints de UX. O painel mostra o novo visual — navegação lateral agrupada, um único título de página alinhado à esquerda e blocos de estatísticas que levam a listas pré-filtradas: clique em Offline e você cai na página Nodes já filtrada para nós offline.

Os destaques incluem: roteamento de URL — cada página tem uma URL real com botões voltar/avançar funcionais e links profundos; sessões expiradas redirecionam para login; um limite de erro global previne travamentos de tela branca. O editor de políticas agora é uma página roteada (/policies/:id/edit) em vez de modais aninhados. Trilhos de segurança de política — proteção de alterações não salvas, confirmação para mudanças destrutivas de tipo, validação JSON para valores Chrome/Edge, uma visão de Configuração somente leitura para políticas liberadas e pré-visualizações de configuração nos editores de árvore. Listas escaláveis — paginação, filtragem e ordenação no servidor para Nodes e Compliance; busca, ordenação e estados vazios em todas as páginas de lista. Proteção contra ações destrutivas — diálogos de digitar-para-confirmar para todas as exclusões de recursos, além de proteções no servidor que impedem excluir, desabilitar ou rebaixar o último Super Admin. Acessibilidade (WCAG 2.2 AA) — papéis de árvore acessíveis nos editores de política, mensagens de status aria-live, anel de foco e correção de modo escuro/alto contraste via tokens de design PatternFly 6, e um portão de lint de acessibilidade no CI.

O editor de políticas agora é uma página roteada de largura total em vez de modais empilhados, com espaço para os editores baseados em árvore atrás de cada tipo de política. As listas de nós e conformidade são paginadas, filtradas e ordenadas no servidor, então frotas com milhares de nós permanecem rápidas.

Além disso, várias melhorias de qualidade de vida: políticas podem ser liberadas/desliberadas diretamente da visão de lista, códigos de backup para MFA podem ser copiados ou baixados, o formulário de login ganhou um alternador de revelação de senha e dica de Caps Lock, e a barra lateral agora é agrupada em Fleet / Policy / System.

## Catálogos de políticas dirigidos por proto

Os catálogos de políticas Firefox, Thunderbird, Chrome e Edge mostrados na interface web agora são gerados a partir de anotações protobuf — uma única fonte de verdade compartilhada entre servidor, agente e frontend.

## Endurecimento de segurança

Esta versão inclui uma passada dedicada de endurecimento: a identidade do agente agora é estritamente vinculada ao certificado de cliente mTLS, e os caminhos de aplicação de MFA/RBAC foram endurecidos no servidor. Segredos TOTP legados criptografados com SHA-256 são transparentemente migrados para criptografia derivada de HKDF na primeira leitura. Os auxiliares de importação de repositório Ubuntu PPA e Fedora COPR agora bloqueiam SSRF baseado em redirecionamento; apenas alvos de redirecionamento na lista de permissões são seguidos. A exportação CSV do log de auditoria é protegida contra injeção de fórmula de planilha. A senha inicial de administrador gerada automaticamente não é mais impressa no log do servidor (onde cairia no journald ou log centralizado); é escrita em um arquivo somente root. O certificado TLS do servidor é regenerado automaticamente quando seus SANs não correspondem mais aos hostnames configurados. Todos os alertas abertos do Dependabot foram resolvidos, incluindo o aviso CSRF RSC do react-router (GHSA-qwww-vcr4-c8h2).

## Atualizações de plataforma

O frontend mudou para React 19.2 e react-router 8.3, com verificação de tipo TypeScript agora aplicada no CI. Dependências de servidor e agente foram atualizadas, incluindo gRPC 1.82.1 e golang.org/x/crypto 0.52.0.

## Notas de atualização

Agentes devem ser atualizados para v0.8.0 para aplicar os novos tipos de política Thunderbird, Edge e Firewalld; agentes mais antigos ignoram tipos de política que não entendem. O esquema de política protobuf ganhou thunderbird.proto e firewalld.proto e estende as mensagens polkit e edge — regenere qualquer ferramenta externa construída contra proto/policy/. O desenvolvimento frontend agora requer Node.js 22.22+.

## Download

Pacotes para Debian/Ubuntu, RHEL/Fedora/SUSE, Alpine Linux e Arch Linux em x86_64, aarch64 e ppc64le estão disponíveis na página de Download.
