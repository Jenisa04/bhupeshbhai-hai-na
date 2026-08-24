"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * One rAF-throttled scroll pass shared by every Reveal on the page.
 *
 * IntersectionObserver was the obvious choice here, but it coalesces
 * notifications per frame and reliably dropped elements that were scrolled
 * through quickly - leaving whole sections stuck at opacity 0. A single rect
 * check per frame is both cheaper than 60 observers and deterministic, and the
 * set drains as elements reveal.
 */
const pending = new Set<() => void>();
let queued = false;

function flush() {
  queued = false;
  for (const check of pending) check();
}

function schedule() {
  if (queued) return;
  queued = true;
  requestAnimationFrame(flush);
}

function watch(check: () => void) {
  if (pending.size === 0) {
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
  }
  pending.add(check);
}

function unwatch(check: () => void) {
  pending.delete(check);
  if (pending.size === 0) {
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
  }
}

type Props = {
  children: ReactNode;
  /** Stagger, in seconds, applied once the element enters the viewport. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Fades and lifts its children in as they come into view. The markup itself is
 * server-rendered; the effect is disabled under prefers-reduced-motion by the
 * .reveal rule in globals.css.
 */
export default function Reveal({ children, delay = 0, className = "", as }: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      const rect = el.getBoundingClientRect();
      const h = window.innerHeight || document.documentElement.clientHeight;
      // Trigger once any part of the element has risen above 92% of the fold,
      // and keep anything already scrolled past permanently shown.
      if (rect.top < h * 0.92 && rect.bottom > 0) {
        setVisible(true);
        unwatch(check);
      } else if (rect.bottom <= 0) {
        setVisible(true);
        unwatch(check);
      }
    };

    watch(check);
    check();

    return () => unwatch(check);
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
