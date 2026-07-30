---
layout: ../../../layouts/PostLayout.astro
title: 'Neutrino-1 8B: modelo ternário de 3,88 GB roda em GPU e laptop'
date: 2026-07-30
category: 'Modelos e Algoritmos'
lang: "pt-br"
excerpt: "Fermion Research lança Neutrino-1 8B com pesos ternários que cabem em 3,88 GB, servindo GPU, Mac e CPU do mesmo artefato."
source: 'https://www.fermionresearch.com/models/neutrino-8b/'
heroImage: "/hero/neutrino-1-8b-modelo-ternario-de-3-88-gb-roda-em-gpu-e-lapto.jpg"
---
A Fermion Research anunciou o Neutrino-1 8B, um modelo de linguagem de 8,19 bilhões de parâmetros que armazena todos os seus 252 lineares do transformer em um formato de peso ternário proprietário, oito vezes menor que fp16. O resultado é um único arquivo de 3,88 GB que roda em GPUs de datacenter, Apple Silicon e CPUs desktop sem conversão.

Segundo a Fermion Research, o formato ternário mantém os pesos compactados em repouso e os decodifica dentro dos kernels de matriz, de modo que nada no caminho de decodificação é armazenado como fp16 ou fp32. Isso muda a economia de inferência: como a decodificação single-stream é limitada por quantos bytes são movidos por token, um conjunto de trabalho de 3,88 GB decodifica em taxas que um artefato fp16 de 16 GB não alcança no mesmo sistema de memória.

O modelo inteiro cabe ao lado de seu cache KV em uma GPU de 8 GB ou em um laptop de 16 GB. O mesmo contêiner atende a todas as plataformas sem conversão.

**Arquitetura**

Neutrino-1 8B é um transformer denso decoder-only com atenção grouped-query, que mantém o cache KV em um quarto da largura do query — 144 KiB por token em fp16. Uma sessão de 4 mil tokens consome 0,60 GB de cache ao lado dos 3,88 GB de pesos.

Apenas os lineares do transformer carregam o formato codificado. Os dois tensores de embedding permanecem int8 porque suas linhas são lidas um token por vez, e os pesos de normalização são pequenos demais para valer a codificação. Um terço do arquivo é vocabulário.

Dos 6,95 bilhões de pesos codificados, 62,63% estão em zero e o restante se divide em 18,68% positivos e 18,69% negativos — balanceados a um centésimo de ponto sem nenhuma restrição explícita. O equilíbrio não é uniforme em profundidade: as projeções feed-forward gate e down atingem 70 a 72% de zeros nas camadas 1 a 3, enquanto todas as quatro projeções de atenção mantêm cerca de 62% em todas as profundidades.

**Formato único, três portas**

O download é um transporte codificado do contêiner, não uma cópia compactada de um modelo fp16: ele se expande bit-exatamente para o arquivo que todo runtime executa, e esse único arquivo roda tanto em GPU de datacenter quanto em laptop.

A Fermion Research fornece três formas de execução:
- **Comando único**: `pip install fermion-research` baixa o contêiner e o binário nativo da plataforma. Runtimes CPU para macOS arm64 e Linux x86-64, com um caminho de referência torch bit-exato.
- **Porta llama.cpp**: o contêiner convertido para GGUF com os tipos de peso da empresa, carregado por um fork público do llama.cpp. Suporte completo a CUDA offload.
- **Porta Apple Silicon**: runtime Python nativo com kernels Metal personalizados. O contêiner é mapeado em memória e os planos compactados são decodificados dentro dos kernels GEMV.

**Desempenho**

A Fermion Research divulgou taxas de decodificação single-stream com o mesmo artefato em diferentes superfícies:
- 24,9 tok/s em um Apple M5, apenas CPU, 9 threads
- 30,7 tok/s em uma NVIDIA L4, 4,68 GiB com contexto de 4 mil tokens
- 33,7 tok/s em um MacBook base M5

**Decodificação especulativa**

O Neutrino-1 0.6B atua como modelo de rascunho: gera uma sequência de tokens, o 8B avalia a sequência inteira em uma única passagem direta, e o prefixo concordante é mantido. Um token de rascunho só é aceito quando igual ao argmax do 8B, garantindo que a saída seja idêntica à gananciosa pura. Em 27.648 tokens consecutivos testados, houve zero divergências.

O speedup depende da classe do prompt. Em prompts de contagem, o 8B aceita o rascunho completo de seis tokens a cada passagem, emitindo cerca de sete tokens por forward do 8B. Em prompts factuais, a aceitação se mantém em 96,5%. Um controlador dinâmico ajusta o tamanho do rascunho para cada classe.

Ambos os contêineres têm o mesmo formato e rodam nos mesmos binários, então o rascunho carrega no mesmo processo do verificador sem implantação separada. Seus 328 MB ficam ao lado dos 3,88 GB do 8B, e 4 mil tokens de contexto compartilhado custam exatamente um gibibyte de cache para o par.

A combinação não é exclusiva de datacenter. Em um Apple M5 de 16 GB, ambos os modelos carregam em um único processo MLX sob um limite de 6 GiB e atingem pico de 4,3 GiB juntos, com o rascunho ocupando 0,53 GiB. O portão de exatidão retorna 6 de 6 prompts token-idênticos com e sem rascunho, e em prompts factuais a taxa com rascunho é de 25,71 tok/s contra 22,00 tok/s sem rascunho, com aceitação de 0,744.

**Disponibilidade e licença**

O Neutrino-1 8B é distribuído em um único repositório público contendo pesos, binários nativos, pacote GGUF e pacote MLX, todos versionados juntos. Não há lista de espera nem preview restrito.

Os pesos são abertos sob a Licença Apache 2.0, permitindo uso comercial, modificação, fine-tuning e redistribuição sem necessidade de solicitação ou formulário de aceitação. O modelo é derivado do Qwen3-8B, também Apache-2.0. O pacote pip é Apache-2.0; o fork do llama.cpp é MIT, seguindo o upstream.

Para executar, basta instalar com `pip install fermion-research` e usar `fermion chat`. O servidor compatível com OpenAI está disponível em `fermion serve`.
