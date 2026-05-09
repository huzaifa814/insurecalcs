export interface GuideStep { title: string; body: string }
export interface GuideFAQ { q: string; a: string }
export interface Guide {
  slug: string;
  title: string;
  query: string;
  metaDescription: string;
  intro: string;
  steps: GuideStep[];
  tips: string[];
  faq: GuideFAQ[];
  relatedTool: string;
  keywords: string[];
  publishedAt: string;
}

export const guides: Guide[] = [];

export const getGuide = (slug: string) => guides.find(g => g.slug === slug);
