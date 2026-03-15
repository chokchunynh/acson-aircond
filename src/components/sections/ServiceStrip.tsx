"use client";

import { Wrench, SprayCan, CalendarCheck } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";

const PILLARS = [
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Pemasangan",
    description: "Supply + pasang aircond Acson baru. Semua model, semua HP.",
    price: "Dari RM1,560",
    waMessage: "Hi, saya nak pasang aircond Acson. Boleh bagi harga?",
  },
  {
    icon: <SprayCan className="w-6 h-6" />,
    title: "Servis & Repair",
    description: "Chemical wash, gas top-up, repair. Aircond sejuk macam baru.",
    price: "Dari RM80",
    waMessage: "Hi, saya nak servis aircond Acson. Boleh bagi harga?",
  },
  {
    icon: <CalendarCheck className="w-6 h-6" />,
    title: "Sewa Beli",
    description: "Bayar bulanan, akhirnya jadi milik anda. Termasuk pasang + warranty.",
    price: "Dari RM69/bulan",
    waMessage: "Hi, saya berminat nak sewa beli aircond Acson. Boleh explain?",
  },
];

export default function ServiceStrip() {
  return (
    <section className="py-6 bg-[var(--color-brand)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 md:divide-x md:divide-white/20">
          {PILLARS.map((pillar) => (
            <a
              key={pillar.title}
              href={whatsappUrl(pillar.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-4 md:px-6 py-3 md:py-2 group cursor-pointer rounded-lg md:rounded-none transition-colors hover:bg-white/10"
            >
              <div className="w-11 h-11 bg-white/15 rounded-full flex items-center justify-center text-white shrink-0">
                {pillar.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-sm">{pillar.title}</span>
                  <span className="text-white/70 text-xs">•</span>
                  <span className="text-white/90 text-xs font-semibold">{pillar.price}</span>
                </div>
                <p className="text-white/70 text-xs mt-0.5 truncate">{pillar.description}</p>
              </div>
              <svg className="w-4 h-4 text-white/50 shrink-0 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
