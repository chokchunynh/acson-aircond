import { getTranslations } from 'next-intl/server';
import { Check, X } from 'lucide-react';
import { waRedirect } from '@/lib/waRedirect';
import { WhatsAppButton, WaIcon } from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default async function RentToOwn({
  locale,
  locationSlug,
}: {
  locale: string;
  locationSlug?: string;
}) {
  const t = await getTranslations({ locale, namespace: 'rto' });
  const sewaPoints = t.raw('sewaPoints') as string[];
  const beliPoints = t.raw('beliPoints') as { text: string; good: boolean }[];
  const plans = t.raw('plans') as { hp: string; m24: string; m36: string; deposit: string }[];

  return (
    <section id="sewa-beli" className="py-16 md:py-24 bg-white">
      <div className="container-page section-body max-w-5xl">
        <ScrollReveal direction="left">
          <div className="mb-12">
            <div className="section-label mb-3">{t('eyebrow')}</div>
            <h3 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              {t('heading')}
            </h3>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-border)] -translate-x-px"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <ScrollReveal direction="left">
              <div className="md:pr-8">
                <h4 className="font-heading text-xl text-[var(--color-brand)] mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[var(--color-brand)] rounded-full" aria-hidden="true" />
                  {t('sewaTitle')}
                </h4>
                <div className="border-l-4 border-[var(--color-brand)] pl-4 space-y-3">
                  {sewaPoints.map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[var(--color-accent-emerald)] shrink-0 mt-0.5" aria-hidden="true" />
                      <h6 className="body-text text-sm leading-relaxed text-[var(--color-text-body)]">{point}</h6>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="md:pl-8">
                <h4 className="font-heading text-xl text-[var(--color-text-dark)] mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[var(--color-text-muted)] rounded-full" aria-hidden="true" />
                  {t('beliTitle')}
                </h4>
                <div className="pl-4 space-y-3">
                  {beliPoints.map((point) => (
                    <div key={point.text} className="flex items-start gap-2">
                      {point.good ? (
                        <Check className="w-5 h-5 text-[var(--color-accent-emerald)] shrink-0 mt-0.5" aria-hidden="true" />
                      ) : (
                        <X className="w-5 h-5 text-[var(--color-brand-light)] shrink-0 mt-0.5" aria-hidden="true" />
                      )}
                      <h6 className="body-text text-sm leading-relaxed text-[var(--color-text-body)]">{point.text}</h6>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.15}>
          <div className="mt-14">
            <h4 className="font-heading text-xl text-[var(--color-text-dark)] mb-6">
              {t('tableHeading')}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {plans.map((plan) => (
                <div key={plan.hp} className="bg-[var(--color-gray-50)] rounded-xl p-5 text-center">
                  <h5 className="body-text text-sm font-bold text-[var(--color-text-dark)] mb-2">
                    {plan.hp}
                  </h5>
                  <div className="text-lg font-bold text-[var(--color-brand)]">{plan.m24}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">{t('months24')}</div>
                  <div className="w-full h-px bg-[var(--color-border)] my-2" aria-hidden="true" />
                  <div className="text-base font-bold text-[var(--color-brand)]">{plan.m36}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">{t('months36')}</div>
                  <div className="mt-2 text-xs text-[var(--color-text-muted)]">
                    {t('depositLabel', { amount: plan.deposit })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mt-10 text-center md:text-left">
            <WhatsAppButton
              href={waRedirect(locale, undefined, locationSlug, 'sewa-beli')}
              label="rto"
              className="btn-wa"
            >
              <WaIcon /> {t('ctaLabel')}
            </WhatsAppButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
