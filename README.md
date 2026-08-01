# Find My Nakshatra — Marketing Website

Bilingual (English + Tamil) consultation website for **findmynakshatra.com**.

## Documentation

| Doc | Use when |
|-----|----------|
| **[PRODUCTION.md](./PRODUCTION.md)** | Production release, Vercel deploy, **map findmynakshatra.com**, troubleshooting |
| This README | Local preview & quick overview |

## Local preview

```bash
cd findmynakshatra
npm install
npm run dev
```

Open http://localhost:4321 → redirects to `/en/`. Tamil: `/ta/`.

```bash
npm run build    # must pass before release
npm run preview  # test production build locally
```

## Before launch — WhatsApp (private)

Do **not** put your mobile number in git. Use an environment variable:

```bash
cp .env.example .env
# edit .env → PUBLIC_WHATSAPP=91XXXXXXXXXX
```

On Vercel: **Settings → Environment Variables** → add `PUBLIC_WHATSAPP` (digits only, with country code). Redeploy after saving.

Keep `showPhonePublicly: false` in `src/config.ts` so the number is never shown as text on the site.

## Deploy & domain (summary)

Full steps: **[PRODUCTION.md](./PRODUCTION.md)**.

1. Push to GitHub  
2. Vercel → Import project → Root = `findmynakshatra` if monorepo  
3. Vercel → **Settings → Domains** → add `findmynakshatra.com` + `www`  
4. Namecheap Advanced DNS → add Vercel A/CNAME · **keep Zoho MX/SPF/DKIM**  
5. Wait for Valid + HTTPS  

## Pages

| English | Tamil |
|---------|-------|
| `/en/` | `/ta/` |
| `/en/services/` | `/ta/sevai/` |
| `/en/about/` | `/ta/about/` |
| `/en/book/` | `/ta/book/` |
| `/en/contact/` | `/ta/contact/` |
| `/en/share/` (QR) | `/ta/share/` |
| `/en/privacy/` | `/ta/privacy/` |
| `/en/terms/` | `/ta/terms/` |

## SEO included

- Unique titles & descriptions per page  
- `hreflang` en / ta / x-default  
- `sitemap-index.xml`  
- `robots.txt`  
- JSON-LD ProfessionalService + Person (credentials)  
