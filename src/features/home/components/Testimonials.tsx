"use client";

import { useRef } from "react";
import { m } from "framer-motion";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Manajer Proyek",
    company: "TELKOM INDONESIA",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Telkom_Indonesia_2013.svg/300px-Telkom_Indonesia_2013.svg.png?20130904020201",
    quote:
      "Saya sangat terkesan dengan respons cepat dan solusi inovatif yang mereka berikan. Tim ini benar-benar memahami kebutuhan bisnis kami.",
  },
  {
    id: 2,
    name: "Siti Aminah",
    role: "Direktur Pemasaran",
    company: "INDOMIE",
    logo: "https://cdn.worldvectorlogo.com/logos/indomie-1.svg",
    quote:
      "Layanan pelanggan mereka luar biasa! Setiap pertanyaan dijawab dengan cepat dan ramah. Saya merasa sangat dihargai sebagai pelanggan.",
  },
  {
    id: 3,
    name: "Joko Susilo",
    role: "CEO",
    company: "PERTAMINA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Pertamina_Logo.svg",
    quote:
      "Produk mereka berkualitas tinggi dan sangat membantu dalam meningkatkan efisiensi operasional perusahaan kami.",
  },
  {
    id: 4,
    name: "Andi Wijaya",
    role: "Head of IT",
    company: "BANK BRI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/1280px-BANK_BRI_logo.svg.png",
    quote:
      "Solusi yang ditawarkan sangat relevan dengan tantangan bisnis kami saat ini. Sangat profesional dan berdedikasi.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="px-2 relative">
        <div className="text-center mb-12">
          <m.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            className="text-sm font-semibold text-gray-500 uppercase tracking-wider block"
          >
            Testimonial
          </m.span>

          <m.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeInUp}
            className="text-4xl font-bold text-blue-900 mt-2 mb-4"
          >
            Apa Kata Mitra Kami
          </m.h2>

          <m.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Dengarkan langsung dari para pemimpin bisnis yang telah sukses
            bertransformasi bersama solusi dan konsultasi ahli dari Solvera.
          </m.p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-24 "
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TESTIMONIALS.map((item, index) => (
              <m.div
                key={item.id}
                className="min-w-[350px] md:min-w-[400px] bg-brand-primary-subtle p-8 rounded-2xl border border-brand-primary-subtle snap-center flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                variants={fadeInUp}
              >
                <div className="flex gap-1 text-blue-900 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-foreground text-lg leading-relaxed italic mb-8 grow">
                  "{item.quote}"
                </blockquote>

                <div className="mt-auto flex flex-col items-center">
                  <div className="h-10 mb-4 flex items-center justify-center">
                    <Image
                      src={item.logo}
                      alt={item.company}
                      width={120}
                      height={40}
                      className="h-full object-contain transition-all duration-300"
                      unoptimized
                    />
                  </div>
                  <h6 className="font-bold text-brand-primary">{item.name}</h6>
                  <p className="text-xs text-brand-primary font-semibold mt-1">
                    {item.company}
                  </p>
                  <p className="text-sm text-foreground uppercase">{item.role}</p>
                </div>
              </m.div>
            ))}
          </div>

          {/* BAYANGAN KANAN (Fade Transparent to White) */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

        <m.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-end gap-3 mt-4 md:absolute md:bottom-0 md:right-6 md:translate-y-full md:mr-16 mr-4"
        >
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 flex items-center justify-center rounded-lg border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 bg-white shadow-sm"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 flex items-center justify-center rounded-lg border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 bg-white shadow-sm"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </m.div>
      </div>
    </section>
  );
}
