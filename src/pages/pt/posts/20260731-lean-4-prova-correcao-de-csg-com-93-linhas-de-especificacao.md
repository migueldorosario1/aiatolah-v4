---
layout: ../../../layouts/PostLayout.astro
title: 'Lean 4 prova correção de CSG com 93 linhas de especificação, ignorando código IA'
date: 2026-07-31
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Projeto verified-3d-mesh-intersection usa Lean 4 para verificar interseção de malhas 3D. Especificação de 93 linhas dispensa revisão de 1000+ linhas de cód"
source: 'https://github.com/schildep/verified-3d-mesh-intersection'
heroImage: "/hero/lean-4-prova-correcao-de-csg-com-93-linhas-de-especificacao.jpg"
---
Um projeto no GitHub chamado 'verified-3d-mesh-intersection' apresenta a primeira implementação formalmente verificada de uma operação de geometria sólida construtiva (CSG) 3D: interseção de malhas. O código é escrito em Lean 4 e verificado contra uma especificação concisa que define exatamente a superfície da malha resultante e garante condições de boa formação na triangulação.

Segundo o repositório, um revisor humano precisa ler apenas 93 linhas de especificação formal e executar o verificador Lean para certificar a correção do núcleo, ignorando as mais de 1000 linhas de implementação escritas por IA. Para provar a correção, a IA escreveu autonomamente mais de 60.000 linhas de provas em Lean, que também nunca precisam ser inspecionadas por humanos.

O verificador Lean garante conformidade com a especificação em tempo de compilação, com confiança zero depositada em qualquer LLM. Isso permite tratar a implementação e as provas como uma caixa-preta. O desenvolvedor guiou o agente através de marcos descritos no repositório para chegar ao resultado apresentado.

Há uma demonstração web que roda o núcleo verificado no navegador, onde é possível intersectar malhas de exemplo ou importar arquivos STL. O código Lean compilado executa localmente; nenhum dado é enviado a servidores. A interface e o código auxiliar não são verificados.

A implementação é muito mais lenta que as soluções estado-da-arte: leva 24 segundos para calcular a interseção exata de dois coelhos Stanford com 70 mil triângulos cada. O projeto prioriza minimizar o esforço de revisão humana sobre a performance. A diferença de desempenho não é uma limitação fundamental do software formalmente verificado, que pode em princípio ser tão rápido quanto o convencional.

As malhas de saída garantem as propriedades descritas na especificação, mas podem ser subótimas em outros critérios não formalizados, como produzir uma malha mais fina que o necessário.

Uma malha triangular é um conjunto de triângulos, geralmente esperado formar uma superfície fechada que não se penetra. Humanos associam malhas a um 'sólido' — o volume de pontos no interior. O conceito de sólidos permite entender o resultado de algoritmos como interseção de malhas, mesmo quando a implementação é complexa e trata muitos casos especiais.

De um algoritmo de interseção de malhas, espera-se que a interseção dos sólidos das malhas de entrada bem-formadas seja o sólido da malha de saída, e que a saída seja bem-formada. A especificação formaliza isso como: solid(meshIntersect M₁ M₂) = solid M₁ ∩ solid M₂.

Linguagens convencionais não podem expressar 'sólidos' explicitamente, pois são conjuntos infinitos. Em Lean isso é possível, permitindo provar que uma função satisfaz uma condição para todas as malhas de entrada possíveis.

A boa-formação das malhas captura condições comuns em ferramentas de processamento: superfície estanque, sólido com multiplicidade um, orientação coerente, sem triângulos degenerados, sem auto-interseções — com a relaxação de que a superfície pode tocar a si mesma em arestas e vértices. A estrita 2-variedade não é exigida.

Para certificar a correção, basta ler quatro arquivos que totalizam 93 linhas de código (excluindo comentários) e executar o verificador Lean. A implementação de mais de 1000 linhas em quatro arquivos pode ser ignorada, assim como as 60.000 linhas de provas escritas por IA.

Essa compressão da implementação para a especificação é possível porque muitos detalhes — como casos geométricos especiais e estruturas de dados de aceleração — são completamente desacoplados da especificação. O verificador Lean garante que todos os casos especiais são tratados conforme a especificação sem que ela os enumere.

Se em um commit futuro a performance ou qualidade da malha for melhorada, a especificação revisada permanece a mesma, garantindo correção sem re-revisão.

O desenvolvedor controlou apenas uma pequena especificação, deixando provas e implementação como caixa-preta para agentes. Começou com uma especificação que julgou fácil de implementar e provar, e depois aumentou os requisitos. Em cada etapa, o agente implementava e provava formalmente a especificação. Esse refinamento gradual permitiu delegar grandes blocos de trabalho aos agentes, recebendo feedback sobre a satisfazibilidade da especificação.

O projeto começou com a formalização de um artigo que fornece uma base matemática para descrever sólidos baseada em cadeias simpliciais (Feito e Rivero, 1998). Depois, pediu-se uma implementação com prova de correção, que já satisfazia uma especificação similar ao objetivo final.
