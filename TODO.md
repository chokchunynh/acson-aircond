# Utopia Starter — TODO
# Complete these to make the starter a true one-command SaaS foundation
# When done: saas-builder copies this, skips rebuilding these from scratch
# Priority: High = blocks fast SaaS production | Medium = nice to have | Low = future

---

## CURRENT STATE (as of 2026-03-07)

Has: Next.js 16 + Tailwind 4 + landing page components (Hero, FAQ, SocialProof, FinalCTA, Navbar, Footer, MobileCTABar, ScrollReveal, AnimatedCounter, RotatingText)
Has: Basic Supabase client lib + one SQL migration (user profiles)
Missing: Everything SaaS — auth pages, billing, dashboard, admin, payments

---

## HIGH PRIORITY — Blocks fast SaaS production

### Auth Pages (complete, tested, copy-paste ready)
- [ ] `app/(auth)/login/page.tsx` — email/password + Google OAuth, clean white design
- [ ] `app/(auth)/signup/page.tsx` — email/password + Google OAuth, auto-redirects after signup
- [ ] `app/(auth)/callback/page.tsx` — CLIENT component (not route handler), handles Supabase SSR cookie correctly
- [ ] `app/(auth)/forgot-password/page.tsx` — Supabase password reset flow
- [ ] `middleware.ts` — protects /dashboard and /admin routes, redirects unauthenticated to /login

### Supabase Setup
- [ ] `lib/supabase/client.ts` — browser client (correct flowType for SPAs)
- [ ] `lib/supabase/server.ts` — server component client
- [ ] `lib/supabase/middleware.ts` — middleware helper for session refresh
- [ ] `sql/02_pricing_tiers.sql` — pricing_tiers table with RLS + seed data (Free/Pro/Business)
- [ ] `sql/03_subscriptions.sql` — subscriptions + payment_history tables with RLS
- [ ] `sql/04_reseller.sql` — resellers + commissions tables (optional but always include schema)

### Admin Panel
- [ ] `app/admin/page.tsx` — admin dashboard: MRR, subscriber count, churn, recent signups
- [ ] `app/admin/pricing/page.tsx` — inline price editor, feature toggles, is_featured radio, display_order controls
- [ ] Admin reads from pricing_tiers via Supabase service role — never hardcoded

### Dashboard Shell
- [ ] `app/(dashboard)/dashboard/page.tsx` — base user dashboard: current plan, usage, upgrade CTA
- [ ] `app/(dashboard)/settings/page.tsx` — profile, change password, billing
- [ ] Role-based nav: admin sees admin link, reseller sees reseller link, user sees neither

### Landing Page — Pricing Section
- [ ] `components/sections/Pricing.tsx` — fetches from pricing_tiers at runtime, shows is_featured badge
- [ ] Replace any hardcoded prices in Hero/FinalCTA with DB-driven values

---

## MEDIUM PRIORITY — Speeds up production significantly

### Payex Integration
- [ ] `lib/payex/auth.ts` — Payex API auth helper
- [ ] `lib/payex/plans.ts` — fetch plans, create checkout
- [ ] `lib/payex/webhook.ts` — verify SHA512 signature, handle authorization + collection callbacks
- [ ] `app/api/payex/checkout/route.ts` — create Payex checkout session
- [ ] `app/api/payex/webhook/route.ts` — handle both callback types, update subscriptions table
- [ ] Note in all files: amounts in RINGGIT (not cents). RM149 = 149.

### Reseller Module
- [ ] `app/(dashboard)/reseller/page.tsx` — reseller dashboard: subscriber count, commission total, referral link
- [ ] Referral link generates with `?ref=[reseller_id]` param, captured on signup
- [ ] Protected: only users with role='reseller' can access

### Components
- [ ] `components/WhatsAppCTA.tsx` — floating button (#25D366) + sticky mobile bar, pre-filled message
- [ ] `components/PricingTable.tsx` — reads from pricing_tiers, highlighted featured tier, monthly/annual toggle
- [ ] `components/UpgradeBanner.tsx` — shown to free users in dashboard, links to pricing

---

## LOW PRIORITY — Future polish

### Stripe Integration (alternative to Payex)
- [ ] `lib/stripe/` — Stripe checkout + webhook handler
- [ ] `app/api/stripe/checkout/route.ts`
- [ ] `app/api/stripe/webhook/route.ts` — handle checkout.session.completed, subscription events

### Email (Resend)
- [ ] `lib/email/` — Resend client + templates
- [ ] Welcome email on signup
- [ ] Payment confirmation email on successful subscription

### Analytics
- [ ] Vercel Analytics snippet in layout.tsx
- [ ] Basic event tracking (signup, upgrade, login) — ready for utopia-analytics skill

### Error Handling
- [ ] `app/error.tsx` — branded error page
- [ ] `app/not-found.tsx` — branded 404 page

### Meta / SEO
- [ ] `app/layout.tsx` — full Open Graph + Twitter Card + favicon metadata (currently basic)
- [ ] `public/og-image.png` — placeholder 1200x630 branded OG image

---

## HOW TO USE THIS TODO

When working on a new SaaS with saas-builder:
1. `cp -r ~/utopia-starter/ ~/[new-project]/`
2. Check which items above are checked — those are already done, skip them in saas-builder
3. saas-builder only builds what's missing
4. As each item gets built and tested in a real project, copy it back into utopia-starter

Goal: eventually, a new SaaS starts at 80% done.
