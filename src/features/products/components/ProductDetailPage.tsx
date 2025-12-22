import Link from "next/link";
import { Hero } from "@/features/layout/components/Hero";
import { Button } from "@/features/layout/components/Button";
import { ConsultationCTA } from "@/features/layout/components/ConsultationCTA";
import { Product } from "../data/product";
import { ClientLogos } from "./ClientLogos";
import { ProductCTA } from "./ProductCTA";
import { ProductFAQ } from "./ProductFAQ";
import { Header } from "./ProductHeader";
import Tab from "./ProductTab";
import { ProductAdvantages } from './ProductAdvantages';

interface Props {
  product: Product;
}

export const ProductDetailPage = ({ product }: Props) => {

  const tab = product.features.map((feature, index) => {
    return {
      id: index,
      label: feature.tab_label,
    };
  });

  const isListDesaign = product.features.some((feature) => feature.type === "image_card");

  return (
    <div>
      <Hero
        image={product.hero_image}
        title={product.hero_title}
        subtitle={product.hero_subtitle}
        action={
          <div className="flex gap-4 justify-center">
            <Link href={"/hubungi-kami"}>
              <Button color="primary" radius="normal">
                Hubungi Kami
              </Button>
            </Link>
            <Link href={"/minta-demo"}>
              <Button variant="alternative" radius="normal">
                Minta Demo
              </Button>
            </Link>
          </div>
        }
      />


      {isListDesaign ? <ProductAdvantages features={product.features.map((feature, index) => {
        return {
          id: index,
          number: feature.sequence,
          title: feature.content_title,
          description: feature.content_description,
          points: feature.benefits,
          result: feature.content_description,
          image: feature.image_url,
          imageAlt: feature.content_title
        };
      })} /> : <Tab
        tab={tab}
        sectionTitle={{
          title: product.why_us[0]?.section_title || "",
          subtitle: product.why_us[0]?.section_subtitle || ""
        }}
        solution={product.features.map((feature, index) => {
          return {
            id: index,
            heading: feature.content_title,
            text: feature.content_description,
            list: feature.benefits,
          };
        })}
      />}

      <Header stat={product.why_us} />

      <ClientLogos />

      <ProductCTA product={product} />

      <ProductFAQ faqs={product.faqs} />
    </div>
  );
};
