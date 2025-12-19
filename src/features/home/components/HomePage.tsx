import React from "react";
import Hero from "./Hero";
import Clients from "./Clients";
import { AboutUsHeader } from './AboutUsHeader'
import { AboutUsStat } from './AboutUsStat'
import BusinessFocus from "./BusinessFocus";
import Testimonials from "./Testimonials";
import Solutions from "./Solutions";
import ContactSection from "./ContactSection";
import { ConsultationCTA } from "@/features/layout/components/ConsultationCTA";
import { WhatsAppFAB } from "@/features/layout/components/WhatsAppFAB";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Clients />
      <AboutUsHeader />
      <AboutUsStat />
      <BusinessFocus />
      <Solutions />
      <Testimonials />
      <ContactSection />
      <ConsultationCTA />
      <WhatsAppFAB />
    </div>
  );
};

export default HomePage;
