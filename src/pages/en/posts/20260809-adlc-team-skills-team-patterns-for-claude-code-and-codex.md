---
layout: ../../../layouts/PostLayout.astro
title: 'ADLC Team Skills: team patterns for Claude Code and Codex'
date: 2026-08-09
category: 'Development'
lang: "en"
excerpt: "Open-source project brings engineering standards to AI agents like Claude Code and Codex, with versioned guidelines."
source: 'https://github.com/tikalk/adlc-team-skills'
heroImage: "/hero/adlc-team-skills-padroes-de-equipe-para-claude-code-e-codex.jpg"
hero_credit: "Photo by Google DeepMind on Pexels"
hero_legenda: "ADLC Team Skills: padrões de equipe para Claude Code e Codex"
---
The tikalk/adlc-team-skills repository on GitHub proposes a team layer for AI agents like Claude Code, Codex, OpenCode, Cursor, and GitHub Copilot. The idea is to replace individual 'vibe coding' with a shared, versioned standard.

According to the project, isolated prompt tips generate quick wins for solo developers, but at team scale they result in chaotic technical debt, loss of context, hard-to-review PRs, and loss of code ownership. Speed is solved; trust and verification are the new bottleneck.

ADLC Team Skills is the team layer of the Twelve-Factor Agentic SDLC, an open-source framework. It transforms AI agents from 'isolated guessers' into team members that follow the team's constitution, product strategy, architecture standards, and evaluation benchmarks.

The companion repository tikalk/agentic-sdlc-team-ai-directives holds the versioned context modules: constitution, rules, personas, examples, CDR index, and skills manifesto.

Installation is simple, via npx. The command `npx adlc-skills-cli add tikalk/adlc-team-skills -a opencode` installs skills, generates slash commands, and connects session start events. Meanwhile, `npx skills add tikalk/adlc-team-skills -a claude -g` installs only the skills, without commands or events.

The project works with any agent that supports the Agent Skills standard. The `adlc-skills-cli` generates slash commands and connects `session_start` hooks for nine coding agents. Repositories without `.events.json` receive only commands.

Orchestration is universal: the `mission-brief` discovers skills from any source, such as mattpocock/skills, addy osmani/agent-skills, superpowers, spec-kit, or your own repositories, and dynamically integrates them into the pipeline. No vendor lock-in.

The `team-boot` runs automatically at session start via an event hook. In unconfigured projects, it issues a warning for the user to run `/team-setup`. The `team-setup` can also be called manually, offering four modes: clone from GitHub, point to a local path, check existing configuration, or create a new structure.

Mode 3 creates a new `team-ai-directives` directory with README, AGENTS.md, CDR.md, `.skills.json`, placeholder constitution, and OKF indexes, and initializes Git. The `team-constitution` interactively replaces the placeholder with real principles.

The comparison between 'vibe coding' and ADLC is clear. Without ADLC, the session starts from scratch, with the agent ignoring architecture, rules, and standards. With ADLC, the `team-boot` automatically loads the constitution and active decisions.

Instead of dumping a 10k-token prompt wall, the `team-boot` injects a compact index of about 100 tokens. The `team-discover` fetches only the rules relevant to the task. This reduces token waste and avoids instruction drift.

Ambiguity leads the agent to invent functions or database schemas. The `mission-brief` defines a formal contract with Goal, Constraints, Non-Goals, and Success Criteria before writing code.

Learnings are not lost: the `levelup-specify` extracts execution traces from the session and commits new rules directly to Git. Silent regressions are caught by automated evaluations with LLM judges and binary graders before human review.

The project is structured around four pillars: Strategy and Guidelines, Product and Architecture, Spec-Driven Workflow, and Governance and Evaluations. At the top, the 'Great Filter' represents the macro review by the human leader.

Team standards live in a versioned Git repository, not on local machines. The `team-boot` assembles the constitution, CDR indexes, PDR/ADR, and skills registry into the system prompt.

The `team-repair` reindexes the CDR.md, checks for rule conflicts, and the timeliness of guidelines. Without documented decisions, each implementation session re-derives or misinterprets the product intent.

Product Decision Records (PDRs) capture product decisions in individual files, with an interactive clarification flow and compilation into PRD.md. Architectural Decision Records (ADRs) use Rozanski & Woods viewpoints (Functional, Security, Deployment, Performance) and compose a unified AD.md.

The `product-roadmap` tracks progress in four layers: decisions (PDRs), execution (issues via MCP), code evidence, and milestones.

The mantra is 'Debug the Spec, Not the Code': when the agent errs, add the missing constraint to the specification, so the error does not repeat. And never let the agent that wrote the code judge whether it is good: 'Separate the Creator from the Verifier'.

Evaluation skills build application-level suites with PromptFoo or DeepEval, following Eval-Driven Development. They run quick Tier 1 checks and Tier 2 LLM judge subagents to test code against business risks before human review.

The project is a response to the need for trust and verification in AI engineering, placing the team at the center of the strategy.
