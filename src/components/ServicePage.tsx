"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceFAQ {
  question: string;
  answer: string;
}

interface ServiceData {
  title: string;
  description: string;
  heroSubtitle: string;
  pricing: string;
  features: ServiceFeature[];
  faqs: ServiceFAQ[];
}

const checkIcon = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const dropIcon = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
  </svg>
);

const sparkleIcon = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
  </svg>
);

const shieldIcon = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);

const clockIcon = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const homeIcon = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const sunIcon = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
);

const buildingIcon = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
);

const servicesData: Record<string, ServiceData> = {
  "window-cleaning": {
    title: "Window Cleaning",
    description:
      "Professional pure-water window cleaning that leaves glass, frames, and sills spotless — no streaks, no smears, no ladders against your walls.",
    heroSubtitle: "Sparkling Glass. Streak-Free. Affordable.",
    pricing: "Starting from £12 per clean",
    features: [
      {
        icon: dropIcon,
        title: "Pure-Water Reach & Wash",
        description:
          "100% de-ionised pure water lifts dirt from the glass and dries naturally to a streak-free finish — no detergents, no residue.",
      },
      {
        icon: sparkleIcon,
        title: "Frames, Sills & Doors Included",
        description:
          "We clean the uPVC frames and sills at the same time as the glass, and wipe down your front door — every visit, as standard.",
      },
      {
        icon: homeIcon,
        title: "Up To 65ft Reach",
        description:
          "Our carbon-fibre water-fed poles reach upstairs windows, dormers, and tricky access points without a ladder ever touching the wall.",
      },
      {
        icon: clockIcon,
        title: "Reliable 4-Weekly Rounds",
        description:
          "We turn up like clockwork on regular 4 or 8-weekly rounds and send a text or email the day before each visit.",
      },
      {
        icon: shieldIcon,
        title: "Streak-Free Guarantee",
        description:
          "Spot a streak or missed window within 48 hours? We'll come straight back and re-clean it free of charge.",
      },
      {
        icon: checkIcon,
        title: "Fully Insured",
        description:
          "£5m public liability insurance for complete peace of mind — for you, your home, and your neighbours.",
      },
    ],
    faqs: [
      {
        question: "How does pure-water window cleaning work?",
        answer:
          "We filter mains water through a multi-stage de-ionising system that removes 100% of the minerals. The pure water is fed up a carbon-fibre pole to a brush, which scrubs the glass and rinses it clean. Because the water is mineral-free it dries naturally with no spots or streaks.",
      },
      {
        question: "How long does a typical window clean take?",
        answer:
          "A 3-bedroom semi-detached takes around 20-30 minutes. Larger detached homes or properties with conservatories usually take 45-60 minutes.",
      },
      {
        question: "How often should I have my windows cleaned?",
        answer:
          "Most of our customers opt for a 4-weekly clean to keep windows consistently sparkling. We also offer 8-weekly and one-off cleans depending on your preference.",
      },
    ],
  },

  "gutter-clearing": {
    title: "Gutter Clearing",
    description:
      "Powerful vacuum-pole gutter clearance that empties leaves, moss, and debris from your gutters — no ladders, no mess, no fuss.",
    heroSubtitle: "Clear Gutters. Dry Walls. No Ladders.",
    pricing: "Starting from £55",
    features: [
      {
        icon: dropIcon,
        title: "Vacuum-Pole System",
        description:
          "Industrial vacuum and carbon-fibre poles let us clear gutters from the ground — up to four stories high, safely and quickly.",
      },
      {
        icon: sunIcon,
        title: "Before & After Photos",
        description:
          "We take camera-on-a-pole footage of every gutter so you can see exactly what we found and what we've cleared.",
      },
      {
        icon: shieldIcon,
        title: "No Damage to Roof Tiles",
        description:
          "Working from the ground means no ladders leaning on your gutters and no walking on your roof tiles — zero risk of damage.",
      },
      {
        icon: homeIcon,
        title: "All Debris Bagged & Removed",
        description:
          "Leaves, moss, and silt are bagged and taken away. We sweep up around the property and leave it tidier than we found it.",
      },
      {
        icon: checkIcon,
        title: "Fast Same-Week Service",
        description:
          "Blocked gutters can't wait. We aim to fit emergency gutter clearance jobs into the next available slot, usually within a week.",
      },
      {
        icon: clockIcon,
        title: "Annual Maintenance Plans",
        description:
          "Book a yearly gutter clear at a discounted rate to keep blockages, leaks, and damp walls a thing of the past.",
      },
    ],
    faqs: [
      {
        question: "How do you clear gutters without a ladder?",
        answer:
          "We use an industrial wet/dry vacuum connected to carbon-fibre poles up to 40ft long. The pole reaches into the gutter and suctions out leaves, moss, and silt directly into a sealed unit on the ground.",
      },
      {
        question: "How often should gutters be cleared?",
        answer:
          "Most homes benefit from a clear at least once a year — ideally in late autumn after the leaves have fallen. Homes near trees may need two clears a year.",
      },
      {
        question: "What if there's a downpipe blockage?",
        answer:
          "We can rod and flush downpipes as part of a gutter clear. If there's a more serious blockage we'll quote separately before any extra work.",
      },
    ],
  },

  "conservatory-cleaning": {
    title: "Conservatory Cleaning",
    description:
      "Bring the light back into your conservatory with a full clean of the roof, glass, frames, and gutters. We make the whole structure look like new.",
    heroSubtitle: "Let the Light Back In.",
    pricing: "Starting from £45",
    features: [
      {
        icon: dropIcon,
        title: "Roof, Glass & Frames",
        description:
          "Full pure-water clean of the conservatory roof, side glass, and uPVC frames — top to bottom.",
      },
      {
        icon: sparkleIcon,
        title: "Algae & Moss Treatment",
        description:
          "We treat and remove green algae, black mould, and moss build-up on roof panels and frames.",
      },
      {
        icon: sunIcon,
        title: "Conservatory Gutters Cleared",
        description:
          "Often forgotten — we clear the small gutters around your conservatory roof to stop overflow and stains down the glass.",
      },
      {
        icon: shieldIcon,
        title: "Safe For All Roof Types",
        description:
          "Polycarbonate, glass, or hybrid roofs — we use the right brushes and pressure for your roof type, with zero risk of scratching.",
      },
      {
        icon: homeIcon,
        title: "Internal Glass Available",
        description:
          "Ask us to clean the inside of the glass at the same time for a perfectly bright, dust-free finish.",
      },
      {
        icon: checkIcon,
        title: "Brighter, Warmer Room",
        description:
          "A clean conservatory roof transforms how the room looks and feels — more daylight, no green tinge, no streaky shadows.",
      },
    ],
    faqs: [
      {
        question: "Can you clean a polycarbonate conservatory roof?",
        answer:
          "Yes — we use soft brushes and low-pressure pure water that are completely safe for polycarbonate, glass, and hybrid roofs.",
      },
      {
        question: "How long does a conservatory clean take?",
        answer:
          "Most standard conservatories take 1-2 hours including the roof, frames, glass, and gutters.",
      },
      {
        question: "How often should the roof be cleaned?",
        answer:
          "We recommend an annual clean for conservatory roofs, ideally before spring, to remove the winter build-up of moss and algae.",
      },
    ],
  },

  "solar-panel-cleaning": {
    title: "Solar Panel Cleaning",
    description:
      "Restore lost efficiency by removing dirt, pollen, and bird droppings from your solar panels with our specialist pure-water clean.",
    heroSubtitle: "Restore Lost Energy. Boost Output.",
    pricing: "Starting from £4 per panel",
    features: [
      {
        icon: sunIcon,
        title: "Restores Energy Output",
        description:
          "Dirty panels can lose up to 25% of their output. A regular clean keeps your system generating at its best.",
      },
      {
        icon: dropIcon,
        title: "Pure-Water Reach & Wash",
        description:
          "100% de-ionised water and soft brushes safely lift dirt, pollen, and bird droppings — no scratches, no streaks.",
      },
      {
        icon: shieldIcon,
        title: "No Roof Access Needed",
        description:
          "We clean from the ground using extendable poles, so no one walks on your roof and no panels are at risk of damage.",
      },
      {
        icon: homeIcon,
        title: "Domestic & Commercial",
        description:
          "From small domestic arrays to large commercial installations — we have the equipment for any size system.",
      },
      {
        icon: clockIcon,
        title: "Annual Cleaning Plans",
        description:
          "Discounted rates for yearly or twice-yearly cleans to maintain peak performance and protect your investment.",
      },
      {
        icon: checkIcon,
        title: "Fully Insured",
        description:
          "£5m public liability cover with method statements available for commercial sites on request.",
      },
    ],
    faqs: [
      {
        question: "Will cleaning improve my solar output?",
        answer:
          "Yes — independent studies show that dirty panels can lose between 5% and 25% of output. Regular cleaning typically pays for itself many times over in extra generation.",
      },
      {
        question: "How often should solar panels be cleaned?",
        answer:
          "Annual cleaning is suitable for most domestic installations. Properties near trees, farms, or busy roads may benefit from twice-yearly cleans.",
      },
      {
        question: "Do you use chemicals on the panels?",
        answer:
          "No — pure de-ionised water only. Detergents and chemicals can leave residue that attracts dirt and risks invalidating panel warranties.",
      },
    ],
  },

  "fascia-soffit-cleaning": {
    title: "Fascia & Soffit Cleaning",
    description:
      "Bring tired, dirty uPVC fascias, soffits, and cladding back to life with our gentle, ladder-free exterior cleaning system.",
    heroSubtitle: "Like-New uPVC. No Ladders.",
    pricing: "Starting from £75",
    features: [
      {
        icon: sparkleIcon,
        title: "Removes Green Algae",
        description:
          "Effective treatment for green algae, black streaks, and oxidation marks on white uPVC fascias and soffits.",
      },
      {
        icon: shieldIcon,
        title: "Safe For All uPVC",
        description:
          "Our specialist cleaning solutions are non-abrasive and safe for all colours and finishes of uPVC trim.",
      },
      {
        icon: homeIcon,
        title: "Cladding & Bargeboards",
        description:
          "Full exterior clean including bargeboards, fascias, soffits, and uPVC cladding for a complete refresh.",
      },
      {
        icon: dropIcon,
        title: "Pure-Water Rinse",
        description:
          "We finish with a pure-water rinse so there's no residue, no streaks, and no chemical run-off to harm plants.",
      },
      {
        icon: sunIcon,
        title: "Transforms Kerb Appeal",
        description:
          "Clean white uPVC instantly lifts the look of your home — perfect before selling, painting, or just to feel proud of your house again.",
      },
      {
        icon: checkIcon,
        title: "Combine With Other Services",
        description:
          "Bundle with a window clean or gutter clear and save — book a full exterior package for the best price.",
      },
    ],
    faqs: [
      {
        question: "Will the cleaning solution damage my plants?",
        answer:
          "No — we wet down nearby planting beforehand and finish with a pure-water rinse. The solutions we use break down quickly and won't harm plants.",
      },
      {
        question: "Can you clean cream or coloured uPVC?",
        answer:
          "Yes — we use products and techniques that are safe for all uPVC colours, including cream, anthracite grey, and woodgrain effect.",
      },
      {
        question: "How long does it last?",
        answer:
          "A proper clean typically lasts 2-3 years before re-cleaning is needed, depending on local environment and the amount of overhanging tree cover.",
      },
    ],
  },

  "commercial-window-cleaning": {
    title: "Commercial Window Cleaning",
    description:
      "Reliable, scheduled window cleaning for offices, shopfronts, pubs, and commercial premises across the North West.",
    heroSubtitle: "Spotless Premises. Reliable Service.",
    pricing: "Price on Application",
    features: [
      {
        icon: buildingIcon,
        title: "Offices & Business Parks",
        description:
          "Internal and external window cleaning for offices of all sizes, from small suites to multi-floor business parks.",
      },
      {
        icon: homeIcon,
        title: "Shopfronts & Retail",
        description:
          "Keep your shopfront looking immaculate for customers with daily, weekly, or fortnightly cleans tailored to footfall.",
      },
      {
        icon: clockIcon,
        title: "Out-of-Hours Service",
        description:
          "Early morning, evening, and weekend cleans available so there's no disruption to your business or customers.",
      },
      {
        icon: shieldIcon,
        title: "Fully Insured & RAMS",
        description:
          "£5m public liability cover with risk assessments and method statements provided for every commercial site.",
      },
      {
        icon: dropIcon,
        title: "Up to 65ft Reach",
        description:
          "Pure-water reach-and-wash systems handle most commercial buildings without scaffolding, cherry-pickers, or rope access.",
      },
      {
        icon: checkIcon,
        title: "Single Invoice Contracts",
        description:
          "Simple monthly invoicing with one point of contact, regardless of how many sites or visits per month.",
      },
    ],
    faqs: [
      {
        question: "Do you do one-off commercial cleans?",
        answer:
          "Yes — we're happy to provide one-off cleans for office moves, end-of-lease, or seasonal refreshes. Contact us for a quick quote.",
      },
      {
        question: "Can you provide RAMS and insurance documentation?",
        answer:
          "Yes — we provide full risk assessments, method statements, and our £5m public liability insurance certificate before starting any commercial contract.",
      },
      {
        question: "What about high-rise buildings?",
        answer:
          "Our reach-and-wash poles handle buildings up to roughly 65ft. For taller buildings we work with vetted partners for rope access or cherry-picker work.",
      },
    ],
  },

  "pressure-washing": {
    title: "Pressure Washing",
    description:
      "Professional pressure washing to restore driveways, patios, paths, and decking — removing years of dirt, moss, and algae in a single visit.",
    heroSubtitle: "Restore Your Outdoor Spaces.",
    pricing: "Starting from £80",
    features: [
      {
        icon: dropIcon,
        title: "Driveways & Block Paving",
        description:
          "Powerful flat-surface cleaners lift dirt and weeds from block paving, concrete, and tarmac driveways.",
      },
      {
        icon: homeIcon,
        title: "Patios & Paths",
        description:
          "Restore patios, garden paths, and pavers to their original colour with our pressure washing and detergent treatment.",
      },
      {
        icon: sparkleIcon,
        title: "Decking Refresh",
        description:
          "Gentle pressure cleaning safely removes algae and grey weathering from timber and composite decking.",
      },
      {
        icon: shieldIcon,
        title: "Optional Re-Sanding",
        description:
          "Kiln-dried sand brushed back into the joints after the clean to lock pavers in place and slow weed regrowth.",
      },
      {
        icon: sunIcon,
        title: "Sealing Available",
        description:
          "Optional sealant application to protect cleaned surfaces from staining, weeds, and weather damage for years to come.",
      },
      {
        icon: checkIcon,
        title: "Tidy & Insured",
        description:
          "We sweep and rinse away all debris and silt at the end of the job — fully insured for complete peace of mind.",
      },
    ],
    faqs: [
      {
        question: "Will pressure washing damage my paving?",
        answer:
          "No — when done correctly with the right pressure and equipment, it's completely safe. We adjust pressure to suit your surface, whether that's concrete, natural stone, or timber decking.",
      },
      {
        question: "How long does a typical driveway take?",
        answer:
          "Most driveways take 2-4 hours depending on size, condition, and whether you opt for re-sanding or sealing afterwards.",
      },
      {
        question: "Do I need to do anything to prepare?",
        answer:
          "Just move any cars, planters, or furniture off the area to be cleaned. We'll handle the rest, including covering any sensitive plants nearby.",
      },
    ],
  },
};

const whyChooseUsPoints = [
  { title: "Fully Insured", description: "£5m public liability cover for complete peace of mind." },
  { title: "DBS Checked", description: "All our cleaners are DBS checked for your security." },
  { title: "Pure-Water System", description: "Streak-free finish with zero chemical residue." },
  { title: "No Hidden Fees", description: "Transparent pricing with no surprises on the day." },
  { title: "Streak-Free Guarantee", description: "Spot an issue? We'll come back and re-clean for free." },
  { title: "5-Star Rated", description: "Trusted by thousands of happy customers across the region." },
];

function FAQItem({ faq, index }: { faq: ServiceFAQ; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="rounded-xl border border-slate-200 bg-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between px-6 py-5 text-left"
        >
          <span className="pr-4 text-base font-semibold text-slate-900">{faq.question}</span>
          <svg
            className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        {isOpen && (
          <div className="border-t border-slate-100 px-6 pb-5 pt-4">
            <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

export default function ServicePage({ slug }: { slug: string }) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const openQuote = () => setQuoteOpen(true);
  const closeQuote = () => setQuoteOpen(false);

  const service = servicesData[slug];

  const serviceSchema = service ? {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Fresh For Less Window Cleaning",
      telephone: "0330 043 4811",
      url: "https://www.freshforlesswindowcleaning.co.uk",
    },
    url: `https://www.freshforlesswindowcleaning.co.uk/services/${slug}`,
    areaServed: [
      { "@type": "City", name: "Liverpool" },
      { "@type": "City", name: "Chester" },
      { "@type": "City", name: "Warrington" },
      { "@type": "AdministrativeArea", name: "Wirral" },
      { "@type": "AdministrativeArea", name: "North Wales" },
    ],
  } : null;

  const faqSchema = service ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  const breadcrumbSchema = service ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freshforlesswindowcleaning.co.uk/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.freshforlesswindowcleaning.co.uk/services/" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://www.freshforlesswindowcleaning.co.uk/services/${slug}` },
    ],
  } : null;

  if (!service) {
    return (
      <>
        <Navbar onQuoteClick={openQuote} />
        <main className="flex min-h-screen items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900">Service Not Found</h1>
            <a href="/" className="mt-4 inline-block text-primary-600 hover:underline">
              Back to Home
            </a>
          </div>
        </main>
        <Footer />
        <QuoteModal isOpen={quoteOpen} onClose={closeQuote} />
      </>
    );
  }

  return (
    <>
      <Navbar onQuoteClick={openQuote} />
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-600/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent-600/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mx-auto max-w-3xl text-center"
            >
              <a
                href="/"
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Back to Home
              </a>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-3 text-lg font-medium text-primary-300 sm:text-xl">
                {service.heroSubtitle}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                {service.description}
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <button
                  onClick={openQuote}
                  className="w-full rounded-xl bg-accent-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-700 hover:shadow-accent-600/40 active:scale-[0.98] sm:w-auto"
                >
                  Get a Free Quote
                </button>
                <a
                  href="tel:03300434811"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-[0.98] sm:w-auto"
                >
                  <svg className="h-5 w-5 text-accent-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  0330 043 4811
                </a>
              </div>

              <div className="mt-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
                  <svg className="h-4 w-4 text-accent-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                  {service.pricing}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  What's Included
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Everything you get with our {service.title.toLowerCase()} service.
                </p>
              </div>
            </AnimatedSection>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={index * 0.1}>
                  <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-primary-200 hover:shadow-lg hover:shadow-primary-600/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                      {feature.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Why Choose Fresh For Less
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Trusted by thousands of customers for professional, reliable cleaning.
                </p>
              </div>
            </AnimatedSection>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUsPoints.map((point, index) => (
                <AnimatedSection key={point.title} delay={index * 0.1}>
                  <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50">
                      <svg className="h-5 w-5 text-accent-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{point.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{point.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Common questions about our {service.title.toLowerCase()} service.
                </p>
              </div>
            </AnimatedSection>

            <div className="mt-10 space-y-4">
              {service.faqs.map((faq, index) => (
                <FAQItem key={faq.question} faq={faq} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready for Sparkling {service.title}?
              </h2>
              <p className="mt-4 text-lg text-primary-100">
                Get a free, no-obligation quote today. We respond within 2 hours.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <button
                  onClick={openQuote}
                  className="w-full rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-700 shadow-lg transition-all hover:bg-primary-50 active:scale-[0.98] sm:w-auto"
                >
                  Get Your Free Quote
                </button>
                <a
                  href="tel:03300434811"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 active:scale-[0.98] sm:w-auto"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  Call 0330 043 4811
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={closeQuote} />
      <WhatsAppButton />
    </>
  );
}
