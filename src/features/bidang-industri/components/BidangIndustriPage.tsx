import { ConsultationCTA } from "@/features/layout/components/ConsultationCTA";
import { Hero } from "@/features/layout/components/Hero";
import { Button } from "@/features/layout/components/Button";
import { Suspense } from "react";
import { Spinner } from "@heroui/react";
import { Blog } from "@/features/products/components/ProductBlog";

export default function BidangIndustriPage() {
  return (
    <main>
      <Hero
        image='/images/img_factory2.webp'
        title="Solusi Spesifik untuk Industri Anda"
        subtitle='Kami memahami bahwa setiap industri memiliki tantangan unik. Tim Subject Matter Expert (SME) kami hadir untuk menganalisis dan menyediakan solusi teknologi inovatif yang dirancang khusus untuk kebutuhan spesifik bisnis Anda'
        action={
          <Button color="primary" radius='normal'>Lihat Layanan Kami</Button>} />
      <Suspense fallback={
        <div className="flex justify-center py-10"><Spinner /></div>}>
        <Blog />
      </Suspense>
      <ConsultationCTA />
    </main>
  );
}
