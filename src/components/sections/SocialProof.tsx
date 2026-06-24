"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Star } from "lucide-react";

export default function SocialProof() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="left">
          <div className="mb-14">
            <div className="section-label mb-3">Testimoni</div>
            <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              Dipercayai Pelanggan <span className="accent-text">Di Seluruh Malaysia</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {visible.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="break-inside-avoid bg-[var(--color-gray-50)] rounded-xl p-6 relative">
                {/* Decorative quote mark */}
                <span className="font-heading text-5xl text-[var(--color-brand)]/20 absolute top-3 left-5 leading-none select-none">
                  &ldquo;
                </span>

                <div className="pt-6">
                  <div className="flex gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--color-text-body)] leading-relaxed mb-4">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[var(--color-brand)] flex items-center justify-center text-white font-semibold text-xs shrink-0">{t.initials}</div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-dark)]">{t.name}</p>
                      <p className="text-xs text-[var(--color-text-muted)]">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {!showAll && TESTIMONIALS.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="btn-secondary text-sm"
            >
              Lihat Semua Testimoni
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
