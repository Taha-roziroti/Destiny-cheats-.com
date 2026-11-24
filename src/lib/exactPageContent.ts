import { marked } from 'marked';
import { checkoutPath } from '../config/checkout';

/** Marker in authored markdown; replaced at render with the page product checkout path. */
export const AFFILIATE_LINK_PLACEHOLDER = 'AFFILIATE_LINK_PLACEHOLDER';

/** Resolve in-article CTAs to the matching /go/ hop (seamless 302 to Zadeyo). */
export function resolveAffiliateHrefForSlug(slug: string): string {
  const normalized = slug.trim() || '/';
  if (normalized.includes('cloud-dma')) return checkoutPath('cloud-dma');
  if (normalized.includes('hwid')) return checkoutPath('hwid-spoofer');
  return checkoutPath('bodycam');
}

marked.setOptions({
  gfm: true,
  breaks: false,
});

/** Strip YAML frontmatter from a raw markdown file. */
export function stripFrontmatter(raw: string): string {
  if (!raw.startsWith('---')) return raw;
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return raw;
  return raw.slice(end + 4).replace(/^\r?\n/, '');
}

/** Keep article body; omit implementer-only image alt suggestion blocks from HTML output. */
export function articleMarkdownOnly(raw: string): string {
  const body = stripFrontmatter(raw);
  const marker = '\n### Image alt-text suggestions';
  const idx = body.indexOf(marker);
  return (idx === -1 ? body : body.slice(0, idx)).trim() + '\n';
}

/** Extract suggested image alts from the supplied markdown (not shown on-page). */
export function extractImageAltSuggestions(raw: string): string[] {
  const body = stripFrontmatter(raw);
  const marker = '### Image alt-text suggestions';
  const idx = body.indexOf(marker);
  if (idx === -1) return [];
  const section = body.slice(idx + marker.length);
  return [...section.matchAll(/^-\s+"([^"]+)"/gm)].map((m) => m[1]!);
}

export function renderExactMarkdown(raw: string): string {
  const md = articleMarkdownOnly(raw);
  return marked.parse(md, { async: false }) as string;
}

export function parseExactFrontmatter(raw: string): {
  title: string;
  description: string;
  slug: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    return { title: '', description: '', slug: '' };
  }
  const block = match[1]!;
  const title = block.match(/^title:\s*"(.*)"$/m)?.[1] ?? '';
  const description = block.match(/^description:\s*"(.*)"$/m)?.[1] ?? '';
  const slug = block.match(/^slug:\s*"(.*)"$/m)?.[1] ?? '';
  return { title, description, slug };
}
