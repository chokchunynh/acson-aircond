import { getTranslations } from 'next-intl/server';

/**
 * Brand / certification strip directly under the USP bar. Text marks rather
 * than logo files: the third-party marks we can legally reproduce are limited,
 * and a wordmark that always renders beats a broken image.
 */
export default async function TrustStrip({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'trust' });
  const logos = t.raw('logos') as { name: string; alt: string }[];

  return (
    <section className="py-8 bg-white border-b border-[var(--color-border)]">
      <div className="container-page section-body">
        <div className="trust-strip">
          <h6 className="trust-strip__label body-text">{t('label')}</h6>
          <div className="trust-strip__logos">
            {logos.map((logo) => (
              <span key={logo.name} className="trust-strip__item" title={logo.alt}>
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
