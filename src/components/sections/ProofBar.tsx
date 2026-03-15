"use client";

import { PROOF_STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProofBar() {
  return (
    <section className="py-12 md:py-16 bg-breeze bg-wash border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {PROOF_STATS.map((stat, i) => {
              const numericMatch = stat.value.match(/^([\d,.]+)/);
              const numericPart = numericMatch ? numericMatch[1] : "";
              const suffixPart = stat.value.replace(numericPart, "");

              return (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-brand)] mb-1">
                    {numericPart ? (
                      <>
                        <AnimatedCounter target={numericPart.replace(/,/g, "")} />
                        {suffixPart}
                      </>
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)] font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {["Acson", "CIDB", "SSM", "SIRIM"].map((name) => (
                <div key={name} className="px-4 py-2 bg-[var(--color-gray-50)] rounded-lg border border-[var(--color-border)]">
                  <span className="text-sm font-semibold text-[var(--color-text-muted)] tracking-wider uppercase">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
