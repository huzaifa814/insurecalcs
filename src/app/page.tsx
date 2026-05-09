import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/config/site';
import { tools } from '@/config/tools';

export default function HomePage() {
  const featured = tools.slice(0, 6);
  return (
    <>
      <Header />
      <main>
        <section className="container mx-auto px-4 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6" style={{ background: '#0891b2' + '15', color: '#0891b2' }}>
            Free · No Quote Spam · Instant Estimates
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
            Free <span style={{ color: siteConfig.brandColor }}>Calculators</span> — Built to Just Work
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Auto, life, home, health — quote-shop without the spam. No signup, no email collection, no insurance broker calling you the next day. Just instant estimates and side-by-side comparisons.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/tools" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition" style={{ background: siteConfig.brandColor }}>Browse Calculators →</Link>
            <Link href="/tools/auto-insurance-calculator" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 dark:border-slate-700 font-medium hover:bg-gray-50 dark:hover:bg-slate-800 transition">Try Auto Insurance Calculator</Link>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {[
              { icon: '🎯', title: 'Just the Numbers', body: 'Get the answer fast. No 10 paragraphs of SEO content above the calculator. Calculator first, explanations after.' },
              { icon: '📱', title: 'Works Anywhere', body: 'Phone, tablet, laptop, work computer. Loads in seconds. No app to install. Bookmark and you are set.' },
              { icon: '🔓', title: 'No Signup', body: 'No email collection, no account, no "sign up to see your results." Just calculate, get the answer, leave.' },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Popular Calculators</h2>
            <Link href="/tools" className="text-sm font-medium hover:underline" style={{ color: siteConfig.brandColor }}>View all →</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {featured.map((tool) => (
              <Link key={tool.slug} href={"/tools/" + tool.slug} className="group p-5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition" style={{ ['--brand' as string]: siteConfig.brandColor }}>
                <div className="text-2xl mb-2">{tool.icon}</div>
                <h3 className="font-semibold mb-1 transition" style={{ color: 'inherit' }}>{tool.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{tool.description}</p>
                {!tool.available && <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-gray-100 dark:bg-slate-800 text-xs text-gray-600 dark:text-gray-400">Coming soon</span>}
              </Link>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 text-center">
          <div className="p-10 rounded-2xl border" style={{ background: '#0891b2' + '10', borderColor: '#0891b2' + '33' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Need a quick auto insurance estimate?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">Plug in your age, vehicle, and ZIP — see your annual premium estimate in seconds.</p>
            <Link href="/tools/auto-insurance-calculator" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition" style={{ background: siteConfig.brandColor }}>Open Auto Insurance Calculator →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
