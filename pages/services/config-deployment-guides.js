import Navbar from '../../components/Navbar';

export default function ConfigDeploymentGuides() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-heading font-bold mb-6">Config & Deployment Guides</h1>
        <p className="text-white/80 text-lg leading-relaxed">
          Our configuration and deployment guides cover cloud infrastructure, CI/CD pipelines, Terraform scripts, and more to streamline your deployment processes.
        </p>
      </main>
    </div>
  );
}
