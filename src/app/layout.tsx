import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pasang & Servis Aircond Acson Malaysia | Sewa Dari RM99/bulan",
  description: "Pakar pasang aircond Acson — harga termasuk pemasangan. Servis chemical wash dari RM130. Sewa aircond Acson dari RM99/bulan. WhatsApp sekarang!",
  openGraph: {
    type: "website",
    url: "https://acson-aircond.vercel.app",
    title: "Pasang & Servis Aircond Acson Malaysia | Sewa Dari RM99/bulan",
    description: "Authorised installer Acson. Pasang, servis & sewa aircond Acson di KL, Selangor & seluruh Malaysia. WhatsApp untuk harga!",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "ms_MY",
    siteName: "Acson AirCond Malaysia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pasang & Servis Aircond Acson Malaysia | Sewa Dari RM99/bulan",
    description: "Authorised installer Acson. Pasang, servis & sewa aircond Acson di KL, Selangor & seluruh Malaysia.",
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className="scroll-smooth">
      <body className={`${plusJakarta.variable} ${dmSerif.variable} font-[family-name:var(--font-body)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
