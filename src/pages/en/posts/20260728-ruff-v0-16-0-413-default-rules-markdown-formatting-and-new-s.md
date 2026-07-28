---
layout: ../../../layouts/PostLayout.astro
title: 'Ruff v0.16.0: 413 default rules, Markdown formatting, and new suppressors'
date: 2026-07-28
category: 'Development'
lang: "en"
excerpt: "Ruff v0.16.0 raises default rules from 59 to 413, formats Python blocks in Markdown, and adds suppression comments."
source: 'https://astral.sh/blog/ruff-v0.16.0'
heroImage: "/hero/ruff-v0-16-0-413-regras-padrao-formatacao-markdown-e-novos-s.jpg"
---
Astral has released Ruff v0.16.0, the Python linting and formatting tool written in Rust. The new version brings significant changes, including a much larger set of default rules, formatting of Python code blocks in Markdown, and new diagnostic suppression mechanisms.

According to Astral, Ruff now enables 413 rules by default, up from just 59 in previous versions. Since the default set was last updated in v0.1.0, the total number of rules has grown from 708 to 968. Many of these rules detect serious syntax errors and runtime errors but were not enabled by default. With this change, Ruff now warns about these issues without additional configuration.

Among the rules now active by default are those from the popular linters flake8-bugbear (B) and pyupgrade (UP), as well as rules from Ruff's own RUF category. Those who want to revert to the old set can use the configuration:

```
[lint]
select = ['E4', 'E7', 'E9', 'F']
```

Astral sees this change as part of a rule recategorization effort, with more updates planned.

**Markdown block formatting**

Ruff v0.16 can now format Python code blocks embedded in Markdown files. It recognizes blocks with info strings like `python`, `py`, `python3`, `py3`, `pyi`, or `pycon`. `pyi` blocks are formatted as stub files, `pycon` as REPL sessions, and others as normal Python files. Formatting also works in Quarto notebooks, as long as the `.qmd` extension is mapped.

To suppress formatting in specific regions, you can use HTML comments `<!-- fmt: off -->` and `<!-- fmt: on -->`. To completely disable formatting in Markdown, use `extend-exclude` with glob `*.md`.

**New suppression comments**

Version v0.16 introduces two new types of suppression comments: `ruff: ignore` and `ruff: file-ignore`. `ruff: ignore` suppresses a diagnostic on the same line or the next logical line, similar to `noqa`. `ruff: file-ignore` suppresses diagnostics for the entire file, like `ruff: noqa`. Both can include an optional explanation.

Example of `ruff: ignore`:

```python
import math # ruff: ignore[F401]
# ruff: ignore[N803]
def foo(legacyArg1, legacyArg2, legacyArg3, legacyArg4): ...
```

The new comment can be added automatically with the `--add-ignore` flag. In preview, comments accept rule names instead of codes.

**Fixes shown in output**

Now both `check` and `format --check` show the diff of fixes in standard output. Previously, `--diff` was separate and suppressed diagnostics. In v0.16, fixes appear below the help subdiagnostic. `format --check` also now supports all linter output formats, including JSON and formats for GitHub and GitLab.

There was a minor change in JSON output: fields like `filename`, `location`, `end_location`, and `fix.edits[].location` can now be `null` instead of default values.

**Rule stabilizations**

Several rules have left preview and been stabilized, including: `airflow3-incompatible-function-signature` (AIR303), `missing-copyright-notice` (CPY001), `unnecessary-from-float` (FURB164), `sorted-min-max` (FURB192), `implicit-string-concatenation-in-collection-literal` (ISC004), `log-exception-outside-except-handler` (LOG004), `invalid-bool-return-type` (PLE0304), `too-many-positional-arguments` (PLR0917), `stop-iteration-return` (PLR1708), `none-not-at-end-of-union` (RUF036), `access-annotations-from-class-dict` (RUF063), and `duplicate-entry-in-dunder-all` (RUF068).

Additionally, behaviors like `blind-except` (BLE001) are now suppressed when the exception is logged with logging methods other than `critical`, `error`, or `exception`. The rule `future-required-type-annotation` (FA102) now checks APIs compatible with PEP 585, and the `gettext` rules (INT001-003) now recognize assignments to `builtins._`.

Astral thanked the community for feedback during the preview period and reaffirmed its commitment to continuous improvement of the tool.
