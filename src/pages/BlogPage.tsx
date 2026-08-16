import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoopingVideo from "@/components/LoopingVideo";
import WobblyLines from "@/components/WobblyLines";
import { blogPosts } from "@/data/blogPosts";

const BlogPage = () => {
  return (
    <main className="overflow-hidden bg-background text-foreground min-h-screen">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Helmet>
        <title>Blog - Recast | Creator Economy Insights & Industry Trends</title>
        <meta
          name="description"
          content="Expert insights on the creator economy, brand partnerships, and social media trends in gaming and entertainment. Stay ahead with Recast's industry analysis."
        />
        <link rel="canonical" href="https://recast.gg/blog" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section id="main-content" className="min-h-[45vh] flex flex-col justify-center px-5 md:px-12 pt-32 md:pt-40 pb-12 md:pb-20 relative overflow-hidden">
        <LoopingVideo
          src="/hero-bg.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="/hero-poster.jpg"
        />
        <div className="absolute inset-0 bg-background/70 z-0" aria-hidden="true" />
        <WobblyLines />
        <div className="relative z-10">
          <motion.p
            className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            . Recast Blog
          </motion.p>
          <motion.h1
            className="font-display text-[clamp(36px,6vw,96px)] font-extrabold tracking-[-0.03em] leading-[0.9] uppercase text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Insights &<br />
            <span className="text-blue-accent">Industry Intel.</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-base md:text-lg max-w-xl font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Trends and strategies from the frontlines of the creator economy.
          </motion.p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-16 md:py-24 px-4 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block border border-border rounded-sm overflow-hidden hover:border-muted-foreground/40 transition-colors"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] uppercase tracking-[0.08em] font-semibold text-blue-accent">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-muted-foreground">{post.readTime}</span>
                  <span className="text-[11px] text-muted-foreground">By {post.author}</span>
                </div>
                <h2 className="font-display text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;
