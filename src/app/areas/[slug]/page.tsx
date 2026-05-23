import type { Metadata } from "next";
import { areas, getAreaBySlug, getCountyForRegion, getPostcodeForArea } from "@/data/areas";
import AreaPage from "@/components/AreaPage";

export function generateStaticParams() {
  return areas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  const name = area?.name ?? "Your Area";
  const county = area ? getCountyForRegion(area.region) : "UK";
  const postcode = area ? getPostcodeForArea(area) : "";
  const postcodeStr = postcode ? ` (${postcode})` : "";

  return {
    title: `Window Cleaning ${name}${postcodeStr} | ${county} Window Cleaners — Fresh For Less`,
    description: `Professional pure-water window cleaning in ${name}, ${county}${postcode ? ` ${postcode}` : ""} from £12 per clean. Frames, sills & doors included, streak-free guarantee. Free local quotes — call 0330 043 4811.`,
    alternates: {
      canonical: `https://www.freshforlesswindowcleaning.co.uk/areas/${slug}`,
    },
    openGraph: {
      title: `Window Cleaning in ${name}, ${county} | Fresh For Less`,
      description: `Local pure-water window cleaning in ${name}, ${county}. Streak-free finish from £12 per clean, frames & sills included, regular rounds available. Free quotes.`,
      type: "website",
      locale: "en_GB",
      siteName: "Fresh For Less Window Cleaning",
      url: `https://www.freshforlesswindowcleaning.co.uk/areas/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `Window Cleaning ${name} | Fresh For Less`,
      description: `Local window cleaning in ${name}${postcode ? ` (${postcode})` : ""} from £12 per clean. Free quotes — 0330 043 4811.`,
    },
  };
}

export default async function AreaPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <AreaPage slug={slug} />;
}
