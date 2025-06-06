import Navbar from '../../components/Navbar';

export default function APIDocumentation() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-heading font-bold mb-6">API Documentation</h1>
        <p className="text-white/80 text-lg leading-relaxed">
          We provide comprehensive API documentation, including Swagger/OpenAPI specifications, Postman collections, and developer portals to ensure seamless integration and understanding of your APIs.
        </p>
      </main>
    </div>
  );
}
