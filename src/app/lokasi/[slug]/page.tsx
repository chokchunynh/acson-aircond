import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { LOCATIONS } from "@/lib/locations";
import { WHATSAPP_NUMBER } from "@/lib/constants";

// Static params for all locations
export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ slug: loc.slug }));
}

// Dynamic metadata per location
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const loc = LOCATIONS.find((l) => l.slug === params.slug);
  if (!loc) {
    return { title: "Lokasi Tidak Dijumpai" };
  }
  const title = `Pasang & Servis Aircond Acson di ${loc.name} | Acson AirCond Malaysia`;
  const description = `Pemasangan, servis & sewa beli aircond Acson di ${loc.name}. Cover ${loc.areas.slice(0, 5).join(", ")} dan lain-lain. WhatsApp untuk harga!`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ms_MY",
      images: [{ url: loc.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [loc.image],
    },
  };
}

const SERVICES_LIST = [
  {
    name: "Pasang Aircond Acson",
    description:
      "Beli unit Acson baru + pemasangan profesional. Semua model tersedia — wall mounted, cassette, ceiling.",
    price: "Dari RM1,580 (unit + pasang)",
    icon: (
      <svg
        className="w-8 h-8 text-[var(--color-brand)]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085"
        />
      </svg>
    ),
  },
  {
    name: "Servis & Chemical Wash",
    description:
      "Servis berkala, chemical wash, gas top-up, dan repair. Aircond sejuk balik, jimat elektrik.",
    price: "Servis dari RM80 | Chemical wash dari RM130",
    icon: (
      <svg
        className="w-8 h-8 text-[var(--color-brand)]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    name: "Sewa Beli Aircond",
    description:
      "Bayar bulanan dari RM109/bulan. Unit baru + pasang + warranty. Akhirnya jadi milik anda.",
    price: "Dari RM109/bulan (24 bulan)",
    icon: (
      <svg
        className="w-8 h-8 text-[var(--color-brand)]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
  },
];

export default function LocationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const loc = LOCATIONS.find((l) => l.slug === params.slug);

  if (!loc) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
              Lokasi Tidak Dijumpai
            </h1>
            <Link href="/lokasi" className="text-[var(--color-brand)] hover:underline">
              &larr; Kembali ke Senarai Lokasi
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const waMessage = `Hi, saya dari ${loc.name}. Saya berminat nak pasang/servis aircond Acson. Boleh bagi maklumat?`;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[var(--color-brand)]">
              Home
            </Link>
            <span>/</span>
            <Link href="/lokasi" className="hover:text-[var(--color-brand)]">
              Lokasi
            </Link>
            <span>/</span>
            <span className="text-gray-700">{loc.name}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/7] rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src={loc.image}
              alt={`Pasang & Servis Aircond Acson di ${loc.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1152px) 100vw, 1152px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-10">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2">
                Pasang &amp; Servis Aircond Acson di {loc.name}
              </h1>
              <p className="text-white/80 text-base sm:text-lg max-w-2xl">
                Ibu negeri: {loc.capital} | {loc.areas.length} kawasan diliputi
              </p>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            {loc.description}
          </p>
        </section>

        {/* Areas Covered */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            Kawasan Yang Kami Cover di {loc.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {loc.areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-[var(--color-brand)]/5 rounded-xl px-4 py-3"
              >
                <svg
                  className="w-5 h-5 text-[var(--color-brand)] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-800">
                  {area}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Kawasan anda tak dalam senarai? WhatsApp kami — kami check dan confirm
            coverage.
          </p>
        </section>

        {/* Services */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
            Servis Aircond Acson di {loc.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SERVICES_LIST.map((svc) => (
              <div
                key={svc.name}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="mb-4">{svc.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {svc.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{svc.description}</p>
                <p className="text-sm font-bold text-[var(--color-brand)]">{svc.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Quick Table */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            Harga Sewa Beli Aircond di {loc.name}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-[var(--color-brand)] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">HP</th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Harga Beli
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    24 Bulan
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    36 Bulan
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Deposit
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    hp: "1.0 HP",
                    buy: "Dari RM1,760",
                    r24: "RM109/bln",
                    r36: "RM79/bln",
                    dep: "RM200",
                  },
                  {
                    hp: "1.5 HP",
                    buy: "Dari RM2,200",
                    r24: "RM139/bln",
                    r36: "RM99/bln",
                    dep: "RM200",
                  },
                  {
                    hp: "2.0 HP",
                    buy: "Dari RM3,250",
                    r24: "RM209/bln",
                    r36: "RM149/bln",
                    dep: "RM300",
                  },
                  {
                    hp: "2.5 HP",
                    buy: "Dari RM3,670",
                    r24: "RM239/bln",
                    r36: "RM169/bln",
                    dep: "RM300",
                  },
                  {
                    hp: "3.0 HP",
                    buy: "Dari RM4,430",
                    r24: "RM269/bln",
                    r36: "RM189/bln",
                    dep: "RM500",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.hp}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-[var(--color-brand)]/5`}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {row.hp}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{row.buy}</td>
                    <td className="px-4 py-3 text-gray-700">{row.r24}</td>
                    <td className="px-4 py-3 text-gray-700">{row.r36}</td>
                    <td className="px-4 py-3 text-gray-700">{row.dep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Coverage Note + CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
          <div className="bg-[var(--color-brand)]/5 rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3">
              Kami Cover Semua Kawasan di {loc.name}
            </h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              WhatsApp kami untuk confirm coverage di kawasan anda. Kami reply
              dalam masa 1 jam waktu bekerja.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-base"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.496A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.347 0-4.527-.809-6.254-2.163l-.438-.35-3.108 1.042 1.042-3.108-.35-.438A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp Sekarang
            </a>
          </div>
        </section>

        {/* Other Locations */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            Lokasi Lain
          </h2>
          <div className="flex flex-wrap gap-3">
            {LOCATIONS.filter((l) => l.slug !== loc.slug).map((l) => (
              <Link
                key={l.slug}
                href={`/lokasi/${l.slug}`}
                className="text-sm bg-gray-100 hover:bg-[var(--color-brand)]/5 text-gray-700 hover:text-[var(--color-brand)] px-4 py-2 rounded-full font-medium transition-colors"
              >
                {l.name}
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
