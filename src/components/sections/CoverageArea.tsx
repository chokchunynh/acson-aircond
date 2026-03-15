"use client";

import Link from "next/link";
import { COVERAGE_AREAS, WHATSAPP_URL } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MapPin, ChevronRight } from "lucide-react";

export default function CoverageArea() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-gray-50)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="right">
          <div className="mb-14">
            <div className="section-label mb-3">Kawasan Liputan</div>
            <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              Kami Servis <span className="accent-text">Seluruh Malaysia</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Clean List with State Rows */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-md">
          {COVERAGE_AREAS.map((area, i) => (
            <ScrollReveal key={area.state} delay={i * 0.08}>
              <Link
                href={`/lokasi/${area.slug}`}
                className="flex items-center gap-4 px-6 py-5 hover:bg-[var(--color-gray-50)] transition-colors border-b border-[var(--color-border)] last:border-b-0 group"
              >
                <div className="w-10 h-10 bg-[var(--color-brand)]/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[var(--color-brand)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[var(--color-text-dark)]">{area.state}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] truncate">{area.areas}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-brand)] shrink-0 transition-colors" />
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-[var(--color-text-muted)] text-sm mt-6">
            Kawasan lain?{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand)] font-semibold link-hover">
              WhatsApp kami
            </a>{" "}
            — kami check coverage untuk anda.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
