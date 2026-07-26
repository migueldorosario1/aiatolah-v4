---
layout: ../../../layouts/PostLayout.astro
title: 'Wasmtime 47 Releases Support for GC and Exceptions in WebAssembly'
date: 2026-07-26
category: 'Development'
lang: "en"
excerpt: "Wasmtime version 47 brings GC and exceptions by default, expanding the reach of WebAssembly to more programming languages."
source: 'https://bytecodealliance.org/articles/wasmtime-gc'
heroImage: "/hero/wasmtime-47-libera-suporte-a-gc-e-excecoes-na-webassembly.jpg"
hero_credit: "Imagem conceitual gerada por IA (Ideogram)"
---
## Wasmtime 47 Amplia a WebAssembly com Suporte a GC e Exceções

De acordo com bytecodealliance.org, a versão 47 do Wasmtime, runtime para WebAssembly, agora vem com suporte a Garbage Collection (GC) e exceções ativados por padrão. Essa atualização é um marco na evolução da WebAssembly, permitindo que mais linguagens se beneficiem dessa tecnologia.

### O Que é Wasmtime?

Wasmtime é um runtime para WebAssembly conhecido por sua velocidade, segurança e portabilidade. Desenvolvido para ser autônomo, leve e fácil de integrar, o Wasmtime é mantido por uma equipe comprometida com os padrões abertos, participando ativamente na padronização do Wasm.

### Wasm GCProposição: Apoio a Linguagens de Alto Nível

Inicialmente, as versões mais antigas da WebAssembly não ofereciam suporte eficiente a linguagens de alto nível com modelo de dados objetos e referências. Isso levou ao acúmulo de coletores de lixo dentro dos binários .wasm, resultando em arquivos maiores e menos eficientes. A proposta Wasm GC resolve esses problemas, permitindo que os programas Wasm definam seus próprios tipos de struct e array, bem como relações de subtipo. Com isso, os programas não precisam lidar com a gestão de vidas das instâncias desses tipos ou desalocá-las manualmente; a responsabilidade fica com o runtime.

Isso abre caminho para que mais linguagens possam usar a WebAssembly de forma mais eficiente e simples. Um exemplo disso é a definição de um tipo de nó para uma árvore binária no Wasm:

```
(rec
 (type $node (struct
  (field $key (mut f64))
  (field $left (mut (ref null $node)))
  (field $right (mut (ref null $node)))
  (field $value (mut (ref null $payload)))
 ))
)
```

A criação de novas instâncias pode ser feita com struct.new $node e o acesso aos campos via struct.get $node $key e struct.set $node $left.

### Proposição de Exceções na Wasm

A proposta de exceções na Wasm tem objetivos semelhantes aos da GC para linguagens que usam exceções, visando um suporte eficiente a exceções na WebAssembly. Sem essa proposta, as toolchains teriam que implementar convenções de chamada personalizadas que retornassem não apenas resultados da função, mas também se a função retornou normalmente ou lançou uma exceção. Com a proposta de exceções, isso se resolve com o uso de construções throw e try/catch, resultando em execução mais rápida e arquivos .wasm menores.

### Implementação do GC no Wasmtime

O Wasmtime utiliza um coletor de lixo do estilo Cheney, que copia semi-espaço por meio do tempo. O heap do GC é dividido em duas metades: o 'active' semi-space, onde novos objetos são alocados, e o 'idle' semi-space. Durante a coleta, os objetos ativos são copiados do espaço ocioso para o novo espaço ativo, e todas as referências GC raíz (como referências ativas dentro dos quadros de pilha Wasm) são atualizadas para os novos locais.

A implementação reutiliza memórias lineares de WebAssembly para implementar e sandboxear o heap do GC. Uma referência a um objeto GC não é um ponteiro nativo, mas um índice de 32 bits no heap de memória linear subjacente do GC. Isso traz benefícios em termos de segurança, velocidade e portabilidade.

Para reforçar a confiança na correção do coletor, a equipe estendeu a infraestrutura de fuzzing para testar o GC do Wasm, incluindo ferramentas de geração de programas Wasm que usam GC, bem como ferramentas para detectar corrupção de heap devido a erros no coletor ou em otimizações do compilador.

### Desempenho e Próximos Passos

O foco inicial foi a correção do coletor, com menos atenção ao desempenho, que ainda não se beneficiou de décadas de engenharia de desempenho como em outros coletores. OWasmtime foi projetado para criar muitos pequenos e descartáveis instâncias Wasm, processando tarefas pequenas antes de serem descartadas. A equipe está trabalhando na extensão das otimizações de análise de alias do compilador com informações de tipo GC.

O próximo marco é o protótipo de integração de GC com o modelo de componente, o que promoverá linguagens com coleta de lixo aos cidadãos de primeira classe no ecossistema de componentes.

### Conclusão

A equipe do Wasmtime está animada em ter atingido essa etapa importante. Convidam os usuários a testar o suporte a GC e exceções no Wasmtime e compartilhar suas experiências.
