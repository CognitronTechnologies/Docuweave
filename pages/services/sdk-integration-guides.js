import Navbar from '../../components/Navbar';

export default function SDKIntegrationGuides() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-heading font-bold mb-6">SDK & Integration Guides</h1>
        <p className="text-white/80 text-lg leading-relaxed">
          Our SDK and integration guides provide step-by-step instructions for developers to integrate with your APIs or SDKs, ensuring a smooth and efficient development process.
        </p>
      </main>
    </div>
  );
}
