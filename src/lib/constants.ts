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
  { value: "1,000", suffix: "+", label: "Pemasangan Siap" },
  { value: "4.9", suffix: "/5", label: "Google Rating" },
  { value: "40", suffix: "+ Tahun", label: "Jenama Malaysia Sejak 1984" },
  { value: "13", suffix: " Negeri", label: "Liputan Malaysia" },
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
    image: "/images/services/technician-installing-aircond.jpg",
    waMessage: "Hi, saya nak pasang aircond Acson. Boleh bagi harga?",
  },
  {
    name: "Servis Aircond Acson",
    description: "Servis berkala, chemical wash, gas top-up, dan repair. Aircond sejuk balik, jimat elektrik, tahan lama. Kami pakar Acson — faham setiap model.",
    price: "Servis dari RM80 | Chemical wash dari RM130",
    icon: "spray-can",
    image: "/images/services/chemical-wash-in-progress.jpg",
    waMessage: "Hi, saya nak servis aircond Acson. Boleh bagi harga chemical wash?",
  },
  {
    name: "Sewa Beli Aircond Acson",
    description: "Tak perlu bayar penuh. Sewa beli Acson brand new dari RM99/bulan — termasuk unit + pemasangan + warranty 1 tahun. Bayar bulanan, akhirnya aircond tu jadi milik anda.",
    price: "Dari RM99/bulan (24 bulan)",
    icon: "calendar-check",
    image: "/images/happy-family-aircond.jpg",
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
    name: "Avory Premium (Flagship)",
    slug: "avory-premium",
    description: {
      beli: "Flagship Acson dengan iSenz+ human detection, Foresto Technology (Filtronz+ + Plusma), dan iTurbo+ rapid cooling 20 minit. 5-Star Energy Rating, jimat sehingga 48% elektrik. Senyap serendah 19 dBA.",
      servis: "Servis berkala untuk Acson Avory Premium anda. Chemical wash, gas top-up, repair — aircond perform macam baru.",
      "sewa-beli": "Sewa beli Acson Avory Premium — flagship dengan AI sensor. Bayar bulanan, termasuk unit baru + pemasangan.",
    },
    features: {
      beli: ["iSenz+ Human Detection", "Foresto Technology (Plusma + Filtronz+)", "iTurbo+ Rapid Cool 20 Min", "WiFi MyAcson App"],
      servis: ["Chemical Wash", "Gas Top-Up R32", "General Service", "Repair & Troubleshoot"],
      "sewa-beli": ["Unit Baru 100%", "Pasang Percuma", "Warranty 1 Tahun", "Jadi Milik Anda"],
    },
    hpRange: "1.0HP - 2.5HP",
    pricing: {
      beli: { label: "Unit + Pasang", price: "RM2,130", sub: "1.0HP (A3WMY10APF) | Sehingga RM4,450 (2.5HP)" },
      servis: { label: "Servis dari", price: "RM80", sub: "Chemical wash dari RM130" },
      "sewa-beli": { label: "Bulanan dari", price: "RM129/bln", sub: "24 bulan | Deposit RM300" },
    },
    models: "A3WMY10APF (1.0HP), A3WMY15APF (1.5HP), A3WMY20APF (2.0HP), A3WMY25APF (2.5HP)",
    image: "/images/products/avory-premium.png",
    waMessage: {
      beli: "Hi, saya nak beli & pasang Acson Avory Premium. Boleh bagi harga?",
      servis: "Hi, saya nak servis aircond Acson Avory Premium. Boleh bagi harga?",
      "sewa-beli": "Hi, saya nak sewa beli Acson Avory Premium. Boleh explain plan?",
    },
  },
  {
    name: "Reino+ (Premium Inverter)",
    slug: "reinoplus",
    description: {
      beli: "Acson Reino+ — 5-Star Energy Rating, iClean+ self-cleaning patented, dan Filtronz+ anti-virus filter (Silver Ion Ag+). Jimat sehingga 47% elektrik. WiFi built-in.",
      servis: "Servis untuk Acson Reino+. Bersihkan habuk & kulat, top-up gas, pastikan aircond perform macam baru.",
      "sewa-beli": "Sewa beli Acson Reino+ dari RM109/bulan. Premium inverter dengan self-clean tanpa modal besar.",
    },
    features: {
      beli: ["5-Star Energy Rating", "iClean+ Patented Self-Clean", "Filtronz+ Anti-Virus (Ag+)", "WiFi MyAcson App"],
      servis: ["Chemical Wash", "Gas Top-Up R32", "Filter Cleaning", "General Check-Up"],
      "sewa-beli": ["Unit Baru 100%", "Pasang Percuma", "Warranty 1 Tahun", "Harga Berbaloi"],
    },
    hpRange: "1.0HP - 2.5HP",
    pricing: {
      beli: { label: "Unit + Pasang", price: "RM1,695", sub: "1.0HP (A3WMY10BF) | Sehingga RM3,670 (2.5HP)" },
      servis: { label: "Servis dari", price: "RM80", sub: "Chemical wash dari RM130" },
      "sewa-beli": { label: "Bulanan dari", price: "RM109/bln", sub: "24 bulan | Deposit RM200" },
    },
    models: "A3WMY10BF (1.0HP), A3WMY15BF (1.5HP), A3WMY20BF (2.0HP), A3WMY25BF (2.5HP)",
    image: "/images/products/reinoplus.png",
    waMessage: {
      beli: "Hi, saya nak beli & pasang Acson Reino+. Boleh bagi harga?",
      servis: "Hi, saya nak servis aircond Acson Reino+. Boleh bagi harga?",
      "sewa-beli": "Hi, saya nak sewa beli Acson Reino+. Boleh explain plan?",
    },
  },
  {
    name: "Viento (Value Inverter)",
    slug: "viento",
    description: {
      beli: "Acson Viento — entry-point inverter terbaik. Filtronz+ anti-virus, iClean+, WiFi built-in. 3-4 Star Energy Rating. Harga berbaloi untuk kualiti Acson.",
      servis: "Servis untuk Acson Viento. Chemical wash, gas top-up, repair — aircond perform optimal.",
      "sewa-beli": "Sewa beli Acson Viento dari RM89/bulan. Inverter quality pada harga mampu milik.",
    },
    features: {
      beli: ["Filtronz+ Anti-Virus Filter", "iClean+ Self-Clean", "WiFi MyAcson App", "R32 Eco-Friendly"],
      servis: ["Chemical Wash", "Gas Top-Up R32", "Filter Cleaning", "General Check-Up"],
      "sewa-beli": ["Unit Baru 100%", "Pasang Percuma", "Warranty 1 Tahun", "Harga Mampu Milik"],
    },
    hpRange: "1.0HP - 2.5HP",
    pricing: {
      beli: { label: "Unit + Pasang", price: "RM1,360", sub: "1.0HP | Sehingga RM3,150 (2.5HP)" },
      servis: { label: "Servis dari", price: "RM80", sub: "Chemical wash dari RM130" },
      "sewa-beli": { label: "Bulanan dari", price: "RM89/bln", sub: "24 bulan | Deposit RM200" },
    },
    models: "Viento 1.0HP, 1.5HP, 2.0HP, 2.5HP",
    image: "/images/products/viento.png",
    waMessage: {
      beli: "Hi, saya nak beli & pasang Acson Viento. Boleh bagi harga?",
      servis: "Hi, saya nak servis aircond Acson Viento. Boleh bagi harga?",
      "sewa-beli": "Hi, saya nak sewa beli Acson Viento. Boleh explain plan?",
    },
  },
  {
    name: "AVO (Non-Inverter)",
    slug: "avo-non-inverter",
    description: {
      beli: "Harga paling mampu milik Acson. Model AVO dengan Filtronz+ anti-virus dan Rapid Cool 35% lebih pantas. Sesuai untuk bilik jarang digunakan atau bajet terhad.",
      servis: "Servis untuk Acson AVO. Bersihkan habuk & kulat, top-up gas, pastikan aircond perform macam baru.",
      "sewa-beli": "Sewa beli Acson AVO dari RM79/bulan. Paling murah — brand Acson pada harga terendah.",
    },
    features: {
      beli: ["Harga Terendah Acson", "Filtronz+ Anti-Virus", "Rapid Cool 35% Lebih Pantas", "R32 Eco-Friendly"],
      servis: ["Chemical Wash", "Gas Top-Up R32", "Filter Cleaning", "General Check-Up"],
      "sewa-beli": ["Unit Baru 100%", "Pasang Percuma", "Warranty 1 Tahun", "Harga Paling Rendah"],
    },
    hpRange: "1.0HP - 2.5HP",
    pricing: {
      beli: { label: "Unit + Pasang", price: "RM1,240", sub: "1.0HP (A3WM25N) | Sehingga RM2,890 (2.5HP)" },
      servis: { label: "Servis dari", price: "RM80", sub: "Chemical wash dari RM130" },
      "sewa-beli": { label: "Bulanan dari", price: "RM79/bln", sub: "36 bulan | Deposit RM200" },
    },
    models: "A3WM25N (1.0HP), A3WM20N (2.0HP), A3WM30N (2.5HP)",
    image: "/images/products/avo-non-inverter.png",
    waMessage: {
      beli: "Hi, saya nak beli & pasang Acson AVO. Boleh bagi harga?",
      servis: "Hi, saya nak servis aircond Acson AVO. Boleh bagi harga?",
      "sewa-beli": "Hi, saya nak sewa beli Acson AVO. Boleh explain plan?",
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
    image: "/images/products/cassette-unit.jpg",
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
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { name: "Ahmad R.", role: "Pemilik Rumah, Puchong", quote: "WhatsApp tanya harga Acson Reino+ 1.5HP, petang dah confirm. Esok technician datang pasang. Memang laju. Aircond sejuk, harga pun berpatutan.", initials: "AR" },
  { name: "Faizal M.", role: "Landlord, Shah Alam", quote: "Saya sewa beli Acson Viento 2HP untuk rumah sewa — RM189 sebulan je. Tak payah keluar duit besar. Tenant happy, saya pun happy.", initials: "FM" },
  { name: "Siti A.", role: "Ibu Rumah, Ampang", quote: "Dulu pakai aircond lama, bil elektrik RM400 sebulan. Tukar Acson inverter Reino+, turun jadi RM240. Jimat gila. 5-star energy rating memang berkesan.", initials: "SA" },
  { name: "Jason T.", role: "Condo Owner, KLCC", quote: "Chemical wash servis memang bagus. Aircond dah 4 tahun tak servis — lepas chemical wash, sejuk macam baru. RM150 je.", initials: "JT" },
  { name: "Nurul H.", role: "Pemilik Apartment, Cyberjaya", quote: "Compare harga 5 kedai sebelum jumpa AirCond Malaysia. Harga paling transparent, takde hidden charges. Siap ada sewa beli. Acson Avory Premium cantik design dia.", initials: "NH" },
  { name: "Kevin L.", role: "Business Owner, PJ", quote: "Pasang 3 unit Acson Avory Premium untuk office baru. Design sleek dan 3D airflow memang best. Technician siap dalam satu hari.", initials: "KL" },
  { name: "Rizal K.", role: "Pemilik Rumah, Seremban", quote: "First time dengar boleh SEWA BELI aircond Acson. Ingat tipu. Tapi betul — RM99 sebulan, siap pasang semua. Lepas habis bayar, jadi milik saya.", initials: "RK" },
  { name: "Aminah Z.", role: "Office Manager, Putrajaya", quote: "Servis aircond office 8 unit Acson sekaligus. Harga bulk discount, siap dalam setengah hari. Professional gila team ni.", initials: "AZ" },
  { name: "Daniel W.", role: "Pemilik Rumah, Bangsar", quote: "Pasang Acson Avory Premium 2HP — design cantik, senyap gila. WiFi control memang convenient. Balik kerja ON aircond dari phone.", initials: "DW" },
  { name: "Hafiz S.", role: "Kontraktor, Klang", quote: "Dah refer 5 client ke AirCond Malaysia. Semua puas hati. Harga memang paling competitive untuk Acson. Tak pernah ada complaint.", initials: "HS" },
  { name: "Mei Ling C.", role: "Ibu Rumah, Subang Jaya", quote: "Chemical wash 3 unit sekaligus, RM350 semua. Lepas servis, bil elektrik turun RM80 sebulan. Memang berbaloi.", initials: "MC" },
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
    answer: "AVO non-inverter dari RM1,240 (1.0HP). Viento inverter dari RM1,360. Reino+ dari RM1,695. Avory Premium dari RM2,130. Harga termasuk bracket, piping (10ft), dan wiring. Kalau piping lebih panjang, kami bagitahu harga extra sebelum start kerja — takde surprise charges.",
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
