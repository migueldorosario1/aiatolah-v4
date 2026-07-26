---
layout: ../../../layouts/PostLayout.astro
title: '98.css: biblioteca CSS recria interfaces do Windows 98 na web'
date: 2026-07-26
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "98.css é uma biblioteca CSS que recria fielmente a aparência do Windows 98. Sem JavaScript, compatível com qualquer framework e focada em acessibilidade."
source: 'https://jdan.github.io/98.css/#status-bar'
heroImage: "/hero/98-css-biblioteca-css-recria-interfaces-do-windows-98-na-web.jpg"
---
O designer Jordan Scales, sob o pseudônimo jdan.github.io, lançou a 98.css, uma biblioteca CSS que permite construir interfaces fiéis ao Windows 98. O projeto está disponível no GitHub e pode ser instalado via npm ou importado diretamente do unpkg.

A biblioteca não contém JavaScript — apenas estiliza o HTML com CSS. Isso a torna compatível com qualquer framework frontend, como React ou vanilla JavaScript. Segundo jdan.github.io, a acessibilidade é um objetivo primário, e o uso de HTML semântico é encorajado.

Componentes disponíveis incluem botões, checkboxes, radio buttons, group boxes, campos de texto e sliders. Cada um segue as especificações originais do Windows 98: botões padrão medem 75px de largura por 23px de altura, com bordas elevadas que se tornam rebaixadas ao clicar. Botões desabilitados mantêm a borda elevada mas com aparência desbotada.

Checkboxes e radio buttons exigem labels associados via atributo 'for' para garantir usabilidade com tecnologias assistivas. Group boxes são implementados com a tag fieldset, e podem conter uma legenda via legend. Campos de texto suportam linhas únicas (input type='text') ou múltiplas (textarea), e podem ser desabilitados com valores predefinidos.

Sliders são renderizados com uma barra que define o intervalo de ajuste e um indicador da posição atual. A biblioteca também oferece classes como 'field-row' e 'field-row-stacked' para organizar grupos de inputs.

O projeto é open source e visa facilitar a criação de interfaces retrô sem sacrificar a acessibilidade. A documentação completa está disponível no site oficial, com exemplos de código para cada componente.
