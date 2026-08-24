import type { Config } from "tailwindcss";

/**
 * Palette values were sampled directly out of the approved comps
 * (Home Banner.jpg / Scroll 1-7.jpg) rather than eyeballed.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A2E54", // headlines, nav links
          deep: "#012C56", // button fills
          soft: "#1B4677", // hover
        },
        gold: {
          DEFAULT: "#B8862A", // accent headline half, eyebrows
          soft: "#C2A374", // hairlines, quote marks
          pale: "#E4D3B0", // card borders
          bright: "#D8A63C", // button label on navy
        },
        cream: {
          DEFAULT: "#F8EFE3", // page ground
          light: "#FBF6EF", // upper wash
          deep: "#F3ECE2", // footer
        },
        card: "#F6EFE7",
        ink: {
          DEFAULT: "#2B2824", // body copy
          soft: "#5A544C",
        },
      },
      fontFamily: {
        display: [
          "var(--font-playfair)",
          "var(--font-devanagari)",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
        sans: [
          "var(--font-poppins)",
          "var(--font-devanagari)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      maxWidth: {
        shell: "1600px",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
