import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { WHATSAPP_NUMBER } from "@/lib/constants";

// Static params for all blog posts
export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

// Dynamic metadata per article
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    return { title: "Artikel Tidak Dijumpai" };
  }
  return {
    title: `${post.title} | Acson AirCond Malaysia`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "ms_MY",
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
              Artikel Tidak Dijumpai
            </h1>
            <Link href="/blog" className="text-[var(--color-brand)] hover:underline">
              &larr; Kembali ke Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Get 3 related articles (exclude current)
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[var(--color-brand)]">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[var(--color-brand)]">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-700 truncate max-w-[200px]">
              {post.title}
            </span>
          </nav>
        </div>

        {/* Hero Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("ms-MY", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{post.readTime} bacaan</span>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-12">
          <div className="bg-[var(--color-gray-50)] rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3">
              Ada Soalan? WhatsApp Kami Terus.
            </h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Kami reply dalam masa 1 jam waktu bekerja. Tak payah call, tak
              payah isi borang. WhatsApp je.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, saya baca artikel blog dan ada soalan tentang aircond Acson.")}`}
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
        </div>

        {/* Related Articles */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-16">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
            Artikel Berkaitan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[var(--color-brand)] transition-colors line-clamp-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {r.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
      <FloatingWhatsApp />

      {/* Article content styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .article-content h2 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #CC1B2B;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .article-content h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1f2937;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }
        .article-content p {
          color: #374151;
          line-height: 1.8;
          margin-bottom: 1rem;
          font-size: 1.05rem;
        }
        .article-content a {
          color: #2563eb;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .article-content a:hover {
          color: #1d4ed8;
        }
        .article-content ul,
        .article-content ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }
        .article-content ul {
          list-style: disc;
        }
        .article-content ol {
          list-style: decimal;
        }
        .article-content li {
          color: #374151;
          line-height: 1.8;
          margin-bottom: 0.35rem;
          font-size: 1.05rem;
        }
        .article-content strong {
          font-weight: 700;
          color: #111827;
        }
        .article-content em {
          color: #6b7280;
          font-style: italic;
        }
        .article-content table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          overflow-x: auto;
          display: block;
        }
        @media (min-width: 640px) {
          .article-content table {
            display: table;
          }
        }
        .article-content thead {
          background-color: #CC1B2B;
          color: white;
        }
        .article-content th {
          padding: 10px 14px;
          text-align: left;
          font-weight: 600;
          white-space: nowrap;
        }
        .article-content td {
          padding: 10px 14px;
          border-bottom: 1px solid #e5e7eb;
          white-space: nowrap;
        }
        .article-content tbody tr:nth-child(even) {
          background-color: #f9fafb;
        }
        .article-content tbody tr:hover {
          background-color: #eff6ff;
        }
        @media (max-width: 639px) {
          .article-content h2 { font-size: 1.3rem; }
          .article-content h3 { font-size: 1.1rem; }
          .article-content p,
          .article-content li { font-size: 1rem; }
        }
      `,
        }}
      />
    </>
  );
}
