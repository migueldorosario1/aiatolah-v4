---
layout: ../../../layouts/PostLayout.astro
title: 'Defcon 34 badge traz chip open source que vira chave de segurança'
date: 2026-08-02
category: 'Hardware e Infra'
lang: "pt-br"
excerpt: "Chip Baochip-1x, criado por bunnie Huang, é open source e pode ser inspecionado até o silício."
source: 'https://www.wired.com/story/defcon-34-badge-baochip-andrew-bunnie-huang/'
heroImage: "/hero/defcon-34-badge-traz-chip-open-source-que-vira-chave-de-segu.jpg"
---
Todo ano, a conferência Defcon presenteia seus participantes com badges eletrônicos elaborados, cheios de quebra-cabeças e desafios criptográficos. Mas a edição deste ano, a Defcon 34, inova: em vez de o design do badge ser a estrela, o destaque está no hardware interno.

O lendário hacker de hardware Andrew 'bunnie' Huang foi convidado para criar os badges, revelados aqui pela primeira vez. Eles incluem um chip open source inovador, projetado por Huang, que promete avançar o estado da segurança, transparência e confiabilidade na computação.

O chip não é apenas parte do badge. Seu módulo central pode ser removido e usado após a conferência como um token de segurança de hardware, dando ao badge uma segunda vida além da Defcon.

O chip, chamado Baochip-1x, é um microcontrolador 'majoritariamente' open source, com três anos de desenvolvimento. Huang publicou no GitHub o código-fonte do sistema operacional, firmware, núcleo do processador, motores criptográficos e sistema de entrada e saída, permitindo inspeção e uso por qualquer pessoa.

O chip também é empacotado de forma que pesquisadores possam examinar o silício internamente e comparar com o design publicado, sem precisar confiar que o chip fabricado é o que os projetistas pretendiam.

Chips tradicionais são caixas-pretas, com um invólucro opaco que esconde a circuiteria. Mesmo chips open source anteriores, que disponibilizavam especificações e código, eram encapsulados em plástico impermeável, criando um problema de cadeia de suprimentos: os usuários tinham que confiar que nada mudou durante a fabricação, como a adição de um backdoor.

Diferente dos chips convencionais, o Baochip é empacotado para que a luz infravermelha possa atravessar a parte de trás do silício, permitindo a inspeção visual das estruturas internas. Huang planeja demonstrar a técnica na conferência, deixando os participantes inspecionarem o chip sob luz infravermelha.

'Tenho feito várias coisas na linha de confiança, silício e transparência de verificação' há anos, diz Huang ao WIRED. 'É toda essa história que venho construindo para tentar ter um chip em que possamos confiar até o núcleo, até o transistor. Você pode realmente ver os arrays de RAM no chip.'

## Construindo um chip

Construir um chip novo é caro, podendo custar milhões de dólares para fabricação. Mas Huang teve uma grande oportunidade há três anos, quando a empresa Crossbar o contatou. A empresa queria criar um chip open source e seguro, mas não sabia como. Huang concordou em ajudar com uma condição: que eles o deixassem 'pegar carona' na leva de fabricação, colocando sua CPU no mesmo wafer, compartilhando os custos.

'Eles veem isso como: se me colocarem no chip, têm dois produtos pelo preço de um', diz Huang. Esse tipo de 'carona' não é incomum, acrescenta, embora a indústria não goste de discutir publicamente.

O resultado é um chip Crossbar que inclui tanto o microprocessador da Crossbar quanto o de Huang. O Baochip é essencialmente o mesmo chip, mas com o microprocessador Crossbar desabilitado, já que Huang não tem os direitos de distribuí-lo.

A versão Crossbar usa um núcleo ARM proprietário, enquanto a versão de Huang usa um núcleo RISC-V, cuja implementação é open source. O conjunto de instruções RISC-V também é aberto e documentado publicamente. As duas versões podem usar a mesma infraestrutura e periféricos, ativando diferentes núcleos de CPU.

Há alguns elementos de código fechado no chip de Huang. Alguns elementos de design físico e fabricação de baixo nível, incluindo os associados ao processo de fabricação de 22 nanômetros da TSMC, são proprietários. 'Mas, se você olhar o espectro de quão aberto você pode chegar, isso está muito, muito além de qualquer outro chip voltado para segurança', diz Huang.

## Origens do badge

Badges anteriores da Defcon usavam chips comerciais prontos, não silício customizado open source. A ideia de usar o Baochip surgiu de uma reunião no ano passado, quando Huang conversou com o fundador da Defcon, Jeff Moss, sobre seu progresso no chip. Huang disse que planejava lançá-lo neste verão através de sua empresa, Baochip.

Moss percebeu que o conceito combinava perfeitamente com o tema da conferência deste ano: 'agência', que a Defcon define como as tecnologias que usamos e as escolhas que fazemos para aumentar a autodeterminação. Ele e Huang viram uma grande oportunidade para impulsionar a adoção do chip. Até agora, o Baochip foi distribuído apenas em uma pequena versão de desenvolvimento; os 27.000 badges da Defcon representam sua primeira grande distribuição.

Moss tinha um requisito: os badges deveriam ter vida além da conferência, não virar lixo. Ele sempre se frustrou com o design e as limitações dos tokens de segurança e carteiras criptográficas, que podem ser quebrados no nível de hardware. Ele achou que o chip de Huang poderia ser uma alternativa mais segura.

'Sempre sonhei com a ideia de você colocar seus segredos no hardware e, se um atacante invadir, ele não consegue pegar seus segredos', diz Moss ao WIRED.

O módulo destacável do badge pode servir como token de segurança FIDO. Seu software suporta senhas de uso único baseadas em tempo e gerenciamento de senhas. Huang diz que é 'provavelmente o primeiro token de segurança open source do mundo que você pode inspecionar completamente até o bootloader e os transistores'.

O módulo removível também inclui uma câmera para escanear QR codes e registrar em sistemas de autenticação. Mas, seguindo as práticas de privacidade da Defcon e a proibição de fotografia sorrateira, a câmera é de resolução muito baixa e míope, e o chip, por padrão, usa apenas dados em preto e branco, sem suporte a armazenamento de fotos.

'É ótima para escanear QR codes e praticamente ruim para todo o resto', diz Huang.

O badge não abandona a vida da conferência. Huang incluiu recursos para incentivar a interação: LEDs que piscam em diferentes paletas e padrões, dependendo do tipo de badge (geral, palestrantes, goons e os badges pretos Uber para vencedores e VIPs). Cada tipo começa com uma cor e padrão específicos, mas os usuários podem adicionar cores e criar padrões mais complexos quando os badges se comunicam entre si.

## Quão seguro é?

O chip roda um sistema operacional escrito em Rust e inclui inicialização segura, um gerador de números aleatórios verdadeiro e recursos de hardware para endurecê-lo contra ataques. Huang acredita que será particularmente resistente a ataques remotos não físicos.

O chip também usa RAM resistiva (RRAM), um tipo de memória não volátil que Huang diz ser mais difícil de extrair fisicamente do que a memória flash convencional. Com flash, 'se você desmontar até as células flash, você pode simplesmente ver o estado', explica.
