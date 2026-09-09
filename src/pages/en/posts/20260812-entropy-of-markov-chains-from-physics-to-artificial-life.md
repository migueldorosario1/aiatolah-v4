---
layout: ../../../layouts/PostLayout.astro
title: 'Entropy of Markov chains: from physics to artificial life'
date: 2026-08-12
category: 'Models and Algorithms'
lang: "en"
excerpt: "How Boltzmann inspires a definition of entropy for Markov chains, applied to Dyson's cell model."
source: 'https://chillphysicsenjoyer.substack.com/p/the-entropy-of-a-markov-chain'
heroImage: "/hero/entropia-de-cadeias-de-markov-da-fisica-a-vida-artificial.jpg"
hero_credit: "Photo by Makalu on Pixabay"
hero_legenda: "spain, andalusia, province of cadiz, cadiz, city, historic center, historic centre, nature, jardines de la plaza de espana, monument to the constitution of 1812, monument to the 1812 constitution, monument, historical, p"
---
Entropy was born in 19th-century thermodynamics, but it remains alive in modern models of complex systems. In an essay published at chillphysicsenjoyer.substack.com, the author explores how to extend the concept to Markov chains, using Dyson's cell model as a laboratory.

Clausius, in 1865, defined entropy by decomposing physical processes into chains of machines. For irreversible processes, entropy always increases; in reversible processes, like Carnot's ideal engine, the variation is zero. This is the second law of thermodynamics.

Entropy is not directly measurable with a thermometer, but it allows calculating derived quantities that are observable. The author had already speculated about 'life as entropy', inspired by Schrödinger (1944) and the concept of negentropy: life would maintain local order by consuming energy from the environment.

To give concreteness to this idea, the author resorts to models. Dyson's model of a cell is a Markov chain that converges to one of three equilibrium states: 'life', 'death', and a third. The question is: how to define entropy in this context consistently with physics?

The way out comes from Boltzmann, who related entropy to the number of possible states of a system. If we observe macroscopic variables like temperature, pressure, and volume, there are many compatible microscopic configurations. The more configurations, the higher the entropy.

An example: a gas at absolute zero, with fixed and stationary molecules, has few possible configurations. A heated gas, on the other hand, has countless. High temperature, high entropy — it is no coincidence that the number of states also increases.

Boltzmann formalized this: entropy is the logarithm of the number of states, multiplied by Boltzmann's constant. The equation is simple, but the proof is profound and still challenges mathematicians.

To make the example concrete, the author uses Curie's magnet model. In it, electrons can have spin up or down; energy depends on alignment with the magnetic field. Consider a system of 5 atoms with energy E = 1. This requires three spins up and two spins down.

The possible configurations are combinations of 5 elements taken 3 at a time, totaling 10. These 10 configurations form the macrostate 'E = 1'. By Boltzmann's formula, entropy is log₂ 10 = 3.32 bits. Thus, entropy becomes a function of energy.

Now, how to count the entropy of a Markov chain like Dyson's? In the model, there are N sites, each can be empty, active, or inactive. The system converges to an equilibrium, with fixed probabilities for each state.

Suppose an equilibrium with 1/2 chance of empty, 1/4 of active, and 1/4 of inactive. With 8 sites, we would have 4 empty, 2 active, and 2 inactive. The number of configurations is given by the multinomial coefficient: factorial of 8 divided by the factorials of 4, 2, and 2, resulting in 96.

Entropy is the logarithm of this number, multiplied by Boltzmann's constant. The author promises to explore in future posts how entropy evolves with the topology of the graph and under what conditions it increases.

The essay thanks David Pfau for discussions and assumes that all errors are the author's. References include Clausius (1865) and Schrödinger (1944).

The bridge between thermodynamics and information theory is an elegant step to understand emergent phenomena like life. Simple models, like Dyson's, help test abstract ideas and give mathematical meaning to vague concepts.