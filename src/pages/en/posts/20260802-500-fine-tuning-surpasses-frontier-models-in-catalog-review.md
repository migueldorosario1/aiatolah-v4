---
layout: ../../../layouts/PostLayout.astro
title: '$500 Fine-tuning Surpasses Frontier Models in Catalog Review'
date: 2026-08-02
category: 'Models and Algorithms'
lang: "en"
excerpt: "With RL on an open 9B model, the company surpasses GPT-5.5 and Claude Opus 4.8 in legal task at a fraction of the cost."
source: 'https://fermisense.com/when-machines-take-the-wheel/'
heroImage: "/hero/fine-tuning-de-us-500-supera-modelos-fronteira-em-revisao-de.jpg"
---
A fine-tuning of just $500 with reinforcement learning on an open 9-billion-parameter model surpassed frontier models in a catalog review task. The case is one of three reported by the site fermisense.com, which shows how the combination of open-source model, proprietary data, and RL against a scored version of the workflow is becoming a winning playbook.

The first example comes from Bridgewater Associates, one of the world's largest hedge funds. Its analysts need to filter a constant stream of articles, files, and emails, judging which documents are relevant to the firm's investment thesis and where standardized content begins. The problem is that 'relevant' means relevant according to Bridgewater's internal judgment, and no prompting on frontier models could reliably absorb that judgment. The company then decided to train an open model with labels from its own expert investors. The trained model makes about 30% fewer errors than the best frontier model, at a fraction of the inference cost.

The second case is from Harvey, which builds AI agents for law firms. Their hardest workloads are long-horizon: transaction due diligence and legal memo drafting, where the agent navigates large document sets, errors accumulate between steps, and even the best frontier models with maximum reasoning effort fell short of quality standards. Harvey applied reinforcement learning on an open-weights model and obtained a legal agent that surpasses both GPT-5.5 and Claude Opus 4.8 on their own rubrics.

The third example is from Intercom, a customer support platform whose AI agent, Fin, resolves nearly two million customer issues per week. At that volume, the problem is unit economics: the per-call price of frontier models rises quickly, and every point in resolution rate matters. So Intercom's AI group post-trained its own vertical support model, Fin Apex, on billions of customer service interactions. Intercom reports that it resolves more issues than the best frontier models while being cheaper to run.

The same pattern repeats in many other cases. The fermisense.com article lists eight more deployments in the appendix, with what each model was trained to do and what changed after it went into production. The lesson is clear: with the right data and an RL step, small open models can outperform closed giants on specific tasks, at a fraction of the cost.