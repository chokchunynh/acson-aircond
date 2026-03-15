"use client";

import { Shield, CheckCircle, Clock, Headphones } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";

const GUARANTEES = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Warranty 5 Tahun Compressor",
    description: "Setiap pemasangan dilindungi warranty penuh Acson.",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Jaminan Kerja 60 Hari",
    description: "Tak puas hati? Kami datang balik dan betulkan. Percuma.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Response Dalam 1 Jam",
    description: "WhatsApp kami — kami reply dan arrange technician segera.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Sokongan Selepas Pasang",
    description: "Ada masalah selepas pasang? Hubungi kami bila-bila masa.",
  },
];

export default function WarrantyStrip() {
  return (
    <section className="relative py-16 md:py-20 bg-[var(--color-text-dark)] overflow-hidden">
      {/* Subtle diagonal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-brand)]/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-brand)]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/20 border border-[var(--color-brand)]/30 rounded-full px-4 py-1.5 mb-6">
            <Shield className="w-4 h-4 text-[var(--color-brand-light)]" />
            <span className="text-[var(--color-brand-light)] text-sm font-semibold">Jaminan Kami</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Kami Pasang. Kami Jamin.
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Setiap pemasangan Acson oleh kami dilindungi warranty penuh dan jaminan kerja.
            Anda tak perlu risau — kami bertanggungjawab dari hari pertama.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {GUARANTEES.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-[var(--color-brand)] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={whatsappUrl("Hi, saya nak tahu lebih lanjut tentang warranty pemasangan Acson.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-whatsapp)] text-white px-8 py-4 rounded-full font-bold text-base transition-opacity hover:opacity-90 shadow-lg shadow-[var(--color-whatsapp)]/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Kami Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
