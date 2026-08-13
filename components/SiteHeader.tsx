'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import NavCtaGlobalStyle from './NavCtaGlobalStyle';
import { WhatsAppButton, WaIcon } from './WhatsAppButton';
import { waRedirect } from '@/lib/waRedirect';
import { siteConfig } from '@/config/site';

/**
 * `contact` is a ReactNode rather than a phone string because the number is
 * resolved server-side (DB-backed) and this is a client component — passing the
 * already-rendered element in keeps the fetch on the server.
 */
export default function SiteHeader({ contact }: { contact?: React.ReactNode }) {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}#produk`, label: t('products') },
    { href: `/${locale}#servis`, label: t('services') },
    { href: `/${locale}#sewa-beli`, label: t('calculator') },
    { href: `/${locale}/${siteConfig.productSlug}`, label: t('locations') },
    { href: `/${locale}/blog`, label: t('blog') },
  ];

  return (
    <header className="site-header">
      <NavCtaGlobalStyle />
      <div className="site-header-inner">
        <Link href={`/${locale}`} className="site-logo" aria-label={t('logoAlt')}>
          <Image
            src="/images/brand/acson-logo-red.webp"
            alt={t('logoAlt')}
            width={256}
            height={82}
            priority
          />
        </Link>

        <nav className="site-nav site-nav--desktop" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>

        <div className="site-actions">
          {contact}
          <LanguageSwitcher />
          <WhatsAppButton href={waRedirect(locale)} label="nav" className="btn-wa nav-cta">
            <WaIcon size={16} />
            <span>{t('whatsappCta')}</span>
          </WhatsAppButton>
          <button
            type="button"
            className="site-burger"
            aria-label={t('menuLabel')}
            aria-expanded={open}
            aria-controls="site-nav-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id="site-nav-mobile" className={`site-drawer ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav className="site-drawer-nav" aria-label="Mobile primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={close}>{l.label}</Link>
          ))}
        </nav>
        {contact && <div className="site-drawer-actions">{contact}</div>}
      </div>

      <style>{`
        .site-header {
          position: sticky; top: 0; z-index: 50;
          background: rgba(255,255,255,0.94);
          backdrop-filter: saturate(180%) blur(10px);
          -webkit-backdrop-filter: saturate(180%) blur(10px);
          border-bottom: 3px solid var(--color-brand);
        }
        .site-header-inner {
          max-width: 80rem; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          padding: 10px 1rem; min-height: 60px;
        }
        @media (min-width: 640px) { .site-header-inner { padding-left: 1.5rem; padding-right: 1.5rem; } }
        @media (min-width: 1024px) { .site-header-inner { padding-left: 2rem; padding-right: 2rem; } }
        .site-logo { flex: 0 0 auto; display: inline-flex; }
        .site-logo img { height: 38px; width: auto; }
        .site-nav { display: none; gap: 22px; }
        .site-nav a {
          font-size: 14px; font-weight: 600; color: var(--color-text-body);
          text-decoration: none; white-space: nowrap;
          transition: color var(--dur) var(--ease);
        }
        .site-nav a:hover { color: var(--color-brand); }
        .site-actions { display: inline-flex; align-items: center; gap: 8px; }
        .site-burger {
          display: inline-flex; flex-direction: column; justify-content: center; gap: 4px;
          width: 40px; height: 40px; padding: 0 9px;
          background: transparent; border: 1px solid var(--color-border);
          border-radius: var(--r-button); cursor: pointer;
        }
        .site-burger span {
          display: block; height: 2px; width: 100%; border-radius: 2px;
          background: var(--color-text-dark);
          transition: transform var(--dur-fast) var(--ease), opacity var(--dur-fast) var(--ease);
        }
        .site-burger[aria-expanded="true"] span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .site-burger[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
        .site-burger[aria-expanded="true"] span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
        .site-drawer { background: #fff; border-top: 1px solid var(--color-border); padding: 8px 1rem 16px; }
        .site-drawer-nav { display: flex; flex-direction: column; }
        .site-drawer-nav a {
          padding: 13px 4px; font-size: 15px; font-weight: 700;
          color: var(--color-text-dark); text-decoration: none;
          border-bottom: 1px solid var(--color-border);
        }
        .site-drawer-nav a:last-child { border-bottom: none; }
        .site-drawer-actions {
          display: flex; justify-content: flex-end;
          padding-top: 14px; margin-top: 10px;
          border-top: 1px solid var(--color-border);
        }
        /* 1024, not 880: the full row (logo + 6 nav links + contact + language
           + CTA) needs ~1254px. Switching the nav on at 880 pushed the actions
           group off the right edge, where overflow-x: clip hid it completely. */
        @media (min-width: 1024px) {
          .site-nav--desktop { display: inline-flex; }
          .site-burger { display: none; }
          .site-drawer { display: none !important; }
        }
      `}</style>
    </header>
  );
}
