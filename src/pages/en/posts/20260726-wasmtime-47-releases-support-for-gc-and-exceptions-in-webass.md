---
layout: ../../../layouts/PostLayout.astro
title: 'Wasmtime 47 Releases Support for GC and Exceptions in WebAssembly'
date: 2026-07-26
category: 'Development'
lang: "en"
excerpt: "Wasmtime version 47 brings GC and exceptions by default, expanding the reach of WebAssembly to more programming languages."
source: 'https://bytecodealliance.org/articles/wasmtime-gc'
heroImage: "/hero/wasmtime-47-libera-suporte-a-gc-e-excecoes-na-webassembly.jpg"
hero_credit: "Imagem conceitual gerada por IA (Ideogram)"
---
## Wasmtime 47 Expands WebAssembly with GC and Exception Support

According to bytecodealliance.org, version 47 of Wasmtime, a runtime for WebAssembly, now comes with Garbage Collection (GC) and exception support enabled by default. This update is a milestone in the evolution of WebAssembly, allowing more languages to benefit from this technology.

### What is Wasmtime?

Wasmtime is a runtime for WebAssembly known for its speed, security, and portability. Designed to be standalone, lightweight, and easy to integrate, Wasmtime is maintained by a team committed to open standards, actively participating in the standardization of Wasm.

### Wasm GC Proposal: Support for High-Level Languages

Initially, older versions of WebAssembly did not offer efficient support for high-level languages with object data models and references. This led to the accumulation of garbage collectors within .wasm binaries, resulting in larger and less efficient files. The Wasm GC proposal solves these problems by allowing Wasm programs to define their own struct and array types, as well as subtype relationships. With this, programs do not need to handle the lifetime management of instances of these types or deallocate them manually; the responsibility falls on the runtime.

This paves the way for more languages to use WebAssembly more efficiently and simply. An example is the definition of a node type for a binary tree in Wasm:

```
(rec
 (type $node (struct
  (field $key (mut f64))
  (field $left (mut (ref null $node)))
  (field $right (mut (ref null $node)))
  (field $value (mut (ref null $payload)))
 ))
)
```

Creating new instances can be done with `struct.new $node` and accessing fields via `struct.get $node $key` and `struct.set $node $left`.

### Exception Proposal in Wasm

The exception proposal in Wasm has similar goals to GC for languages that use exceptions, aiming for efficient exception support in WebAssembly. Without this proposal, toolchains would have to implement custom calling conventions that return not only function results but also whether the function returned normally or threw an exception. With the exception proposal, this is resolved using `throw` and `try/catch` constructs, resulting in faster execution and smaller .wasm files.

### GC Implementation in Wasmtime

Wasmtime uses a Cheney-style garbage collector, which copies semi-spaces over time. The GC heap is divided into two halves: the 'active' semi-space, where new objects are allocated, and the 'idle' semi-space. During collection, active objects are copied from the idle space to the new active space, and all GC root references (such as active references within Wasm stack frames) are updated to the new locations.

The implementation reuses WebAssembly linear memories to implement and sandbox the GC heap. A reference to a GC object is not a native pointer but a 32-bit index into the underlying GC linear memory heap. This brings benefits in terms of security, speed, and portability.

To reinforce confidence in the collector's correctness, the team extended the fuzzing infrastructure to test Wasm's GC, including tools for generating Wasm programs that use GC, as well as tools to detect heap corruption due to errors in the collector or compiler optimizations.

### Performance and Next Steps

The initial focus was on collector correctness, with less attention to performance, which has not yet benefited from decades of performance engineering like other collectors. Wasmtime is designed to create many small, disposable Wasm instances, processing small tasks before being discarded. The team is working on extending the compiler's alias analysis optimizations with GC type information.

The next milestone is prototyping GC integration with the component model, which will promote garbage-collected languages to first-class citizens in the component ecosystem.

### Conclusion

The Wasmtime team is excited to have reached this important milestone. They invite users to test GC and exception support in Wasmtime and share their experiences.