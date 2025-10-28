import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import { BookOpenIcon, CodeBracketIcon, AdjustmentsHorizontalIcon, ClipboardDocumentCheckIcon, GlobeAltIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Use string keys for icons, not JSX, to ensure serializability
const services = [
  {
    icon: 'document',
    title: 'Product Documentation',
    desc: 'Create developer-first, launch-ready docs that reduce support requests and help users succeed from day one.',
    link: '/services/product-documentation',
  },
  {
    icon: 'rocket',
    title: 'Developer Marketing',
    desc: 'Technical content that builds trust and grows your developer community—content that actually gets read and shared.',
    link: '/services/developer-marketing',
  },
  {
    icon: 'stack',
    title: 'Modern Docs Stack',
    desc: 'Build future-ready documentation infrastructure with scalable, developer-friendly systems and AI-ready workflows.',
    link: '/services/modern-docs-stack',
  },
]

// Icon mapping for rendering
const iconMap = {
  'document': <CodeBracketIcon className="w-8 h-8 text-primary" />,
  'rocket': <ArrowTrendingUpIcon className="w-8 h-8 text-accent" />,
  'stack': <AdjustmentsHorizontalIcon className="w-8 h-8 text-green-500" />,
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <SEO
        title="Technical Writing & Developer Docs Agency | Docuweave"
        description="Docs That Deliver Impact. DocuWeave crafts technical documentation that cuts support, boosts adoption, and scales with your product. Get a free audit"
        url="https://docuweave.io"
        image="https://docuweave.io/og-image.png"
      />
      <Navbar />
      {/* Gradient overlay background for hero section */}
      <div className="absolute top-0 left-0 w-full h-[480px] z-0">
        <div className="w-full h-full bg-gradient-to-b from-white to-light-secondary opacity-90"></div>
      </div>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      </div>
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <section className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-text-primary mb-3 drop-shadow-sm">
            <span className="text-6xl md:text-7xl text-accent block mb-2">Docuweave</span>
            Docs that deliver impact
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            Crafting documentation that reduces support requests, accelerates adoption, and scales with your product.
          </p>
        </section>
        <div id="services" className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map(s => (
            <div key={s.title}
              className="bg-white border border-border rounded-2xl p-8 shadow-card flex flex-col items-start gap-3 hover:scale-[1.03] hover:shadow-card-hover transition duration-200 cursor-pointer group"
            >
              <div className="rounded-full bg-primary/10 p-3 mb-2 group-hover:bg-accent/20 transition">{iconMap[s.icon]}</div>
              <h2 className="font-semibold text-xl text-text-primary group-hover:text-primary">{s.title}</h2>
              <p className="text-text-secondary mb-4 leading-relaxed">{s.desc}</p>
              <Link href={s.link} className="text-accent hover:text-primary font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
        <section className="text-center px-6 py-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl shadow-card mt-20 max-w-3xl mx-auto border border-primary/20">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">Ready to ship docs that drive growth?</h2>
          <p className="mb-6 text-text-secondary leading-relaxed">Let's discuss your project and create documentation that accelerates your product's success.</p>
          <Link href="/contact" className="inline-block bg-primary hover:bg-accent text-white py-3 px-10 rounded-full font-bold text-lg shadow-lg transition duration-150 hover:transform hover:scale-105">Start your project</Link>
        </section>
      </main>
    </div>
  )
}
