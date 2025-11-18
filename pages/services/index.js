import Navbar from '../../components/Navbar'
import SEO from '../../components/SEO'
import Link from 'next/link'
import { CodeBracketIcon, ArrowTrendingUpIcon, AdjustmentsHorizontalIcon, PencilSquareIcon } from '@heroicons/react/24/outline'

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

const iconMap = {
  'document': <CodeBracketIcon className="w-12 h-12 text-primary" />,
  'rocket': <ArrowTrendingUpIcon className="w-12 h-12 text-accent" />,
  'stack': <AdjustmentsHorizontalIcon className="w-12 h-12 text-green-500" />,
  'writer': <PencilSquareIcon className="w-12 h-12 text-purple-500" />,
}

export default function ServicesIndex() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Our Services | Docuweave"
        description="Professional technical writing and documentation services for SaaS companies and developer tools. Product documentation, developer marketing, modern docs stack, and technical writer staffing."
        url="https://docuweave.io/services/"
        image="https://docuweave.io/og-image.PNG"
      />
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional technical writing and documentation services that help your product succeed. 
            From API docs to developer marketing, we create content that drives adoption and reduces support costs.
          </p>
        </section>

        {/* Services Grid */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => (
            <Link 
              key={idx} 
              href={service.link}
              className="group block p-8 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                {iconMap[service.icon]}
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-4 inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn more 
                <span className="ml-2 group-hover:ml-1 transition-all">→</span>
              </div>
            </Link>
          ))}
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to improve your documentation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help your product succeed with great technical content.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in touch
          </Link>
        </section>
      </main>
    </div>
  )
}
