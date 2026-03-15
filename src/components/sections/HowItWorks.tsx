"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Smartphone, Wrench, Wallet } from "lucide-react";

const STEPS = [
  {
    num: "1",
    icon: <Smartphone className="w-6 h-6" />,
    title: "Pilih Model",
    description: "WhatsApp kami dan beritahu saiz bilik + bajet anda. Kami cadangkan model Acson terbaik untuk anda.",
  },
  {
    num: "2",
    icon: <Wrench className="w-6 h-6" />,
    title: "Kami Pasang",
    description: "Technician datang 1-3 hari selepas confirm. Pemasangan profesional siap dalam 2-4 jam.",
  },
  {
    num: "3",
    icon: <Wallet className="w-6 h-6" />,
    title: "Bayar Bulanan",
    description: "Dari RM69/bulan, selepas habis tempoh jadi milik anda. Takde hidden charges.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-gray-50)] section-angle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="right">
          <div className="text-center mb-16">
            <div className="section-label mx-auto mb-3 before:mx-auto">Cara Sewa Beli</div>
            <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              Sewa Beli Aircond Acson <span className="accent-text">Dalam 3 Langkah</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Clean 3-column cards on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative text-center">
                {/* Number badge */}
                <div className="w-14 h-14 bg-[var(--color-brand)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-5 shadow-lg shadow-[var(--color-brand)]/20">
                  {step.num}
                </div>

                {/* Connector line — desktop only, between cards */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-[2px] bg-[var(--color-border)]" />
                )}

                {/* Icon + Content */}
                <div className="bg-white rounded-xl p-6 shadow-md border-b-4 border-[var(--color-brand)]">
                  <div className="w-12 h-12 bg-[var(--color-brand)]/10 rounded-xl flex items-center justify-center text-[var(--color-brand)] mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-heading text-xl text-[var(--color-text-dark)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-body)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <p className="text-center text-[var(--color-brand)] font-semibold text-base mt-10">
            Dari WhatsApp sampai aircond terpasang — biasanya dalam masa 3 hari.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
