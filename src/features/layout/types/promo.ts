export interface PromoBadge {
  line1: string;
  line2: string;
  label: string;
}

export interface PromoData {
  isActive: boolean;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaLink: string;
  promoBadge: PromoBadge;
  features: string[];
  idleBg: string;
  scrollBg: string;
  illustrationUrl: string | null;
  image: string | null;
}