import type { Metadata, Viewport } from "next";
import { Noto_Sans_Devanagari, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

/**
 * Playfair Display stands in for the high-contrast display serif in the comps;
 * Poppins for the geometric sans. Neither carries Devanagari, so Noto Sans
 * Devanagari sits behind both in the stack and the browser picks it up per
 * glyph for the हिंदी / मराठी nav labels and the pull quotes.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  variable: "--font-devanagari",
  display: "swap",
});

const title = "Bhupeshbhai Hai Na — Seva. Sanskaar. Saath.";
const description =
  "A life lived for people. Bhupeshbhai's work across Shirpur — healthcare access, sport and education, culture and community.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title, description },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#F8EFE3",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} ${devanagari.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
