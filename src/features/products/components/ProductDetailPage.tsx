import { Hero } from "@/features/layout/components/Hero";
import { Product } from "../data/product";
import { Button } from "@/features/layout/components/Button";
import Tab from "./ProductTab";
import { Header } from "./ProductHeader";
import { ProductFAQ } from "./ProductFAQ";
import { ConsultationCTA } from "@/features/layout/components/ConsultationCTA";
import { ProductCTA } from "./ProductCTA";

interface Props {
  product: Product;
}

export const ProductDetailPage = ({ product }: Props) => {
  return (
    <div>
      <Hero
        image={"/images/hero-detail.png"}
        title={product.hero_title}
        subtitle={product.hero_subtitle}
        action={
          <div className="flex gap-4 justify-center">
            <Button color="primary" radius="normal">
              Hubungi Kami
            </Button>
            <Button variant="alternative" radius="normal">
              Minta Demo
            </Button>
          </div>
        }
      />
      {/* <Tab />
       */}

      <Header stat={product.why_us}/>
       
      <ProductCTA /> 

      <ProductFAQ faqs={product.faqs} />
    </div>
  );
};
