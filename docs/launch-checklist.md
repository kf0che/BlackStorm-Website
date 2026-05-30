# BlackStorm, LLC — Launch Checklist

**Status as of 2026-05-30** | Domain: `blackstormllc.com` | Host: IONOS | Deploy: IONOS static hosting

---

## ✅ Completed

- [x] Official BlackStorm logo integrated across all pages
- [x] Favicon (gold lightning bolt) — SVG + PNG 32px + Apple touch icon 180px
- [x] OpenGraph image (1200×630) for social previews
- [x] OG + Twitter Card meta tags on all 13 pages
- [x] `contact@blackstormllc.com` — public general inbox
- [x] `support@blackstormllc.com` — client support inbox
- [x] `sales@blackstormllc.com` — sales / partnerships inbox
- [x] `steve.michael@blackstormllc.com` — principal direct contact
- [x] `frank.posch@blackstormllc.com` — principal direct contact
- [x] Contact page updated with all real emails and mailto links
- [x] Contact page uses direct email, phone, and mailing address for launch
- [x] Privacy Policy updated — effective date May 30, 2026
- [x] Terms of Service updated — effective date May 30, 2026
- [x] Footer contact email on all 12 static pages
- [x] TypeScript clean (`npm run lint` passes)
- [x] `src/config/business.ts` email set to `contact@blackstormllc.com`

---

## 🔲 DNS Configuration — IONOS Hosting

Complete these steps in your IONOS domain control panel and hosting dashboard.

### Step 1 — Confirm Domain in IONOS

1. IONOS → Domains & SSL → confirm `blackstormllc.com` is active
2. Confirm `www.blackstormllc.com` is configured as an alias or redirect
3. Confirm the hosting package is assigned to the domain

### Step 2 — Update DNS at IONOS

Log into IONOS → Domains & SSL → `blackstormllc.com` → DNS

| Type | Host | Value | TTL |
|------|------|-------|-----|
| `A` | `@` | IONOS hosting IP for the assigned webspace | 3600 |
| `CNAME` | `www` | IONOS-provided canonical host or redirect target | 3600 |

> Use the exact DNS values shown in the assigned IONOS hosting package. Do not point production traffic to another host unless deployment is intentionally moved there.

**Remove or replace** any IONOS default A records pointing to IONOS parking pages before adding the above.

### Step 3 — SSL/TLS Certificate

1. IONOS → Domains & SSL → enable SSL for `blackstormllc.com`
2. Once DNS propagates (15 min – 48 hrs), verify the certificate is issued
3. Enable HTTP → HTTPS redirect in IONOS hosting settings

### Step 4 — MX Records for IONOS Email

These should already be set by IONOS when you created the mailboxes. Verify:

| Type | Host | Value | Priority |
|------|------|-------|----------|
| `MX` | `@` | `mx00.ionos.com` | 10 |
| `MX` | `@` | `mx01.ionos.com` | 20 |

**SPF record** (prevents spoofing — add if missing):

| Type | Host | Value |
|------|------|-------|
| `TXT` | `@` | `v=spf1 include:_spf.ionos.com ~all` |

**DMARC record** (early-stage safe minimum):

| Type | Host | Value |
|------|------|-------|
| `TXT` | `_dmarc` | `v=DMARC1; p=none; rua=mailto:contact@blackstormllc.com` |

### Step 5 — Verify Propagation

```bash
# Check A record
dig blackstormllc.com A +short

# Check MX record
dig blackstormllc.com MX +short

# Check SPF
dig blackstormllc.com TXT +short

# HTTPS check
curl -I https://blackstormllc.com
```

---

## 🔲 IONOS Build & Deploy Settings

- Build command: `npm run build`
- Upload/publish directory contents: `dist`
- Node version for local/CI build: `20`
- Add environment variables in the build environment if any `.env` values are needed

### SPA fallback

`public/.htaccess`:
```
Options -MultiViews

RewriteEngine On
RewriteBase /

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

RewriteRule ^ index.html [L]
```

`public/_redirects`:
```
/* /index.html 200
```
The `.htaccess` file serves the React SPA for direct deep links on IONOS Apache hosting. The `_redirects` file remains harmless fallback metadata for platforms that honor that redirect format.

---

## 🔲 Pre-Launch Smoke Test Checklist

Run this top-to-bottom after DNS propagates and the first production build completes.

### DNS & SSL
- [ ] `https://blackstormllc.com` loads without certificate warning
- [ ] `https://www.blackstormllc.com` redirects to `https://blackstormllc.com`
- [ ] `http://blackstormllc.com` redirects to `https://` (force HTTPS enabled)
- [ ] Browser shows valid padlock — certificate issued to `blackstormllc.com`

### Pages Load
- [ ] Home (`/`) loads — hero, nav, footer visible
- [ ] About (`/about`) loads
- [ ] Services (`/services`) loads
- [ ] Network Monitoring (`/services/network-monitoring`) loads
- [ ] Pricing (`/pricing`) loads
- [ ] Contact (`/contact`) loads
- [ ] Support (`/support`) loads
- [ ] Investors (`/investors`) loads
- [ ] Privacy Policy (`/privacy`) loads
- [ ] Terms of Service (`/terms`) loads

### Navigation
- [ ] Logo click → home
- [ ] All nav links resolve (no 404s)
- [ ] Services dropdown opens and all links work
- [ ] Mobile menu opens and closes on ≤768px viewport
- [ ] Mobile menu links navigate correctly
- [ ] Theme toggle switches dark ↔ light and persists on reload

### Logo & Branding
- [ ] Logo displays in nav at correct size (~96px wide)
- [ ] Logo displays in footer at correct size (~178px wide)
- [ ] Logo visible in both dark and light mode
- [ ] Browser tab shows gold lightning bolt favicon
- [ ] iOS home screen icon: add to home screen on Safari, verify 180px icon

### Direct Contact
- [ ] Contact page shows direct email links, office phone, and mailing address
- [ ] Office phone link opens `tel:+19189992975`
- [ ] No website backend form submission is required for launch

### Email Links
- [ ] `contact@blackstormllc.com` mailto opens mail client
- [ ] `support@blackstormllc.com` mailto opens mail client
- [ ] `sales@blackstormllc.com` mailto opens mail client
- [ ] `steve.michael@blackstormllc.com` mailto opens mail client
- [ ] `frank.posch@blackstormllc.com` mailto opens mail client

### Email Deliverability
- [ ] Send test email FROM each inbox (`contact@`, `support@`, `sales@`) — confirm delivery
- [ ] Send test email TO each inbox — confirm receipt in IONOS webmail
- [ ] Test reply-to flow from `contact@` → external address

### Social / SEO
- [ ] Paste `https://blackstormllc.com` into [opengraph.xyz](https://www.opengraph.xyz) — verify OG image, title, description
- [ ] Paste into LinkedIn post inspector — verify preview
- [ ] `<title>` and `<meta description>` render in browser source view
- [ ] `favicon.svg` loads at `https://blackstormllc.com/favicon.svg`
- [ ] `og-image.png` loads at `https://blackstormllc.com/images/og-image.png`

### Accessibility Quick Check
- [ ] Tab through contact links — all links focusable in logical order
- [ ] Screen reader: nav landmark reads "Main navigation"
- [ ] Images have alt text (logo, any content images)
- [ ] Color contrast — text readable in both dark and light mode

### Final
- [ ] IONOS upload contains the latest `dist` build
- [ ] `npm run lint` passes locally before final push
- [ ] `npm run build` completes without warnings

---

## 🔲 Remaining Content TODOs (post-launch acceptable)

- [ ] Add team photos and bios to About page
- [ ] Replace pricing placeholder amounts with final approved rates
- [ ] Add `robots.txt` and `sitemap.xml`
- [ ] Configure a proper backend form handler if mailto fallback is replaced later
