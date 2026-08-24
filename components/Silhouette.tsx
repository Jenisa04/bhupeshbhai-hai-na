/**
 * The faint watermark that sits in the bottom-left corner of Sanskaar & Samaj
 * and Apne Log. The comps carry a photographic silhouette here that is not in
 * the supplied assets, so this is drawn as line art at the same weight and
 * opacity — swap in the real artwork when it arrives.
 */

export function PeopleSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 150"
      className={className}
      fill="currentColor"
      aria-hidden
      preserveAspectRatio="xMinYMax meet"
    >
      {/* ground */}
      <path d="M0 148h420v2H0z" opacity=".5" />
      {/* trees */}
      <path d="M56 148V96c-14-2-24-14-24-28 0-16 13-29 29-29s29 13 29 29c0 14-10 26-24 28v52Z" />
      <path d="M372 148v-40c-10-2-18-11-18-21 0-12 10-22 22-22s22 10 22 22c0 10-8 19-18 21v40Z" />
      {/* a row of figures, hand in hand */}
      {[
        { x: 120, h: 60 },
        { x: 152, h: 74 },
        { x: 186, h: 48 },
        { x: 216, h: 72 },
        { x: 250, h: 56 },
        { x: 280, h: 76 },
        { x: 316, h: 52 },
      ].map(({ x, h }) => (
        <g key={x}>
          <circle cx={x} cy={148 - h - 9} r="9" />
          <path
            d={`M${x - 12} 148v-${h - 22}a12 12 0 0 1 24 0V148h-6v-${(h - 22) / 2}h-12v${
              (h - 22) / 2
            }Z`}
          />
          <path d={`M${x - 12} ${148 - h + 26}l-14 10M${x + 12} ${148 - h + 26}l14 10`} stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

export function VillageSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 460 150"
      className={className}
      fill="currentColor"
      aria-hidden
      preserveAspectRatio="xMinYMax meet"
    >
      <path d="M0 148h460v2H0z" opacity=".5" />
      {/* two huts on the left */}
      <path d="M14 148v-34l32-24 32 24v34Z" />
      <path d="M6 116 46 86l40 30-4 5-36-27-36 27Z" />
      <path d="M92 148v-24l22-17 22 17v24Z" />
      {/* trees */}
      <path d="M168 148v-44c-12-2-21-12-21-24 0-14 11-25 25-25s25 11 25 25c0 12-9 22-21 24v44Z" />
      <path d="M430 148v-34c-9-2-16-10-16-19 0-11 9-20 20-20s20 9 20 20c0 9-7 17-16 19v34Z" />
      {/* a family walking */}
      {[
        { x: 244, h: 70 },
        { x: 274, h: 46 },
        { x: 300, h: 38 },
        { x: 330, h: 72 },
        { x: 364, h: 54 },
        { x: 394, h: 66 },
      ].map(({ x, h }) => (
        <g key={x}>
          <circle cx={x} cy={148 - h - 8} r="8" />
          <path
            d={`M${x - 11} 148v-${h - 20}a11 11 0 0 1 22 0V148h-5.5v-${(h - 20) / 2}h-11v${
              (h - 20) / 2
            }Z`}
          />
        </g>
      ))}
    </svg>
  );
}
