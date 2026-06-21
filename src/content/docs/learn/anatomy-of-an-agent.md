---
title: Anatomy of an agent
description: The smallest useful agent, and the loop at the centre of every bigger one.
sidebar:
  order: 2
---

Strip away the frameworks and an agent is three things in a loop:

1. **A model** that decides what to do next.
2. **Tools** it can call to affect the world or gather information.
3. **A loop** that feeds tool results back to the model until the task is done.

```text
user goal
   │
   ▼
┌──────────────┐   calls tool   ┌──────────┐
│    model     │ ─────────────▶ │  tool    │
│ (decides)    │ ◀───────────── │ (acts)   │
└──────────────┘   observation  └──────────┘
   │  done?
   ▼
final answer
```

Everything else is an elaboration of this loop:

- **Workflows & orchestration** make the loop deterministic where it needs to be.
- **Multi-agent systems** run several of these loops and let them talk.
- **Memory** lets the loop remember across runs.
- **RAG** enriches the model's context before it decides.
- **Evals** check that the loop produces the right outcome, repeatably.

See it in practice in the [ADK Tutorial](https://github.com/cuppibla/adk_tutorial), or
browse everything in the [gallery](/gallery/).
