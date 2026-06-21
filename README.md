<div align="center">

<img src="./assets/banner.svg" alt="Agentic Lab" width="100%" />

### A hands-on catalog of agentic-system patterns — and the demos that prove them out.

<!-- AUTO:stats:start -->

🟢 **17** public · 🟣 **4** private · 🟠 **2** local · **14** concepts

<!-- AUTO:stats:end -->

[![Live site](https://img.shields.io/badge/live-cuppibla.github.io%2Fagentic--lab-6d6aff?style=flat-square)](https://cuppibla.github.io/agentic-lab/)
[![Deploy](https://img.shields.io/github/actions/workflow/status/cuppibla/agentic-lab/deploy.yml?style=flat-square&label=deploy)](https://github.com/cuppibla/agentic-lab/actions)
[![Built with Astro](https://img.shields.io/badge/built%20with-Astro-ff5d01?style=flat-square)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/license-MIT-3b6d11?style=flat-square)](./LICENSE)
[![Stars](https://img.shields.io/github/stars/cuppibla/agentic-lab?style=flat-square)](https://github.com/cuppibla/agentic-lab/stargazers)

**[▶ Live site](https://cuppibla.github.io/agentic-lab/)** · **[📚 Learn by concept](https://cuppibla.github.io/agentic-lab/concepts/)** · **[🧪 Demo gallery](https://cuppibla.github.io/agentic-lab/gallery/)** · **[⭐ Star this repo](https://github.com/cuppibla/agentic-lab)**

</div>

---

## ✨ What's inside

A growing, opinionated map of how to build agentic systems — from a single tool-using agent
to multi-agent orchestration, memory, RAG, MCP, and evals. Every concept links to a **real,
runnable demo**. Browse it right here, or explore the
**[live site](https://cuppibla.github.io/agentic-lab/)** with search and filtering.

- 🗺️ **A learning path** — concepts ordered from fundamentals to production.
- 🧪 **Real demos** — public repos you can clone, plus case studies of private & local work.
- 🔄 **Self-updating** — tag a repo on GitHub and it shows up here automatically.

## 🗺️ Learning path

<!-- AUTO:learning-path:start -->

> From fundamentals to production. Each concept links to its live demos.

**1 · Foundations**
- [Agent fundamentals](https://cuppibla.github.io/agentic-lab/concepts/agents-101/) — The smallest useful agent: a model, an instruction, a loop.
- [Tool use & function calling](https://cuppibla.github.io/agentic-lab/concepts/tool-use/) — Giving a model hands — letting it call functions and APIs.

**2 · Reasoning & orchestration**
- [Workflows & orchestration](https://cuppibla.github.io/agentic-lab/concepts/orchestration/) — Routing, parallel steps, and deterministic graphs around an LLM.
- [Multi-agent systems](https://cuppibla.github.io/agentic-lab/concepts/multi-agent/) — Several specialised agents collaborating on one goal.

**3 · Tools & protocols**
- [MCP (Model Context Protocol)](https://cuppibla.github.io/agentic-lab/concepts/mcp/) — A standard way to plug tools and data into any agent.
- [A2A & agent registry](https://cuppibla.github.io/agentic-lab/concepts/a2a/) — Agents discovering and calling each other, no hardcoded URLs.

**4 · Memory & knowledge**
- [Agent memory](https://cuppibla.github.io/agentic-lab/concepts/memory/) — Short- and long-term memory so agents remember across turns.
- [RAG & data agents](https://cuppibla.github.io/agentic-lab/concepts/rag/) — Grounding answers in retrieved documents and live data.

**5 · Interfaces**
- [Browser & computer use](https://cuppibla.github.io/agentic-lab/concepts/browser-use/) — Agents that drive a real browser or desktop to get things done.
- [Voice agents](https://cuppibla.github.io/agentic-lab/concepts/voice/) — Real-time, spoken conversations with an agent.
- [Accessibility agents](https://cuppibla.github.io/agentic-lab/concepts/accessibility/) — Agents built to make the web and apps usable for everyone.
- [Multimodal & creative](https://cuppibla.github.io/agentic-lab/concepts/multimodal/) — Agents that see, hear, generate images, music, and video.

**6 · Quality**
- [Evaluation & quality](https://cuppibla.github.io/agentic-lab/concepts/evals/) — Measuring whether an agent actually works — and stays working.
- [Agent skills](https://cuppibla.github.io/agentic-lab/concepts/skills/) — Packaging reusable capabilities an agent can load on demand.

<!-- AUTO:learning-path:end -->

## 🧪 Demos by concept

<!-- AUTO:demos:start -->

#### Foundations

| Demo | What it shows | Stack | Access |
| --- | --- | --- | --- |
| [**ADK Tutorial**](https://github.com/cuppibla/adk_tutorial) ⭐ ★96 | The flagship, end-to-end tutorial for building agents with the Agent Development Kit. | `Python` `ADK` `Gemini` | 🟢 public |
| [**ADK Crash Course**](https://github.com/cuppibla/adk_crashcourse) | A notebook-driven crash course to go from zero to a working ADK agent. | `Python` `ADK` `Jupyter` | 🟢 public |
| [**Task Tracker Agent**](https://cuppibla.github.io/agentic-lab/gallery/) | A tiny local agent that manages a task list through tool calls. | `Python` `uv` | 🟠 local |

#### Reasoning & orchestration

| Demo | What it shows | Stack | Access |
| --- | --- | --- | --- |
| [**ADK 2.0 Marathon Planner**](https://github.com/cuppibla/adk-2-marathon-demo) ⭐ | Graph workflow: marathon race-day strategy with parallel data fetches, deterministic routing, and structured LLM agents. | `ADK` `TypeScript` `Gemini` | 🟢 public |
| [**Race Condition (Next ’26 keynote)**](https://github.com/cuppibla/race-condition-study) | The open-source multi-agent simulation from the Google Cloud Next ’26 developer keynote — a deployable reference architecture. | `Python` `ADK` `Gemini` | 🟢 public |
| [**Trip Planner Agent**](https://cuppibla.github.io/agentic-lab/gallery/) | A local multi-step planner that decomposes a trip into tool-driven subtasks. | `Python` `uv` | 🟠 local |
| [**Agent Marketplace (A2A + MCP)**](https://github.com/cuppibla/agent_marketplace_demo) ⭐ | Four agents collaborating via Google Cloud Agent Registry with no hardcoded URLs — includes a 4-part tutorial and a tech talk. | `Python` `ADK` `A2A` | 🟢 public |

#### Tools & protocols

| Demo | What it shows | Stack | Access |
| --- | --- | --- | --- |
| [**Discovery Agent**](https://github.com/cuppibla/discovery_agent_demo) | Dynamic tool discovery via Google Cloud Agent Registry and ADK. | `Python` `ADK` `Agent Registry` | 🟢 public |
| [**Agent + MCP v2**](https://github.com/cuppibla/agent_mcp_v2) | An agent wired up to tools and data through the Model Context Protocol. | `Python` `MCP` | 🟢 public |

#### Memory & knowledge

| Demo | What it shows | Stack | Access |
| --- | --- | --- | --- |
| [**Memory Agent**](https://github.com/cuppibla/memory_agent) ⭐ ★8 | An agent with persistent memory that recalls context across sessions. | `Python` `ADK` `Gemini` | 🟢 public |
| [**Reflective Memory**](https://cuppibla.github.io/agentic-lab/case-studies/reflective-memory/) ⭐ | An agent that consolidates memories with a nightly Firestore “dream” on top of Vertex AI Memory Bank. | `Python` `Vertex AI` `Firestore` | 🟣 private |
| [**The Lyrical Memory Wand**](https://github.com/cuppibla/the-lyrical-memory-wand) ★8 | A playful memory agent that turns what it remembers into lyrics. | `TypeScript` `Gemini` | 🟢 public |
| [**Survivor Network RAG**](https://github.com/cuppibla/survivor-network-rag) | Retrieval-augmented answers grounded in a network of survivor stories. | `Python` `RAG` | 🟢 public |
| [**Cymbal Pets Shop**](https://cuppibla.github.io/agentic-lab/gallery/) | Semantic pet-shop storefront with BigQuery VECTOR_SEARCH and live backend↔frontend sync (Data Agent Kit, Ep. 5). | `Python` `BigQuery` | 🟣 private |

#### Interfaces

| Demo | What it shows | Stack | Access |
| --- | --- | --- | --- |
| [**BrowserMind**](https://github.com/cuppibla/browsermind) ★1 | An AI agent that drives a real browser to complete tasks. | `TypeScript` | 🟢 public |
| [**BrowserMind Text**](https://cuppibla.github.io/agentic-lab/gallery/) | A text-based browser automation agent — same idea, no pixels. | `Python` | 🟣 private |
| [**Aria**](https://cuppibla.github.io/agentic-lab/case-studies/aria/) ⭐ | A voice assistant that browses the web for you, built for accessibility. | `TypeScript` | 🟣 private |
| [**Accessibility Agent**](https://github.com/cuppibla/AccessibilityAgent) | An agent that navigates and adapts interfaces for accessibility. | `TypeScript` | 🟢 public |
| [**AniRadio**](https://github.com/cuppibla/aniradio) | Six AI-hosted radio rooms — one DJ each, music by Lyria 3 Pro, voices by Chirp 3 HD. | `TypeScript` `Lyria` `Chirp` | 🟢 public |
| [**Fashion App (ADK Go + Flutter)**](https://github.com/cuppibla/fashion_app_demo) | A virtual try-on fashion app with an ADK Go backend and a Flutter frontend. | `Dart` `Flutter` `ADK Go` | 🟢 public |

#### Quality

| Demo | What it shows | Stack | Access |
| --- | --- | --- | --- |
| [**ADK Builder (Gemini CLI ext)**](https://github.com/cuppibla/adk-builder-ext) | A Gemini CLI extension for vibe-coding ADK agents through natural language. | `Python` `Gemini CLI` | 🟢 public |
| [**ADK Eval Starter**](https://github.com/cuppibla/adk_eval_starter) ★7 | A starter kit for evaluating ADK agents — metrics, evalsets, and trajectory scoring. | `Python` `ADK` | 🟢 public |
| [**Customer Service Eval**](https://github.com/cuppibla/customer_service_eval) | Evaluating a customer-service agent against realistic conversations. | `Python` `ADK` | 🟢 public |

<!-- AUTO:demos:end -->

## 📂 Case studies

<!-- AUTO:cases:start -->

> Private & local projects — shown as case studies (no code), not repos.

| Project | What it is | Stack | |
| --- | --- | --- | --- |
| **Task Tracker Agent** | A tiny local agent that manages a task list through tool calls. | `Python` `uv` | _write-up coming_ |
| **Trip Planner Agent** | A local multi-step planner that decomposes a trip into tool-driven subtasks. | `Python` `uv` | _write-up coming_ |
| **Reflective Memory** | An agent that consolidates memories with a nightly Firestore “dream” on top of Vertex AI Memory Bank. | `Python` `Vertex AI` `Firestore` | [Case study →](https://cuppibla.github.io/agentic-lab/case-studies/reflective-memory/) |
| **Cymbal Pets Shop** | Semantic pet-shop storefront with BigQuery VECTOR_SEARCH and live backend↔frontend sync (Data Agent Kit, Ep. 5). | `Python` `BigQuery` | _write-up coming_ |
| **BrowserMind Text** | A text-based browser automation agent — same idea, no pixels. | `Python` | _write-up coming_ |
| **Aria** | A voice assistant that browses the web for you, built for accessibility. | `TypeScript` | [Case study →](https://cuppibla.github.io/agentic-lab/case-studies/aria/) |

<!-- AUTO:cases:end -->

## 🚀 Run it locally

```bash
git clone https://github.com/cuppibla/agentic-lab.git
cd agentic-lab
npm install
npm run dev      # http://localhost:4321
```

> Requires Node 20.3+. Pinned to Astro 5 / Starlight 0.34.

## ➕ Add a demo

Everything is driven by one file — [`src/data/demos.ts`](./src/data/demos.ts). Add an object:

```ts
{
  slug: 'my-demo',
  title: 'My Demo',
  oneliner: 'One sentence on what it shows.',
  concepts: ['tool-use', 'memory'],   // ids from src/data/concepts.ts
  stack: ['Python', 'ADK'],
  status: 'public',                    // public | private | local
  difficulty: 'intermediate',
  repo: 'https://github.com/cuppibla/my-demo',
}
```

The gallery, the concept pages, and this README all update from it.

## 🔄 Auto-sync

Tag any public repo with the GitHub topic **`agentic-lab`** (plus concept topics like
`mcp`, `rag`, `memory`). A weekly GitHub Action pulls them into the registry and regenerates
this README — curated entries in `demos.ts` always win.

```bash
npm run sync     # pull tagged repos + regenerate this README
```

## 🛠️ Tech stack

[Astro](https://astro.build) · [Starlight](https://starlight.astro.build) · TypeScript · GitHub Actions · GitHub Pages

## 👋 About

Built by **Annie** ([@cuppibla](https://github.com/cuppibla)) — DevRel & content creator,
working mostly in the Google Cloud / ADK agentic ecosystem.

<div align="center">
<sub>If this is useful, a ⭐ helps others find it.</sub>
</div>
