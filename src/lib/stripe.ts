import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(process.env.VITE_STRIPE_PUBLISHABLE_KEY!);

export const CLASSIC_PRICE_ID = process.env.VITE_STRIPE_CLASSIC_PRICE_ID;
export const VIP_PRICE_ID = process.env.VITE_STRIPE_VIP_PRICE_ID; 