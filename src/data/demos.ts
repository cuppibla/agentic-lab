// THE REGISTRY — single source of truth for every demo.
// Add a demo = add an object here. The gallery and concept pages read from this.
//
// status:
//   'public'  -> code is on GitHub, link straight to it
//   'private' -> no public code; show a case study (screenshots / video / writeup)
//   'local'   -> lives on Annie's machine; show via writeup / video until promoted
//
// concepts: ids from src/data/concepts.ts

import { demosGenerated } from './demos.generated';

export type DemoStatus = 'public' | 'private' | 'local';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Demo {
  slug: string;
  title: string;
  oneliner: string;
  concepts: string[];
  stack: string[];
  status: DemoStatus;
  difficulty: Difficulty;
  featured?: boolean;
  stars?: number;
  year?: number;
  /** Link to the public repo (public demos). */
  repo?: string;
  /** Live deployed demo, if any. */
  demo?: string;
  /** Video walkthrough (YouTube, etc.). */
  video?: string;
  /** Internal link to a case-study page (private / local demos). */
  writeup?: string;
}

const demosManual: Demo[] = [
  // ---------- Foundations ----------
  {
    slug: 'adk-tutorial',
    title: 'ADK Tutorial',
    oneliner:
      'The flagship, end-to-end tutorial for building agents with the Agent Development Kit.',
    concepts: ['agents-101', 'tool-use'],
    stack: ['Python', 'ADK', 'Gemini'],
    status: 'public',
    difficulty: 'beginner',
    featured: true,
    stars: 96,
    year: 2026,
    repo: 'https://github.com/cuppibla/adk_tutorial',
  },
  {
    slug: 'adk-crashcourse',
    title: 'ADK Crash Course',
    oneliner: 'A notebook-driven crash course to go from zero to a working ADK agent.',
    concepts: ['agents-101'],
    stack: ['Python', 'ADK', 'Jupyter'],
    status: 'public',
    difficulty: 'beginner',
    repo: 'https://github.com/cuppibla/adk_crashcourse',
  },
  {
    slug: 'task-tracker',
    title: 'Task Tracker Agent',
    oneliner: 'A tiny local agent that manages a task list through tool calls.',
    concepts: ['agents-101', 'tool-use'],
    stack: ['Python', 'uv'],
    status: 'local',
    difficulty: 'beginner',
  },

  // ---------- Reasoning & orchestration ----------
  {
    slug: 'adk-2-marathon-demo',
    title: 'ADK 2.0 Marathon Planner',
    oneliner:
      'Graph workflow: marathon race-day strategy with parallel data fetches, deterministic routing, and structured LLM agents.',
    concepts: ['orchestration', 'multi-agent'],
    stack: ['ADK', 'TypeScript', 'Gemini'],
    status: 'public',
    difficulty: 'advanced',
    featured: true,
    year: 2026,
    repo: 'https://github.com/cuppibla/adk-2-marathon-demo',
  },
  {
    slug: 'race-condition-study',
    title: 'Race Condition (Next ’26 keynote)',
    oneliner:
      'The open-source multi-agent simulation from the Google Cloud Next ’26 developer keynote — a deployable reference architecture.',
    concepts: ['multi-agent', 'orchestration'],
    stack: ['Python', 'ADK', 'Gemini'],
    status: 'public',
    difficulty: 'advanced',
    year: 2026,
    repo: 'https://github.com/cuppibla/race-condition-study',
  },
  {
    slug: 'trip-planner',
    title: 'Trip Planner Agent',
    oneliner: 'A local multi-step planner that decomposes a trip into tool-driven subtasks.',
    concepts: ['orchestration', 'tool-use'],
    stack: ['Python', 'uv'],
    status: 'local',
    difficulty: 'intermediate',
  },

  // ---------- Tools & protocols ----------
  {
    slug: 'agent-marketplace-demo',
    title: 'Agent Marketplace (A2A + MCP)',
    oneliner:
      'Four agents collaborating via Google Cloud Agent Registry with no hardcoded URLs — includes a 4-part tutorial and a tech talk.',
    concepts: ['multi-agent', 'a2a', 'mcp'],
    stack: ['Python', 'ADK', 'A2A'],
    status: 'public',
    difficulty: 'advanced',
    featured: true,
    year: 2026,
    repo: 'https://github.com/cuppibla/agent_marketplace_demo',
  },
  {
    slug: 'discovery-agent-demo',
    title: 'Discovery Agent',
    oneliner: 'Dynamic tool discovery via Google Cloud Agent Registry and ADK.',
    concepts: ['a2a', 'tool-use'],
    stack: ['Python', 'ADK', 'Agent Registry'],
    status: 'public',
    difficulty: 'intermediate',
    year: 2026,
    repo: 'https://github.com/cuppibla/discovery_agent_demo',
  },
  {
    slug: 'agent-mcp-v2',
    title: 'Agent + MCP v2',
    oneliner: 'An agent wired up to tools and data through the Model Context Protocol.',
    concepts: ['mcp', 'tool-use'],
    stack: ['Python', 'MCP'],
    status: 'public',
    difficulty: 'intermediate',
    repo: 'https://github.com/cuppibla/agent_mcp_v2',
  },
  {
    slug: 'adk-builder-ext',
    title: 'ADK Builder (Gemini CLI ext)',
    oneliner: 'A Gemini CLI extension for vibe-coding ADK agents through natural language.',
    concepts: ['skills', 'tool-use'],
    stack: ['Python', 'Gemini CLI'],
    status: 'public',
    difficulty: 'intermediate',
    repo: 'https://github.com/cuppibla/adk-builder-ext',
  },

  // ---------- Memory & knowledge ----------
  {
    slug: 'memory-agent',
    title: 'Memory Agent',
    oneliner: 'An agent with persistent memory that recalls context across sessions.',
    concepts: ['memory'],
    stack: ['Python', 'ADK', 'Gemini'],
    status: 'public',
    difficulty: 'intermediate',
    featured: true,
    stars: 8,
    repo: 'https://github.com/cuppibla/memory_agent',
  },
  {
    slug: 'reflective-memory-demo',
    title: 'Reflective Memory',
    oneliner:
      'An agent that consolidates memories with a nightly Firestore “dream” on top of Vertex AI Memory Bank.',
    concepts: ['memory'],
    stack: ['Python', 'Vertex AI', 'Firestore'],
    status: 'private',
    difficulty: 'advanced',
    featured: true,
    year: 2026,
    writeup: '/case-studies/reflective-memory/',
  },
  {
    slug: 'lyrical-memory-wand',
    title: 'The Lyrical Memory Wand',
    oneliner: 'A playful memory agent that turns what it remembers into lyrics.',
    concepts: ['memory', 'multimodal'],
    stack: ['TypeScript', 'Gemini'],
    status: 'public',
    difficulty: 'intermediate',
    stars: 8,
    repo: 'https://github.com/cuppibla/the-lyrical-memory-wand',
  },
  {
    slug: 'survivor-network-rag',
    title: 'Survivor Network RAG',
    oneliner: 'Retrieval-augmented answers grounded in a network of survivor stories.',
    concepts: ['rag'],
    stack: ['Python', 'RAG'],
    status: 'public',
    difficulty: 'intermediate',
    repo: 'https://github.com/cuppibla/survivor-network-rag',
  },
  {
    slug: 'cymbal-pets-shop',
    title: 'Cymbal Pets Shop',
    oneliner:
      'Semantic pet-shop storefront with BigQuery VECTOR_SEARCH and live backend↔frontend sync (Data Agent Kit, Ep. 5).',
    concepts: ['rag'],
    stack: ['Python', 'BigQuery'],
    status: 'private',
    difficulty: 'advanced',
    year: 2026,
  },

  // ---------- Interfaces ----------
  {
    slug: 'browsermind',
    title: 'BrowserMind',
    oneliner: 'An AI agent that drives a real browser to complete tasks.',
    concepts: ['browser-use'],
    stack: ['TypeScript'],
    status: 'public',
    difficulty: 'intermediate',
    stars: 1,
    repo: 'https://github.com/cuppibla/browsermind',
  },
  {
    slug: 'browsermind-text',
    title: 'BrowserMind Text',
    oneliner: 'A text-based browser automation agent — same idea, no pixels.',
    concepts: ['browser-use'],
    stack: ['Python'],
    status: 'private',
    difficulty: 'intermediate',
  },
  {
    slug: 'aria',
    title: 'Aria',
    oneliner:
      'A voice assistant that browses the web for you, built for accessibility.',
    concepts: ['voice', 'browser-use', 'accessibility'],
    stack: ['TypeScript'],
    status: 'private',
    difficulty: 'advanced',
    featured: true,
    year: 2026,
    writeup: '/case-studies/aria/',
  },
  {
    slug: 'accessibility-agent',
    title: 'Accessibility Agent',
    oneliner: 'An agent that navigates and adapts interfaces for accessibility.',
    concepts: ['accessibility', 'browser-use'],
    stack: ['TypeScript'],
    status: 'public',
    difficulty: 'intermediate',
    repo: 'https://github.com/cuppibla/AccessibilityAgent',
  },
  {
    slug: 'aniradio',
    title: 'AniRadio',
    oneliner:
      'Six AI-hosted radio rooms — one DJ each, music by Lyria 3 Pro, voices by Chirp 3 HD.',
    concepts: ['multimodal', 'voice'],
    stack: ['TypeScript', 'Lyria', 'Chirp'],
    status: 'public',
    difficulty: 'intermediate',
    year: 2026,
    repo: 'https://github.com/cuppibla/aniradio',
  },
  {
    slug: 'fashion-app-demo',
    title: 'Fashion App (ADK Go + Flutter)',
    oneliner: 'A virtual try-on fashion app with an ADK Go backend and a Flutter frontend.',
    concepts: ['multimodal', 'multi-agent'],
    stack: ['Dart', 'Flutter', 'ADK Go'],
    status: 'public',
    difficulty: 'advanced',
    repo: 'https://github.com/cuppibla/fashion_app_demo',
  },

  // ---------- Quality ----------
  {
    slug: 'adk-eval-starter',
    title: 'ADK Eval Starter',
    oneliner: 'A starter kit for evaluating ADK agents — metrics, evalsets, and trajectory scoring.',
    concepts: ['evals'],
    stack: ['Python', 'ADK'],
    status: 'public',
    difficulty: 'intermediate',
    stars: 7,
    year: 2026,
    repo: 'https://github.com/cuppibla/adk_eval_starter',
  },
  {
    slug: 'customer-service-eval',
    title: 'Customer Service Eval',
    oneliner: 'Evaluating a customer-service agent against realistic conversations.',
    concepts: ['evals'],
    stack: ['Python', 'ADK'],
    status: 'public',
    difficulty: 'intermediate',
    repo: 'https://github.com/cuppibla/customer_service_eval',
  },
];

function mergeDemos(manual: Demo[], generated: Demo[]): Demo[] {
  const bySlug = new Map<string, Demo>();
  for (const d of generated) bySlug.set(d.slug, d);
  for (const d of manual) bySlug.set(d.slug, d); // manual entries always win
  return [...bySlug.values()];
}

/** The full registry: curated manual entries merged over auto-synced public repos. */
export const demos: Demo[] = mergeDemos(demosManual, demosGenerated);

export const featuredDemos = demos.filter((d) => d.featured);

export function demosByConcept(conceptId: string): Demo[] {
  return demos.filter((d) => d.concepts.includes(conceptId));
}
