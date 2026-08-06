---
layout: ../../../layouts/PostLayout.astro
title: 'BitNet on a BBC Micro: language model in 13KB of weights'
date: 2026-08-06
category: 'Hardware and Infrastructure'
lang: "en"
excerpt: "Project runs an autoregressive BitNet model on a 1980 BBC Micro, with 13KB of weights and inference code in C."
source: 'https://mattbeton.com/blog/bitnet-6502.html'
heroImage: "/hero/bitnet-em-um-bbc-micro-modelo-de-linguagem-em-13kb-de-pesos.jpg"
---
The MOS 6502, an 8-bit processor released in 1975, was the brain of legendary machines like the BBC Micro and the Apple II. Now, a bold project has managed to make this chip run a modern autoregressive language model, with weights quantized to just 13KB.

According to mattbeton.com, the author had access to his father's BBC Model B from the 80s and decided to test the limits of the hardware with current machine learning techniques. The challenge was enormous: the model and inference code needed to fit in 25KB of user memory.

The final configuration used 9KB for the inference code and 13KB for the model weights. The processor, which only operates with 8-bit integers and has no multiplication instruction, required creative solutions.

The inference code was written in C and compiled with CC65, which generates code for the 6502 instruction set. The binary trained on a MacBook was transferred to the BBC Micro via PlayUEF and a homemade 3.5mm to tape cable, convincing the computer that it was reading a cassette tape.

The sim65 emulator allowed verifying parity between the C binary and the reference Python implementation. The complete inference engine was also tested on the jsbeeb emulator before running on real hardware.

The project is open: it is possible to run the model in the browser, with a virtual BBC Micro that loads the UEF image directly from GitHub and types the commands automatically. Text generation takes a few minutes.

## Modeling

The goal was to build an autoregressive language model, which produces tokens one by one, similar to frontier models. The model's function is to predict the next token from context, like in 'the cat sat on the ma' → 't'.

In large-scale models, a token would be a word or subword. In this project, the vocabulary was reduced to 26 letters plus the space character. A larger vocabulary would consume many parameters with the encoders/decoders.

An embedding layer maps tokens to a hidden dimension of 56. Then, mixing layers model recurrent dependencies between tokens.

## BitNet: ternary quantization

BitNet was introduced as a method for fast inference on CPU. It quantizes weights to the ternary set {-1, 0, 1}, turning matrix multiplications into sequences of additions and subtractions.

On the 6502, an 8×8 multiplication with accumulation costs about 150 clock cycles. With ternary weights, the same calculation takes only 30 cycles, making inference much faster.

Each BitNet parameter occupies only 1.58 bits (log2(3)), versus 8 bits for an int8 or 32 for a float32. It is possible to pack 4 or 5 parameters per byte. The project opted for 4 parameters per byte, since packing with 5 would require divisions by 3, which are not native on the 6502 and would make decompression slow.

With 13KB and 4 parameters per byte, 52 thousand BitNet parameters fit. Experimental validation showed that more parameters with lower quantization offer better cost-benefit than few high-precision parameters.

Training uses the straight-through estimator trick: the weight is stored in float32, quantized to ternary in the forward pass, but gradients flow in full precision in the backward pass. The final model head (LM head) is kept in int4 for better probability distribution over the vocabulary.

## Why not attention?

Traditional models like GPT-3 use attention to model sequential relationships. Attention allows exact recall of each token, but requires a computational cost that grows with context size. On the 6502, with only 32KB of RAM, the KV cache would grow quickly, consuming space reserved for weights.

For this project's dataset, short-term recall is enough to learn to spell words and produce simple grammatical forms. Attention is not necessary.

## Recurrent models

Architectures like SSMs (S4, Mamba) and RNNs (GRU, LSTM) have the property that each forward pass has the same computational shape, with a fixed state h. This makes them much more suitable for inference with limited memory.

Why not GRU? Recurrent models suffer from the vanishing/exploding gradient problem. Errors accumulate with sequence length, and in the BitNet regime stability is hard to achieve. The author reports divergence in all training attempts with GRU.

Mamba, on the other hand, does a scalar update per channel, with decay calculated at inference, always less than 1, making explosion impossible. Therefore, Mamba was chosen as the target model.

## Activations and 16-bit accumulation

Activations are stored in 8 bits. Each accumulated term has magnitude ≤ 128, allowing accumulation of up to 256 terms in 16 bits without overflow.

The project is an impressive demonstration that it is possible to run modern language models on 50-year-old hardware, with quantization techniques and efficient architectures. A proof that AI can be democratic and accessible, even on the humblest devices.
