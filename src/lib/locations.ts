// ============================================================
// ACSON AIRCOND MALAYSIA — Location Data
// ============================================================

export interface Location {
  slug: string;
  name: string;
  capital: string;
  areas: string[];
  description: string;
  image: string;
}

export const LOCATIONS: Location[] = [
  {
    slug: "kuala-lumpur",
    name: "Kuala Lumpur",
    capital: "Kuala Lumpur",
    areas: [
      "KLCC", "Bangsar", "Mont Kiara", "Cheras", "Kepong",
      "Setapak", "Wangsa Maju", "Sentul", "Bukit Jalil",
      "Sri Petaling", "OUG", "Taman Desa", "Titiwangsa",
      "Segambut", "Pantai Dalam", "Dang Wangi",
    ],
    description: "Kami cover seluruh Kuala Lumpur untuk pemasangan, servis, dan sewa beli aircond Acson. Dari kondominium mewah di KLCC hingga rumah teres di Cheras — technician kami boleh sampai dalam masa 1-2 hari bekerja. KL adalah kawasan utama kami dengan ratusan pemasangan siap setiap bulan.",
    image: "/images/locations/kuala-lumpur.jpg",
  },
  {
    slug: "selangor",
    name: "Selangor",
    capital: "Shah Alam",
    areas: [
      "Shah Alam", "Petaling Jaya", "Subang Jaya", "Puchong",
      "Klang", "Cyberjaya", "Putrajaya", "Ampang", "Rawang",
      "Seri Kembangan", "Bangi", "Kajang", "Semenyih",
      "Setia Alam", "Kota Damansara", "Damansara",
    ],
    description: "Selangor adalah kawasan coverage terbesar kami. Dari Shah Alam ke Petaling Jaya, Subang ke Klang, Cyberjaya ke Ampang — kami ada technician tersebar di seluruh Selangor. Response time biasanya 1-2 hari bekerja. Kami juga cover Putrajaya yang terletak dalam Selangor.",
    image: "/images/locations/selangor.jpg",
  },
  {
    slug: "johor",
    name: "Johor",
    capital: "Johor Bahru",
    areas: [
      "Johor Bahru", "Iskandar Puteri", "Kulai", "Pontian",
      "Skudai", "Pasir Gudang", "Masai", "Gelang Patah",
      "Senai", "Kota Tinggi", "Batu Pahat", "Muar",
      "Kluang", "Segamat", "Mersing",
    ],
    description: "Kawasan Johor diliputi oleh team technician kami yang berpangkalan di Johor Bahru. Kami cover seluruh JB, Iskandar Puteri, Kulai, dan kawasan sekitar. Untuk kawasan luar JB seperti Batu Pahat dan Muar, kami boleh arrange technician dalam masa 2-3 hari bekerja.",
    image: "/images/locations/johor.jpg",
  },
  {
    slug: "penang",
    name: "Penang (Pulau Pinang)",
    capital: "George Town",
    areas: [
      "George Town", "Butterworth", "Seberang Perai",
      "Bayan Lepas", "Jelutong", "Tanjung Bungah",
      "Gurney", "Air Itam", "Gelugor", "Balik Pulau",
      "Bukit Mertajam", "Nibong Tebal", "Simpang Ampat",
    ],
    description: "Penang coverage kami meliputi kedua-dua pulau dan Seberang Perai. Dari George Town hingga Butterworth, Bayan Lepas hingga Bukit Mertajam — kami sedia melayan pemasangan dan servis aircond Acson. Cuaca Penang yang panas sepanjang tahun menjadikan aircond inverter Acson pilihan popular.",
    image: "/images/locations/penang.jpg",
  },
  {
    slug: "perak",
    name: "Perak",
    capital: "Ipoh",
    areas: [
      "Ipoh", "Taiping", "Sitiawan", "Lumut",
      "Teluk Intan", "Kampar", "Batu Gajah",
      "Seri Iskandar", "Tanjung Malim", "Gopeng",
      "Kuala Kangsar", "Manjung",
    ],
    description: "Kami cover kawasan Perak terutamanya Ipoh dan sekitar. Technician kami di Perak boleh sampai dalam masa 1-3 hari bekerja. Untuk kawasan Taiping, Lumut, dan Teluk Intan, kami juga sedia melayan dengan tempahan awal.",
    image: "/images/locations/perak.jpg",
  },
  {
    slug: "negeri-sembilan",
    name: "Negeri Sembilan",
    capital: "Seremban",
    areas: [
      "Seremban", "Nilai", "Port Dickson", "Senawang",
      "Rembau", "Jelebu", "Kuala Pilah", "Tampin",
      "Mantin", "Rantau", "Labu",
    ],
    description: "Negeri Sembilan diliputi oleh team kami dari Seremban. Jarak dekat dari KL menjadikan response time kami sangat pantas — biasanya 1-2 hari bekerja. Kami cover Seremban, Nilai, Port Dickson, dan semua kawasan dalam negeri ini.",
    image: "/images/locations/negeri-sembilan.jpg",
  },
  {
    slug: "melaka",
    name: "Melaka",
    capital: "Melaka",
    areas: [
      "Melaka Tengah", "Ayer Keroh", "Alor Gajah",
      "Jasin", "Klebang", "Bukit Beruang",
      "Bachang", "Cheng", "Batu Berendam",
      "Durian Tunggal", "Masjid Tanah",
    ],
    description: "Coverage Melaka kami meliputi seluruh negeri — dari Melaka Tengah ke Alor Gajah dan Jasin. Sebagai negeri kecil, response time kami sangat cepat. Cuaca panas Melaka menjadikan aircond Acson inverter pelaburan yang bijak untuk jimat bil elektrik.",
    image: "/images/locations/melaka.jpg",
  },
  {
    slug: "pahang",
    name: "Pahang",
    capital: "Kuantan",
    areas: [
      "Kuantan", "Temerloh", "Bentong", "Raub",
      "Pekan", "Rompin", "Jerantut", "Maran",
      "Bera", "Cameron Highlands", "Genting Highlands",
    ],
    description: "Kami cover kawasan Pahang dengan fokus utama di Kuantan, Temerloh, dan Bentong. Untuk kawasan tanah tinggi seperti Cameron Highlands dan Genting, aircond mungkin kurang diperlukan — tapi untuk kawasan pantai dan dataran rendah, kami sedia melayan.",
    image: "/images/locations/pahang.jpg",
  },
  {
    slug: "kelantan",
    name: "Kelantan",
    capital: "Kota Bharu",
    areas: [
      "Kota Bharu", "Pasir Mas", "Tumpat", "Bachok",
      "Pasir Puteh", "Machang", "Tanah Merah",
      "Kuala Krai", "Gua Musang", "Jeli",
    ],
    description: "Kelantan coverage kami berpusat di Kota Bharu dan kawasan sekitar. Dengan cuaca panas dan lembap Kelantan, aircond Acson inverter membantu jimat bil elektrik sambil kekalkan keselesaan. WhatsApp kami untuk confirm coverage di kawasan anda.",
    image: "/images/locations/kelantan.jpg",
  },
  {
    slug: "terengganu",
    name: "Terengganu",
    capital: "Kuala Terengganu",
    areas: [
      "Kuala Terengganu", "Kemaman", "Dungun",
      "Marang", "Setiu", "Besut", "Hulu Terengganu",
      "Chukai", "Kerteh", "Paka",
    ],
    description: "Kami melayan kawasan Terengganu terutamanya Kuala Terengganu, Kemaman, dan Dungun. Kawasan perindustrian Kerteh dan Paka juga dalam liputan kami. WhatsApp kami untuk scheduling dan confirm availability di kawasan anda.",
    image: "/images/locations/terengganu.jpg",
  },
  {
    slug: "kedah",
    name: "Kedah",
    capital: "Alor Setar",
    areas: [
      "Alor Setar", "Sungai Petani", "Kulim",
      "Langkawi", "Jitra", "Changlun",
      "Pendang", "Baling", "Yan", "Pokok Sena",
    ],
    description: "Coverage Kedah kami meliputi Alor Setar, Sungai Petani, Kulim, dan kawasan sekitar. Kami juga melayan Langkawi untuk pemasangan aircond di hotel, resort, dan rumah kediaman. Cuaca utara Malaysia yang panas menjadikan aircond Acson inverter pilihan bijak.",
    image: "/images/locations/kedah.jpg",
  },
  {
    slug: "sabah",
    name: "Sabah",
    capital: "Kota Kinabalu",
    areas: [
      "Kota Kinabalu", "Sandakan", "Tawau",
      "Lahad Datu", "Keningau", "Semporna",
      "Beaufort", "Papar", "Ranau", "Penampang",
    ],
    description: "Sabah coverage kami berpusat di Kota Kinabalu dengan liputan ke Sandakan dan Tawau. Untuk pemasangan di Sabah, kami recommend WhatsApp terlebih dahulu untuk confirm availability dan scheduling kerana logistik East Malaysia berbeza sedikit.",
    image: "/images/locations/sabah.jpg",
  },
  {
    slug: "sarawak",
    name: "Sarawak",
    capital: "Kuching",
    areas: [
      "Kuching", "Miri", "Sibu", "Bintulu",
      "Limbang", "Sarikei", "Sri Aman",
      "Kapit", "Mukah", "Serian",
    ],
    description: "Kami cover kawasan utama Sarawak termasuk Kuching, Miri, Sibu, dan Bintulu. Untuk pemasangan di Sarawak, sila WhatsApp kami untuk confirm coverage dan scheduling. Kami pastikan servis yang sama berkualiti seperti di Semenanjung Malaysia.",
    image: "/images/locations/sarawak.jpg",
  },
];
