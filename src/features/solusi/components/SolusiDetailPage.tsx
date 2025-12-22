import React from "react";
import { Solution } from "../data/solutions";
import { Hero } from "@/features/layout/components/Hero";
import Link from "next/link";
import { Button } from "@/features/layout/components/Button";
import Tab from "@/features/layout/components/Tab";
import { SolusiCoreFeatures } from "./SolusiCoreFeatures";
import { SolusiRelatedIndustries } from "./SolusiRelatedIndustries";
import { SolusiAdvantages } from "./SolusiAdvantages";
import { SectionCTA } from "@/features/layout/components/SectionCTA";
import { ClientLogos } from "@/features/layout/components/ClientLogos";
import { SolusiFAQ } from "./SolusiFAQ";
import { ConsultationCTA } from "@/features/layout/components/ConsultationCTA";


interface Props {
    solution: Solution;
}

export const SolusiDetailPage = ({ solution }: Props) => {

    // console.log(solution);

    const tab = solution.core_benefits.map((benefit, index) => {
        return {
            id: index,
            label: benefit.tab_label,
        };
    });

    return (
        <div>
            <Hero
                image={solution.hero_image}
                title={solution.hero_title}
                subtitle={solution.hero_subtitle}
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

            <Tab
                tab={tab}
                sectionTitle={{
                    title: solution.core_benefits[0].section_title || "Manfaat Utama untuk Sales Management Anda",
                    subtitle: solution.core_benefits[0].section_subtitle || "Solusi untuk Sales Management yang membantu tim bekerja lebih efektif dan terukur.",
                }}
                solution={solution.core_benefits.map((feature, index) => {
                    return {
                        id: index,
                        heading: feature.content_title,
                        text: feature.content_description,
                        list: feature.values,
                    };
                })}
            />

            <SolusiCoreFeatures core_features={solution.core_values.map((feature, index) => {
                return {
                    title: feature.section_title,
                    description: feature.section_subtitle,
                    icon: feature.icon,
                };
            })} />


            <SectionCTA cta={
                {
                    cta_image: solution.cta_image,
                    cta_primary_text: solution.cta_primary_text,
                    cta_secondary_text: solution.cta_secondary_text,
                    cta_button: (
                        <Link href={"/minta-demo"}>
                            <Button color="primary" radius="normal">
                                Jadwalkan Demo Sekarang
                            </Button>
                        </Link>
                    )
                }
            } />


            <SolusiRelatedIndustries industry_section={solution.industry_section} />

            <ClientLogos />

            <SolusiAdvantages core_solution={solution.core_solution} />

            <SolusiFAQ faqs={solution.faqs} />

            <ConsultationCTA />
        </div>
    );
};