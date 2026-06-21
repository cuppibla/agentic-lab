// Prefixes root-absolute links/images in Markdown & MDX with the site base path,
// so internal links work when the site is served under /agentic-lab/ on GitHub Pages.
// Idempotent: never double-prefixes, leaves external URLs and anchors alone.

export function rehypeBaseLinks({ base = '/' } = {}) {
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base;
  if (!prefix) return () => {};

  const fixNode = (node) => {
    if (node.type === 'element' && node.properties) {
      for (const attr of ['href', 'src']) {
        const value = node.properties[attr];
        if (
          typeof value === 'string' &&
          value.startsWith('/') &&
          !value.startsWith('//') &&
          !value.startsWith(`${prefix}/`)
        ) {
          node.properties[attr] = `${prefix}${value}`;
        }
      }
    }
    if (Array.isArray(node.children)) node.children.forEach(fixNode);
  };

  return (tree) => {
    fixNode(tree);
    return tree;
  };
}
