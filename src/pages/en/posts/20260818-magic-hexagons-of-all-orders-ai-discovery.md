---
layout: ../../../layouts/PostLayout.astro
title: 'Magic hexagons of all orders: AI discovery'
date: 2026-08-18
category: 'Models and Algorithms'
lang: "en"
excerpt: "Researcher uses AI to find magic hexagons of all orders up to 21, breaking previous record."
source: 'https://gukov.dev/math/2026/08/02/new-magic-hexagons.html'
heroImage: "/hero/hexagonos-magicos-de-todas-as-ordens-descoberta-com-ia.jpg"
hero_credit: "Photo by Aedrian Salazar on Unsplash"
hero_legenda: "Hexágonos mágicos de todas as ordens: descoberta com IA"
---
The number 19 has always been special to mathematicians: it is a twin prime and, until recently, it was the number of cells in the only non-trivial normal magic hexagon. But that exclusivity is over.

According to gukov.dev, a researcher managed to demonstrate that magic hexagons exist of all orders, using a combination of mathematical observations and artificial intelligence. The discovery was published in August 2026.

## What is a magic hexagon?

A magic hexagon is a hexagonal grid of numbers where all straight lines, in three directions, sum to the same value. A normal magic hexagon contains consecutive numbers from 1 to the total number of cells, which is given by 3n² - 3n + 1 for a hexagon of order n.

For decades, it was believed that the only non-trivial normal magic hexagon was of order 3, with 19 cells. The proof is simple: the sum of all numbers must be divisible by the number of lines in each direction, which is 2n - 1. For n > 3, this condition fails.

## Abnormal hexagons

To circumvent this limitation, the researcher relaxed a restriction: the numbers are still consecutive, but they don't need to start at 1. This opens space for new solutions, called abnormal magic hexagons.

Finding these solutions, however, is extremely difficult. There is no known algorithmic construction; the only approach was to search in a gigantic space of possibilities. Until July 2026, the largest known hexagon was of order 9, found by Klaus Meffert in 2024.

## The strategy: reducing the search space

Instead of trying to speed up the search, the researcher focused on reducing the search space. He observed that antisymmetric hexagons are simpler: if the numbers vary from -K to K, with 0 in the center, and opposite cells have opposite values, many restrictions disappear automatically.

Another crucial observation: every zero-sum hexagon can be built from local rings of 6 points, with alternating patterns of +1 and -1. This leads to a potential field representation, which satisfies the line constraints by construction.

## AI enters the scene

The researcher, who was also helping to pre-solve problems for the Midnight Code Cup 2026, decided to use an LLM, GPT-5.6 Sol, instead of a generic solver. The model connected the problem to Heffter arrays, which led to a custom simulated annealing algorithm.

With performance optimizations (Numba, bottleneck elimination), the program ran on a home server with about 24 cores for a few days. The result: magic hexagons of all orders up to n=21, surpassing the previous record of n=9.

The cell values seem chaotic, but the potential fields reveal smooth structures, like terrain maps. This suggests that there may be a larger hidden structure, which the researcher intends to investigate.

The discovery shows how AI can accelerate mathematical research, finding solutions that would be practically impossible to find manually. And it raises the question: what else is hidden in these patterns?
