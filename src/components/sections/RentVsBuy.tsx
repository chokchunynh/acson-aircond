"use client";

import { RTO_PLANS, whatsappUrl } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Check, X } from "lucide-react";

const SEWA_BELI_POINTS = [
  "Tak perlu bayar penuh — dari RM69/bulan",
  "Unit baru 100% + pemasangan percuma",
  "Warranty 1 tahun termasuk",
  "Selepas habis bayar — aircond jadi milik anda",
  "Deposit rendah — dari RM200 sahaja",
  "Tak payah pinjam bank atau guna kredit kad",
];

const BELI_TERUS_POINTS = [
  { text: "Bayar penuh — dari RM1,440 ke atas", good: true },
  { text: "Unit baru 100% + pemasangan", good: true },
  { text: "Warranty standard Acson", good: true },
  { text: "Kena keluar duit besar sekaligus", good: false },
  { text: "Tak semua orang ada cash", good: false },
  { text: "Maintenance plan kena bayar extra", good: false },
];

export default function RentVsBuy() {
  return (
    <section id="sewa-beli" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="left">
          <div className="mb-14">
            <div className="section-label mb-3">Sewa vs Beli</div>
            <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              Tak Perlu Bayar Penuh. <span className="accent-text">Sewa Beli Dari RM69/Bulan.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline Comparison */}
        <div className="relative">
          {/* Central vertical line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-border)] -translate-x-px" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Sewa Beli */}
            <ScrollReveal direction="left">
              <div className="md:pr-8">
                <h3 className="font-heading text-xl text-[var(--color-brand)] mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[var(--color-brand)] rounded-full" />
                  Sewa Beli (Rent-to-Own)
                </h3>
                <div className="border-l-4 border-[var(--color-brand)] pl-4 space-y-3">
                  {SEWA_BELI_POINTS.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[var(--color-accent-emerald)] shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--color-text-body)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Beli Terus */}
            <ScrollReveal direction="right">
              <div className="md:pl-8">
                <h3 className="font-heading text-xl text-[var(--color-text-dark)] mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[var(--color-text-muted)] rounded-full" />
                  Beli Terus (Cash)
                </h3>
                <div className="pl-4 space-y-3">
                  {BELI_TERUS_POINTS.map((item) => (
                    <div key={item.text} className="flex items-start gap-2">
                      {item.good ? (
                        <Check className="w-5 h-5 text-[var(--color-accent-emerald)] shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm text-[var(--color-text-body)]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Pricing Cards — horizontal row */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14">
            <h3 className="font-heading text-xl text-[var(--color-text-dark)] mb-6">
              Harga Sewa Beli Mengikut HP
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {RTO_PLANS.map((plan) => (
                <div key={plan.hp} className="bg-[var(--color-gray-50)] rounded-xl p-5 text-center">
                  <div className="text-sm font-bold text-[var(--color-text-dark)] mb-2">{plan.hp}</div>
                  <div className="text-lg font-bold text-[var(--color-brand)] mb-1">{plan.rto24}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">24 bulan</div>
                  <div className="w-full h-px bg-[var(--color-border)] my-2" />
                  <div className="text-base font-bold text-[var(--color-brand)]">{plan.rto36}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">36 bulan</div>
                  <div className="mt-2 text-xs text-[var(--color-text-muted)]">Deposit {plan.deposit}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10">
            <a
              href={whatsappUrl("Hi, saya berminat nak sewa beli aircond Acson. Boleh explain plan sewa beli?")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Untuk Sewa Beli
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
