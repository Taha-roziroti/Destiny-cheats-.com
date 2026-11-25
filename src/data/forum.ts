export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
}

export const forumCategories = [
  { name: 'Setup & Portal', tone: 'blue', icon: 'settings' },
  { name: 'Tuning & Input', tone: 'orange', icon: 'featureAimbot' },
  { name: 'Overlays & Awareness', tone: 'green', icon: 'featureEsp' },
  { name: 'Patch & Updates', tone: 'purple', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

export const forumPosts: ForumPost[] = [
  {
    slug: 'cod-forum-aimbot',
    category: 'Tuning & Input',
    categoryTone: 'orange',
    title: 'Module tuning presets — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_01',
    age: '3 hours ago',
    commentsCount: 5,
    upvotes: 214,
    flair: 'Settings',
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
  {
    slug: 'cod-loader-boot',
    category: 'Setup & Portal',
    categoryTone: 'blue',
    title: 'Portal first boot on Win11 — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_07',
    age: '5 hours ago',
    commentsCount: 4,
    upvotes: 168,
    flair: 'Install',
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
  {
    slug: 'cod-esp-night',
    category: 'Overlays & Awareness',
    categoryTone: 'green',
    title: 'Overlay clutter on dark themes — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_11',
    age: '6 hours ago',
    commentsCount: 3,
    upvotes: 142,
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
  {
    slug: 'cod-wallhack-box',
    category: 'Overlays & Awareness',
    categoryTone: 'green',
    title: 'Layout options for interior views — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_14',
    age: '8 hours ago',
    commentsCount: 4,
    upvotes: 119,
    flair: 'Layout',
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
  {
    slug: 'cod-patch-loader',
    category: 'Patch & Updates',
    categoryTone: 'purple',
    title: 'Update night: loader verify — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_18',
    age: '12 hours ago',
    commentsCount: 6,
    upvotes: 256,
    flair: 'Patch',
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
  {
    slug: 'cod-loot-timing',
    category: 'Overlays & Awareness',
    categoryTone: 'green',
    title: 'Marker layers with overlays — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_06',
    age: '1 day ago',
    commentsCount: 2,
    upvotes: 87,
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
  {
    slug: 'cod-stream-leak',
    category: 'Setup & Portal',
    categoryTone: 'blue',
    title: 'Capture mode in OBS — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_03',
    age: '1 day ago',
    commentsCount: 3,
    upvotes: 103,
    flair: 'Capture',
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
  {
    slug: 'cod-dma-one-pc',
    category: 'Community',
    categoryTone: 'green',
    title: 'Infrastructure without a second machine — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_01',
    age: '2 days ago',
    commentsCount: 5,
    upvotes: 131,
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
  {
    slug: 'cod-hwid-account',
    category: 'Setup & Portal',
    categoryTone: 'blue',
    title: 'Identity reset order — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_11',
    age: '2 days ago',
    commentsCount: 4,
    upvotes: 156,
    flair: 'Identity',
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
  {
    slug: 'cod-trigger-pistol',
    category: 'Tuning & Input',
    categoryTone: 'orange',
    title: 'Timing profiles — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_17',
    age: '3 days ago',
    commentsCount: 3,
    upvotes: 74,
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
  {
    slug: 'cod-lite-vs-full',
    category: 'Community',
    categoryTone: 'green',
    title: 'Module stack depth — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_20',
    age: '3 days ago',
    commentsCount: 4,
    upvotes: 98,
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
  {
    slug: 'cod-chams-night',
    category: 'Overlays & Awareness',
    categoryTone: 'green',
    title: 'Highlight brightness — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_05',
    age: '4 days ago',
    commentsCount: 2,
    upvotes: 61,
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
  {
    slug: 'cod-ricochet-overview',
    category: 'Safety',
    categoryTone: 'orange',
    title: 'Platform integrity notes — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_08',
    age: '5 days ago',
    commentsCount: 4,
    upvotes: 88,
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
  {
    slug: 'cod-mouse-sens',
    category: 'Guides',
    categoryTone: 'green',
    title: 'Input baseline before modules — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_12',
    age: '6 days ago',
    commentsCount: 4,
    upvotes: 102,
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
  {
    slug: 'cod-ranked-esp',
    category: 'Overlays & Awareness',
    categoryTone: 'green',
    title: 'Overlay density — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_16',
    age: '1 week ago',
    commentsCount: 3,
    upvotes: 76,
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
  {
    slug: 'cod-config-swap',
    category: 'Configuration',
    categoryTone: 'blue',
    title: 'Config profiles between workspaces — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_19',
    age: '1 week ago',
    commentsCount: 3,
    upvotes: 69,
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
  {
    slug: 'cod-checkout',
    category: 'Checkout',
    categoryTone: 'blue',
    title: 'Where plans are listed — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_02',
    age: '2 days ago',
    commentsCount: 3,
    upvotes: 54,
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
  {
    slug: 'cod-win11-loader',
    category: 'Support',
    categoryTone: 'orange',
    title: 'Windows 11 first-boot checklist — placeholder thread',
    excerpt: 'Short placeholder excerpt for the example.com forum layout.',
    author: 'user_05',
    age: '3 days ago',
    commentsCount: 3,
    upvotes: 91,
    body: [
      'Placeholder forum post body. Replace when real content is ready.',
    ],
    comments: [
      { author: 'user_01', age: '2 hours ago', score: 12, body: 'Placeholder reply for layout testing on example.com.' },
      { author: 'user_02', age: '1 hour ago', score: 8, body: 'Second placeholder comment — structure only.' },
    ],
  },
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}

export const productRelatedForumSlugs: Record<string, string[]> = {
  modules: [
    'cod-forum-aimbot',
    'cod-esp-night',
    'cod-wallhack-box',
    'cod-loot-timing',
    'cod-lite-vs-full',
    'cod-patch-loader',
  ],
  'hwid-spoofer': ['cod-hwid-account', 'cod-loader-boot', 'cod-patch-loader'],
  appeals: ['cod-hwid-account', 'cod-patch-loader'],
  'cloud-dma': ['cod-dma-one-pc', 'cod-loader-boot'],
};

export function getRelatedForumPosts(slugs: string[], limit = 6): ForumPost[] {
  const out: ForumPost[] = [];
  for (const slug of slugs) {
    const post = getForumPost(slug);
    if (post) out.push(post);
    if (out.length >= limit) break;
  }
  return out;
}