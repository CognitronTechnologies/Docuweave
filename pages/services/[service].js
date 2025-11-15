import { services } from '../../lib/servicesData';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function ServicePage({ service }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  if (!service) {
    return (
      <>
        <SEO
          title="Service Not Found | Docuweave"
          description="The requested service page could not be found."
          canonical="https://docuweave.io/services/not-found"
          openGraph={{
            title: 'Service Not Found | Docuweave',
            description: 'The requested service page could not be found.',
            url: 'https://docuweave.io/services/not-found',
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
        title={`${service.title} | Docuweave`}
        description={service.heroDescription || service.subtitle || service.purpose}
        canonical={`https://docuweave.io/services/${service.slug || ''}`}
        openGraph={{
          title: `${service.title} | Docuweave Services`,
          description: service.heroDescription || service.subtitle || service.purpose,
          url: `https://docuweave.io/services/${service.slug || ''}`,
          type: 'article',
        }}
        schemaType="Service"
        schemaData={{
          name: service.title,
          description: service.heroDescription || service.subtitle || service.purpose,
          provider: {
            '@type': 'Organization',
            name: 'Docuweave',
            url: 'https://docuweave.io',
          },
          areaServed: 'Global',
          serviceType: service.title,
          url: `https://docuweave.io/services/${service.slug || ''}`,
        }}
      >
        {/* FAQ Schema */}
        {service.faqs && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: service.faqs.map(faq => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer
                  }
                }))
              })
            }}
          />
        )}
      </SEO>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="max-w-6xl mx-auto px-4 py-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-6xl">{service.icon}</span>
              <div>
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-text-primary">{service.title}</h1>
                {service.subtitle && <p className="text-2xl text-accent font-medium mt-2">{service.subtitle}</p>}
              </div>
            </div>
            {service.heroDescription && <p className="text-xl text-text-secondary leading-relaxed max-w-4xl mx-auto">{service.heroDescription}</p>}
            {service.purpose && <p className="text-xl text-text-secondary leading-relaxed max-w-4xl mx-auto">{service.purpose}</p>}
          </section>

          {/* Target Audience */}
          {service.targetAudience && (
            <section className="bg-light-secondary py-16">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center">Perfect for</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {service.targetAudience.map((audience, index) => (
                    <div key={index} className="bg-white border border-border rounded-xl p-6 shadow-card text-center hover:shadow-card-hover transition-shadow">
                      <p className="text-text-primary font-medium">{audience}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Problems Solved */}
          {service.problemsSolved && (
            <section className="bg-white py-16">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center">Sounds familiar?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.problemsSolved.map((problem, index) => (
                    <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-card">
                      <p className="text-red-800 font-medium italic">{problem}</p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-xl text-text-secondary mt-8 font-medium">We fix these problems so you can focus on what you do best.</p>
              </div>
            </section>
          )}

          {/* What's Included */}
          {service.includes && (
            <section className="bg-light-secondary py-16">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center">🛠️ What's included</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.includes.map((item, index) => (
                    <div key={index} className="bg-white border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                      <div className="flex items-start gap-3">
                        <span className="text-accent font-bold text-xl mt-1">✓</span>
                        <span className="text-text-primary font-medium leading-relaxed">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {service.bonus && (
                  <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 text-center border border-primary/20">
                    <p className="text-text-primary font-medium"><strong className="text-primary">🔍 Bonus:</strong> {service.bonus}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Our Approach */}
          {service.approach && (
            <section className="bg-white py-16">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center">🧭 Our approach</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {service.approach.map((step, index) => (
                    <div key={index} className="bg-light-secondary border border-border rounded-xl p-6 shadow-card text-center hover:shadow-card-hover transition-shadow">
                      <div className="text-2xl mb-3 font-medium text-primary">{step.step}</div>
                      <p className="text-text-secondary leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Key Outcomes */}
          {service.outcomes && (
            <section className="bg-white py-16">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center">Key outcomes</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.outcomes.map((outcome, index) => (
                    <div key={index} className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-card">
                      <p className="text-green-800 font-medium">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Testimonial */}
          {service.testimonial && (
            <section className="bg-light-secondary py-16">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center">What clients say</h2>
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center border border-primary/20 shadow-card">
                  <blockquote className="text-xl text-text-primary italic mb-4 leading-relaxed">
                    "{service.testimonial.quote}"
                  </blockquote>
                  <cite className="text-accent font-semibold">— {service.testimonial.author}</cite>
                </div>
              </div>
            </section>
          )}

          {/* FAQ Section */}
          {service.faqs && (
            <section className="bg-white py-16">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center">Frequently asked questions</h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className="bg-light-secondary border border-border rounded-xl overflow-hidden shadow-card">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/50 transition-colors"
                        aria-expanded={openFaqIndex === index}
                      >
                        <h3 className="text-lg font-semibold text-text-primary pr-4">{faq.question}</h3>
                        <ChevronDownIcon 
                          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200 ${
                            openFaqIndex === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openFaqIndex === index && (
                        <div className="px-6 pb-6 pt-2">
                          <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="bg-primary text-white py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">Ready to ship docs that drive results?</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">Let's discuss your project and create documentation that accelerates your product's success.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-block bg-accent hover:bg-accent/90 text-white py-4 px-8 rounded-full font-bold text-lg shadow-lg transition hover:transform hover:scale-105"
                >
                  Start your project
                </a>
                <a 
                  href="mailto:dickson@docuweave.io" 
                  className="inline-block bg-white/20 hover:bg-white/30 text-white py-4 px-8 rounded-full font-bold text-lg transition border border-white/30 hover:border-white/50"
                >
                  Ask a question
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(services).map((key) => ({ params: { service: key } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const service = services[params.service] || null;
  return { props: { service } };
}