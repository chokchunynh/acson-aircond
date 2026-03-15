"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SprayCan, Sparkles, ThermometerSnowflake, Wind, MapPin } from "lucide-react";

const RESULTS = [
  {
    title: "Chemical Wash — Wall Mounted 1.5HP",
    location: "Puchong, Selangor",
    before: { desc: "Coil hitam, tersumbat habuk tebal 4 tahun. Angin lemah, aircond tak sejuk.", icon: <SprayCan className="w-5 h-5" /> },
    after: { desc: "Coil bersih macam baru, angin kuat balik. Sejuk maksimum, jimat elektrik.", icon: <Sparkles className="w-5 h-5" /> },
  },
  {
    title: "Full Service + Gas Top-Up — 2HP",
    location: "Shah Alam, Selangor",
    before: { desc: "Aircond bocor air, bising teruk. Gas dah habis, compressor overheat.", icon: <ThermometerSnowflake className="w-5 h-5" /> },
    after: { desc: "Takde bocor, senyap, sejuk gila. Gas R32 penuh, perform macam baru.", icon: <Wind className="w-5 h-5" /> },
  },
];

function ToggleCard({ result, index }: { result: typeof RESULTS[number]; index: number }) {
  const [showAfter, setShowAfter] = useState(false);
  const current = showAfter ? result.after : result.before;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="px-6 py-4 bg-[var(--color-gray-50)] flex items-center justify-between">
        <div>
          <h3 className="font-heading text-lg text-[var(--color-text-dark)]">{result.title}</h3>
          <p className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
            <MapPin className="w-3 h-3" /> {result.location}
          </p>
        </div>
      </div>

      {/* Toggle */}
      <div className="flex border-b border-[var(--color-border)]">
        <button
          onClick={() => setShowAfter(false)}
          className={`flex-1 py-3 text-sm font-bold text-center transition-colors ${
            !showAfter ? "bg-red-50 text-red-600 border-b-2 border-red-500" : "text-[var(--color-text-muted)]"
          }`}
        >
          Sebelum
        </button>
        <button
          onClick={() => setShowAfter(true)}
          className={`flex-1 py-3 text-sm font-bold text-center transition-colors ${
            showAfter ? "bg-emerald-50 text-emerald-600 border-b-2 border-emerald-500" : "text-[var(--color-text-muted)]"
          }`}
        >
          Selepas
        </button>
      </div>

      {/* Content */}
      <div className={`p-6 min-h-[120px] transition-colors ${showAfter ? "bg-emerald-50/30" : "bg-red-50/30"}`}>
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
            showAfter ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-500"
          }`}>
            {current.icon}
          </div>
          <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{current.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-gray-50)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="right">
          <div className="mb-14">
            <div className="section-label mb-3">Hasil Kerja</div>
            <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              Tengok Hasil Servis Kami — <span className="accent-text">Aircond Macam Baru</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESULTS.map((result, i) => (
            <ScrollReveal key={i} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
              <ToggleCard result={result} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
