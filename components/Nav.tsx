"use client";

import { useEffect, useState } from "react";
import Wordmark from "@/components/Wordmark";
import { Close, Menu } from "@/components/icons";
import { nav, type Locale } from "@/lib/content";

export default function Nav() {
  /** Over the hero photograph the bar is drawn in cream; past it, in navy. */
  const [onHero, setOnHero] = useState(true);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Locale>(nav.languages[0].code);

  useEffect(() => {
    const onScroll = () => setOnHero(window.scrollY < window.innerHeight - 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const ink = onHero ? "text-cream" : "text-navy";
  const rule = onHero ? "bg-cream/35" : "bg-navy/25";
  /* The hero comp draws the nav in the display serif and the scrolled comps
     draw it in the sans; both are reproduced rather than averaged. */
  const face = onHero ? "font-display font-normal" : "font-sans font-medium";

  return (
    <>
      {/* A solid bar would cut a hard line across the photographs that bleed to
          the top of every section, so the scrolled state fades out instead. */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-opacity duration-500 ease-soft ${
          onHero ? "" : "backdrop-blur-[2px]"
        }`}
        style={
          onHero
            ? undefined
            : {
                background:
                  "linear-gradient(to bottom, rgba(248,239,227,0.92) 0%, rgba(248,239,227,0.72) 55%, rgba(248,239,227,0) 100%)",
                maskImage: "linear-gradient(to bottom, #000 60%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, #000 60%, transparent 100%)",
              }
        }
      >
        <div className="shell flex items-start justify-between gap-6 py-5 lg:py-6">
          <Wordmark tone={onHero ? "light" : "navy"} />

          <div className="flex items-center gap-4 pt-1 lg:gap-6">
            {/* Section links + language switch, desktop only */}
            <nav className="hidden items-center gap-4 lg:flex xl:gap-6" aria-label="Sections">
              {nav.links.map((link, i) => (
                <span key={link.href} className="flex items-center gap-4 xl:gap-6">
                  {i > 0 && <span className={`h-4 w-px ${rule}`} aria-hidden />}
                  <a
                    href={link.href}
                    className={`t-nav ${face} whitespace-nowrap transition-opacity duration-200 hover:opacity-60 ${ink}`}
                  >
                    {link.label}
                  </a>
                </span>
              ))}

              <span className={`h-4 w-px ${rule}`} aria-hidden />

              {nav.languages.map((l, i) => (
                <span key={l.code} className="flex items-center gap-4 xl:gap-6">
                  {i > 0 && <span className={`h-4 w-px ${rule}`} aria-hidden />}
                  <button
                    type="button"
                    onClick={() => setLang(l.code)}
                    aria-pressed={lang === l.code}
                    /* English is the only locale that ships today — the other two
                       are wired up but have no copy behind them yet. */
                    title={l.code === "en" ? undefined : "Coming soon"}
                    className={`t-nav ${face} transition-opacity duration-200 hover:opacity-60 ${ink} ${
                      lang === l.code ? "" : "opacity-70"
                    }`}
                  >
                    {l.label}
                  </button>
                </span>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className={`grid h-11 w-11 place-items-center rounded-full border transition-colors duration-300 lg:h-[3.25rem] lg:w-[3.25rem] ${
                onHero
                  ? "border-cream/60 text-cream hover:bg-cream/10"
                  : "border-gold-soft text-navy hover:bg-gold/10"
              }`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Slide-over menu ─────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-400 ease-soft ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute inset-0 h-full w-full cursor-default bg-navy/40 backdrop-blur-sm"
        />

        <div
          className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream-light px-8 py-6 shadow-2xl transition-transform duration-500 ease-soft sm:px-12 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-start justify-between">
            <Wordmark />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-gold-soft text-navy transition-colors hover:bg-gold/10"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-12 flex flex-col gap-1" aria-label="All sections">
            {nav.menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group border-b border-gold-pale/60 py-4 font-display text-2xl font-medium text-navy transition-colors duration-200 hover:text-gold sm:text-[1.75rem]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex items-center gap-5 pt-10">
            {nav.languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                title={l.code === "en" ? undefined : "Coming soon"}
                className={`t-nav text-navy transition-opacity hover:opacity-60 ${
                  lang === l.code ? "" : "opacity-60"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
