import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import { BookOpenIcon, CodeBracketIcon, AdjustmentsHorizontalIcon, ClipboardDocumentCheckIcon, GlobeAltIcon, ArrowTrendingUpIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// Use string keys for icons, not JSX, to ensure serializability
const services = [
  {
    icon: 'document',
    title: 'Product documentation',
    desc: 'Create clear, user-centric docs that accelerate product adoption and reduce support tickets. Ship documentation that helps your users succeed.',
    link: '/services/product-documentation',
  },
  {
    icon: 'rocket',
    title: 'Developer marketing',
    desc: 'Technical content that builds trust and credibility. Generate qualified leads and establish authority with professional whitepapers, engaging blogs, and more.',
    link: '/services/developer-marketing',
  },
  {
    icon: 'stack',
    title: 'Modern docs stack',
    desc: 'Modernize your documentation infrastructure and improve team efficiency with scalable, developer-friendly systems. Build workflows that grow with your product.',
    link: '/services/modern-docs-stack',
  },
  {
    icon: 'writer',
    title: 'Hire technical writers',
    desc: 'Hire experienced technical writers with engineering backgrounds to deliver professional docs. Get quality docs without the overhead of full-time hiring.',
    link: '/services/hire-technical-writer',
  },
]

// Icon mapping for rendering
const iconMap = {
  'document': <CodeBracketIcon className="w-8 h-8 text-primary" />,
  'rocket': <ArrowTrendingUpIcon className="w-8 h-8 text-accent" />,
  'stack': <AdjustmentsHorizontalIcon className="w-8 h-8 text-green-500" />,
  'writer': <PencilSquareIcon className="w-8 h-8 text-purple-500" />,
}

const rotatingPhrases = [
  "deliver impact",
  "your users trust",
  "drive adoption"
]

export default function Home() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length)
    }, 4000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen bg-white">
      <SEO
        title=" Docuweave - Technical Writing & Documentation Services | Hire Technical Writers "
        description="Hire experienced technical writers with engineering backgrounds. We create API documentation, developer guides, and product docs for SaaS companies. Reduce support tickets and accelerate adoption with professional documentation services."
        url="https://docuweave.io"
        image="https://docuweave.io/og-image.PNG"
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
          <h1 className="font-heading font-bold mb-6">
            <span className="text-5xl md:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block mb-4">
              Docuweave
            </span>
            <span className="text-4xl md:text-5xl text-text-primary block mb-2">
              Docs that{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentPhraseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-extrabold"
                >
                  {rotatingPhrases[currentPhraseIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            Professional technical writing services that enable you to accelerate product adoption, reduce support costs, and empower your users to succeed.
          </p>
        </section>
        <div id="services" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-primary hover:bg-accent text-white py-3 px-10 rounded-full font-bold text-lg shadow-lg transition duration-150 hover:transform hover:scale-105">Start your project</Link>
            <a href="mailto:dickson@docuweave.io" className="inline-block bg-white hover:bg-gray-50 text-primary border-2 border-primary py-3 px-10 rounded-full font-bold text-lg shadow-lg transition duration-150 hover:transform hover:scale-105">Send us an email</a>
          </div>
        </section>
      </main>
    </div>
  )
}
