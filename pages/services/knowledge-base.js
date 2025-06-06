import Navbar from '../../components/Navbar';

export default function KnowledgeBase() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-heading font-bold mb-6">Knowledge Base Content</h1>
        <p className="text-white/80 text-lg leading-relaxed">
          We develop comprehensive knowledge base content, including FAQs, troubleshooting guides, and onboarding wikis, to empower your users with self-service resources.
        </p>
      </main>
    </div>
  );
}
