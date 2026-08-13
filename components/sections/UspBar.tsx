import { getTranslations } from 'next-intl/server';
import { BadgeCheck, CalendarClock, ShieldCheck } from 'lucide-react';

const ICONS = [BadgeCheck, CalendarClock, ShieldCheck];

/**
 * The 3-point USP bar that sits directly under the hero on every page.
 * One `.usp-panel` container with three `.usp-cell` children — not three
 * floating cards.
 */
export default async function UspBar({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'usp' });
  const items = t.raw('items') as { title: string; body: string }[];

  return (
    <section className="py-8 md:py-10 bg-[var(--color-gray-50)]">
      <div className="container-page section-body">
        <div className="usp-panel">
          {items.map((item, i) => {
            const Icon = ICONS[i] ?? ICONS[0];
            return (
              <div key={item.title} className="usp-cell">
                <span className="usp-cell__icon" aria-hidden="true">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="usp-cell__title">{item.title}</h3>
                <h6 className="usp-cell__body body-text">{item.body}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
