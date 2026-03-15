"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: string;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ target, suffix = "", duration = 2000 }: AnimatedCounterProps) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericTarget = parseFloat(target.replace(/,/g, ""));
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * numericTarget);

            if (numericTarget >= 1000) {
              setDisplay(current.toLocaleString());
            } else {
              setDisplay(current.toString());
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplay(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}
