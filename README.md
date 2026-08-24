# Bhupeshbhai Hai Na

A single-page site built from the approved comps (`Home Banner.jpg`, `Scroll 1–7.jpg`).
Next.js App Router + TypeScript + Tailwind, static apart from the scroll
interactions, and ready to deploy to Vercel.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build && npm start   # production build
npm run lint
```

## Section order

The filenames of the comps are not the page order — `Scroll 7` (Samvaad) sits
above `Scroll 6` (Bhai Se Judo), which the sitemap on page 2 of `BRP Website.pdf`
confirms. The page runs:

| # | Comp | Section | Anchor |
|---|------|---------|--------|
| 1 | Home Banner | Hero | `#top` |
| 2 | Scroll 1 | Bhai Dil Se | `#bhai-dil-se` |
| 3 | Scroll 2 | Arogya Doot | `#arogya-doot` |
| 4 | Scroll 3 | Khel & Shiksha | `#khel-shiksha` |
| 5 | Scroll 4 | Sanskaar & Samaj | `#sanskaar-samaj` |
| 6 | Scroll 5 | Apne Log | `#apne-log` |
| 7 | Scroll 7 | Samvaad | `#samvaad` |
| 8 | Scroll 6 | Bhai Se Judo + footer | `#bhai-se-judo` |

## Where things live

```
app/
  layout.tsx      fonts + metadata
  globals.css     design tokens, type scale, buttons, masks
components/       one file per section, plus Nav / Footer / icons
lib/content.ts    every string on the page
public/images/    photography, foldered by section
```

**All copy is in `lib/content.ts`.** Nothing is hard-coded in the components, so
text edits never mean touching markup.

## Design tokens

Colours were sampled from the comps rather than estimated:

| Token | Hex | Used for |
|-------|-----|----------|
| `navy` | `#0A2E54` | headlines, nav |
| `navy-deep` | `#012C56` | button fills |
| `gold` | `#B8862A` | accent headline half, eyebrows |
| `gold-soft` | `#C2A374` | hairlines, quote marks |
| `cream` | `#F8EFE3` | page ground |
| `cream-deep` | `#F3ECE2` | footer |
| `ink` | `#2B2824` | body copy |

Type: **Playfair Display** for display, **Poppins** for sans — both from Google
Fonts, self-hosted by `next/font`, so there is no external request at runtime.
Poppins is loaded with the Devanagari subset for the हिंदी / मराठी nav labels and
the pull quotes. Sizes are the comp measurements (2000px-wide exports scaled
back to a 1440px artboard) expressed as `clamp()`.

## Languages

The EN / हिंदी / मराठी switch is built and styled but only English copy exists,
so the other two are inert. To turn it on, change each leaf in `lib/content.ts`
from a string to `{ en, hi, mr }` and read it through the active locale — the
component shapes do not need to change.

## Notes on the comps

- **The nav changes typeface on scroll.** The hero comp sets the nav and the
  button label in the display serif; every scrolled comp sets them in the sans.
  Both are reproduced as drawn. To use one face throughout, drop the `face`
  variable in `components/Nav.tsx` and the `btn-serif` class in `Hero.tsx`.
- **The portrait was cut out programmatically.** The supplied
  `01_apne-log_main-portrait.jpg` has a grey studio backdrop; the comps show it
  silhouetted. `public/images/hero/bhupeshbhai-cutout.png` is a keyed version.
  Replace it with a proper agency cutout when one exists.
- **Two assets are not in the supplied folders** and are approximated:
  the Maharashtra silhouette behind the Shirpur → Mumbai pins
  (`components/RouteMap.tsx`) and the watermark silhouettes in Sanskaar & Samaj
  and Apne Log (`components/Silhouette.tsx`). Both are marked in the source.
- **Bhai Se Judo has no photo folder**, so it reuses the hero landscape.

## Deploying

Push to GitHub, import the repo on Vercel, accept the detected Next.js preset.
No environment variables and no build configuration are needed.
