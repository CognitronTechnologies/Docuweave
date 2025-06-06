import Navbar from '../../components/Navbar';

export default function TechnicalMarketing() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-heading font-bold mb-6">Technical Marketing</h1>
        <p className="text-white/80 text-lg leading-relaxed">
          Our technical marketing services include developer blogs, whitepapers, and landing page copy to effectively communicate the value of your products to technical audiences.
        </p>
      </main>
    </div>
  );
}
