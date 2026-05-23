import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Window Cleaning | Fresh For Less — Free Quote",
  description:
    "Get your windows professionally cleaned at affordable prices. Pure-water reach & wash, frames and sills included, streak-free guarantee. Call 0330 043 4811.",
  alternates: {
    canonical: "https://www.freshforlesswindowcleaning.co.uk/cleaning",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Fresh For Less Window Cleaning",
    url: "https://www.freshforlesswindowcleaning.co.uk/cleaning",
    title: "Professional Window Cleaning | Fresh For Less — Free Quote",
    description:
      "Sparkling windows at affordable prices. Trusted by 2,000+ families. Pure-water clean, frames included, streak-free guarantee. Book today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Window Cleaning | Fresh For Less",
    description:
      "Sparkling windows at affordable prices. Free quotes, pure-water clean, streak-free guarantee. Call 0330 043 4811.",
  },
};

export default function CleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
