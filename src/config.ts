/**
 * Site config — Find My Nakshatra
 *
 * WhatsApp number is NOT stored in git. Set it in:
 * - Local: `.env` (see `.env.example`)
 * - Vercel: Project → Settings → Environment Variables → PUBLIC_WHATSAPP
 *
 * Keep showPhonePublicly = false so digits are never printed on pages.
 * Buttons still open WhatsApp via wa.me when PUBLIC_WHATSAPP is set.
 */
const whatsappDigits =
  String(import.meta.env.PUBLIC_WHATSAPP ?? '')
    .replace(/\D/g, '')
    .trim();

const phoneDisplay =
  String(import.meta.env.PUBLIC_PHONE_DISPLAY ?? '').trim();

export const site = {
  name: 'Find My Nakshatra',
  domain: 'https://findmynakshatra.com',
  email: 'contact@findmynakshatra.com',
  owner: 'Sivaraman',
  city: 'Bangalore',
  region: 'Karnataka',
  country: 'IN',
  /** Digits only — from PUBLIC_WHATSAPP env; empty if unset */
  whatsapp: whatsappDigits,
  /** Shown only if showPhonePublicly is true */
  phoneDisplay,
  /** Recommended: false — button says "WhatsApp", not the digits */
  showPhonePublicly: false as boolean,
  appUrl: '',
  ogImage: '/og-image.jpg',
  qrImage: '/qr-findmynakshatra.png',
  /** Generated at build from PUBLIC_WHATSAPP — opens booking chat */
  qrWhatsappImage: '/qr-whatsapp.svg',
  qrWhatsappPng: '/qr-whatsapp.png',
  geo: {
    placename: 'Bangalore',
    region: 'IN-KA',
    position: '12.9716;77.5946',
  },
};

export function whatsappUrl(prefill?: string): string | null {
  if (!site.whatsapp) return null;
  const base = `https://wa.me/${site.whatsapp}`;
  if (!prefill) return base;
  return `${base}?text=${encodeURIComponent(prefill)}`;
}
