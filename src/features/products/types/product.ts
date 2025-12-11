export interface Feature {
  id: string;
  section_title: string;
  section_subtitle: string;
  tab_label: string;
  content_title: string;
  content_description: string;
  benefits: string[];
  sequence: number;
}

export interface WhyUsItem {
  id: string;
  section_title: string;
  section_subtitle: string;
  icon: string;
  card_label: string;
  sequence: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  sequence: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  hero_title: string;
  hero_subtitle: string;

  features: Feature[];
  why_us: WhyUsItem[];
  faqs: FAQ[];

  created_at: string;
  updated_at: string;
}

export interface ProductsResponse {
  success: boolean;
  data: Product[];
  error: string | null;
}
