# acson-aircond — Project Inputs

**Slug:** acson-aircond
**Migrated:** Aug 2026 — a bespoke `src/`-based build with no i18n, webcore or
locale routing was moved onto the fleet architecture. Unlike `daikin-aircond`
(rebuilt from the water-tank skeleton) this site **kept its own design** — Acson
red palette, DM Serif display headings, section layouts — and had the plumbing
ported underneath it.

## Confirmed Inputs (Step 0)

| Field | Value |
|-------|-------|
| **Company** | Acson AirCond Malaysia |
| **Brand name** | Acson AirCond Malaysia |
| **Product name** | Aircond Acson — Pasang, Servis & Sewa Beli |
| **Product slug** | `aircond-acson` |
| **Domain** | `acsonaircond.my` (paid; migrated from `acson-aircond.vercel.app` Aug 2026) |
| **Site URL** | `https://acsonaircond.my` |
| **webcore siteId** | `ec83858d-89b6-495c-abe6-9b2de8e929e3` |
| **Phone (WhatsApp)** | `60189294628` |
| **Leads mode** | `single` |
| **Languages** | `ms` (default), `en`, `zh` |

> The WhatsApp number is shared with `hisense-aircond.vercel.app`,
> `servisaircondrumah.my` and `aircondmalaysia.my`. Confirm with the operator
> before treating it as this client's own line.

## Project-unique special section

**Sewa beli (rent-to-own)** — from RM69/month over 36 months, including a brand
new Acson unit, installation and a one-year warranty, with the unit becoming the
customer's at the end of the term. Rendered as the `#sewa-beli` section on the
homepage and every location page, with a four-tier pricing table by horsepower.

## Deliberate divergence from templates/site-chrome

`SiteHeader` / `SiteFooter` / `PageStyles` are adapted rather than copied:

- The header carries the **Acson logo** on the left (the canonical header is
  nav-only) because the logo is the brand's whole recognition asset.
- Nav anchors are `#produk` / `#servis` / `#sewa-beli` (Malay section ids from
  the original build) rather than `#products` / `#packages`.
- Styling uses this project's `--color-*` tokens, not the canonical
  `--brand-orange` / `--ink` / `--gut` set.

`chrome-check` will report these as drift. That is expected — see
CLAUDE.md "keep the project's own design" and the README note that sites
scoring 90+ are usually customised on purpose.

## Price sheet (source of truth for DB seeding)

| Model | Unit + install | Sewa beli (24mo) | Chemical wash |
|---|---|---|---|
| AVO Non-Inverter | RM1,240 | RM79/mo | RM130 |
| Viento | RM1,360 | RM89/mo | RM130 |
| Reino+ | RM1,695 | RM109/mo | RM130 |
| Avory Premium | RM2,130 | RM129/mo | RM130 |
| Cassette & Ceiling | RM4,500 | RM239/mo | RM350 (overhaul) |

## Outstanding

- [ ] Gloo (Step 14): GA4 + GTM container + Search Console + Ads conversion.
      **Unblocked** — `acsonaircond.my` is live. Nothing in
      `scripts/google-automation/configs/` for this site yet, so the two
      `gtm-*` checks stay red until it runs.
- [ ] `acson-aircond.vercel.app` still serves 200 alongside the paid domain.
      Canonical tags point at `acsonaircond.my`, which is the fleet's usual
      mitigation, but a 308 would be cleaner.

## Domain migration log (Aug 2026)

`acsonaircond.my` was already attached to the Vercel project (added Apr 2026,
Vercel nameservers). webcore exposes no site-rename endpoint — `PATCH
/api/public/sites` returns 405 — so the 20 rows were re-keyed directly against
the `webcore` schema with the service-role key: `phone_numbers` (1),
`products` (5), `blog_posts` (12), `website_settings` (1), `company_websites`
(1). `blog_translations` follow their FK. The pinned `siteId` was checked
against the row before writing.
