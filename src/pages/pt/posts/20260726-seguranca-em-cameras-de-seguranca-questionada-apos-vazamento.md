---
layout: ../../../layouts/PostLayout.astro
title: 'Segurança em câmeras de segurança questionada após vazamento de token do GitHub'
date: 2026-07-26
category: 'Segurança e Ética'
lang: "pt-br"
excerpt: "Descoberto token de admin do GitHub em firmware de câmeras de segurança Hanwha, expondo centenas de repositórios."
source: 'https://hhh.hn/hanwha-github-token/'
heroImage: "/hero/seguranca-em-cameras-de-seguranca-questionada-apos-vazamento.jpg"
---
Recentemente, a preocupação com a segurança de câmeras de segurança foi posta à prova quando foi revelada uma falha significativa. Com a AXIS promovendo a execução de aplicativos Linux em suas câmeras, o foco se intensificou em gerenciamento de vulnerabilidades e credenciais. Um incidente envolvendo a Hanwha Vision, uma empresa nova para muitos, mostrou a gravidade da situação.

Na investigação da empresa, foi possível acessar blobs de firmware para cada modelo de câmera, o que é considerado positivo. Ao analisar um arquivo de imagem, foi encontrado um tarball com funcionalidades de IA da câmera e um fwimage.tgz que binwalk sinalizou como criptografado. Após pesquisa, foi descoberto que a frase-passe para descriptografar o arquivo é composta por 'HTW' mais o número do modelo, como em 'HTWXNP-9300RW'.

Dentro do tarball, outro fwimage.tgz estava criptografado de maneira diferente, indicando a necessidade de uma abordagem diferente da utilizada por Matt Brown em sua análise. A análise do fwupgrader binary revelou obfuscação na decodificação do rootfs, onde a chave AES é XORada contra uma pequena tabela de chave estática no binário e recompõe-se no runtime.

A KEY e IV硬编码 (a mesma em toda a linha de modelo) foram: KEY = dfa049bb922e63e2decc764af5628068e5b7a2662e479a615b14643e567579b0 e IV = 53f926801b81454a4f889c9a390db6e6. Com essa informação, foi possível acessar a raiz do sistema.

Alguns dados interessantes foram encontrados, incluindo um token do GitHub presente em cerca de 30 arquivos. O token tinha privilégios de administrador em centenas de repositórios da organização do GitHub da Hanwha. A presença do token era uma consequência do build do UI com vite, onde uma variável é definida como o conteúdo de process.env na hora do build.

Outras informações sensíveis, como endereços IP associados ao Departamento de Defesa dos EUA, foram encontradas, levantando questões sobre a relação da Hanwha Vision com o governo americano. A Hanwha Vision, fundada como Samsung Techwin, é uma subsidiária do grupo Hanwha e anteriormente teve produtos associados ao setor de defesa.

Ao verificar a ocorrência de outros tokens, cerca de 500 firmwares foram baixados da página da Hanwha, resultando na extração de 62% com a mesma técnica e a descoberta de três tokens iguais. Após um relato breve enviado à Hanwha, a empresa respondeu em 12 horas, informando que o token havia sido revogado.

Este incidente destaca a necessidade de maior cuidado com a segurança e o gerenciamento de credenciais em dispositivos conectados e softwares.
