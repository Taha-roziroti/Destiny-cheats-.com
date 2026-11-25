import type { IconName } from '../components/icons/types';

export const featureIcons: Record<string, IconName> = {
  'Assist & recoil': 'featureAimbot',
  'Overlays & intel': 'featureEsp',
  'Radar & sound': 'featureRadar',
  'Trigger & auto-fire': 'triggerBot',
  'Misc movement': 'toolkitMovement',
  'Stream-safe layer': 'streamProof',
  'Cloud profiles': 'compareCloudBackup',
};

export const whyUsIcons: IconName[] = ['whyShield', 'whyUsers', 'whyMonitor', 'whyHeadphones'];

export const setupStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqCheck'];

export const toolkitIcons: Record<string, IconName> = {
  Combat: 'toolkitCombat',
  Vision: 'toolkitVision',
  Radar: 'toolkitRadar',
  Weapons: 'toolkitWeapons',
  Movement: 'toolkitMovement',
  Profiles: 'toolkitProfiles',
};

export const workflowIcons: IconName[] = [
  'workflowAlert',
  'workflowPackage',
  'workflowSettings',
  'workflowCheck',
];

export const fieldNoteIcons: IconName[] = ['fieldCalendar', 'fieldShield', 'fieldHeadphones'];

export const blogTagIcons: Record<string, IconName> = {
  Articles: 'navBlog',
  Setup: 'settings',
  Features: 'layers',
  Updates: 'refresh',
  Troubleshooting: 'alert',
  Faceit: 'shield',
};

export const heroStatusPills: { icon: IconName; label: string }[] = [
  { icon: 'espActive', label: 'Overlays on' },
  { icon: 'radarOnline', label: 'Radar online' },
  { icon: 'seasonBuild', label: 'Current build' },
  { icon: 'shieldCheck', label: 'Status checked' },
  { icon: 'softAim', label: 'Soft assist' },
  { icon: 'noRecoil', label: 'Recoil profile' },
  { icon: 'streamProof', label: 'Capture-aware' },
  { icon: 'skeletonEsp', label: 'Outline mode' },
  { icon: 'support247', label: 'FAQ support' },
  { icon: 'instantDelivery', label: 'Fast delivery' },
  { icon: 'triggerBot', label: 'Timing assist' },
  { icon: 'boneSelect', label: 'Target select' },
  { icon: 'liveStatus', label: 'Live status' },
  { icon: 'autoUpdates', label: 'Auto updates' },
];

export const heroStatIcons: IconName[] = [
  'heroStatStream',
  'heroStatClock',
  'heroStatUsers',
  'heroStatHeadphones',
];

export const cheatTierIcons: Record<string, IconName> = {
  ProductAlpha: 'crosshair',
  Lite: 'tierLite',
  Pro: 'tierPro',
  Elite: 'tierElite',
};

export const productCategoryIcons: Record<string, IconName> = {
  'Core product': 'coreProduct',
  'External suite': 'externalSuite',
  'DMA hardware': 'dmaHardware',
  'System utility': 'systemUtility',
  'Account recovery': 'accountRecovery',
  Cosmetic: 'cosmetic',
};

export const acquisitionStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqZap', 'acqCheck'];

export const productAcquisitionStepIcons: IconName[] = [
  'liveStatus',
  'acqPackage',
  'headphones',
  'acqCheck',
];

export const productRequirementIcons: Partial<Record<IconName, IconName>> = {
  reqWindows: 'compatWindows',
  reqSteam: 'compatSteam',
  reqSettings: 'compatPackage',
  reqWifi: 'compatWifi',
  reqCpu: 'compatMonitor',
  reqRestorePoint: 'compatRefresh',
  reqShieldGuide: 'compatShield',
  reqMailOrder: 'mail',
  reqShieldAccount: 'compatShield',
  reqWifiPortal: 'compatWifi',
};

export function requirementDisplayIcon(icon: IconName): IconName {
  return productRequirementIcons[icon] ?? icon;
}

export const compatibilityIcons: IconName[] = [
  'compatWindows',
  'compatPackage',
  'compatSteam',
  'compatMonitor',
  'compatRefresh',
  'compatWifi',
  'compatDiscord',
  'compatShield',
];