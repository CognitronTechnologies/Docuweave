import Head from 'next/head'

/**
 * SEO component for setting meta tags, Open Graph, Twitter Card, and structured data (schema.org).
 * Usage: <SEO title="Page Title" description="Page description." schemaType="Service" schemaData={{...}} />
 */
export default function SEO({
  title = 'Docuweave | Technical Writing & Developer Docs Consultancy',
  description = 'We help software teams create clear, useful developer documentation. API docs, onboarding, content strategy, and more.',
  url = 'https://docuweave.io',
  image = 'https://docuweave.io/og-image.png',
  type = 'website',
  schemaType,
  schemaData,
  children,
}) {
  // Default Organization and WebSite schema
  const defaultSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Docuweave',
      url,
      logo: image,
      sameAs: [url],
      description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      description,
    },
  ]

  // Add custom schema if provided
  const schemas = [...defaultSchemas]
  if (schemaType && schemaData) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': schemaType,
      ...schemaData,
    })
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* Structured Data Schemas */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </Head>
  )
}
