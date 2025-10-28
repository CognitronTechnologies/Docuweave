// All service data is exported as plain serializable objects (no JSX, no functions)
export const services = {
  "product-documentation": {
    title: "Product Documentation",
    subtitle: "Ship documentation alongside your product",
    icon: "📄",
    heroDescription: "Create developer-first, launch-ready docs that reduce support requests, increase adoption, and help your users succeed from day one. From API references to SDK tutorials, we build docs that scale with your product.",
    targetAudience: [
      "Startups launching APIs, SDKs, or platforms",
      "Product teams preparing for GA",
      "Engineering teams lacking documentation bandwidth",
      "Companies wanting enterprise-ready documentation"
    ],
    problemsSolved: [
      "We built the product, but haven't written any docs.",
      "Our docs are outdated and scattered across different platforms.",
      "Support is overwhelmed with integration questions.",
      "We need docs that evolve with our product roadmap."
    ],
    includes: [
      "API documentation — REST, GraphQL, OpenAPI specs, interactive examples",
      "SDK & integration guides — Step-by-step tutorials with code samples",
      "Installation & setup docs — For tools, libraries, and deployments",
      "User guides & tutorials — From quickstart to advanced use cases",
      "Release notes & changelogs — Clear communication of updates and changes",
      "Reference documentation — Complete coverage of features and functionality"
    ],
    bonus: "We structure docs for scalability using industry best practices like Docs-as-Code and modular architecture.",
    approach: [
      { step: "🔍 Discovery & Planning", description: "We audit your product and define documentation requirements with your team." },
      { step: "✍️ Content Creation", description: "Technical writers collaborate with engineers to create accurate, user-friendly docs." },
      { step: "🔄 Review & Iteration", description: "Content is reviewed, tested, and refined based on stakeholder feedback." },
      { step: "🚀 Launch & Optimization", description: "Deploy docs and establish processes for ongoing maintenance and updates." }
    ],
    timeline: "2–6 weeks, depending on product complexity and scope.",
    addOns: [
      "Interactive code examples and demos",
      "Video tutorials and walkthroughs",
      "Multi-language documentation",
      "Custom developer portal setup"
    ],
    outcomes: [
      "Reduced support ticket volume",
      "Faster developer onboarding",
      "Improved product adoption",
      "Enhanced developer experience"
    ],
    testimonial: {
      quote: "Docuweave delivered comprehensive API docs that cut our support tickets by 60% and accelerated developer onboarding significantly.",
      author: "Head of Product, API Platform"
    }
  },
  
  "developer-marketing": {
    title: "Developer Marketing",
    subtitle: "Marketing that converts developers—without feeling like marketing",
    icon: "🚀",
    heroDescription: "Create technical content that builds trust, demonstrates expertise, and grows your developer community. We write for engineers, by engineers—content that actually gets read, shared, and acted upon.",
    targetAudience: [
      "Dev-first startups needing thought leadership",
      "Marketing teams requiring technical storytelling",
      "DevRel teams scaling high-quality content",
      "Companies building developer community"
    ],
    problemsSolved: [
      "Our technical blog is empty or inconsistent.",
      "Marketing content doesn't resonate with developers.",
      "We struggle to explain complex concepts clearly.",
      "Need content that builds credibility with technical audiences."
    ],
    includes: [
      "Technical blog posts — Tutorials, deep dives, and thought leadership",
      "Developer case studies — Success stories and implementation examples",
      "Whitepapers & guides — In-depth technical resources",
      "Community content — Forum posts, documentation, Q&A",
      "Landing page copy — For technical products and developer tools",
      "Newsletter content — Developer-focused updates and insights"
    ],
    bonus: "All content is SEO-optimized and technically validated by engineers to ensure accuracy and credibility.",
    approach: [
      { step: "🎯 Strategy & Planning", description: "Define content goals, audience personas, and editorial calendar." },
      { step: "📝 Content Development", description: "Create technically accurate, engaging content that resonates with developers." },
      { step: "🔍 Technical Review", description: "All content is validated by subject matter experts for accuracy." },
      { step: "📈 Performance & Optimization", description: "Track engagement metrics and optimize content strategy based on results." }
    ],
    timeline: "Ongoing monthly content calendar or project-based sprints.",
    addOns: [
      "Social media content and snippets",
      "Conference talk abstracts and proposals",
      "Podcast scripts and show notes",
      "Email marketing campaigns"
    ],
    outcomes: [
      "Increased developer engagement",
      "Higher quality leads",
      "Enhanced brand credibility",
      "Stronger developer community"
    ],
    testimonial: {
      quote: "Our technical content finally sounds like it came from engineers, not marketers. Developer engagement doubled in just three months.",
      author: "Head of DevRel, Developer Tools Company"
    }
  },
  
  "modern-docs-stack": {
    title: "Modern Docs Stack",
    subtitle: "Build a future-ready documentation infrastructure",
    icon: "🛠️",
    heroDescription: "Modernize your documentation with scalable, developer-friendly systems. From Docs-as-Code workflows to AI-ready architectures, we help you build documentation infrastructure that grows with your team.",
    targetAudience: [
      "Teams migrating from legacy documentation platforms",
      "Startups scaling their documentation systems",
      "Engineering orgs adopting Docs-as-Code workflows",
      "Companies preparing for AI-enhanced documentation"
    ],
    problemsSolved: [
      "Docs are scattered across multiple platforms and tools.",
      "Current system doesn't scale with team growth.",
      "Difficult to maintain consistency and version control.",
      "Want to leverage AI but docs aren't structured properly."
    ],
    includes: [
      "Docs-as-Code implementation — Modern static site generators and Git workflows",
      "Content migration — Clean transition from legacy systems to modern stack",
      "Information architecture — Scalable structure and navigation design",
      "AI-readiness optimization — Structure content for future AI integration",
      "Search and discovery — Advanced search capabilities and content findability",
      "CI/CD integration — Automated publishing and deployment workflows"
    ],
    bonus: "We document the documentation system itself, ensuring your team can maintain and evolve it independently.",
    approach: [
      { step: "🔍 System Assessment", description: "Evaluate current tools, content, and team workflows to identify gaps." },
      { step: "🏗️ Architecture Design", description: "Design modern documentation infrastructure tailored to your needs." },
      { step: "🚚 Migration & Setup", description: "Migrate content and implement new systems with minimal disruption." },
      { step: "🎓 Training & Handoff", description: "Train team on new workflows and provide ongoing support." }
    ],
    timeline: "3–8 weeks, depending on system complexity and content volume.",
    addOns: [
      "Custom themes and branding",
      "Advanced analytics and insights",
      "AI-powered search and chat integration",
      "Multi-language and localization support"
    ],
    outcomes: [
      "Streamlined documentation workflows",
      "Improved content maintenance",
      "Better developer experience",
      "Future-ready infrastructure"
    ],
    testimonial: {
      quote: "Our documentation went from a scattered mess to a streamlined, Git-based system that the whole team loves using. Game changer.",
      author: "VP of Engineering, SaaS Platform"
    }
  }
};

// NOTE: Do NOT use JSX for icons in data. Use emoji or string keys only.
