---
layout: ../../../layouts/PostLayout.astro
title: 'SIMD simplificado: por que todo desenvolvedor deveria conhecer essa técnica'
date: 2026-07-23
heroImage: "/hero/simd-simplificado-por-que-todo-desenvolvedor-deveria-conhece.jpg"
hero_credit: "Wikimedia Commons (CC BY-SA 4.0) — Jacek Halicki"
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Mitchell Hashimoto mostra que SIMD não é só para experts: com 5 passos simples, qualquer dev pode acelerar loops em até 16x."
source: 'https://mitchellh.com/writing/everyone-should-know-simd'
---
SIMD tem fama de complexo. Muitos engenheiros de software experientes o descartam como algo difícil de aprender ou uma otimização nichada, útil apenas para software de altíssimo desempenho.

Segundo Mitchell Hashimoto, em post no mitchellh.com, essa visão está errada. SIMD pode ser simples de entender, e o padrão comum de 'processar N valores por vez' segue sempre a mesma estrutura geral. Uma vez aprendido o básico, escrever código SIMD fica quase tão fácil quanto um loop for.

## O que é SIMD?

SIMD permite que uma CPU opere em múltiplos valores em paralelo. Em vez de comparar um byte por vez, uma CPU pode comparar 4, 8 ou mais bytes com uma única instrução.

Loops como `for (byte in bytes)` podem ser transformados em `for (8 byte chunk in bytes)`, resultando em aceleração localizada diretamente proporcional ao paralelismo: 4x, 8x ou mais rápido.

O único requisito real é processar regularmente um número grande o suficiente de bytes. Se o loop itera sobre dados de apenas algumas dezenas de bytes, não vale a pena. Mas se são centenas, milhares ou milhões de bytes, o ganho é enorme.

## A estrutura comum

O código SIMD típico segue cinco passos:

1. Transmitir constantes necessárias e inicializar acumuladores vetoriais, se houver.
2. Loop sobre a entrada, um bloco de largura vetorial por vez.
3. Realizar a comparação ou aritmética em todas as 'lanes' em paralelo.
4. Reduzir ou armazenar o resultado vetorial conforme necessário.
5. Lidar com os elementos restantes com uma cauda escalar (loop normal para o resto).

## Exemplo real do Ghostty

Hashimoto mostra um exemplo real do Ghostty, seu emulador de terminal. O loop escalar original é uma linha:

```zig
while (end < cps.len and cps[end] > 0xF) end += 1;
```

A versão SIMD, com 12 linhas adicionais, pode melhorar a taxa de transferência em até 4x com ARM NEON (incluindo Apple Silicon), 8x com AVX2 (x86 moderno) e 16x com AVX-512 (alguns Intel e AMD Zen 4+).

Em testes reais de throughput de terminal em um desktop Intel com AVX2, a aceleração foi de cerca de 5x.

## Passo a passo

**Passo 1:** Broadcast de constantes. Define-se o tipo vetorial com `@Vector(lanes, u32)` e usa-se `@splat(0xF)` para copiar o valor 0xF para todas as lanes.

**Passo 2:** Loop sobre um vetor completo por vez. Com `while (end + lanes <= cps.len)`, só entra no loop quando há valores suficientes para preencher um vetor. A cada iteração, `end += lanes` avança pelo número de lanes.

**Passo 3:** Operação SIMD. A comparação `values > threshold` é feita em todas as lanes em paralelo, em uma única instrução de CPU.

**Passo 4:** Redução do resultado. O vetor de booleanos é reduzido para encontrar a posição do primeiro valor que não atende à condição, usando `@reduce(.And, ...)` e `@ctz`.

**Passo 5:** Cauda escalar. O loop original processa os elementos restantes que não cabem em um vetor completo.

## Conclusão

SIMD não precisa ser um bicho de sete cabeças. Com a estrutura de cinco passos, qualquer desenvolvedor pode aplicar SIMD em loops comuns e obter ganhos significativos de desempenho. A chave é reconhecer padrões de processamento em lote e aplicar a técnica onde houver volume suficiente de dados.
