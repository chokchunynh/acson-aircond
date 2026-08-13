import { headers } from 'next/headers';
import { getPhoneNumber, waLink } from '@/lib/webcore';
import RedirectClient from './RedirectClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Pin to Singapore so the function sits near Supabase's Cloudflare-KUL edge.
// The default US-East region adds ~250ms each way and pushed the cold start
// past the monitor's 7s liveness probe.
export const preferredRegion = 'sin1';

export const metadata = {
  robots: { index: false, follow: false },
};

const LOCALE_PREFIXES = new Set(['ms', 'en', 'zh']);

/**
 * Which page produced this click, for per-page phone routing. Priority:
 *   1. an explicit ?page= on the redirect link, then
 *   2. the first meaningful segment of the Referer path, locale stripped
 *      (`/en/aircond-acson/cheras` → `aircond-acson`).
 * Undefined when neither is available — e.g. the monitor's liveness probe hits
 * the bare URL — so resolution falls back cleanly to the site-wide default.
 */
async function resolvePageSlug(explicit?: string): Promise<string | undefined> {
  if (explicit?.trim()) return explicit.trim();
  try {
    const ref = (await headers()).get('referer');
    if (!ref) return undefined;
    const segments = new URL(ref).pathname.split('/').filter(Boolean);
    if (segments.length && LOCALE_PREFIXES.has(segments[0])) segments.shift();
    return segments[0] || undefined;
  } catch {
    return undefined;
  }
}

export default async function RedirectWhatsapp1({
  searchParams,
}: {
  searchParams: Promise<{ loc?: string; message?: string; page?: string }>;
}) {
  const { loc, message, page } = await searchParams;
  const pageSlug = await resolvePageSlug(page);
  // Resolved on the server and rendered into the HTML as a real wa.me link:
  // handing off to the webcore endpoint from the client fails the live-DB check
  // and leaves the page dead with JavaScript disabled.
  const { phone, whatsappText } = await getPhoneNumber(loc || undefined, pageSlug);
  const url = waLink(phone, message || whatsappText);
  return <RedirectClient url={url} />;
}
