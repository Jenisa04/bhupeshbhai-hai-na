import Image from "next/image";
import Reveal from "@/components/Reveal";
import { PeopleSilhouette } from "@/components/Silhouette";
import { sanskaarSamaj as c } from "@/lib/content";

export default function SanskaarSamaj() {
  const [v, e, d, r] = c.bodyRich.highlights;

  return (
    <section id={c.id} className="relative overflow-hidden bg-cream">
      {/* Watermark behind the copy column */}
      <PeopleSilhouette className="pointer-events-none absolute bottom-10 left-0 hidden w-[30rem] text-gold/[0.07] lg:block" />

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
            <p className="t-body">
              {c.bodyRich.before}
              <span className="font-medium text-gold">{v}</span>,{" "}
              <span className="font-medium text-gold">{e}</span>,{" "}
              <span className="font-medium text-gold">{d}</span> and{" "}
              <span className="font-medium text-gold">{r}</span>.
            </p>
            {c.body.map((p) => (
              <p key={p} className="t-body">
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        {/* ── Photography ───────────────────────────────────────────── */}
        <div className="order-1 flex flex-col gap-4 lg:order-2 lg:gap-6 lg:pb-10">
          <Reveal className="relative min-h-[42vh] flex-1 lg:min-h-[56vh]">
            <Image
              src={c.hero.src}
              alt={c.hero.alt}
              fill
              sizes="(min-width: 1024px) 67vw, 100vw"
              className="object-cover object-[55%_35%] lg:fade-left-soft"
            />
          </Reveal>

          <div className="grid gap-5 px-6 sm:px-8 md:grid-cols-3 lg:gap-6 lg:pl-0 lg:pr-12 xl:pr-16">
            {c.cards.map((card, i) => (
              <Reveal key={card.src} delay={0.1 + i * 0.08} className="group">
                <div className="relative aspect-[16/11] overflow-hidden rounded-sm">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 21vw, (min-width: 768px) 30vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
                  />
                </div>
                <p
                  className="mt-4 font-sans font-semibold uppercase text-navy"
                  style={{ fontSize: "clamp(0.8125rem, 1.05vw, 1rem)", letterSpacing: "0.045em" }}
                >
                  {card.title}
                </p>
                <p className="t-body mt-1 text-ink">{card.caption}</p>
                <span className="mt-4 block h-px w-12 bg-gold-soft" aria-hidden />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── Closing banner ──────────────────────────────────────────── */}
      <Reveal className="relative z-10 pb-14 pt-4 lg:pb-20">
        <p
          className="shell text-center font-display font-medium leading-tight"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.75rem)" }}
        >
          <span className="text-navy">{c.banner.navy1}</span>
          <span className="text-gold">{c.banner.gold}</span>
          <span className="text-navy">{c.banner.navy2}</span>
        </p>
      </Reveal>
    </section>
  );
}
