import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ArrowRight, judoIcons } from "@/components/icons";
import { bhaiSeJudo as c } from "@/lib/content";

export default function BhaiSeJudo() {
  return (
    <section id={c.id} className="relative overflow-hidden bg-cream-light">
      <div className="relative mx-auto w-full max-w-[1920px]">
        {/* Village at golden hour, dissolving into the cream on the left */}
        <div className="pointer-events-none absolute right-0 top-0 hidden h-[62%] w-[62%] lg:block">
          <Image
            src={c.background.src}
            alt={c.background.alt}
            fill
            sizes="62vw"
            className="fade-left-bottom object-cover object-[55%_60%]"
          />
        </div>

        {/* Bhupeshbhai over the landscape */}
        <div className="pointer-events-none absolute right-0 top-0 hidden h-[56%] w-[26%] lg:block xl:w-[24%]">
          <Image
            src={c.portrait.src}
            alt={c.portrait.alt}
            fill
            sizes="26vw"
            className="object-contain object-bottom"
          />
        </div>

        <div className="relative z-10 px-6 pb-12 pt-14 sm:px-8 lg:px-12 lg:pb-16 lg:pt-28 xl:px-16">
          {/* ── Copy ────────────────────────────────────────────────── */}
          <div className="max-w-[32rem]">
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

          {/* The landscape, stacked in flow on small screens */}
          <Reveal className="relative mt-10 aspect-[16/9] w-full lg:hidden">
            <Image
              src={c.background.src}
              alt={c.background.alt}
              fill
              sizes="100vw"
              className="rounded-xl object-cover object-[55%_60%]"
            />
          </Reveal>

          <span className="mt-12 hidden h-px w-full bg-gold-soft/60 lg:block" aria-hidden />

          {/* ── Four ways to reach him ──────────────────────────────── */}
          <div className="relative z-20 mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-x-0">
            {c.columns.map((col, i) => {
              const ColIcon = judoIcons[col.icon as keyof typeof judoIcons];
              return (
                <Reveal
                  key={col.title}
                  delay={0.08 + i * 0.07}
                  className={`flex items-start gap-4 lg:px-4 xl:px-6 ${
                    i > 0 ? "lg:border-l lg:border-gold-soft/50" : ""
                  } ${i === 0 ? "lg:pl-0" : ""}`}
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold-soft text-navy lg:h-[4.25rem] lg:w-[4.25rem]">
                    <ColIcon className="h-7 w-7 lg:h-8 lg:w-8" />
                  </span>

                  <div className="flex h-full flex-col">
                    <p
                      className="font-sans font-semibold uppercase text-navy"
                      style={{
                        fontSize: "clamp(0.875rem, 1.1vw, 1.0625rem)",
                        letterSpacing: "0.045em",
                      }}
                    >
                      {col.title}
                    </p>
                    <p className="t-body mt-2 text-ink">{col.body}</p>
                    <a href={col.href} className="link-gold mt-auto pt-5">
                      <span>{col.cta}</span>
                      <ArrowRight className="arrow h-[1.15em] w-[1.15em]" />
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* ── Closing banner ──────────────────────────────────────── */}
          <Reveal className="mt-12 flex items-center justify-center gap-5 lg:mt-16 lg:gap-8">
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
              <span className="text-gold">{c.banner.gold}</span>
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
        </div>
      </div>
    </section>
  );
}
