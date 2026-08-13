import { siteConfig } from '@/config/site';

export function ProductSchema({
  name,
  slug,
  description,
  salePrice,
  rentalPrice,
  image,
  areaServed,
}: {
  name: string;
  slug: string;
  description: string | null;
  salePrice?: number | null;
  rentalPrice?: number | null;
  image: string | null;
  areaServed?: string;
}) {
  const price = salePrice ?? rentalPrice ?? undefined;
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    sku: slug,
    description: description ?? `${name} — pemasangan, servis dan sewa beli di Malaysia.`,
    brand: { '@type': 'Brand', name: 'Acson' },
    manufacturer: { '@type': 'Organization', name: 'Acson International (Daikin Group)' },
    image: image ?? `${siteConfig.url}/og-${siteConfig.defaultLocale}.png`,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'MYR',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: siteConfig.brandName },
    },
  };
  if (areaServed) data.areaServed = { '@type': 'City', name: areaServed };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
