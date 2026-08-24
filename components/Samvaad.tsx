import Image from "next/image";
import Reveal from "@/components/Reveal";
import { samvaadIcons } from "@/components/icons";
import { samvaad as c } from "@/lib/content";

export default function Samvaad() {
  return (
    <section id={c.id} className="relative overflow-hidden bg-cream">
      {/* Bhupeshbhai at the podium, bleeding off the top right */}
      <div className="relative mx-auto w-full max-w-[1920px]">
        <Reveal className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <div className="relative h-[62%] w-full">
            <Image
              src={c.main.src}
              alt={c.main.alt}
              fill
              sizes="58vw"
              className="fade-left-bottom object-cover object-[46%_20%]"
            />
          </div>
        </Reveal>

        <div className="relative z-10 px-6 pb-10 pt-14 sm:px-8 lg:px-12 lg:pb-10 lg:pt-32 xl:px-16">
          {/* ── Copy ────────────────────────────────────────────────── */}
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
            </Reveal>

            <Reveal delay={0.16} className="mt-7">
              {c.body.map((p) => (
                <p key={p} className="t-body text-ink">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>

          {/* The podium photograph, stacked above the cards on small screens */}
          <Reveal className="relative mt-10 aspect-[16/10] w-full lg:hidden">
            <Image
              src={c.main.src}
              alt={c.main.alt}
              fill
              sizes="100vw"
              className="rounded-xl object-cover object-[46%_20%]"
            />
          </Reveal>

          {/* ── Four conversations ──────────────────────────────────── */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
            {c.cards.map((card, i) => {
              const CardIcon = samvaadIcons[card.icon as keyof typeof samvaadIcons];
              return (
                <Reveal key={card.src} delay={0.1 + i * 0.07} className="group photo-card flex flex-col">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 items-start gap-4 px-5 pb-6 pt-5 lg:px-6">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-deep text-cream lg:h-12 lg:w-12">
                      <CardIcon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="t-card-title text-navy">{card.title}</p>
                      <p className="t-body mt-1 text-ink">
                        {card.lines.map((l) => (
                          <span key={l} className="block">
                            {l}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Closing banner ──────────────────────────────────────────── */}
      <Reveal className="shell -mt-2 flex items-center justify-center gap-5 pb-12 lg:gap-8 lg:pb-16">
        <span className="hidden h-px flex-1 bg-gold-soft/70 sm:block" aria-hidden />
        <span
          className="font-display leading-none text-gold"
          style={{ fontSize: "clamp(1.75rem, 2.4vw, 2.5rem)" }}
          aria-hidden
        >
          &ldquo;
        </span>
        <p
          className="whitespace-nowrap font-display font-medium"
          style={{ fontSize: "clamp(1.25rem, 2.6vw, 2.5rem)" }}
        >
          <span className="text-navy">{c.banner.navy1}</span>
          <span className="text-gold">{c.banner.gold1}</span>
          <span className="text-navy">{c.banner.navy2}</span>
          <span className="text-gold">{c.banner.gold2}</span>
        </p>
        <span
          className="font-display leading-none text-gold"
          style={{ fontSize: "clamp(1.75rem, 2.4vw, 2.5rem)" }}
          aria-hidden
        >
          &rdquo;
        </span>
        <span className="hidden h-px flex-1 bg-gold-soft/70 sm:block" aria-hidden />
      </Reveal>
    </section>
  );
}
