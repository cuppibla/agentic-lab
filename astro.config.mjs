// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeBaseLinks } from './rehype-base-links.mjs';

const BASE = '/agentic-lab';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: served at https://cuppibla.github.io/agentic-lab
  site: 'https://cuppibla.github.io',
  base: BASE,
  markdown: {
    // Prefix root-absolute links in Markdown/MDX with the base path.
    rehypePlugins: [[rehypeBaseLinks, { base: BASE }]],
  },
  integrations: [
    starlight({
      title: 'Agentic Lab',
      description:
        'A hands-on catalog of agentic system patterns and demos — by Annie (cuppibla).',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/cuppibla' },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Browse',
          items: [
            { label: 'Demo gallery', link: '/gallery/' },
            { label: 'By concept', link: '/concepts/' },
          ],
        },
        {
          label: 'Learn',
          autogenerate: { directory: 'learn' },
        },
        {
          label: 'Case studies',
          autogenerate: { directory: 'case-studies' },
        },
      ],
    }),
  ],
});
