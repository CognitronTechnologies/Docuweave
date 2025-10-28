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
      <div className="relative min-h-screen flex flex-col bg-white">
        {/* Gradient overlay background for hero section */}
        <div className="absolute top-0 left-0 w-full h-[400px] z-0">
          <div className="w-full h-full bg-gradient-to-b from-white to-light-secondary opacity-90"></div>
        </div>
        <Navbar />
        <main className="flex-1 relative z-10">
          {/* Hero Section */}
          <section className="max-w-6xl mx-auto px-4 py-14 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-text-primary mb-4">
              Crafting impactful documentation
            </h1>
            <p className="text-2xl md:text-3xl text-accent font-medium mb-6">
              🚀 Docs that drive adoption, reduce support, and scale with you
            </p>
            <p className="text-xl text-text-secondary leading-relaxed max-w-4xl mx-auto mb-8">
              At Docuweave, we help product teams turn documentation into a strategic advantage. Whether you're launching your first API or scaling a platform, we create high-quality, usable documentation — we go beyond writing; we help you build documentation systems that evolve alongside your product, team, and tech stack.
            </p>

            {/* --- Docuweave Story: Numbered Story Blocks --- */}
            <div className="max-w-6xl mx-auto px-4 pt-4 md:pt-6 pb-2 md:pb-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6 text-center">Our story: from pain point to purpose</h2>
            </div>

            {/* Block 1: The Problem We Saw */}
            <section className="w-full py-12 md:py-16 flex flex-col items-center border-b border-border bg-white">
              <div className="max-w-3xl w-full px-4 flex flex-col items-start">
                <h3 className="flex items-center mb-2 text-2xl md:text-3xl font-heading font-bold">
                  <span className="text-4xl font-extrabold text-accent mr-3">#1</span>
                  <span className="text-yellow-600">The problem we saw</span>
                </h3>
                <p className="text-lg text-text-secondary mb-2">We started Docuweave after seeing too many great products lose developer trust—not because of bad code, but because of rushed, outdated, or incomplete documentation.</p>
              </div>
            </section>

            {/* Block 2: The Patterns We Saw */}
            <section className="w-full py-12 md:py-16 flex flex-col items-center border-b border-border bg-light-secondary">
              <div className="max-w-3xl w-full px-4 flex flex-col items-start">
                <h3 className="flex items-center mb-2 text-2xl md:text-3xl font-heading font-bold">
                  <span className="text-4xl font-extrabold text-accent mr-3">#2</span>
                  <span className="text-red-700">The patterns we saw</span>
                </h3>
                <p className="text-lg text-text-secondary mb-2">We kept running into the same issues across teams:</p>
                <ul className="grid grid-cols-1 gap-2 text-lg text-text-secondary pl-0 text-left mb-2">
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
            <section className="w-full py-12 md:py-16 flex flex-col items-center border-b border-border bg-white">
              <div className="max-w-3xl w-full px-4 flex flex-col items-start">
                <h3 className="flex items-center mb-2 text-2xl md:text-3xl font-heading font-bold">
                  <span className="text-4xl font-extrabold text-accent mr-3">#3</span>
                  <span className="text-blue-700">What we believe</span>
                </h3>
                <p className="text-lg text-text-secondary mb-2">We believe documentation should be treated like code—planned, maintained, and evolved. From the first planning doc to the final release note, docs should grow with your product and serve as a strategic layer of the developer experience.</p>
              </div>
            </section>

            {/* Block 4: Why We Built Docuweave */}
            <section className="w-full py-12 md:py-16 flex flex-col items-center bg-light-secondary">
              <div className="max-w-3xl w-full px-4 flex flex-col items-start">
                <h3 className="flex items-center mb-2 text-2xl md:text-3xl font-heading font-bold">
                  <span className="text-4xl font-extrabold text-accent mr-3">#4</span>
                  <span className="text-green-700">Why we built Docuweave</span>
                </h3>
                <ul className="list-disc list-inside text-lg text-text-primary space-y-1 pl-4 text-left mb-2">
                  <li>To bring clarity, consistency, and craftsmanship to developer documentation.</li>
                  <li>To build partnerships and processes for delivering usable technical content.</li>
                  <li>To build systems that scale with your product—and earn developer trust at every step.</li>
                  <li>Because great documentation isn’t just helpful—it’s a competitive advantage.</li>
                </ul>
              </div>
            </section>
          </section>

          {/* What We Do */}
          <section className="bg-light-secondary py-16">
            <div className="max-w-6xl mx-auto px-4">            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8 text-center">
                What we do
              </h2>
              <p className="text-lg text-text-secondary mb-8 text-center max-w-3xl mx-auto">
                We offer three core services designed to meet dev teams wherever they are:            </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    number: "1",
                    title: "Product Documentation",
                    desc: "Launch-ready API references, integration guides, SDK tutorials, and changelogs that scale with your product."
                  },
                  {
                    number: "2", 
                    title: "Developer Marketing",
                    desc: "Technical content that builds trust and grows your developer community—content that actually gets read and shared."
                  },
                  {
                    number: "3",
                    title: "Modern Docs Stack", 
                    desc: "Build future-ready documentation infrastructure with scalable, developer-friendly systems and AI-ready workflows."
                  }
                ].map((service) => (
                  <div key={service.number} className="bg-white border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="bg-primary text-white font-bold text-sm px-2 py-1 rounded-full">{service.number}</span>
                      <h3 className="font-heading font-semibold text-lg text-text-primary">{service.title}</h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link href="/#services" className="inline-block bg-primary hover:bg-accent text-white py-3 px-8 rounded-full font-bold text-lg shadow-lg transition hover:transform hover:scale-105">
                  Explore all services →
                </Link>
              </div>
            </div>
          </section>

          {/* Who We Help */}
          <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4">            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8 text-center">
                We partner with:
              </h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  "🧪 Early-stage startups launching their first dev-facing product",
                  "🧰 Engineering teams scaling internal or public-facing docs", 
                  "📣 DevRel teams who need bandwidth and strategic guidance",
                  "🤝 Agencies looking to white-label expert docs services",
                  "🏛️ Open-source projects and communities",
                  "🧑‍💼 Product & platform teams at growth-stage companies scaling developer experiences"
                ].map((client, index) => (
                  <div key={index} className="bg-light-secondary border border-border rounded-xl p-6 shadow-card text-center">
                    <p className="text-text-primary font-medium">{client}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Results We Deliver */}
          <section className="bg-light-secondary py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8 text-center">
                Results we deliver
              </h2>
              {/* Results We Deliver Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((r) => (
                  <div
                    key={r.title}
                    className="bg-green-50 border border-green-200 rounded-xl p-8 shadow-card text-center hover:shadow-card-hover transition-shadow flex flex-col items-center"
                  >
                    <div className="text-4xl mb-3">{r.icon}</div>
                    <div className="font-heading font-bold text-lg text-green-800 mb-2">{r.title}</div>
                    <div className="text-green-900 text-base">{r.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tools & Tech */}
          <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4">            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8 text-center">
                Meet the Docuweave Team
              </h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Docuweave is a distributed team of engineers-turned-writers, content strategists, and DevRel professionals.
              </p>            <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mb-6 border border-primary/20">
                  <p className="text-lg text-text-primary font-medium mb-4">We've written and scaled documentation for:</p>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• APIs used by thousands of developers</li>
                    <li>• DevTools used by major fintech and AI startups</li>
                    <li>• Platforms adopted by open-source communities worldwide</li>
                  </ul>
                </div>
                <p className="text-lg text-text-primary font-medium text-center">
                  We don't just write docs. We build systems, mentor teams, and help you scale like you've already hired your dream docs team.
                </p>
              </div>
            </div>
          </section>

          {/* Operating Principles */}
          <section className="bg-light-secondary py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8 text-center">
                Docuweave Principles
              </h2>
              <p className="text-lg text-text-secondary mb-8 text-center max-w-3xl mx-auto">
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
                    className="bg-white border border-border rounded-xl p-8 shadow-card text-center hover:shadow-card-hover transition-shadow flex flex-col items-center"
                  >
                    <div className="text-4xl mb-3">{p.icon}</div>
                    <div className="font-heading font-bold text-lg text-text-primary mb-2">{p.title}</div>
                    <div className="text-text-secondary text-base">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8 text-center">
                💬 What Clients Say
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20 shadow-card">
                  <blockquote className="text-lg text-text-primary italic mb-4 leading-relaxed">
                    "Working with Docuweave felt like adding a senior docs team overnight. WWe moved faster, with less confusion, and better outcomes."
                  </blockquote>
                  <cite className="text-accent font-semibold">— CTO, Developer Tools Startup</cite>
                </div>
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20 shadow-card">
                  <blockquote className="text-lg text-text-primary italic mb-4 leading-relaxed">
                    "Our API adoption tripled after we cleaned up our documentation with Docuweave's help."
                  </blockquote>
                  <cite className="text-accent font-semibold">— Head of Product, Fintech Platform</cite>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary text-white py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Want to work with us?</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Whether you're launching, scaling, or modernizing your docs—we're ready.
              </p>
              <div className="grid md:grid-cols-2 gap-4">              <Link href="/contact" className="inline-block bg-white/20 hover:bg-white/30 text-white py-4 px-6 rounded-full font-bold text-lg transition border border-white/30 hover:border-white/50">
                  📅 Book a discovery call
                </Link>
                <Link href="/#services" className="inline-block bg-white/20 hover:bg-white/30 text-white py-4 px-6 rounded-full font-bold text-lg transition border border-white/30 hover:border-white/50">
                  📄 View services
                </Link>
              </div>
            </div>
          </section>

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