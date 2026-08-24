import { socialIcons } from "@/components/icons";
import { footer as c } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-gold-pale/70 bg-cream-deep">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-8 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-12 lg:py-9 xl:px-16">
        {/* ── Wordmark ──────────────────────────────────────────────── */}
        <div>
          <p
            className="font-sans font-semibold uppercase leading-none"
            style={{ fontSize: "clamp(0.9375rem, 1.15vw, 1.125rem)", letterSpacing: "0.045em" }}
          >
            <span className="text-navy">{c.wordmarkNavy} </span>
            <span className="text-gold">{c.wordmarkGold}</span>
          </p>
          <p className="t-body mt-1.5 text-ink">{c.tagline}</p>
        </div>

        {/* ── Sections ──────────────────────────────────────────────── */}
        <nav className="flex flex-wrap items-center gap-4 lg:gap-6" aria-label="Footer sections">
          {c.links.map((link, i) => (
            <span key={link.href} className="flex items-center gap-4 lg:gap-6">
              {i > 0 && <span className="h-4 w-px bg-navy/20" aria-hidden />}
              <a
                href={link.href}
                className="t-nav text-navy transition-opacity duration-200 hover:opacity-60"
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>

        {/* ── Legal + locale + social ───────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-4 lg:gap-6">
          {c.legal.map((link, i) => (
            <span key={link.label} className="flex items-center gap-4 lg:gap-6">
              {i > 0 && <span className="h-4 w-px bg-navy/20" aria-hidden />}
              <a
                href={link.href}
                className="t-nav text-navy transition-opacity duration-200 hover:opacity-60"
              >
                {link.label}
              </a>
            </span>
          ))}

          <span className="h-4 w-px bg-navy/20" aria-hidden />
          <span className="t-nav text-navy">{c.locale}</span>

          <ul className="flex items-center gap-2.5 lg:ml-3">
            {c.social.map((s) => {
              const SocialIcon = socialIcons[s.icon as keyof typeof socialIcons];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-gold-soft/70 text-navy transition-colors duration-200 hover:border-gold hover:bg-gold/10"
                  >
                    <SocialIcon className="h-[1.05rem] w-[1.05rem]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
