---
layout: ../../../layouts/PostLayout.astro
title: 'DeepSeek V4 Flash roda em um único AMD MI300X com 168 tok/s'
date: 2026-08-08
category: 'Hardware e Infra'
lang: "pt-br"
excerpt: "Repositório mostra como rodar DeepSeek V4 Flash em um AMD MI300X, com 168 tok/s e 256K de contexto, sem quantização."
source: 'https://github.com/ryanzhou/deepseek-v4-flash-mi300x'
heroImage: "/hero/deepseek-v4-flash-roda-em-um-unico-amd-mi300x-com-168-tok-s.jpg"
hero_credit: "Photo by tweasel on Pixabay"
hero_legenda: "processor, pc, computers, amd, technology, amd, amd, amd, amd, amd"
---
Um repositório recém-publicado no GitHub detalha a configuração para rodar o DeepSeek V4 Flash (checkpoint 0731) em uma única GPU AMD MI300X em produção. O autor, Ryan Zhou, compartilha patches, ajustes e tabelas de tuning que permitem ao modelo de 304 bilhões de parâmetros operar sem quantização adicional ou offload de pesos.

Segundo o github.com, o stack usa vLLM ROCm nightly 0.26.1rc1.dev229+g124154a88.rocm723 e AITER 0.1.19. Os resultados impressionam: 168,6 tok/s em decode single-stream, prefill de aproximadamente 7,9–8,5K tok/s, e 542 tok/s agregados com 8 streams concorrentes. Em um burst de 64 streams, o sistema alcança 830 tok/s sem OOM ou erros de engine.

O contexto validado é de 256K tokens, embora a arquitetura suporte até 1M. Os pesos ocupam 156,67 GiB na HBM, sem quantização adicional. O MI300X tem 192 GB de HBM3 e 5,3 TB/s de largura de banda, cerca de 2,4 vezes a capacidade de HBM de um H100 SXM5, a um custo de lista aproximadamente metade, conforme análise da Doubleword citada no repositório.

A receita oficial do vLLM é voltada para NVIDIA e GPUs AMD mais novas, como MI325X e MI355X. Para rodar no MI300X, foram necessários ajustes específicos: correções para o formato FP8 (variante fnuz da AMD/Graphcore, que difere do padrão OCP), roteamento MoE em alta concorrência, verificação especulativa causal e sincronização de KV em CPU. O repositório coleta essas correções e fixa as versões usadas em produção.

O trabalho de Fergus Finn e o repositório Doubleword foram fundamentais para identificar a incompatibilidade FP8, a falta de fast paths do AITER em gfx942, riscos de HIP-graph no decode MLA esparso e bugs no roteamento MoE. O autor então criou overlays de correção, uma configuração de servição validada com drafting probabilístico DSpark, e tabelas de tuning AITER para as formas recorrentes em gfx942.

A estratégia de KV é híbrida: 20 GB de cache GPU fp8_ds_mla + 96 GiB de offload nativo em CPU, com correção de fencing no load path. O stack usa Docker Compose com imagem digest-pinned, overlays montados read-only e diffs contra a base upstream. O autor fornece SHA256SUMS para verificar a integridade dos artefatos antes do primeiro start.

A inicialização saudável leva cerca de 5 minutos e deve mostrar mensagens como 'Model loading took 156.67 GiB', 'GPU KV cache size: 1,927,444 tokens' e 'Capturing CUDA graphs (FULL)'. Após a captura, o high-water mark de VRAM é ~204,5 GB de 205,8 GB; se sobrar pouca memória, o servidor pode falhar no primeiro request.

Os overlays incluem correções para o kernel Triton MoE (MXFP4), layout de interleave para fused-SiLU, geometria OGS para gfx942, cache writer com FNUZ FP8 e preshuffle, offsets de 64 bits em kernels paged-MQA, e prefill determinístico com BLOCK_H=64. Cada overlay é um arquivo completo montado sobre o original, com diff registrado.

O repositório é um exemplo claro de como a comunidade open source está adaptando modelos de ponta para hardware alternativo, reduzindo a dependência de GPUs NVIDIA. Com uma única MI300X, é possível servir um modelo de 304B com desempenho competitivo, democratizando o acesso à IA de alto nível.

Para mais detalhes, consulte o repositório original no GitHub.
