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
      <WhatsAppFAB />
    </main>
  );
};