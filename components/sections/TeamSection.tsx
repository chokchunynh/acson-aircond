import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Award, Clock, ShieldCheck, Users } from 'lucide-react';
import { waRedirect } from '@/lib/waRedirect';
import { WhatsAppButton, WaIcon } from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ui/ScrollReveal';

const STAT_ICONS = [Users, Award, Clock, ShieldCheck];

export default async function TeamSection({
  locale,
  locationSlug,
}: {
  locale: string;
  locationSlug?: string;
}) {
  const t = await getTranslations({ locale, namespace: 'team' });
  const stats = t.raw('stats') as { value: string; label: string }[];

  return (
    <section className="py-16 md:py-24 bg-[var(--color-gray-50)]">
      <div className="container-page section-body">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative w-full lg:w-[460px] shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/team-technicians.jpg"
                  alt={t('imageAlt')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 460px"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[var(--color-brand)] text-white px-5 py-3 rounded-xl shadow-lg">
                <div className="text-xl font-bold">{t('badgeValue')}</div>
                <div className="text-xs opacity-90">{t('badgeLabel')}</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="min-w-0 text-center lg:text-left">
              <div className="section-label mb-3">{t('eyebrow')}</div>
              <h3 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">
                {t('heading')}
              </h3>
              <h6 className="body-text text-[var(--color-text-body)] mb-8 max-w-lg mx-auto lg:mx-0">
                {t('body')}
              </h6>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, i) => {
                  const Icon = STAT_ICONS[i] ?? STAT_ICONS[0];
                  return (
                    <div key={stat.label} className="flex items-center gap-3 justify-center lg:justify-start">
                      <span
                        className="w-10 h-10 bg-[var(--color-brand)]/10 rounded-lg flex items-center justify-center text-[var(--color-brand)] shrink-0"
                        aria-hidden="true"
                      >
                        <Icon className="w-5 h-5" />
                      </span>
                      <div className="text-left">
                        <div className="text-lg font-bold text-[var(--color-text-dark)]">{stat.value}</div>
                        <div className="text-xs text-[var(--color-text-muted)]">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <WhatsAppButton
                href={waRedirect(locale, undefined, locationSlug)}
                label="team"
                className="btn-wa text-sm"
              >
                <WaIcon size={16} /> {t('ctaLabel')}
              </WhatsAppButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
