export interface CoreBenefit {
    id: string;
    section_title: string | null;
    section_subtitle: string | null;
    tab_label: string;
    content_title: string;
    content_description: string;
    values: string[];
    sequence: number;
}

export interface CoreValue {
    id: string;
    section_title: string;
    section_subtitle: string;
    icon: string;
    icon_title: string;
    icon_description: string;
    sequence: number;
}

export interface Industry {
    id: string;
    slug: string;
    name: string;
    icon: string;
    description: string;
    sequence: number;
}

export interface IndustrySection {
    section_title: string;
    section_subtitle: string | null;
    industries: Industry[];
}

export interface CoreSolutionItem {
    id: string;
    icon: string;
    title: string;
    description: string | null;
    sequence: number;
}

export interface CoreSolution {
    section_title: string;
    section_subtitle: string;
    items: CoreSolutionItem[];
}

export interface FAQ {
    id: string;
    question: string;
    answer: string;
    sequence: number;
}

export interface TrustedBy {
    id: string;
    name: string;
    logo_url: string;
    sequence: number;
}

export interface Solution {
    id: string;
    slug: string;
    name: string;
    category: string;
    hero_title: string;
    hero_subtitle: string;
    hero_image: string;
    cta_primary_text: string;
    cta_secondary_text: string;
    cta_image: string;
    core_benefits: CoreBenefit[];
    core_values: CoreValue[];
    industry_section: IndustrySection;
    core_solution: CoreSolution;
    faqs: FAQ[];
    trusted_by: TrustedBy[];
    created_at: string;
    updated_at: string;
}

export interface SolutionsResponse {
    success: boolean;
    data: {
        items: Solution[];
        meta: any;
    };
    error: string | null;
}
