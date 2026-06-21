const base = import.meta.env.BASE_URL;

/**
 * Prefix an internal, root-absolute path with the site base (e.g. /agentic-lab).
 * Leaves full URLs and mailto: links untouched. Works at root too (base === '/').
 */
export function withBase(path: string): string {
  if (/^https?:\/\//.test(path) || path.startsWith('mailto:')) return path;
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  return path.startsWith('/') ? `${b}${path}` : path;
}
