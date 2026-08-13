import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

// All four webcore tags must be here. A tag missing from this set is accepted
// with a 200 and silently dropped, so the cache quietly goes stale.
const ALLOWED_TAGS = new Set([
  'webcore-products',
  'webcore-phones',
  'webcore-blog',
  'webcore-seo',
]);

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-webcore-secret');
  const expected = process.env.WEBCORE_REVALIDATE_SECRET;

  if (!expected) {
    return NextResponse.json(
      { error: 'WEBCORE_REVALIDATE_SECRET is not configured' },
      { status: 500 },
    );
  }
  if (!secret || secret !== expected) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  let body: { tags?: string[] } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 });
  }

  const tags = Array.isArray(body.tags) ? body.tags : [];
  const revalidated: string[] = [];
  const rejected: string[] = [];
  for (const tag of tags) {
    if (ALLOWED_TAGS.has(tag)) {
      revalidateTag(tag);
      revalidated.push(tag);
    } else {
      rejected.push(tag);
    }
  }

  // Report unknown tags rather than swallowing them — a silent drop is how a
  // purge looks successful while the cache stays stale.
  return NextResponse.json({ revalidated, rejected });
}
