---
layout: ../../../layouts/PostLayout.astro
title: 'Stateless MCP 2.0 reignites interest and inspires new tools'
date: 2026-08-09
category: 'Development'
lang: "en"
excerpt: "New stateless MCP specification simplifies implementation and leads to creation of mcp-explorer and datasette-mcp."
source: 'https://simonwillison.net/2026/Jul/31/stateless-mcp/'
heroImage: "/hero/mcp-2-0-sem-estado-reacende-interesse-e-inspira-novas-ferram.jpg"
hero_credit: "Photo by Karolina Grabowska www.kaboompics.com on Pexels"
hero_legenda: "MCP 2.0 sem estado reacende interesse e inspira novas ferramentas"
---
The 2026-07-28 specification of the Model Context Protocol, nicknamed MCP 2.0, arrived on July 28 and is already considered the biggest change to the protocol since its launch. According to Simon Willison, in his blog, this update reignited his personal interest in MCP, which had been overshadowed by alternatives like Skills.

MCP, created by Anthropic in November 2024, standardizes the exposure of tools for AI agents. During 2025, the protocol gained enormous popularity, but eventually lost ground to terminal and curl-based approaches, which proved more flexible. However, Willison now sees MCP as a safer and more controllable option.

The big news of stateless MCP is the elimination of the need for persistent sessions. In the old model, two HTTP requests were needed: one to initialize the session and obtain an ID, and another to call the tool. Now, a single request with headers like `MCP-Protocol-Version` and `Mcp-Method` handles everything.

This simplification drastically reduces implementation complexity, both for clients and servers. It also facilitates building scalable web applications, since there's no need to maintain server state or worry about session routing.

To explore the new protocol, Willison created `mcp-explorer`, a Python CLI tool that allows listing, inspecting, and calling tools from any stateless MCP server. The utility can be run directly with `uvx`, without installation, and was developed with help from Codex.

The second project is `datasette-mcp`, a plugin for Datasette that adds an `/-/mcp` endpoint to any instance. With just three tools — `list_databases`, `get_database_schema`, and `execute_sql` — the plugin allows agents like ChatGPT or Claude to execute SQL queries on hosted databases. Willison already uses it on his own blog, at datasette.simonwillison.net.

Finally, `llm-mcp-client` is an official MCP integration with Willison's LLM tool. In a test, the agent executed seven SQL queries to answer a question about recent notes. The author plans to incorporate the plugin into the core of LLM and experiment with MCP in other projects.

Willison highlights that MCP offers a safer way to build agents, compared to arbitrary command execution in an open network environment. He intends to use the protocol more frequently in sensitive LLM-based applications.
