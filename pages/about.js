import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-secondary dark:bg-navy-dark">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary dark:text-white mb-4">
            👋 About Docuweave
          </h1>
          <p className="text-2xl md:text-3xl text-accent font-medium mb-6">
            🚀 Docs that drive adoption, reduce support, and scale with you
          </p>
          <p className="text-xl text-text-secondary dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
            At Docuweave, we help fast-moving product teams turn developer documentation into a competitive advantage. 
            Whether you're launching your first API or scaling a platform, we create docs that are clear, trusted, and built to scale.
          </p>
          <p className="text-lg text-text-primary dark:text-white font-medium mt-6 max-w-3xl mx-auto">
            We don't just write—we partner. We embed. We build documentation systems that grow with your product and team.
          </p>
        </section>

        {/* Why We Built Docuweave */}
        <section className="bg-bg-primary dark:bg-navy py-16">
          <div className="max-w-6xl mx-auto px-4">            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-8 text-center">
              🧱 Why we built Docuweave
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-text-secondary dark:text-gray-300 mb-6 leading-relaxed">
                We started Docuweave after seeing too many great products lose developer trust due to rushed, outdated, or incomplete docs.
              </p>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-xl p-6 mb-6">
                <p className="text-lg text-text-primary dark:text-white font-medium mb-4">Docs were:</p>
                <ul className="space-y-2 text-red-800 dark:text-red-300">
                  <li>• Written under deadline pressure</li>
                  <li>• Maintained by overworked engineers</li>
                  <li>• Treated as a one-time deliverable, rather than a maintained, strategic asset.</li>
                </ul>
              </div>
              <p className="text-lg text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">
                We knew there was a better way—where documentation wasn't an afterthought, but a core part of the product experience.
              </p>
              <p className="text-lg text-text-primary dark:text-white font-medium">
                That's why we created Docuweave: to bring clarity, consistency, and craftsmanship to the developer documentation stack.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-bg-secondary dark:bg-navy-dark py-16">
          <div className="max-w-6xl mx-auto px-4">            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-8 text-center">
              🎯 What we do
            </h2>
            <p className="text-lg text-text-secondary dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto">
              We offer six core service buckets designed to meet dev teams wherever they are:            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                {
                  number: "1",
                  title: "Product-Ready Docs",
                  desc: "Launch-ready API references, integration guides, SDK tutorials, and changelogs."
                },
                {
                  number: "2", 
                  title: "Scale Your Team's Knowledge",
                  desc: "Internal wikis, onboarding content, troubleshooting guides, and engineering playbooks."
                },
                {
                  number: "3",
                  title: "Grow with Dev-First Content", 
                  desc: "Developer blogs, tutorials, case studies, and technical storytelling that resonates."
                },
                {
                  number: "4",
                  title: "Modern Docs Stack",
                  desc: "Docs-as-code setup, AI-readiness, and content migrations to scale systems, not just content."
                },
                {
                  number: "5", 
                  title: "Optimize & Scale Docs",
                  desc: "Audits, refactors, information architecture, and analytics to keep your docs performing."
                },
                {
                  number: "6",
                  title: "On-Demand Docs Expertise",
                  desc: "Fractional, project-based, or embedded support from senior technical writers and strategists."                }
              ].map((service) => (
                <div key={service.number} className="bg-bg-primary dark:bg-navy border border-border dark:border-navy-light rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="bg-primary dark:bg-accent text-white font-bold text-sm px-2 py-1 rounded-full">{service.number}</span>
                    <h3 className="font-heading font-semibold text-lg text-text-primary dark:text-white">{service.title}</h3>
                  </div>
                  <p className="text-text-secondary dark:text-gray-300 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/#services" className="inline-block bg-primary dark:bg-accent hover:bg-accent dark:hover:bg-primary text-white py-3 px-8 rounded-full font-bold text-lg shadow-lg transition hover:transform hover:scale-105">
                👉 Explore All Services →
              </Link>
            </div>
          </div>
        </section>

        {/* Who We Help */}
        <section className="bg-bg-primary dark:bg-navy py-16">
          <div className="max-w-6xl mx-auto px-4">            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-8 text-center">
              👥 Who we help
            </h2>
            <p className="text-lg text-text-secondary dark:text-gray-300 mb-8 text-center">We've partnered with:</p>            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                "🧪 Early-stage startups launching their first dev-facing product",
                "🧰 Engineering teams scaling internal or public-facing docs", 
                "📣 DevRel teams who need bandwidth and strategic guidance",
                "🤝 Agencies looking to white-label expert docs services",
                "🏛️ Open-source projects and communities"
              ].map((client, index) => (
                <div key={index} className="bg-navy-50 dark:bg-navy-light border border-navy-200 dark:border-navy-light rounded-xl p-6 shadow-card text-center">
                  <p className="text-text-primary dark:text-white font-medium">{client}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-text-primary dark:text-white font-medium text-center">
              Whether you have zero docs or a full ecosystem—Docuweave meets you where you are.
            </p>
          </div>
        </section>

        {/* Results We Deliver */}
        <section className="bg-bg-secondary dark:bg-navy-dark py-16">
          <div className="max-w-6xl mx-auto px-4">            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-8 text-center">              📊 Results we deliver
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "✅ Decrease support ticket volume",
                "✅ Improve developer onboarding time", 
                "✅ Increase API adoption",
                "✅ Improve time-to-hello for SDKs",
                "✅ Create sustainable docs systems and governance"
              ].map((result, index) => (
                <div key={index} className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/50 rounded-xl p-6 shadow-card text-center">
                  <p className="text-green-800 dark:text-green-300 font-medium">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Tech */}
        <section className="bg-bg-primary dark:bg-navy py-16">
          <div className="max-w-6xl mx-auto px-4">            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-8 text-center">
              ✍️ Meet Docuweave
            </h2>
            <p className="text-lg text-text-secondary dark:text-gray-300 mb-6 leading-relaxed">
              Docuweave is a distributed team of engineers-turned-writers, content strategists, and DevRel professionals.
            </p>            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-xl p-6 mb-6 border border-primary/20 dark:border-accent/30">
                <p className="text-lg text-text-primary dark:text-white font-medium mb-4">We've written and scaled documentation for:</p>
                <ul className="space-y-2 text-text-secondary dark:text-gray-300">
                  <li>• APIs used by thousands of developers</li>
                  <li>• DevTools used by major fintech and AI startups</li>
                  <li>• Platforms adopted by open-source communities worldwide</li>
                </ul>
              </div>
              <p className="text-lg text-text-primary dark:text-white font-medium text-center">
                We don't just write docs. We build systems, mentor teams, and help you scale like you've already hired your dream docs team.
              </p>
            </div>
          </div>
        </section>

        {/* Operating principles */}
        <section className="bg-bg-primary dark:bg-navy py-16">
          <div className="max-w-6xl mx-auto px-4"><h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-8 text-center">
              ✍️ Meet Docuweave
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-text-secondary dark:text-gray-300 mb-6 leading-relaxed">
                Docuweave is a distributed team of engineers-turned-writers, content strategists, and DevRel professionals.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-xl p-6 mb-6 border border-primary/20 dark:border-accent/30">
                <p className="text-lg text-text-primary dark:text-white font-medium mb-4">We've written and scaled documentation for:</p>
                <ul className="space-y-2 text-text-secondary dark:text-gray-300">
                  <li>• APIs used by thousands of developers</li>
                  <li>• DevTools used by major fintech and AI startups</li>
                  <li>• Platforms adopted by open-source communities worldwide</li>
                </ul>
              </div>
              <p className="text-lg text-text-primary dark:text-white font-medium text-center">
                We don't just write docs. We build systems, mentor teams, and help you scale like you've already hired your dream docs team.
              </p>
            </div>
          </div>
        </section>

        {/* Operating Principles */}
        <section className="bg-bg-primary dark:bg-navy py-16">
          <div className="max-w-6xl mx-auto px-4">            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-8 text-center">
              🌱 Our operating principles
            </h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Think like a user, build like a dev",
                "Clarity wins",
                "Sustainable > shiny", 
                "Collaboration over silos",
                "Docs are never done"
              ].map((principle, index) => (
                <div key={index} className="bg-navy-50 dark:bg-navy-light border border-navy-200 dark:border-navy-light rounded-xl p-6 shadow-card text-center hover:shadow-card-hover transition-shadow">
                  <p className="text-text-primary dark:text-white font-medium">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-bg-secondary dark:bg-navy-dark py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-8 text-center">
              💬 What Clients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-xl p-8 border border-primary/20 dark:border-accent/30 shadow-card">
                <blockquote className="text-lg text-text-primary dark:text-white italic mb-4 leading-relaxed">
                  "Working with Docuweave felt like adding a senior docs team overnight. We moved faster, with less confusion, and better outcomes."
                </blockquote>
                <cite className="text-accent font-semibold">— CTO, Developer Tools Startup</cite>
              </div>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-xl p-8 border border-primary/20 dark:border-accent/30 shadow-card">
                <blockquote className="text-lg text-text-primary dark:text-white italic mb-4 leading-relaxed">
                  "Our API adoption tripled after we cleaned up our documentation with Docuweave's help."
                </blockquote>
                <cite className="text-accent font-semibold">— Head of Product, Fintech Platform</cite>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary dark:bg-accent text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">🤝 Want to work with us?</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Whether you're launching, scaling, or modernizing your docs—we're ready.
            </p>
            <div className="grid md:grid-cols-3 gap-4">              <Link href="/contact" className="inline-block bg-white/20 hover:bg-white/30 text-white py-4 px-6 rounded-full font-bold text-lg transition border border-white/30 hover:border-white/50">
                📅 Book a discovery call
              </Link>
              <Link href="/contact" className="inline-block bg-accent dark:bg-primary hover:bg-accent/90 dark:hover:bg-primary/90 text-white py-4 px-6 rounded-full font-bold text-lg shadow-lg transition hover:transform hover:scale-105">
                💬 Say hello
              </Link>
              <Link href="/#services" className="inline-block bg-white/20 hover:bg-white/30 text-white py-4 px-6 rounded-full font-bold text-lg transition border border-white/30 hover:border-white/50">
                📄 View services
              </Link>
            </div>
          </div>
        </section>

        {/* Join Network CTA */}
        <section className="bg-bg-primary dark:bg-navy py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-heading font-bold text-primary dark:text-white mb-4">
              🧑‍🚀 Interested in Joining Our Network?
            </h3>
            <p className="text-lg text-text-secondary dark:text-gray-300 mb-6">
              We're always looking to collaborate with senior docs pros, DevRel experts, and developer writers.
            </p>
            <Link href="/contact" className="inline-block bg-accent hover:bg-primary dark:bg-primary dark:hover:bg-accent text-white py-3 px-8 rounded-full font-bold text-lg shadow-lg transition hover:transform hover:scale-105">
              🚀 Join Our Talent Network
            </Link>
          </div>        </section>
      </main>
    </div>
  )
}