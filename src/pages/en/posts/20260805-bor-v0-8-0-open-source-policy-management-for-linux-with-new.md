---
layout: ../../../layouts/PostLayout.astro
title: 'Bor v0.8.0: open source policy management for Linux with new types'
date: 2026-08-05
category: 'Development'
lang: "en"
excerpt: "Bor v0.8.0 adds Thunderbird, Edge and Firewalld, revamps UI and strengthens security."
source: 'https://getbor.dev/blog/2026-08-02-bor-v080-release/'
heroImage: "/hero/bor-v0-8-0-gestao-de-politicas-open-source-para-linux-com-no.jpg"
---
Bor v0.8.0 has arrived. The new version of the open source policy manager for Linux desktops brings three new policy types — Thunderbird, Microsoft Edge for Business, and Firewalld zones — along with a complete overhaul of the web interface, more granular RBAC, and a dedicated security hardening pass. The full changelog is on the GitHub release page.

## Thunderbird policy type

Mozilla Thunderbird can now be managed on enrolled desktops using the same mechanism used for Firefox ESR. The agent writes the policies.json file that Thunderbird expects, merged from all linked policies; removing the last policy restores the original file. Flatpak installations are detected and applied alongside RPM/DEB installations, and the managed file is protected by the tamper watchdog — external edits are detected and immediately restored. The web interface features a full policy editor with the entire Thunderbird policy catalog.

## Microsoft Edge for Business policy type

For fleets running Edge on Linux, the agent writes bor_managed.json into each of Edge's managed policy directories and cleans it from all directories when the last linked policy is removed. The web interface provides a tree-based editor with the Edge policy catalog, JSON validation, and a configuration preview before enabling.

## Firewalld zone policy type

The new Firewalld policy type manages firewalld zones on enrolled nodes: services, ports, forward ports, rich rules, masquerading, interfaces, sources, and the zone target. The agent writes zone XML to /etc/firewalld/zones/, validates with firewall-cmd --check-config, and reloads firewalld. Like all other managed files, zone files are protected against tampering.

## Polkit: variable conditions

Polkit rules now support variable conditions via action.lookup(), allowing a rule to match action variables — for example, allowing mounts only for removable drives. Also fixed: multiple action IDs in a rule are now correctly joined with ||.

## Per-action RBAC

User and role administration is now protected by per-action permissions instead of a single generic permission, allowing more granular delegation of administrative tasks.

## Web interface overhaul

A complete modernization pass over the PatternFly 6 interface, spanning multiple UX sprints. The dashboard shows the new look — grouped side navigation, a single left-aligned page title, and stat tiles that lead to pre-filtered lists: click Offline and you land on the Nodes page already filtered for offline nodes.

Highlights include: URL routing — every page has a real URL with working back/forward buttons and deep links; expired sessions redirect to login; a global error boundary prevents white-screen crashes. The policy editor is now a routed page (/policies/:id/edit) instead of nested modals. Policy safety rails — protection of unsaved changes, confirmation for destructive type changes, JSON validation for Chrome/Edge values, a read-only Configuration view for released policies, and configuration previews in tree editors. Scalable lists — server-side pagination, filtering, and sorting for Nodes and Compliance; search, sorting, and empty states on all list pages. Protection against destructive actions — type-to-confirm dialogs for all resource deletions, plus server-side protections that prevent deleting, disabling, or demoting the last Super Admin. Accessibility (WCAG 2.2 AA) — accessible tree roles in policy editors, aria-live status messages, focus ring, and dark/high-contrast mode fixes via PatternFly 6 design tokens, and an accessibility lint gate in CI.

The policy editor is now a full-width routed page instead of stacked modals, with room for the tree-based editors behind each policy type. Node and compliance lists are paginated, filtered, and sorted server-side, so fleets with thousands of nodes remain fast.

Additionally, several quality-of-life improvements: policies can be released/unreleased directly from the list view, backup codes for MFA can be copied or downloaded, the login form gained a password reveal toggle and Caps Lock hint, and the sidebar is now grouped into Fleet / Policy / System.

## Proto-driven policy catalogs

The Firefox, Thunderbird, Chrome, and Edge policy catalogs shown in the web interface are now generated from protobuf annotations — a single source of truth shared between server, agent, and frontend.

## Security hardening

This release includes a dedicated hardening pass: agent identity is now strictly bound to the mTLS client certificate, and MFA/RBAC enforcement paths were hardened on the server. Legacy TOTP secrets encrypted with SHA-256 are transparently migrated to HKDF-derived encryption on first read. The Ubuntu PPA and Fedora COPR repository import helpers now block redirect-based SSRF; only allowlisted redirect targets are followed. The audit log CSV export is protected against spreadsheet formula injection. The auto-generated initial admin password is no longer printed to the server log (where it would land in journald or centralized logging); it is written to a root-only file. The server TLS certificate is automatically regenerated when its SANs no longer match the configured hostnames. All open Dependabot alerts were resolved, including the react-router RSC CSRF advisory (GHSA-qwww-vcr4-c8h2).

## Platform updates

The frontend moved to React 19.2 and react-router 8.3, with TypeScript type checking now enforced in CI. Server and agent dependencies were updated, including gRPC 1.82.1 and golang.org/x/crypto 0.52.0.

## Upgrade notes

Agents must be updated to v0.8.0 to apply the new Thunderbird, Edge, and Firewalld policy types; older agents ignore policy types they don't understand. The protobuf policy schema gained thunderbird.proto and firewalld.proto and extends the polkit and edge messages — regenerate any external tooling built against proto/policy/. Frontend development now requires Node.js 22.22+.

## Download

Packages for Debian/Ubuntu, RHEL/Fedora/SUSE, Alpine Linux, and Arch Linux on x86_64, aarch64, and ppc64le are available on the Download page.
