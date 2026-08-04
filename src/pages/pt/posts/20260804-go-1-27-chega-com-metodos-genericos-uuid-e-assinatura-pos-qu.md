---
layout: ../../../layouts/PostLayout.astro
title: 'Go 1.27 chega com métodos genéricos, UUID e assinatura pós-quântica'
date: 2026-08-04
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Go 1.27 traz métodos genéricos, UUID, ML-DSA, otimizações de alocação e perfil de goroutines vazadas."
source: 'https://victoriametrics.com/blog/go-1-27/index.html'
heroImage: "/hero/go-1-27-chega-com-metodos-genericos-uuid-e-assinatura-pos-qu.jpg"
---
A versão 1.27 do Go está chegando, e o time da VictoriaMetrics preparou um tour interativo com exemplos executáveis para mostrar o que muda. O material, publicado no blog da empresa, se baseia nas notas oficiais de lançamento e no código-fonte da linguagem, licenciado sob BSD-3-Clause.

O destaque da release é a possibilidade de métodos declararem seus próprios parâmetros de tipo, independentes do receptor. Antes, apenas funções de nível superior podiam ser genéricas, o que forçava operações genéricas sobre um tipo a viverem como funções soltas.

Agora, um método como `Map` pode transformar uma `Box[int]` em uma `Box[string]` diretamente. O exemplo do tour mostra uma caixa com valor 21 sendo dobrada e depois convertida em string, resultando em `value=42`.

Há uma restrição importante: interfaces ainda não podem declarar métodos com parâmetros de tipo, e um método genérico não pode satisfazer uma interface. O compilador bloqueia essa tentativa com o erro 'interface method must have no type parameters'.

Outra novidade: em literais de struct, a chave pode ser qualquer seletor de campo válido, incluindo campos promovidos de structs embutidos. Antes, para definir um `User` com `Base` embutida, era preciso escrever `User{Base: Base{ID: 7}, Name: 'Mittens'}`. Agora, `User{ID: 7, Name: 'Mittens'}` funciona.

A inferência de tipos de função foi generalizada para todos os contextos onde uma função genérica é usada onde um tipo de função correspondente é esperado. Isso inclui conversões e literais compostos, não apenas atribuições simples. No exemplo, duas funções genéricas `first` e `last` são colocadas em um slice de `func([]int) int` sem instanciação manual.

O compilador agora gera chamadas para rotinas de alocação de memória especializadas por tamanho, reduzindo o custo de algumas alocações pequenas (menos de 80 bytes) em até 30%. O ganho geral em programas com muitas alocações deve ser de cerca de 1%, ao custo de aproximadamente 60 KB extras no binário. Para desativar, use `GOEXPERIMENT=nosizespecializedmalloc` (remoção prevista para Go 1.28).

Para módulos com `go.mod` declarando Go 1.27 ou superior, os tracebacks agora incluem rótulos de goroutine do runtime/pprof na linha de cabeçalho. Isso ajuda a distinguir goroutines idênticas em dumps de crash, traces SIGQUIT e saída de `runtime.Stack`. O recurso pode ser desligado com `GODEBUG=tracebacklabels=0`.

O detector de vazamento de goroutines, que era experimental no Go 1.26, agora é um perfil regular: `runtime/pprof` expõe o perfil `goroutineleak`, que executa um ciclo de GC para encontrar goroutines permanentemente bloqueadas. O exemplo clássico é uma goroutine que envia para um canal que só ela conhece, bloqueando para sempre.

A novidade mais aguardada é o pacote `crypto/mldsa`, que implementa ML-DSA, o esquema de assinatura digital pós-quântica especificado no FIPS 204. Ele oferece três conjuntos de parâmetros (MLDSA44, MLDSA65 e MLDSA87), equilibrando tamanho de chave/assinatura e nível de segurança. O suporte também chega a `crypto/x509` e `crypto/tls` (TLS 1.3).

Finalmente, o Go ganha um pacote UUID na biblioteca padrão, seguindo a RFC 9562, com geração criptograficamente segura e comparabilidade direta com `==`.

O tour interativo da VictoriaMetrics é uma mão na roda para quem quer se antecipar às mudanças. Os exemplos são executáveis e mostram na prática como cada recurso funciona. Vale a pena conferir o post completo no blog da empresa.
