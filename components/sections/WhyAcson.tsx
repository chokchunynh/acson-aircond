import { getTranslations } from 'next-intl/server';
import { Check, Leaf, Shield, Star, Wifi, Wind, X, Zap } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const POINT_ICONS = [Zap, Star, Shield, Wifi, Wind, Leaf];

export default async function WhyAcson({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'why' });
  const rows = t.raw('rows') as { feature: string; acson: string; generic: string }[];
  const points = t.raw('points') as string[];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white">
      {/* Decorative airflow backdrop. It carries meaning for sighted users, so
          it is announced rather than hidden. */}
      <div
        className="absolute inset-0 opacity-[0.07] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-airflow.jpg')" }}
        role="img"
        aria-label={t('bgAlt')}
      />
      <div className="relative z-10 container-page section-body">
        <ScrollReveal direction="left">
          <div className="mb-12">
            <div className="section-label mb-3">{t('eyebrow')}</div>
            <h3 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              {t('heading')}
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {rows.map((row) => (
              <div key={row.feature} className="bg-[var(--color-gray-50)] rounded-xl p-5">
                <h5 className="body-text text-sm font-bold text-[var(--color-text-dark)] mb-3">
                  {row.feature}
                </h5>
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-[var(--color-accent-emerald)] shrink-0" aria-hidden="true" />
                  <h6 className="body-text text-sm leading-relaxed font-semibold text-[var(--color-brand)]">
                    <span className="sr-only">{t('acsonLabel')}: </span>{row.acson}
                  </h6>
                </div>
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-[var(--color-text-muted)] shrink-0" aria-hidden="true" />
                  <h6 className="body-text text-sm leading-relaxed text-[var(--color-text-muted)]">
                    <span className="sr-only">{t('genericLabel')}: </span>{row.generic}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {points.map((point, i) => {
              const Icon = POINT_ICONS[i] ?? POINT_ICONS[0];
              return (
                <div key={point} className="flex items-start gap-3 p-4">
                  <span
                    className="w-10 h-10 bg-[var(--color-brand)]/10 rounded-lg flex items-center justify-center text-[var(--color-brand)] shrink-0"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                  <h6 className="body-text text-sm leading-relaxed text-[var(--color-text-body)]">{point}</h6>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
