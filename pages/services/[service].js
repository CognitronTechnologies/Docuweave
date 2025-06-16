import Navbar from '../../components/Navbar';

const serviceData = {
  'core-documentation': {    title: 'Product-ready docs',
    subtitle: 'Ship documentation alongside your product',
    icon: '�',
    heroDescription: 'Your product is only as good as its documentation. We create developer-first, launch-ready docs that reduce support requests, increase adoption, and help your users succeed from day one.',    targetAudience: [
      'Startups launching APIs, SDKs, or platforms',
      'Product teams preparing for GA',
      'Engineering teams lacking in-house documentation bandwidth',
      'Founders who want to look "enterprise-ready" from day one'
    ],
    problemsSolved: [
      '"We built the thing, but haven\'t written any docs."',
      '"Our docs are outdated and scattered across Notion, Confluence, and code comments."',
      '"Support is getting swamped with \'How do I integrate this?\' questions."',
      '"We need docs that can scale as the product evolves."'
    ],
    includes: [      'API documentation — REST, GraphQL, gRPC, OpenAPI specs, Postman collections',
      'SDK & integration guides — Step-by-step instructions, code snippets, sample apps',
      'Installation & setup docs — For CLI tools, Docker images, self-hosted deployments',
      'Configuration & deployment guides — Infrastructure (AWS, Azure, GCP), CI/CD pipelines',
      'Release notes & changelogs — Versioned release docs and communication plans',
      'User & admin manuals — Especially for semi-technical product teams or end users'
    ],
    bonus: 'We always structure docs with scalability and searchability in mind, using industry best practices like Docs-as-Code and modular architecture.',
    approach: [
      {
        step: '🔍 Discovery & audit',
        description: 'We review your product, codebase, and existing materials to scope the required docs.'
      },
      {
        step: '✍️ Documentation sprint',
        description: 'Our writers pair with engineers and product leads to create technically accurate, developer-friendly content.'
      },
      {
        step: '🔄 Review & iterate',
        description: 'Docs are reviewed in GitHub (or your system), tested by engineers, and iterated collaboratively.'
      },
      {
        step: '🚢 Go-live support',
        description: 'We help you deploy the docs in your system — or host it for you. Bonus: we\'ll help write the launch changelog or blog post, too.'
      }
    ],    timeline: '2–4 weeks, depending on complexity and number of products/APIs.',
    addOns: [
      'Sample apps or demo repos',
      'Code walkthrough videos or scripts',
      'Translations or localization',
      'Dev portal setup'
    ],
    testimonial: {
      quote: 'Docuweave shipped developer docs for our API in under 3 weeks. Our support tickets dropped by 60% after launch.',
      author: 'Head of Product, early-stage API startup'
    }
  },  'knowledge-management': {
    title: 'Scale your team\'s knowledge',
    subtitle: 'Internal docs that grow with your team',
    icon: '📚',
    heroDescription: 'Document what your team knows—before it walks out the door',
    purpose: 'Internal documentation shouldn\'t be an afterthought. We help engineering teams capture tribal knowledge, onboard faster, and reduce Slack-dependency with clean, searchable, developer-first internal docs.',
    targetAudience: [
      'Fast-growing startups onboarding new engineers',
      'Teams losing velocity due to siloed or undocumented knowledge',
      'CTOs tired of Slack-as-the-source-of-truth',
      'Platform or DevOps teams managing internal tools or shared infra'
    ],
    problemsSolved: [
      '"New hires take weeks to get productive."',
      '"Our internal tools are poorly documented, so no one wants to touch them."',
      '"Everyone keeps asking the same questions in Slack."',
      '"We have docs, but no one trusts or updates them."'
    ],    includes: [
      'Engineering onboarding docs — Role-specific guides, system overviews, common workflows',
      'Internal wikis — Developer-friendly, version-controlled docs for internal tools and processes',
      'FAQs & troubleshooting guides — For both customer-facing and internal issues',
      'Runbooks & playbooks — Clear instructions for handling common ops/dev tasks',
      'Tooling guides — Docs for CI/CD, feature flags, infrastructure, internal dashboards'
    ],
    bonus: 'We audit your current internal documentation and recommend a sustainable update flow—Docs-as-Code, Git-based wikis, or Notion + versioning.',
    approach: [
      {
        step: '🧠 Knowledge discovery',
        description: 'We interview SMEs and shadow engineering workflows to capture how things actually get done.'
      },
      {
        step: '📄 Content drafting',
        description: 'We organize and write internal docs using your preferred tools and frameworks.'
      },
      {
        step: '🔁 Review & validation',
        description: 'We loop in stakeholders to ensure accuracy and sustainability.'
      },
      {
        step: '🧰 Implementation & maintenance plan',
        description: 'We provide structure and strategy for ongoing doc ownership—without needing to build a docs team.'
      }
    ],    timeline: '2–6 weeks, depending on team size and doc sprawl.',
    addOns: [
      'Documentation style guide for internal teams',
      'Internal tool tutorials (video scripts or text)',
      'Team-based documentation audits',
      'Slack-bot or search integration (Notion, GitHub)'
    ],
    testimonial: {
      quote: 'We went from 40 Slack pings a day to 5—all because our internal docs finally made sense.',
      author: 'Platform Engineer, Series B SaaS startup'
    },
    cta: {
      headline: 'Ready to Scale Knowledge, Not Questions?',
      subline: 'Let\'s build documentation your team actually uses.',
      buttons: [
        { text: '📅 Schedule a Call', link: '/contact' },
        { text: '📄 View Example Onboarding Docs', link: '/contact' },
        { text: '📧 Contact Us', link: '/contact' }
      ]
    },
    idealFor: 'Engineering leaders building scalable knowledge bases.',
    outcomes: [
      'Faster engineer onboarding',
      'Reduced knowledge silos',
      'Improved team productivity',
      'Better incident response'
    ]
  },  'technical-content-marketing': {
    title: 'Grow with dev-first content',
    subtitle: '🧲 Content that converts developers—without feeling like marketing',
    icon: '🚀',
    heroDescription: 'Developers hate fluff. We create deeply technical content that earns attention, builds trust, and grows your product with the people who matter most: engineers.',
    targetAudience: [
      'Dev-first startups with a great product and zero blog strategy',
      'Marketing teams who need technical storytelling firepower',
      'DevRel teams looking to scale high-quality content',
      'Founders aiming to build thought leadership in their niche'
    ],
    problemsSolved: [
      '"Our blog is empty or hasn\'t been updated in months."',
      '"We\'re struggling to explain technical concepts clearly."',
      '"Our content sounds like it was written by marketing—for marketers."',
      '"We have devs, but they don\'t have time to write."'
    ],    includes: [
      'Developer tutorials & how-tos — From beginner quickstarts to advanced integrations',
      'Thought leadership blogs — Deep dives, architecture breakdowns, and innovation stories',
      'Case studies — Developer success stories, partner integrations, user wins',
      'Whitepapers — Technical deep dives for enterprise buyers or strategic partners',
      'Landing Page Copy — For API-first products, SDKs, or open source projects',
      'Newsletters — Developer-focused updates, releases, or changelogs with links that actually get clicked'
    ],
    bonus: 'Our content is SEO-optimized and dev-approved. We know how to write for humans and search engines—without sounding like either.',
    approach: [
      {
        step: '🎯 Audience + Product Strategy',
        description: 'We align on your goals, audience segments, and ideal content formats.'
      },
      {
        step: '✍️ Content Creation',
        description: 'We write everything ourselves or collaborate closely with your engineers.'
      },
      {
        step: '🔁 Review & Feedback Loop',
        description: 'All content is reviewed and technically validated before publishing.'
      },
      {
        step: '🚀 Launch & Amplify',
        description: 'We can support publishing, community engagement, and distribution planning.'
      }
    ],    timeline: '2–3 weeks per content cycle, or ongoing monthly content calendar.',
    addOns: [
      'Social media snippets (Twitter, LinkedIn, Discord)',
      'Developer landing pages or microsites',
      'Technical video scripts based on written content',
      'SEO keyword planning for dev-focused terms',
      'AI-assisted repurposing workflows'
    ],
    testimonial: {
      quote: 'We finally published content that felt like it came from engineers—not a brand deck. Engagement doubled in a month.',
      author: 'Head of DevRel, API startup'
    }
  },  'documentation-infrastructure': {
    title: 'Modern docs stack',
    subtitle: '🛠️ Build a future-ready documentation stack',
    icon: '🧱',
    heroDescription: 'Outgrown Confluence? Struggling with messy Notion pages? We help you modernize your docs with scalable, developer-friendly systems — from Docs-as-Code to AI-ready workflows.',
    targetAudience: [
      'Teams migrating off outdated platforms (Confluence, Google Docs, etc.)',
      'Startups preparing to scale their docs with product growth',
      'Engineering orgs shifting to Docs-as-Code workflows',
      'DevTool companies ready to leverage AI in their documentation systems'
    ],
    problemsSolved: [
      '"Our docs are scattered across Notion, Confluence, and Google Drive."',
      '"We want Git-based docs but don\'t know where to start."',
      '"We can\'t easily version, update, or track changes to our documentation."',
      '"We want to explore AI or chat-based help, but our docs aren\'t structured enough."'
    ],
    includes: [      'Docs-as-Code implementation — Set up and configure systems like Docusaurus, MkDocs, Hugo, or custom Git-based workflows',
      'Content migration — Cleanly move content from legacy systems (Confluence, Notion, Google Docs, CMS) to modern stacks',
      'Structure & architecture redesign — Create scalable TOCs, modular content, and topic-based IA',
      'AI-readiness audits — Evaluate structure, metadata, and retrieval readiness for tools like GPT-based assistants',
      'Search optimization — Improve discoverability across internal and public docs',
      'Build & deploy support — CI/CD setup for publishing, versioning, and previewing documentation'
    ],
    bonus: 'We document the doc system itself, so your team can own and evolve it over time.',
    approach: [
      {
        step: '📊 Audit & discovery',
        description: 'We assess your current system\'s gaps, content quality, and future goals (including AI use cases).'
      },
      {
        step: '🧱 System design',
        description: 'We architect an ideal structure tailored to your product, team, and user needs.'
      },
      {
        step: '🔁 Migration + rebuild',
        description: 'We migrate and modernize your content, transforming it as needed for readability and structure.'
      },
      {
        step: '🤖 AI & Automation Layer',
        description: 'We prepare your docs for future-ready use: embeddings, metadata tagging, and prompt-friendly structure.'
      }
    ],    timeline: '3–6 weeks, depending on system complexity and volume of content.',
    addOns: [
      'ChatGPT-style AI assistant integration',
      'Front-end UX enhancements for developer docs',
      'Custom themes and branded doc sites',
      'Markdown linter setup and style guide',
      'CLI tools or internal bots for doc contribution'
    ],
    testimonial: {
      quote: 'Our docs went from a tangled mess to a clean, versioned site with Git-based workflows and AI search built-in. We finally feel like a serious platform.',
      author: 'VP of Engineering, DevTool company'
    }
  },  'content-strategy': {
    title: 'Optimize & scale docs',
    subtitle: '🧪 Turn docs into a scalable, measurable asset',
    icon: '🧠',
    heroDescription: 'Great documentation isn\'t just written once—it\'s maintained, measured, and improved over time. We help you audit, refactor, and scale your content so it grows with your product and keeps delivering value.',
    targetAudience: [
      'Scaling startups with years of docs—but no clear ownership',
      'Teams with inconsistent quality or structure across content',
      'DevTool companies preparing for enterprise customers',
      'Docs teams looking to implement better governance, workflows, and KPIs'
    ],
    problemsSolved: [
      '"Our docs are out of date and no one knows who owns them."',
      '"We have too many pages, and no idea which ones still matter."',
      '"Docs are inconsistent in tone, structure, or technical depth."',
      '"We need docs that evolve with our platform—not fall behind it."'
    ],
    includes: [
      'Content Audits — Full inventory, quality grading, and performance insights',
      'Information Architecture Overhaul — Redesign of TOCs, page layout patterns, and navigation flows',
      'Documentation Style Guide — Tone, formatting, structure, and code conventions',
      'Content Lifecycle Planning — Ownership models, review cadences, contribution models',
      'Analytics & Search Insights — Set up doc usage tracking, search behavior analysis, and engagement KPIs',
      'Versioning & Deprecation Strategy — Align docs with software lifecycle (beta, GA, EOL)'
    ],
    bonus: 'We surface gaps you didn\'t even know were costing users—like unclear landing pages, poor discoverability, or tutorial dead-ends.',
    approach: [
      {
        step: '📊 Full Audit & Diagnostic',
        description: 'We analyze what content exists, what\'s working, what\'s not, and where your biggest risks or opportunities lie.'
      },
      {
        step: '🧬 Optimization Plan',
        description: 'We create a prioritized roadmap to fix, refactor, or remove content—mapped to business goals and user experience.'
      },
      {
        step: '🛠 Implementation Support',
        description: 'We can assist your team, lead the rewrite, or build workflows for ongoing improvement.'
      },
      {
        step: '📈 Governance & Metrics Setup',
        description: 'We establish scalable content ownership, review systems, and performance reporting.'
      }
    ],    timeline: '4–8 weeks, depending on content volume and scope of refactor.',
    addOns: [
      'AI-generated insights based on usage or search queries',
      '"Doc Health Dashboard" setup for internal visibility',
      'Automated contributor guidelines and onboarding',
      'Sunset/archive workflows for outdated content',
      'Editorial calendars for documentation teams'
    ],
    testimonial: {
      quote: 'We had 500+ pages of docs and no idea what was actually useful. Docuweave gave us clarity, structure, and a roadmap we could finally act on.',
      author: 'Head of Product, B2B SaaS Platform'
    }
  },  'custom-advisory': {
    title: 'On-demand docs expertise',
    subtitle: '🧠 Get docs help when (and how) you need it',
    icon: '🛠️',
    heroDescription: 'No need to hire a full-time doc team. Docuweave gives you flexible, senior-level documentation support—on your terms. Think of us as your plug-and-play documentation team.',
    targetAudience: [
      'Startups launching their first developer-facing product',
      'Product or engineering teams without in-house writers',
      'DevRel teams that need surge capacity or specialty skills',
      'Agencies or teams needing white-labeled doc support'
    ],
    problemsSolved: [
      '"We don\'t have a technical writer but need docs… yesterday."',
      '"We need help getting started and don\'t know where to begin."',
      '"Our devs are writing docs, but the quality is inconsistent."',
      '"We have writers—but need backup for complex projects."'
    ],
    includes: [
      'Fractional Technical Writing Support — Get expert docs help for a set number of hours or days per month',
      'Project-Based Engagements — End-to-end ownership of docs for launches, SDKs, APIs, or integrations',
      'Embedded Docs Partner — Work side-by-side with your product, DevRel, or eng team',
      'Slack / Async Support — Drop-in support for reviewing PRs, content drafts, or reviewing API updates',
      'Docs Mentorship & Training — Support for junior writers or devs writing their own docs',
      'Emergency Fixes — Got a launch this week? We can help you ship.'
    ],
    bonus: 'We can start fast. We plug into your workflows—GitHub, Notion, Jira, Slack, you name it.',
    approach: [
      {
        step: '🧩 Fit Assessment',
        description: 'We identify where we can add the most leverage—based on your current systems, team, and goals.'
      },
      {
        step: '🔧 Flexible Engagement Model',
        description: 'Hourly, project-based, or subscription retainers. We scale up or down with you.'
      },
      {
        step: '⚡ Rapid Ramp-Up',
        description: 'We work fast, respect your engineers\' time, and keep momentum high.'
      },
      {
        step: '📣 Ongoing Communication',
        description: 'You\'ll always know what\'s happening, what\'s next, and what we need from you.'
      }
    ],    timeline: 'Fractional — e.g., 20–40 hours/month | Project-based — fixed scope and deliverables | Retainer — rolling monthly support for content-heavy teams',
    addOns: [
      'Ghostwriting for founder or DevRel content',
      'Codebase onboarding & ramp-up sessions',
      'White-labeled docs support for agencies',
      'Custom templates for recurring doc types',
      'On-call documentation support for launches or high-pressure moments'
    ],
    testimonial: {
      quote: 'Docuweave\'s on-demand model gave us flexibility and deep docs expertise without hiring in-house. They felt like part of our team from week one.',
      author: 'CTO, DevTools Startup'
    }
  }
};

export default function ServicePage({ service }) {
  // Check if this is the detailed "Product-Ready Docs" service
  const isDetailedService = service.heroDescription && service.targetAudience;  if (isDetailedService) {
    return (
      <div className="flex flex-col min-h-screen bg-bg-secondary dark:bg-navy-dark">
        <Navbar />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="max-w-6xl mx-auto px-4 py-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-6xl">{service.icon}</span>
              <div>
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary dark:text-white">{service.title}</h1>
                <p className="text-2xl text-accent font-medium mt-2">{service.subtitle}</p>
              </div>
            </div>
            <p className="text-xl text-text-secondary dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">{service.heroDescription}</p>
          </section>

          {/* Target Audience */}
          <section className="bg-bg-primary dark:bg-navy py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-8 text-center">👥 Perfect For</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.targetAudience.map((audience, index) => (
                  <div key={index} className="bg-navy-50 dark:bg-navy-light border border-navy-200 dark:border-navy-light rounded-xl p-6 shadow-card text-center hover:shadow-card-hover transition-shadow">
                    <p className="text-text-primary dark:text-white font-medium">{audience}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Problems Solved */}
          <section className="bg-bg-secondary dark:bg-navy-dark py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-8 text-center">🔥 Sound Familiar?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.problemsSolved.map((problem, index) => (
                  <div key={index} className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-xl p-6 shadow-card">
                    <p className="text-red-800 dark:text-red-300 font-medium italic">{problem}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-xl text-text-secondary dark:text-gray-300 mt-8 font-medium">We fix these problems so you can focus on what you do best.</p>
            </div>
          </section>

          {/* What's Included */}
          <section className="bg-bg-primary dark:bg-navy py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-8 text-center">🛠️ What's included</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.includes.map((item, index) => (
                  <div key={index} className="bg-navy-50 dark:bg-navy-light border border-navy-200 dark:border-navy-light rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                    <div className="flex items-start gap-3">
                      <span className="text-accent font-bold text-xl mt-1">✓</span>
                      <span className="text-text-primary dark:text-white font-medium leading-relaxed">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
              {service.bonus && (
                <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-xl p-6 text-center border border-primary/20 dark:border-accent/30">
                  <p className="text-text-primary dark:text-white font-medium"><strong className="text-primary dark:text-accent">🔍 Bonus:</strong> {service.bonus}</p>
                </div>
              )}
            </div>
          </section>          {/* Our Approach */}
          <section className="bg-bg-secondary dark:bg-navy-dark py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-8 text-center">🧭 Our approach</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.approach.map((step, index) => (
                  <div key={index} className="bg-bg-primary dark:bg-navy border border-navy-200 dark:border-navy-light rounded-xl p-6 shadow-card text-center hover:shadow-card-hover transition-shadow">
                    <div className="text-2xl mb-3 font-medium text-primary dark:text-accent">{step.step}</div>
                    <p className="text-text-secondary dark:text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>          {/* Timeline, Add-ons */}
          <section className="bg-bg-primary dark:bg-navy py-16">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Timeline */}
                <div className="bg-navy-50 dark:bg-navy-light border border-navy-200 dark:border-navy-light rounded-xl p-6 shadow-card">
                  <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-4">⏱️ Timeline</h3>
                  <p className="text-text-primary dark:text-white font-medium">{service.timeline}</p>
                </div>

                {/* Add-ons */}
                <div className="bg-navy-50 dark:bg-navy-light border border-navy-200 dark:border-navy-light rounded-xl p-6 shadow-card">
                  <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-4">✅ Add-ons</h3>
                  <ul className="space-y-2">
                    {service.addOns.map((addon, index) => (
                      <li key={index} className="text-text-secondary dark:text-gray-300 text-sm leading-relaxed">• {addon}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>          {/* Testimonial */}
          {service.testimonial && (
            <section className="bg-bg-secondary dark:bg-navy-dark py-16">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-8 text-center">💬 What clients say</h2>
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-xl p-8 text-center border border-primary/20 dark:border-accent/30 shadow-card">
                  <blockquote className="text-xl text-text-primary dark:text-white italic mb-4 leading-relaxed">
                    "{service.testimonial.quote}"
                  </blockquote>
                  <cite className="text-accent font-semibold">— {service.testimonial.author}</cite>
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="bg-primary dark:bg-accent text-white py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">Ready to ship docs that drive results?</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">Let's discuss your project and create documentation that accelerates your product's success.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-block bg-accent dark:bg-primary hover:bg-accent/90 dark:hover:bg-primary/90 text-white py-4 px-8 rounded-full font-bold text-lg shadow-lg transition hover:transform hover:scale-105"
                >
                  Start your project
                </a>
                <a 
                  href="mailto:hello@docuweave.com" 
                  className="inline-block bg-white/20 hover:bg-white/30 text-white py-4 px-8 rounded-full font-bold text-lg transition border border-white/30 hover:border-white/50"
                >
                  Ask a question
                </a>
              </div>            </div>          </section>
        </main>
      </div>
    );
  }
  // Fallback to simpler layout for other services
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{service.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">{service.title}</h1>
              <p className="text-xl text-accent font-medium mt-1">{service.subtitle}</p>
            </div>
          </div>
          <p className="text-xl text-dark font-medium mb-6">{service.purpose}</p>
          <p className="text-lg text-dark/80 leading-relaxed">{service.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white border border-navy-200 rounded-2xl p-6 shadow-card">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">What's included</h2>
            <ul className="space-y-2">
              {service.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-dark">
                  <span className="text-accent font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-navy-200 rounded-2xl p-6 shadow-card">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">Key outcomes</h2>
            <ul className="space-y-2">
              {service.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2 text-dark">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center border border-primary/20 shadow-card">
          <h3 className="text-xl font-heading font-bold text-primary mb-2">Perfect for</h3>
          <p className="text-dark text-lg mb-6">{service.idealFor}</p>
          <a 
            href="/contact" 
            className="inline-block bg-primary hover:bg-accent text-white py-3 px-8 rounded-full font-bold text-lg shadow-lg transition hover:transform hover:scale-105"
          >
            Let's discuss your project          </a>        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(serviceData).map((key) => ({
    params: { service: key },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = serviceData[params.service] || null;
  return { props: { service } };
}
