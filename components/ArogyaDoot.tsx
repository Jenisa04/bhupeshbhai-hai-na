import Image from "next/image";
import Reveal from "@/components/Reveal";
import Quote from "@/components/Quote";
import RouteMap from "@/components/RouteMap";
import { HandsHeart } from "@/components/icons";
import { arogyaDoot as c } from "@/lib/content";

export default function ArogyaDoot() {
  return (
    <section id={c.id} className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid w-full max-w-[1920px] items-stretch lg:min-h-[100svh] lg:grid-cols-[36fr_64fr]">
        {/* ── Copy ──────────────────────────────────────────────────── */}
        <div className="relative z-10 order-2 flex min-w-0 flex-col justify-center py-14 pl-6 pr-6 sm:pl-8 lg:order-1 lg:py-24 lg:pl-12 lg:pr-14 xl:pl-16">
          <Reveal>
            <p className="t-eyebrow">{c.eyebrow}</p>
            <span className="rule-gold mt-3" aria-hidden />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="h-bleed mt-7">
              <span className="t-section block uppercase tracking-[0.01em] text-navy">
                {c.headlineNavy}
              </span>
              {c.headlineGold.map((line) => (
                <span
                  key={line}
                  className="block font-display font-medium leading-[1.12] text-gold"
                  style={{ fontSize: "clamp(1.5rem, 2.9vw, 2.6rem)" }}
                >
                  {line}
                </span>
              ))}
            </h2>
            <span className="rule-gold mt-6" aria-hidden />
          </Reveal>

          <Reveal delay={0.16} className="mt-7 space-y-5 text-ink">
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

          {/* ── 10,000+ supported ──────────────────────────────────── */}
          <Reveal delay={0.24}>
            <div className="mt-10 flex items-center gap-5">
              <HandsHeart className="h-[4.25rem] w-[4.25rem] shrink-0 text-gold lg:h-20 lg:w-20" />
              <div>
                <p
                  className="font-display font-semibold leading-none text-navy"
                  style={{ fontSize: "clamp(1.75rem, 2.9vw, 2.6rem)" }}
                >
                  {/* Playfair sets "+" near cap height; the comp keeps it down
                      on the figures, so nudge it back to the numerals. */}
                  {c.stat.value.replace("+", "")}
                  <span className="inline-block translate-y-[0.09em]">+</span>
                </p>
                <p className="mt-1 font-sans font-medium leading-[1.32] text-navy"
                   style={{ fontSize: "clamp(0.8125rem, 1.05vw, 1rem)" }}>
                  {c.stat.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <Quote lines={c.quote} className="mt-10" />
          </Reveal>
        </div>

        {/* ── Photography ───────────────────────────────────────────── */}
        <div className="order-1 flex flex-col gap-4 lg:order-2 lg:gap-5 lg:pb-8">
          <Reveal className="relative min-h-[46vh] flex-1 lg:min-h-[58vh]">
            <Image
              src={c.main.src}
              alt={c.main.alt}
              fill
              sizes="(min-width: 1024px) 68vw, 100vw"
              className="object-cover object-[42%_30%] lg:fade-left"
            />
            <RouteMap
              from={c.route.from}
              to={c.route.to}
              className="absolute right-6 top-24 hidden w-[13rem] lg:block xl:right-10 xl:top-28 xl:w-[15rem]"
            />
          </Reveal>

          <div className="grid gap-3 px-6 sm:px-8 md:grid-cols-3 lg:gap-5 lg:pl-0 lg:pr-12 xl:pr-16">
            {c.cards.map((card, i) => (
              <Reveal key={card.src} delay={0.1 + i * 0.08} className="group photo-card flex flex-col">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 768px) 31vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col px-5 pb-5 pt-4 lg:px-6 lg:pb-6">
                  <p className="t-body font-medium text-navy">{card.navy}</p>
                  {card.gold && <p className="t-body text-gold">{card.gold}</p>}
                  <span className="mt-5 block h-px w-10 bg-gold-soft" aria-hidden />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
