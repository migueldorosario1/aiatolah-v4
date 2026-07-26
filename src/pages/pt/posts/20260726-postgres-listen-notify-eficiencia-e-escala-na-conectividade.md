---
layout: ../../../layouts/PostLayout.astro
title: 'Postgres LISTEN/NOTIFY: Eficiência e Escala na Conectividade'
date: 2026-07-26
heroImage: "/hero/postgres-listen-notify-eficiencia-e-escala-na-conectividade.jpg"
hero_credit: "Imagem conceitual gerada por IA (Ideogram)"
category: 'Hardware e Infra'
lang: "pt-br"
excerpt: "Como o LISTEN/NOTIFY do Postgres alcançou 60K de gravações por segundo com latência em milissegundos."
source: 'https://www.dbos.dev/blog/postgres-listen-notify-scalability'
---
Recentemente, o Postgres LISTEN/NOTIFY enfrentou críticas por sua suposta incapacidade de escalar, baseada em um blog popular. Contudo, de acordo com dbos.dev, essas acusações não são completamente precisas. LISTEN/NOTIFY é uma ferramenta poderosa que permite o uso do banco de dados Postgres para notificações duráveis de baixa latência, streams e pub/sub.

**O Desafio da Escalabilidade**

Inicialmente, o desempenho escalonável do NOTIFY era considerado contra intuitivo e não documentado, devido ao uso de bloqueio global. No entanto, não ser intuitivo não significa que não escale. dbos.dev detalha como otimizar as streams com LISTEN/NOTIFY a uma escala nevertida, alcançando 60K de gravações por segundo em um único servidor Postgres com latência em escala de milissegundos.

**Projetado para Baixa Latência**

A estrutura básica de streams apoiados por Postgres é simples: crie uma tabela streams onde cada chunk do stream (por exemplo, um token de resposta de LLM) é uma nova linha, e escreva no streams inserindo nessa tabela. A parte desafiadora é ler do stream, pois não se sabe quando o próximo chunk chegará. Uma solução é polinomial, onde cada leitor polemiza o final do stream em busca de novos chunks. No entanto, a polinomial escalona mal.

**LISTEN/NOTIFY Como Solução**

A solução melhor é LISTEN/NOTIFY. Isso permite que os leitores aguardem um bloqueio esperando por uma notificação do escritor de que um novo chunk foi publicado no stream. Desta forma, os leitores não desperdiçam recursos polemizando, mas acordam imediatamente quando um novo chunk de stream chegar.

**O Bloqueio Exclusivo LISTEN/NOTIFY**

Para entender o problema, é necessário examinar como o Postgres LISTEN/NOTIFY realmente funciona. O motivo da baixa performance é que, no Postgres, confirmar uma transação que chama NOTIFY requer assumir um bloqueio exclusivo global. Este bloqueio é assumido quando a transação começa a ser confirmada e só é liberado quando a transação é totalmente confirmada e seu conteúdo é descartado para o disco com fsync().

**Otimizando LISTEN/NOTIFY**

Para tornar as streams com LISTEN/NOTIFY mais rápidas, precisamos contornar este gargalo. A observação chave é que, para streams e para muitos outros usos do LISTEN/NOTIFY, as notificações em si não são uma fonte da verdade. Em vez disso, elas apenas acionam um leitor para verificar uma tabela no banco de dados (a verdadeira fonte da verdade) para novos dados. Como resultado, as notificações não precisam ser globalmente ordenadas ou perfeitamente duráveis, então podemos otimizar NOTIFY armazenando as notificações na memória e liberando-as periodicamente em uma única transação em lote, reduzindo significativamente a concorrência no bloqueio global.

**Resultados Encouraçantes**

O benchmarking dessa solução otimizada mostra um desempenho massivamente melhorado: na presença de leitores concorrentes, podemos realizar até 60K de gravações de streams por segundo (20 vezes mais do que antes) enquanto ainda obtemos latência de 15-100ms. No máximo da taxa de transferência, a CPU do Postgres está totalmente utilizada, mostrando que o banco de dados está realmente saturado em vez de ser bloqueado na concorrência.

*Todas as informações de benchmarking estão disponíveis no GitHub: [github.com/dbos-inc/dbos-postgres-benchmark](https://github.com/dbos-inc/dbos-postgres-benchmark)*
