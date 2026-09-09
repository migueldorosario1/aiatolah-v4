---
layout: ../../../layouts/PostLayout.astro
title: 'Binários Musl do RipGrep Falham em Buscas Grandes'
date: 2026-08-04
category: 'Segurança e Ética'
lang: "pt-br"
excerpt: "Incidentes de segfault relatados durante buscas extensivas com RipGrep 15.2.0 em x86_64-unknown-linux-musl."
source: 'https://github.com/BurntSushi/ripgrep/issues/3494'
heroImage: "/hero/ripgrep-musl-binaries-crash-on-large-searches.jpg"
---
Um problema recente foi relatado no GitHub sobre a ferramenta RipGrep, especificamente seus binários musl, que ocasionalmente sofrem falhas de segmentação (segfaults) durante buscas em larga escala. De acordo com o relato do usuário no [repositório GitHub do RipGrep](https://github.com/BurntSushi/ripgrep/issues/3494), a versão do ripgrep em questão é a 15.2.0, compilada com recursos como pcre2 e suporte a SIMD para SSE2, SSSE3 e AVX2.

O usuário encontrou esse bug inicialmente no binário rg incluído no OpenAI Codex, que é idêntico ao encontrado na versão oficial do RipGrep. A falha ocorre ao pesquisar em árvores de arquivos muito grandes com alto nível de concorrência no OpenSUSE Tumbleweed Linux x86_64. O erro é rastreado até uma falha de asserção de integridade relacionada aos metadados do heap dentro do mallocng do MUSL durante uma chamada calloc de opendir.

Para reproduzir o comportamento, foi fornecido um script Python chamado generate_repro_tree.py. Este script gera uma árvore grande preenchida com arquivos aleatórios, imitando as estatísticas do repositório onde o bug foi inicialmente descoberto. A árvore criada contém aproximadamente 20GiB de dados distribuídos em 1,8 milhão de arquivos. O usuário então sugere executar o comando rg em um loop, procurando por uma string que não existe na árvore, o que dispara o erro SIGSEGV em cerca de um minuto em um sistema com 24 núcleos e RAM suficiente.

A falha resulta em um coredump com um backtrace detalhado que implica várias chamadas de sistema e funções da biblioteca padrão do Rust, apontando em última análise para problemas dentro da chamada de sistema opendir e o subsequente tratamento pelo código do RipGrep.

O usuário espera que o RipGrep opere sem tais falhas de segmentação, especialmente durante buscas em larga escala. Este problema, se consistentemente reproduzível, pode representar problemas significativos para usuários que dependem do RipGrep para buscas extensivas no sistema de arquivos, potencialmente levando à perda de dados ou interrupções no fluxo de trabalho. A comunidade e os desenvolvedores do RipGrep provavelmente abordarão este problema em futuras versões ou correções para garantir a estabilidade e confiabilidade da ferramenta.