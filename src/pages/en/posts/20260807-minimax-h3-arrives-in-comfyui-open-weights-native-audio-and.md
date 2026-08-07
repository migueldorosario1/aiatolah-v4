---
layout: ../../../layouts/PostLayout.astro
title: 'MiniMax H3 arrives in ComfyUI: open weights, native audio, and 2K video'
date: 2026-08-07
category: 'Models and Algorithms'
lang: "en"
excerpt: "MiniMax H3, an open-weights video model, now runs in ComfyUI with stereo audio and 2K output."
source: 'https://blog.comfy.org/p/minimax-h3-day-0-support-in-comfyui'
heroImage: "/hero/minimax-h3-chega-ao-comfyui-pesos-abertos-audio-nativo-e-vid.jpg"
hero_credit: "Photo by Google DeepMind on Pexels"
hero_legenda: "MiniMax H3 chega ao ComfyUI: pesos abertos, áudio nativo e vídeo 2K"
---
ComfyUI announced native support for MiniMax H3 on the same day as its release. The model comes with open weights and promises to run locally even on a 3060 GPU.

According to blog.comfy.org, the H3 is the third generation of MiniMax video models, following Hailuo 01 and Hailuo 02. It is also the first from the company released with open weights.

The model accepts text, image, video, or audio as input and generates video with real stereo sound, up to 2K, and clips up to 15 seconds. The audio is generated together with the video, in the same pass, not as post-processing.

## Key capabilities

The H3 supports text-to-video, image-to-video, first and last frame control, and reference-to-video. In the latter case, you can load reference images, video, or audio to maintain a subject, a movement, or a voice throughout the clip.

Multimodal understanding is the highlight. The model receives images, audio, and video together and resolves them against a prompt that explains how they relate. This collapses five separate tasks into a single model.

Native stereo audio is treated as a property of the model, not as a later step. Motion transfer allows a reference video to provide the movement—such as a camera movement or a performance—while the subject and style come from another source.

## Usage examples

The blog brings output examples. One shows a superhero boy in comic book style, with graphic text synchronized with the voice. Another is a commercial film of a transparent gaming mouse, with duotonic lighting and detailed macro.

There is also a fashion editorial with a kintsugi mask reconstructing itself, a golden dragon, and a final poster pose. And a soda commercial with a fisheye lens, giant typography, and iris transitions.

All examples use multiple references and audio, showing the model's ability to integrate different modalities into a single coherent output.

## Availability

MiniMax H3 has been available in ComfyUI since its release. The optimization allows it to run locally on accessible hardware, such as a 3060, which reinforces the model's appeal for those who want to avoid closed APIs.

With open weights and native support in a popular open-source tool, the H3 joins other models that democratize video generation with professional quality.
