import React from "react";
import Hero from "./Hero";
import dynamic from "next/dynamic";
// import Clients from "./Clients";
import { ClientLogos } from "@/features/layout/components/ClientLogos";
import { AboutUsHeader } from './AboutUsHeader'
import { AboutUsStat } from './AboutUsStat'
// Lazy Load komponen yang berat/ada di bawah
const BusinessFocus = dynamic(() => import("./BusinessFocus"));
const Solutions = dynamic(() => import("./Solutions"));
const Testimonials = dynamic(() => import("./Testimonials"));
const ContactSection = dynamic(() => import("./ContactSection"));
const ConsultationCTA = dynamic(() => import("@/features/layout/components/ConsultationCTA").then(mod => mod.ConsultationCTA));
import { WhatsAppFAB } from "@/features/layout/components/WhatsAppFAB";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ClientLogos />
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
