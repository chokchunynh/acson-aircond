import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/config/site';
import ContactNumber from './ContactNumber';

export default async function SiteFooter({
  locale,
  page,
}: {
  locale: string;
  /** Locale-stripped path, forwarded to ContactNumber — is_display is keyed per page. */
  page?: string;
}) {
  const t = await getTranslations({ locale, namespace: 'footer' });
  const navT = await getTranslations({ locale, namespace: 'nav' });

  const links = [
    { href: `/${locale}`, label: navT('home') },
    { href: `/${locale}#produk`, label: navT('products') },
    { href: `/${locale}#servis`, label: navT('services') },
    { href: `/${locale}#sewa-beli`, label: navT('calculator') },
    { href: `/${locale}/${siteConfig.productSlug}`, label: navT('locations') },
    { href: `/${locale}/blog`, label: navT('blog') },
    { href: `/${locale}#faq`, label: t('faqLabel') },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/brand/acson-logo-red.webp" alt={navT('logoAlt')} className="footer-logo" />
          <nav className="footer-nav" aria-label="Footer">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>
          <ContactNumber locale={locale} page={page} className="contact-number--footer" />
        </div>

        <h6 className="footer-tagline">{t('tagline')}</h6>

        <div className="footer-line" aria-hidden="true" />

        <div className="footer-bottom">
          <h6 className="footer-copy">{t('copyright')}</h6>
          <a
            className="utopia-credit"
            href="https://utopiagroup.com.my"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Built by</span>
            <span className="utopia-credit__word">Utopia</span>
            <svg className="utopia-credit__mark" width="14" height="12" viewBox="0 0 64 56" aria-hidden="true">
              <defs>
                <linearGradient id="utopiaCreditGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0054A6" />
                  <stop offset="50%" stopColor="#2774AE" />
                  <stop offset="100%" stopColor="#4A9DD0" />
                </linearGradient>
              </defs>
              <polygon points="32,4 60,52 4,52" fill="url(#utopiaCreditGrad)" />
            </svg>
            <span className="utopia-credit__word">AI</span>
          </a>
        </div>
      </div>

      <style>{`
        .site-footer { background: var(--color-gray-50); border-top: 1px solid var(--color-border); padding: 44px 0 30px; }
        .site-footer-inner { max-width: 80rem; margin: 0 auto; padding: 0 1rem; }
        @media (min-width: 640px) { .site-footer-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .site-footer-inner { padding: 0 2rem; } }
        .footer-top {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 20px 32px;
        }
        .footer-logo { width: 148px; height: auto; object-fit: contain; }
        .footer-nav { display: flex; flex-wrap: wrap; gap: 12px 24px; }
        .footer-nav a {
          font-size: 14.5px; font-weight: 600; color: var(--color-text-body); text-decoration: none;
          transition: color var(--dur) var(--ease);
        }
        .footer-nav a:hover { color: var(--color-brand); }
        .footer-tagline {
          margin: 18px 0 0; font-size: 13px; font-weight: 400; line-height: 1.4;
          color: var(--color-text-muted); max-width: 62ch;
        }
        .footer-line { height: 1px; background: var(--color-border); margin: 22px 0; }
        .footer-bottom {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px 24px;
        }
        .footer-copy { margin: 0; font-size: 12.5px; font-weight: 400; color: var(--color-text-muted); }
        .utopia-credit {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 12px; font-weight: 600; color: var(--color-text-muted); text-decoration: none;
          transition: color var(--dur) var(--ease);
        }
        .utopia-credit:hover { color: var(--color-text-dark); }
        .utopia-credit__word { font-weight: 700; }
        .utopia-credit__mark { display: inline-block; }
        @media (max-width: 767px) {
          .site-footer { padding: 32px 0 24px; }
          .footer-top { flex-direction: column; text-align: center; gap: 18px; }
          .footer-nav { justify-content: center; }
          .footer-tagline { text-align: center; margin-left: auto; margin-right: auto; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
