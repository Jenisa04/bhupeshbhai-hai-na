import Image from "next/image";
import Reveal from "@/components/Reveal";
import Quote from "@/components/Quote";
import { ArrowRight } from "@/components/icons";
import { bhaiDilSe as c } from "@/lib/content";

export default function BhaiDilSe() {
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
            <h2 className="t-section h-bleed mt-7">
              <span className="block text-navy">{c.headlineNavy}</span>
              <span className="block text-gold">{c.headlineGold}</span>
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
              <strong className="font-semibold text-navy">{c.bodyRich.strong}</strong>
              {c.bodyRich.after}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <a href={c.cta.href} className="btn-navy mt-9">
              <span>{c.cta.label}</span>
              <ArrowRight className="arrow h-[1.2em] w-[1.2em]" />
            </a>
          </Reveal>

          <Reveal delay={0.3}>
            <Quote lines={c.quote} className="mt-12" />
          </Reveal>
        </div>

        {/* ── Photography ───────────────────────────────────────────── */}
        <div className="order-1 flex flex-col gap-4 lg:order-2 lg:gap-5 lg:pb-8">
          <Reveal className="relative min-h-[46vh] flex-1 lg:min-h-[62vh]">
            <Image
              src={c.main.src}
              alt={c.main.alt}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover object-[38%_28%] lg:fade-left"
            />
          </Reveal>

          <div className="grid grid-cols-3 gap-3 px-6 sm:px-8 lg:gap-5 lg:pl-0 lg:pr-12 xl:pr-16">
            {c.thumbs.map((t, i) => (
              <Reveal
                key={t.src}
                delay={0.1 + i * 0.08}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl lg:aspect-[16/13]"
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, 31vw"
                  className="object-cover object-top transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}