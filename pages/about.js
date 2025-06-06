import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-light via-white to-accent/10">
      <Navbar />
      <main className="flex-1 max-w-2xl mx-auto py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">About Docuweave</h1>
        <p className="mb-4 text-dark/80 text-lg">
          <b>Docuweave</b> is a technical documentation agency dedicated to helping engineering teams, startups, and SaaS platforms communicate clearly with developers and technical audiences.
        </p>
        <p className="mb-4 text-dark/80 text-lg">
          Our team specializes in API documentation, SDK guides, onboarding wikis, technical blogs, and more—distilling complex concepts into delightful, developer-friendly docs.
        </p>
        <p className="mb-4 text-dark/80 text-lg">
          Whether you need a full documentation portal, support for a major release, or a long-term content partner, Docuweave is here to help you scale your developer experience.
        </p>
        <p className="text-dark/60 mt-8">Let’s build something great together.</p>
      </main>
    </div>
  )
}