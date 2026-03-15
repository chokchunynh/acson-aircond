import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Tips Aircond Acson Malaysia | Harga, Servis & Panduan",
  description:
    "Baca artikel terkini tentang aircond Acson — harga 2026, panduan servis, chemical wash, sewa beli, perbandingan model, dan tips penjimatan elektrik.",
  openGraph: {
    title: "Blog — Tips Aircond Acson Malaysia",
    description:
      "Artikel terkini tentang aircond Acson — harga, servis, chemical wash, sewa beli, dan tips penjimatan.",
    type: "website",
    locale: "ms_MY",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-16">
        {/* Header */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Blog &amp; Panduan Aircond
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Artikel terkini tentang aircond Acson — harga, servis, perbandingan
            model, panduan saiz, dan tips penjimatan elektrik.
          </p>
        </section>

        {/* Blog Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("ms-MY", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[var(--color-brand)] transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-sm text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <span className="inline-block mt-4 text-sm font-semibold text-[var(--color-brand)] group-hover:underline">
                    Baca selanjutnya &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
      <FloatingWhatsApp />
    </>
  );
}
