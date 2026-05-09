export interface Tool {
  slug: string;
  title: string;
  description: string;
  icon: string;
  category: 'auto' | 'life' | 'home' | 'health' | 'other';
  available: boolean;
}

export const tools: Tool[] = [
  { slug: 'auto-insurance-calculator', title: 'Auto Insurance Calculator', description: 'Estimate auto insurance premium based on age, vehicle, location, and coverage level.', icon: '🚗', category: 'auto', available: true },
  { slug: 'life-insurance-calculator', title: 'Life Insurance Needs Calculator', description: 'How much life insurance you need — DIME method (Debt, Income, Mortgage, Education).', icon: '👨‍👩‍👧', category: 'life', available: true },
  { slug: 'term-vs-whole-life', title: 'Term vs Whole Life Calculator', description: 'Side-by-side cost + cash value comparison over 20-30 years.', icon: '⚖️', category: 'life', available: true },
  { slug: 'home-insurance-calculator', title: 'Home Insurance Calculator', description: 'Replacement cost estimator for dwelling, personal property, and liability.', icon: '🏠', category: 'home', available: true },
  { slug: 'health-insurance-calculator', title: 'Health Insurance Calculator', description: 'Annual premium + out-of-pocket projection by plan type (HMO, PPO, HDHP).', icon: '🏥', category: 'health', available: true },
  { slug: 'deductible-calculator', title: 'Deductible vs Premium Calculator', description: 'See the breakeven — when does a higher deductible actually save you money?', icon: '💵', category: 'other', available: true },
  { slug: 'umbrella-insurance-calculator', title: 'Umbrella Insurance Calculator', description: 'Coverage amount based on net worth and risk profile.', icon: '☂️', category: 'other', available: true },
  { slug: 'disability-insurance-calculator', title: 'Disability Insurance Calculator', description: 'Income replacement need — how much short-term and long-term coverage.', icon: '🦽', category: 'health', available: true },
  { slug: 'renters-insurance-calculator', title: 'Renters Insurance Calculator', description: 'Personal property value + liability coverage you need as a renter.', icon: '🛋️', category: 'home', available: true },
  { slug: 'pet-insurance-calculator', title: 'Pet Insurance Calculator', description: 'Premium vs out-of-pocket vet bills — when does pet insurance pay off?', icon: '🐶', category: 'other', available: true },
  { slug: 'travel-insurance-calculator', title: 'Travel Insurance Calculator', description: 'Coverage cost as % of trip — cancellation, medical, baggage.', icon: '✈️', category: 'other', available: true },
  { slug: 'car-insurance-comparison', title: 'Car Insurance Comparison', description: 'Compare 3 quotes side-by-side — total cost, coverage, deductible.', icon: '🔍', category: 'auto', available: true },
  { slug: 'flood-insurance-calculator', title: 'Flood Insurance Calculator', description: 'NFIP premium estimator by flood zone and coverage amount.', icon: '🌊', category: 'home', available: true },
  { slug: 'cobra-vs-marketplace', title: 'COBRA vs Marketplace Calculator', description: 'After job loss — keep employer coverage or switch to ACA marketplace?', icon: '🩺', category: 'health', available: true },
  { slug: 'business-insurance-calculator', title: 'Business Insurance Calculator', description: 'General liability + commercial property estimate by industry.', icon: '🏢', category: 'other', available: true },
];

export const getTool = (slug: string) => tools.find(t => t.slug === slug);
export const getAvailableTools = () => tools.filter(t => t.available);