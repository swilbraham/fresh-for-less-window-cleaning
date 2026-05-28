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
    slug: "carpet-cleaning",
    title: "Carpet Cleaning",
    metaTitle: "Professional Carpet Cleaning | Fresh For Less",
    metaDescription:
      "Hot-water extraction carpet cleaning from £35 per room. Stains lifted, odours removed, carpets dry in hours. Free quotes. Call 0330 043 4811.",
  },
  {
    slug: "upholstery-cleaning",
    title: "Upholstery Cleaning",
    metaTitle: "Sofa & Upholstery Cleaning | Fresh For Less",
    metaDescription:
      "Deep upholstery cleaning for sofas, armchairs and mattresses from £35. Fabric-safe extraction that lifts dirt, stains and odours. Free quotes. Call 0330 043 4811.",
  },
  {
    slug: "bin-cleaning",
    title: "Wheelie Bin Cleaning",
    metaTitle: "Wheelie Bin Cleaning & Deodorising | Fresh For Less",
    metaDescription:
      "Hot-pressure bin cleaning and deodorising from £6 per bin. Kills bacteria, removes odours, leaves bins fresh. Regular rounds available. Call 0330 043 4811.",
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
