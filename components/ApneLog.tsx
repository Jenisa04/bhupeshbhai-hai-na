import Image from "next/image";
import Reveal from "@/components/Reveal";
import { VillageSilhouette } from "@/components/Silhouette";
import { People } from "@/components/icons";
import { apneLog as c } from "@/lib/content";

export default function ApneLog() {
  return (
    <section id={c.id} className="relative overflow-hidden bg-cream-light lg:min-h-[100svh]">
      {/* Bhupeshbhai, dissolved into the cream ground on the right */}
      <div className="pointer-events-none absolute bottom-0 right-0 top-[6%] hidden w-[38%] md:block lg:w-[33%]">
        <Image
          src={c.portrait.src}
          alt={c.portrait.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 38vw"
          className="fade-left object-contain object-right-bottom opacity-[0.97]"
        />
      </div>

      <VillageSilhouette className="pointer-events-none absolute bottom-0 left-0 hidden w-[34rem] text-gold/[0.07] lg:block" />

      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-6 pb-14 pt-14 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32 xl:px-16">
        {/* ── Copy ──────────────────────────────────────────────────── */}
        <div className="max-w-[34rem]">
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
              <strong className="font-semibold text-gold">{c.bodyRich.strong}</strong>
              {c.bodyRich.after}
            </p>
            {c.body.map((p) => (
              <p key={p} className="t-body">
                {p}
              </p>
            ))}
          </Reveal>

          {/* ── Pledge ─────────────────────────────────────────────── */}
          <Reveal delay={0.24} className="mt-12 border-l-2 border-gold-soft pl-6">
            <p
              className="font-sans font-semibold uppercase text-navy"
              style={{ fontSize: "clamp(0.8125rem, 1.05vw, 1rem)", letterSpacing: "0.07em" }}
            >
              {c.pledge.title}
            </p>
            <div className="mt-5 flex items-start gap-5">
              <People className="h-12 w-12 shrink-0 text-gold" />
              <p className="t-body text-navy">
                {c.pledge.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── Three moments ─────────────────────────────────────────── */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6 lg:pl-[10%] lg:pr-[33%] xl:pl-[12%] xl:pr-[35%]">
          {c.cards.map((card, i) => (
            <Reveal key={card.src} delay={0.1 + i * 0.08} className="group photo-card p-3 lg:p-4">
              <div className="relative aspect-[16/11] overflow-hidden rounded-md">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 21vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
                />
              </div>
              <div className="px-1 pb-2 pt-5">
                <p className="t-card-title text-navy">{card.navy}</p>
                <p
                  className="mt-1 font-display text-gold"
                  style={{ fontSize: "clamp(1rem, 1.35vw, 1.375rem)" }}
                >
                  {card.gold}
                </p>
                <span className="mt-5 block h-px w-12 bg-gold-soft" aria-hidden />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
