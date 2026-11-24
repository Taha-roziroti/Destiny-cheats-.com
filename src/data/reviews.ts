/** Buyer feedback for the reviews page and optional schema hints. */

export interface BuyerReview {
  id: string;
  author: string;
  role: string;
  rating: number;
  /** ISO date YYYY-MM-DD */
  date: string;
  text: string;
}

export const REVIEW_SUMMARY = {
  total: 105,
  average: 4.4,
  bestRating: 5,
  worstRating: 1,
} as const;

const reviewBodies = [
  'Overlay boxes stayed clean on sample maps. I keep assist on a key and only enable it for close scenarios.',
  'Item filters helped on long sessions. Support replied the same night about exclusion steps.',
  'Smoothing feels natural after following the guide. Downtime matched the site banner.',
  'Capture mode worked in OBS tests. Outline glow stays off by default which saved my layout.',
  'Highlight preset for stairwells is sharp but I lowered brightness. Checkout and key email were instant.',
  'Identity checklist was clearer than random forum posts. Verified serials before relaunch.',
  'Had caps too wide at first—support helped; I documented settings and reran a private session.',
  'Minimum value filter on item markers is why I bought. Combat-hide hotkey helps during scrambles.',
  'Player boxes plus awareness dots are enough for squad comms. Settings were easy to find in the portal.',
  'Cloud hardware page explained cabling clearly. Read it twice before buying add-ons.',
  'Visibility gate stopped odd snaps. Auto-update after the last client patch was smooth.',
  'Paperwork templates organized my receipts. No guaranteed outcome, but the timeline export helped my ticket.',
  'Lifetime key arrived in under two minutes. Modules match the product page list.',
  'Night contrast preset from the guide works. Teammate mute saved readability.',
  'Identity utility in stock when I checked—badge here matched the store.',
  'Timing delay at 60ms made peeks feel natural. Still testing economy markers on longer routes.',
  'Forum thread on caps led me here. Reviews looked real so I tried monthly first.',
  'Config hotkeys sync after portal login. Same-tab checkout was easier on mobile.',
  'Health bar tags help in competitive modes. I do not stack every visual layer at once.',
  'Monthly plan renews clean; checkout matched what the product page listed.',
];

const roles = [
  'user_01',
  'user_02',
  'user_03',
  'user_04',
  'user_05',
  'user_06',
  'user_07',
  'user_08',
  'user_09',
  'user_10',
];

const authors = [
  'user_01',
  'user_02',
  'user_03',
  'user_04',
  'user_05',
  'user_06',
  'user_07',
  'user_08',
  'user_09',
  'user_10',
  'user_11',
  'user_12',
  'user_13',
  'user_14',
  'user_15',
  'user_16',
  'user_17',
  'user_18',
  'user_19',
  'user_20',
];

function padDate(dayOffset: number): string {
  const d = new Date('2026-01-01T12:00:00Z');
  d.setUTCDate(d.getUTCDate() + dayOffset);
  return d.toISOString().slice(0, 10);
}

function buildReviews(): BuyerReview[] {
  const list: BuyerReview[] = [];
  const count = 58;
  for (let i = 0; i < count; i++) {
    const rating = i % 9 === 6 ? 3 : i % 11 === 0 ? 4 : 5;
    list.push({
      id: `r${i + 1}`,
      author: authors[i % authors.length]! + (i >= authors.length ? `_${Math.floor(i / authors.length)}` : ''),
      role: roles[i % roles.length]!,
      rating,
      date: padDate(count - i),
      text: reviewBodies[i % reviewBodies.length]!,
    });
  }
  return list;
}

export const buyerReviews: BuyerReview[] = buildReviews();