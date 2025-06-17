import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import { services } from '../../lib/servicesData';

export default function ServicePage({ service }) {
  if (!service) {
    return (
      <>
        <SEO
          title="Service Not Found | Docuweave"
          description="The requested service page could not be found."
          canonical="https://yourdomain.com/services/not-found"
          openGraph={{
            title: 'Service Not Found | Docuweave',
            description: 'The requested service page could not be found.',
            url: 'https://yourdomain.com/services/not-found',
            type: 'website',
          }}
        />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800">Service not found</h1>
              <p className="text-gray-600 mt-2">The requested service page could not be found.</p>
            </div>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${service.title} | Docuweave Services`}
        description={service.subtitle || service.heroDescription || 'Learn more about this service from Docuweave.'}
        canonical={`https://yourdomain.com/services/${service.slug || ''}`}
        openGraph={{
          title: `${service.title} | Docuweave Services`,
          description: service.subtitle || service.heroDescription || 'Learn more about this service from Docuweave.',
          url: `https://yourdomain.com/services/${service.slug || ''}`,
          type: 'article',
        }}
        schemaType="Service"
        schemaData={{
          name: service.title,
          description: service.heroDescription || service.subtitle,
          provider: {
            '@type': 'Organization',
            name: 'Docuweave',
            url: 'https://yourdomain.com',
          },
          areaServed: 'Global',
          serviceType: service.title,
          url: `https://yourdomain.com/services/${service.slug || ''}`,
        }}
      />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">{service.icon}</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h1>
              <p className="text-xl text-gray-600">{service.subtitle}</p>
            </div>
            
            {service.heroDescription && (
              <div className="bg-gray-50 rounded-lg p-8 mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">{service.heroDescription}</p>
              </div>
            )}
            
            <div className="text-center">
              <a
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(services).map((key) => ({
    params: { service: key },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = services[params.service] || null;
  return { props: { service } };
}
