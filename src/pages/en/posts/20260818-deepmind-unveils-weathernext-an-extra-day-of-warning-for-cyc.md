---
layout: ../../../layouts/PostLayout.astro
title: 'DeepMind unveils WeatherNext: an extra day of warning for cyclones'
date: 2026-08-18
category: 'Models and Algorithms'
lang: "en"
excerpt: "DeepMind's AI model predicts cyclones with an extra day of accuracy and is now open source."
source: 'https://deepmind.google/blog/weathernext-ai-model-achieves-breakthrough-in-forecasting-cyclones/'
heroImage: "/hero/deepmind-abre-weathernext-um-dia-extra-de-aviso-para-ciclone.jpg"
hero_credit: "Photo by Pixabay on Pexels"
hero_legenda: "DeepMind abre WeatherNext: um dia extra de aviso para ciclones"
---
DeepMind has achieved a historic breakthrough in tropical cyclone forecasting, as published in a study in Nature. The WeatherNext model provides, on average, an extra day of warning for these phenomena, which have already caused over 700,000 deaths and US$1.4 trillion in global losses over the past 50 years.

According to DeepMind, the model's accuracy is so high that three-day forecasts match what previous models delivered in just two days. This leap represents about a decade of meteorological progress in a single advance.

The development was collaborative, involving researchers from Google DeepMind and Google Research, as well as experts from the National Hurricane Center (NHC), the Cooperative Institute for Research in the Atmosphere (CIRA), and the UK Met Office.

The model has already shown real value: in the 2025 hurricane season, it helped the NHC predict the rapid intensification of Hurricane Melissa and its arrival in Jamaica, enabling a crucial early warning. Now, the team has expanded the system to generate 1,000 possible scenarios per cyclone, supporting meteorologists' decision-making.

DeepMind is open-sourcing the code and weights of the WeatherNext 2 and WeatherNext Cyclones models, used in the hurricane season. The idea is that the scientific community and meteorological agencies can build on this technology, amplifying AI's impact on natural disaster resilience.

The technical challenge was great: predicting a cyclone's track requires large-scale global models, while intensity depends on local high-resolution physical processes. WeatherNext overcomes this dichotomy with a single model that predicts track, intensity, and wind structure with state-of-the-art accuracy.

The secret lies in joint training with two types of data: global climate dynamics and historical cyclone observations. There were nearly 20 terabytes of atmospheric data and the IBTrACS database, with about 5,000 historical storms.

The architecture uses Functional Generative Networks (FGNs) to generate forecast ensembles, capturing the inherent uncertainty of weather. A 15-day forecast comes out in less than a minute on a TPU. Last year, the system produced 50 forecasts at a time; now it's 1,000, capturing rare events like rapid intensification.

Surprisingly, the model operates at a resolution of 28x28 km, 100 times coarser than traditional models, yet still surpasses their accuracy. A smaller version, WeatherNext 2-mini, with a resolution of 111x111 km, also performs well. Scientists don't yet fully understand how this is possible, and that's an open question for the community.

In addition to the models, DeepMind has released WeatherNext 2-mini to run on a single TPU in a free Colab notebook. The latest forecasts can be explored in the Weather Lab, which has a new interface and now includes global forecasts for temperature, precipitation, and wind.

With this advance, DeepMind hopes to create a collaborative weather forecasting ecosystem, combining machine learning with the expertise of human meteorologists. The goal is to save lives and help communities adapt to climate change.

For official warnings, the recommendation is always to consult your local meteorological agency.
