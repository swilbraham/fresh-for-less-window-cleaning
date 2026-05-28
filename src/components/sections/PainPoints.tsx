"use client";

import AnimatedSection from "../AnimatedSection";

const painPoints = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
    title: "Streaks, Smears & Watermarks",
    description:
      "You spend hours polishing the glass only for the sun to highlight every streak. DIY sprays and squeegees just push the dirt around — and ladders aren't worth the risk.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75 7.409 8.66a2.25 2.25 0 0 1 3.182 0l2.122 2.121a2.25 2.25 0 0 0 3.182 0l4.682-4.682M21.75 15.75V5.25H11.25" />
      </svg>
    ),
    title: "Stained, Tired Carpets",
    description:
      "Hoovering only reaches the surface. Years of foot traffic, spills, and pet accidents build up deep in the pile — and a hire-it-yourself machine just wets it back up.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 0 1 0 1.953l-7.108 4.062A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 0 1 0 1.953l-7.108 4.062a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
      </svg>
    ),
    title: "Sofas That Smell Their Age",
    description:
      "Your favourite armchair has soaked up years of pets, takeaways, and spilled tea. Cushions can't go in the washing machine — and replacing the sofa is a small fortune.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    ),
    title: "Bins That Make You Recoil",
    description:
      "Hot summer days, rotting food, and last week's nappies — the smell hits you every time you lift the lid. A hose at the kerb just doesn't cut through it.",
  },
];

export default function PainPoints() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-slate-100)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 ring-1 ring-red-100">
            Sound Familiar?
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            The Jobs You Keep Putting Off
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Dirty windows, tired carpets, smelly sofas, and grim bins — they all chip away at how your home feels. We tackle the lot, so you don't have to.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {painPoints.map((point, i) => (
            <AnimatedSection key={point.title} delay={i * 0.1}>
              <div className="group relative h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-lg lg:p-8">
                {/* Frosted glass accent */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-red-50 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500 ring-1 ring-red-100">
                    {point.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{point.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
