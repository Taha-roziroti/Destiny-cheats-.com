import { marked } from 'marked';
import { checkoutPath } from '../config/checkout';

/** Marker in authored markdown; replaced at render with the page product checkout path. */
export const AFFILIATE_LINK_PLACEHOLDER = 'AFFILIATE_LINK_PLACEHOLDER';

/** Resolve in-article CTAs to the matching /go/ hop (seamless 302 to Zadeyo). */
export function resolveAffiliateHrefForSlug(slug: string): string {
  const normalized = slug.trim() || '/';
  if (normalized.includes('cloud-dma') && !normalized.includes('requirements')) {
    return checkoutPath('cloud-dma');
  }
  if (normalized.includes('hwid')) return checkoutPath('hwid-spoofer');
  return checkoutPath('fragpunk');
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

function renderMdFragment(md: string): string {
  const trimmed = md.trim();
  if (!trimmed) return '';
  return marked.parse(trimmed, { async: false }) as string;
}

export type ExactArticleSection = {
  heading: string;
  html: string;
};

export type ExactArticleParts = {
  h1: string;
  /** Plain-text lead for the hero (first paragraph). */
  leadText: string;
  /** Full lead HTML (everything before the first h2). */
  leadHtml: string;
  sections: ExactArticleSection[];
};

/** Split authored markdown into hero H1/lead plus h2 sections for interleaved media. */
export function parseExactArticle(raw: string): ExactArticleParts {
  const md = articleMarkdownOnly(raw);
  const h1Match = md.match(/^#\s+(.+)\s*$/m);
  const h1 = (h1Match?.[1] ?? '').trim();
  const withoutH1 = md.replace(/^#\s+.+\s*\r?\n+/, '');
  const chunks = withoutH1.split(/^##\s+/m);
  const leadMd = (chunks[0] ?? '').trim();
  const leadHtml = renderMdFragment(leadMd);
  const leadText =
    leadMd
      .split(/\n\n+/)
      .map((block) => block.trim())
      .find((block) => block.length > 0 && !block.startsWith('#') && !block.startsWith('[') && !block.startsWith('|') && !block.startsWith('-') && !block.startsWith('*'))
      ?.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_`]/g, '')
      .trim() ?? '';

  const sections: ExactArticleSection[] = chunks.slice(1).map((chunk) => {
    const nl = chunk.search(/\r?\n/);
    const heading = (nl === -1 ? chunk : chunk.slice(0, nl)).trim();
    const body = nl === -1 ? '' : chunk.slice(nl + 1).trim();
    return { heading, html: renderMdFragment(body) };
  });

  return { h1, leadText, leadHtml, sections };
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
