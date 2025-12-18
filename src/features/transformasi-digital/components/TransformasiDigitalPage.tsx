"use client";

import React from "react";
import { HeroSection } from "./HeroSection";
import { OperationalEffectiveness } from "./OperationalEffectiveness";
import { EnterpriseCompliance } from "./EnterpriseCompliance";
import { ConceptToCode } from "./ConceptToCode";
import { StructuredApproach } from "./StructuredApproach";
import { MeasuredExpertise } from "./MeasuredExpertise";
import { ConsultationCTA } from "@/features/layout/components/ConsultationCTA"; // Asumsi path CTA global

export const TransformasiDigitalPage = () => {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <HeroSection />
      <OperationalEffectiveness />
      <EnterpriseCompliance />
      <ConceptToCode />
      <StructuredApproach />
      <MeasuredExpertise />
      <ConsultationCTA />
    </main>
  );
};