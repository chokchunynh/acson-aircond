// ============================================================
// ACSON AIRCOND MALAYSIA — Site Constants
// ============================================================

export const SITE_NAME = "Acson AirCond Malaysia";
export const SITE_TAGLINE = "Pakar Pasang, Servis & Sewa Beli Acson";

// WhatsApp
export const WHATSAPP_NUMBER = "60189294628";
export const WHATSAPP_MESSAGE = "Hi, saya berminat nak pasang aircond Acson. Boleh bagi harga?";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ============================================================
// NAVIGATION
// ============================================================

export const NAV_LINKS = [
  { label: "Produk", href: "/#produk" },
  { label: "Servis", href: "/#servis" },
  { label: "Sewa Beli", href: "/#sewa-beli" },
  { label: "Blog", href: "/blog" },
  { label: "Lokasi", href: "/lokasi" },
];

// ============================================================
// PROOF BAR STATS
// ============================================================

export const PROOF_STATS = [
  { value: "1,000+", label: "Pemasangan Siap" },
  { value: "4.8★", label: "Google Rating" },
  { value: "1-3 Hari", label: "Technician Datang" },
  { value: "5", label: "Cawangan Malaysia" },
];

// ============================================================
// SERVICES
// ============================================================

export interface Service {
  name: string;
  description: string;
  price: string;
  icon: string;
  image: string;
  waMessage: string;
}

export const SERVICES: Service[] = [
  {
    name: "Pasang Aircond Acson",
    description: "Beli unit Acson baru + pemasangan profesional. Semua model tersedia — wall mounted, cassette, ceiling. Harga termasuk bracket, piping, dan wiring standard.",
    price: "Dari RM1,560 (unit + pasang)",
    icon: "wrench",
    image: "/images/hero/technician-install.png",
    waMessage: "Hi, saya nak pasang aircond Acson. Boleh bagi harga?",
  },
  {
    name: "Servis Aircond Acson",
    description: "Servis berkala, chemical wash, gas top-up, dan repair. Aircond sejuk balik, jimat elektrik, tahan lama. Kami pakar Acson — faham setiap model.",
    price: "Servis dari RM80 | Chemical wash dari RM130",
    icon: "spray-can",
    image: "/images/services/chemical-wash.png",
    waMessage: "Hi, saya nak servis aircond Acson. Boleh bagi harga chemical wash?",
  },
  {
    name: "Sewa Beli Aircond Acson",
    description: "Tak perlu bayar penuh. Sewa beli Acson brand new dari RM99/bulan — termasuk unit + pemasangan + warranty 1 tahun. Bayar bulanan, akhirnya aircond tu jadi milik anda.",
    price: "Dari RM99/bulan (24 bulan)",
    icon: "calendar-check",
    image: "/images/services/happy-family.png",
    waMessage: "Hi, saya berminat nak sewa beli aircond Acson. Boleh explain plan sewa beli?",
  },
];

// ============================================================
// PRODUCT DATA
// ============================================================

export type ServiceMode = "beli" | "servis" | "sewa-beli";

export interface ProductCategory {
  name: string;
  slug: string;
  description: Record<ServiceMode, string>;
  features: Record<ServiceMode, string[]>;
  hpRange: string;
  pricing: {
    beli: { label: string; price: string; sub: string };
    servis: { label: string; price: string; sub: string };
    "sewa-beli": { label: string; price: string; sub: string };
  };
  models: string;
  image: string;
  waMessage: Record<ServiceMode, string>;
}

export const SERVICE_MODES: { key: ServiceMode; label: string; icon: string }[] = [
  { key: "beli", label: "Beli & Pasang", icon: "shopping-cart" },
  { key: "servis", label: "Servis & Repair", icon: "spray-can" },
  { key: "sewa-beli", label: "Sewa Beli", icon: "calendar-check" },
];

export const PRODUCTS: ProductCategory[] = [
  {
    name: "Inverter Wall Mounted",
    slug: "inverter-wall",
    description: {
      beli: "Beli unit Acson inverter baru + pemasangan profesional. Jimat elektrik sehingga 48%. Model Reino+, Reino, Avory Premium & Viento tersedia.",
      servis: "Servis berkala untuk aircond Acson inverter anda. Chemical wash, gas top-up, repair — aircond sejuk macam baru.",
      "sewa-beli": "Sewa beli Acson inverter — bayar bulanan, termasuk unit baru + pemasangan + warranty 1 tahun. Akhirnya jadi milik anda.",
    },
    features: {
      beli: ["Jimat 48% Elektrik", "5-Star Energy Rating", "WiFi Smart Control", "iClean+ Technology"],
      servis: ["Chemical Wash", "Gas Top-Up R32", "General Service", "Repair & Troubleshoot"],
      "sewa-beli": ["Unit Baru 100%", "Pasang Percuma", "Warranty 1 Tahun", "Jadi Milik Anda"],
    },
    hpRange: "1.0HP - 2.5HP",
    pricing: {
      beli: { label: "Unit + Pasang", price: "RM1,560", sub: "Harga bergantung model & HP" },
      servis: { label: "Servis dari", price: "RM80", sub: "Chemical wash dari RM130" },
      "sewa-beli": { label: "Bulanan dari", price: "RM99/bln", sub: "24 bulan | Deposit RM200" },
    },
    models: "Avory Premium, Reino+, Reino, Viento",
    image: "/images/products/reinoplus.png",
    waMessage: {
      beli: "Hi, saya nak beli & pasang Acson Inverter Wall Mounted. Boleh bagi harga?",
      servis: "Hi, saya nak servis aircond Acson Inverter. Boleh bagi harga?",
      "sewa-beli": "Hi, saya nak sewa beli Acson Inverter. Boleh explain plan?",
    },
  },
  {
    name: "Non-Inverter Wall Mounted",
    slug: "non-inverter-wall",
    description: {
      beli: "Harga paling mampu milik untuk brand Acson. Model AVO — sesuai untuk bilik jarang digunakan, rumah sewa, atau bajet terhad.",
      servis: "Servis untuk Acson non-inverter AVO. Bersihkan habuk & kulat, top-up gas, pastikan aircond perform macam baru.",
      "sewa-beli": "Sewa beli Acson AVO non-inverter dari RM79/bulan. Paling murah — sesuai untuk bajet terhad tapi nak brand Acson.",
    },
    features: {
      beli: ["Harga Terendah Acson", "Powerful Mode", "R32 Eco-Friendly", "Mudah Diselenggara"],
      servis: ["Chemical Wash", "Gas Top-Up R32", "Filter Cleaning", "General Check-Up"],
      "sewa-beli": ["Unit Baru 100%", "Pasang Percuma", "Warranty 1 Tahun", "Harga Paling Rendah"],
    },
    hpRange: "1.0HP - 2.5HP",
    pricing: {
      beli: { label: "Unit + Pasang", price: "RM1,440", sub: "Harga terendah Acson" },
      servis: { label: "Servis dari", price: "RM80", sub: "Chemical wash dari RM130" },
      "sewa-beli": { label: "Bulanan dari", price: "RM79/bln", sub: "36 bulan | Deposit RM200" },
    },
    models: "AVO Series",
    image: "/images/products/avo-non-inverter.png",
    waMessage: {
      beli: "Hi, saya nak beli & pasang Acson AVO Non-Inverter. Boleh bagi harga?",
      servis: "Hi, saya nak servis aircond Acson Non-Inverter. Boleh bagi harga?",
      "sewa-beli": "Hi, saya nak sewa beli Acson Non-Inverter. Boleh explain plan?",
    },
  },
  {
    name: "Cassette & Ceiling",
    slug: "cassette-ceiling",
    description: {
      beli: "Pemasangan siling — sesuai untuk office, kedai, restoran. Aliran udara 360° untuk pendinginan sekata. Capacity besar.",
      servis: "Servis cassette unit Acson. Chemical overhaul siling unit, gas top-up, pastikan aliran udara 360° berfungsi optimal.",
      "sewa-beli": "Sewa beli Acson cassette untuk premis komersial. Bayar bulanan — sesuai untuk bisnes yang nak aircond premium tanpa modal besar.",
    },
    features: {
      beli: ["360° Airflow", "Ceiling Mounted", "Sesuai Komersial", "High Capacity"],
      servis: ["Full Chemical Overhaul", "360° Vent Cleaning", "Gas Top-Up", "Drain Pan Service"],
      "sewa-beli": ["Unit Baru 100%", "Pasang Percuma", "Warranty 1 Tahun", "Sesuai Komersial"],
    },
    hpRange: "2.0HP - 5.0HP",
    pricing: {
      beli: { label: "Unit + Pasang", price: "RM4,500", sub: "Harga bergantung HP" },
      servis: { label: "Servis dari", price: "RM200", sub: "Full overhaul dari RM350" },
      "sewa-beli": { label: "Bulanan dari", price: "RM239/bln", sub: "24 bulan | Deposit RM500" },
    },
    models: "Ceiling Cassette Series",
    image: "/images/products/avory-premium.png",
    waMessage: {
      beli: "Hi, saya nak beli & pasang Acson Cassette untuk office/kedai. Boleh bagi harga?",
      servis: "Hi, saya nak servis Acson Cassette unit. Boleh bagi harga?",
      "sewa-beli": "Hi, saya nak sewa beli Acson Cassette untuk bisnes. Boleh explain plan?",
    },
  },
];

// ============================================================
// RTO PRICING
// ============================================================

export interface RTOPlan {
  hp: string;
  buyPrice: string;
  rto24: string;
  rto36: string;
  deposit: string;
}

export const RTO_PLANS: RTOPlan[] = [
  { hp: "1.0 HP", buyPrice: "Dari RM1,560", rto24: "RM99/bln", rto36: "RM69/bln", deposit: "RM200" },
  { hp: "1.5 HP", buyPrice: "Dari RM1,950", rto24: "RM129/bln", rto36: "RM89/bln", deposit: "RM200" },
  { hp: "2.0 HP", buyPrice: "Dari RM2,910", rto24: "RM189/bln", rto36: "RM139/bln", deposit: "RM300" },
  { hp: "2.5 HP", buyPrice: "Dari RM3,470", rto24: "RM219/bln", rto36: "RM159/bln", deposit: "RM300" },
];

// ============================================================
// TESTIMONIALS
// ============================================================

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { name: "Ahmad R.", role: "Pemilik Rumah, Puchong", quote: "WhatsApp tanya harga Acson Reino+ 1.5HP, petang dah confirm. Esok technician datang pasang. Memang laju. Aircond sejuk, harga pun berpatutan.", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Faizal M.", role: "Landlord, Shah Alam", quote: "Saya sewa beli Acson Viento 2HP untuk rumah sewa — RM189 sebulan je. Tak payah keluar duit besar. Tenant happy, saya pun happy.", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Siti A.", role: "Ibu Rumah, Ampang", quote: "Dulu pakai aircond lama, bil elektrik RM400 sebulan. Tukar Acson inverter Reino+, turun jadi RM240. Jimat gila. 5-star energy rating memang berkesan.", avatar: "https://randomuser.me/api/portraits/women/28.jpg" },
  { name: "Jason T.", role: "Condo Owner, KLCC", quote: "Chemical wash servis memang bagus. Aircond dah 4 tahun tak servis — lepas chemical wash, sejuk macam baru. RM150 je.", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { name: "Nurul H.", role: "Pemilik Apartment, Cyberjaya", quote: "Compare harga 5 kedai sebelum jumpa AirCond Malaysia. Harga paling transparent, takde hidden charges. Siap ada sewa beli. Acson Avory Premium cantik design dia.", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Kevin L.", role: "Business Owner, PJ", quote: "Pasang 3 unit Acson Avory Premium untuk office baru. Design sleek dan 3D airflow memang best. Technician siap dalam satu hari.", avatar: "https://randomuser.me/api/portraits/men/55.jpg" },
  { name: "Rizal K.", role: "Pemilik Rumah, Seremban", quote: "First time dengar boleh SEWA BELI aircond Acson. Ingat tipu. Tapi betul — RM99 sebulan, siap pasang semua. Lepas habis bayar, jadi milik saya.", avatar: "https://randomuser.me/api/portraits/men/36.jpg" },
  { name: "Aminah Z.", role: "Office Manager, Putrajaya", quote: "Servis aircond office 8 unit Acson sekaligus. Harga bulk discount, siap dalam setengah hari. Professional gila team ni.", avatar: "https://randomuser.me/api/portraits/women/52.jpg" },
];

// ============================================================
// FAQ
// ============================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Berapa harga pasang aircond Acson?",
    answer: "Harga bermula dari RM1,560 untuk unit Acson 1HP + pemasangan standard. Harga termasuk bracket, piping (10ft), dan wiring. Kalau piping lebih panjang, kami bagitahu harga extra sebelum start kerja — takde surprise charges.",
  },
  {
    question: "Macam mana sewa beli aircond Acson berfungsi?",
    answer: "Anda pilih model, kami pasang unit baru. Bayar secara bulanan — dari RM69/bulan (36 bulan) atau RM99/bulan (24 bulan). Deposit RM200-300 bergantung pada HP. Selepas habis bayar, unit 100% jadi milik anda.",
  },
  {
    question: "Sewa beli termasuk apa?",
    answer: "Termasuk unit Acson brand new, pemasangan profesional, dan warranty 1 tahun. Anda juga boleh tambah maintenance plan (RM49/bulan) untuk servis berkala — kami datang setiap 3 bulan.",
  },
  {
    question: "Kawasan mana anda cover?",
    answer: "KL, Selangor, Johor Bahru, Penang, dan Negeri Sembilan. Kalau kawasan anda tak dalam senarai, WhatsApp kami — kami check dan confirm.",
  },
  {
    question: "Berapa lama proses pemasangan?",
    answer: "Biasanya 1-3 hari selepas confirm order. Pemasangan sendiri ambil masa 2-4 jam bergantung pada setup. Kami buat scheduling siap — anda just pilih slot yang sesuai.",
  },
  {
    question: "Kenapa pilih Acson?",
    answer: "Acson adalah jenama aircond Malaysia yang dimiliki oleh Daikin Industries (syarikat induk Jepun) — gabungan kualiti Jepun dengan harga Malaysia. Model Reino+ dapat 5-star energy rating dari Suruhanjaya Tenaga — jimat sehingga 48% elektrik. Semua model guna R32 eco-friendly.",
  },
  {
    question: "Kalau aircond rosak dalam tempoh sewa beli?",
    answer: "Dalam tempoh warranty, kami repair atau ganti percuma. Selepas warranty, anda boleh WhatsApp kami untuk servis — kami bagi harga istimewa untuk pelanggan sewa beli.",
  },
  {
    question: "Ada soalan lain?",
    answer: "WhatsApp kami terus di +60189294628 — kami reply dalam masa 1 jam waktu bekerja. Tak payah call, tak payah isi borang. WhatsApp je.",
  },
];

// ============================================================
// COVERAGE AREAS
// ============================================================

export interface CoverageAreaItem {
  state: string;
  slug: string;
  areas: string;
  image: string;
}

export const COVERAGE_AREAS: CoverageAreaItem[] = [
  { state: "Kuala Lumpur", slug: "kuala-lumpur", areas: "Semua kawasan", image: "/images/locations/kuala-lumpur.jpg" },
  { state: "Selangor", slug: "selangor", areas: "Shah Alam, PJ, Subang, Puchong, Klang, Cyberjaya, Putrajaya, Ampang, Cheras", image: "/images/locations/selangor.jpg" },
  { state: "Johor", slug: "johor", areas: "JB, Iskandar, Kulai, Pontian", image: "/images/locations/johor.jpg" },
  { state: "Penang", slug: "penang", areas: "George Town, Butterworth, Seberang Perai", image: "/images/locations/penang.jpg" },
  { state: "Negeri Sembilan", slug: "negeri-sembilan", areas: "Seremban, Nilai", image: "/images/locations/negeri-sembilan.jpg" },
];

// ============================================================
// ACSON vs COMPETITORS
// ============================================================

export const COMPARISON_DATA = [
  { feature: "Penjimatan elektrik", acson: "Jimat sehingga 48%", generic: "Standard" },
  { feature: "Energy Rating", acson: "5-Star (Reino+)", generic: "3-4 Star" },
  { feature: "Hayat compressor", acson: "8-10 tahun", generic: "3-5 tahun" },
  { feature: "Warranty compressor", acson: "5 tahun", generic: "1-2 tahun" },
  { feature: "Smart control (WiFi)", acson: "✅ Acson Smart Home", generic: "❌ Kebanyakan tiada" },
  { feature: "Self-clean technology", acson: "✅ iClean+ (Reino+)", generic: "❌ Tiada" },
  { feature: "R32 eco-friendly", acson: "✅ Semua model", generic: "Campuran" },
];

// ============================================================
// FOOTER
// ============================================================

export const FOOTER_LINKS = [
  { label: "Produk", href: "/#produk" },
  { label: "Servis", href: "/#servis" },
  { label: "Sewa Beli", href: "/#sewa-beli" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
  { label: "Lokasi", href: "/lokasi" },
  { label: "Privacy Policy", href: "/privacy" },
];
