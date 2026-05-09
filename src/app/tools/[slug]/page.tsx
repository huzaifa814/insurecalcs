import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { tools, getTool } from '@/config/tools';
import { siteConfig } from '@/config/site';
import { AutoInsuranceCalculator } from '@/components/tools/AutoInsuranceCalculator';
import { LifeInsuranceCalculator } from '@/components/tools/LifeInsuranceCalculator';
import { TermVsWholeLife } from '@/components/tools/TermVsWholeLife';
import { HomeInsuranceCalculator } from '@/components/tools/HomeInsuranceCalculator';
import { HealthInsuranceCalculator } from '@/components/tools/HealthInsuranceCalculator';
import { DeductibleCalculator } from '@/components/tools/DeductibleCalculator';
import { UmbrellaInsuranceCalculator } from '@/components/tools/UmbrellaInsuranceCalculator';
import { DisabilityInsuranceCalculator } from '@/components/tools/DisabilityInsuranceCalculator';
import { RentersInsuranceCalculator } from '@/components/tools/RentersInsuranceCalculator';
import { PetInsuranceCalculator } from '@/components/tools/PetInsuranceCalculator';
import { TravelInsuranceCalculator } from '@/components/tools/TravelInsuranceCalculator';
import { CarInsuranceComparison } from '@/components/tools/CarInsuranceComparison';
import { FloodInsuranceCalculator } from '@/components/tools/FloodInsuranceCalculator';
import { CobraVsMarketplace } from '@/components/tools/CobraVsMarketplace';
import { BusinessInsuranceCalculator } from '@/components/tools/BusinessInsuranceCalculator';
import { ComingSoon } from '@/components/tools/ComingSoon';
import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return {
    title: tool.title,
    description: tool.description,
    alternates: { canonical: `${siteConfig.url}/tools/${slug}` },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Calculators', item: `${siteConfig.url}/tools` },
      { '@type': 'ListItem', position: 3, name: tool.title, item: `${siteConfig.url}/tools/${slug}` },
    ],
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-gray-900 dark:hover:text-white">Home</Link> ·{' '}
          <Link href="/tools" className="hover:text-gray-900 dark:hover:text-white">Calculators</Link> ·{' '}
          <span className="text-gray-900 dark:text-white">{tool.title}</span>
        </nav>
        <header className="mb-8">
          <div className="text-4xl mb-3">{tool.icon}</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{tool.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{tool.description}</p>
        </header>

        {slug === 'auto-insurance-calculator' && <AutoInsuranceCalculator />}
        {slug === 'life-insurance-calculator' && <LifeInsuranceCalculator />}
        {slug === 'term-vs-whole-life' && <TermVsWholeLife />}
        {slug === 'home-insurance-calculator' && <HomeInsuranceCalculator />}
        {slug === 'health-insurance-calculator' && <HealthInsuranceCalculator />}
        {slug === 'deductible-calculator' && <DeductibleCalculator />}
        {slug === 'umbrella-insurance-calculator' && <UmbrellaInsuranceCalculator />}
        {slug === 'disability-insurance-calculator' && <DisabilityInsuranceCalculator />}
        {slug === 'renters-insurance-calculator' && <RentersInsuranceCalculator />}
        {slug === 'pet-insurance-calculator' && <PetInsuranceCalculator />}
        {slug === 'travel-insurance-calculator' && <TravelInsuranceCalculator />}
        {slug === 'car-insurance-comparison' && <CarInsuranceComparison />}
        {slug === 'flood-insurance-calculator' && <FloodInsuranceCalculator />}
        {slug === 'cobra-vs-marketplace' && <CobraVsMarketplace />}
        {slug === 'business-insurance-calculator' && <BusinessInsuranceCalculator />}
        {!tool.available && <ComingSoon toolTitle={tool.title} />}
      </main>
      <Footer />
    </>
  );
}
