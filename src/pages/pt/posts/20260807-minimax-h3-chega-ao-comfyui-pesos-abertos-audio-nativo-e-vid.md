---
layout: ../../../layouts/PostLayout.astro
title: 'MiniMax H3 chega ao ComfyUI: pesos abertos, áudio nativo e vídeo 2K'
date: 2026-08-07
category: 'Modelos e Algoritmos'
lang: "pt-br"
excerpt: "MiniMax H3, modelo de vídeo open weights, já roda no ComfyUI com áudio estéreo e saída 2K."
source: 'https://blog.comfy.org/p/minimax-h3-day-0-support-in-comfyui'
heroImage: "/hero/minimax-h3-chega-ao-comfyui-pesos-abertos-audio-nativo-e-vid.jpg"
hero_credit: "Photo by Google DeepMind on Pexels"
hero_legenda: "MiniMax H3 chega ao ComfyUI: pesos abertos, áudio nativo e vídeo 2K"
---
O ComfyUI anunciou suporte nativo ao MiniMax H3 no mesmo dia do lançamento. O modelo chega com pesos abertos e promete rodar localmente até em uma GPU 3060.

Segundo o blog.comfy.org, o H3 é a terceira geração de modelos de vídeo da MiniMax, depois do Hailuo 01 e Hailuo 02. É também o primeiro da empresa liberado com pesos abertos.

O modelo aceita texto, imagem, vídeo ou áudio como entrada e gera vídeo com som estéreo real, em até 2K e com clipes de até 15 segundos. O áudio é gerado junto com o vídeo, na mesma passada, não como pós-processamento.

## Capacidades principais

O H3 suporta texto-para-vídeo, imagem-para-vídeo, controle de primeiro e último frame, e referência-para-vídeo. Nesse último caso, é possível carregar imagens, vídeo ou áudio de referência para manter um sujeito, um movimento ou uma voz ao longo do clipe.

A compreensão multimodal é o destaque. O modelo recebe imagens, áudio e vídeo juntos e os resolve contra um prompt que explica como eles se relacionam. Isso colapsa cinco tarefas separadas em um único modelo.

O áudio nativo estéreo é tratado como propriedade do modelo, não como etapa posterior. Já a transferência de movimento permite que um vídeo de referência forneça o movimento — como um movimento de câmera ou uma performance — enquanto o sujeito e o estilo vêm de outra fonte.

## Exemplos de uso

O blog traz exemplos de saída. Um deles mostra um garoto super-herói em estilo de história em quadrinhos, com texto gráfico sincronizado com a voz. Outro é um filme publicitário de um mouse gamer transparente, com iluminação duotônica e macro detalhado.

Há também um editorial de moda com uma máscara de kintsugi se reconstruindo, um dragão dourado e uma pose final de pôster. E um comercial de refrigerante com lente olho de peixe, tipografia gigante e transições de íris.

Todos os exemplos usam múltiplas referências e áudio, mostrando a capacidade do modelo de integrar modalidades diferentes em uma única saída coerente.

## Disponibilidade

O MiniMax H3 já está disponível no ComfyUI desde o lançamento. A otimização permite rodar localmente em hardware acessível, como uma 3060, o que reforça o apelo do modelo para quem quer fugir de APIs fechadas.

Com pesos abertos e suporte nativo em uma ferramenta popular de código aberto, o H3 se junta a outros modelos que democratizam a geração de vídeo com qualidade profissional.
