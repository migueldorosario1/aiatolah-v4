---
layout: ../../../layouts/PostLayout.astro
title: 'DeepMind abre WeatherNext: um dia extra de aviso para ciclones'
date: 2026-08-18
category: 'Modelos e Algoritmos'
lang: "pt-br"
excerpt: "Modelo de IA da DeepMind prevê ciclones com um dia extra de precisão e agora é open source."
source: 'https://deepmind.google/blog/weathernext-ai-model-achieves-breakthrough-in-forecasting-cyclones/'
heroImage: "/hero/deepmind-abre-weathernext-um-dia-extra-de-aviso-para-ciclone.jpg"
hero_credit: "Photo by Pixabay on Pexels"
hero_legenda: "DeepMind abre WeatherNext: um dia extra de aviso para ciclones"
---
A DeepMind alcançou um avanço histórico na previsão de ciclones tropicais, conforme estudo publicado na Nature. O modelo WeatherNext oferece, em média, um dia extra de aviso para esses fenômenos, que já causaram mais de 700 mil mortes e US$ 1,4 trilhão em perdas globais nos últimos 50 anos.

Segundo a DeepMind, a precisão do modelo é tão alta que previsões de três dias equivalem ao que os modelos anteriores entregavam em apenas dois. Esse salto representa cerca de uma década de progresso meteorológico em um único avanço.

O desenvolvimento foi colaborativo, envolvendo pesquisadores do Google DeepMind e Google Research, além de especialistas do National Hurricane Center (NHC), do Cooperative Institute for Research in the Atmosphere (CIRA) e do UK Met Office.

O modelo já mostrou valor real: na temporada de furacões de 2025, ajudou o NHC a prever a rápida intensificação do furacão Melissa e sua chegada à Jamaica, permitindo um aviso antecipado crucial. Agora, a equipe expandiu o sistema para gerar 1.000 cenários possíveis por ciclone, apoiando a tomada de decisão dos meteorologistas.

A DeepMind está abrindo o código e os pesos dos modelos WeatherNext 2 e WeatherNext Cyclones, usados na temporada de furacões. A ideia é que a comunidade científica e agências meteorológicas possam construir sobre essa tecnologia, ampliando o impacto da IA na resiliência a desastres naturais.

O desafio técnico era grande: prever a trajetória de um ciclone exige modelos globais de larga escala, enquanto a intensidade depende de processos físicos locais de alta resolução. O WeatherNext supera essa dicotomia com um único modelo que prevê trajetória, intensidade e estrutura do vento com precisão de ponta.

O segredo está no treinamento conjunto com dois tipos de dados: dinâmica global do clima e observações históricas de ciclones. Foram quase 20 terabytes de dados atmosféricos e o banco IBTrACS, com cerca de 5 mil tempestades históricas.

A arquitetura usa Redes Generativas Funcionais (FGNs) para gerar conjuntos de previsões, capturando a incerteza inerente ao clima. Uma previsão de 15 dias sai em menos de um minuto em um TPU. No ano passado, o sistema produzia 50 previsões por vez; agora são 1.000, capturando eventos raros como a rápida intensificação.

Surpreendentemente, o modelo opera com resolução de 28x28 km, 100 vezes mais grosseira que os modelos tradicionais, e ainda assim supera a precisão deles. Uma versão menor, WeatherNext 2-mini, com resolução de 111x111 km, também tem ótimo desempenho. Os cientistas ainda não entendem completamente como isso é possível, e essa é uma questão em aberto para a comunidade.

Além dos modelos, a DeepMind liberou o WeatherNext 2-mini para rodar em um único TPU em um notebook Colab gratuito. As previsões mais recentes podem ser exploradas no Weather Lab, que ganhou nova interface e agora inclui previsões globais de temperatura, precipitação e vento.

Com esse avanço, a DeepMind espera criar um ecossistema colaborativo de previsão do tempo, combinando aprendizado de máquina com a experiência dos meteorologistas humanos. O objetivo é salvar vidas e ajudar comunidades a se adaptarem às mudanças climáticas.

Para avisos oficiais, a recomendação é sempre consultar a agência meteorológica local.
