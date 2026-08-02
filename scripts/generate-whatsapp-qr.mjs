/**
 * Generate WhatsApp booking QR (with WhatsApp mark) from PUBLIC_WHATSAPP.
 * Runs before dev/build. Does not print the number in source — only encodes wa.me URL.
 *
 * Usage: node scripts/generate-whatsapp-qr.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import QRCode from 'qrcode';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outPng = path.join(root, 'public', 'qr-whatsapp.png');
const outSvg = path.join(root, 'public', 'qr-whatsapp.svg');

function loadEnvFile() {
  const envPath = path.join(root, '.env');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (!(key in process.env) || process.env[key] === '') {
      process.env[key] = val;
    }
  }
}

loadEnvFile();

const digits = String(process.env.PUBLIC_WHATSAPP ?? '')
  .replace(/\D/g, '')
  .trim();

/** Short prefill — dense QR scans poorly with long booking forms */
const PREFILL =
  'Namaste, I want to book a consultation with Find My Nakshatra.';

const SIZE = 512;

/** Official-style WhatsApp glyph (simplified), centered on QR */
function whatsappLogoGroup(viewBoxSize) {
  const box = viewBoxSize * 0.22;
  const x = (viewBoxSize - box) / 2;
  const y = (viewBoxSize - box) / 2;
  const pad = box * 0.08;
  return `
  <rect x="${x - pad}" y="${y - pad}" width="${box + pad * 2}" height="${box + pad * 2}" rx="${box * 0.22}" fill="#ffffff"/>
  <g transform="translate(${x}, ${y}) scale(${box / 24})">
    <circle cx="12" cy="12" r="12" fill="#25D366"/>
    <path fill="#ffffff" d="M17.5 14.4c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.8-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.3-.4.1-.2.1-.3 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8 1.6.6 2.2.7 3 .6.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.3z"/>
  </g>`;
}

async function main() {
  if (!digits) {
    console.warn(
      '[generate-whatsapp-qr] PUBLIC_WHATSAPP not set — skipping WhatsApp QR. Set it in .env or Vercel env.',
    );
    // Remove stale assets so the site hides WA QR cleanly
    for (const f of [outPng, outSvg]) {
      if (fs.existsSync(f)) fs.unlinkSync(f);
    }
    process.exit(0);
  }

  const url = `https://wa.me/${digits}?text=${encodeURIComponent(PREFILL)}`;

  await QRCode.toFile(outPng, url, {
    width: SIZE,
    margin: 2,
    errorCorrectionLevel: 'H',
    color: { dark: '#232F3E', light: '#FFFFFF' },
  });

  let svg = await QRCode.toString(url, {
    type: 'svg',
    width: SIZE,
    margin: 2,
    errorCorrectionLevel: 'H',
    color: { dark: '#232F3E', light: '#FFFFFF' },
  });

  // Inject WhatsApp mark before closing </svg>
  const vbMatch = svg.match(/viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/);
  const vb = vbMatch ? Number(vbMatch[1]) : 33;
  svg = svg.replace('</svg>', `${whatsappLogoGroup(vb)}</svg>`);

  fs.writeFileSync(outSvg, svg, 'utf8');
  console.log(`[generate-whatsapp-qr] Wrote ${path.relative(root, outPng)} and .svg (wa.me booking QR)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
