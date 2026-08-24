import Image from "next/image";
import { ArrowDown, ArrowRight } from "@/components/icons";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-cream">
      {/* ── Ground: village road at sunrise ─────────────────────────── */}
      <Image
        src={hero.background.src}
        alt={hero.background.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_center]"
      />

      {/* Warm wash so the headline holds on the left third, exactly as drawn. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(255,244,224,0.94) 0%, rgba(255,241,216,0.72) 26%, rgba(255,236,205,0.34) 46%, rgba(255,232,198,0.06) 62%)",
        }}
        aria-hidden
      />

      {/* Scrim under the bar so the cream wordmark and nav hold against the sky */}
      <div
        className="absolute inset-x-0 top-0 z-30 h-40"
        style={{
          background: "linear-gradient(to bottom, rgba(24,32,44,0.34) 0%, rgba(24,32,44,0) 100%)",
        }}
        aria-hidden
      />

      {/* ── Bhupeshbhai, cut out and set into the right of the frame ──
           Anchored bottom-right so the hard edge of the cutout lands on the
           frame edge rather than in the middle of the picture, and held off
           the top so there is clearance above his hair. */}
      <div className="pointer-events-none absolute bottom-0 right-0 top-[7%] z-10 hidden w-[52%] md:block lg:w-[44%] xl:w-[40%]">
        <Image
          src={hero.portrait.src}
          alt={hero.portrait.alt}
          fill
          priority
          sizes="(min-width: 1280px) 40vw, (min-width: 768px) 52vw, 0vw"
          className="object-contain object-right-bottom drop-shadow-[0_18px_40px_rgba(60,40,15,0.18)]"
        />
      </div>

      {/* ── Headline stack ──────────────────────────────────────────── */}
      <div className="shell relative z-20 flex min-h-[100svh] flex-col justify-center pb-24 pt-32 sm:pb-28 lg:pb-32">
        <div className="max-w-[46rem]">
          <h1 className="t-hero uppercase">
            <span className="block text-navy">{hero.headlineNavy}</span>
            <span className="block text-gold">{hero.headlineGold}</span>
          </h1>

          <span className="rule-gold mt-7 lg:mt-9" aria-hidden />

          <p
            className="mt-6 font-display font-medium text-navy lg:mt-8"
            style={{ fontSize: "clamp(1.25rem, 2.2vw, 2rem)" }}
          >
            {hero.subhead}
          </p>
          <p
            className="mt-1 font-display italic text-navy/85"
            style={{ fontSize: "clamp(1.125rem, 2vw, 1.75rem)" }}
          >
            {hero.tagline}
          </p>

          <a href={hero.cta.href} className="btn-navy btn-serif mt-9 lg:mt-11">
            <span className="uppercase">{hero.cta.label}</span>
            <ArrowRight className="arrow h-[1.15em] w-[1.15em]" />
          </a>
        </div>
      </div>

      {/* ── Scroll cue ──────────────────────────────────────────────── */}
      <a
        href={`#${"bhai-dil-se"}`}
        aria-label="Scroll to Bhai Dil Se"
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 rounded-full border border-navy/35 p-3 text-navy/70 transition-all duration-300 ease-soft hover:border-navy/70 hover:text-navy md:block"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
