import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/wp-graphql";

export const metadata = {
  title: "Blog | WonderIT - Insights on Software & AI",
  description: "Read the latest insights on custom software development, AI integrations, and digital product strategy from the WonderIT team.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="subpage-padding min-h-screen">
      <div className="container">
        {/* Header Section */}
        <div className="mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl mb-6">
            Insights & <span className="gradient-text">Innovations</span>
          </h1>
          <p className="text-m text-text-secondary max-width-2xl mb-6">
            Exploring the intersection of technology, design, and business strategy. 
            Stay updated with our latest thoughts on AI, software engineering, and digital transformation.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-3 items-stretch animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {posts && posts.map((post: any) => (
            <article key={post.id} className="glass rounded-2xl overflow-hidden group flex flex-col h-550 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-150 w-full overflow-hidden shrink-0">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.featuredImage.node.altText || post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full glass flex items-center justify-center p-8">
                      <Image 
                        src="https://wonderit.io/images/wonderIT-logo.webp" 
                        alt="WonderIT Logo"
                        width={120}
                        height={60}
                        className="object-contain opacity-50 transition-opacity group-hover:opacity-100"
                      />
                    </div>
                  )}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {post.categories.nodes.map((cat: any) => (
                      <span key={cat.slug} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider rounded-full text-black">
                        {cat.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="h-300 p-8 pb-4 overflow-hidden">
                  <div className="text-xs text-text-secondary mb-3" style={{ fontSize: '14px' }}>
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <h2 className="text-2xl mb-4 group-hover:text-accent-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <div 
                    className="text-text-secondary text-m line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                </div>
              </Link>
              
              <div className="h-100 p-8 pt-0 flex items-center">
                <Link href={`/blog/${post.slug}`}>
                  <span className="btn-read-more">Read More</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {(!posts || posts.length === 0) && (
          <div className="text-center py-24 glass rounded-2xl">
            <h3 className="text-2xl mb-4">No posts found</h3>
            <p className="text-text-secondary">We're currently preparing some amazing content for you. Stay tuned!</p>
          </div>
        )}
      </div>
    </main>
  );
}
