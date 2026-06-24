"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { WHATSAPP_URL } from "@/lib/constants";
import { Users, Award, Clock, ShieldCheck } from "lucide-react";

const TEAM_STATS = [
  { icon: <Users className="w-5 h-5" />, value: "15+", label: "Technician Berpengalaman" },
  { icon: <Award className="w-5 h-5" />, value: "10+", label: "Tahun Pengalaman" },
  { icon: <Clock className="w-5 h-5" />, value: "1-3", label: "Hari Siap Pasang" },
  { icon: <ShieldCheck className="w-5 h-5" />, value: "100%", label: "Jaminan Kerja" },
];

export default function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          {/* Team Photo */}
          <ScrollReveal direction="left">
            <div className="relative w-full md:w-[480px] shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/team-technicians.jpg"
                  alt="Team technician profesional AirCond Malaysia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[var(--color-brand)] text-white px-5 py-3 rounded-xl shadow-lg">
                <div className="text-xl font-bold">1,000+</div>
                <div className="text-xs opacity-90">Pemasangan Siap</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div>
              <div className="section-label mb-3">Team Kami</div>
              <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">
                Technician Berpengalaman, <span className="accent-text">Kerja Berkualiti</span>
              </h2>
              <p className="text-[var(--color-text-body)] leading-relaxed mb-8 max-w-lg">
                Setiap technician kami terlatih khas untuk model Acson — dari wall mounted sampai cassette.
                Kerja kemas, on-time, dan jaminan kepuasan pelanggan.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {TEAM_STATS.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--color-brand)]/10 rounded-lg flex items-center justify-center text-[var(--color-brand)] shrink-0">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[var(--color-text-dark)]">{stat.value}</div>
                      <div className="text-xs text-[var(--color-text-muted)]">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Untuk Temu Janji
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
