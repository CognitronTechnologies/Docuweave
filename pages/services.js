import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { CodeBracketIcon, BookOpenIcon, ArrowTrendingUpIcon, AdjustmentsHorizontalIcon, GlobeAltIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

const iconMap = {
	'code-bracket': <CodeBracketIcon className="w-8 h-8 text-primary" />,
	'book-open': <BookOpenIcon className="w-8 h-8 text-accent" />,
	'arrow-trending-up': <ArrowTrendingUpIcon className="w-8 h-8 text-green-500" />,
	'ajustments-horizontal': <AdjustmentsHorizontalIcon className="w-8 h-8 text-rose-400" />,
	'globe-alt': <GlobeAltIcon className="w-8 h-8 text-purple-400" />,
	'clipboard-document-check': <ClipboardDocumentCheckIcon className="w-8 h-8 text-indigo-400" />,
};

const services = [
	{
		icon: 'code-bracket',
		title: 'Product-ready docs',
		description: 'Ship documentation alongside your product. Developer-first docs that reduce support requests and help users succeed from day one.',
		link: '/services/core-documentation',
	},
	{
		icon: 'book-open',
		title: 'Scale your team\'s knowledge',
		description: 'Document what your team knows—before it walks out the door. Capture tribal knowledge and reduce Slack-dependency.',
		link: '/services/knowledge-management',
	},
	{
		icon: 'arrow-trending-up',
		title: 'Grow with dev-first content',
		description: 'Content that converts developers—without feeling like marketing. Technical storytelling that builds trust and drives growth.',
		link: '/services/technical-content-marketing',
	},
	{
		icon: 'adjustments-horizontal',
		title: 'Modern docs stack',
		description: 'Build a future-ready documentation stack. Modernize with scalable, AI-ready systems and docs-as-code workflows.',
		link: '/services/documentation-infrastructure',
	},
	{
		icon: 'globe-alt',
		title: 'Optimize & scale docs',
		description: 'Turn docs into a scalable, measurable asset. Audit, refactor, and scale your content so it grows with your product.',
		link: '/services/content-strategy',
	},
	{
		icon: 'clipboard-document-check',
		title: 'On-demand docs expertise',
		description: 'Get docs help when and how you need it. Flexible, senior-level documentation support without the hiring headache.',
		link: '/services/custom-advisory',
	},
];

export default function Services() {
	return (
		<>
			<SEO
				title="Technical Writing & Documentation Services | Docuweave"
				description="Discover our full range of technical writing, API documentation, developer onboarding, and content strategy services for software teams."
				canonical="https://yourdomain.com/services"
				openGraph={{
					title: 'Technical Writing & Documentation Services | Docuweave',
					description: 'Discover our full range of technical writing, API documentation, developer onboarding, and content strategy services for software teams.',
					url: 'https://yourdomain.com/services',
					type: 'website',
				}}
				schemaType="Service"
				schemaData={{
					name: 'Technical Writing & Documentation Services',
					description: 'Discover our full range of technical writing, API documentation, developer onboarding, and content strategy services for software teams.',
					provider: {
						'@type': 'Organization',
						name: 'Docuweave',
						url: 'https://yourdomain.com',
					},
					areaServed: 'Global',
					serviceType: [
						'Technical Writing',
						'API Documentation',
						'Content Strategy',
						'Developer Onboarding',
					],
					url: 'https://yourdomain.com/services',
				}}
			/>
			<div className="min-h-screen flex flex-col bg-bg-secondary dark:bg-navy-dark">
				<Navbar />
				{/* Subtle background pattern */}
				<div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
					<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
					<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
					<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(167,139,250,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
				</div>
				<main className="relative z-10 max-w-7xl mx-auto px-4 py-20">
					<section className="mb-16 text-center">
						<h1 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-4 drop-shadow-sm">
							Our services
						</h1>
						<p className="text-lg md:text-xl text-text-secondary dark:text-gray-300 max-w-2xl mx-auto">
							From product documentation to technical content strategy, we help teams create docs that drive results.
						</p>
					</section>
					<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{services.map((service) => (
							<div
								key={service.title}
								className="bg-bg-primary dark:bg-navy border border-border dark:border-navy-light rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] group"
							>
								<div className="rounded-full bg-primary/10 dark:bg-accent/20 p-3 mb-4 group-hover:bg-accent/20 dark:group-hover:bg-accent/30 transition w-fit">{iconMap[service.icon]}</div>
								<h2 className="text-xl font-semibold mb-3 text-text-primary dark:text-white group-hover:text-primary dark:group-hover:text-accent transition">
									{service.title}
								</h2>
								<p className="text-text-secondary dark:text-gray-300 mb-6 leading-relaxed">
									{service.description}
								</p>
								<Link
									href={service.link}
									className="text-accent hover:text-primary dark:hover:text-white font-medium hover:underline transition"
								>
									Learn more →
								</Link>
							</div>
						))}
					</div>
					<section className="text-center px-6 py-16 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-2xl shadow-card mt-20 max-w-3xl mx-auto border border-primary/20 dark:border-accent/30">
						<h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-3">Ready to transform your docs?</h2>
						<p className="mb-6 text-text-secondary dark:text-gray-300 leading-relaxed">Let's discuss your project and create documentation that accelerates your product's success.</p>
						<Link href="/contact" className="inline-block bg-primary hover:bg-accent dark:bg-accent dark:hover:bg-primary text-white py-3 px-10 rounded-full font-bold text-lg shadow-lg transition duration-150 hover:transform hover:scale-105">Start your project</Link>
					</section>
				</main>
			</div>
		</>
	);
}
