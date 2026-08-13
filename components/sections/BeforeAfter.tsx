'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { MapPin, Sparkles, SprayCan, ThermometerSnowflake, Wind } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const RESULT_IMAGES = [
  '/images/before-after-chemical-wash.jpg',
  '/images/services/technician-servicing-outdoor.jpg',
];
const BEFORE_ICONS = [SprayCan, ThermometerSnowflake];
const AFTER_ICONS = [Sparkles, Wind];

interface ResultItem {
  title: string;
  location: string;
  before: string;
  after: string;
  alt: string;
}

function ToggleCard({
  result,
  index,
  beforeLabel,
  afterLabel,
}: {
  result: ResultItem;
  index: number;
  beforeLabel: string;
  afterLabel: string;
}) {
  const [showAfter, setShowAfter] = useState(false);
  const Icon = showAfter ? AFTER_ICONS[index] ?? AFTER_ICONS[0] : BEFORE_ICONS[index] ?? BEFORE_ICONS[0];
  const body = showAfter ? result.after : result.before;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={RESULT_IMAGES[index]}
          alt={result.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-3 left-4 right-4 text-left">
          <h4 className="font-heading text-lg text-white">{result.title}</h4>
          <h6 className="body-text flex items-center gap-1 text-xs text-white/80">
            <MapPin className="w-3 h-3" aria-hidden="true" /> {result.location}
          </h6>
        </div>
      </div>

      <div className="flex border-b border-[var(--color-border)]">
        <button
          type="button"
          onClick={() => setShowAfter(false)}
          aria-pressed={!showAfter}
          className={`flex-1 py-3 text-sm font-bold transition-colors ${
            !showAfter
              ? 'bg-[var(--color-gray-100)] text-[var(--color-brand)] border-b-2 border-[var(--color-brand)]'
              : 'text-[var(--color-text-muted)]'
          }`}
        >
          {beforeLabel}
        </button>
        <button
          type="button"
          onClick={() => setShowAfter(true)}
          aria-pressed={showAfter}
          className={`flex-1 py-3 text-sm font-bold transition-colors ${
            showAfter
              ? 'bg-emerald-50 text-emerald-700 border-b-2 border-emerald-500'
              : 'text-[var(--color-text-muted)]'
          }`}
        >
          {afterLabel}
        </button>
      </div>

      <div className={`p-6 flex-1 transition-colors ${showAfter ? 'bg-emerald-50/40' : 'bg-[var(--color-gray-50)]'}`}>
        <div className="flex items-start gap-3">
          <span
            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
              showAfter ? 'bg-emerald-100 text-emerald-700' : 'bg-[var(--color-brand)]/10 text-[var(--color-brand)]'
            }`}
            aria-hidden="true"
          >
            <Icon className="w-5 h-5" />
          </span>
          <h6 className="body-text text-sm leading-relaxed text-[var(--color-text-body)]">{body}</h6>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const t = useTranslations('results');
  const items = t.raw('items') as ResultItem[];

  return (
    <section className="py-16 md:py-24 bg-[var(--color-gray-50)]">
      <div className="container-page section-body max-w-5xl">
        <ScrollReveal direction="right">
          <div className="mb-12">
            <div className="section-label mb-3">{t('eyebrow')}</div>
            <h3 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              {t('heading')}
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((result, i) => (
            <ScrollReveal key={result.title} delay={i * 0.12} direction={i % 2 === 0 ? 'left' : 'right'}>
              <ToggleCard
                result={result}
                index={i}
                beforeLabel={t('beforeLabel')}
                afterLabel={t('afterLabel')}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
