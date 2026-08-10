---
layout: ../../../layouts/PostLayout.astro
title: 'Shieldstral: moderador multimodal de 3B que supera modelos 7x maiores'
date: 2026-08-10
category: 'Segurança e Ética'
lang: "pt-br"
excerpt: "Mistral lança Shieldstral, classificador de segurança multimodal de 3B sob Apache 2.0, que supera modelos até 7x maiores."
source: 'https://mistral.ai/news/shieldstral/'
heroImage: "/hero/shieldstral-moderador-multimodal-de-3b-que-supera-modelos-7x.jpg"
hero_credit: "Photo by Harpal Singh on Unsplash"
hero_legenda: "Shieldstral: moderador multimodal de 3B que supera modelos 7x maiores"
---
A Mistral AI apresentou o Shieldstral, um classificador de segurança multimodal de 3 bilhões de parâmetros com pesos abertos. O modelo promete superar guarda-corpos até sete vezes maiores em moderação de texto e estabelece um novo estado da arte em moderação multimodal.

A abordagem foge do padrão: em vez de taxonomias fixas de dano, o Shieldstral trata a moderação como uma tarefa de pergunta e resposta adaptável a políticas. O usuário escreve a política em linguagem natural no momento da inferência, e o modelo devolve uma pontuação de segurança calibrada.

Segundo a Mistral, o modelo aceita políticas em linguagem simples na inferência, unificando a avaliação de segurança de texto e imagem sem necessidade de retreinamento. Isso permite que um único checkpoint se adapte a novas políticas em tempo de implantação.

O Shieldstral foi lançado sob licença Apache 2.0, como parte da recém-formada Open Secure AI Alliance, da qual a Mistral é membro inaugural ao lado da NVIDIA e outras organizações. O modelo roda eficientemente em uma única GPU NVIDIA de 16GB.

A arquitetura do Shieldstral é inovadora: cada requisição tem três partes — um contexto de avaliação, uma pergunta sim/não e o conteúdo a ser julgado (texto, imagem ou par prompt-resposta). Na inferência, o modelo lê apenas os logits de 'sim' e 'não' e os normaliza em uma pontuação contínua de segurança.

Essa formulação unifica classificação de prompt, moderação de resposta, detecção de recusa e toxicidade em um único problema. As políticas vivem inteiramente no prompt, permitindo que um único checkpoint se adapte a novas políticas sem retreinar.

Nos benchmarks, o Shieldstral iguala ou supera modelos abertos de guarda até sete vezes maiores em segurança de texto, detecção de recusa, adaptabilidade a políticas e benchmarks multimodais. Todos os exemplos de avaliação foram mantidos fora do treinamento.

A construção do modelo envolveu quatro desafios principais. Primeiro, unificar dados heterogêneos: datasets públicos de segurança discordam em taxonomias e rótulos, então cada dataset foi convertido para o mesmo formato instrução-pergunta-documento, com variação de redação para generalizar.

Segundo, ensinar discriminação, não memorização: em vez de treinar com rótulos fixos, foram criados pares contrastivos de textos seguros reescritos para violar uma política específica, mas não outra. Isso treina o modelo a distinguir qual política é violada, habilidade que transfere para políticas novas.

Terceiro, ancorar segurança em imagens: como imagens inseguras não podem ser sintetizadas por LLM, dados visuais de segurança são escassos. A equipe complementou com datasets de imagens gerais como negativos de alta qualidade e filtrou pares imagem-pergunta com um reranker visão-linguagem.

Quarto, combinar checkpoints complementares: o modelo foi afinado com LoRA e mesclado via SLERP, combinando um checkpoint calibrado em dados públicos, um com discriminação fina de políticas e o modelo base instruct. A mesclagem recupera calibração e adaptabilidade em um único modelo.

O Shieldstral foi construído de ponta a ponta na plataforma Forge, da própria Mistral, que gerenciou infraestrutura, sharding de dados e modelos, métricas e logging. Isso permitiu que a equipe focasse nos dados, que determinam a qualidade do modelo de segurança.

A Mistral vê o Shieldstral como um passo em direção a uma moderação que se adapta ao contexto, em vez de forçar cada produto a uma taxonomia congelada. Os próximos passos incluem melhorar cobertura multilíngue, robustez para documentos longos e segurança multimodal mais ampla.

O modelo está disponível para download, e a empresa convida a comunidade a construir em cima dele. A Mistral também está contratando para ajudar a melhorar a IA.

Com o Shieldstral, a Mistral reforça a tendência de modelos abertos e eficientes, mostrando que é possível obter segurança de alto nível com um modelo compacto e adaptável, sem depender de gigantes fechados.
