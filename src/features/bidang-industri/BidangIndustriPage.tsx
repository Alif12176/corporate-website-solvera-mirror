import HeroBanner from "@/components/ui/HeroBanner";
import NewsletterCTA from "@/components/ui/NewsletterCTA";
import SectorSolutions from "./SectorSolutions";

export default function BidangIndustriPage() {
  return (
    <main>
      <HeroBanner
        imagePath="/images/img_factory2.jpg"
        title="Solusi Spesifik untuk Industri Anda"
        subtitle="Kami memahami bahwa setiap industri memiliki tantangan unik. Tim Subject Matter Expert (SME) kami hadir untuk menganalisis dan menyediakan solusi teknologi inovatif yang dirancang khusus untuk kebutuhan spesifik bisnis Anda"
      />
      <SectorSolutions />
      <NewsletterCTA />
    </main>
  );
}
