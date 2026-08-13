'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Clock, Headphones, ShieldCheck, ThumbsUp } from 'lucide-react';
import type { Product } from '@/lib/webcore';
import { waRedirect } from '@/lib/waRedirect';
import { WhatsAppButton, WaIcon } from '@/components/WhatsAppButton';
import ProductImpressionTracker from '@/components/tracking/ProductImpressionTracker';
import ScrollReveal from '@/components/ui/ScrollReveal';

type Mode = 'beli' | 'servis' | 'sewa';

const GUARANTEE_ICONS = [ShieldCheck, ThumbsUp, Clock, Headphones];

function formatRinggit(value: number): string {
  return new Intl.NumberFormat('en-MY', { maximumFractionDigits: 0 }).format(value);
}

export default function ProductGrid({
  products,
  locationSlug,
}: {
  products: Product[];
  /** Passed on location pages so the lead is attributed to that town. */
  locationSlug?: string;
}) {
  const t = useTranslations('products');
  const locale = useLocale();
  const [mode, setMode] = useState<Mode>('beli');

  const modes: { key: Mode; label: string }[] = [
    { key: 'beli', label: t('modeBeli') },
    { key: 'servis', label: t('modeServis') },
    { key: 'sewa', label: t('modeSewa') },
  ];

  const ctaLabel = mode === 'beli' ? t('ctaBeli') : mode === 'servis' ? t('ctaServis') : t('ctaSewa');
  const guarantees = t.raw('guarantees') as string[];

  return (
    <section id="produk" className="py-16 md:py-24 bg-white">
      <div className="container-page section-body">
        <ScrollReveal direction="left">
          <div className="mb-8">
            <div className="section-label mb-3">{t('eyebrow')}</div>
            <h3 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              {t('heading')}
            </h3>
            <h6 className="body-text text-[var(--color-text-body)] text-lg mt-3 max-w-2xl">
              {t('intro')}
            </h6>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div
            className="flex gap-6 md:gap-8 mb-10 border-b border-[var(--color-border)] overflow-x-auto"
            role="tablist"
            aria-label={t('eyebrow')}
          >
            {modes.map((m) => (
              <button
                key={m.key}
                type="button"
                role="tab"
                aria-selected={mode === m.key}
                onClick={() => setMode(m.key)}
                className={`relative pb-3 text-sm font-bold whitespace-nowrap transition-colors ${
                  mode === m.key
                    ? 'text-[var(--color-brand)]'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-body)]'
                }`}
              >
                {m.label}
                {mode === m.key && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-brand)] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {products.length === 0 ? (
          <h6 className="body-text text-center text-[var(--color-text-muted)] py-10">{t('empty')}</h6>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => {
              const photo = product.photos[0]?.url;
              const price =
                mode === 'sewa' ? product.rental_price : mode === 'beli' ? product.sale_price : null;
              const priceLabel = mode === 'sewa' ? t('priceLabelSewa') : t('priceLabelBeli');
              return (
                <ScrollReveal key={product.id} delay={i * 0.08} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className="card p-0 overflow-hidden h-full flex flex-col">
                    <ProductImpressionTracker slug={product.slug} />
                    <div className="relative bg-[var(--color-gray-50)] h-[220px]">
                      {photo && (
                        <Image
                          src={photo}
                          alt={t('imageAltTemplate', { model: product.name })}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h4 className="font-heading text-xl text-[var(--color-text-dark)] mb-2">
                        {product.name}
                      </h4>
                      {product.description && (
                        <h6 className="body-text text-sm leading-relaxed text-[var(--color-text-body)] mb-4">
                          {product.description}
                        </h6>
                      )}

                      {product.prices.length > 0 && (
                        <ul className="space-y-1.5 mb-5">
                          {product.prices.map((line) => (
                            <li
                              key={line.label}
                              className="flex items-center gap-2 text-sm text-[var(--color-text-body)]"
                            >
                              <span className="w-1.5 h-1.5 bg-[var(--color-brand)] rounded-full shrink-0" />
                              <span>{line.label}</span>
                              <span className="ml-auto font-semibold text-[var(--color-text-dark)]">
                                RM {formatRinggit(line.amount)}
                                {line.unit ? ` / ${line.unit}` : ''}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-auto">
                        {price != null && (
                          <div className="mb-4">
                            <div className="text-xs text-[var(--color-text-muted)] font-medium">
                              {priceLabel}
                            </div>
                            <div className="text-2xl font-bold text-[var(--color-brand)]">
                              {t('priceFrom', { price: formatRinggit(price) })}
                            </div>
                          </div>
                        )}
                        <WhatsAppButton
                          href={waRedirect(
                            locale,
                            undefined,
                            locationSlug,
                            product.slug,
                          )}
                          label={`product-${product.slug}`}
                          className="btn-wa w-full text-sm"
                        >
                          <WaIcon size={16} />
                          {ctaLabel}
                        </WhatsAppButton>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        )}

        <ScrollReveal delay={0.2}>
          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {guarantees.map((text, i) => {
                const Icon = GUARANTEE_ICONS[i] ?? GUARANTEE_ICONS[0];
                return (
                  <div key={text} className="flex items-center gap-3 justify-center sm:justify-start">
                    <span className="w-10 h-10 rounded-lg bg-[var(--color-brand)]/10 text-[var(--color-brand)] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <h6 className="body-text text-sm leading-relaxed font-medium text-[var(--color-text-dark)]">
                      {text}
                    </h6>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
