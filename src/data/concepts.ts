// The concept taxonomy — the "learning path" backbone.
// Every demo in demos.ts references one or more concept ids.

export type ConceptGroup =
  | 'Foundations'
  | 'Reasoning & orchestration'
  | 'Tools & protocols'
  | 'Memory & knowledge'
  | 'Interfaces'
  | 'Quality';

export interface Concept {
  id: string;
  label: string;
  group: ConceptGroup;
  blurb: string;
}

export const conceptGroups: ConceptGroup[] = [
  'Foundations',
  'Reasoning & orchestration',
  'Tools & protocols',
  'Memory & knowledge',
  'Interfaces',
  'Quality',
];

export const concepts: Concept[] = [
  {
    id: 'agents-101',
    label: 'Agent fundamentals',
    group: 'Foundations',
    blurb: 'The smallest useful agent: a model, an instruction, a loop.',
  },
  {
    id: 'tool-use',
    label: 'Tool use & function calling',
    group: 'Foundations',
    blurb: 'Giving a model hands — letting it call functions and APIs.',
  },
  {
    id: 'orchestration',
    label: 'Workflows & orchestration',
    group: 'Reasoning & orchestration',
    blurb: 'Routing, parallel steps, and deterministic graphs around an LLM.',
  },
  {
    id: 'multi-agent',
    label: 'Multi-agent systems',
    group: 'Reasoning & orchestration',
    blurb: 'Several specialised agents collaborating on one goal.',
  },
  {
    id: 'mcp',
    label: 'MCP (Model Context Protocol)',
    group: 'Tools & protocols',
    blurb: 'A standard way to plug tools and data into any agent.',
  },
  {
    id: 'a2a',
    label: 'A2A & agent registry',
    group: 'Tools & protocols',
    blurb: 'Agents discovering and calling each other, no hardcoded URLs.',
  },
  {
    id: 'memory',
    label: 'Agent memory',
    group: 'Memory & knowledge',
    blurb: 'Short- and long-term memory so agents remember across turns.',
  },
  {
    id: 'rag',
    label: 'RAG & data agents',
    group: 'Memory & knowledge',
    blurb: 'Grounding answers in retrieved documents and live data.',
  },
  {
    id: 'browser-use',
    label: 'Browser & computer use',
    group: 'Interfaces',
    blurb: 'Agents that drive a real browser or desktop to get things done.',
  },
  {
    id: 'voice',
    label: 'Voice agents',
    group: 'Interfaces',
    blurb: 'Real-time, spoken conversations with an agent.',
  },
  {
    id: 'accessibility',
    label: 'Accessibility agents',
    group: 'Interfaces',
    blurb: 'Agents built to make the web and apps usable for everyone.',
  },
  {
    id: 'multimodal',
    label: 'Multimodal & creative',
    group: 'Interfaces',
    blurb: 'Agents that see, hear, generate images, music, and video.',
  },
  {
    id: 'evals',
    label: 'Evaluation & quality',
    group: 'Quality',
    blurb: 'Measuring whether an agent actually works — and stays working.',
  },
  {
    id: 'skills',
    label: 'Agent skills',
    group: 'Quality',
    blurb: 'Packaging reusable capabilities an agent can load on demand.',
  },
];

export const conceptMap = new Map(concepts.map((c) => [c.id, c]));

export function conceptLabel(id: string): string {
  return conceptMap.get(id)?.label ?? id;
}
