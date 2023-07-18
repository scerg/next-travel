import { Inter } from "next/font/google";
import { Balsamiq_Sans } from "next/font/google";

export const inter = Inter({
  subsets: ["cyrillic", "latin"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const balsamiq = Balsamiq_Sans({ subsets: ["cyrillic"], weight: "700" });
