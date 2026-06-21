---
title: "Reflective Memory"
description: An agent that consolidates memory with a nightly "dream" on Vertex AI Memory Bank.
---

:::note[Private project · case study]
The code isn't public. This page shows what it does, how it's built, and what I'd
highlight — the way I'd walk a teammate or interviewer through it.
:::

## What it is

A reflective-memory AI agent built on Google Cloud. On top of **Vertex AI Memory Bank**,
it runs a nightly **Firestore "dream"** that consolidates the day's raw memories into
durable, higher-level ones — so the agent gets sharper over time instead of just
accumulating transcripts.

## The problem

Most "memory" in agents is really just a growing log. It gets long, noisy, and expensive
to read back. Humans don't keep every transcript — we sleep, and consolidate. This project
asks: what if an agent did the same?

## How it works

- **Capture** — during the day, interactions land in Memory Bank as raw memories.
- **Dream** — a scheduled job replays recent memories, clusters and summarises them, and
  writes back consolidated memories (and prunes the noise) in Firestore.
- **Recall** — at conversation time, the agent retrieves the consolidated layer first,
  falling back to raw memories only when it needs detail.

```text
day:    interactions ──▶ raw memories (Memory Bank)
night:  raw memories ──▶ [ dream: cluster · summarise · prune ] ──▶ consolidated (Firestore)
recall: consolidated first ─▶ raw on demand
```

<!-- TODO: architecture diagram, screenshots of the dream job, before/after recall -->

## What I'd highlight

- Treating memory consolidation as a **background, scheduled process**, not an inline cost.
- A two-tier recall strategy that keeps prompts small and cheap.
- Clean separation between the raw store (Memory Bank) and the consolidated store (Firestore).

## Stack

Python · Vertex AI Memory Bank · Firestore · Gemini · ADK

## Related

- Companion: **Reflective Memory Skill** — packaged as a reusable agent skill.
- Public memory demo: [Memory Agent](https://github.com/cuppibla/memory_agent)
- Concept: [Agent memory](/concepts/memory/)

*Screenshots and a walkthrough video go here.*
