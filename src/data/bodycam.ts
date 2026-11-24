/**
 * Bodycam product facts sourced from Zadeyo listings.
 * Do not invent features, prices, or claims beyond these references.
 * Product: https://zadeyo.com/products/bodycam-cheats
 * Cloud DMA: https://zadeyo.com/products/cloud-dma
 */

export const BODYCAM_PRODUCT_NAME = 'Bodycam Cheats';
export const BODYCAM_BRAND = 'Bodycam Cheat';

export const BODYCAM_PLANS = [
  {
    id: 'monthly' as const,
    label: 'Monthly',
    price: '35',
    priceDisplay: '$35',
    currency: 'USD',
    duration: '30 days of access',
    billingNote: 'Billed for a 30-day access period',
  },
  {
    id: 'lifetime' as const,
    label: 'Lifetime',
    price: '150',
    priceDisplay: '$150',
    currency: 'USD',
    duration: 'One-time payment',
    billingNote: 'One-time payment for lifetime access while the product is offered',
  },
] as const;

export const CLOUD_DMA_PLAN = {
  id: 'lifetime' as const,
  label: 'Cloud DMA lifetime',
  price: '50',
  priceDisplay: '$50',
  currency: 'USD',
  duration: 'Unlimited access (lifetime tier)',
} as const;

/** Feature groups exactly as listed on the Zadeyo Bodycam product page. */
export const BODYCAM_FEATURE_GROUPS = {
  aimbot: {
    heading: 'Aimbot options',
    items: [
      'Aimbot (Head / Chest)',
      'FOV Circle',
      'Aim Line',
      'Silent Aim',
      'Magic Bullets',
      'Instant Kill',
      'Instant Aim',
      'No Aim Restrictions',
    ],
  },
  visual: {
    heading: 'Visual options',
    items: [
      'Player ESP',
      'Box ESP',
      'Skeleton',
      'Snaplines',
      'Player Chams',
      'Local Chams',
      'Weapon Chams',
      'Nicknames',
      'Health Bar',
      'Distance',
      'Team Check',
      'No Flash',
      'Drone ESP',
      'Bomb ESP',
    ],
  },
  movementWeapon: {
    heading: 'Movement & weapon options',
    items: [
      'Custom View FOV',
      'Gravity Multiplier',
      'Fly Hack',
      'No World Border',
      'Third Person',
      'No Recoil',
      'Rapid Fire',
      'Full Auto',
      'Unlimited Ammo',
      'God Mode',
      'Teleport Enemies In Front',
    ],
  },
  misc: {
    heading: 'Misc options',
    items: [
      'Show Mouse Cursor In Menu',
      'Suicide Button',
      'CLOUD DMA NEEDED',
      'Full Color Customization',
    ],
  },
} as const;

/** High-level modules called out in the Zadeyo product details copy. */
export const BODYCAM_OVERVIEW_MODULES = [
  'Player ESP',
  'Tunable aimbot',
  'Separate recoil layers',
  'Radar',
  'Stream-proof modes',
] as const;

export const BODYCAM_SYSTEM_REQUIREMENTS = {
  os: 'Windows 10 and 11 supported',
  flags: ['HVCI ON', 'Core Isolation ON', 'TPM ON', 'Secure Boot ON'] as const,
  notes: [
    '8 GB RAM minimum and a dedicated GPU are listed for running the product.',
    'Cloud DMA is required for full functionality on supported builds.',
  ] as const,
};

export const CLOUD_DMA_REQUIREMENTS = {
  os: 'Windows 10 / 11 (64-bit)',
  flags: ['HVCI ON', 'Core Isolation ON', 'TPM ON', 'Secure Boot ON'] as const,
  items: [
    'Single-PC setup — not compatible with setups that require a second physical tower or external DMA box',
    'CPU virtualization (Intel VT-x or AMD-V) enabled in firmware for Hyper-V',
    'Ability to enable the Hyper-V role during guided setup (Windows Pro/Enterprise/Education recommended; follow the installer notes for your edition)',
    'Minimum 8 GB system RAM (16 GB recommended)',
    'Stable broadband internet for activation and ongoing service connectivity',
  ] as const,
  separatePurchases: [
    {
      name: 'GREENWARD',
      note: 'Separate purchase (required). Not included in Cloud DMA checkout.',
    },
    {
      name: 'Static Server',
      note: 'Separate purchase (required). Not the same product as AWS.',
    },
    {
      name: 'AWS',
      note: 'Separate purchase (required). Not the same product as Static Server.',
    },
  ] as const,
};

export const BODYCAM_ROUTES = {
  home: '/',
  buyingGuide: '/best-bodycam-cheats/',
  aimbot: '/bodycam-aimbot/',
  esp: '/bodycam-esp/',
  pricing: '/bodycam-cheats-price/',
  cloudDma: '/bodycam-cloud-dma/',
} as const;

export const PRICE_VERIFY_NOTE =
  'Displayed prices should be verified against the live checkout before purchase. Currency, taxes, and plan availability can change on the store.';

export const RISK_DISCLAIMER =
  'Third-party software can violate Bodycam and platform rules. Account penalties are possible. This site explains listed features and checkout options; it does not promise safety, stealth, or uninterrupted access after game updates.';
