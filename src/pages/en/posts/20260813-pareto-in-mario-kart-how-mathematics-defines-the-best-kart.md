---
layout: ../../../layouts/PostLayout.astro
title: 'Pareto in Mario Kart: how mathematics defines the best kart'
date: 2026-08-13
category: 'Models and Algorithms'
lang: "en"
excerpt: "Antoine Mayerowitz uses Mario Kart 8 to explain the Pareto frontier and multi-objective optimization."
source: 'https://www.mayerowitz.io/blog/mario-meets-pareto'
heroImage: "/hero/pareto-no-mario-kart-como-a-matematica-define-o-melhor-kart.jpg"
hero_credit: "Photo by L'oeil à deux Vanessa et cédric on Pexels"
hero_legenda: "Pareto no Mario Kart: como a matemática define o melhor kart"
---
Choosing driver, car, tires, and glider in Mario Kart 8 is not just style: it's as crucial as racing skill. With dozens of options for each element and distinct stats, the number of possible combinations is gigantic.

Many choices are purely aesthetic, with identical stats, but even ignoring duplicates, navigating thousands of options is a challenge. Is there a perfect combination or is it all luck? Should I prioritize speed or acceleration to recover quickly after a hit?

Antoine Mayerowitz, in an article on mayerowitz.io, proposes a solution created over a century ago by economist Vilfredo Pareto. The idea is simple: finding the fastest driver is just sorting by the speed stat, but the ideal combination requires balancing speed and acceleration, which makes the choice non-trivial.

Some options are always dominated. Poor Koopa, for example, has less speed than Cat Peach with the same acceleration, and less acceleration than Toadette with the same speed. In other words, it's never worth choosing him.

The efficient drivers, which are not dominated in either of the two stats, form the so-called Pareto frontier. But not all elements of the frontier are equally good: you probably won't choose a driver at the extreme, because you want a balance between speed and acceleration.

Pareto efficiency is an objective criterion to filter suboptimal options, but the final decision depends on your play style. If you value one stat more than another, that reveals which point on the frontier suits you.

In practice, you don't just choose the driver, but the complete set of car, wheels, and glider. This makes the number of choices explode, but Pareto is on our side.

The pattern goes beyond the game: cheap and delicious meal, well-paid and easy job, low-risk and high-return portfolio, flexible and resistant material, fair and efficient taxation, or a high-quality, fast, and cheap LLM. All are multi-objective optimization problems, requiring trade-offs.

If you already know the exact weights for each dimension, the problem becomes single-objective optimization, and Pareto is not needed. But when the utility function is unknown or uncertain, the Pareto frontier objectively eliminates suboptimal options, allowing you to experiment with the efficient ones and choose the best for you.

Mayerowitz made simplifications to make the article accessible: stats are translated into derived stats that are not always linear, there are 4 speed stats and 4 handling stats for all parts (except driver), and the utility function was hidden. For more details, he suggests donating some coins.

Credits: Super Mario Wiki, Mario Kart 8 Deluxe stats, and Henry H., 'Mario Kart and the Pareto Frontier', 2015.
