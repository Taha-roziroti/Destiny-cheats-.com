/**
 * Destiny 2 product facts sourced from the Zadeyo Destiny 2 listing and Cloud DMA page.
 * Do not invent features, prices, or detection claims beyond these references.
 * Product: https://zadeyo.com/products/destiny-2-cheats
 * Cloud DMA: https://zadeyo.com/products/cloud-dma
 */

export const BODYCAM_PRODUCT_NAME = 'Destiny 2 Cheats';
export const BODYCAM_BRAND = 'Destiny 2 Cheats';

/** Last date these listed prices were verified against the merchant listing. */
export const PRICES_LAST_VERIFIED = '2026-11-25';

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

export const BODYCAM_FEATURE_GROUPS = {
  softAim: {
    heading: 'Soft Aim options',
    items: [
      'Enable Soft Aim',
      'Aim Key',
      'Aim FOV',
      'Aim Smooth',
      'Bone Selection (Head / Chest / Closest)',
      'Visible Check',
      'Draw FOV',
      'Draw Target Line',
      'Max Aim Distance',
      'Ignore Teammates',
    ],
  },
  visual: {
    heading: 'Player visual options',
    items: [
      'Player ESP',
      'Box Styles (Full / Corner)',
      'Skeleton',
      'Head Circle',
      'Health Bar',
      'Name',
      'Distance',
      'Weapon',
      'View Direction',
      'Out of Screen Arrows',
      'Visible / Hidden Colors',
      'Max ESP Distance',
      'Team / Squad',
    ],
  },
  radar: {
    heading: 'Radar options',
    items: ['2D Radar', 'Player Markers', 'Radar Range', 'Radar Zoom'],
  },
  misc: {
    heading: 'Misc options',
    items: [
      'No Recoil',
      'No Spread',
      'Full Bright',
      'Custom Crosshair',
      'Stream-Proof Overlay',
      'Custom Menu Key',
      'Custom Panic Key',
      'Config System (Save / Load)',
    ],
  },
} as const;

export const BODYCAM_OVERVIEW_MODULES = [
  'Aimbot',
  'Player ESP',
  'Radar',
  'No recoil / no spread',
  'Stream-proof overlay',
] as const;

export const BODYCAM_SYSTEM_REQUIREMENTS = {
  os: 'Windows 10 and 11 supported',
  client: 'Steam / Official Client',
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
      note: 'Separate purchase (required). Not included in Cloud DMA checkout. Price not independently verified here.',
    },
    {
      name: 'Static Server',
      note: 'Separate purchase (required). Not the same product as AWS. Price not independently verified here.',
    },
    {
      name: 'AWS',
      note: 'Separate purchase (required). Not the same product as Static Server. Price not independently verified here.',
    },
  ] as const,
};

export const BODYCAM_ROUTES = {
  home: '/',
  pricing: '/destiny-cheats-price/',
  cloudDma: '/cloud-dma/',
  cloudDmaRequirements: '/cloud-dma-requirements/',
} as const;

export const PRICE_VERIFY_NOTE =
  'Displayed prices should be verified against the live checkout before purchase. Currency, taxes, and plan availability can change on the store.';

export const RISK_DISCLAIMER =
  'Third-party software can violate Destiny 2 and platform rules. Account penalties are possible. This site explains listed features and checkout options; it does not promise safety, stealth, detection status, or uninterrupted access after game updates.';
