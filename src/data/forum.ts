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
    title: 'Assist FOV and smoothing for competitive modes — what are you running?',
    excerpt: 'Trying to keep assist readable without looking robotic. What FOV / smooth combo survived a full session?',
    author: 'user_01',
    age: '3 hours ago',
    commentsCount: 5,
    upvotes: 214,
    flair: 'Settings',
    body: [
      'Menu has separate hip and ADS curves plus a secondary profile. Humanizer is on but I am not sure if FOV 75 or 110 is sane for close lanes.',
      'If you have a preset that survived a few matches, drop numbers. Not asking for max configs—just something that tracks like a normal player.',
    ],
    comments: [
      { author: 'user_02', age: '3 hours ago', score: 52, body: 'Hip FOV ~85, smooth mid-20s, ADS a bit tighter. I raise smooth before FOV when clips look twitchy.' },
      { author: 'user_03', age: '3 hours ago', score: -6, body: 'reports happen anyway with conservative numbers.' },
      {
        author: 'user_04',
        age: '2 hours ago',
        score: 31,
        body: 'Test two unranked lobbies, watch replay vibes. If snaps look robotic, add smoothness before you touch FOV.',
        replies: [{ author: 'user_01', age: '90 min ago', score: 8, body: 'This helped. Gonna try 85 FOV / 26 smooth tonight.' }],
      },
      { author: 'user_05', age: '1 hour ago', score: 18, body: 'Controller needed lower FOV than mouse. Visibility check on or you track through smoke.' },
      { author: 'user_06', age: '35 min ago', score: 12, body: 'Checkout was quick, loader matched the green status banner on the hub.' },
    ],
  },
  {
    slug: 'cod-loader-boot',
    category: 'Setup & Portal',
    categoryTone: 'blue',
    title: 'Portal first boot on Win11 — what Defender paths did you exclude?',
    excerpt: 'Secure boot on. Portal download done. Short version of antivirus exclusions that actually worked?',
    author: 'user_07',
    age: '5 hours ago',
    commentsCount: 4,
    upvotes: 168,
    flair: 'Install',
    body: [
      'Windows Security quarantined the DLL once already. PDF is long and I do not want to brick day one.',
      'Loader → client → menu key? And does the standalone client behave different for inject timing?',
    ],
    comments: [
      { author: 'user_08', age: '4 hours ago', score: 41, body: 'Exclude the portal folder and the temp unpack path—not whole drives.' },
      { author: 'user_09', age: '4 hours ago', score: -5, body: 'took 40 mins because hardware note was buried. support answered but i was salty.' },
      {
        author: 'user_08',
        age: '3 hours ago',
        score: 22,
        body: 'Same loader order for me. Green banner → launch client → insert key.',
        replies: [{ author: 'user_07', age: '2 hours ago', score: 6, body: 'Defender exclusion fixed it. In client now.' }],
      },
      { author: 'user_10', age: '1 hour ago', score: 15, body: 'Send exact detection name in tickets—guessing slows replies.' },
    ],
  },
  {
    slug: 'cod-esp-night',
    category: 'Overlays & Awareness',
    categoryTone: 'green',
    title: 'Overlay clutter on dark maps — distance cap before teammate outlines?',
    excerpt: 'Item markers plus player boxes fills the screen on moonlit maps. What did you mute first?',
    author: 'user_11',
    age: '6 hours ago',
    commentsCount: 3,
    upvotes: 142,
    body: [
      'Teammate silhouettes dart everywhere during long routes. I want item tags but not a busy HUD.',
      'Distance cap vs opacity — which order did you tune?',
    ],
    comments: [
      { author: 'user_12', age: '5 hours ago', score: 38, body: 'Mute teammate boxes, keep health bars if you duo. Shorten enemy draw distance first.' },
      { author: 'user_13', age: '4 hours ago', score: 21, body: 'On 1080p drop opacity one step before removing layers.' },
      { author: 'user_11', age: '3 hours ago', score: 9, body: 'Distance cap at 120m + muted teammates fixed 80% of it. thanks' },
    ],
  },
  {
    slug: 'cod-wallhack-box',
    category: 'Overlays & Awareness',
    categoryTone: 'green',
    title: 'Outline skeleton on or box-only for interior pushes?',
    excerpt: 'Outline looks sharp in clips but blocks doorways on ultrawide. Box-only enough for CQB?',
    author: 'user_14',
    age: '8 hours ago',
    commentsCount: 4,
    upvotes: 119,
    flair: 'Layout',
    body: [
      'Our squad stacks outline + glow and I lose crosshair gap on stair pushes. Considering a clutch profile with boxes only.',
      'Anyone run box-only full time in competitive interiors?',
    ],
    comments: [
      { author: 'user_15', age: '7 hours ago', score: 29, body: 'Box + distance text full time. Outline on a second profile for post-plant only.' },
      { author: 'user_16', age: '7 hours ago', score: -2, body: 'outline or cope honestly' },
      { author: 'user_14', age: '6 hours ago', score: 11, body: 'switched to box-only, reads are way cleaner' },
      { author: 'user_17', age: '5 hours ago', score: 17, body: 'Ultrawide: shrink box thickness before toggling outline off completely.' },
    ],
  },
  {
    slug: 'cod-patch-loader',
    category: 'Patch & Updates',
    categoryTone: 'purple',
    title: 'Patch night: loader stuck on verifying after client update',
    excerpt: 'Yellow banner after today’s client patch. Anyone get a new hash yet?',
    author: 'user_18',
    age: '12 hours ago',
    commentsCount: 6,
    upvotes: 256,
    flair: 'Patch',
    body: [
      'Loader spins on verify for ten minutes. Not hammering login—learned that locks some accounts temporarily.',
      'Reinstall yesterday’s build or wait for green?',
    ],
    comments: [
      { author: 'user_19', age: '11 hours ago', score: 44, body: 'Wait for green on the hub banner. Reinstalling old build just repeats mismatch.' },
      { author: 'user_20', age: '10 hours ago', score: 12, body: 'VPN stalled mine. Direct connection + reboot fixed verify once new hash posted.' },
      { author: 'user_18', age: '9 hours ago', score: 19, body: 'Green banner just hit. Fresh download worked without full reinstall.' },
      { author: 'user_02', age: '8 hours ago', score: -3, body: 'every patch is stressful idk why yall inject day one' },
      {
        author: 'user_04',
        age: '7 hours ago',
        score: 28,
        body: 'Day-one risk is real — play vanilla a session if you are nervous. Most wait for banner + forum all-clear.',
        replies: [{ author: 'user_18', age: '6 hours ago', score: 5, body: 'fair. gonna dm squad before ranked' }],
      },
      { author: 'user_05', age: '5 hours ago', score: 8, body: 'Copy build hash into support tickets. “Latest” is useless to them.' },
    ],
  },
  {
    slug: 'cod-loot-timing',
    category: 'Overlays & Awareness',
    categoryTone: 'green',
    title: 'Economy intel — worth it if you already run player overlays?',
    excerpt: 'Container tags look useful but add HUD noise. Solo queue worth the extra layer?',
    author: 'user_06',
    age: '1 day ago',
    commentsCount: 2,
    upvotes: 87,
    body: ['Player overlays carry me. Wondering if economy intel pays for itself on longer sessions or just clutters.'],
    comments: [
      { author: 'user_12', age: '23 hours ago', score: 26, body: 'Filter to high-tier containers only. Mute junk crates or you drown.' },
      { author: 'user_06', age: '20 hours ago', score: 7, body: 'high-tier filter + shorter distance = keep. muted the rest.' },
    ],
  },
  {
    slug: 'cod-stream-leak',
    category: 'Setup & Portal',
    categoryTone: 'blue',
    title: 'Stream mode — overlays still leaking in OBS recordings?',
    excerpt: 'Live preview looks clean but MP4 shows boxes. Anyone else?',
    author: 'user_03',
    age: '1 day ago',
    commentsCount: 3,
    upvotes: 103,
    flair: 'Capture',
    body: [
      'Enabled capture-friendly overlay, recorded 30s locally. Boxes visible in file—not on live preview.',
      'GPU driver update last week. Retest whole scene or just game source?',
    ],
    comments: [
      { author: 'user_08', age: '22 hours ago', score: 34, body: 'Scrub saved file always. Live preview lies. Retest every OBS scene.' },
      { author: 'user_09', age: '20 hours ago', score: 14, body: 'Moved capture card HDMI — had to rerun 30s test.' },
      { author: 'user_03', age: '18 hours ago', score: 6, body: 'game capture only + stream mode = clean mp4 now' },
    ],
  },
  {
    slug: 'cod-dma-one-pc',
    category: 'Community',
    categoryTone: 'green',
    title: 'Cloud hardware — anyone running it without a second PC?',
    excerpt: 'The cloud hardware page mentions a laptop reader path. Realistic or marketing?',
    author: 'user_01',
    age: '2 days ago',
    commentsCount: 5,
    upvotes: 131,
    body: ['Software overlays are enough for me but curious about hardware. Not buying a second tower unless people use the laptop route.'],
    comments: [
      { author: 'user_04', age: '2 days ago', score: 37, body: 'Read the hub hardware article first. Most setups still want a second machine.' },
      { author: 'user_05', age: '2 days ago', score: -2, body: 'single pc path is limited stay software' },
      {
        author: 'user_07',
        age: '1 day ago',
        score: 22,
        body: 'Old laptop as reader works if listing says supported. BIOS notes are not optional.',
        replies: [{ author: 'user_01', age: '20 hours ago', score: 4, body: 'gonna read hardware page before I spend' }],
      },
      { author: 'user_10', age: '1 day ago', score: 11, body: 'Software stack + conservative overlays still wins for most squads.' },
      { author: 'user_06', age: '18 hours ago', score: 6, body: 'Checkout for hardware is separate sku — do not mix with standard key on accident.' },
    ],
  },
  {
    slug: 'cod-hwid-account',
    category: 'Setup & Portal',
    categoryTone: 'blue',
    title: 'Identity reset before fresh account — order of operations?',
    excerpt: 'New rig flagged after restriction on old drive. Reset then install loader or reverse?',
    author: 'user_11',
    age: '2 days ago',
    commentsCount: 4,
    upvotes: 156,
    flair: 'Identity',
    body: ['Followed appeals page, still blocked on new login. Portal suggests identity checklist before another purchase.'],
    comments: [
      { author: 'user_13', age: '2 days ago', score: 33, body: 'Restore point, uninstall old tools, reset, cold boot, verify IDs, then loader.' },
      { author: 'user_11', age: '1 day ago', score: 8, body: 'cold boot verify passed. loader green' },
      { author: 'user_15', age: '1 day ago', score: 19, body: 'Attach before/after ID diff in support ticket — speeds approval.' },
      { author: 'user_16', age: '20 hours ago', score: -4, body: 'reset dont fix reputation marks' },
    ],
  },
  {
    slug: 'cod-trigger-pistol',
    category: 'Tuning & Input',
    categoryTone: 'orange',
    title: 'Timing delay for pistols — separate profile worth it?',
    excerpt: 'Rifle timing feels fine but pistols overfire in CQB.',
    author: 'user_17',
    age: '3 days ago',
    commentsCount: 3,
    upvotes: 74,
    body: ['Using one global timing window. Pistols clip looks full auto in replay.'],
    comments: [
      { author: 'user_18', age: '3 days ago', score: 21, body: 'Separate pistol profile in menu. +40ms delay fixed my clips.' },
      { author: 'user_17', age: '2 days ago', score: 5, body: 'split profile worked thx' },
      { author: 'user_19', age: '2 days ago', score: 9, body: 'If you only snipe, global delay fine. CQB needs split.' },
    ],
  },
  {
    slug: 'cod-lite-vs-full',
    category: 'Community',
    categoryTone: 'green',
    title: 'Intel-only overlays vs full assist stack for weekend players?',
    excerpt: 'Squad wants me on callouts only. Is assist overkill if I already hit shots?',
    author: 'user_20',
    age: '3 days ago',
    commentsCount: 4,
    upvotes: 98,
    body: ['Friend says overlays + radar is enough for IGL role. I want timing help but not max settings.'],
    comments: [
      { author: 'user_02', age: '3 days ago', score: 30, body: 'IGL / support: overlays + economy intel, skip assist if mechanics stable.' },
      { author: 'user_03', age: '2 days ago', score: 17, body: 'Entry needs assist profile — I run full stack on breach.' },
      { author: 'user_20', age: '2 days ago', score: 6, body: 'staying overlay-only for now' },
      { author: 'user_04', age: '1 day ago', score: 8, body: 'Module table on product hub breaks tiers — compare before checkout.' },
    ],
  },
  {
    slug: 'cod-chams-night',
    category: 'Overlays & Awareness',
    categoryTone: 'green',
    title: 'Highlight brightness on dark maps — eye strain tips?',
    excerpt: 'Teammate runs bright highlights and swears by it. I get headaches.',
    author: 'user_05',
    age: '4 days ago',
    commentsCount: 2,
    upvotes: 61,
    body: ['Highlights help doorways but full bright pink wrecks my eyes after an hour.'],
    comments: [
      { author: 'user_07', age: '4 days ago', score: 18, body: 'Lower opacity, use team color only, cap distance.' },
      { author: 'user_05', age: '3 days ago', score: 4, body: '40% opacity team color = playable' },
    ],
  },
  {
    slug: 'cod-ricochet-overview',
    category: 'Safety',
    categoryTone: 'orange',
    title: 'Platform integrity notes for desktop clients',
    excerpt: 'Forum thread on platform awareness—not a bypass guide.',
    author: 'user_08',
    age: '5 days ago',
    commentsCount: 4,
    upvotes: 88,
    body: ['The product page lists supported titles; behavior varies by client branch.'],
    comments: [
      { author: 'user_09', age: '5 days ago', score: 22, body: 'Read FAQ after major updates before re-enabling modules.' },
      { author: 'user_08', age: '4 days ago', score: 9, body: 'Loader queue cleared for me after hours.' },
      { author: 'user_10', age: '4 days ago', score: 14, body: 'Verify desktop loader scope at checkout.' },
      { author: 'user_06', age: '3 days ago', score: 11, body: 'Account sanctions remain possible.' },
    ],
  },
  {
    slug: 'cod-mouse-sens',
    category: 'Guides',
    categoryTone: 'green',
    title: 'Mouse sensitivity baseline before assist profiles',
    excerpt: 'Stable cm/360 first, then overlay FOV tweaks.',
    author: 'user_12',
    age: '6 days ago',
    commentsCount: 4,
    upvotes: 102,
    body: ['Changing sensitivity every session makes assist tuning meaningless.'],
    comments: [
      { author: 'user_13', age: '6 days ago', score: 28, body: 'Lock sens a week, then adjust FOV only.' },
      { author: 'user_12', age: '5 days ago', score: 7, body: '28cm/360 anchor worked.' },
      { author: 'user_14', age: '5 days ago', score: 16, body: 'Split ADS like in-game settings.' },
      { author: 'user_15', age: '4 days ago', score: 5, body: 'Same preset worked after the hotfix.' },
    ],
  },
  {
    slug: 'cod-ranked-esp',
    category: 'Overlays & Awareness',
    categoryTone: 'green',
    title: 'Competitive overlay density',
    excerpt: 'Thick boxes hurt competitive rotations.',
    author: 'user_16',
    age: '1 week ago',
    commentsCount: 3,
    upvotes: 76,
    body: ['I shrink distance tags during search-and-destroy style modes.'],
    comments: [
      { author: 'user_17', age: '1 week ago', score: 19, body: '70–80m cap, mute teammates.' },
      { author: 'user_16', age: '6 days ago', score: 6, body: 'trying 70m tonight' },
      { author: 'user_18', age: '5 days ago', score: 4, body: 'discussion.' },
    ],
  },
  {
    slug: 'cod-config-swap',
    category: 'Configuration',
    categoryTone: 'blue',
    title: 'Config profiles between playlists',
    excerpt: 'Split BR and multiplayer toggles?',
    author: 'user_19',
    age: '1 week ago',
    commentsCount: 3,
    upvotes: 69,
    body: ['Loader profiles—worth splitting playlists?'],
    comments: [
      { author: 'user_20', age: '1 week ago', score: 17, body: 'Yes—wider overlays for BR, tighter for MP.' },
      { author: 'user_19', age: '6 days ago', score: 5, body: 'second cfg imported' },
      { author: 'user_01', age: '5 days ago', score: 3, body: 'Imported your cfg—FOV matched mine.' },
    ],
  },
  {
    slug: 'cod-checkout',
    category: 'Checkout',
    categoryTone: 'blue',
    title: 'Where checkout shows',
    excerpt: 'Checkout is on the checkout page.',
    author: 'user_02',
    age: '2 days ago',
    commentsCount: 3,
    upvotes: 54,
    body: ['Proceed to Checkout opens the live plan list.'],
    comments: [
      { author: 'user_03', age: '2 days ago', score: 15, body: 'Plans appear on the checkout page.' },
      { author: 'user_02', age: '2 days ago', score: 4, body: 'saw monthly and lifetime there' },
      { author: 'user_04', age: '1 day ago', score: 6, body: 'forum threads.' },
    ],
  },
  {
    slug: 'cod-win11-loader',
    category: 'Support',
    categoryTone: 'orange',
    title: 'Windows 11 first-boot checklist',
    excerpt: 'Defender and overlay order.',
    author: 'user_05',
    age: '3 days ago',
    commentsCount: 3,
    upvotes: 91,
    body: ['Which exclusions before first inject on Win11?'],
    comments: [
      { author: 'user_06', age: '3 days ago', score: 20, body: 'Follow support steps; reboot between.' },
      { author: 'user_05', age: '2 days ago', score: 5, body: 'reboot helped' },
      { author: 'user_07', age: '2 days ago', score: 4, body: 'Pinned this for the next patch thread.' },
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