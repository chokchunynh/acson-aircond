import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { waRedirect } from '@/lib/waRedirect';
import { WhatsAppButton, WaIcon } from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default async function FinalCta({
  locale,
  locationSlug,
  heading,
}: {
  locale: string;
  locationSlug?: string;
  heading?: string;
}) {
  const t = await getTranslations({ locale, namespace: 'finalCta' });

  return (
    <section id="hubungi" className="relative py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#1A0A0E] via-[#7A1020] to-[#CC1B2B]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/happy-family-aircond.jpg"
          alt={t('bgAlt')}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#E63946]/30 rounded-full blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#FF4D6A]/20 rounded-full blur-[120px]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 diagonal-lines opacity-40" aria-hidden="true" />

      <div className="relative z-10 container-page section-body max-w-4xl text-center">
        <ScrollReveal>
          <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            {heading ?? t('heading')}
          </h3>
          <h6 className="body-text text-white/75 text-lg max-w-2xl mx-auto mb-10">{t('body')}</h6>
          <div className="flex justify-center">
            <WhatsAppButton
              href={waRedirect(locale, undefined, locationSlug)}
              label="final"
              className="btn-wa text-lg shadow-lg shadow-black/20"
            >
              <WaIcon size={20} /> {t('ctaLabel')}
            </WhatsAppButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
