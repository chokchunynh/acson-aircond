"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Plus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="left">
          <div className="mb-14">
            <div className="section-label mb-3">Soalan Lazim</div>
            <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text-dark)]">
              Soalan Yang Selalu <span className="accent-text">Ditanya</span>
            </h2>
          </div>
        </ScrollReveal>

        <div>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className={`border-b border-[var(--color-border)] ${isOpen ? "faq-open" : ""}`}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="font-semibold text-[var(--color-text-dark)] text-base pr-4">
                      {item.question}
                    </span>
                    <Plus className={`faq-toggle w-5 h-5 text-[var(--color-brand)] shrink-0`} />
                  </button>
                  <div className="faq-answer">
                    <div className="pl-6 pb-5 text-[var(--color-text-body)] text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
