"use client";

import { m } from "framer-motion";
import { Users, ArrowDownUp } from "lucide-react";
import { FocusSectionItem } from "../data/service";
import Image from "next/image";

interface ManagedServicesProps {
  description: string;
  heading: string;
  items: FocusSectionItem[];
  tagline: string;
}

const services = [
  {
    icon: <Users className="w-8 h-8 text-foreground" />,
    title: "Akses Tim Ahli Multirole",
    description:
      "Dapatkan akses ke tim ahli multirole kami, termasuk programmer, analis bisnis, analis sistem, scrum master, dan manajer proyek. Kami siap membantu Anda mengatasi tantangan teknis dengan anggaran yang efisien dan terkelola.",
  },
  {
    icon: <ArrowDownUp className="w-8 h-8 text-foreground" />,
    title: "Skalabilitas Tim yang Fleksibel",
    description:
      "Selesaikan proyek khusus atau penuhi kebutuhan tahunan Anda tanpa perlu menambah staf tetap. Layanan kami menawarkan skalabilitas yang sesuai untuk proyek kecil hingga menengah, maupun untuk kebutuhan enterprise.",
  },
];

export default function ManagedServices({
  description,
  heading,
  items,
  tagline,
}: ManagedServicesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <m.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm font-bold text-foreground tracking-wide uppercase mb-2 block"
          >
            {tagline}
          </m.span>

          <m.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-brand-primary mb-6"
          >
            {heading}
          </m.h2>

          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-foreground text-lg leading-relaxed max-w-3xl mx-auto"
          >
            {description}
          </m.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="bg-brand-primary-subtle rounded-xl p-10 flex flex-col items-start text-left hover:shadow-md transition-shadow duration-300"
            >
              <Image src={item.icon} alt={item.title} width={50} height={50} className="mb-6" />

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-foreground leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
