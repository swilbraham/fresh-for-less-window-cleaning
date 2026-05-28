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
    default: "Window, Carpet, Upholstery & Bin Cleaning | Fresh For Less",
    template: "%s | Fresh For Less",
  },
  description:
    "Specialist window, carpet, upholstery and wheelie bin cleaning across Wirral, Liverpool, Chester, Warrington & North Wales. Honest prices, satisfaction guaranteed — call 0330 043 4811.",
  applicationName: "Fresh For Less Cleaning",
  authors: [{ name: "Fresh For Less Cleaning" }],
  keywords: [
    "window cleaning",
    "carpet cleaning",
    "upholstery cleaning",
    "wheelie bin cleaning",
    "sofa cleaning",
    "mattress cleaning",
    "window cleaning wirral",
    "carpet cleaning liverpool",
    "carpet cleaning chester",
    "upholstery cleaning warrington",
    "bin cleaning north wales",
    "pure water window cleaning",
    "hot water extraction carpet cleaning",
    "professional cleaners near me",
    "affordable cleaning services",
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
    siteName: "Fresh For Less Cleaning",
    url: "https://www.freshforlesswindowcleaning.co.uk",
    title: "Window, Carpet, Upholstery & Bin Cleaning | Fresh For Less",
    description:
      "Specialist window, carpet, upholstery and bin cleaning trusted by 2,000+ families across the North West. Honest prices, satisfaction guaranteed.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Window, Carpet, Upholstery & Bin Cleaning | Fresh For Less",
    description:
      "Window, carpet, upholstery and bin cleaning across the North West. Free quotes, satisfaction guaranteed. Call 0330 043 4811.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/ProfessionalService",
  "@id": "https://www.freshforlesswindowcleaning.co.uk/#business",
  name: "Fresh For Less Cleaning",
  description:
    "Specialist window, carpet, upholstery and wheelie bin cleaning across Wirral, Liverpool, Chester, Warrington and North Wales — professional results at honest, affordable prices.",
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
    name: "Cleaning Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Window Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpet Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Upholstery Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wheelie Bin Cleaning" } },
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
