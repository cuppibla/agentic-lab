// Memory & Runtime — the cross-platform index of Annie's agent-memory work.
//
// Source of truth: the creator-space vault `Catalog/` (one note per artifact).
// This file is a curated, public snapshot of the memory/runtime/rag artifacts
// that have a live public link. To refresh: re-export from the vault catalog.

export type ArtifactKind = 'repo' | 'codelab' | 'video' | 'blog';
export type Platform = 'github' | 'codelabs' | 'youtube' | 'medium' | 'web';

export interface MemoryArtifact {
  title: string;
  kind: ArtifactKind;
  platform: Platform;
  /** Display label for the channel/publisher badge. */
  channel: string;
  oneliner: string;
  /** External URL, or an internal root-absolute path (e.g. /case-studies/aria/). */
  url: string;
  /** Google products used — highlighted on the card (Memory Bank, ADK, Vertex AI, ...). */
  products?: string[];
  /** Sub-topics: Memory Bank · Reflective memory · Sessions & State · RAG · Runtime · Multimodal. */
  themes: string[];
  featured?: boolean;
  stars?: number;
}

/** Display order + section labels, grouped by kind (the cross-platform story). */
export const kindOrder: { kind: ArtifactKind; label: string }[] = [
  { kind: 'repo', label: 'Repos & demos' },
  { kind: 'codelab', label: 'Codelabs' },
  { kind: 'video', label: 'Videos' },
  { kind: 'blog', label: 'Blog posts' },
];

export const memoryArtifacts: MemoryArtifact[] = [
  // ---------- Repos & demos ----------
  {
    title: 'Memory Agent',
    kind: 'repo', platform: 'github', channel: 'GitHub',
    oneliner: `An ADK agent with persistent memory that recalls context across sessions.`,
    url: 'https://github.com/cuppibla/memory_agent',
    products: ['ADK', 'Gemini'],
    themes: ['Sessions & State'], featured: true, stars: 8,
  },
  {
    title: 'Memory Agent — starter',
    kind: 'repo', platform: 'github', channel: 'GitHub',
    oneliner: `The scaffold to start from — used as the O'Reilly Day-2 lab.`,
    url: 'https://github.com/cuppibla/memory_agent_starter',
    products: ['ADK'],
    themes: ['Sessions & State'],
  },
  {
    title: 'Reflective Memory — demo',
    kind: 'repo', platform: 'github', channel: 'GitHub',
    oneliner: `Vertex AI Memory Bank + a nightly Firestore "dream" that consolidates memories.`,
    url: 'https://github.com/cuppibla/reflective-memory-demo',
    products: ['Memory Bank', 'Firestore', 'Vertex AI'],
    themes: ['Reflective memory', 'Memory Bank'], featured: true,
  },
  {
    title: 'Reflective Memory — agent skill / kit',
    kind: 'repo', platform: 'github', channel: 'GitHub',
    oneliner: `An installable agent skill — reflective memory on Memory Bank + a Firestore "dream".`,
    url: 'https://github.com/cuppibla/reflective-memory-skill',
    products: ['Memory Bank', 'Firestore'],
    themes: ['Reflective memory', 'Memory Bank'],
  },
  {
    title: 'Survivor Network RAG',
    kind: 'repo', platform: 'github', channel: 'GitHub',
    oneliner: `Graph-RAG answers grounded in a network of survivor stories — ADK + Memory Bank.`,
    url: 'https://github.com/cuppibla/survivor-network-rag',
    products: ['ADK', 'Memory Bank'],
    themes: ['RAG', 'Memory Bank'],
  },
  {
    title: 'Cymbal Pets Shop',
    kind: 'repo', platform: 'github', channel: 'GitHub',
    oneliner: `Semantic storefront with BigQuery VECTOR_SEARCH and live sync (Data Agent Kit, Ep. 5).`,
    url: 'https://github.com/cuppibla/cymbal-pets-shop',
    products: ['BigQuery'],
    themes: ['RAG'],
  },
  {
    title: 'Aria',
    kind: 'repo', platform: 'web', channel: 'Case study',
    oneliner: `A voice assistant that browses the web — the production PoC behind the Reflective Memory series.`,
    url: '/case-studies/aria/',
    products: ['Memory Bank', 'Firestore'],
    themes: ['Reflective memory', 'Memory Bank', 'Runtime'], featured: true,
  },
  {
    title: 'FashionMind',
    kind: 'repo', platform: 'github', channel: 'GitHub',
    oneliner: `A multimodal fashion agent that sees and remembers.`,
    url: 'https://github.com/cuppibla/fashionmind',
    products: ['Gemini'],
    themes: ['Memory', 'Multimodal'],
  },
  {
    title: `Race Condition (Next '26 keynote)`,
    kind: 'repo', platform: 'github', channel: 'GitHub',
    oneliner: `The open-source multi-agent simulation from the Google Cloud Next '26 developer keynote.`,
    url: 'https://github.com/cuppibla/race-condition-study',
    products: ['ADK'],
    themes: ['Runtime'],
  },

  // ---------- Codelabs ----------
  {
    title: 'Build a Multimodal AI Agent with Graph RAG, ADK & Memory Bank',
    kind: 'codelab', platform: 'codelabs', channel: 'Google Codelabs',
    oneliner: `Long-term memory with Vertex AI Memory Bank in a multi-agent Graph-RAG app — my Level 2 of the Way Back Home series.`,
    url: 'https://codelabs.developers.google.com/codelabs/survivor-network/instructions',
    products: ['ADK', 'Memory Bank'],
    themes: ['RAG', 'Memory Bank'], featured: true,
  },
  {
    title: 'Building Stateful & Personalized Agents with ADK',
    kind: 'codelab', platform: 'codelabs', channel: 'Google Codelabs',
    oneliner: `The full memory ladder — 6 levels from session state to a multimodal Memory Bank.`,
    url: 'https://codelabs.developers.google.com/codelabs/agent-memory/instructions',
    products: ['ADK', 'Memory Bank'],
    themes: ['Sessions & State', 'Memory Bank'], featured: true,
  },
  {
    title: 'Building Personalized Agents with ADK, MCP & Memory Bank',
    kind: 'codelab', platform: 'codelabs', channel: 'Google Codelabs',
    oneliner: `Personalize an agent with Memory Bank, wired to tools and data over MCP.`,
    url: 'https://codelabs.developers.google.com/codelabs/christmas-card/instructions',
    products: ['ADK', 'Memory Bank'],
    themes: ['Memory Bank'],
  },

  // ---------- Videos ----------
  {
    title: 'AI Agent Crash Course (11-part series)',
    kind: 'video', platform: 'youtube', channel: 'Google Cloud Tech',
    oneliner: `An 11-video crash course on the official Google Cloud Tech channel — including 3 on memory.`,
    url: 'https://www.youtube.com/playlist?list=PLIivdWyY5sqLNeW9MPxldbbevMEJGMWBG',
    products: ['ADK', 'Memory Bank'],
    themes: ['Memory Bank', 'Sessions & State'], featured: true,
  },
  {
    title: 'Remember me, memory in agents — The Agent Factory Podcast',
    kind: 'video', platform: 'youtube', channel: 'Google Cloud Tech',
    oneliner: `The Agent Factory podcast — a deep dive on memory in agents.`,
    url: 'https://www.youtube.com/watch?v=2yW7aTfjo88',
    products: ['Memory Bank', 'ADK'],
    themes: ['Memory Bank', 'Sessions & State'], featured: true,
  },
  {
    title: 'AI agent long-term memory with Memory Bank',
    kind: 'video', platform: 'youtube', channel: 'Google Cloud Tech',
    oneliner: `Crash Course Ep 7 — long-term memory with Vertex AI Memory Bank.`,
    url: 'https://youtu.be/KZPo15M2DbM',
    products: ['Memory Bank', 'ADK'],
    themes: ['Memory Bank'], featured: true,
  },
  {
    title: 'How to add short-term memory (Sessions & State)',
    kind: 'video', platform: 'youtube', channel: 'Google Cloud Tech',
    oneliner: `Crash Course Ep 3 — short-term memory via Sessions & State.`,
    url: 'https://youtu.be/vfVcDUCucSs',
    products: ['ADK'],
    themes: ['Sessions & State'],
  },
  {
    title: 'How to add persistent memory to your AI agent',
    kind: 'video', platform: 'youtube', channel: 'Google Cloud Tech',
    oneliner: `Crash Course Ep 5 — adding persistent, long-term memory.`,
    url: 'https://youtu.be/HDqzJJhZsxw',
    products: ['ADK'],
    themes: ['Memory'],
  },
  {
    title: 'FashionMind — demo',
    kind: 'video', platform: 'youtube', channel: 'Own channel',
    oneliner: `A walkthrough of FashionMind: a multimodal agent that sees and remembers.`,
    url: 'https://www.youtube.com/watch?v=t8sAL_LQRtk',
    products: ['Gemini'],
    themes: ['Memory', 'Multimodal'],
  },

  // ---------- Blog posts ----------
  {
    title: 'What is reflective memory (and why your AI agent needs it)',
    kind: 'blog', platform: 'medium', channel: 'Medium · Google Cloud',
    oneliner: `Part 1 — what reflective memory is and why agents need it.`,
    url: 'https://medium.com/google-cloud/what-is-reflective-memory-and-why-does-your-ai-agent-need-it-5aa1579fb57d',
    products: ['Memory Bank'],
    themes: ['Reflective memory'], featured: true,
  },
  {
    title: 'How to build an AI agent that learns',
    kind: 'blog', platform: 'medium', channel: 'Medium · Google Cloud',
    oneliner: `Part 2 — the Google building blocks: Memory Bank + a Firestore "dream".`,
    url: 'https://medium.com/google-cloud/how-to-build-an-ai-agent-that-learns-76faea6d0208',
    products: ['Memory Bank', 'Firestore'],
    themes: ['Reflective memory', 'Memory Bank'],
  },
  {
    title: 'AI Agent vs AI Harness: where memory actually lives',
    kind: 'blog', platform: 'medium', channel: 'Medium · Google Cloud',
    oneliner: `Part 3 — agent vs harness, and where memory really lives.`,
    url: 'https://medium.com/google-cloud/ai-agent-vs-ai-harness-where-memory-actually-lives-7067e64d20a3',
    products: ['Memory Bank'],
    themes: ['Reflective memory'],
  },
  {
    title: `Anthropic just gave agents 'dreams' — build your own on Google Cloud`,
    kind: 'blog', platform: 'medium', channel: 'Medium · Google Cloud',
    oneliner: `Part 4 — the architecture: the nightly "dream" that consolidates memory.`,
    url: 'https://medium.com/google-cloud/anthropic-just-gave-agents-dreams-here-s-how-to-build-your-own-on-google-cloud-e509b0e1e6ba',
    products: ['Memory Bank', 'Firestore'],
    themes: ['Reflective memory'],
  },
  {
    title: 'Build your own reflective-memory agent in Google Antigravity',
    kind: 'blog', platform: 'medium', channel: 'Medium',
    oneliner: `Part 5 — the hands-on build in Google Antigravity.`,
    url: 'https://medium.com/@anniewangtech/build-your-own-reflective-memory-agent-in-google-antigravity-566bb16c56b4',
    products: ['Antigravity', 'Memory Bank'],
    themes: ['Reflective memory'],
  },
];
