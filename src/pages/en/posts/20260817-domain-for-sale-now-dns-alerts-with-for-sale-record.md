---
layout: ../../../layouts/PostLayout.astro
title: 'Domain for sale? Now DNS alerts with _for-sale record'
date: 2026-08-17
category: 'Development'
lang: "en"
excerpt: "New RFC 10023 standard allows announcing domain sale via DNS without taking down the site. Learn how it works."
source: 'https://specification.website/spec/foundations/for-sale-dns/'
heroImage: "/hero/dominio-a-venda-agora-o-dns-avisa-com-registro-for-sale.jpg"
hero_credit: "Photo by Markus Winkler on Pexels"
hero_legenda: "Domínio à venda? Agora o DNS avisa com registro _for-sale"
---
Selling a domain has always been a guessing game. The interested party has no way to know if the owner is willing to sell, and the owner doesn't receive the right offers. Now, a new standard promises to change that: the `_for-sale` DNS record.

The idea is simple and elegant. Instead of parking the domain or putting up a sales page, the owner publishes a special TXT record in DNS. This record alerts brokers and availability services that the domain is for sale, without affecting the site that is already live.

The standard was defined by RFC 10023, published in July 2026, and registered with IANA. The name `_for-sale` is a reserved node in the DNS tree. Any domain can use it, as long as the record is published at the correct level.

## How it works in practice

The record is a simple TXT, like this:

```
_for-sale IN TXT 'v=FORSALE1;furi=https://example.com/for-sale'
```

The first part, `v=FORSALE1`, is mandatory and distinguishes the record from any other TXT that a wildcard might have created. Then, at most one `tag=value` pair follows. The possible tags are:

- `ftxt`: free text, like 'Eligibility criteria apply.'
- `furi`: contact or information URI, like `mailto:hq@example.com`
- `fval`: asking price, with currency code and value, like `EUR2500.00`
- `fcod`: proprietary code, by prior agreement

An important rule: each record can only have one pair. If you want to publish price and contact, use two records in the same RRset. They do not concatenate, as in SPF.

## The difference from parking

Many people might confuse this with domain parking, but it's the opposite. Parking replaces the site with a sales page, which drives away visitors that the domain still has. The `_for-sale` sits alongside the active site, in DNS, and the browser doesn't even see it. The homepage stays up, email keeps working, and the record can be added or removed whenever you want.

RFC 10023 makes this explicit: the convention was designed to work while the domain is in active use.

It's also not the same as registration data. WHOIS and RDAP answer 'is this name registered?', but a registered name might be for sale, and an unregistered one might not be worth it. This gap is exactly what the convention aims to fill.

## Why it matters

The signal that a domain owner most wants to send is the one that never had a channel. If you're willing to sell, the interested buyer has no way to know, except through a cold email to a WHOIS contact that privacy likely removed. Meanwhile, the inquiries that would be welcome never arrive, and the ones that do arrive are indistinguishable from spam.

Putting the signal in DNS, instead of on the page, is what makes it useful for those who can act. A broker or availability service that checks a name already resolves DNS; an extra query tells what the rendered page wouldn't. It's externally verifiable, costs a record, and poses no risk to the site.

## How to implement

The implementation is straightforward: publish a single TXT record at the `_for-sale` node of the zone you're selling, and only while the sale is real.

```
; Free text
_for-sale IN TXT 'v=FORSALE1;ftxt=Serious offers only'

; URI to negotiate
_for-sale IN TXT 'v=FORSALE1;furi=https://example.com/fs?d=eHl6'

; Asking price
_for-sale IN TXT 'v=FORSALE1;fval=USD12500'
```

Some rules are worth their weight in gold:

- The version tag is mandatory and case-sensitive: every record starts with `v=FORSALE1;`.
- One pair per record. To publish price and contact, use two records in the same RRset.
- One string per record, at most 255 octets.
- Keep the TTL at 3600 seconds or less. An obsolete record announcing a withdrawn price is worse than none.
- Place it at a leaf node. `_for-sale.example.com` is valid, but `xyz._for-sale.example.com` is not. Records under `.arpa` should be ignored.
- Remove it when the domain is no longer for sale. There is no 'not for sale' value; absence is the only 'no'.

If possible, sign the zone with DNSSEC. An unsigned TXT record claiming your domain is for sale with price and contact is something someone else can comfortably forge.

The site specification.website, which published the specification, does not use the feature: it is not for sale.

## Common mistakes

- Putting multiple pairs in a single record. `'v=FORSALE1;fval=EUR2500;furi=https://…'` seems reasonable, but it's not the defined format.
- Publishing aspirationally. The indicator is only for domains actually available. It's not a marketing banner, and a record that exists to attract inquiries is an abuse that the RFC condemns.
- Thinking it obligates anyone. Publishing the record does not commit the holder to sell, and the announced price is indicative. The RFC instructs processors to display a disclaimer and never treat it as a purchase commitment.
- Expecting a wildcard to cover the entire zone. `_for-sale.*.example.com` is not a valid wildcard.
- Trusting the content. `ftxt` is attacker-controlled text and `furi` is a controlled URI. Sanitize before displaying — the RFC's own example is `<script>...</script>` — and never automatically navigate to a `furi` without explicit confirmation.

## Verification

To check if a domain is for sale, use:

```
dig +short TXT _for-sale.example.com
```

The response should start with `v=FORSALE1;` and have at most one pair per string. The TTL should be 3600 or lower. If the zone is signed, `dig +dnssec TXT _for-sale.example.com` should return a valid RRSIG. And the record must resolve: during redemption periods or `pendingDelete`, or if DNSSEC validation fails, the signal silently disappears.

The `_for-sale` is a simple but powerful tool for a market that has always been opaque. With a TXT record, DNS finally gains a voice to say: 'this domain is for sale'.
