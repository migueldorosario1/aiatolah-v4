---
layout: ../../../layouts/PostLayout.astro
title: 'Ruff v0.16.0: 413 regras padrão, formatação Markdown e novos supressores'
date: 2026-07-28
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Ruff v0.16.0 eleva regras padrão de 59 para 413, formata blocos Python em Markdown e adiciona comentários de supressão."
source: 'https://astral.sh/blog/ruff-v0.16.0'
heroImage: "/hero/ruff-v0-16-0-413-regras-padrao-formatacao-markdown-e-novos-s.jpg"
---
A Astral lançou o Ruff v0.16.0, a ferramenta de linting e formatação Python escrita em Rust. A nova versão traz mudanças significativas, incluindo um conjunto de regras padrão muito maior, formatação de blocos de código Python em Markdown e novos mecanismos de supressão de diagnósticos.

Segundo a Astral, o Ruff agora habilita 413 regras por padrão, contra apenas 59 nas versões anteriores. Desde que o conjunto padrão foi atualizado pela última vez na v0.1.0, o número total de regras cresceu de 708 para 968. Muitas dessas regras detectam erros graves de sintaxe e erros de tempo de execução, mas não eram ativadas por padrão. Com a mudança, o Ruff passa a alertar sobre esses problemas sem necessidade de configuração adicional.

Entre as regras agora ativas por padrão estão as dos populares linters flake8-bugbear (B) e pyupgrade (UP), além de regras da própria categoria RUF. Quem quiser reverter ao conjunto antigo pode usar a configuração:

```
[lint]
select = ['E4', 'E7', 'E9', 'F']
```

A Astral vê essa mudança como parte de um esforço de recategorização de regras, com mais novidades previstas.

**Formatação de blocos Markdown**

O Ruff v0.16 agora consegue formatar blocos de código Python embutidos em arquivos Markdown. Ele reconhece blocos com info strings como `python`, `py`, `python3`, `py3`, `pyi` ou `pycon`. Blocos `pyi` são formatados como arquivos stub, `pycon` como sessões REPL, e os demais como arquivos Python normais. A formatação também funciona em notebooks Quarto, desde que a extensão `.qmd` esteja mapeada.

Para suprimir a formatação em regiões específicas, é possível usar comentários HTML `<!-- fmt: off -->` e `<!-- fmt: on -->`. Para desabilitar completamente a formatação em Markdown, use `extend-exclude` com glob `*.md`.

**Novos comentários de supressão**

A versão v0.16 introduz dois novos tipos de comentários de supressão: `ruff: ignore` e `ruff: file-ignore`. O `ruff: ignore` suprime um diagnóstico na mesma linha ou na linha lógica seguinte, similar ao `noqa`. Já o `ruff: file-ignore` suprime diagnósticos para o arquivo inteiro, como o `ruff: noqa`. Ambos podem incluir uma explicação opcional.

Exemplo de `ruff: ignore`:

```python
import math # ruff: ignore[F401]
# ruff: ignore[N803]
def foo(legacyArg1, legacyArg2, legacyArg3, legacyArg4): ...
```

O novo comentário pode ser adicionado automaticamente com a flag `--add-ignore`. Em preview, os comentários aceitam nomes de regras em vez de códigos.

**Fixes exibidos na saída**

Agora, tanto `check` quanto `format --check` mostram o diff das correções na saída padrão. Antes, o `--diff` era separado e suprimia os diagnósticos. Em v0.16, as correções aparecem abaixo do subdiagnóstico de ajuda. O `format --check` também passou a suportar todos os formatos de saída do linter, incluindo JSON e formatos para GitHub e GitLab.

Houve uma pequena mudança na saída JSON: campos como `filename`, `location`, `end_location` e `fix.edits[].location` podem agora ser `null` em vez de valores padrão.

**Estabilizações de regras**

Diversas regras saíram do preview e foram estabilizadas, entre elas: `airflow3-incompatible-function-signature` (AIR303), `missing-copyright-notice` (CPY001), `unnecessary-from-float` (FURB164), `sorted-min-max` (FURB192), `implicit-string-concatenation-in-collection-literal` (ISC004), `log-exception-outside-except-handler` (LOG004), `invalid-bool-return-type` (PLE0304), `too-many-positional-arguments` (PLR0917), `stop-iteration-return` (PLR1708), `none-not-at-end-of-union` (RUF036), `access-annotations-from-class-dict` (RUF063) e `duplicate-entry-in-dunder-all` (RUF068).

Além disso, comportamentos como `blind-except` (BLE001) agora são suprimidos quando a exceção é registrada com métodos de logging que não sejam `critical`, `error` ou `exception`. A regra `future-required-type-annotation` (FA102) passou a verificar APIs compatíveis com PEP 585, e as regras de `gettext` (INT001-003) agora reconhecem atribuições a `builtins._`.

A Astral agradeceu o feedback da comunidade durante o período de preview e reforçou o compromisso com a melhoria contínua da ferramenta.
