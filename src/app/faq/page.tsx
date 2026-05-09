import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/config/site';

export const metadata = { title: 'FAQ', description: `Frequently asked questions about ${siteConfig.name}.` };

const faqs = [
  { q: 'Is InsureCalcs really free?', a: 'Yes — completely free, ad-supported. No subscriptions, no daily limits, no signup walls.' },
  { q: 'Do you collect my email or phone number?', a: 'No. We do not have an email field. We do not pass you to brokers. The estimate runs locally and you leave.' },
  { q: 'How accurate are the premium estimates?', a: 'Within ±20-30% of real carrier quotes for typical profiles. We use industry-average rate factors. Always get 3+ real quotes before buying — actual rates vary 30-50% across carriers.' },
  { q: 'Why are the auto insurance numbers different from what I pay?', a: 'Real auto premiums depend on your specific carrier, credit score (in most states), exact ZIP, vehicle make/model, and dozens of underwriting factors. Our estimate is a directional number — useful for comparison, not as a final quote.' },
  { q: 'Should I always pick the highest deductible?', a: 'Use the Deductible Calculator. The high deductible saves you premium each year — but you have to be able to absorb the higher out-of-pocket if you claim. The breakeven depends on your claim probability and emergency fund.' },
  { q: 'How much life insurance do I actually need?', a: 'The DIME method: Debt + Income×years + Mortgage + Education for kids. Most working-age adults with dependents need 8-12x annual income.' },
  { q: 'Term or whole life?', a: 'Term + invest-the-difference beats whole life in 90% of scenarios. Whole life makes sense for estate planning at very high net worth, lifetime obligations like special-needs dependents, or when discipline to invest the difference is unrealistic.' },
  { q: 'Is umbrella insurance worth it?', a: 'Yes if you have meaningful net worth or future income (which can be garnished). Umbrella is cheap — typically $200-$400/yr per $1M of coverage — and protects everything else you own.' },
  { q: 'Should I take COBRA or marketplace coverage?', a: 'Use the COBRA vs Marketplace Calculator. Generally ACA marketplace is cheaper after subsidies, except if you have specific in-network providers you want to keep or have already hit your deductible/OOP for the year.' },
  { q: 'How do you make money if it is free?', a: 'Banner ads on tool pages (Google AdSense). We do not collect or sell user data, and we are not paid to recommend specific carriers.' },
];

export default function FAQ() {
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-3">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">Everything you might want to know about {siteConfig.name}.</p>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group p-5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <summary className="font-semibold cursor-pointer flex items-start justify-between gap-4">
                <span>{f.q}</span>
                <span className="text-gray-400 group-open:rotate-90 transition-transform">›</span>
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
