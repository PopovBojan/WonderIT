import Link from "next/link";
import Image from "next/image";
import { getPostBySlug } from "@/lib/wp-graphql";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | WonderIT Blog`,
    description: post.excerpt?.replace(/<[^>]*>?/gm, '').substring(0, 160),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="subpage-padding min-h-screen">
      <div className="container">
        {/* Navigation */}
        <Link href="/blog" className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-accent-primary mb-12 hover:translate-x-[-5px] transition-transform" style={{ fontSize: '12px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative" style={{ top: '0.5px' }}>
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span className="relative" style={{ top: '-1px' }}>Back to Blog</span>
        </Link>

        {/* Post Header */}
        <header className="mb-16 animate-fade-in-up max-w-4xl">
          <div className="flex gap-4 mb-6">
            
          </div>
          <h1 className="text-4xl mb-6 md:text-6xl mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4">
            <div>
              <p className="text-text-secondary mb-6 text-sm">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative w-full h-[400px] md:h-[600px] mb-16 rounded-3xl overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div 
            className="prose prose-lg prose-invert max-w-none blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Footer CTA */}
        <footer className="mt-24 py-16 border-t border-black/5 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-3xl mb-6">Have a project in mind?</h3>
          <p className="text-text-secondary mb-10 text-lg">Let's build something amazing together.</p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </footer>
      </div>
    </main>
  );
}
