"use client";

import AnimatedSection from "../AnimatedSection";

const benefits = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "Pure-Water Window Cleaning",
    description: "Reach-and-wash poles use 100% de-ionised pure water to clean glass, frames, and sills up to 65ft — streak-free, ladder-free, every visit.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75 7.409 8.66a2.25 2.25 0 0 1 3.182 0l2.122 2.121a2.25 2.25 0 0 0 3.182 0l4.682-4.682M21.75 15.75V5.25H11.25" />
      </svg>
    ),
    title: "Deep Carpet Cleaning",
    description: "Industrial hot-water extraction lifts ground-in dirt, stains, and allergens from carpets, stairs, and rugs — touch-dry within hours, not days.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 0 1 0 1.953l-7.108 4.062A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 0 1 0 1.953l-7.108 4.062a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
      </svg>
    ),
    title: "Upholstery Refresh",
    description: "Fabric-safe extraction for sofas, armchairs, dining chairs, and mattresses — lifting body oils, pet hair, and odours that domestic vacuums leave behind.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    ),
    title: "Wheelie Bin Cleaning",
    description: "Hot-pressure jet wash with eco-friendly disinfectant kills 99.9% of bacteria, lifts trapped grime, and leaves bins smelling fresh for weeks.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Transparent, Affordable Pricing",
    description: "Upfront quotes with no hidden fees, no surprise charges, and no pressure. Bundle services and save — full-house refreshes from a single visit.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    ),
    title: "Satisfaction Guarantee",
    description: "If you're not happy with any clean, we'll come straight back and put it right — no quibble, no extra charge. Your peace of mind is built in.",
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
            Four Services. One Trusted Team.
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Professional Results. <br className="hidden sm:block" />
            Family-Friendly Prices.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Windows, carpets, upholstery, and wheelie bins — all covered by the same trusted local team, with commercial-grade kit and honest, upfront prices.
          </p>
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
