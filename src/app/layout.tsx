import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.freshforlesswindowcleaning.co.uk"),
  title: {
    default: "Window Cleaning Wirral, Liverpool & Chester | Fresh For Less",
    template: "%s | Fresh For Less Window Cleaning",
  },
  description:
    "Professional pure-water window cleaning across Wirral, Liverpool, Chester, Warrington & North Wales. Frames, sills & doors included. Streak-free guarantee from £12 — call 0330 043 4811.",
  applicationName: "Fresh For Less Window Cleaning",
  authors: [{ name: "Fresh For Less Window Cleaning" }],
  keywords: [
    "window cleaning",
    "window cleaning wirral",
    "window cleaning liverpool",
    "window cleaning chester",
    "window cleaning warrington",
    "window cleaning north wales",
    "gutter cleaning",
    "conservatory cleaning",
    "solar panel cleaning",
    "fascia and soffit cleaning",
    "pure water window cleaning",
    "reach and wash window cleaning",
    "window cleaner near me",
    "professional window cleaning",
    "affordable window cleaning",
    "commercial window cleaning",
    "water fed pole",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.freshforlesswindowcleaning.co.uk",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Fresh For Less Window Cleaning",
    url: "https://www.freshforlesswindowcleaning.co.uk",
    title: "Window Cleaning Wirral, Liverpool & Chester | Fresh For Less",
    description:
      "Professional pure-water window cleaning trusted by 2,000+ families. Frames, sills & doors included, streak-free guarantee, no-obligation quotes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Window Cleaning Wirral, Liverpool & Chester | Fresh For Less",
    description:
      "Pure-water window cleaning across the North West from £12 per clean. Free quotes, streak-free guarantee. Call 0330 043 4811.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/ProfessionalService",
  "@id": "https://www.freshforlesswindowcleaning.co.uk/#business",
  name: "Fresh For Less Window Cleaning",
  description:
    "Professional pure-water window cleaning, gutter clearing, and conservatory cleaning across Wirral, Liverpool, Chester, Warrington and North Wales — streak-free results at affordable prices.",
  telephone: "0330 043 4811",
  email: "info@freshforlesswindowcleaning.co.uk",
  url: "https://www.freshforlesswindowcleaning.co.uk",
  image: "https://www.freshforlesswindowcleaning.co.uk/images/logo.png",
  logo: "https://www.freshforlesswindowcleaning.co.uk/images/logo.png",
  priceRange: "££",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Wirral" },
    { "@type": "City", name: "Liverpool" },
    { "@type": "City", name: "Chester" },
    { "@type": "City", name: "Warrington" },
    { "@type": "AdministrativeArea", name: "North Wales" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "07:00",
    closes: "19:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "2000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Window Cleaning Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Window Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Clearing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conservatory Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar Panel Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fascia & Soffit Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Window Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pressure Washing" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '613073519035884');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=613073519035884&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
