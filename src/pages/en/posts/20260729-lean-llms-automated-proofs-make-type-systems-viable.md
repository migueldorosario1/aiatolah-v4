---
layout: ../../../layouts/PostLayout.astro
title: 'Lean + LLMs: Automated Proofs Make Type Systems Viable'
date: 2026-07-29
category: 'Development'
lang: "en"
excerpt: "Google engineer shows that LLMs can automate proofs in Lean, drastically reducing the effort of formal verification."
source: 'https://www.imperialviolet.org/2026/07/26/zstd-lean.html'
heroImage: "/hero/lean-llms-prova-automatica-torna-sistemas-de-tipos-viaveis.jpg"
---
Formal verification has always been a distant dream for most programmers. Languages with dependent types, such as Coq (now Rocq) and Lean, promise to automatically check complex invariants, but the cost in proof time has always been prohibitive.

According to a Google engineer in a post on imperialviolet.org, the classic problem is that 'with great type power comes great proof effort'. The seL4 project, for example, spent about 10 times more time proving than designing and implementing, and generated over 20 times more lines of proof code than C code.

Tools like F* attempt to automate with SMT solvers, but the author reports that it is 'very easy to create something that makes the SMT solver go off and run for hours'. The solution ends up becoming 'mysticism' — the programmer needs to develop a sixth sense for what pleases the solver.

Now, LLMs combined with the principle of proof irrelevance change this scenario. Since the content of the proof is irrelevant (only its existence matters), an LLM can generate proofs without worrying about elegant structure. In limited tests, the author states that LLMs can prevent the type checker from exploding.

To test the idea, he built a Zstandard decompressor in Lean. Zstandard (by Yann Collet, based on the seminal work of Jarek Duda) is winning the competition to replace gzip as the canonical compressor. It offers better entropy coding and impressive decompression speeds.

The Zstandard RFC is 'quite concise', requiring multiple readings. The author found that his colleague Nigel Tao already wrote a better explanation, so he focused on the FSE entropy encoder.

FSE is a state machine with more states than symbols. Each symbol occupies a fraction of the states proportional to its probability. Unlike Huffman, which forces whole bits per symbol, FSE allows fractional averages: half of a symbol's states read 1 bit, half read 2 bits, achieving the desired average.

The state table is never transmitted — the RFC prescribes an algorithm to build it from the probabilities. Thus, only the probabilities need to be sent.

The author concludes that LLMs can make dependent type systems 'dramatically more practical'. Proof automation via LLMs reduces the need for 'proof engineering' — the art of structuring proofs for easy maintenance.

Challenges remain: complex proofs can cause the type checker to consume a lot of memory. But with LLMs, the balance between type power and proof effort may finally tip toward practicality.
