'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Plus } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function FaqSection({
  heading,
  eyebrow,
  items,
}: {
  heading?: string;
  eyebrow?: string;
  items?: { q: string; a: string }[];
}) {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = items ?? (t.raw('items') as { q: string; a: string }[]);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container-page section-body max-w-3xl">
        <ScrollReveal direction="left">
          <div className="mb-10">
            <div className="section-label mb-3">{eyebrow ?? t('eyebrow')}</div>
            <h3 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              {heading ?? t('heading')}
            </h3>
          </div>
        </ScrollReveal>

        <div>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={item.q} delay={i * 0.04}>
                <div className={`border-b border-[var(--color-border)] ${isOpen ? 'faq-open' : ''}`}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  >
                    <h4 className="text-base text-[var(--color-text-dark)]">{item.q}</h4>
                    <Plus className="faq-toggle w-5 h-5 text-[var(--color-brand)] shrink-0" aria-hidden="true" />
                  </button>
                  <div className="faq-answer">
                    <h6 className="body-text pl-1 pb-5 text-[var(--color-text-body)] text-sm leading-relaxed">
                      {item.a}
                    </h6>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
