import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { waRedirect } from '@/lib/waRedirect';
import { WhatsAppButton, WaIcon } from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ui/ScrollReveal';

/**
 * Six images against a 2-column (mobile) / 3-column (desktop) grid, so the last
 * row is always full at every breakpoint — never a stranded blank cell.
 */
const GALLERY_IMAGES = [
  '/images/completed-install-bedroom.jpg',
  '/images/services/technician-installing-aircond.jpg',
  '/images/services/technician-servicing-outdoor.jpg',
  '/images/services/technician-explaining-homeowner.jpg',
  '/images/smart-app-control.jpg',
  '/images/hands-working-closeup.jpg',
];

export default async function Gallery({
  locale,
  locationSlug,
}: {
  locale: string;
  locationSlug?: string;
}) {
  const t = await getTranslations({ locale, namespace: 'gallery' });
  const alts = t.raw('alts') as string[];
  const captions = t.raw('captions') as { caption: string; location: string }[];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-page section-body">
        <ScrollReveal direction="left">
          <div className="mb-12">
            <div className="section-label mb-3">{t('eyebrow')}</div>
            <h3 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              {t('heading')}
            </h3>
            <h6 className="body-text text-[var(--color-text-body)] text-lg mt-3 max-w-2xl">
              {t('intro')}
            </h6>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((src, i) => (
            <ScrollReveal key={src} delay={i * 0.06}>
              <figure className="relative rounded-xl overflow-hidden shadow-md group aspect-[4/3] m-0">
                <Image
                  src={src}
                  alt={alts[i]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-3 text-left">
                  <h6 className="body-text text-white text-sm font-semibold">{captions[i]?.caption}</h6>
                  <h6 className="body-text text-white/75 text-xs">{captions[i]?.location}</h6>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <WhatsAppButton
              href={waRedirect(locale, undefined, locationSlug)}
              label="gallery"
              className="btn-wa text-sm"
            >
              <WaIcon size={16} /> {t('ctaLabel')}
            </WhatsAppButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
