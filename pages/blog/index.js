import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      ...data,
      slug: data.slug || filename.replace(/.md$/, ''),
    };
  });
  // Sort by date, newest first
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  return (
    <>
      <SEO
        title="Docuweave Blog | Technical Writing & Docs Insights"
        description="Read the latest articles, best practices, and case studies on technical writing, developer documentation, and content strategy from the Docuweave team."
        canonical="https://docuweave.io/blog"
        openGraph={{
          title: 'Docuweave Blog | Technical Writing & Docs Insights',
          description: 'Read the latest articles, best practices, and case studies on technical writing, developer documentation, and content strategy from the Docuweave team.',
          url: 'https://docuweave.io/blog',
          type: 'blog',
        }}
      />
      <Navbar />
      {/* Gradient overlay background for blog hero section */}
      <div className="absolute top-0 left-0 w-full h-[320px] z-0">
        <div className="w-full h-full bg-gradient-to-b from-white to-light-secondary opacity-90"></div>
      </div>
      <div className="relative min-h-screen bg-white py-16 px-4 flex flex-col">
        <div className="max-w-3xl mx-auto w-full flex-1">
          <h1 className="text-5xl font-heading font-bold text-text-primary mb-8 text-center">The Docuweave Blog</h1>
          <div className="flex justify-center mb-8">
            <Link href="/">
              <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-accent transition">
                ← Back to main website
              </button>
            </Link>
          </div>
          <ul className="space-y-8">
            {posts.map((post) => (
              <li key={post.slug} className="bg-white p-6 rounded-xl shadow-card border border-border">
                <Link href={`/blog/${post.slug}`} className="block group">
                  <h2 className="text-2xl font-bold text-primary group-hover:underline mb-2">{post.title}</h2>
                  <p className="text-text-secondary mb-2">{post.description}</p>
                  <div className="text-sm text-text-secondary">{post.date} &mdash; {post.author}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
