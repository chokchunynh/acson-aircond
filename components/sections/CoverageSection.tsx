import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { ChevronRight, MapPin } from 'lucide-react';
import { locationsInState, states } from '@/config/locations';
import { siteConfig } from '@/config/site';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default async function CoverageSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'coverage' });

  return (
    <section id="kawasan" className="py-16 md:py-24 bg-[var(--color-gray-50)]">
      <div className="container-page section-body max-w-5xl">
        <ScrollReveal direction="right">
          <div className="mb-12">
            <div className="section-label mb-3">{t('eyebrow')}</div>
            <h3 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              {t('heading')}
            </h3>
          </div>
        </ScrollReveal>

        <div className="bg-white rounded-2xl overflow-hidden shadow-md">
          {states.map((state, i) => {
            const towns = locationsInState(state.slug);
            return (
              <ScrollReveal key={state.slug} delay={i * 0.04}>
                <Link
                  href={`/${locale}/${siteConfig.productSlug}#${state.slug}`}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-[var(--color-gray-50)] transition-colors border-b border-[var(--color-border)] last:border-b-0 group"
                >
                  <span
                    className="w-10 h-10 bg-[var(--color-brand)]/10 rounded-lg flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <MapPin className="w-5 h-5 text-[var(--color-brand)]" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <h4 className="text-base text-[var(--color-text-dark)]">{state.name}</h4>
                    <h6 className="body-text text-sm leading-relaxed text-[var(--color-text-muted)] truncate">
                      {towns
                        .slice(0, 4)
                        .map((l) => l.name)
                        .join(', ')}
                      {towns.length > 4 ? ' …' : ''}
                    </h6>
                  </span>
                  <span className="text-xs font-semibold text-[var(--color-text-muted)] shrink-0 hidden sm:inline">
                    {t('townsLabel', { count: towns.length })}
                  </span>
                  <ChevronRight
                    className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-brand)] shrink-0 transition-colors"
                    aria-hidden="true"
                  />
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 text-center">
            <Link href={`/${locale}/${siteConfig.productSlug}`} className="btn-secondary text-sm">
              {t('viewAll')}
            </Link>
            <h6 className="body-text text-[var(--color-text-muted)] text-sm mt-4">{t('note')}</h6>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
