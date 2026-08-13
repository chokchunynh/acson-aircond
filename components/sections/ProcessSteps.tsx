import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Smartphone, Wallet, Wrench } from 'lucide-react';
import { waRedirect } from '@/lib/waRedirect';
import { WhatsAppButton, WaIcon } from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ui/ScrollReveal';

const STEP_ICONS = [Smartphone, Wrench, Wallet];
const STEP_IMAGES = [
  '/images/services/technician-explaining-homeowner.jpg',
  '/images/services/technician-installing-aircond.jpg',
  '/images/happy-family-aircond.jpg',
];

export default async function ProcessSteps({
  locale,
  locationSlug,
}: {
  locale: string;
  locationSlug?: string;
}) {
  const t = await getTranslations({ locale, namespace: 'process' });
  const steps = t.raw('steps') as { title: string; body: string; alt: string }[];

  return (
    <section className="py-16 md:py-24 bg-[var(--color-gray-50)] section-angle">
      <div className="container-page section-body">
        <ScrollReveal direction="right">
          <div className="text-center mb-12">
            <div className="section-label section-label--center mb-3">{t('eyebrow')}</div>
            <h3 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              {t('heading')}
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = STEP_ICONS[i] ?? STEP_ICONS[0];
            return (
              <ScrollReveal key={step.title} delay={i * 0.12}>
                <div className="relative text-center">
                  <div className="w-14 h-14 bg-[var(--color-brand)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-5 shadow-lg shadow-[var(--color-brand)]/20">
                    {i + 1}
                  </div>
                  {/* Connector to the next badge. The right offset has to pay
                      for the grid's 32px gap as well as the badge radius —
                      without the gap term the line stops exactly one gap short
                      of the next badge. Badge radius 28 + 8px breathing room:
                      left  =  50% + 28 + 8
                      right = -(50% + 32 − 28 − 8) = -50% + 4 */}
                  {i < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-[27px] left-[calc(50%+36px)] right-[calc(-50%+4px)] h-[2px] bg-[var(--color-border)]"
                      aria-hidden="true"
                    />
                  )}
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border-b-4 border-[var(--color-brand)]">
                    <div className="relative h-36 w-full">
                      <Image
                        src={STEP_IMAGES[i]}
                        alt={step.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <span
                        className="w-12 h-12 bg-[var(--color-brand)]/10 rounded-xl flex items-center justify-center text-[var(--color-brand)] mx-auto mb-4"
                        aria-hidden="true"
                      >
                        <Icon className="w-6 h-6" />
                      </span>
                      <h4 className="font-heading text-xl text-[var(--color-text-dark)] mb-2">
                        {step.title}
                      </h4>
                      <h6 className="body-text text-sm leading-relaxed text-[var(--color-text-body)]">{step.body}</h6>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Step one is "WhatsApp us" — the section has to end with something to
            tap, or the highest-intent moment on the page goes nowhere. */}
        <ScrollReveal delay={0.3}>
          <div className="process-cta">
            <WhatsAppButton
              href={waRedirect(locale, undefined, locationSlug)}
              label="process"
              className="btn-wa"
            >
              <WaIcon /> {t('ctaLabel')}
            </WhatsAppButton>
            <h6 className="process-cta__note body-text">{t('ctaNote')}</h6>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
