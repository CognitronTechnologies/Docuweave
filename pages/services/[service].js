import Navbar from '../../components/Navbar';

const serviceData = {
  'api-documentation': {
    title: 'API Documentation',
    description: 'We provide comprehensive API documentation, including Swagger/OpenAPI specifications, Postman collections, and developer portals to ensure seamless integration and understanding of your APIs.',
  },
  'sdk-integration-guides': {
    title: 'SDK & Integration Guides',
    description: 'Our SDK and integration guides provide step-by-step instructions for developers to integrate with your APIs or SDKs, ensuring a smooth and efficient development process.',
  },
  'user-manuals': {
    title: 'User Manuals & Admin Guides',
    description: 'We create clear and actionable user manuals and admin guides tailored for both technical and business users, ensuring everyone can effectively use your products and services.',
  },
  'config-deployment-guides': {
    title: 'Config & Deployment Guides',
    description: 'Our configuration and deployment guides cover cloud infrastructure, CI/CD pipelines, Terraform scripts, and more to streamline your deployment processes.',
  },
  'knowledge-base': {
    title: 'Knowledge Base Content',
    description: 'We develop comprehensive knowledge base content, including FAQs, troubleshooting guides, and onboarding wikis, to empower your users with self-service resources.',
  },
  'technical-marketing': {
    title: 'Technical Marketing',
    description: 'Our technical marketing services include developer blogs, whitepapers, and landing page copy to effectively communicate the value of your products to technical audiences.',
  },
};

export default function ServicePage({ service }) {
  return (
    <div className="flex flex-col min-h-screen bg-navy text-white">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-heading font-bold mb-6">{service.title}</h1>
        <p className="text-white/80 text-lg leading-relaxed">{service.description}</p>
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
