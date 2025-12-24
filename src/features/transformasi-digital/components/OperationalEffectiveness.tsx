"use client";

import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Button } from "@/features/layout/components/Button";
import { RiCustomerService2Line, RiBarChartGroupedLine, RiDatabase2Line, RiRefreshLine } from "react-icons/ri";
import { m } from "framer-motion";
import { FocusSectionItem } from "../data/service";
import Image from "next/image";

interface OperationalEffectivenessProps {
  tagline: string;
  heading: string;
  description: string;
  items: FocusSectionItem[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const OperationalEffectiveness = ({ tagline, heading, description, items }: OperationalEffectivenessProps) => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="pelajari-lebih">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <m.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex flex-col gap-6"
          >
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">{tagline}</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
              {heading}
            </h2>
            <p className="text-foreground text-lg leading-relaxed">
              {description}
            </p>
            <div className="mt-4">
              <Button variant="default" size="lg" color="primary" className="px-6 py-2 rounded-md" as="a" href="#konsultasi">
                Pelajari Detailnya
              </Button>
            </div>
          </m.div>

          {/* Right Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, idx) => (
              <m.div
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                variants={fadeInUp}
              >
                <Card className="bg-brand-primary-subtle border-none shadow-sm hover:shadow-md transition-shadow h-full rounded-xl">
                  <CardBody className="p-6 flex flex-col gap-4">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={50}
                      height={50}
                    />
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardBody>
                </Card>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};