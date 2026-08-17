---
layout: ../../../layouts/PostLayout.astro
title: 'Domínio à venda? Agora o DNS avisa com registro _for-sale'
date: 2026-08-17
category: 'Desenvolvimento'
lang: "pt-br"
excerpt: "Novo padrão RFC 10023 permite anunciar venda de domínio via DNS, sem derrubar o site. Saiba como funciona."
source: 'https://specification.website/spec/foundations/for-sale-dns/'
heroImage: "/hero/dominio-a-venda-agora-o-dns-avisa-com-registro-for-sale.jpg"
hero_credit: "Photo by Markus Winkler on Pexels"
hero_legenda: "Domínio à venda? Agora o DNS avisa com registro _for-sale"
---
Vender um domínio sempre foi um jogo de adivinhação. O interessado não tem como saber se o dono aceita vender, e o dono não recebe as propostas certas. Agora, um novo padrão promete mudar isso: o registro DNS `_for-sale`.

A ideia é simples e elegante. Em vez de estacionar o domínio ou colocar uma página de vendas, o proprietário publica um registro TXT especial no DNS. Esse registro avisa a corretores e serviços de disponibilidade que o domínio está à venda, sem afetar o site que já está no ar.

O padrão foi definido pela RFC 10023, publicada em julho de 2026, e registrado na IANA. O nome `_for-sale` é um nó reservado na árvore do DNS. Qualquer domínio pode usá-lo, desde que o registro seja publicado no nível correto.

## Como funciona na prática

O registro é um TXT simples, como este:

```
_for-sale IN TXT 'v=FORSALE1;furi=https://example.com/for-sale'
```

A primeira parte, `v=FORSALE1`, é obrigatória e diferencia o registro de qualquer outro TXT que um wildcard possa ter criado. Depois, vem no máximo um par `tag=valor`. As tags possíveis são:

- `ftxt`: texto livre, como 'Eligibility criteria apply.'
- `furi`: URI de contato ou informação, como `mailto:hq@example.com`
- `fval`: preço pedido, com código de moeda e valor, como `EUR2500.00`
- `fcod`: código proprietário, por acordo prévio

Uma regra importante: cada registro só pode ter um par. Se você quiser publicar preço e contato, use dois registros no mesmo RRset. Eles não se concatenam, como no SPF.

## A diferença para estacionar

Muita gente pode confundir com estacionamento de domínio, mas é o oposto. Estacionar substitui o site por uma página de vendas, o que afasta os visitantes que o domínio ainda tem. O `_for-sale` fica ao lado do site ativo, no DNS, e o navegador nem o vê. A homepage continua no ar, o e-mail continua funcionando, e o registro pode ser adicionado ou removido quando quiser.

A RFC 10023 deixa isso explícito: a convenção foi desenhada para funcionar enquanto o domínio está em uso ativo.

Também não é a mesma coisa que dados de registro. WHOIS e RDAP respondem 'este nome está registrado?', mas um nome registrado pode estar à venda, e um não registrado pode não valer a pena. Essa lacuna é exatamente o que a convenção quer preencher.

## Por que isso importa

O sinal que um dono de domínio mais quer enviar é o que nunca teve canal. Se você está disposto a vender, o comprador interessado não tem como saber, a não ser por um e-mail frio para um contato WHOIS que a privacidade provavelmente removeu. Enquanto isso, as consultas que seriam bem-vindas nunca chegam, e as que chegam são indistinguíveis de spam.

Colocar o sinal no DNS, em vez da página, é o que o torna útil para quem pode agir. Um corretor ou serviço de disponibilidade que verifica um nome já resolve o DNS; uma consulta extra diz o que a página renderizada não diria. É verificável externamente, custa um registro e não oferece risco ao site.

## Como implementar

A implementação é direta: publique um único registro TXT no nó `_for-sale` da zona que você está vendendo, e apenas enquanto a venda for real.

```
; Texto livre
_for-sale IN TXT 'v=FORSALE1;ftxt=Serious offers only'

; URI para negociar
_for-sale IN TXT 'v=FORSALE1;furi=https://example.com/fs?d=eHl6'

; Preço pedido
_for-sale IN TXT 'v=FORSALE1;fval=USD12500'
```

Algumas regras valem ouro:

- A tag de versão é obrigatória e sensível a maiúsculas: todo registro começa com `v=FORSALE1;`.
- Um par por registro. Para publicar preço e contato, use dois registros no mesmo RRset.
- Uma string por registro, no máximo 255 octetos.
- Mantenha o TTL em 3600 segundos ou menos. Um registro obsoleto anunciando um preço retirado é pior que nenhum.
- Coloque-o em um nó folha. `_for-sale.example.com` é válido, mas `xyz._for-sale.example.com` não é. Registros sob `.arpa` devem ser ignorados.
- Remova-o quando o domínio não estiver mais à venda. Não existe valor 'não está à venda'; a ausência é o único 'não'.

Se possível, assine a zona com DNSSEC. Um registro TXT não assinado, afirmando que seu domínio está à venda com preço e contato, é algo confortável para outra pessoa forjar.

O site specification.website, que publicou a especificação, não usa o recurso: ele não está à venda.

## Erros comuns

- Colocar vários pares em um único registro. `'v=FORSALE1;fval=EUR2500;furi=https://…'` parece razoável, mas não é o formato definido.
- Publicar por aspiração. O indicador é só para domínios realmente disponíveis. Não é um banner de marketing, e um registro que existe para atrair consultas é um abuso que a RFC condena.
- Achar que obriga alguém. Publicar o registro não compromete o titular a vender, e o preço anunciado é indicativo. A RFC instrui os processadores a exibir um aviso e nunca tratar como compromisso de compra.
- Esperar que um wildcard cubra a zona inteira. `_for-sale.*.example.com` não é um wildcard válido.
- Confiar no conteúdo. `ftxt` é texto controlado pelo atacante e `furi` é uma URI controlada. Sanitize antes de exibir — o exemplo da própria RFC é `<script>...</script>` — e nunca navegue automaticamente para um `furi` sem confirmação explícita.

## Verificação

Para verificar se um domínio está à venda, use:

```
dig +short TXT _for-sale.example.com
```

A resposta deve começar com `v=FORSALE1;` e ter no máximo um par por string. O TTL deve ser 3600 ou menor. Se a zona for assinada, `dig +dnssec TXT _for-sale.example.com` deve retornar um RRSIG válido. E o registro precisa resolver: durante períodos de redenção ou `pendingDelete`, ou se a validação DNSSEC falhar, o sinal desaparece silenciosamente.

O `_for-sale` é uma ferramenta simples, mas poderosa, para um mercado que sempre foi opaco. Com um registro TXT, o DNS finalmente ganha uma voz para dizer: 'este domínio está à venda'.
