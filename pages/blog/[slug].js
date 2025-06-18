import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import SEO from '../../components/SEO';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

// Static paths for all blog posts
export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/.md$/, '') },
  }));
  return { paths, fallback: false };
}

// Static props for a single blog post
export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  // Markdown pipeline: GFM + HTML conversion
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);
  const contentHtml = processedContent.toString();
  return {
    props: {
      post: {
        ...data,
        contentHtml,
        slug: params.slug,
      },
    },
  };
}

export default function BlogPost({ post }) {
  return (
    <>
      <SEO
        title={`${post.title} | Docuweave Blog`}
        description={post.description}
        canonical={`https://docuweave.io/blog/${post.slug}`}
        openGraph={{
          title: `${post.title} | Docuweave Blog`,
          description: post.description,
          url: `https://docuweave.io/blog/${post.slug}`,
          type: 'article',
        }}
      />
      <Navbar />
      {/* Gradient overlay background for blog post header */}
      <div className="absolute top-0 left-0 w-full h-[220px] z-0">
        <div className="w-full h-full bg-gradient-to-b from-[#0A1F44] to-[#232526] opacity-90"></div>
      </div>
      <div className="relative min-h-screen bg-navy-dark py-16 px-4 flex flex-col">
        <div className="max-w-3xl mx-auto w-full flex-1">
          <Link href="/blog" className="text-accent hover:underline mb-4 inline-block">← Back to Blog</Link>
          <h1 className="text-4xl font-heading font-bold text-primary dark:text-white mb-4">{post.title}</h1>
          <div className="text-sm text-text-secondary dark:text-gray-400 mb-8">{post.date} &mdash; {post.author}</div>
          <article className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </div>
      </div>
    </>
  );
}
