"use client";

import React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { CompetencySectionItem } from "../data/service";

interface ContentProps {
  heading: string;
  description: string;
  footer: string;
  items: CompetencySectionItem[];
}

export const Content = ({ heading, description, footer, items }: ContentProps) => {
  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Left Column: Image */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[600px]">
              <Image
                src={"/images/placeholder-talenta.png"}
                alt="Talenta Illustration"
                width={600}
                height={684}
                className="object-contain"
              />
            </div>
          </m.div>

          {/* Right Column: Content */}
          <div>
            <div className="mb-8">
              <m.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-sm font-bold text-gray-900 tracking-widest uppercase mb-2 block"
              >
                {footer}
              </m.span>
              <m.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight"
              >
                {heading}
              </m.h2>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gray-600 text-lg leading-relaxed"
              >
                {description}
              </m.p>
            </div>

            <div className="space-y-8">
              {items.map((c, index) => (
                <div key={index}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-semibold text-gray-900">
                      {c.name}
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {c.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-brand-border-subtle rounded-full h-3 overflow-hidden">
                    <m.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.0,
                        ease: "easeOut",
                        delay: 0.3 + index * 0.1,
                      }}
                      // FIX: Menggunakan warna hardcoded 'blue-700'
                      className="bg-brand-primary h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};