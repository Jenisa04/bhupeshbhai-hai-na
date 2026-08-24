/**
 * The Devanagari pull quote that closes the left column of Bhai Dil Se and
 * Arogya Doot: an opening gold mark with a rule running off it, the couplet in
 * navy, then a closing mark dropped to the right.
 */
export default function Quote({
  lines,
  className = "",
}: {
  lines: readonly string[];
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="flex items-center gap-4">
        <span
          className="font-display leading-none text-gold"
          style={{ fontSize: "clamp(2.25rem, 3vw, 3rem)" }}
          aria-hidden
        >
          &ldquo;
        </span>
        <span className="h-px w-full max-w-[15rem] flex-1 bg-gold-soft/70" aria-hidden />
      </div>

      <blockquote className="t-quote mt-1 text-navy">
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </blockquote>

      <span
        className="mt-1 block pl-[13rem] font-display leading-none text-gold"
        style={{ fontSize: "clamp(2.25rem, 3vw, 3rem)" }}
        aria-hidden
      >
        &rdquo;
      </span>
    </figure>
  );
}
