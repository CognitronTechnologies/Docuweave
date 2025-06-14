import Navbar from '../components/Navbar';
import Link from 'next/link';

const services = [
	{
		title: 'API documentation',
		description: 'Swagger/OpenAPI, Postman, developer portals.',
		link: '/services/api-documentation',
	},
	{
		title: 'SDK & integration guides',
		description: 'How-to’s for integrating with your APIs or SDKs.',
		link: '/services/sdk-integration-guides',
	},
	{
		title: 'User manuals & admin guides',
		description: 'Clear, actionable docs for technical and business users.',
		link: '/services/user-manuals',
	},
	{
		title: 'Config & deployment guides',
		description: 'Cloud infra, CI/CD, Terraform, and more.',
		link: '/services/config-deployment-guides',
	},
	{
		title: 'Knowledge base content',
		description: 'FAQs, troubleshooting, onboarding wikis.',
		link: '/services/knowledge-base',
	},
	{
		title: 'Technical marketing',
		description: 'Dev blogs, whitepapers, landing page copy.',
		link: '/services/technical-marketing',
	},
];

export default function Services() {
	return (
		<div className="min-h-screen bg-light dark:bg-navy text-dark dark:text-white">
			<Navbar />
			<main className="max-w-7xl mx-auto px-4 py-12">				<h1 className="text-4xl font-heading font-bold text-center mb-8">
					Our services
				</h1>
				<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{services.map((service) => (
						<div
							key={service.title}
							className="bg-white dark:bg-navy-light rounded-lg p-6 shadow-card border border-gray-100 dark:border-navy-light/30 hover:shadow-card-hover transition-shadow duration-300"
						>
							<h2 className="text-2xl font-semibold mb-2 text-dark dark:text-white">
								{service.title}
							</h2>
							<p className="text-dark/70 dark:text-white/80 mb-4">
								{service.description}
							</p>
							<Link
								href={service.link}
								className="text-accent hover:text-accent/80 hover:underline transition-colors duration-200"
							>
								Learn more
							</Link>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
