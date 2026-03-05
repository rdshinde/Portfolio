import React from "react";
import { motion } from "framer-motion";
import { BlogCard } from "./BlogCard";
import { BlogPost } from "../typings";

type Props = {
  blogs: BlogPost[];
};

export const BlogSection = ({ blogs }: Props) => {
  if (!blogs || blogs.length === 0) return null;

  return (
    <section id="blogs">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <p className="section-heading">Thoughts &amp; Articles</p>
          <h2
            className="text-display font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Blog
          </h2>
        </motion.div>

        {/* Responsive card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((post, i) => (
            <motion.div
              key={post.id || i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
 