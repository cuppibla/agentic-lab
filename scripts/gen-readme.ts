// Regenerates the auto sections of README.md from the registry (single source of truth).
// Run: npm run gen:readme   (uses tsx so it can import the .ts registry directly)

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { demos, type Demo } from '../src/data/demos';
import { concepts, conceptGroups } from '../src/data/concepts';

const SITE = 'https://cuppibla.github.io/agentic-lab';

const statusEmoji: Record<Demo['status'], string> = {
  public: '🟢',
  private: '🟣',
  local: '🟠',
};

function groupOf(demo: Demo): string {
  const first = demo.concepts[0];
  return concepts.find((c) => c.id === first)?.group ?? conceptGroups[0];
}

function demoLink(d: Demo): string {
  if (d.repo) return d.repo;
  if (d.writeup) return `${SITE}${d.writeup}`;
  return `${SITE}/gallery/`;
}

function nameCell(d: Demo): string {
  const flag = d.featured ? ' ⭐' : '';
  const stars = d.stars ? ` ★${d.stars}` : '';
  return `[**${d.title}**](${demoLink(d)})${flag}${stars}`;
}

function stackCell(d: Demo): string {
  return d.stack.map((s) => `\`${s}\``).join(' ') || '—';
}

function buildStats(): string {
  const n = (s: Demo['status']) => demos.filter((d) => d.status === s).length;
  return `🟢 **${n('public')}** public · 🟣 **${n('private')}** private · 🟠 **${n('local')}** local · **${concepts.length}** concepts`;
}

function buildLearningPath(): string {
  const lines = ['> From fundamentals to production. Each concept links to its live demos.', ''];
  conceptGroups.forEach((group, i) => {
    lines.push(`**${i + 1} · ${group}**`);
    for (const c of concepts.filter((x) => x.group === group)) {
      lines.push(`- [${c.label}](${SITE}/concepts/${c.id}/) — ${c.blurb}`);
    }
    lines.push('');
  });
  return lines.join('\n').trim();
}

function buildDemos(): string {
  const out: string[] = [];
  for (const group of conceptGroups) {
    const list = demos.filter((d) => groupOf(d) === group);
    if (!list.length) continue;
    out.push(`#### ${group}`, '', '| Demo | What it shows | Stack | Access |', '| --- | --- | --- | --- |');
    for (const d of list) {
      out.push(`| ${nameCell(d)} | ${d.oneliner} | ${stackCell(d)} | ${statusEmoji[d.status]} ${d.status} |`);
    }
    out.push('');
  }
  return out.join('\n').trim();
}

function buildCases(): string {
  const list = demos.filter((d) => d.status !== 'public');
  const out = [
    '> Private & local projects — shown as case studies (no code), not repos.',
    '',
    '| Project | What it is | Stack | |',
    '| --- | --- | --- | --- |',
  ];
  for (const d of list) {
    const link = d.writeup ? `[Case study →](${SITE}${d.writeup})` : '_write-up coming_';
    out.push(`| **${d.title}** | ${d.oneliner} | ${stackCell(d)} | ${link} |`);
  }
  return out.join('\n').trim();
}

function replaceBlock(src: string, key: string, content: string): string {
  const start = `<!-- AUTO:${key}:start -->`;
  const end = `<!-- AUTO:${key}:end -->`;
  const re = new RegExp(`${start}[\\s\\S]*?${end}`);
  if (!re.test(src)) {
    console.warn(`! marker "${key}" not found in README`);
    return src;
  }
  return src.replace(re, `${start}\n\n${content}\n\n${end}`);
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const readmePath = join(root, 'README.md');
let md = readFileSync(readmePath, 'utf8');
md = replaceBlock(md, 'stats', buildStats());
md = replaceBlock(md, 'learning-path', buildLearningPath());
md = replaceBlock(md, 'demos', buildDemos());
md = replaceBlock(md, 'cases', buildCases());
writeFileSync(readmePath, md);
console.log(`README.md regenerated from ${demos.length} demos / ${concepts.length} concepts.`);
