---
layout: ../../../layouts/PostLayout.astro
title: 'Lean kernel bug refutes Collatz: lessons in soundness'
date: 2026-08-10
category: 'Security and Ethics'
lang: "en"
excerpt: "Ramana Kumar announced a verified refutation of the Collatz conjecture in Lean, but the proof had a kernel bug. Lessons on soundness and proof objects."
source: 'https://lawrencecpaulson.github.io//2026/07/30/Collatz.html'
heroImage: "/hero/bug-no-kernel-do-lean-refuta-collatz-licoes-de-solidez.jpg"
hero_credit: "Photo by Daniil Komov on Pexels"
hero_legenda: "Bug no kernel do Lean refuta Collatz: lições de solidez"
---
Sensational news: the Collatz conjecture has been refuted. Ramana Kumar proved its negation, with verification in Lean and double-checking by the independent checker Nanoda. Unfortunately, the proof is wrong: it exploited a bug in Lean's kernel, and Nanoda also failed to detect the error.

Lawrence Paulson, in his blog, does not write to mock. Soundness bugs have already been found in Isabelle and other proof assistants; tomorrow a new and monstrous bug may appear. But there are important lessons.

The Collatz conjecture has existed for almost a century, attracting serious and eccentric mathematicians. The procedure: start with N; if even, divide by two; if odd, compute 3N+1. The conjecture says that one always reaches 1, and extensive tests have not found a counterexample. Recent work shows that language models are good at finding counterexamples, so why not try Collatz? Solving it would be a sensation.

Paulson recalls that half a century ago, we knew that proof objects are unnecessary. Robin Milner created the ML language to support proof assistants, with abstract types to isolate the kernel. The inference rules, confined to the abstract type, would be an API for creating theorems.

Even so, part of the community insists on storing proof objects, seeing them as independently verifiable certificates. But Paulson does not know of a single case where an independent checker detected a soundness error that passed the kernel. In the Collatz case, Nanoda was also fooled. The memory weight of proof objects is like driving while towing a spare car: the car breaks down, and the spare also does not work.

The cause of the bug in Lean, according to rumors, was nested inductive types in the kernel. Soundness bugs in Rocq came from pattern matching with recursive functions in the kernel. Paulson does not understand why dependent type theories do not express recursion from a more basic calculus. In contrast, in set theory and simple type theory, very little is assumed: union, separation, pairing, replacement; logic and lambda-calculus. With 'honest work', one obtains inductive definitions, records, recursive functions, pattern matching, and partial functions, all outside the kernel, without contradictions.

In the 1980s, Paulson worked with Martin-Löf type theory, which only recognized primitive recursion. He defined a combinator system to express terminating recursive functions, but the 'correct' answer was to extend the theory with general recursion. His work was cited as 'Paulson extended MLTT with recursion', without understanding that he obtained recursion by honest work.

Honest work is arduous, like breaking stones. Inductive definitions become monotone operators on sets; the least fixed point gives the inductive definition, the greatest, the coinductive one. In Isabelle, this is handled with bounded natural functors. Building recursive functions from scratch is tedious: one starts with a well-founded relation and proves existence by well-founded induction. Paulson's work in MLTT helped with this. Isabelle/HOL supports general recursive definitions, with pattern matching and termination checking, all outside the kernel.

There is an irony: proof objects are seen as a guarantee of soundness, but the opposite is true. If soundness is the main concern, choose HOL Light or HOL4. Isabelle has had more bugs than those, but few, and far fewer than certain other systems.

The final lesson: soundness does not come from proof objects, but from lean kernels and building everything from minimal axioms. The Collatz episode is a warning to the proof assistant community.
