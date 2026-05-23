"use client";

import AnimatedSection from "../AnimatedSection";

const benefits = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "Pure-Water Reach & Wash",
    description: "Our advanced water-fed pole system uses 100% pure, de-ionised water to clean glass and frames up to 65ft — leaving a spotless, streak-free finish every time.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "No Harsh Chemicals",
    description: "Pure water alone lifts dirt and grime — no detergents, no chemical residue, and no smears. Safe for your family, your pets, and the plants in your borders.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Transparent, Affordable Pricing",
    description: "No hidden fees, no surprise charges. We quote upfront and our prices are typically 20-30% less than other local cleaners — with a streak-free guarantee.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Frames, Sills & Doors Included",
    description: "We don't just do the glass. Every clean includes uPVC frames, sills, and front doors as standard — for a whole-window finish you can really see.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    ),
    title: "Streak-Free Guarantee",
    description: "If you spot a streak, smear, or missed window within 48 hours, we'll come back and re-clean at no extra charge. Your happiness is our promise.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
      </svg>
    ),
    title: "Residential & Commercial",
    description: "From terraced houses and bungalows to shopfronts and offices, we handle it all. Regular 4-weekly rounds or one-off cleans to suit your routine.",
  },
];

export default function Benefits() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 ring-1 ring-primary-100">
            The Fresh For Less Difference
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Professional Results. <br className="hidden sm:block" />
            Family-Friendly Prices.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            We combine professional water-fed pole equipment with pure de-ionised water to deliver a streak-free finish you can see — inside and out.
          </p>
        </AnimatedSection>

        {/* Family image banner */}
        <AnimatedSection className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/images/family-home.jpg"
            alt="Bright family home with sparkling clean windows"
            className="h-48 w-full object-cover sm:h-64 lg:h-72"
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={benefit.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 lg:p-8">
                {/* Frosted hover glow */}
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary-50 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 ring-1 ring-primary-100 transition-colors group-hover:bg-primary-100">
                    {benefit.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
