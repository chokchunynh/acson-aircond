'use client';

import { useLocale, useTranslations } from 'next-intl';
import { waRedirect } from '@/lib/waRedirect';
import { WhatsAppButton, WaIcon } from './WhatsAppButton';

/**
 * Floating WhatsApp button. On mobile the header CTA is hidden so it cannot
 * collide with the language switcher — this is what carries the action there.
 */
export default function StickyWhatsApp({ locationSlug }: { locationSlug?: string }) {
  const t = useTranslations('nav');
  const locale = useLocale();

  return (
    <>
      <WhatsAppButton
        href={waRedirect(locale, undefined, locationSlug)}
        label="floating"
        className="wa-fab"
      >
        <WaIcon size={26} />
        <span className="sr-only">{t('whatsappCta')}</span>
      </WhatsAppButton>

      <style>{`
        .wa-fab {
          position: fixed;
          right: 16px;
          bottom: calc(16px + env(safe-area-inset-bottom));
          z-index: 45;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 999px;
          background: var(--wa-green);
          color: #fff;
          box-shadow: 0 6px 20px rgba(26, 17, 24, 0.24);
          animation: whatsapp-pulse 2.4s infinite;
        }
        .wa-fab:hover { background: var(--wa-green-hover); }
        .wa-fab:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) { .wa-fab { animation: none; } }
      `}</style>
    </>
  );
}
