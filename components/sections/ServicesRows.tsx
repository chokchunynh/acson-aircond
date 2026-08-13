import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { waRedirect } from '@/lib/waRedirect';
import { WhatsAppButton, WaIcon } from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ui/ScrollReveal';

const SERVICE_IMAGES = [
  '/images/services/technician-installing-aircond.jpg',
  '/images/services/chemical-wash-in-progress.jpg',
  '/images/happy-family-aircond.jpg',
];
const SERVICE_PAGES = ['pasang', 'servis', 'sewa-beli'];

export default async function ServicesRows({
  locale,
  locationSlug,
}: {
  locale: string;
  locationSlug?: string;
}) {
  const t = await getTranslations({ locale, namespace: 'services' });
  const items = t.raw('items') as { name: string; description: string; price: string; alt: string }[];

  return (
    <section id="servis" className="py-16 md:py-24 bg-[var(--color-gray-50)] section-angle-reverse">
      <div className="container-page section-body">
        <ScrollReveal direction="right">
          <div className="mb-12">
            <div className="section-label mb-3">{t('eyebrow')}</div>
            <h3 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              {t('heading')}
            </h3>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {items.map((service, i) => {
            const imageFirst = i % 2 === 0;
            return (
              <ScrollReveal key={service.name} delay={i * 0.1} direction={imageFirst ? 'left' : 'right'}>
                <div
                  className={`flex flex-col ${
                    imageFirst ? 'md:flex-row' : 'md:flex-row-reverse'
                  } bg-white rounded-2xl overflow-hidden shadow-lg`}
                >
                  <div className="relative w-full md:w-2/5 min-h-[200px] md:min-h-[280px]">
                    <Image
                      src={SERVICE_IMAGES[i]}
                      alt={service.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>

                  <div className="flex-1 p-6 md:p-10 flex flex-col justify-center text-center md:text-left">
                    <h4 className="font-heading text-2xl text-[var(--color-text-dark)] mb-3">
                      {service.name}
                    </h4>
                    <h6 className="body-text text-[var(--color-text-body)] mb-4">
                      {service.description}
                    </h6>
                    <h5 className="body-text text-[var(--color-brand)] font-bold text-lg mb-6">
                      {service.price}
                    </h5>
                    <div className="flex justify-center md:justify-start">
                      <WhatsAppButton
                        href={waRedirect(locale, undefined, locationSlug, SERVICE_PAGES[i])}
                        label={`service-${SERVICE_PAGES[i]}`}
                        className="btn-wa text-sm"
                      >
                        <WaIcon size={16} /> {t('ctaLabel')}
                      </WhatsAppButton>
                    </div>
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
