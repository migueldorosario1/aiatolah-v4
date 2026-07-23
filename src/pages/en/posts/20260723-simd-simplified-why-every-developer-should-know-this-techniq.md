---
layout: ../../../layouts/PostLayout.astro
title: 'SIMD Simplified: Why Every Developer Should Know This Technique'
date: 2026-07-23
heroImage: "/hero/simd-simplificado-por-que-todo-desenvolvedor-deveria-conhece.jpg"
hero_credit: "Wikimedia Commons (CC BY-SA 4.0) — Jacek Halicki"
category: 'Development'
lang: "en"
excerpt: "Mitchell Hashimoto shows that SIMD isn't just for experts: with 5 simple steps, any dev can speed up loops by up to 16x."
source: 'https://mitchellh.com/writing/everyone-should-know-simd'
---
SIMD has a reputation for being complex. Many experienced software engineers dismiss it as something difficult to learn or a niche optimization, useful only for high-performance software.

According to Mitchell Hashimoto, in a post on mitchellh.com, this view is wrong. SIMD can be simple to understand, and the common pattern of 'processing N values at a time' always follows the same general structure. Once you learn the basics, writing SIMD code becomes almost as easy as a for loop.

## What is SIMD?

SIMD allows a CPU to operate on multiple values in parallel. Instead of comparing one byte at a time, a CPU can compare 4, 8, or more bytes with a single instruction.

Loops like `for (byte in bytes)` can be transformed into `for (8 byte chunk in bytes)`, resulting in localized speedup directly proportional to the parallelism: 4x, 8x, or faster.

The only real requirement is to regularly process a large enough number of bytes. If the loop iterates over only a few dozen bytes, it's not worth it. But if it's hundreds, thousands, or millions of bytes, the gain is enormous.

## The Common Structure

Typical SIMD code follows five steps:

1. Broadcast necessary constants and initialize vector accumulators, if any.
2. Loop over the input, one vector-width block at a time.
3. Perform the comparison or arithmetic on all lanes in parallel.
4. Reduce or store the vector result as needed.
5. Handle the remaining elements with a scalar tail (normal loop for the rest).

## Real Example from Ghostty

Hashimoto shows a real example from Ghostty, his terminal emulator. The original scalar loop is one line:

```zig
while (end < cps.len and cps[end] > 0xF) end += 1;
```

The SIMD version, with 12 additional lines, can improve throughput by up to 4x with ARM NEON (including Apple Silicon), 8x with AVX2 (modern x86), and 16x with AVX-512 (some Intel and AMD Zen 4+).

In real terminal throughput tests on an Intel desktop with AVX2, the speedup was about 5x.

## Step by Step

**Step 1:** Broadcast constants. Define the vector type with `@Vector(lanes, u32)` and use `@splat(0xF)` to copy the value 0xF to all lanes.

**Step 2:** Loop over one full vector at a time. With `while (end + lanes <= cps.len)`, it only enters the loop when there are enough values to fill a vector. Each iteration, `end += lanes` advances by the number of lanes.

**Step 3:** SIMD operation. The comparison `values > threshold` is done on all lanes in parallel, in a single CPU instruction.

**Step 4:** Reduce the result. The boolean vector is reduced to find the position of the first value that does not meet the condition, using `@reduce(.And, ...)` and `@ctz`.

**Step 5:** Scalar tail. The original loop processes the remaining elements that don't fit into a full vector.

## Conclusion

SIMD doesn't have to be a big deal. With the five-step structure, any developer can apply SIMD to common loops and get significant performance gains. The key is to recognize batch processing patterns and apply the technique where there is enough data volume.
