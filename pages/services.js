import Navbar from '../components/Navbar';
import Link from 'next/link';

const services = [
	{
		title: 'API Documentation',
		description: 'Swagger/OpenAPI, Postman, developer portals.',
		link: '/services/api-documentation',
	},
	{
		title: 'SDK & Integration Guides',
		description: 'How-to’s for integrating with your APIs or SDKs.',
		link: '/services/sdk-integration-guides',
	},
	{
		title: 'User Manuals & Admin Guides',
		description: 'Clear, actionable docs for technical and business users.',
		link: '/services/user-manuals',
	},
	{
		title: 'Config & Deployment Guides',
		description: 'Cloud infra, CI/CD, Terraform, and more.',
		link: '/services/config-deployment-guides',
	},
	{
		title: 'Knowledge Base Content',
		description: 'FAQs, troubleshooting, onboarding wikis.',
		link: '/services/knowledge-base',
	},
	{
		title: 'Technical Marketing',
		description: 'Dev blogs, whitepapers, landing page copy.',
		link: '/services/technical-marketing',
	},
];

export default function Services() {
	return (
		<div className="min-h-screen bg-navy text-white">
			<Navbar />
			<main className="max-w-7xl mx-auto px-4 py-12">
				<h1 className="text-4xl font-heading font-bold text-center mb-8">
					Our Services
				</h1>
				<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{services.map((service) => (
						<div
							key={service.title}
							className="bg-navy-light rounded-lg p-6 shadow-lg"
						>
							<h2 className="text-2xl font-semibold mb-2">
								{service.title}
							</h2>
							<p className="text-white/80 mb-4">
								{service.description}
							</p>
							<Link
								href={service.link}
								className="text-accent hover:underline"
							>
								Learn More
							</Link>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
