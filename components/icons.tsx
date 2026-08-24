import type { SVGProps } from "react";

type Icon = (p: SVGProps<SVGSVGElement>) => JSX.Element;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const ArrowRight: Icon = (p) => (
  <svg {...base} aria-hidden {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const ArrowDown: Icon = (p) => (
  <svg {...base} aria-hidden {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

/**
 * One open, upturned hand, drawn from the wrist at the local origin so the pair
 * can simply be mirrored and splayed by a rotation: up the outer edge, over the
 * fingertips, down into the valley, over the shorter thumb, back to the wrist.
 * The wrists converge at the bottom so the pair reads as a cradle.
 */
const HAND =
  "M0 0C-3.2-4-5-9.5-5-15V-23a3.6 3.6 0 0 1 7.2 0V-19.8a2.5 2.5 0 0 1 5 0V-12.5C7.2-8 5.2-3.5 2.4 0";

const Cradle = () => (
  <>
    <g transform="translate(18 45) rotate(-14)">
      <path d={HAND} />
    </g>
    <g transform="translate(30 45) rotate(14) scale(-1 1)">
      <path d={HAND} />
    </g>
  </>
);

/** Cupped hands cradling a heart with a medical cross — the Arogya Doot statistic mark. */
export const HandsHeart: Icon = (p) => (
  <svg {...base} viewBox="0 0 48 48" strokeWidth={1.8} aria-hidden {...p}>
    <path d="M24 20.4s-10-5.9-10-12.3a5.2 5.2 0 0 1 10-2.8 5.2 5.2 0 0 1 10 2.8c0 6.4-10 12.3-10 12.3Z" />
    <path d="M24 7.2v7.4M20.3 10.9h7.4" />
    <Cradle />
  </svg>
);

/** Cupped hands cradling a star — the Khel & Shiksha banner mark. */
export const HandsStar: Icon = (p) => (
  <svg {...base} viewBox="0 0 48 48" strokeWidth={1.8} aria-hidden {...p}>
    <path d="M24 1.5l2.53 7.02 7.46.24-5.9 4.57 2.08 7.16L24 16.3l-6.17 4.19 2.08-7.16-5.9-4.57 7.46-.24z" />
    {/* the specks that sit off the star's upper left in the reference mark */}
    <circle cx="10.6" cy="6.2" r="1.05" fill="currentColor" stroke="none" />
    <circle cx="14.2" cy="2.6" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="7.8" cy="11.2" r="0.7" fill="currentColor" stroke="none" />
    <Cradle />
  </svg>
);

/** Group of three figures — “Always close to the people”. */
export const People: Icon = (p) => (
  <svg {...base} viewBox="0 0 48 48" strokeWidth={1.5} aria-hidden {...p}>
    <circle cx="24" cy="15" r="5" />
    <circle cx="11" cy="18.5" r="4" />
    <circle cx="37" cy="18.5" r="4" />
    <path d="M15 34.5a9 9 0 0 1 18 0" />
    <path d="M4 34.5a7.4 7.4 0 0 1 7.7-7.3M44 34.5a7.4 7.4 0 0 0-7.7-7.3" />
  </svg>
);

export const Boot: Icon = (p) => (
  <svg {...base} viewBox="0 0 32 32" strokeWidth={1.6} aria-hidden {...p}>
    <path d="M6 9v9.5c0 1.2.6 2.3 1.7 2.9l8.6 4.7c1 .5 2 .8 3.1.8H27a2 2 0 0 0 2-2v-1.2a3 3 0 0 0-1.9-2.8l-7.4-2.9a4 4 0 0 1-1.9-1.6L14.6 11A4 4 0 0 0 11.2 9H6Z" />
    <path d="M3 26h26M9.5 13.5l1.5 2.5M13 12.5l1.6 2.7" />
  </svg>
);

export const Book: Icon = (p) => (
  <svg {...base} viewBox="0 0 32 32" strokeWidth={1.6} aria-hidden {...p}>
    <path d="M16 9.5C13.6 7.9 10.6 7 7 7H4v16h3c3.6 0 6.6.9 9 2.5 2.4-1.6 5.4-2.5 9-2.5h3V7h-3c-3.6 0-6.6.9-9 2.5Z" />
    <path d="M16 9.5v16" />
  </svg>
);

/* ── Bhai Se Judo column marks ─────────────────────────────────────── */

export const Chat: Icon = (p) => (
  <svg {...base} viewBox="0 0 32 32" strokeWidth={1.5} aria-hidden {...p}>
    <path d="M27 18.5a4 4 0 0 1-4 4H13l-6 4.5v-4.5a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4Z" />
    <circle cx="11" cy="14" r=".9" fill="currentColor" stroke="none" />
    <circle cx="15" cy="14" r=".9" fill="currentColor" stroke="none" />
    <circle cx="19" cy="14" r=".9" fill="currentColor" stroke="none" />
  </svg>
);

export const HeartPlus: Icon = (p) => (
  <svg {...base} viewBox="0 0 32 32" strokeWidth={1.5} aria-hidden {...p}>
    <path d="M16 27S4.5 20.2 4.5 12.9A5.9 5.9 0 0 1 16 10.4a5.9 5.9 0 0 1 11.5 2.5c0 1.6-.6 3.2-1.5 4.6" />
    <circle cx="24" cy="22" r="5.5" />
    <path d="M24 19.5v5M21.5 22h5" />
  </svg>
);

export const BookOpen: Icon = (p) => (
  <svg {...base} viewBox="0 0 32 32" strokeWidth={1.5} aria-hidden {...p}>
    <path d="M4 7h7a5 5 0 0 1 5 5v13a4 4 0 0 0-4-4H4Z" />
    <path d="M28 7h-7a5 5 0 0 0-5 5v13a4 4 0 0 1 4-4h8Z" />
    <path d="M23 12v6" />
    <circle cx="23" cy="20.5" r=".9" fill="currentColor" stroke="none" />
  </svg>
);

export const PeopleSmall: Icon = (p) => (
  <svg {...base} viewBox="0 0 32 32" strokeWidth={1.5} aria-hidden {...p}>
    <circle cx="16" cy="11" r="3.6" />
    <circle cx="7" cy="13.5" r="2.9" />
    <circle cx="25" cy="13.5" r="2.9" />
    <path d="M10 24a6 6 0 0 1 12 0" />
    <path d="M2 23.5a5.2 5.2 0 0 1 5.4-5.2M30 23.5a5.2 5.2 0 0 0-5.4-5.2" />
  </svg>
);

/* ── Samvaad card marks ────────────────────────────────────────────── */

export const ChatGroup: Icon = (p) => (
  <svg {...base} viewBox="0 0 32 32" strokeWidth={1.5} aria-hidden {...p}>
    <path d="M25 6H10a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3v3.5l4-3.5h11a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z" />
    <circle cx="8" cy="24.5" r="2.6" />
    <circle cx="18" cy="25.5" r="2.2" />
    <path d="M3.5 30a4.7 4.7 0 0 1 9 0M14.2 30a3.9 3.9 0 0 1 7.6 0" />
  </svg>
);

export const HandHeart: Icon = (p) => (
  <svg {...base} viewBox="0 0 32 32" strokeWidth={1.5} aria-hidden {...p}>
    <path d="M16 14.5s-4.4-2.7-4.4-5.7a2.7 2.7 0 0 1 4.4-2 2.7 2.7 0 0 1 4.4 2c0 3-4.4 5.7-4.4 5.7Z" />
    <path d="M4 20.5c2.4 0 4.2 1 5.8 2.2l3 2.3h4.4a1.8 1.8 0 0 1 0 3.6h-4.9" />
    <path d="M4 20.5V29M28 20.5c-2.4 0-4.2 1-5.8 2.2l-4.6 3.6" />
    <path d="M28 20.5V29" />
  </svg>
);

export const PeopleTrio: Icon = (p) => (
  <svg {...base} viewBox="0 0 32 32" strokeWidth={1.5} aria-hidden {...p}>
    <circle cx="16" cy="10" r="3.2" />
    <circle cx="7.5" cy="12.5" r="2.6" />
    <circle cx="24.5" cy="12.5" r="2.6" />
    <path d="M10.5 22.5a5.6 5.6 0 0 1 11 0" />
    <path d="M2.5 22a4.8 4.8 0 0 1 5-4.8M29.5 22a4.8 4.8 0 0 0-5-4.8" />
    <path d="M10.5 22.5V28M21.5 22.5V28" />
  </svg>
);

export const Family: Icon = (p) => (
  <svg {...base} viewBox="0 0 32 32" strokeWidth={1.5} aria-hidden {...p}>
    <circle cx="9" cy="9.5" r="3" />
    <circle cx="23" cy="9.5" r="3" />
    <circle cx="16" cy="16" r="2.4" />
    <path d="M4 27v-8a5 5 0 0 1 10 0v8M18 27v-8a5 5 0 0 1 10 0v8" />
    <path d="M12.5 27v-4.5a3.5 3.5 0 0 1 7 0V27" />
  </svg>
);

/* ── Footer social marks ───────────────────────────────────────────── */

export const Facebook: Icon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.02 1.46-4.02 4.13V9.9H7.5V13h2.77v8Z" />
  </svg>
);

export const Instagram: Icon = (p) => (
  <svg {...base} viewBox="0 0 24 24" strokeWidth={1.6} aria-hidden {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.9" />
    <circle cx="17.1" cy="6.9" r=".9" fill="currentColor" stroke="none" />
  </svg>
);

export const YouTube: Icon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M21.6 7.5a2.5 2.5 0 0 0-1.75-1.77C18.28 5.3 12 5.3 12 5.3s-6.28 0-7.85.43A2.5 2.5 0 0 0 2.4 7.5 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.5 2.5 2.5 0 0 0 1.75 1.77c1.57.43 7.85.43 7.85.43s6.28 0 7.85-.43a2.5 2.5 0 0 0 1.75-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.5ZM10.1 14.9V9.1L15.1 12Z" />
  </svg>
);

export const WhatsApp: Icon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12.04 3.5a8.4 8.4 0 0 0-7.2 12.72L3.5 20.5l4.4-1.3a8.4 8.4 0 1 0 4.14-15.7Zm0 1.55a6.85 6.85 0 1 1-3.5 12.74l-.25-.15-2.6.77.78-2.54-.16-.26a6.85 6.85 0 0 1 5.73-10.56Zm3.9 8.66c-.2-.11-1.2-.6-1.39-.66s-.32-.1-.46.1-.53.66-.65.8-.24.16-.44.05a5.6 5.6 0 0 1-2.8-2.44c-.21-.36.21-.34.6-1.12a.38.38 0 0 0 0-.36c0-.1-.46-1.1-.63-1.5s-.33-.34-.46-.35h-.39a.75.75 0 0 0-.54.25 2.26 2.26 0 0 0-.7 1.68 3.93 3.93 0 0 0 .82 2.08 8.98 8.98 0 0 0 3.44 3.04c1.28.5 1.78.55 2.42.46a2.06 2.06 0 0 0 1.36-.96 1.68 1.68 0 0 0 .12-.96c-.05-.09-.18-.14-.38-.24Z" />
  </svg>
);

export const Menu: Icon = (p) => (
  <svg {...base} strokeWidth={1.6} aria-hidden {...p}>
    <path d="M4 8h16M4 12h16M4 16h16" />
  </svg>
);

export const Close: Icon = (p) => (
  <svg {...base} strokeWidth={1.6} aria-hidden {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const Pin: Icon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2.5a6.5 6.5 0 0 0-6.5 6.5c0 4.9 6.5 12.5 6.5 12.5s6.5-7.6 6.5-12.5A6.5 6.5 0 0 0 12 2.5Zm0 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
  </svg>
);

export const samvaadIcons = {
  charcha: ChatGroup,
  dilse: HandHeart,
  yuva: PeopleTrio,
  apno: Family,
} as const;

export const judoIcons = {
  chat: Chat,
  heart: HeartPlus,
  book: BookOpen,
  people: PeopleSmall,
} as const;

export const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: YouTube,
  whatsapp: WhatsApp,
} as const;
