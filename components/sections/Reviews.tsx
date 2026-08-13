import { getTranslations } from 'next-intl/server';
import { Star } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default async function Reviews({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'reviews' });
  const items = t.raw('items') as { name: string; initials: string; role: string; quote: string }[];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-page section-body">
        <ScrollReveal direction="left">
          <div className="mb-12">
            <div className="section-label mb-3">{t('eyebrow')}</div>
            <h3 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              {t('heading')}
            </h3>
            <div className="flex items-center gap-2 mt-3">
              <span className="flex gap-0.5" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-[var(--color-accent-amber)] fill-[var(--color-accent-amber)]" />
                ))}
              </span>
              <h6 className="body-text text-sm font-semibold text-[var(--color-text-muted)]">
                {t('ratingLabel')}
              </h6>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 0.06}>
              <div className="relative h-full bg-[var(--color-gray-50)] rounded-xl p-6">
                <span
                  className="font-heading text-5xl text-[var(--color-brand)]/20 absolute top-3 left-5 leading-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <div className="pt-6">
                  <span className="flex gap-0.5 mb-3" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-[var(--color-accent-amber)] fill-[var(--color-accent-amber)]" />
                    ))}
                  </span>
                  <h6 className="body-text text-sm leading-relaxed text-[var(--color-text-body)] mb-4">{review.quote}</h6>
                  <div className="flex items-center gap-3">
                    <span
                      className="w-9 h-9 rounded-full bg-[var(--color-brand)] flex items-center justify-center text-white font-semibold text-xs shrink-0"
                      aria-hidden="true"
                    >
                      {review.initials}
                    </span>
                    <div>
                      <h5 className="body-text text-sm font-semibold text-[var(--color-text-dark)]">
                        {review.name}
                      </h5>
                      <h6 className="body-text text-xs text-[var(--color-text-muted)]">{review.role}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
