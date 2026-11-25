/**
 * Listed Destiny 2 plan prices from the Zadeyo product duration picker.
 * Always remind users to verify live checkout totals.
 */
import { checkoutPath } from '../config/checkout';
import { BODYCAM_PLANS, CLOUD_DMA_PLAN } from './bodycam';

export type ProductPlanId = 'monthly' | 'lifetime' | 'onetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  billing: string;
  price?: string;
  priceCurrency?: string;
  priceNote: string;
  buyUrl: string;
}

const destinyCheckout = checkoutPath('destiny');
const cloudCheckout = checkoutPath('cloud-dma');

const standardPlans: ProductPlan[] = BODYCAM_PLANS.map((plan) => ({
  id: plan.id,
  label: plan.label,
  billing: plan.id,
  price: plan.price,
  priceCurrency: plan.currency,
  priceNote: `${plan.priceDisplay} — ${plan.duration}. Verify at checkout.`,
  buyUrl: `${destinyCheckout}?plan=${plan.id}`,
}));

const cloudPlans: ProductPlan[] = [
  {
    id: 'lifetime',
    label: CLOUD_DMA_PLAN.label,
    billing: 'lifetime',
    price: CLOUD_DMA_PLAN.price,
    priceCurrency: CLOUD_DMA_PLAN.currency,
    priceNote: `${CLOUD_DMA_PLAN.priceDisplay} — ${CLOUD_DMA_PLAN.duration}. Separate from Destiny 2 cheat plans.`,
    buyUrl: cloudCheckout,
  },
];

export function getProductPlans(productSlug: string): ProductPlan[] {
  if (productSlug === 'cloud-dma') return cloudPlans;
  return standardPlans;
}

export function checkoutUrlWithPlan(baseUrl: string, planId: ProductPlanId): string {
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}plan=${planId}`;
}

export function getBodycamOffersForSchema(offerPagePath = '/') {
  return getFragPunkOffersForSchema(offerPagePath);
}

export function getFragPunkOffersForSchema(offerPagePath = '/') {
  return BODYCAM_PLANS.map((plan) => ({
    name: `${plan.label} Destiny 2 Cheats`,
    url: offerPagePath,
    price: plan.price,
    priceCurrency: plan.currency,
    availability: 'https://schema.org/InStock',
  }));
}

export function getCloudDmaOfferForSchema(offerPagePath = '/cloud-dma/') {
  return {
    name: CLOUD_DMA_PLAN.label,
    url: offerPagePath,
    price: CLOUD_DMA_PLAN.price,
    priceCurrency: CLOUD_DMA_PLAN.currency,
    availability: 'https://schema.org/InStock',
  };
}
