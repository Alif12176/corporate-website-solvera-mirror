import React from "react";
import Hero from "./Hero";
import Clients from "./Clients";
import Testimonials from "./Testimonials";
import Solutions from "./Solutions";
import WhyChooseUs from "./WhyChooseUs";
import VisionMission from "./VisionMission";
import ContactSection from "./ContactSection";
import { ConsultationCTA } from "@/features/layout/components/ConsultationCTA";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Clients />
      <Testimonials />
      <Solutions />
      <WhyChooseUs />
      <VisionMission />
      <ContactSection />
      <ConsultationCTA />
    </div>
  );
};

export default HomePage;
