import React from "react";
import Hero from "./Hero";
import Clients from "./Clients";
import Testimonials from "./Testimonials";
import Solutions from "./Solutions";
import WhyChooseUs from "./WhyChooseUs";
import VisionMission from "./VisionMission";
import ContactSection from "./ContactSection";
import NewsletterCTA from "@/components/ui/NewsletterCTA";

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
      <NewsletterCTA />
    </div>
  );
};

export default HomePage;
