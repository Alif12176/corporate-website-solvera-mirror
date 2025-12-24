export interface ServiceHero {
    heading: string;
    tagline: string;
    bg_image: string;
}

export interface FocusSectionItem {
    id: string;
    title: string;
    description: string;
    icon: string;
    order: number;
}

export interface FocusSection {
    tagline: string;
    heading: string;
    description: string;
    items: FocusSectionItem[];
}

export interface MethodologyItem {
    id: string;
    title: string;
    description: string;
    type: string;
    icon: string;
    number: string;
}

export interface MethodologySection {
    layout: string;
    heading: string;
    description: string;
    footer: string;
    items: MethodologyItem[];
}

export interface QuickStepsItem {
    id: string;
    title: string;
    description: string;
    icon: string;
    type: string;
    checklist: string[];
}

export interface QuickStepsSection {
    layout: string;
    heading: string;
    subheading: string;
    footer: string;
    items: QuickStepsItem[];
}

export interface CompetencySection {
    heading: string;
    description: string;
    footer: string;
    items: CompetencySectionItem[];
}

export interface CompetencySectionItem {
    id: string;
    name: string;
    percentage: number;
}

export interface Service {
    id: string;
    slug: string;
    page_name: string;
    hero: ServiceHero;
    created_at: string;
    updated_at: string;
    focus_section: FocusSection;
    methodology_section: MethodologySection;
    quick_steps_section: QuickStepsSection;
    competency_section: CompetencySection;
}

export interface SolutionsResponse {
    success: boolean;
    data: {
        items: Service[];
        meta: any;
    };
    error: string | null;
}
