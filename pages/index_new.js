import Navbar from '../components/Navbar'
import TechBackground from '../components/TechBackground'
import { BookOpenIcon, CodeBracketIcon, AdjustmentsHorizontalIcon, ClipboardDocumentCheckIcon, GlobeAltIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    icon: <CodeBracketIcon className="w-8 h-8 text-primary" />,
    title: 'Core Documentation Services',
    desc: 'API docs, SDK guides, and user manuals that developers actually want to use.',
    link: '/services/core-documentation',
  },
  {
    icon: <BookOpenIcon className="w-8 h-8 text-accent" />,
    title: 'Knowledge Management',
    desc: 'Internal wikis and knowledge bases that scale with your team.',
    link: '/services/knowledge-management',
  },
  {
    icon: <ArrowTrendingUpIcon className="w-8 h-8 text-green-500" />,
    title: 'Technical Content Marketing',
    desc: 'Developer blogs and content that drives adoption and growth.',
    link: '/services/technical-content-marketing',
  },
  {
    icon: <AdjustmentsHorizontalIcon className="w-8 h-8 text-rose-400" />,
    title: 'Documentation Infrastructure',
    desc: 'Docs-as-code systems and AI-ready content workflows.',
    link: '/services/documentation-infrastructure',
  },
  {
    icon: <GlobeAltIcon className="w-8 h-8 text-purple-400" />,
    title: 'Content Strategy & IA',
    desc: 'Strategic content audits and information architecture.',
    link: '/services/content-strategy',
  },
  {
    icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-indigo-400" />,
    title: 'Custom & Advisory Services',
    desc: 'Targeted expertise and strategic guidance for unique needs.',
    link: '/services/custom-advisory',
  },
]

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-light via-white to-accent/10">
      <Navbar />
      <TechBackground className="absolute inset-0 w-full h-[285px] z-0 pointer-events-none" />
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <section className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-3 drop-shadow-sm">
            Developer Documentation, <span className="text-accent">Woven for You</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark/70 max-w-2xl mx-auto">
            Docuweave empowers your organization with world-class technical documentation—crafted by our expert agency team.
          </p>
        </section>
        <div id="services" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(s => (
            <div key={s.title}
              className="bg-white border border-light rounded-2xl p-8 shadow-card flex flex-col items-start gap-3 hover:scale-[1.03] hover:shadow-xl transition duration-200 cursor-pointer group"
            >
              <div className="rounded-full bg-primary/10 p-3 mb-2 group-hover:bg-accent/20 transition">{s.icon}</div>
              <h2 className="font-semibold text-xl text-dark group-hover:text-primary">{s.title}</h2>
              <p className="text-dark/70 mb-4">{s.desc}</p>
              <Link href={s.link} className="text-accent hover:underline">
                Learn More
              </Link>
            </div>
          ))}
        </div>
        <section className="text-center px-6 py-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl shadow mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Ready to elevate your developer docs?</h2>
          <p className="mb-6 text-dark/80">Let's talk about your documentation goals or schedule a free consult with our agency team.</p>
          <Link href="/contact" className="inline-block bg-primary hover:bg-accent text-white py-3 px-10 rounded-full font-bold text-lg shadow transition duration-150">Contact Us</Link>
        </section>
      </main>
    </div>
  )
}
