"use client";

import { useState } from "react";
import Image from "next/image";
import { PRODUCTS, SERVICE_MODES, whatsappUrl } from "@/lib/constants";
import type { ServiceMode } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Shield, CheckCircle, Clock, Headphones } from "lucide-react";

const GUARANTEES = [
  { icon: <Shield className="w-5 h-5" />, text: "Warranty 5 Tahun Compressor" },
  { icon: <CheckCircle className="w-5 h-5" />, text: "Jaminan Kerja 60 Hari" },
  { icon: <Clock className="w-5 h-5" />, text: "Response Dalam 1 Jam" },
  { icon: <Headphones className="w-5 h-5" />, text: "Sokongan Selepas Pasang" },
];

export default function ProductCatalog() {
  const [mode, setMode] = useState<ServiceMode>("beli");

  return (
    <section id="produk" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="left">
          <div className="mb-10">
            <div className="section-label mb-3">Model Acson</div>
            <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              Pilih Aircond Acson <span className="accent-text">Yang Sesuai</span>
            </h2>
            <p className="text-[var(--color-text-body)] text-lg mt-3 max-w-2xl">
              Anda nak beli, servis, atau sewa beli? Pilih di bawah — harga berubah mengikut pilihan anda.
            </p>
          </div>
        </ScrollReveal>

        {/* Underline Tab Selector */}
        <ScrollReveal>
          <div className="flex gap-8 mb-12 border-b border-[var(--color-border)]">
            {SERVICE_MODES.map((m) => (
              <button
                key={m.key}
                onClick={() => setMode(m.key)}
                className={`pb-3 text-sm font-bold transition-colors relative ${
                  mode === m.key
                    ? "text-[var(--color-brand)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-body)]"
                }`}
              >
                {m.label}
                {mode === m.key && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-brand)] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <ScrollReveal key={product.slug} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="card p-0 overflow-hidden h-full flex flex-col">
                <div className="relative bg-[var(--color-gray-50)] overflow-hidden" style={{ height: 240 }}>
                  <Image
                    src={product.image}
                    alt={`Acson ${product.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-xl text-[var(--color-text-dark)] mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] mb-3">
                    {product.hpRange} &nbsp;|&nbsp; {product.models}
                  </p>
                  <p className="text-sm text-[var(--color-text-body)] leading-relaxed mb-4 min-h-[60px]">
                    {product.description[mode]}
                  </p>

                  {/* Feature dot list */}
                  <ul className="space-y-1.5 mb-5">
                    {product.features[mode].map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-[var(--color-text-body)]">
                        <span className="w-1.5 h-1.5 bg-[var(--color-brand)] rounded-full shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* Pricing + CTA */}
                  <div className="mt-auto">
                    <div className="mb-4">
                      <div className="text-xs text-[var(--color-text-muted)] font-medium">
                        {product.pricing[mode].label}
                      </div>
                      <div className="text-2xl font-bold text-[var(--color-brand)]">
                        {product.pricing[mode].price}
                      </div>
                      <div className="text-xs text-[var(--color-text-muted)]">
                        {product.pricing[mode].sub}
                      </div>
                    </div>

                    <a
                      href={whatsappUrl(product.waMessage[mode])}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      WhatsApp Untuk {mode === "beli" ? "Harga" : mode === "servis" ? "Booking" : "Sewa Beli"}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Guarantee Icons Row — absorbed from WarrantyStrip */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {GUARANTEES.map((g) => (
                <div key={g.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-brand)]/10 rounded-lg flex items-center justify-center text-[var(--color-brand)] shrink-0">
                    {g.icon}
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-dark)]">{g.text}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
