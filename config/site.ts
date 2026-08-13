export const siteConfig = {
  brandName: 'Acson AirCond Malaysia',
  legalName: 'Utopia Group of Companies',
  tagline: 'Pasang, Servis & Sewa Beli Aircond Acson Malaysia',
  domain: 'acsonaircond.my',
  url: 'https://acsonaircond.my',
  // Pinned company_websites.id — a domain rename can never disconnect this site.
  siteId: 'ec83858d-89b6-495c-abe6-9b2de8e929e3',
  productSlug: 'aircond-acson',
  productName: 'Aircond Acson',
  // This client's own WhatsApp number.
  fallbackPhone: '60189294628',
  defaultLocale: 'ms' as const,
  locales: ['ms', 'en', 'zh'] as const,
  whatsappMessages: {
    ms: 'Saya berminat nak pasang / servis / sewa beli aircond Acson. Boleh bagi harga?',
    en: 'I am interested in Acson air-conditioner installation / service / rent-to-own. Can you send me a quote?',
    zh: '我想咨询 Acson 冷气机的安装／保养／分期租购。可以给我报价吗？',
  },
  colors: {
    brand: '#CC1B2B',
    brandLight: '#E63946',
    brandDark: '#A31623',
    textDark: '#1A1118',
    textBody: '#4A3F47',
    textMuted: '#8C7E86',
    border: '#E8DDD8',
    emerald: '#10B981',
    amber: '#F59E0B',
    waGreen: '#25D366',
    waGreenHover: '#1EBE57',
  },
} as const;

export type SiteConfig = typeof siteConfig;
export type Locale = (typeof siteConfig.locales)[number];
