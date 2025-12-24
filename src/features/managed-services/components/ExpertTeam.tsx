"use client";

import React from "react";
import { m, Variants } from "framer-motion";
import {
  ClipboardList,
  Award,
  LineChart,
  User,
  RefreshCw,
  TerminalSquare,
} from "lucide-react";
import { MethodologyItem } from "../data/service";
import Image from "next/image";

interface ExpertTeamProps {
  description: string;
  footer: string;
  heading: string;
  items: MethodologyItem[];
  layout: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function ExpertTeam({
  description,
  footer,
  heading,
  items,
  layout,
}: ExpertTeamProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <m.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm font-bold text-foreground tracking-wider uppercase mb-2 block"
          >
            {footer}
          </m.span>

          <m.h2
            initial={{ opacity: 0, y: -10 }}
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
            className="text-foreground text-base md:text-lg leading-relaxed"
          >
            {description}
          </m.p>
        </div>

        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {items.map((role, index) => (
            <m.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center px-4"
            >
              <Image
                src={role.icon}
                alt={role.title}
                width={50}
                height={50}
              />

              <h3 className="text-xl font-bold text-brand-primary mb-4">
                {role.title}
              </h3>

              <p className="text-foreground text-sm leading-relaxed">
                {role.description}
              </p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
