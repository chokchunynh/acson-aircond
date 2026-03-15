"use client";

import { COMPARISON_DATA } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Check, X, Zap, Star, Shield, Wifi, Wind, Leaf } from "lucide-react";

const SELLING_POINTS = [
  { icon: <Zap className="w-5 h-5" />, text: "Inverter Acson jimat sehingga 48% bil elektrik" },
  { icon: <Star className="w-5 h-5" />, text: "Reino+ dapat 5-star energy rating dari Suruhanjaya Tenaga" },
  { icon: <Shield className="w-5 h-5" />, text: "Compressor warranty 5 tahun, parts warranty 3 tahun" },
  { icon: <Wifi className="w-5 h-5" />, text: "Smart control via Acson Smart Home App" },
  { icon: <Wind className="w-5 h-5" />, text: "iClean+ self-clean technology pada coil" },
  { icon: <Leaf className="w-5 h-5" />, text: "Semua model guna R32 refrigerant mesra alam" },
];

export default function Comparison() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="left">
          <div className="mb-14">
            <div className="section-label mb-3">Kenapa Acson</div>
            <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              Jenama Malaysia, Kualiti Jepun. <span className="accent-text">Kenapa Pilih Acson?</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Feature Comparison Cards */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {COMPARISON_DATA.map((row, i) => (
              <div key={i} className="bg-[var(--color-gray-50)] rounded-xl p-5">
                <div className="text-sm font-bold text-[var(--color-text-dark)] mb-3">{row.feature}</div>
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-[var(--color-accent-emerald)]" />
                  <span className="text-sm font-semibold text-[var(--color-brand)]">{row.acson}</span>
                </div>
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-[var(--color-text-muted)]" />
                  <span className="text-sm text-[var(--color-text-muted)]">{row.generic}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Selling Points */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SELLING_POINTS.map((point, i) => (
              <div key={i} className="flex items-start gap-3 p-4">
                <div className="w-10 h-10 bg-[var(--color-brand)]/10 rounded-lg flex items-center justify-center text-[var(--color-brand)] shrink-0">
                  {point.icon}
                </div>
                <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
