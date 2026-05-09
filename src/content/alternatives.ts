export interface Alternative {
  slug: string;
  competitor: string;
  title: string;
  metaDescription: string;
  intro: string;
  pros: string[];
  cons: string[];
  ourAdvantages: string[];
  whenToUseThem: string;
  whenToUseUs: string;
  publishedAt: string;
}

export const alternatives: Alternative[] = [];

export const getAlternative = (slug: string) => alternatives.find(a => a.slug === slug);
