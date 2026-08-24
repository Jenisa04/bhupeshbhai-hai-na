import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ArrowRight, Book, Boot, HandsStar } from "@/components/icons";
import { khelShiksha as c } from "@/lib/content";

const panelIcons = { khel: Boot, shiksha: Book } as const;

export default function KhelShiksha() {
  return (
    <section id={c.id} className="relative overflow-hidden bg-cream-light">
      <div className="mx-auto grid w-full max-w-[1920px] lg:min-h-[100svh] lg:grid-cols-[36fr_64fr]">
        {/* ── Copy ──────────────────────────────────────────────────── */}
        <div className="relative z-10 order-2 flex min-w-0 flex-col justify-center py-14 pl-6 pr-6 sm:pl-8 lg:order-1 lg:py-24 lg:pl-12 lg:pr-14 xl:pl-16">
          <Reveal>
            <p className="t-eyebrow">{c.eyebrow}</p>
            <span className="rule-gold mt-3" aria-hidden />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="t-section h-bleed mt-8">
              <span className="block text-navy">{c.headlineNavy}</span>
              <span className="block text-gold">{c.headlineGold}</span>
            </h2>
            <span className="rule-gold mt-6" aria-hidden />
          </Reveal>

          <Reveal delay={0.16} className="mt-8 space-y-6 text-ink">
            {c.body.map((p) => (
              <p key={p} className="t-body">
                {p}
              </p>
            ))}
            <p className="t-body">
              {c.bodyRich.before}
              <strong className="font-semibold text-gold">{c.bodyRich.strong}</strong>
              {c.bodyRich.after}
            </p>
          </Reveal>
        </div>

        {/* ── Photography ──────────────────────────────────────────────
             The comp is a collage, not a stack: the pool sits above the Khel
             panel in a left column, and the Shiksha panel runs the full height
             of the section beside them. */}
        <div className="order-1 grid grid-cols-2 gap-px lg:order-2 lg:grid-rows-[42fr_58fr]">
          <Reveal className="relative col-span-2 aspect-[16/7] lg:col-span-1 lg:row-span-1 lg:aspect-auto">
            <Image
              src={c.pool.src}
              alt={c.pool.alt}
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover object-center lg:fade-left-soft"
            />
          </Reveal>

          {c.panels.map((panel, i) => {
            const PanelIcon = panelIcons[panel.key as keyof typeof panelIcons];
            return (
              <Reveal
                key={panel.key}
                delay={0.1 + i * 0.1}
                className={`group relative aspect-[3/4] overflow-hidden sm:aspect-[4/5] lg:aspect-auto lg:min-h-0 ${
                  /* Khel sits under the pool; Shiksha spans both rows beside them. */
                  i === 0 ? "lg:col-start-1 lg:row-start-2" : "lg:col-start-2 lg:row-span-2 lg:row-start-1"
                }`}
              >
                <Image
                  src={panel.src}
                  alt={panel.alt}
                  fill
                  sizes="(min-width: 1024px) 32vw, 50vw"
                  className={`object-cover transition-transform duration-[900ms] ease-soft group-hover:scale-[1.03] ${
                    i === 0 ? "object-[60%_center] lg:fade-left-soft" : "object-center"
                  }`}
                />
                {/* Legibility ramp for the label block */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(6,20,36,0.78) 0%, rgba(6,20,36,0.34) 26%, rgba(6,20,36,0) 52%)",
                  }}
                  aria-hidden
                />

                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                  <span className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-navy-deep text-gold lg:h-16 lg:w-16">
                    <PanelIcon className="h-7 w-7 lg:h-8 lg:w-8" />
                  </span>
                  <p
                    className="font-sans font-medium uppercase leading-none text-cream"
                    style={{ fontSize: "clamp(1.125rem, 1.7vw, 1.625rem)", letterSpacing: "0.03em" }}
                  >
                    {panel.title}
                  </p>
                  <p className="t-body mt-3 text-cream/95">
                    {panel.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </p>
                  <span className="mt-5 block h-px w-12 bg-gold" aria-hidden />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* ── Closing banner ──────────────────────────────────────────── */}
      <Reveal className="border-t border-gold-pale/70 bg-cream">
        <div className="shell flex flex-col items-center gap-6 py-10 text-center lg:flex-row lg:justify-center lg:gap-10 lg:py-12">
          <HandsStar className="h-[4.5rem] w-[4.5rem] shrink-0 text-gold lg:h-[5.5rem] lg:w-[5.5rem]" />
          <p
            className="font-display font-medium leading-tight"
            style={{ fontSize: "clamp(1.5rem, 2.9vw, 2.75rem)" }}
          >
            <span className="text-navy">{c.banner.navy1}</span>
            <span className="text-navy/90">{c.banner.goldMid}</span>
            <span className="text-gold">{c.banner.gold2}</span>
            <span className="text-navy">{c.banner.navyEnd}</span>
          </p>
        </div>
        <div className="flex justify-center pb-12 lg:pb-16">
          <a href={c.cta.href} className="btn-navy">
            <span>{c.cta.label}</span>
            <ArrowRight className="arrow h-[1.2em] w-[1.2em]" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
