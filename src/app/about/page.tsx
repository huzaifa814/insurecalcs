import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/config/site';

export const metadata = { title: 'About', description: `About ${siteConfig.name} — free insurance calculators, no quote spam.` };

export default function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">About {siteConfig.name}</h1>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>{siteConfig.name} is free insurance calculators, built around one principle: <strong>no quote spam</strong>. We don&apos;t collect your email. We don&apos;t pass you to brokers. We don&apos;t sell your data to lead aggregators. You get an instant estimate, you leave, that&apos;s it.</p>
          <h2 className="text-2xl font-bold mt-8 mb-3">Why we built it</h2>
          <p>Most online insurance calculators are thin wrappers around lead-capture forms. You type in your ZIP, age, and email — then 15 brokers call you for the next 6 months. The actual calculator is often a hidden second-tier feature.</p>
          <p>We flipped that. The calculator is the entire product. There&apos;s no email field. There&apos;s no &quot;get my free quote&quot; button that triggers a sales blast. The estimate is computed locally in your browser using industry-average rate factors.</p>
          <h2 className="text-2xl font-bold mt-8 mb-3">How accurate are the estimates?</h2>
          <p>Within ±20-30% of real carrier quotes for typical profiles. We use national-average rate factors weighted by age, location risk, vehicle/property value, deductible, and coverage level. Real quotes from State Farm, Geico, Progressive, etc. vary 30-50% across carriers — always shop 3+ before buying.</p>
          <h2 className="text-2xl font-bold mt-8 mb-3">How we make money</h2>
          <p>Banner ads (Google AdSense) on calculator pages. That&apos;s the entire business model. No subscriptions, no premium tier, no affiliate kickbacks driving the recommendations.</p>
          <h2 className="text-2xl font-bold mt-8 mb-3">Sister sites</h2>
          <p>{siteConfig.name} is part of a small portfolio of free, no-signup tools: <a href="https://www.pdfshed.com" className="hover:underline" style={{ color: siteConfig.brandColor }}>PDFShed</a>, <a href="https://www.pixshed.com" className="hover:underline" style={{ color: siteConfig.brandColor }}>PixShed</a>, <a href="https://www.simplycalcs.com" className="hover:underline" style={{ color: siteConfig.brandColor }}>SimplyCalcs</a>, <a href="https://www.resumeshed.com" className="hover:underline" style={{ color: siteConfig.brandColor }}>ResumeShed</a>, <a href="https://www.creditcardcalcs.com" className="hover:underline" style={{ color: siteConfig.brandColor }}>CreditCardCalcs</a>, <a href="https://www.retirecalcs.com" className="hover:underline" style={{ color: siteConfig.brandColor }}>RetireCalcs</a>.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
