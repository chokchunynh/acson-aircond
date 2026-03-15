"use client";

import Image from "next/image";
import { WHATSAPP_URL, PROOF_STATS } from "@/lib/constants";
import { Wrench, SprayCan, CalendarCheck } from "lucide-react";

const SERVICE_CHIPS = [
  { icon: <Wrench className="w-4 h-4" />, label: "Pemasangan", href: "/#produk" },
  { icon: <SprayCan className="w-4 h-4" />, label: "Servis", href: "/#servis" },
  { icon: <CalendarCheck className="w-4 h-4" />, label: "Sewa Beli", href: "/#sewa-beli" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Full-width background image */}
      <Image
        src="/images/hero/technician-install.png"
        alt="Technician profesional memasang aircond Acson di rumah moden Malaysia"
        fill
        className="object-cover"
        priority
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-32">
        <p className="text-white/70 text-sm font-semibold tracking-widest uppercase mb-4">
          Authorised Installer of AirCond Malaysia
        </p>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
          Pasang Aircond Acson<br />
          <span className="text-[var(--color-brand-light)]">Dari RM99/bulan</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Model Reino+, Avory Premium, Viento &amp; lagi — semua ada stok.
          Harga transparent, technician berpengalaman, jaminan kerja.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Untuk Harga
          </a>
          <a href="/#produk" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-[var(--color-brand)]">
            Lihat Model Acson
          </a>
        </div>

        {/* Service chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {SERVICE_CHIPS.map((chip) => (
            <a key={chip.label} href={chip.href} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
              {chip.icon}
              {chip.label}
            </a>
          ))}
        </div>
      </div>

      {/* Floating Stats Bar — absorbs ProofBar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-md rounded-t-2xl shadow-lg px-6 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {PROOF_STATS.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-[var(--color-brand)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
