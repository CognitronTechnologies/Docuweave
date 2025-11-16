// All service data is exported as plain serializable objects (no JSX, no functions)
export const services = {
  "product-documentation": {
    title: "Product documentation",
    subtitle: "Documentation that ships with your product, not weeks after",
    icon: "📄",
    heroDescription: "Professional documentation services for SaaS and developer tool companies. Our technical writers create high-quality docs that accelerate product adoption and reduces support tickets and accelerates product adoption. Get REST API docs, SDK guides, and integration tutorials that help users succeed from day one.",
    targetAudience: [
      "Startups shipping their first API or developer tool",
      "Product teams with a launch deadline and no docs",
      "Engineering teams too busy to write (or update) docs",
      "Companies needing docs that feel enterprise-ready"
    ],
    problemsSolved: [
      "\"We shipped, but our docs are still half-finished (or non-existent).\"",
      "\"Our docs are outdated and no one knows where things are.\"",
      "\"Support keeps getting the same integration questions over and over.\"",
      "\"Docs haven't kept up with our product. They're months behind.\""
    ],
    includes: [
      "API documentation: REST, GraphQL, webhooks, with working examples",
      "SDK and integration guides: Step-by-step walkthroughs with real code",
      "Installation and setup: Get users from zero to working in minutes",
      "User guides and tutorials: From quickstart to advanced workflows",
      "Release notes and changelogs: Clear updates users actually read",
      "Reference docs: Complete feature coverage that stays current",
    ],
    approach: [
      { step: "🔍 Discover and audit", description: "We review your product, talk to your team, and figure out what docs you actually need." },
      { step: "✍️ Write and build", description: "We work with your engineers to create accurate, developer-friendly content." },
      { step: "🔄 Review and refine", description: "Your team reviews, we iterate, and we make sure everything is clear and correct." },
      { step: "🚀 Ship and maintain", description: "We help you publish and set up a system so docs stay fresh as your product evolves." }
    ],
    outcomes: [
      "Fewer \"how do I...?\" support tickets",
      "Developers get up and running faster",
      "Higher product adoption and usage",
      "Docs your team can actually maintain"
    ]
  },
  
  "developer-marketing": {
    title: "Developer marketing",
    subtitle: "Technical content that builds trust (not just traffic)",
    icon: "🚀",
    heroDescription: "Technical content marketing services for developer tools and SaaS products. Our technical writers create tutorials, guides, and thought leadership content that educates developers and drives organic growth. Content written by engineers who understand your stack and speak your audience's language.",
    targetAudience: [
      "Developer tools companies needing credible content",
      "Marketing teams who can't translate tech into words",
      "DevRel teams stretched too thin to write consistently",
      "Startups building community through quality content"
    ],
    problemsSolved: [
      "\"Our blog is empty, or the posts we have feel generic and shallow.\"",
      "\"Marketing writes content that developers don't trust or read.\"",
      "\"We know what to build, but struggle to explain why it matters.\"",
      "\"We need content that makes developers want to try our product.\""
    ],
    includes: [
      "Technical blog posts: Tutorials, deep dives, and honest perspectives that developers trust",
      "Developer case studies: Real implementations, results, and customer success stories",
      "Whitepapers and guides: In-depth resources and downloadable content developers actually use",
      "Landing pages and newsletters: Developer-focused copy that converts and engages your audience",
      "Community content: Helpful answers, discussions, and resources for developer communities",
      "Technical review: Every piece is reviewed by engineers for accuracy and credibility"
    ],
    approach: [
      { step: "🎯 Strategy session", description: "We figure out who you're writing for, what they care about, and how to reach them." },
      { step: "📝 Content creation", description: "We write content that's technical enough to be useful and clear enough to be readable." },
      { step: "🔍 Tech review", description: "Engineers review everything to make sure we didn't oversimplify or get anything wrong." },
      { step: "📈 Track and improve", description: "We see what resonates, learn from the data, and keep getting better." }
    ],
    outcomes: [
      "Developers engaging with (and sharing) your content",
      "More qualified leads from technical audiences",
      "Credibility that sets you apart from competitors",
      "A community that trusts and recommends you"
    ]
  },
  
  "modern-docs-stack": {
    title: "Modern docs stack",
    subtitle: "Documentation infrastructure that grows with you",
    icon: "🛠️",
    heroDescription: "Documentation infrastructure services for SaaS teams. Build scalable docs-as-code systems with modern tools like Mintlify, Docusaurus, and GitBook. We help engineering teams migrate from outdated platforms to developer-friendly documentation that integrates with your CI/CD pipeline and scales with your product.",
    targetAudience: [
      "Teams migrating from outdated platforms (Confluence, wikis, PDFs)",
      "Startups whose docs setup is holding them back",
      "Engineering teams wanting docs that work like code",
      "Companies preparing for AI-powered docs or search"
    ],
    problemsSolved: [
      "\"Our docs are scattered across Confluence, Google Docs, and random wikis.\"",
      "\"Updating docs is painful. No one knows the process or has access.\"",
      "\"We want docs in Git, but don't know where to start.\"",
      "\"Our current setup won't scale as the team or product grows.\""
    ],
    includes: [
      "Docs-as-Code setup: Modern tools (Mintlify, Docusaurus, MkDocs, etc.) in Git.",
      "Content migration: Move everything over without losing history or breaking links",
      "Information architecture: Logical structure so people can find what they need",
      "AI-ready formatting: Structure content for future search and AI tools",
      "Search and navigation: Make docs easy to explore and discover",
      "CI/CD integration: Automatically publish docs when code ships"
    ],
    approach: [
      { step: "🔍 Audit your setup", description: "We look at what you have now, what's working, and what's broken." },
      { step: "🏗️ Design the system", description: "We recommend tools and workflows that fit your team and product." },
      { step: "🚚 Migrate and build", description: "We move your content, set up the new system, and make sure nothing breaks." },
      { step: "🎓 Train and hand off", description: "We show your team how to use it, then step back so you're in control." }
    ],
    outcomes: [
      "One central place for all your docs",
      "Docs that are easy to update and keep current",
      "Developers can work on docs like they work on code",
      "A system that grows with your product and team"
    ]
  },

  "hire-technical-writer": {
    title: "Hire technical writers",
    subtitle: "Engineers who write docs developers actually use",
    icon: "✍️",
    heroDescription: "Hire technical writers with engineering backgrounds for your SaaS, API, or developer tool. Get experienced writers who understand code and ship documentation that drives product adoption. Fast onboarding, flexible engagement, transparent pricing.",
    targetAudience: [
      "Startups launching developer products without docs",
      "Engineering teams too busy to document features",
      "CTOs needing docs expertise without full-time headcount",
      "Product teams preparing for enterprise sales"
    ],
    problemsSolved: [
      "\"We need to hire a technical writer, but recruiting takes months.\"",
      "\"Full-time writers are expensive and we only need help part-time.\"",
      "\"Our engineers write code, not docs. We need someone who does both.\"",
      "\"We've hired writers before, but they couldn't understand our product.\""
    ],
    includes: [
      "Technical writers with engineering backgrounds: We write code and docs",
      "Free documentation audit: We identify gaps and prioritize what to write first",
      "Fast onboarding: Start delivering within days, not months",
      "Flexible engagement: Project-based, part-time, or ongoing support",
      "Documentation strategy: We help you plan what to write and when",
      "Hands-on product testing: We use your product to write accurate guides"
    ],
    approach: [
      { step: "📋 Audit your documentation", description: "We analyze your existing docs, developer journey, and content gaps. You'll know exactly what's missing and why developers are struggling." },
      { step: "👤 Onboard your writer", description: "An experienced technical writer with an engineering background joins your team. They learn your product, follow your workflow, and start delivering within days." },
      { step: "✍️ Create and iterate", description: "We write clear, accurate docs that developers love. Regular reviews and feedback keep everything aligned with your product and audience." },
      { step: "📈 Scale and maintain", description: "As your product grows, we help you maintain quality. Content strategy, distribution plans, and systems that keep docs fresh as you ship." }
    ],
    outcomes: [
      "Professional documentation without months of recruiting",
      "Writers who understand your tech stack and audience",
      "Flexible support that scales with your needs",
      "Docs that reduce support load and increase adoption"
    ],
    faqs: [
      {
        question: "How much does it cost to hire a technical writer?",
        answer: "Our pricing is project-based and transparent. After a free documentation audit, we provide a clear quote based on scope, complexity, and timeline. Most clients spend between $4,000-$15,000 per month for ongoing support, or $7,500-$30,000 for one-time projects. To get a custom quote, contact us for a discovery call"
      },
      {
        question: "How quickly can a technical writer start?",
        answer: "We can onboard an experienced technical writer within 3-5 business days. After the initial discovery call and documentation audit, your writer gets access to your product and begins delivering within the first weeks."
      },
      {
        question: "Do your technical writers have engineering experience?",
        answer: "Yes. All our technical writers have engineering backgrounds and hands-on coding experience. They understand APIs, SDKs, developer tools, and test your product while writing documentation to ensure accuracy. We pair you with a technical writer who understands your tech stack and can communicate effectively with your engineering team."
      },
      {
        question: "What's the difference between hiring a full-time writer vs. your service?",
        answer: "Hiring full-time takes 2-3 months and costs $80,000-$140,000/year plus benefits. Our service starts in days, scales with your needs (project-based or ongoing), and gives you access to experienced writers immediately without recruiting overhead or long-term commitments."
      },
      {
        question: "Can you work with our existing tools and workflows?",
        answer: "Absolutely. We integrate with your existing stack—GitHub, GitLab, Notion, Confluence, Mintlify, Docusaurus, or any docs platform. We follow your branching strategy, review process, and release cycle to fit seamlessly into your team."
      },
      {
        question: "Do you only write documentation or also help with strategy?",
        answer: "Both. Every engagement starts with a free documentation audit where we identify gaps and prioritize what to write. We also provide content strategy, information architecture recommendations, and help you build sustainable docs processes as you scale."
      }
    ]
  }
};

// NOTE: Do NOT use JSX for icons in data. Use emoji or string keys only.
