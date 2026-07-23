---
layout: ../../../layouts/PostLayout.astro
title: 'Open-weight LLMs 2026: DeepSeek, Qwen, Kimi, GLM e Llama frente a frente'
date: 2026-07-21
heroImage: "/hero/open-weight-llms-2026-deepseek-qwen-kimi-glm-e-llama-frente.jpg"
hero_credit: "Wikimedia Commons (CC BY-SA 2.0) — Christopher Bowns"
category: 'Modelos e Algoritmos'
lang: "pt-br"
excerpt: "Comparação técnica de preço, contexto, licença e desempenho dos principais modelos abertos de 2026, com destaque para os chineses."
source: 'https://wavect.io/blog/open-weight-llm-comparison-2026/'
---
Há um ano, escolher um LLM significava decidir entre APIs ocidentais e debater qual era a melhor. Esse debate acabou. As famílias de pesos abertos, a maioria chinesas, fecharam a maior parte da lacuna em codificação e raciocínio a uma fração do preço por token, e várias já operam sob licenças que permitem auto-hospedagem em infraestrutura europeia. O cenário mudou, e a alavanca de custo mudou junto.

Segundo o wavect.io, o problema é que 'peso aberto' não é uma decisão única. DeepSeek, Qwen, Kimi, GLM e Llama diferem em licença, janela de contexto, força em codificação versus raciocínio, e se você pode executá-los legalmente onde seus dados residem. Escolher pelo benchmark principal pode levar a um modelo que falha na sua tarefa ou que você não tem permissão para implantar.

O que realmente separa as famílias em 2026?

Cada família fez uma aposta diferente. DeepSeek é o disruptor de preço: licença MIT, raciocínio geral forte e codificação, com preços que ancoraram o fundo do mercado. Qwen (Alibaba) é a família mais ampla, com muitos tamanhos e licença Apache 2.0 nos níveis abertos. Kimi K2 (Moonshot) é o especialista em codificação agêntica, com um grande modelo mixture-of-experts sob licença MIT modificada. GLM (Zhipu) é o carro-chefe focado em codificação, com licença MIT e janela de contexto longa. Llama (Meta) é o incumbent ocidental, com enorme ecossistema, mas licença comunitária que restringe uso na UE.

O padrão: as famílias chinesas competem em preço e, cada vez mais, em qualidade de codificação. Llama compete em ecossistema e comprimento de contexto, mas carrega bagagem de licença que atinge equipes europeias.

Preço, contexto e licença em comparação

DeepSeek (Flash): input ~$0,14–0,55/1M tokens, output ~$0,28–2,20, contexto 128K–1M, licença MIT. Melhor para alto volume e sensível a custo.

Qwen (Max, hospedado): input ~$0,80–1,25, output ~$3,75–3,90, contexto 256K–1M, Apache 2.0 nos níveis abertos. Família ampla, níveis abertos permissivos.

Kimi K2: input ~$0,60–0,95, output ~$2,50–4,00, contexto ~256K, licença MIT modificada. Melhor para codificação agêntica e uso de ferramentas.

GLM (Flagship): input ~$1,00–1,40, output ~$3,20–4,40, contexto até ~1M, licença MIT. Melhor para agentes de codificação de longo horizonte.

Llama (Maverick): preço varia por hospedeiro, contexto até ~10M, licença comunitária com restrição de uso na UE. Melhor para ecossistema ocidental e contexto muito longo.

Dois pontos saltam: as famílias chinesas custam de 10 a 30 vezes menos que os principais níveis ocidentais, resetando a matemática de custo para produtos de alto volume. E a licença não é nota de rodapé: MIT e Apache 2.0 permitem auto-hospedagem e uso em produtos proprietários; a licença comunitária da Llama, com restrições, pode tirá-la da mesa antes mesmo de discutir preço.

Qual família vence em codificação ou raciocínio?

Não há um vencedor único. Para agentes de codificação de longo horizonte, GLM e Kimi K2 são os construídos para isso, trocando golpes com a fronteira ocidental em benchmarks de engenharia de software. Para raciocínio geral e amplitude, DeepSeek e Qwen cobrem a maior variedade de tarefas. A precisão bruta em codificação em tarefas isoladas agora está a poucos pontos percentuais dos modelos ocidentais líderes. O raciocínio mais difícil ainda pende para o Ocidente, mas a lacuna que importava dois anos atrás praticamente fechou para o trabalho de engenharia do dia a dia.

Auto-hospedagem na UE sem dor de cabeça de conformidade

Para uma equipe europeia, é aqui que as famílias mais se separam. DeepSeek, GLM e Kimi, com licenças MIT ou MIT modificada, podem ser baixados e executados em infraestrutura da UE. Os dados nunca saem da sua jurisdição. Qwen, nos níveis abertos com Apache 2.0, também se auto-hospeda limpo, mas o nível Max é hospedado apenas e roda fora da UE. Llama, com sua licença comunitária que restringe uso na UE, é uma questão legal, não técnica.

O ponto mais profundo: auto-hospedar um modelo chinês de pesos abertos em infraestrutura europeia é o movimento que dá tanto o preço quanto a história de residência de dados. Executar o mesmo modelo em um provedor de nuvem chinês não oferece a mesma garantia.
