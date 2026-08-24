import { Pin } from "@/components/icons";

/**
 * The Shirpur → Mumbai inset in the top right of Arogya Doot: two gold pins
 * joined by a dashed route.
 *
 * The comp also carries a faint Maharashtra silhouette behind the pins. That
 * outline is not in the supplied assets, so it is left out rather than
 * approximated — drop a traced SVG path in as `<path d=… />` below to restore it.
 */
export default function RouteMap({
  from,
  to,
  className = "",
}: {
  from: string;
  to: string;
  className?: string;
}) {
  return (
    <div className={className} aria-label={`Route from ${from} to ${to}`} role="img">
      {/* Shirpur sits above and to the right, Mumbai below and to the left,
          matching the way the comp lays the two pins out. */}
      <div className="ml-6 flex items-start gap-2">
        <Pin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
        <span className="font-sans text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-cream">
          {from}
        </span>
      </div>

      <svg
        viewBox="0 0 60 88"
        className="ml-2 h-[5.5rem] w-[3.75rem] text-cream/70"
        fill="none"
        aria-hidden
      >
        <path
          d="M46 2C40 20 44 34 30 46 18 56 14 70 12 86"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="3 6"
        />
      </svg>

      <div className="flex items-start gap-2">
        <Pin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
        <span className="font-sans text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-cream">
          {to}
        </span>
      </div>
    </div>
  );
}
