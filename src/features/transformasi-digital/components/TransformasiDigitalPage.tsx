"use client";

import React from "react";
import { HeroSection } from "./HeroSection";
import { OperationalEffectiveness } from "./OperationalEffectiveness";
import { EnterpriseCompliance } from "./EnterpriseCompliance";
import { ConceptToCode } from "./ConceptToCode";
import { StructuredApproach } from "./StructuredApproach";
import { MeasuredExpertise } from "./MeasuredExpertise";
import { ConsultationCTA } from "@/features/layout/components/ConsultationCTA";
import { WhatsAppFAB } from "@/features/layout/components/WhatsAppFAB";
import { Service } from "../data/service";

export const TransformasiDigitalPage = ({ service }: { service: Service }) => {
  console.log("service", service);
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <HeroSection heading={service.hero.heading} tagline={service.hero.tagline} bg_image={service.hero.bg_image} />
      <OperationalEffectiveness tagline={service.focus_section.tagline} heading={service.focus_section.heading} description={service.focus_section.description} items={service.focus_section.items} />
      <EnterpriseCompliance layout={service.quick_steps_section.layout} heading={service.quick_steps_section.heading} subheading={service.quick_steps_section.subheading} footer={service.quick_steps_section.footer} items={service.quick_steps_section.items} />
      <ConceptToCode heading={service.offerings_section.heading} description={service.offerings_section.description} items={service.offerings_section.items} />
      <StructuredApproach layout={service.methodology_section.layout} heading={service.methodology_section.heading} description={service.methodology_section.description} footer={service.methodology_section.footer} items={service.methodology_section.items} />
      <MeasuredExpertise heading={service.competency_section.heading} description={service.competency_section.description} footer={service.competency_section.footer} items={service.competency_section.items} />
      <ConsultationCTA />
      <WhatsAppFAB />
    </main>
  );
};