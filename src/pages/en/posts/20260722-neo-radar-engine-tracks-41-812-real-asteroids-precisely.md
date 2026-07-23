---
layout: ../../../layouts/PostLayout.astro
title: 'NEO Radar: Engine Tracks 41,812 Real Asteroids Precisely'
date: 2026-07-22
heroImage: "/hero/neo-radar-engine-rastreia-41-812-asteroides-reais-precisamen.jpg"
hero_credit: "Wikimedia Commons (CC BY 4.0) — Vyacheslav Argenberg"
category: 'Models and Algorithms'
lang: "en"
excerpt: "New orbital tool simulates all planets with high fidelity, using precise algorithms for tracking space objects."
source: 'https://neoradar.space'
---
The NEO Radar represents a significant advance in orbital mechanics, functioning as a browser-based engine for tracking Near-Earth Objects. The tool incorporates 47 high-fidelity objects with full N-body RK4 dynamics, plus 41,812 asteroids from the MPC catalog with real positions. All eight planets are fully simulated.

Each trajectory in NEO Radar is integrated from JPL Horizons ephemerides with full gravitational perturbation from the outer planets. The displayed numbers exactly match what a mission planner would use in their analyses. The conversion from mean anomaly to eccentric anomaly uses Newton-Raphson with adaptive seed, converging to 1×10⁻¹² in fewer than four iterations, even for high-eccentricity orbits.

You can toggle the gravity of the outer planets on or off. The uncertainty cone visibly widens on Jupiter flyby trajectories, a problem mission planners call the 'keyhole problem'.

Data is pulled directly from JPL Horizons and fixed to disk for instant access. Observation arcs and uncertainty parameters accompany each object, without approximations or drift. According to neoradar.space, each NEO Radar trajectory is compared with JPL Horizons ephemerides over a 50-year window. While simplified two-body models drift tens of thousands of kilometers, NEO Radar stays within the real uncertainty cone.

Position accuracy is calculated as RMS deviation from JPL ground truth over the same 50-year window for the 47 high-fidelity objects.
