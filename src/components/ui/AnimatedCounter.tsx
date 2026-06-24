"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: string;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ target, suffix = "", duration = 2000 }: AnimatedCounterProps) {
  // Show target value by default (SSR + initial render) — never show "0"
  const [display, setDisplay] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reset to "0" on client mount so animation can play from 0 → target
    const cleanedTarget = target.replace(/,/g, "").replace(/[^0-9.]/g, "");
    const numericTarget = parseFloat(cleanedTarget);
    const prefix = target.match(/^[^0-9]*/)?.[0] || "";

    if (isNaN(numericTarget)) return;

    // Show "0" briefly on client before animation starts
    setDisplay(prefix + "0");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = numericTarget % 1 !== 0
              ? (eased * numericTarget).toFixed(1)
              : Math.floor(eased * numericTarget).toString();

            const formatted = numericTarget >= 1000
              ? Math.floor(eased * numericTarget).toLocaleString()
              : current;

            setDisplay(prefix + formatted);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplay(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    // Fallback: if observer never fires within 3s, show the real value
    const fallback = setTimeout(() => {
      if (!hasAnimated.current) {
        hasAnimated.current = true;
        setDisplay(target);
      }
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [target, duration]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}
