import Navbar from '../components/Navbar'
import Link from 'next/link'
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About Docuweave | Meet Our Technical Writing Experts"
        description="Meet the Docuweave team and learn how our technical writers help software companies turn documentation into a competitive advantage."
        canonical="https://docuweave.io/about"
        openGraph={{
          title: 'About Docuweave | Meet Our Technical Writing Experts',
          description: 'Meet the Docuweave team and learn how our technical writers help software companies turn documentation into a competitive advantage.',
          url: 'https://docuweave.io/about',
          type: 'website',
        }}
        schemaType="AboutPage"
        schemaData={{
          name: 'About Docuweave',
          description: 'Meet the Docuweave team and learn how our technical writers help software companies turn documentation into a competitive advantage.',
          url: 'https://docuweave.io/about',
          publisher: {
            '@type': 'Organization',
            name: 'Docuweave',
            url: 'https://docuweave.io',
          },
        }}
      />
      <div className="relative min-h-screen flex flex-col bg-navy-dark">
        {/* Gradient overlay background for hero section */}
        <div className="absolute top-0 left-0 w-full h-[400px] z-0">
          <div className="w-full h-full bg-gradient-to-b from-[#0A1F44] to-[#232526] opacity-90"></div>
        </div>
        <Navbar />
        <main className="flex-1 relative z-10">
          {/* Hero Section */}
          <section className="max-w-6xl mx-auto px-4 py-14 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary dark:text-white mb-4">
              Crafting Impactful Documentation
            </h1>
            <p className="text-2xl md:text-3xl text-accent font-medium mb-6">
              🚀 Docs that drive adoption, reduce support, and scale with you
            </p>
            <p className="text-xl text-text-secondary dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              At Docuweave, we help product teams turn documentation into a strategic advantage. Whether you're launching your first API or scaling a platform, we create high-quality, usable documentation — we go beyond writing; we help you build documentation systems that evolve alongside your product, team, and tech stack.
            </p>

            {/* --- Docuweave Story: Numbered Story Blocks --- */}
            <div className="max-w-6xl mx-auto px-4 pt-4 md:pt-6 pb-2 md:pb-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-6 text-center">Our Story: From Pain Point to Purpose</h2>
            </div>

            {/* Block 1: The Problem We Saw */}
            <section className="w-full py-12 md:py-16 flex flex-col items-center border-b border-gray-200 dark:border-navy-light bg-white dark:bg-navy-dark">
              <div className="max-w-3xl w-full px-4 flex flex-col items-start">
                <h3 className="flex items-center mb-2 text-2xl md:text-3xl font-heading font-bold">
                  <span className="text-4xl font-extrabold text-accent mr-3">#1</span>
                  <span className="text-yellow-600 dark:text-yellow-200">The problem we saw</span>
                </h3>
                <p className="text-lg text-text-secondary dark:text-gray-300 mb-2">We started Docuweave after seeing too many great products lose developer trust—not because of bad code, but because of rushed, outdated, or incomplete documentation.</p>
              </div>
            </section>

            {/* Block 2: The Patterns We Saw */}
            <section className="w-full py-12 md:py-16 flex flex-col items-center border-b border-gray-200 dark:border-navy-light bg-gray-50 dark:bg-navy">
              <div className="max-w-3xl w-full px-4 flex flex-col items-start">
                <h3 className="flex items-center mb-2 text-2xl md:text-3xl font-heading font-bold">
                  <span className="text-4xl font-extrabold text-accent mr-3">#2</span>
                  <span className="text-red-700 dark:text-red-300">The patterns we saw</span>
                </h3>
                <p className="text-lg text-text-secondary dark:text-gray-300 mb-2">We kept running into the same issues across teams:</p>
                <ul className="grid grid-cols-1 gap-2 text-lg text-text-secondary dark:text-gray-300 pl-0 text-left mb-2">
                  <li className="flex items-center gap-2"><span>🕒</span>Docs written under deadline pressure</li>
                  <li className="flex items-center gap-2"><span>🧑‍💻</span>Maintained (barely) by overworked engineers</li>
                  <li className="flex items-center gap-2"><span>📄</span>Treated as a one-time deliverable, not a living product asset</li>
                  <li className="flex items-center gap-2"><span>🔌</span>Disconnected from product planning and release cycles</li>
                  <li className="flex items-center gap-2"><span>🧩</span>Lacking structure, consistency, or ownership</li>
                  <li className="flex items-center gap-2"><span>🌍</span>Difficult to scale across teams, tools, and time zones</li>
                </ul>
              </div>
            </section>

            {/* Block 3: What We Believe */}
            <section className="w-full py-12 md:py-16 flex flex-col items-center border-b border-gray-200 dark:border-navy-light bg-white dark:bg-navy-dark">
              <div className="max-w-3xl w-full px-4 flex flex-col items-start">
                <h3 className="flex items-center mb-2 text-2xl md:text-3xl font-heading font-bold">
                  <span className="text-4xl font-extrabold text-accent mr-3">#3</span>
                  <span className="text-blue-700 dark:text-blue-300">What we believe</span>
                </h3>
                <p className="text-lg text-text-secondary dark:text-gray-300 mb-2">We believe documentation should be treated like code—planned, maintained, and evolved. From the first planning doc to the final release note, docs should grow with your product and serve as a strategic layer of the developer experience.</p>
              </div>
            </section>

            {/* Block 4: Why We Built Docuweave */}
            <section className="w-full py-12 md:py-16 flex flex-col items-center bg-gray-50 dark:bg-navy">
              <div className="max-w-3xl w-full px-4 flex flex-col items-start">
                <h3 className="flex items-center mb-2 text-2xl md:text-3xl font-heading font-bold">
                  <span className="text-4xl font-extrabold text-accent mr-3">#4</span>
                  <span className="text-green-700 dark:text-green-300">Why we built Docuweave</span>
                </h3>
                <ul className="list-disc list-inside text-lg text-text-primary dark:text-white space-y-1 pl-4 text-left mb-2">
                  <li>To bring clarity, consistency, and craftsmanship to developer documentation.</li>
                  <li>To build partnerships and processes for delivering usable technical content.</li>
                  <li>To build systems that scale with your product—and earn developer trust at every step.</li>
                  <li>Because great documentation isn’t just helpful—it’s a competitive advantage.</li>
                </ul>
              </div>
            </section>
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
                  "🏛️ Open-source projects and communities",
                  "🧑‍💼 Product & platform teams at growth-stage companies scaling developer experiences"
                ].map((client, index) => (
                  <div key={index} className="bg-navy-50 dark:bg-navy-light border border-navy-200 dark:border-navy-light rounded-xl p-6 shadow-card text-center">
                    <p className="text-text-primary dark:text-white font-medium">{client}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Results We Deliver */}
          <section className="bg-bg-secondary dark:bg-navy-dark py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-8 text-center">
                📊 Results we deliver
              </h2>
              {/* Results We Deliver Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((r) => (
                  <div
                    key={r.title}
                    className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/50 rounded-xl p-8 shadow-card text-center hover:shadow-card-hover transition-shadow flex flex-col items-center"
                  >
                    <div className="text-4xl mb-3">{r.icon}</div>
                    <div className="font-heading font-bold text-lg text-green-800 dark:text-green-300 mb-2">{r.title}</div>
                    <div className="text-green-900 dark:text-green-100 text-base">{r.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tools & Tech */}
          <section className="bg-bg-primary dark:bg-navy py-16">
            <div className="max-w-6xl mx-auto px-4">            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-8 text-center">
                ✍️ Meet the Docuweave Team
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

          {/* Operating Principles */}
          <section className="bg-bg-primary dark:bg-navy py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-8 text-center">
                🌟 Docuweave Principles
              </h2>
              <p className="text-lg text-text-secondary dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto">
                At DocuWeave, these core beliefs guide every doc we craft:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: "🧑‍💻",
                    title: "Empathy for Users, Precision for Devs",
                    desc: "We design with empathy for users and build with technical accuracy—bridging clarity and code to improve adoption and usability."
                  },
                  {
                    icon: "🪄",
                    title: "Clarity That Converts",
                    desc: "Clear, concise docs reduce support tickets, increase product adoption, and build trust—because great content drives real results."
                  },
                  {
                    icon: "📈",
                    title: "Scalable by Design",
                    desc: "We build documentation systems that grow with your product, team, and tech stack—ensuring long-term efficiency and consistency."
                  },
                  {
                    icon: "🤝",
                    title: "Embedded Partnership",
                    desc: "We don’t just deliver docs—we integrate with your team to co-create, iterate, and scale together."
                  },
                  {
                    icon: "🔄",
                    title: "Evolving with You",
                    desc: "Your product changes fast—so should your docs. We build living systems that adapt to new features, feedback, and user needs."
                  },
                  {
                    icon: "🧠",
                    title: "Driven by Insight",
                    desc: "We use data, feedback, and usage analytics to continuously refine documentation—ensuring it stays relevant, effective, and impactful."
                  }
                ].map((p) => (
                  <div
                    key={p.title}
                    className="bg-navy-50 dark:bg-navy-light border border-navy-200 dark:border-navy-light rounded-xl p-8 shadow-card text-center hover:shadow-card-hover transition-shadow flex flex-col items-center"
                  >
                    <div className="text-4xl mb-3">{p.icon}</div>
                    <div className="font-heading font-bold text-lg text-text-primary dark:text-white mb-2">{p.title}</div>
                    <div className="text-text-secondary dark:text-gray-300 text-base">{p.desc}</div>
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
                    "Working with Docuweave felt like adding a senior docs team overnight. WWe moved faster, with less confusion, and better outcomes."
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
    </>
  )
}

// --- Results We Deliver Cards ---
const results = [
  {
    icon: "🎧",
    title: "Lower Support Volume",
    desc: "Reduce repetitive tickets by empowering users with clear, self-serve documentation."
  },
  {
    icon: "⏱️",
    title: "Faster Developer Onboarding",
    desc: "Help developers get productive quickly with intuitive guides and first-use flows."
  },
  {
    icon: "🚀",
    title: "Higher API & SDK Adoption",
    desc: "Drive engagement and usage with well-structured, discoverable, and actionable content."
  },
  {
    icon: "📅",
    title: "Shorter Time-to-Market",
    desc: "Accelerate launches with documentation that’s ready when your product is."
  },
  {
    icon: "🌱",
    title: "Sustainable Documentation Systems",
    desc: "Build scalable, governed content ecosystems that grow with your product and team."
  },
  {
    icon: "🤝",
    title: "Aligned Teams, Aligned Outcomes",
    desc: "Centralized documentation keeps cross-functional teams in sync—reducing miscommunication and speeding up execution."
  }
];

function ResultsWeDeliver() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((r) => (
        <div
          key={r.title}
          className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/50 rounded-xl p-8 shadow-card text-center hover:shadow-card-hover transition-shadow flex flex-col items-center"
        >
          <div className="text-4xl mb-3">{r.icon}</div>
          <div className="font-heading font-bold text-lg text-green-800 dark:text-green-300 mb-2">{r.title}</div>
          <div className="text-green-900 dark:text-green-100 text-base">{r.desc}</div>
        </div>
      ))}
    </div>
  );
}