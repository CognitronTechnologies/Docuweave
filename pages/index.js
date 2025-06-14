import Navbar from '../components/Navbar'
import TechBackground from '../components/TechBackground'
import { BookOpenIcon, CodeBracketIcon, AdjustmentsHorizontalIcon, ClipboardDocumentCheckIcon, GlobeAltIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    icon: <CodeBracketIcon className="w-8 h-8 text-primary" />,
    title: 'Product-ready docs',
    desc: 'Ship documentation alongside your product. Developer-first docs that reduce support requests and help users succeed from day one.',
    link: '/services/core-documentation',
  },
  {
    icon: <BookOpenIcon className="w-8 h-8 text-accent" />,
    title: 'Scale your team\'s knowledge',
    desc: 'Document what your team knows—before it walks out the door. Capture tribal knowledge and reduce Slack-dependency.',
    link: '/services/knowledge-management',
  },
  {
    icon: <ArrowTrendingUpIcon className="w-8 h-8 text-green-500" />,
    title: 'Grow with dev-first content',
    desc: 'Content that converts developers—without feeling like marketing. Technical storytelling that builds trust and drives growth.',
    link: '/services/technical-content-marketing',
  },
  {
    icon: <AdjustmentsHorizontalIcon className="w-8 h-8 text-rose-400" />,
    title: 'Modern docs stack',
    desc: 'Build a future-ready documentation stack. Modernize with scalable, AI-ready systems and docs-as-code workflows.',
    link: '/services/documentation-infrastructure',
  },
  {
    icon: <GlobeAltIcon className="w-8 h-8 text-purple-400" />,
    title: 'Optimize & scale docs',
    desc: 'Turn docs into a scalable, measurable asset. Audit, refactor, and scale your content so it grows with your product.',
    link: '/services/content-strategy',
  },
  {
    icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-indigo-400" />,
    title: 'On-demand docs expertise',
    desc: 'Get docs help when and how you need it. Flexible, senior-level documentation support without the hiring headache.',
    link: '/services/custom-advisory',
  },
]

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg-secondary dark:bg-navy-dark">
      <Navbar />
      <TechBackground className="absolute inset-0 w-full h-[285px] z-0 pointer-events-none" />
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <section className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary dark:text-white mb-3 drop-shadow-sm">
            Documentation That <span className="text-accent">Drives Results</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary dark:text-gray-300 max-w-3xl mx-auto">
            We create developer-first documentation that reduces support requests, accelerates adoption, and scales with your product. No fluff, just docs that work.
          </p>
        </section>
        <div id="services" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(s => (
            <div key={s.title}
              className="bg-bg-primary dark:bg-navy border border-border dark:border-navy-light rounded-2xl p-8 shadow-card flex flex-col items-start gap-3 hover:scale-[1.03] hover:shadow-card-hover transition duration-200 cursor-pointer group"
            >
              <div className="rounded-full bg-primary/10 dark:bg-accent/20 p-3 mb-2 group-hover:bg-accent/20 dark:group-hover:bg-accent/30 transition">{s.icon}</div>
              <h2 className="font-semibold text-xl text-text-primary dark:text-white group-hover:text-primary dark:group-hover:text-accent">{s.title}</h2>
              <p className="text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">{s.desc}</p>
              <Link href={s.link} className="text-accent hover:text-primary dark:hover:text-white font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          ))}
        </div>        <section className="text-center px-6 py-16 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-2xl shadow-card mt-20 max-w-3xl mx-auto border border-primary/20 dark:border-accent/30">
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-2">Ready to ship docs that drive growth?</h2>
          <p className="mb-6 text-text-secondary dark:text-gray-300 leading-relaxed">Let's discuss your project and create documentation that accelerates your product's success.</p>
          <Link href="/contact" className="inline-block bg-primary hover:bg-accent dark:bg-accent dark:hover:bg-primary text-white py-3 px-10 rounded-full font-bold text-lg shadow-lg transition duration-150 hover:transform hover:scale-105">Start your project</Link>
        </section>
      </main>
    </div>
  )
}
