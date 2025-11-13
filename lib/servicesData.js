// All service data is exported as plain serializable objects (no JSX, no functions)
export const services = {
  "product-documentation": {
    title: "Product documentation",
    subtitle: "Documentation that ships with your product, not weeks after",
    icon: "📄",
    heroDescription: "Expert technical writers create clear, complete API documentation, SDK guides, and user docs that help developers succeed from day one. Reduce support tickets and accelerate product adoption with professional documentation services.",
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
      { step: "🔍 Discover and Audit", description: "We review your product, talk to your team, and figure out what docs you actually need." },
      { step: "✍️ Write and Build", description: "We work with your engineers to create accurate, developer-friendly content." },
      { step: "🔄 Review and Refine", description: "Your team reviews, we iterate, and we make sure everything is clear and correct." },
      { step: "🚀 Ship and Maintain", description: "We help you publish and set up a system so docs stay fresh as your product evolves." }
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
    heroDescription: "Professional technical content marketing for developer tools and SaaS. We create tutorials, guides, and thought leadership that educates developers and drives organic growth. Content written by engineers who understand your stack.",
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
      "Technical blog posts: Tutorials, deep dives, and honest perspectives",
      "Developer case studies: Real implementations and results",
      "Whitepapers and guides: Thoughtful resources developers actually use",
      "Community content: Helpful answers, discussions, and resources",
      "Landing pages: Copy that speaks to developers, not marketing jargon",
      "Developer newsletters: Updates and insights developers look forward to",
      "Technical review: Every piece is reviewed by engineers for accuracy and credibility"
    ],
    approach: [
      { step: "🎯 Strategy Session", description: "We figure out who you're writing for, what they care about, and how to reach them." },
      { step: "📝 Content Creation", description: "We write content that's technical enough to be useful and clear enough to be readable." },
      { step: "🔍 Tech Review", description: "Engineers review everything to make sure we didn't oversimplify or get anything wrong." },
      { step: "📈 Track and Improve", description: "We see what resonates, learn from the data, and keep getting better." }
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
    heroDescription: "Build scalable documentation infrastructure with modern tools like Mintlify, Docusaurus, and docs-as-code workflows. We help SaaS teams migrate from outdated platforms to developer-friendly documentation systems that integrate with your CI/CD pipeline.",
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
      { step: "🔍 Audit Your Setup", description: "We look at what you have now, what's working, and what's broken." },
      { step: "🏗️ Design the System", description: "We recommend tools and workflows that fit your team and product." },
      { step: "🚚 Migrate and Build", description: "We move your content, set up the new system, and make sure nothing breaks." },
      { step: "🎓 Train and Hand Off", description: "We show your team how to use it, then step back so you're in control." }
    ],
    outcomes: [
      "One central place for all your docs",
      "Docs that are easy to update and keep current",
      "Developers can work on docs like they work on code",
      "A system that grows with your product and team"
    ]
  }
};

// NOTE: Do NOT use JSX for icons in data. Use emoji or string keys only.
