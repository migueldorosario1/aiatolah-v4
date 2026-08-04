---
layout: ../../../layouts/PostLayout.astro
title: 'Go 1.27 arrives with generic methods, UUID, and post-quantum signature'
date: 2026-08-04
category: 'Development'
lang: "en"
excerpt: "Go 1.27 brings generic methods, UUID, ML-DSA, allocation optimizations, and leaked goroutine profiling."
source: 'https://victoriametrics.com/blog/go-1-27/index.html'
heroImage: "/hero/go-1-27-chega-com-metodos-genericos-uuid-e-assinatura-pos-qu.jpg"
---
Go 1.27 is coming, and the VictoriaMetrics team has prepared an interactive tour with executable examples to show what's changing. The material, published on the company's blog, is based on the official release notes and the language's source code, licensed under BSD-3-Clause.

The highlight of the release is the ability for methods to declare their own type parameters, independent of the receiver. Previously, only top-level functions could be generic, which forced generic operations on a type to live as standalone functions.

Now, a method like `Map` can transform a `Box[int]` into a `Box[string]` directly. The tour example shows a box with value 21 being doubled and then converted to a string, resulting in `value=42`.

There is an important restriction: interfaces still cannot declare methods with type parameters, and a generic method cannot satisfy an interface. The compiler blocks this attempt with the error 'interface method must have no type parameters'.

Another novelty: in struct literals, the key can be any valid field selector, including promoted fields from embedded structs. Previously, to define a `User` with embedded `Base`, you had to write `User{Base: Base{ID: 7}, Name: 'Mittens'}`. Now, `User{ID: 7, Name: 'Mittens'}` works.

Function type inference has been generalized to all contexts where a generic function is used where a corresponding function type is expected. This includes conversions and composite literals, not just simple assignments. In the example, two generic functions `first` and `last` are placed in a slice of `func([]int) int` without manual instantiation.

The compiler now generates calls to memory allocation routines specialized by size, reducing the cost of some small allocations (less than 80 bytes) by up to 30%. The overall gain in programs with many allocations should be about 1%, at the cost of approximately 60 KB extra in the binary. To disable, use `GOEXPERIMENT=nosizespecializedmalloc` (removal planned for Go 1.28).

For modules with `go.mod` declaring Go 1.27 or higher, tracebacks now include goroutine labels from runtime/pprof in the header line. This helps distinguish identical goroutines in crash dumps, SIGQUIT traces, and `runtime.Stack` output. The feature can be turned off with `GODEBUG=tracebacklabels=0`.

The goroutine leak detector, which was experimental in Go 1.26, is now a regular profile: `runtime/pprof` exposes the `goroutineleak` profile, which runs a GC cycle to find permanently blocked goroutines. The classic example is a goroutine that sends to a channel that only it knows about, blocking forever.

The most anticipated novelty is the `crypto/mldsa` package, which implements ML-DSA, the post-quantum digital signature scheme specified in FIPS 204. It offers three parameter sets (MLDSA44, MLDSA65, and MLDSA87), balancing key/signature size and security level. Support also arrives in `crypto/x509` and `crypto/tls` (TLS 1.3).

Finally, Go gains a UUID package in the standard library, following RFC 9562, with cryptographically secure generation and direct comparability with `==`.

The VictoriaMetrics interactive tour is a handy way to get ahead of the changes. The examples are executable and show in practice how each feature works. It's worth checking out the full post on the company's blog.
