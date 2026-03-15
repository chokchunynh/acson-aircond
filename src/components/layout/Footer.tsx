import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_URL, WHATSAPP_NUMBER, NAV_LINKS, FOOTER_LINKS, COVERAGE_AREAS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t-4 border-[var(--color-brand)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Brand Column — 40% */}
          <div className="md:w-2/5">
            <Image src="/images/brand/acson-logo-red.webp" alt="Acson International" width={256} height={82} className="h-12 w-auto" />
            <p className="text-[var(--color-text-muted)] text-sm mt-3 leading-relaxed max-w-xs">
              Pakar Pasang, Servis &amp; Sewa Beli Acson. Jenama Malaysia, kualiti Jepun.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {["Acson", "CIDB", "SSM", "SIRIM"].map((name) => (
                <span key={name} className="text-xs text-[var(--color-text-muted)] bg-[var(--color-gray-50)] px-2.5 py-1 rounded font-medium">
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-sm text-[var(--color-text-dark)] mb-4">Navigasi</h4>
              <div className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-[var(--color-text-muted)] hover:text-[var(--color-brand)] text-sm transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm text-[var(--color-text-dark)] mb-4">Pautan</h4>
              <div className="space-y-2.5">
                {FOOTER_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-[var(--color-text-muted)] hover:text-[var(--color-brand)] text-sm transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm text-[var(--color-text-dark)] mb-4">Hubungi</h4>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-brand)] text-sm transition-colors">
                WhatsApp: +{WHATSAPP_NUMBER}
              </a>
              <h4 className="font-bold text-sm text-[var(--color-text-dark)] mt-6 mb-3">Kawasan</h4>
              <div className="flex flex-wrap gap-1.5">
                {COVERAGE_AREAS.map((area) => (
                  <span key={area.state} className="text-xs text-[var(--color-text-muted)] bg-[var(--color-gray-50)] px-2 py-0.5 rounded">
                    {area.state}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar — brand red */}
      <div className="bg-[var(--color-brand)] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/80 text-xs">&copy; 2026 AirCond Malaysia. All rights reserved.</p>
          <p className="text-white/60 text-xs">Authorised Installer of AirCond Malaysia</p>
        </div>
      </div>
    </footer>
  );
}
