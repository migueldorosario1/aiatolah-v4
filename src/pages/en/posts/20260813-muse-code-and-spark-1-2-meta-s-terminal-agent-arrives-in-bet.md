---
layout: ../../../layouts/PostLayout.astro
title: 'Muse Code and Spark 1.2: Meta''s terminal agent arrives in beta'
date: 2026-08-13
category: 'Development'
lang: "en"
excerpt: "Meta launches Muse Code, a terminal coding agent, powered by the Muse Spark 1.2 model, focused on complex tasks and kernel optimization."
source: 'https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2'
heroImage: "/hero/muse-code-e-spark-1-2-agente-de-terminal-da-meta-chega-em-be.jpg"
hero_credit: "Photo by MARCO on Unsplash"
hero_legenda: "Muse Code e Spark 1.2: agente de terminal da Meta chega em beta"
---
Meta has introduced Muse Code (beta), a coding agent that runs in the terminal, and Muse Spark 1.2, the model that powers it. The news was announced on the company's research blog, research.meta.ai, as part of a move towards the AI frontier, with larger and more capable models on the way.

Muse Code is designed to tackle complex software engineering tasks in large repositories. It plans changes, writes code, and validates results, coordinating multiple persistent subagents for each task. This allows it to solve difficult problems with more speed, accuracy, and less human intervention.

## Asynchronous background agents

Muse Code operates with a simple agent loop, complemented by a set of asynchronous background agents. These specialized agents remain active throughout the session, rather than being created for individual tasks, avoiding redundant information gathering. They execute next steps and decide when to communicate with the main agent, reducing latency and the need for guidance in difficult, multi-step tasks.

## Fail-safe runtime design

The Muse Code runtime uses a local event log, where every model call, tool execution, approval, and edit is recorded. This single source of truth makes the runtime replay-exact and restart-safe: after a failure, the agent can resume exactly where it left off. This allows Muse Code to execute long-running tasks without being interrupted by errors.

## Built-in skills

Muse Code comes with several standard skills. The /plan command turns a task into a plan with approval; /grill tests the plan until it holds up; and /goal works to complete the specified objective.

## Muse Spark 1.2: Focus on coding

Muse Spark 1.2 is an update to Muse Spark 1.1, with improvements in code generation, complex debugging, codebase understanding, and end-to-end development workflows. Meta has significantly scaled up computational training on coding tasks, expanding the diversity of the training environment. The model maintains its strength in other areas, such as general agents.

## Co-training with Muse Code

Muse Spark 1.2 was co-trained with Muse Code to ensure the best performance and usability when used together. The training included rejected harness trajectories and revenue optimizations for objectives, compaction, and subagents, as well as integration of the Muse Code toolset to maximize compatibility.

## Long horizon and self-improvement

Muse Spark 1.2 was extensively trained on long-horizon coding tasks, including generating entire repositories, end-to-end projects, and self-research. It uses planning to sequence work, objective conditioning to maintain direction, and context compaction to retain necessary knowledge.

Meta also used Muse Spark 1.1 to generate challenging coding environments and instruction templates. The model then evaluated candidate solutions based on how well they satisfied these requirements, producing a scalable training dataset for Muse Spark 1.2. This self-improvement loop helped the model follow complex instructions more accurately than its predecessor.

## Case study: GPU kernel optimization

Meta tested the model's ability to iteratively optimize GPU kernels over more than 1,000 tool calls (up to 24 hours). Using Muse Code's agentic coding environment, the model writes, compiles, profiles, and progressively improves kernel performance against a baseline implementation. Benchmarks were done on KDA and MLA kernels for NVIDIA Hopper GPUs.

The baseline is the FLA Triton implementation of KDA. Models were prohibited from importing third-party libraries like FLA directly; instead, they had to apply specialized kernel optimization knowledge to implement the algorithm in Triton. Muse Spark 1.2 combined a block-parallel preparation kernel with a sequential scan between blocks, incorporating KDA-specific optimizations such as recentralizing the gated cumulative decay at the block midpoint.

## Availability

Muse Spark 1.2 is available today in Muse Code and the Meta Model API, with expanded global access. Meta promises new harness features and more powerful models soon.
