import ExpertTeam from "./ExpertTeam";
import CoreCompetence from "./CoreCompetence";
import ManagedServices from "./ManagedServices";
import HeroBanner from "@/features/layout/components/HeroBanner";
import { ConsultationCTA } from "@/features/layout/components/ConsultationCTA";
import { EnterpriseCompliance } from "./EnterpriseCompliance";
import { WhatsAppFAB } from "@/features/layout/components/WhatsAppFAB";
import { Service } from "../data/service";

export default function ManagedServicesPage({ service }: { service: Service }) {
  return (
    <main>
      <HeroBanner
        imagePath={service.hero.bg_image}
        title={service.hero.heading}
        subtitle={service.hero.tagline}
      />
      <ManagedServices
        description={service.focus_section.description}
        heading={service.focus_section.heading}
        items={service.focus_section.items}
        tagline={service.focus_section.tagline}
      />
      <EnterpriseCompliance layout={service.quick_steps_section.layout} heading={service.quick_steps_section.heading} subheading={service.quick_steps_section.subheading} footer={service.quick_steps_section.footer} items={service.quick_steps_section.items} />
      <ExpertTeam description={service.methodology_section.description} footer={service.methodology_section.footer} heading={service.methodology_section.heading} items={service.methodology_section.items} layout={service.methodology_section.layout} />
      <CoreCompetence description={service.competency_section.description} footer={service.competency_section.footer} heading={service.competency_section.heading} items={service.competency_section.items} />
      <ConsultationCTA />
      <WhatsAppFAB />
    </main>
  );
}
