import ExpertTeam from "./ExpertTeam";
import CoreCompetence from "./CoreCompetence";
import ManagedServices from "./ManagedServices";
import HeroBanner from "@/features/layout/components/HeroBanner";
import { ConsultationCTA } from "@/features/layout/components/ConsultationCTA";
import { EnterpriseCompliance } from "./EnterpriseCompliance";
import { WhatsAppFAB } from "@/features/layout/components/WhatsAppFAB";

export default function ManagedServicesPage() {
  return (
    <main>
      <HeroBanner
        imagePath="/images/img_group1.webp"
        title="Layanan Managed Service & Operasional IT"
        subtitle="Solusi Managed Service kami mencakup monitoring 24/7[cite: 55], pemeliharaan, dan optimalisasi infrastruktur IT Anda secara proaktif. Tim profesional kami memastikan performa dan keandalan sistem secara maksimal untuk mendukung operasional bisnis Anda"
      />
      <ManagedServices />
      <EnterpriseCompliance/>
      <ExpertTeam />
      <CoreCompetence />
      <ConsultationCTA />
      <WhatsAppFAB />
    </main>
  );
}
