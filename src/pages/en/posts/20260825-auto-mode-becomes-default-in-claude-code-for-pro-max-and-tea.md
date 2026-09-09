---
layout: ../../../layouts/PostLayout.astro
title: 'Auto mode becomes default in Claude Code for Pro, Max, and Team plans'
date: 2026-08-25
category: 'Development'
lang: "en"
excerpt: "Claude Code adopts auto mode as default on 08/14; superior security to manual review in tests."
source: 'https://claude.com/blog/auto-mode-default-in-claude-code'
heroImage: "/hero/auto-mode-vira-padrao-no-claude-code-para-planos-pro-max-e-t.jpg"
hero_credit: "theglobalpanorama via Openverse (by-sa)"
hero_legenda: "Auto mode becomes default in Claude Code for Pro, Max, and Team plans"
---
Anthropic announced that auto mode becomes the default in Claude Code for Pro, Max, and Team plans. The change applies to new sessions starting August 14, according to claude.com.

Those who have already set another default may receive a one-time notice asking if they want to migrate. Those who have fixed a preference will not be affected. The auto mode classifier uses few extra tokens per tool call, and the company has stopped charging for this cost on these plans, effective immediately.

On Enterprise, API, Claude Platform on AWS, Amazon Bedrock, Google Cloud's Agent Platform, and Microsoft Foundry, auto mode remains optional for now. The idea is to give administrators time to evaluate. Next month, with cloud partners, Anthropic plans to make it the default on all these surfaces, also without charging for the classifier. Meanwhile, Enterprise administrators can enable it via managed settings.

Auto mode balances the desire not to be interrupted with the prevention of harmful actions. Instead of prompts, each tool call goes through a classifier that blocks irreversible, destructive, or externally directed actions. When something is blocked, Claude usually finds a safer path or asks for direct authorization. If it doesn't make progress—three consecutive blocks or twenty in the session—Claude Code reverts to manual approvals.

The company spent months testing whether auto mode is as safe as manual review. They conducted internal red-teaming, third-party evaluations, a controlled study with 1,053 paid testers, and analysis of real production sessions. On all metrics, auto mode matched or exceeded manual review.

Auto mode also allows Claude to work autonomously for longer periods. This makes long-horizon models like Claude Opus 5 more practical for extensive tasks. Reducing user overhead increases productivity: among Teams and Enterprise adopters, those using auto mode deliver about 25% more pull requests. Teams at Adobe, Nuro, Gusto, and Garner Health already use auto mode as the default in production.

Security data shows that manual review can become habitual: users approve 97% of permission prompts in Claude Code. Although many commands are safe, such a high rate suggests reflexive clicking, not careful analysis. In contrast, when Claude presents a plan, users reject 39%; for individual permission requests, rejection drops to 3%.

The default also appears in configuration files. In June 2026, 49.5% of active CLI users manually created a permission rule for Bash—5% allow any shell command and 43% have interpreter rules like Bash(python:*) or Bash(node:*), nearly equivalent in practice. This number grows about 5 percentage points every 5 weeks. Additionally, 62% of users used bypassPermissions or clicked 'don't ask again' on Bash, and 25% of interactive sessions start in bypass permissions mode.

In auto mode, permission rules continue to apply before the classifier, except broad rules that allow arbitrary code execution, such as python:*. These rules are set aside in auto mode, as they would allow commands to bypass the classifier. Configuration files are not modified, and the rules apply again when switching modes.

Research, both internal and third-party, indicates that auto mode is safer than typical prompt-based interaction. In the study with 1,053 paid testers, they worked in a controlled environment without knowing what was measured. At a certain point, a prompt was replaced with a clearly dangerous command. Testers detected the dangerous command only 13.6% of the time (143 out of 1,053), while auto mode blocked 89% (937 out of 1,053). In direct comparison, auto mode blocked 800 commands that humans approved; humans blocked only 6 that auto mode allowed. In long sessions, humans worsened: they blocked about 17% at the start, dropping to 5% after 50 prompts; auto mode maintained a stable rate.

Analysis of real sessions, from May to June 2026, showed that auto mode results in fewer harmful actions. Among sessions flagged for review, manual ones contained serious unintended harm more than twice as often as auto mode ones. At production severity (7+), 6.3% of manual sessions had unsolicited harmful actions, compared to 2.4% in auto mode.

Anthropic also worked with Apollo Research, a UK AI safety startup, on a two-week pilot injecting synthetic attacks into real coding trajectories. The find-fix-verify cycle strengthened the classifier, giving more context about the protected environment.

The change reflects a trend toward more autonomous agents with built-in safety. For those who prefer manual control, it is still possible to set another default.