# Find My Nakshatra — Production Release & Operations Guide

Documentation for releasing **findmynakshatra.com**, connecting the domain on **Vercel**, and fixing issues later.

---

## Table of contents

1. [What this project is](#1-what-this-project-is)
2. [Pre-release checklist](#2-pre-release-checklist)
3. [Deploy to Vercel (first time)](#3-deploy-to-vercel-first-time)
4. [Map findmynakshatra.com on Vercel](#4-map-findmynakshatracom-on-vercel)
5. [Namecheap DNS (keep email working)](#5-namecheap-dns-keep-email-working)
6. [Post-launch checklist](#6-post-launch-checklist)
7. [How to update the site later](#7-how-to-update-the-site-later)
8. [Troubleshooting / fixing issues](#8-troubleshooting--fixing-issues)
9. [Security & legal reminders](#9-security--legal-reminders)
10. [Useful URLs](#10-useful-urls)

---

## 1. What this project is

| Item | Detail |
|------|--------|
| Folder | `findmynakshatra/` |
| Stack | Astro (static site) |
| Host | Vercel (recommended) |
| Domain | `findmynakshatra.com` (Namecheap) |
| Email | Zoho Mail → `contact@findmynakshatra.com` |
| Languages | English `/en/` · Tamil `/ta/` |

**Important:** Website DNS (A/CNAME for Vercel) and email DNS (MX/SPF/DKIM for Zoho) live in the **same** Namecheap Advanced DNS screen. Never delete Zoho mail records when connecting Vercel.

---

## 2. Pre-release checklist

Do these **before** first production deploy:

### Config

Open `src/config.ts` and confirm:

```ts
email: 'contact@findmynakshatra.com'
domain: 'https://findmynakshatra.com'
showPhonePublicly: false           // recommended — never print digits on pages
```

**WhatsApp number (private — not in git):**

1. Local: copy `.env.example` → `.env` and set `PUBLIC_WHATSAPP=91XXXXXXXXXX`
2. Vercel → **Settings → Environment Variables** → `PUBLIC_WHATSAPP` = digits only with country code  
3. Optional analytics: add `PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX` (from Google Analytics → Admin → Data streams)  
4. Redeploy after adding/changing variables  

Never commit `.env` or put your real number in README / this file.

### Local test

```bash
cd findmynakshatra
npm install
npm run build
npm run preview
```

Open http://localhost:4321 and check:

- [ ] Home EN + TA (language switch)
- [ ] Ganesha image + mantra (Sanskrit / English / Tamil)
- [ ] Credentials (MA / certified) on About
- [ ] WhatsApp button opens chat
- [ ] Book / Contact / Share (QR) / Privacy / Terms
- [ ] Mobile width (phone or browser DevTools)

### Accounts ready

- [ ] GitHub account
- [ ] Vercel account (login with GitHub)
- [ ] Namecheap login (domain Active)
- [ ] Zoho Mail working (`contact@…`)

---

## 3. Deploy to Vercel (first time)

### Step 3.1 — Put code on GitHub

**Option A — New repo only for this site**

```bash
cd findmynakshatra
git init
git add .
git commit -m "Initial Find My Nakshatra marketing site"
# Create empty repo on GitHub named findmynakshatra, then:
git remote add origin https://github.com/YOUR_USERNAME/findmynakshatra.git
git branch -M main
git push -u origin main
```

**Option B — Already inside Mundane Astrology / jyotish-ai monorepo**

Push the parent repo so the `findmynakshatra/` folder is on GitHub. On Vercel you will set **Root Directory** to `findmynakshatra`.

### Step 3.2 — Create Vercel project

1. Go to [https://vercel.com](https://vercel.com) → sign in with **GitHub**.
2. Click **Add New… → Project**.
3. Import the GitHub repository.
4. Configure:

| Setting | Value |
|---------|--------|
| Framework Preset | **Astro** (auto) |
| Root Directory | `findmynakshatra` if monorepo, else leave blank / `.` |
| Build Command | `npm run build` (default) |
| Output Directory | `dist` (Astro default) |
| Install Command | `npm install` |

5. Click **Deploy**.
6. Wait until status is **Ready**.
7. Open the temporary URL: `https://YOUR-PROJECT.vercel.app`

### Step 3.3 — Smoke-test on Vercel URL

- [ ] https://YOUR-PROJECT.vercel.app/en/
- [ ] /ta/
- [ ] /en/book/ WhatsApp works
- [ ] /en/share/ QR image loads
- [ ] HTTPS padlock OK

Only after this works, connect the custom domain (next section).

---

## 4. Map findmynakshatra.com on Vercel

This is how you point **your own domain** to the Vercel project.

### Step 4.1 — Add domain in Vercel

1. Vercel dashboard → open your **Find My Nakshatra** project.
2. Go to **Settings → Domains**.
3. Add:
   - `findmynakshatra.com`
   - `www.findmynakshatra.com`
4. Vercel will show **DNS records you must add** at Namecheap.

Typical Vercel instructions (always prefer what **your** Vercel screen shows):

| Type | Name / Host | Value | Notes |
|------|-------------|-------|--------|
| **A** | `@` | `76.76.21.21` | Apex domain |
| **CNAME** | `www` | `cname.vercel-dns.com` | www subdomain |

Some accounts show a **CNAME** for apex via Vercel nameservers — follow the UI for your project.

5. Choose redirect: recommend **www → apex** or **apex → www** (pick one).  
   Common choice (matches current Vercel setup): **`findmynakshatra.com` redirects to `www.findmynakshatra.com`**.

### Step 4.2 — Status meanings in Vercel

| Status | Meaning |
|--------|---------|
| **Valid Configuration** | DNS correct; SSL will issue |
| **Pending / Invalid** | DNS not updated yet or wrong values |
| **Certificate Error** | Wait for SSL, or DNS still propagating |

SSL (HTTPS) is automatic on Vercel once DNS is valid — usually a few minutes to a few hours.

---

## 5. Namecheap DNS (keep email working)

### Step 5.1 — Open Advanced DNS

1. [Namecheap](https://www.namecheap.com) → **Domain List**.
2. `findmynakshatra.com` → **Manage** → **Advanced DNS**.

### Step 5.2 — Remove parking (website blockers)

Delete or remove if present:

- **URL Redirect Record** `@` → parking / www parking  
- **CNAME** `www` → `parkingpage.namecheap.com`

Do **not** remove Zoho records.

### Step 5.3 — Add Vercel records

Add exactly what Vercel shows, for example:

1. **A Record**  
   - Host: `@`  
   - Value: `76.76.21.21`  
   - TTL: Automatic  

2. **CNAME Record**  
   - Host: `www`  
   - Value: `cname.vercel-dns.com`  
   - TTL: Automatic  

### Step 5.4 — Keep Zoho email records (critical)

Leave these in place (values may match what Zoho gave you):

| Type | Host | Purpose |
|------|------|---------|
| MX | `@` | `mx.zoho.in` / `mx2` / `mx3` |
| TXT | `@` | Zoho verification (optional to keep) |
| TXT | `@` | SPF `v=spf1 include:zohomail.in ~all` |
| TXT | `zmail._domainkey` | DKIM |

**Mail Settings** must stay **Custom MX** (not Email Forwarding).

### Step 5.5 — Nameservers

Keep **Namecheap BasicDNS** (do not switch to “Custom DNS” / Vercel nameservers unless you intentionally move all DNS to Vercel — not recommended while Zoho email is on Namecheap).

### Step 5.6 — Wait and verify

1. Wait **15–60 minutes** (sometimes up to 24–48 hours).
2. Vercel Domains → should become **Valid**.
3. Open:
   - https://findmynakshatra.com
   - https://www.findmynakshatra.com
4. Test email still works: Gmail → `contact@findmynakshatra.com`.

---

## 6. Post-launch checklist

### Website

- [ ] Homepage loads on phone and desktop  
- [ ] EN ↔ TA switch works  
- [ ] WhatsApp CTA works  
- [ ] QR page: https://findmynakshatra.com/en/share/  
- [ ] Privacy / Terms linked in footer  

### SEO / GEO

- [ ] [Google Search Console](https://search.google.com/search-console) → add `findmynakshatra.com`  
- [ ] Submit sitemap: `https://findmynakshatra.com/sitemap-index.xml`  
- [ ] [Google Business Profile](https://business.google.com) → website = `https://findmynakshatra.com`  

### Ops

- [ ] WhatsApp Business bio → website URL  
- [ ] Calendar reminder: Zoho Mail trial end (~day 12)  
- [ ] Save logins (GitHub, Vercel, Namecheap, Zoho) in a password manager  

---

## 7. How to update the site later

### Change text / prices / credentials

| What | File |
|------|------|
| WhatsApp number (private) | Vercel / `.env` → `PUBLIC_WHATSAPP` |
| Google Analytics (GA4) | Vercel / `.env` → `PUBLIC_GA_MEASUREMENT_ID` |
| Email / phone visibility flag | `src/config.ts` |
| English copy | `src/i18n/en.ts` |
| Tamil copy | `src/i18n/ta.ts` |
| Privacy / Terms | `src/i18n/legal.ts` |
| Colors / layout | `src/styles/global.css` |
| Security headers | `vercel.json` |

### Publish an update

```bash
cd findmynakshatra
npm run build          # must succeed locally
git add .
git commit -m "Update site copy"
git push origin main
```

Vercel **auto-deploys** on push to `main`. Check the Deployments tab for success.

### Regenerate QR codes

**Website QR** (SEO / share — opens findmynakshatra.com):

```bash
cd findmynakshatra
node -e "
const QRCode = require('qrcode');
QRCode.toFile('public/qr-findmynakshatra.png', 'https://www.findmynakshatra.com', {
  width: 512, margin: 2,
  color: { dark: '#232F3E', light: '#FFFFFF' }
}).then(() => console.log('Website QR updated'));
"
git add public/qr-findmynakshatra.png
git commit -m "Refresh website QR code"
git push
```

**WhatsApp booking QR** (primary for cards/posters — opens chat):

Generated automatically on `npm run build` / `npm run dev` from `PUBLIC_WHATSAPP`.  
Includes a WhatsApp mark in the centre. Files are gitignored (`public/qr-whatsapp.*`).

1. Set `PUBLIC_WHATSAPP` in `.env` (local) and Vercel Environment Variables.  
2. Run `npm run qr:whatsapp` or a full build.  
3. Download from the Share page: **Download WhatsApp QR**.

Print the **WhatsApp QR** on visiting cards; use the **website QR** for bios / SEO sharing.
---

## 8. Troubleshooting / fixing issues

### Site not loading on custom domain

1. Vercel → **Settings → Domains** → read error message.  
2. Namecheap → confirm A `@` and CNAME `www` match Vercel.  
3. Confirm parking redirect is removed.  
4. Wait for DNS (use [https://dnschecker.org](https://dnschecker.org) for `findmynakshatra.com` A record).  
5. Try incognito / another network (cache).

### HTTPS / certificate pending

- Normal for up to a few hours after DNS is correct.  
- Do not add a third-party SSL at Namecheap — Vercel provides SSL.

### Website works but email stopped

You likely changed/deleted **MX** or set Mail Settings back to Email Forwarding.

1. Namecheap → Advanced DNS → Mail Settings = **Custom MX**.  
2. Restore Zoho MX + SPF + DKIM.  
3. Zoho Admin → verify MX/DKIM again.  
4. Test send from Gmail.

### WhatsApp button wrong number / missing

1. Vercel → Settings → Environment Variables → set `PUBLIC_WHATSAPP` to digits only (`91XXXXXXXXXX`).  
2. Locally use `.env` (from `.env.example`) — never commit `.env`.  
3. Redeploy, then hard refresh the live site.  
4. Keep `showPhonePublicly: false` so the number is not visible as text.

### Build failed on Vercel

1. Vercel → Deployments → open failed deploy → read log.  
2. Reproduce locally: `npm run build`.  
3. Common causes: syntax error in `.astro` / `.ts`, wrong Root Directory, Node version.  
4. Project needs Node **≥ 22.12** (`package.json` engines). In Vercel → Settings → General → Node.js Version → **22.x**.

### Styles look old / wrong theme

Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows).  
Or try another browser / phone.

### 404 on /ta/ or /en/pages

Confirm deploy finished. Paths are folders with trailing slash, e.g. `/en/about/`.

### Need to roll back a bad deploy

Vercel → **Deployments** → find last good deploy → **⋯ → Promote to Production**.

---

## 9. Security & legal reminders

- Enable **2FA** on GitHub, Vercel, Namecheap, Zoho.  
- Never commit `.env` or your mobile number (use `PUBLIC_WHATSAPP` on Vercel).  
- Keep `showPhonePublicly: false` unless you intentionally want the number visible.  
- Privacy + Terms pages must stay linked in the footer.  
- After major legal/credential changes, update `src/i18n/legal.ts` and bump “Last updated” date.

Security headers live in `vercel.json` (CSP, HSTS, X-Frame-Options, etc.). Re-check after deploy: [https://securityheaders.com](https://securityheaders.com).

---

## 10. Useful URLs

| Purpose | URL |
|---------|-----|
| Production site | https://www.findmynakshatra.com |
| English home | https://www.findmynakshatra.com/en/ |
| Tamil home | https://www.findmynakshatra.com/ta/ |
| Share / QR | https://www.findmynakshatra.com/en/share/ |
| Sitemap | https://www.findmynakshatra.com/sitemap-index.xml |
| Vercel dashboard | https://vercel.com/dashboard |
| Namecheap domains | https://ap.www.namecheap.com/domains/list/ |
| Zoho Mail | https://mail.zoho.com |
| Local dev | http://127.0.0.1:4321 |

---

## Quick “domain mapping” cheat sheet

```
1. Vercel project works on *.vercel.app
2. Vercel → Settings → Domains → add findmynakshatra.com + www
3. Copy DNS records from Vercel screen
4. Namecheap Advanced DNS:
     - Remove parking
     - Add Vercel A + CNAME
     - Keep Zoho MX / SPF / DKIM
5. Wait until Vercel shows Valid + HTTPS
6. Test website + email
```

---

*Document version: 2026-08-01 · Project: Find My Nakshatra (Astro + Vercel)*
