"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../AnimatedSection";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialise in four core services: pure-water window cleaning, hot-water extraction carpet cleaning, deep upholstery cleaning for sofas and mattresses, and hot-pressure wheelie bin cleaning. You can book one or bundle several in a single visit.",
  },
  {
    question: "Can I book more than one service at the same visit?",
    answer:
      "Absolutely \u2014 in fact, we encourage it. Combining two or more services in one appointment saves you up to 15% and means a single trip from our team.",
  },
  {
    question: "How long does a typical job take?",
    answer:
      "A semi-detached window clean takes 20-30 minutes. A 3-bed carpet clean is around 90 minutes. A 3-seater sofa takes 30-45 minutes. Bin cleans are a few minutes each on the kerb.",
  },
  {
    question: "Do I need to be home?",
    answer:
      "Not for window or bin cleaning \u2014 we just need access. For carpet and upholstery cleaning we ask that someone over 18 is home to let us in and walk through the rooms.",
  },
  {
    question: "How long do carpets and sofas take to dry?",
    answer:
      "Most carpets are touch-dry in 2-4 hours and fully dry the same day. Sofas and armchairs are typically dry within 4-6 hours. We'll open windows and use air movers where needed.",
  },
  {
    question: "Are your products safe for pets and kids?",
    answer:
      "Yes \u2014 all of our cleaning solutions are non-toxic and hypoallergenic. Carpets and upholstery are safe for children and pets to use again as soon as they're dry.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Window cleaning starts at \u00a312 per clean, carpet cleaning from \u00a335 per room, upholstery from \u00a335 per seat, and wheelie bin cleaning from \u00a36 per bin. See the pricing section for more or request a tailored quote.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We cover the Wirral, Liverpool, Chester, Warrington, Runcorn, and North Wales. Check our area pages for a full list or contact us to check if we serve your location.",
  },
  {
    question: "How do I pay?",
    answer:
      "We accept card payments, bank transfers, and direct debit for regular customers. No cash needed \u2014 we\u2019ll send a payment link by text after each clean.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-white py-24 sm:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 ring-1 ring-primary-200/60">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
            Got Questions?
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about our window, carpet, upholstery, and bin cleaning services. Can't find your answer? Get in touch and we'll be happy to help.
          </p>
        </AnimatedSection>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
                    isOpen
                      ? "border-primary-200 bg-primary-50/30"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span
                      className={`text-base font-semibold transition-colors duration-200 ${
                        isOpen ? "text-primary-700" : "text-slate-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className={`flex-shrink-0 ${
                        isOpen ? "text-primary-600" : "text-slate-400"
                      }`}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-base leading-relaxed text-slate-600">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
