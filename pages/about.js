import Navbar from '../components/Navbar'
import Link from 'next/link'
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About Docuweave | Technical Writing That Scales"
        description="We help product teams build documentation systems that scale. From API docs to developer content, we create docs that reduce support tickets and accelerate adoption."
        canonical="https://docuweave.io/about"
        openGraph={{
          title: 'About Docuweave | Technical Writing That Scales',
          description: 'We help product teams build documentation systems that scale. From API docs to developer content, we create docs that reduce support tickets and accelerate adoption.',
          url: 'https://docuweave.io/about',
          type: 'website',
        }}
        schemaType="AboutPage"
        schemaData={{
          name: 'About Docuweave',
          description: 'We help product teams build documentation systems that scale. From API docs to developer content, we create docs that reduce support tickets and accelerate adoption.',
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
              At Docuweave, we help product teams turn documentation into a strategic advantage. Whether you're launching your first API or scaling a platform, we create high-quality and usable documentation. We go beyond just writing docs. We help you build systems that evolve with your product, team, and tech stack.
            </p>

            {/* Our Story */}
            <div className="max-w-4xl mx-auto px-4 py-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-8 text-center">Our story</h2>
              
              <div className="prose prose-lg max-w-none text-text-secondary space-y-6">
                <p>
                  We started Docuweave after seeing too many great products fail because of rushed, outdated, or incomplete documentation. We kept running into the same patterns: docs written under deadline pressure, barely maintained by overworked engineers, and treated as an afterthought rather than a core product. Documentation that couldn't scale across teams or keep up with release cycles.
                </p>
                
                <p>
                  We believe that documentation should be treated like code, all the way from planning to maintenance. Your docs should grow with your product and be a core part of the developer experience, not something you bolt on at the end.
                </p>
                
                <p>
                  That's why we built Docuweave - to bring clarity and consistency to developer documentation. We help teams create docs that scale with their product and earn their users' trust. Because great documentation isn't just helpful - it's HOW YOU WIN.
                </p>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="bg-light-secondary py-16">
            <div className="max-w-6xl mx-auto px-4">            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8 text-center">
                What we do
              </h2>
              <p className="text-lg text-text-secondary mb-8 text-center max-w-3xl mx-auto">
                Four ways we help teams ship better docs:            </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  {
                    number: "1",
                    title: "Product documentation",
                    desc: "Create clear, user-centric docs that accelerate product adoption and reduce support tickets. Ship documentation that helps your users succeed."
                  },
                  {
                    number: "2", 
                    title: "Developer marketing",
                    desc: "Technical content that builds trust and credibility. Generate qualified leads and establish authority with professional whitepapers, engaging blogs, and more."
                  },
                  {
                    number: "3",
                    title: "Modern docs stack", 
                    desc: "Modernize your documentation infrastructure and improve team efficiency with scalable, developer-friendly systems. Build workflows that grow with your product."
                  },
                  {
                    number: "4",
                    title: "Hire technical writers",
                    desc: "Hire experienced technical writers with engineering backgrounds to deliver professional docs. Get quality docs without the overhead of full-time hiring."
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
                We partner with
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

          {/* Operating Principles */}
          <section className="bg-light-secondary py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8 text-center">
                Docuweave principles
              </h2>
              <p className="text-lg text-text-secondary mb-8 text-center max-w-3xl mx-auto">
                At Docuweave, these core beliefs guide every doc we craft::
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: "�",
                    title: "Empathy for users",
                    desc: "We put ourselves in your users' shoes, creating documentation that answers their questions and guides them to success at every stage of their journey."
                  },
                  {
                    icon: "🪄",
                    title: "Clarity that converts",
                    desc: "Clear, concise docs reduce support tickets, increase product adoption, and build trust because great content drives real results."
                  },
                  {
                    icon: "📈",
                    title: "Scalable by design",
                    desc: "We build documentation systems that grow with you. No matter how fast your product or team scales, your docs keep up."
                  },
                  {
                    icon: "🤝",
                    title: "Embedded partnership",
                    desc: "We don't just deliver docs. We work alongside your team to co-create, iterate, and scale together."
                  },
                  {
                    icon: "🔄",
                    title: "Evolving with you",
                    desc: "Your product changes constantly. We build living documentation that adapts to new features, feedback, and user needs."
                  },
                  {
                    icon: "🧠",
                    title: "Driven by insight",
                    desc: "We use data, feedback, and analytics to continuously improve your docs and keep them relevant."
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

          {/* CTA Section */}
          <section className="bg-primary text-white py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Want to work with us?</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Whether you're launching, scaling, or modernizing your docs—we're ready.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/contact" className="inline-block bg-white/20 hover:bg-white/30 text-white py-4 px-6 rounded-full font-bold text-lg transition border border-white/30 hover:border-white/50">
                  📅 Book a discovery call
                </Link>
                <a href="mailto:dickson@docuweave.io" className="inline-block bg-white/20 hover:bg-white/30 text-white py-4 px-6 rounded-full font-bold text-lg transition border border-white/30 hover:border-white/50">
                  ✉️ Send us an email
                </a>
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
    title: "Fewer support requests",
    desc: "Cut down repetitive tickets. When users can find answers themselves, your support team can focus on real problems."
  },
  {
    icon: "⏱️",
    title: "Faster onboarding",
    desc: "Get developers productive in hours, not days. Clear guides mean less handholding and faster time-to-first-value."
  },
  {
    icon: "🚀",
    title: "Better product adoption",
    desc: "Developers choose products and tools they can actually use. Good docs mean more integrations and higher engagement."
  },
  {
    icon: "📅",
    title: "Ship on time",
    desc: "Accelerate launches with ready documentation. No more scrambling to document features after release."
  },
  {
    icon: "🌱",
    title: "Documentation that scales",
    desc: "Build systems that grow with you instead of turning into a maintenance nightmare."
  },
  {
    icon: "🤝",
    title: "Teams that stay aligned",
    desc: "A single source of truth keeps everyone on the same page and moving in the same direction."
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
