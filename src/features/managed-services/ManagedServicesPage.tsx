import HeroBanner from "@/components/ui/HeroBanner";
import NewsletterCTA from "@/components/ui/NewsletterCTA";
import ExpertTeam from "./ExpertTeam";
import CoreCompetence from "./CoreCompetence";
import ManagedServices from "./ManagedServices";

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
      <NewsletterCTA />
    </main>
  );
}
