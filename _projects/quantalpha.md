---
layout: page
title: QuantAlpha
description: A multi-agent architecture utilizing LLMs in financial trading and monitoring NSE data. Focuses on HFT dynamics and combating alpha decay.
img: /assets/img/1.jpg
importance: 1
category: Research & Finance
---

### Multi-Agent Reinforcement Learning for Quantitative Trading

**QuantAlpha** is a cutting-edge multi-agent reinforcement learning (MARL) architecture designed to operate in high-frequency trading (HFT) environments. Utilizing a swarm of cooperative LLM-based agents, the system monitors real-time order book data from the National Stock Exchange (NSE) of India to optimize sub-portfolio allocations and combat the effects of rapid alpha decay.

#### Key Features:

- **Write-Before-Route Protocol:** Implements a strict data logging paradigm ensuring deterministic provenance before routing agent decisions.
- **HFT Monitoring:** Continuous streaming of NSE Level 3 market data.
- **MARL Coordination:** Cooperative credit assignment via Provenance DAGs.
