import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Sample blog posts - later you can fetch these from an API or database
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js 14",
      excerpt: "Learn the fundamentals of Next.js and build modern web applications with the latest features.",
      date: "Oct 20, 2024",
      author: "John Doe",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Understanding React Server Components",
      excerpt: "Deep dive into React Server Components and how they improve performance in Next.js applications.",
      date: "Oct 18, 2024",
      author: "Jane Smith",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Styling in Modern React",
      excerpt: "Explore different styling approaches including Tailwind CSS, CSS Modules, and styled-components.",
      date: "Oct 15, 2024",
      author: "Alex Johnson",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <nav className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            My Blog
          </Link>
          <div className="flex gap-6">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4">This is a test blog</h1>
        <p className="text-xl text-gray-600 mb-8">
          Thoughts, stories and ideas about web development, design, and technology.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">
                <Link href={`/post/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.author}</span>
                <span>{post.readTime}</span>
              </div>
              <div className="text-sm text-gray-500 mt-2">{post.date}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}