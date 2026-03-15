"use client";

import { useState, useEffect, useCallback } from "react";

interface RotatingItem {
  text: string;
  color: string;
  iconPath: string;
}

interface RotatingTextProps {
  items: RotatingItem[];
  interval?: number;
}

export default function RotatingText({ items, interval = 3500 }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"active" | "exit" | "enter">("active");

  const rotate = useCallback(() => {
    setPhase("exit");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
      setPhase("enter");
      setTimeout(() => setPhase("active"), 50);
    }, 400);
  }, [items.length]);

  useEffect(() => {
    const timer = setInterval(rotate, interval);
    return () => clearInterval(timer);
  }, [rotate, interval]);

  const current = items[currentIndex];

  return (
    <span className="relative inline-flex items-center">
      <span
        className={`inline-block rotating-text-${phase}`}
        style={{ color: current.color }}
      >
        {current.text}
      </span>
      <svg
        className={`ml-2 w-6 h-6 md:w-8 md:h-8 rotating-text-${phase} shrink-0`}
        style={{ color: current.color }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={current.iconPath} />
      </svg>
    </span>
  );
}
