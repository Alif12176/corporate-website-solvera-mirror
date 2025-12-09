import ExpertTeam from "./ExpertTeam";
import CoreCompetence from "./CoreCompetence";
import ManagedServices from "./ManagedServices";
import HeroBanner from "@/features/layout/components/HeroBanner";
import { ConsultationCTA } from "@/features/layout/components/ConsultationCTA";

export default function ManagedServicesPage() {
  return (
    <main>
      <HeroBanner
        imagePath="/images/img_group1.jpg"
        title="Layanan Managed Service & Operasional IT"
        subtitle="Solusi Managed Service kami mencakup monitoring 24/7[cite: 55], pemeliharaan, dan optimalisasi infrastruktur IT Anda secara proaktif. Tim profesional kami memastikan performa dan keandalan sistem secara maksimal untuk mendukung operasional bisnis Anda"
      />
      <ManagedServices />
      <ExpertTeam />
      <CoreCompetence />
      <ConsultationCTA />
    </main>
  );
}
