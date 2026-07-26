---
layout: ../../../layouts/PostLayout.astro
title: 'Fedora 45: A Study on Package Manufacturing'
date: 2026-07-26
category: 'Development'
lang: "en"
excerpt: "An inside look at the creation process of Fedora 45 artifacts, from the package commit to the final installable version."
source: 'https://supakeen.com/weblog/the-fedora-45-sausage-factory/'
heroImage: "/hero/fedora-45-um-estudo-sobre-a-fabricacao-dos-pacotes.jpg"
---
O Fedora 45, a versão mais recente do popular sistema operacional Linux, está chegando e com ele, uma atualização no entendimento do processo de criação dos seus pacotes. Este artigo acompanha passo a passo como o Fedora transforma o código-fonte e os pacotes em artefatos para download e instalação, desde o `git push` de um empacotador até a composição da versão final, que inclui ISOs, imagens de nuvem, imagens de contêiner e implementações OSTree.

**Início da Linha: dist-git**
A jornada começa com um empacotador que faz um `git push` de um commit em um pacote. O Fedora guarda a definição de origem de cada pacote em repositórios Git individuais em src.fedoraproject.org. Cada repositório contém um arquivo spec RPM, patches para downstrem e um arquivo sources que aponta para tarballs de upstream armazenados em um cache lookaside separado. Enquanto os arquivos binários grandes ficam fora do Git, os outros arquivos, incluindo o controle de versão, permanecem dentro dele.

Os empacotadores geralmente interagem com esses repositórios através do `fedpkg`, uma interface de linha de comando que encapsula operações comuns como clonar repositórios, enviar tarballs de origem, submeter builds e criar atualizações. O `fedpkg build` é crucial pois constrói uma URL apontando para um commit específico no repositório Git e a entrega para o Koji, o sistema de build. O build é totalmente reprodutível a partir desse hash de commit.

**Arquitetura do Build System: Koji**
Quando o `fedpkg build` submete essa URL do Git, Koji assume o controle. Koji é o sistema de build do Fedora, responsável por construir praticamente tudo desde a versão Fedora 7. Seguindo uma arquitetura hub-and-spoke, o hub é um servidor XML-RPC passivo frente a um banco de dados PostgreSQL, enquanto daemons builder fazem polls no hub para trabalhos, criam um ambiente Mock chroot fresco para cada build, executam o build e enviam os resultados. Cada build inicia em um ambiente limpo, garantindo a reprodutibilidade.

**Controle de Atualizações: Bodhi**
Novos builds RPM em Koji não alcançam os usuários automaticamente. Para releases branched (qualquer versão que não seja Rawhide), passam pelo Bodhi, o sistema de gerenciamento de atualizações do Fedora. O Bodhi controla o lançamento de atualizações por meio de um ciclo de feedback e testes. Um empacotador submete uma atualização contendo um ou mais builds, que percorrem uma sequência de estados: pendente, test, estável. Usuários e testes automatizados fornecem karma (+1 / -1). Quando uma atualização alcança +3 karma ou passa suficientes dias em test, ela é automaticamente empurrada para estável.

**Compondo uma Release: Pungi**
Individualmente, os RPMs, mesmo com o controle de Bodhi, são apenas pacotes. Transformá-los em algo que possamos baixar e instalar, como ISOs, imagens de nuvem ou repositórios, é o trabalho do Pungi. Pungi é o orquestrador de composição. Em vez de fazer o trabalho pesado, ele coordena as ferramentas que o fazem, garantindo que tudo seja construído a partir do mesmo conjunto consistente de pacotes.

Uma composição começa quando o `pungi-koji` é executado, acionado por cron para composições noturnas do Rawhide ou manualmente para releases de marco. Ele carrega um arquivo de configuração (para o Fedora, isso é o `fedora.conf` no repositório `pungi-fedora`) e passa por uma seqüência de fases.

O primeiro trabalho real que o Pungi faz é snapshotar o conjunto de pacotes de uma tag Koji. Esta é a fase Pkgset e é crucial: cada fase subsequente trabalha a partir deste conjunto congelado. Se alguém submeter um novo build ao Koji enquanto a composição estiver em andamento, ele não entrará na composição. O snapshot baseado em tag torna a composição inteira auditável.

**Conclusão**
Com o Fedora 45, a comunidade open source pode se orgulhar de um processo de empacotamento transparente e auditável, o que garante a qualidade e confiabilidade dos pacotes que são disponibilizados aos usuários finais.
