type ArticleBody = {
  intro: string;
  sections: { heading: string; level?: 2 | 3; paragraphs: string[] }[];
  table?: { headers: string[]; rows: string[][] };
  checklist?: string[];
  takeaways: string[];
  faqs: { q: string; a: string }[];
  midCtaTitle: string;
  midCtaHtml: string;
  endCtaHtml: string;
};

const hub = '/products/call-of-duty-cheats/';
const modules = '/products/call-of-duty-cheats/modules/';
const checkout = '/go/call-of-duty/';

function placeholderArticle(title: string): ArticleBody {
  return {
    intro: `Placeholder guide: <strong>${title}</strong>. This is demo copy for Example Site. See the <a href="${hub}">product hub</a> and <a href="/faq/">FAQ</a> for wiring-only links.`,
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'This section holds neutral placeholder text. Structure matches production articles: headings, paragraphs, and optional tables.',
          'Replace this copy in a real deployment. Routes, slugs, and CTAs remain functional in the design shell.',
        ],
      },
      {
        heading: 'Checklist',
        paragraphs: [
          'Read the portal status banner before launch.',
          'Download only from the receipt-linked portal.',
          'Run a private validation session before competitive queues.',
        ],
      },
      {
        heading: 'Next steps',
        paragraphs: [
          `Compare module scope on the <a href="${modules}">modules page</a> when you are ready to continue.`,
          'Open support with your order email if delivery or exclusions fail on first boot.',
        ],
      },
    ],
    table: {
      headers: ['Check', 'Why'],
      rows: [
        ['Portal status', 'Avoid stale builds after updates'],
        ['Module list', 'Match checkout to your workspace'],
        ['Windows setup', 'Fewer false positives from security tools'],
      ],
    },
    checklist: ['Read status banner', 'Portal download only', 'Private test first', 'Save presets to cloud'],
    takeaways: [
      'Placeholder takeaway: verify scope before checkout.',
      'Placeholder takeaway: test privately after every client update.',
      'Placeholder takeaway: use official portal links only.',
    ],
    faqs: [
      { q: 'Is this article official documentation?', a: 'No. It is sample copy for the Example Site design shell.' },
      { q: 'Where is checkout?', a: 'Checkout buttons route through the configured affiliate path on example.com.' },
    ],
    midCtaTitle: 'Explore the catalog',
    midCtaHtml: `<p>Review modules on the <a href="${hub}">product hub</a> or open <a href="${checkout}">checkout</a> when your checklist is done.</p>`,
    endCtaHtml: `<p>Need help? Visit <a href="/support/">support</a>, browse <a href="/forum/">forum</a> threads, or read <a href="/reviews/">reviews</a>.</p>`,
  };
}

export const articlesBySlug: Record<string, ArticleBody> = {
  'buy-cod-cheats': placeholderArticle('How to buy Product Alpha'),
  'cod-aimbot-fov': placeholderArticle('Assist FOV settings'),
  'cod-free-vs-paid': placeholderArticle('Free vs paid access'),
  'cod-wallhack': placeholderArticle('Layout overlays vs boxes'),
  'cod-esp-settings': placeholderArticle('Overlay settings'),
  'cod-no-recoil': placeholderArticle('Recoil tuning'),
  'cod-setup': placeholderArticle('First-night setup'),
  'cod-patch-day': placeholderArticle('Update day checklist'),
  'cod-stream-obs': placeholderArticle('OBS capture checklist'),
  'cod-patch-log': placeholderArticle('Patch log habits'),
  'cod-choose-plan': placeholderArticle('Monthly or lifetime plans'),
};