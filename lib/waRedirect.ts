/**
 * Every WhatsApp CTA on the site points here, never at a raw wa.me URL — the
 * redirect page is what resolves the right number out of Supabase (leads_mode,
 * per-location, per-page routing).
 */
export function waRedirect(
  locale: string,
  message?: string,
  locationSlug?: string,
  pageSlug?: string,
): string {
  const params = new URLSearchParams();
  if (message) params.set('message', message);
  if (locationSlug) params.set('loc', locationSlug);
  if (pageSlug) params.set('page', pageSlug);
  const qs = params.toString();
  return `/${locale}/redirect-whatsapp-1${qs ? `?${qs}` : ''}`;
}
