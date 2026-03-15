"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b-[3px] border-[var(--color-brand)]"
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="shrink-0">
              <Image
                src="/images/brand/acson-logo-red.webp"
                alt="Acson International"
                width={256}
                height={82}
                className={`h-10 md:h-12 w-auto ${scrolled ? "" : "brightness-0 invert"}`}
                priority
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                link.href.startsWith("/") ? (
                  <Link key={link.href} href={link.href}
                    className={`text-sm font-medium link-hover transition-colors ${scrolled ? "text-[var(--color-text-body)]" : "text-white/90 hover:text-white"}`}>
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.href} href={link.href}
                    className={`text-sm font-medium link-hover transition-colors ${scrolled ? "text-[var(--color-text-body)]" : "text-white/90 hover:text-white"}`}>
                    {link.label}
                  </a>
                )
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-2.5 px-5 text-sm">
                WhatsApp
              </a>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5" aria-label="Toggle menu">
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-[var(--color-text-dark)]" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-[var(--color-text-dark)]" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-[var(--color-text-dark)]" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Off-canvas mobile menu — slides from right */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
        <div className={`absolute top-0 right-0 w-72 h-full bg-white shadow-2xl transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-6 pt-20 space-y-4">
            {NAV_LINKS.map((link) => (
              link.href.startsWith("/") ? (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                  className="block text-[var(--color-text-body)] hover:text-[var(--color-brand)] py-3 text-lg font-medium border-b border-[var(--color-border)]">
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                  className="block text-[var(--color-text-body)] hover:text-[var(--color-brand)] py-3 text-lg font-medium border-b border-[var(--color-border)]">
                  {link.label}
                </a>
              )
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full mt-4 text-center">
              WhatsApp Kami
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
