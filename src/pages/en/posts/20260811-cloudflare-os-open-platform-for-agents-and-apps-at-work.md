---
layout: ../../../layouts/PostLayout.astro
title: 'Cloudflare OS: open platform for agents and apps at work'
date: 2026-08-11
category: 'Development'
lang: "en"
excerpt: "Cloudflare open-sources Cloudflare OS, a platform that gives every person an agent and workspace with company context."
source: 'https://blog.cloudflare.com/cloudflare-os/'
heroImage: "/hero/cloudflare-os-plataforma-aberta-para-agentes-e-apps-no-traba.jpg"
hero_credit: "Photo by JoshuaWoroniecki on Pixabay"
hero_legenda: "laptop, digital device, technology, portable, computer, laptop computer, pc, macbook, laptop, laptop, laptop, technology, technology, technology, technology, computer, computer, computer, computer, computer"
---
Cloudflare announced the open-sourcing of Cloudflare OS, a platform that promises to bring the power of AI agents to the entire organization, not just developers. The idea is to give every person an agent and a workspace built around the company: how it works, what it knows, and the systems it uses.

According to blog.cloudflare.com, the platform has been tested internally since May of this year, with thousands of employees from all areas using it daily to create documents, slides, automate tasks, and build small data visualization apps.

The version being opened now incorporates lessons from that first round. The company's CIO, Sam Rhea, details the journey in a separate post.

## What changed from the first version

The first version was centered on private workspaces, with static apps and deterministic processes that still consumed model tokens. But collaboration exposed a more fundamental problem: access to an MCP server told which tools an agent could call, but not which underlying resources it had observed.

With the sharing of workspaces, apps, and outputs, it was necessary to ensure that collaboration did not expose information that someone was not allowed to see. The solution was to rebuild Cloudflare OS on a new foundation, where security is part of the platform, not a concern for each person building an app or using an agent.

## How Cloudflare OS works

Cloudflare OS starts with a conversation in the browser, like many AI tools. The difference is that each conversation is grounded in the context and skills that the organization has curated. A workspace can receive an objective and use that knowledge to work with the tools and data the company already uses.

The platform combines three parts: an agent workspace with an isolated runtime for writing and executing code; a new security and governance framework for secure access to internal data and services; and a platform for personal and modifiable apps that people can build, share, and continue to change.

What starts as a conversation can become a document, an app, or a workflow that continues to do the work.

## Workspace for everyone

The workspaces were designed for anyone in the company, without needing to be a developer or know how to use a terminal. They combine agent sessions, persistent state, outputs and files, access to resources, and an isolated runtime.

The workspaces come loaded with the context and skills that the team or company has collected. If someone discovered the best way to do something, everyone can benefit, without having to explain the same process, terminology, and best practices to a model every time.

Among the possibilities: search and answer questions using company context; create documents, slides, and spreadsheets that can remain connected to live data; build collaborative apps with their own interface; and run deterministic workflows, where code handles predictable steps and the model only enters where it adds value.

Cloudflare OS gives agents and apps governed access to systems of record via 'Gatekeepers' and also supports existing MCP servers via 'MCP Server Portals'.

## Security and governance

One of the first requests from those trying AI at work is for API keys to company systems. But giving keys to people and agents is dangerous and doesn't scale: they often provide broad, long-lived access that is difficult to restrict, share securely, and audit.

MCP offers a better alternative, holding the credential and exposing a defined set of tools. But controlling which tools an agent can call is only the first step. MCP alone doesn't say which underlying resources the agent observed. It can combine information across systems, send it to a less restricted place, or expose it through apps and outputs to people who shouldn't see the original resources.

Therefore, authorization needs to consider where data can go next.

## Agents start with no access

Cloudflare Access controls who enters Cloudflare OS. Inside it, every agent and app starts with no access to anything. An agent can request access to a specific resource, which you grant or deny. The generated code receives that resource as a 'typed binding', and the credential is completely isolated from the agent and the generated code.

The server code runs in a 'Dynamic Worker' with global outbound networking disabled. The client code runs in an isolated frame in the browser. The platform is designed to belong to the company that runs it: you can customize the interfaces, connect your tools, and add the skills and context that capture how your organization works.

With the open source code, any organization can deploy Cloudflare OS, connect it to internal systems, and make it their own.
