import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

const services = [
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    metaTitle: "Professional Window Cleaning | Fresh For Less",
    metaDescription:
      "Professional pure-water window cleaning from £12 per clean. Streak-free finish, frames and sills included, regular 4-weekly rounds. Free quotes. Call 0330 043 4811.",
  },
  {
    slug: "gutter-clearing",
    title: "Gutter Clearing",
    metaTitle: "Gutter Clearing & Cleaning | Fresh For Less",
    metaDescription:
      "Vacuum-pole gutter clearing from £55. Ladder-free, no mess, before-and-after photos. Free quotes. Call 0330 043 4811.",
  },
  {
    slug: "conservatory-cleaning",
    title: "Conservatory Cleaning",
    metaTitle: "Conservatory Roof & Glass Cleaning | Fresh For Less",
    metaDescription:
      "Conservatory cleaning from £45. Roof, glass, frames and gutters cleaned for a brighter conservatory. Free quotes. Call 0330 043 4811.",
  },
  {
    slug: "solar-panel-cleaning",
    title: "Solar Panel Cleaning",
    metaTitle: "Solar Panel Cleaning — Restore Efficiency | Fresh For Less",
    metaDescription:
      "Professional solar panel cleaning from £4 per panel. Pure-water clean to restore energy output. Free quotes. Call 0330 043 4811.",
  },
  {
    slug: "fascia-soffit-cleaning",
    title: "Fascia & Soffit Cleaning",
    metaTitle: "uPVC Fascia & Soffit Cleaning | Fresh For Less",
    metaDescription:
      "Fascia and soffit cleaning from £75. Bring tired uPVC back to life with our gentle exterior cleaning system. Free quotes. Call 0330 043 4811.",
  },
  {
    slug: "commercial-window-cleaning",
    title: "Commercial Window Cleaning",
    metaTitle: "Commercial Window Cleaning — Offices & Retail | Fresh For Less",
    metaDescription:
      "Professional commercial window cleaning for offices, shops, pubs and hospitality. Regular contracts and out-of-hours service. Free quotes. Call 0330 043 4811.",
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    metaTitle: "Pressure Washing — Patios, Driveways & Decking | Fresh For Less",
    metaDescription:
      "Professional pressure washing for driveways, patios, decking and paths from £80. Restore your outdoor spaces. Free quotes. Call 0330 043 4811.",
  },
];

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Fresh For Less",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://www.freshforlesswindowcleaning.co.uk/services/${service.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: "Fresh For Less Window Cleaning",
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://www.freshforlesswindowcleaning.co.uk/services/${service.slug}`,
    },
  };
}

export default async function ServicePageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServicePage slug={slug} />;
}
