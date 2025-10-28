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
import { useState, useEffect } from 'react';

// Function to extract headings from markdown content
function extractHeadings(content) {
  const headingRegex = /^## (.+)$/gm;
  const headings = [];
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const title = match[1];
    const id = title.toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .trim();
    headings.push({ title, id });
  }
  
  return headings;
}

// Function to add IDs to headings in HTML
function addHeadingIds(html) {
  return html.replace(/<h2>(.*?)<\/h2>/g, (match, title) => {
    const id = title.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
    return `<h2 id="${id}">${title}</h2>`;
  });
}

// Static paths for all blog posts
export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      params: { slug: data.slug || filename.replace(/.md$/, '') },
    };
  });
  return { paths, fallback: false };
}

// Static props for a single blog post
export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  // Find the file that matches the slug
  let targetFile = null;
  for (const filename of filenames) {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    const fileSlug = data.slug || filename.replace(/.md$/, '');
    
    if (fileSlug === params.slug) {
      targetFile = filename;
      break;
    }
  }
  
  if (!targetFile) {
    return { notFound: true };
  }
  
  const filePath = path.join(postsDirectory, targetFile);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Extract headings for TOC
  const headings = extractHeadings(content);
  
  // Markdown pipeline: GFM + HTML conversion
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);
  
  // Add IDs to headings for anchor links
  const contentHtml = addHeadingIds(processedContent.toString());
  
  return {
    props: {
      post: {
        ...data,
        contentHtml,
        slug: params.slug,
        headings: headings || [],
      },
    },
  };
}

export default function BlogPost({ post }) {
  const [activeHeading, setActiveHeading] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    // Observe all h2 elements
    const headings = document.querySelectorAll('h2[id]');
    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
        <div className="w-full h-full bg-gradient-to-b from-white to-light-secondary opacity-90"></div>
      </div>
      <div className="relative min-h-screen bg-white py-16 px-4 flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex-1">
          <Link href="/blog" className="text-accent hover:underline mb-4 inline-block">← Back to Blog</Link>
          
          <div className="flex gap-8">
            {/* Table of Contents - Left Sidebar */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                {post.headings && post.headings.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold text-text-primary mb-4">Table of Contents</h3>
                    <nav className="space-y-2">
                      {post.headings.map((heading) => (
                        <button
                          key={heading.id}
                          onClick={() => scrollToHeading(heading.id)}
                          className={`block text-left w-full px-3 py-2 text-sm rounded-md transition-colors ${
                            activeHeading === heading.id
                              ? 'bg-accent/10 text-accent font-medium border-l-2 border-accent'
                              : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                          }`}
                        >
                          {heading.title}
                        </button>
                      ))}
                    </nav>
                  </>
                )}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <h1 className="text-4xl font-heading font-bold text-text-primary mb-4">{post.title}</h1>
              <div className="text-sm text-text-secondary mb-8">{post.date} &mdash; {post.author}</div>
              
              {/* Mobile TOC */}
              {post.headings && post.headings.length > 0 && (
                <div className="lg:hidden mb-8">
                  <details className="bg-gray-50 rounded-lg p-4">
                    <summary className="font-semibold text-text-primary cursor-pointer">Table of Contents</summary>
                    <nav className="mt-3 space-y-2">
                      {post.headings.map((heading) => (
                        <button
                          key={heading.id}
                          onClick={() => scrollToHeading(heading.id)}
                          className="block text-left w-full px-2 py-1 text-sm text-text-secondary hover:text-text-primary"
                        >
                          {heading.title}
                        </button>
                      ))}
                    </nav>
                  </details>
                </div>
              )}

              <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
