import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { LOCATIONS } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Lokasi Servis Aircond Acson — Seluruh Malaysia | Acson AirCond Malaysia",
  description:
    "Kami cover seluruh Malaysia — KL, Selangor, Johor, Penang, Perak, Melaka, Negeri Sembilan, dan lain-lain. Pasang, servis & sewa beli aircond Acson di kawasan anda.",
  openGraph: {
    title: "Lokasi Servis Aircond Acson — Seluruh Malaysia",
    description:
      "Coverage seluruh Malaysia — pasang, servis & sewa beli aircond Acson. WhatsApp untuk confirm kawasan anda.",
    type: "website",
    locale: "ms_MY",
  },
};

export default function LokasiPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-16">
        {/* Header */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Lokasi Servis Kami
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Kami cover seluruh Malaysia untuk pemasangan, servis, dan sewa beli
            aircond Acson. Pilih negeri anda untuk maklumat lanjut.
          </p>
        </section>

        {/* Locations Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/lokasi/${loc.slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={loc.image}
                    alt={`Servis Aircond Acson di ${loc.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* State name overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <h2 className="text-xl font-extrabold text-white">
                      {loc.name}
                    </h2>
                    <p className="text-sm text-white/80">
                      Ibu negeri: {loc.capital}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {loc.areas.slice(0, 5).map((area) => (
                      <span
                        key={area}
                        className="text-xs bg-[var(--color-brand)]/5 text-[var(--color-brand)] px-2.5 py-1 rounded-full font-medium"
                      >
                        {area}
                      </span>
                    ))}
                    {loc.areas.length > 5 && (
                      <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full font-medium">
                        +{loc.areas.length - 5} lagi
                      </span>
                    )}
                  </div>

                  <span className="inline-block text-sm font-semibold text-[var(--color-brand)] group-hover:underline">
                    Lihat kawasan &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
      <FloatingWhatsApp />
    </>
  );
}
