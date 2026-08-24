import { nav } from "@/lib/content";

/**
 * "Bhupeshbhai" over a tracked-out gold "HAI NA" and a short gold rule.
 * `tone` flips it for the one comp where it sits on a dark photograph.
 */
export default function Wordmark({ tone = "navy" }: { tone?: "navy" | "light" }) {
  const top = tone === "light" ? "text-cream" : "text-navy";

  return (
    <a href="#top" className="group inline-block shrink-0" aria-label="Bhupeshbhai Hai Na — back to top">
      <span
        className={`block font-display font-semibold leading-none tracking-[-0.01em] ${top}`}
        style={{ fontSize: "clamp(1.5rem, 2.75vw, 2.5rem)" }}
      >
        {nav.wordmark}
      </span>
      <span
        className="mt-1.5 block font-sans font-medium uppercase leading-none text-gold"
        style={{ fontSize: "clamp(0.625rem, 1.05vw, 0.9375rem)", letterSpacing: "0.34em" }}
      >
        {nav.wordmarkSub}
      </span>
      <span className="mt-2 block h-px w-9 bg-gold-soft transition-all duration-500 ease-soft group-hover:w-14" />
    </a>
  );
}
