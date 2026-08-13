'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { waRedirect } from '@/lib/waRedirect';

function endOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59, 999);
}

function diffParts(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms % 86_400_000) / 3_600_000),
    minutes: Math.floor((ms % 3_600_000) / 60_000),
    seconds: Math.floor((ms % 60_000) / 1000),
  };
}

const pad = (n: number) => String(n).padStart(2, '0');

const INTL_LOCALE: Record<string, string> = { en: 'en-US', ms: 'ms-MY', zh: 'zh-CN' };

export default function FomoBanner() {
  const t = useTranslations('fomo');
  const locale = useLocale();
  const [parts, setParts] = useState<ReturnType<typeof diffParts> | null>(null);

  const { month, monthUpper } = useMemo(() => {
    const intlLocale = INTL_LOCALE[locale] ?? locale;
    const m = new Intl.DateTimeFormat(intlLocale, { month: 'long' }).format(new Date());
    return { month: m, monthUpper: m.toUpperCase() };
  }, [locale]);

  useEffect(() => {
    // The clock runs to midnight on the last day of the month so the "{month}
    // promo" wording and the countdown always agree.
    const tick = () => setParts(diffParts(endOfMonth(new Date())));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fomo-bar">
      <div className="fomo-inner">
        <span className="fomo-tag">{t('eyebrow', { month, monthUpper })}</span>
        <span className="fomo-body">{t('body', { month, monthUpper })}</span>
        {/* Date.now() cannot run on the server, so the clock only exists after
            hydration. The placeholder mirrors the real markup segment for
            segment — a collapsed one reserves less width, and the banner
            rewraps and shoves the header down when the real clock lands. */}
        <span aria-live="polite" className="fomo-clock">
          <span>{parts ? pad(parts.days) : '00'}</span>
          <span className="fomo-sep">:</span>
          <span>{parts ? pad(parts.hours) : '00'}</span>
          <span className="fomo-sep">:</span>
          <span>{parts ? pad(parts.minutes) : '00'}</span>
          <span className="fomo-sep">:</span>
          <span>{parts ? pad(parts.seconds) : '00'}</span>
        </span>
        <Link
          href={waRedirect(locale)}
          className="fomo-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('ctaLabel')} →
        </Link>
      </div>

      <style>{`
        .fomo-bar { background: #12060A; color: #fff; }
        .fomo-inner {
          max-width: 80rem; margin: 0 auto;
          display: flex; flex-wrap: wrap; align-items: center; justify-content: center;
          gap: 6px 12px; padding: 7px 1rem;
          font-size: 12px; line-height: 1.2; text-align: center;
        }
        .fomo-tag {
          background: #CC1B2B; color: #fff; font-weight: 800;
          letter-spacing: 0.08em; padding: 3px 8px; border-radius: 4px;
          font-size: 10.5px; white-space: nowrap;
        }
        .fomo-body { color: rgba(255,255,255,0.86); }
        .fomo-clock {
          display: inline-flex; align-items: center; gap: 2px;
          font-variant-numeric: tabular-nums; font-weight: 800; letter-spacing: 0.04em;
          color: #fff; white-space: nowrap;
        }
        .fomo-sep { opacity: 0.5; }
        .fomo-link { color: #FF8A97; font-weight: 700; text-decoration: none; white-space: nowrap; }
        .fomo-link:hover { color: #fff; text-decoration: underline; }
        @media (max-width: 639px) {
          /* Drop the sentence on small screens and keep tag + clock + CTA on one
             line. With the full copy the bar wrapped to 78px — a twelfth of the
             viewport spent before the header even starts. */
          .fomo-inner { gap: 8px; padding: 7px 0.75rem; font-size: 11px; flex-wrap: nowrap; }
          .fomo-body { display: none; }
        }
      `}</style>
    </div>
  );
}
