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

  "carpet-cleaning": {
    title: "Carpet Cleaning",
    description:
      "Deep hot-water extraction that lifts ground-in dirt, stains, and allergens from your carpets — leaving them fresh, fluffed, and dry within a few hours.",
    heroSubtitle: "Like-New Carpets. Dry in Hours.",
    pricing: "Starting from £35 per room",
    features: [
      {
        icon: dropIcon,
        title: "Hot-Water Extraction",
        description:
          "Industrial-grade machines inject a heated cleaning solution deep into the pile and immediately extract it — pulling out trapped dirt, dust mites, and grime.",
      },
      {
        icon: sparkleIcon,
        title: "Stain & Spot Treatment",
        description:
          "Pre-treatment of red wine, coffee, tea, ink, pet stains, and traffic lanes — the worst marks are tackled before the main clean for the best possible result.",
      },
      {
        icon: shieldIcon,
        title: "Pet & Family Safe",
        description:
          "Non-toxic, hypoallergenic solutions that are safe for children and pets to be on the carpet again as soon as it's dry.",
      },
      {
        icon: clockIcon,
        title: "Dry Within 2-4 Hours",
        description:
          "Powerful extraction removes up to 95% of the moisture, so carpets are touch-dry in a couple of hours and fully dry the same day.",
      },
      {
        icon: homeIcon,
        title: "Stairs, Landings & Rugs",
        description:
          "We clean stairs, landings, hallways, and free-standing rugs at the same visit — whole-house carpet refresh in a single appointment.",
      },
      {
        icon: checkIcon,
        title: "Odour Neutralised",
        description:
          "Dedicated deodorising treatments break down odours from pets, smoke, and damp at the source — not just masking them.",
      },
    ],
    faqs: [
      {
        question: "How long do carpets take to dry?",
        answer:
          "Most carpets are touch-dry within 2-4 hours and completely dry the same day. We'll open windows and use air movers where needed to speed things up.",
      },
      {
        question: "Will old stains come out?",
        answer:
          "Most stains — including red wine, coffee, tea, and pet accidents — can be significantly reduced or fully removed. We'll always test in a discreet area first and give you an honest expectation before we start.",
      },
      {
        question: "Do I need to move my furniture?",
        answer:
          "We'll happily move lighter furniture as part of the clean. Heavier items like wardrobes and beds we work around — just let us know in advance so we can plan the room layout.",
      },
    ],
  },

  "upholstery-cleaning": {
    title: "Upholstery Cleaning",
    description:
      "Deep cleaning for sofas, armchairs, dining chairs, and mattresses that lifts ground-in dirt, body oils, and odours from fabric and fibres.",
    heroSubtitle: "Refresh Your Sofa. Restore Your Home.",
    pricing: "Starting from £35 per seat",
    features: [
      {
        icon: dropIcon,
        title: "Fabric-Safe Extraction",
        description:
          "Low-moisture hot-water extraction tuned for upholstery — deep clean without saturating cushions, frames, or foam.",
      },
      {
        icon: sparkleIcon,
        title: "Sofas, Chairs & Mattresses",
        description:
          "From 2-seater sofas and recliners through to dining chairs and double mattresses — we clean almost any fabric upholstery.",
      },
      {
        icon: shieldIcon,
        title: "Fabric Test First",
        description:
          "We patch-test every fabric in a hidden area before starting, so there's zero risk of bleeding, shrinkage, or watermarks.",
      },
      {
        icon: clockIcon,
        title: "Dry Same Day",
        description:
          "Specialist upholstery wands extract more water than they put in, so sofas and chairs are typically dry within 4-6 hours.",
      },
      {
        icon: homeIcon,
        title: "Pet Hair & Dander Removed",
        description:
          "Pre-vacuum and groom treatments lift embedded pet hair, dander, and dust mites that a domestic vacuum can't reach.",
      },
      {
        icon: checkIcon,
        title: "Odours Neutralised",
        description:
          "Specialist deodorisers tackle stubborn smells from pets, smoke, food, and sweat — leaving your furniture fresh, not perfumed.",
      },
    ],
    faqs: [
      {
        question: "How long does a sofa take to clean?",
        answer:
          "A 3-seater sofa typically takes 30-45 minutes including the cushions and arms. Larger corner units take around an hour.",
      },
      {
        question: "Can you clean leather?",
        answer:
          "We specialise in fabric upholstery. For leather sofas we recommend a dedicated leather conditioner — happy to point you toward a trusted specialist.",
      },
      {
        question: "How long until it's safe to sit on again?",
        answer:
          "We recommend allowing 4-6 hours before sitting on the upholstery, and 24 hours before replacing cushions or covers for the very best finish.",
      },
    ],
  },

  "bin-cleaning": {
    title: "Wheelie Bin Cleaning",
    description:
      "Hot-pressure wheelie bin cleaning that kills bacteria, lifts trapped grime, and leaves your bins smelling fresh — emptied or full, inside and out.",
    heroSubtitle: "Fresh Bins. No More Smells.",
    pricing: "Starting from £6 per bin",
    features: [
      {
        icon: dropIcon,
        title: "Hot-Pressure Jet Wash",
        description:
          "Specialist truck-mounted system blasts the inside of each bin with hot water at high pressure — lifting stuck-on waste and grime.",
      },
      {
        icon: shieldIcon,
        title: "Kills Bacteria & Germs",
        description:
          "Eco-friendly disinfectant kills 99.9% of bacteria, viruses, and germs that build up from rotting food and waste.",
      },
      {
        icon: sparkleIcon,
        title: "Long-Lasting Deodoriser",
        description:
          "A fragranced post-wash treatment leaves bins smelling fresh for weeks — no more lifting the lid and recoiling.",
      },
      {
        icon: clockIcon,
        title: "Regular Cleaning Rounds",
        description:
          "Monthly, quarterly, or one-off cleans timed for the day your bins are emptied — we do the work while they're outside.",
      },
      {
        icon: homeIcon,
        title: "Domestic & Commercial Bins",
        description:
          "All UK wheelie bin sizes catered for, from 140L household bins through to 1100L commercial Eurobins.",
      },
      {
        icon: checkIcon,
        title: "Eco-Friendly Wastewater",
        description:
          "All dirty water is captured on board and disposed of responsibly — nothing goes down the drains or into your garden.",
      },
    ],
    faqs: [
      {
        question: "Do my bins need to be empty?",
        answer:
          "Ideally yes — we clean on bin day, just after collection, while the bin is empty. If it's still got rubbish in it we'll either wait or rebook for the following collection.",
      },
      {
        question: "How often should I have them cleaned?",
        answer:
          "Monthly works well for general bins and food waste containers. Quarterly is plenty for recycling bins. We'll recommend a frequency that suits your household.",
      },
      {
        question: "What happens to the dirty water?",
        answer:
          "All wastewater is captured in a sealed tank on the truck and disposed of at a licensed waste facility — nothing goes into drains, gutters, or your garden.",
      },
    ],
  },

};

const whyChooseUsPoints = [
  { title: "Fully Insured", description: "£5m public liability cover for complete peace of mind." },
  { title: "DBS Checked", description: "All our cleaners are DBS checked for your security." },
  { title: "Professional Equipment", description: "Commercial-grade kit for windows, carpets, upholstery and bins." },
  { title: "No Hidden Fees", description: "Transparent pricing with no surprises on the day." },
  { title: "Satisfaction Guarantee", description: "Spot an issue? We'll come back and put it right for free." },
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
                Ready to Book Your {service.title}?
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
