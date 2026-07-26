---
layout: ../../../layouts/PostLayout.astro
title: 'Postgres LISTEN/NOTIFY: Efficiency and Scale in Connectivity'
date: 2026-07-26
category: 'Hardware and Infrastructure'
lang: "en"
excerpt: "How Postgres LISTEN/NOTIFY achieved 60K writes per second with millisecond latency."
source: 'https://www.dbos.dev/blog/postgres-listen-notify-scalability'
heroImage: "/hero/postgres-listen-notify-eficiencia-e-escala-na-conectividade.jpg"
---
Recently, Postgres LISTEN/NOTIFY faced criticism for its alleged inability to scale, based on a popular blog. However, according to dbos.dev, these accusations are not entirely accurate. LISTEN/NOTIFY is a powerful tool that allows the use of the Postgres database for durable low-latency notifications, streams, and pub/sub.

**The Scalability Challenge**

Initially, the scalable performance of NOTIFY was considered counterintuitive and undocumented, due to the use of global locking. However, being counterintuitive does not mean it does not scale. dbos.dev details how to optimize streams with LISTEN/NOTIFY to an unprecedented scale, achieving 60K writes per second on a single Postgres server with millisecond latency.

**Designed for Low Latency**

The basic structure of Postgres-backed streams is simple: create a streams table where each chunk of the stream (for example, a response token from LLM) is a new row, and write to streams by inserting into this table. The challenging part is reading from the stream, as you do not know when the next chunk will arrive. One solution is polling, where each reader polls the end of the stream in search of new chunks. However, polling does not scale well.

**LISTEN/NOTIFY as a Solution**

The better solution is LISTEN/NOTIFY. This allows readers to wait for a lock waiting for a notification from the writer that a new chunk has been published to the stream. In this way, readers do not waste resources polling, but wake up immediately when a new stream chunk arrives.

**The Exclusive Lock of LISTEN/NOTIFY**

To understand the problem, it is necessary to examine how Postgres LISTEN/NOTIFY actually works. The reason for the low performance is that, in Postgres, confirming a transaction that calls NOTIFY requires taking an exclusive global lock. This lock is taken when the transaction begins to be confirmed and is only released when the transaction is fully confirmed and its content is discarded to disk with fsync().

**Optimizing LISTEN/NOTIFY**

To make streams with LISTEN/NOTIFY faster, we need to bypass this bottleneck. The key observation is that, for streams and for many other uses of LISTEN/NOTIFY, the notifications themselves are not a source of truth. Instead, they merely trigger a reader to check a database table (the true source of truth) for new data. As a result, notifications do not need to be globally ordered or perfectly durable, so we can optimize NOTIFY by storing notifications in memory and periodically releasing them in a single batch transaction, significantly reducing contention on the global lock.

**Encouraging Results**

Benchmarking of this optimized solution shows massively improved performance: in the presence of concurrent readers, we can perform up to 60K stream writes per second (20 times more than before) while still achieving 15-100ms latency. At peak throughput, the Postgres CPU is fully utilized, showing that the database is truly saturated rather than being blocked on contention.

*All benchmarking information is available on GitHub: [github.com/dbos-inc/dbos-postgres-benchmark](https://github.com/dbos-inc/dbos-postgres-benchmark)*
