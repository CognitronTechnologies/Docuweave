import Navbar from '../../components/Navbar';
import { services } from '../../lib/servicesData';

export default function ServicePage({ service }) {
  if (!service) {
    return <div>Service not found.</div>;
  }

  // Check if this is the detailed "Product-Ready Docs" service
  const isDetailedService = service.heroDescription && service.targetAudience;
  if (isDetailedService) {
    return (
      <div className="flex flex-col min-h-screen bg-bg-secondary dark:bg-navy-dark">
        <Navbar />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="max-w-6xl mx-auto px-4 py-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-6xl">{service.icon}</span>
              <div>
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary dark:text-white">{service.title}</h1>
                <p className="text-2xl text-accent font-medium mt-2">{service.subtitle}</p>
              </div>
            </div>
            <p className="text-xl text-text-secondary dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">{service.heroDescription}</p>
          </section>

          {/* Target Audience */}
          <section className="bg-bg-primary dark:bg-navy py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-8 text-center">👥 Perfect For</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.targetAudience.map((audience, index) => (
                  <div key={index} className="bg-navy-50 dark:bg-navy-light border border-navy-200 dark:border-navy-light rounded-xl p-6 shadow-card text-center hover:shadow-card-hover transition-shadow">
                    <p className="text-text-primary dark:text-white font-medium">{audience}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Problems Solved */}
          <section className="bg-bg-secondary dark:bg-navy-dark py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-8 text-center">🔥 Sound Familiar?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.problemsSolved.map((problem, index) => (
                  <div key={index} className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-xl p-6 shadow-card">
                    <p className="text-red-800 dark:text-red-300 font-medium italic">{problem}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-xl text-text-secondary dark:text-gray-300 mt-8 font-medium">We fix these problems so you can focus on what you do best.</p>
            </div>
          </section>

          {/* What's Included */}
          <section className="bg-bg-primary dark:bg-navy py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-8 text-center">🛠️ What's included</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.includes.map((item, index) => (
                  <div key={index} className="bg-navy-50 dark:bg-navy-light border border-navy-200 dark:border-navy-light rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                    <div className="flex items-start gap-3">
                      <span className="text-accent font-bold text-xl mt-1">✓</span>
                      <span className="text-text-primary dark:text-white font-medium leading-relaxed">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
              {service.bonus && (
                <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-xl p-6 text-center border border-primary/20 dark:border-accent/30">
                  <p className="text-text-primary dark:text-white font-medium"><strong className="text-primary dark:text-accent">🔍 Bonus:</strong> {service.bonus}</p>
                </div>
              )}
            </div>
          </section>
          {/* Our Approach */}
          <section className="bg-bg-secondary dark:bg-navy-dark py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-8 text-center">🧭 Our approach</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.approach.map((step, index) => (
                  <div key={index} className="bg-bg-primary dark:bg-navy border border-navy-200 dark:border-navy-light rounded-xl p-6 shadow-card text-center hover:shadow-card-hover transition-shadow">
                    <div className="text-2xl mb-3 font-medium text-primary dark:text-accent">{step.step}</div>
                    <p className="text-text-secondary dark:text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Timeline, Add-ons */}
          <section className="bg-bg-primary dark:bg-navy py-16">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Timeline */}
                <div className="bg-navy-50 dark:bg-navy-light border border-navy-200 dark:border-navy-light rounded-xl p-6 shadow-card">
                  <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-4">⏱️ Timeline</h3>
                  <p className="text-text-primary dark:text-white font-medium">{service.timeline}</p>
                </div>

                {/* Add-ons */}
                <div className="bg-navy-50 dark:bg-navy-light border border-navy-200 dark:border-navy-light rounded-xl p-6 shadow-card">
                  <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-4">✅ Add-ons</h3>
                  <ul className="space-y-2">
                    {service.addOns.map((addon, index) => (
                      <li key={index} className="text-text-secondary dark:text-gray-300 text-sm leading-relaxed">• {addon}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonial */}
          {service.testimonial && (
            <section className="bg-bg-secondary dark:bg-navy-dark py-16">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-8 text-center">💬 What clients say</h2>
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-xl p-8 text-center border border-primary/20 dark:border-accent/30 shadow-card">
                  <blockquote className="text-xl text-text-primary dark:text-white italic mb-4 leading-relaxed">
                    "{service.testimonial.quote}"
                  </blockquote>
                  <cite className="text-accent font-semibold">— {service.testimonial.author}</cite>
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="bg-primary dark:bg-accent text-white py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">Ready to ship docs that drive results?</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">Let's discuss your project and create documentation that accelerates your product's success.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-accent dark:bg-primary hover:bg-accent/90 dark:hover:bg-primary/90 text-white py-4 px-8 rounded-full font-bold text-lg shadow-lg transition hover:transform hover:scale-105"
                >
                  Start your project
                </a>
                <a
                  href="mailto:hello@docuweave.com"
                  className="inline-block bg-white/20 hover:bg-white/30 text-white py-4 px-8 rounded-full font-bold text-lg transition border border-white/30 hover:border-white/50"
                >
                  Ask a question
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
  // Fallback to simpler layout for other services
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{service.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">{service.title}</h1>
              <p className="text-xl text-accent font-medium mt-1">{service.subtitle}</p>
            </div>
          </div>
          <p className="text-xl text-dark font-medium mb-6">{service.purpose}</p>
          <p className="text-lg text-dark/80 leading-relaxed">{service.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white border border-navy-200 rounded-2xl p-6 shadow-card">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">What's included</h2>
            <ul className="space-y-2">
              {service.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-dark">
                  <span className="text-accent font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-navy-200 rounded-2xl p-6 shadow-card">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">Key outcomes</h2>
            <ul className="space-y-2">
              {service.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2 text-dark">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center border border-primary/20 shadow-card">
          <h3 className="text-xl font-heading font-bold text-primary mb-2">Perfect for</h3>
          <p className="text-dark text-lg mb-6">{service.idealFor}</p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-accent text-white py-3 px-8 rounded-full font-bold text-lg shadow-lg transition hover:transform hover:scale-105"
          >
            Let's discuss your project          </a>        </div>
      </main>
    </div>
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
