import React from "react";
import { motion } from "framer-motion";
import { Blog } from "./Blog";
type Props = {
  blogs: any[];
};

export const BlogSection = ({ blogs }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative min-h-screen flex flex-col items-center justify-center space-y-8 text-center py-16 md:py-24 snap-center" /* Adjusted to min-h-screen, flex col, padding */
      id="blogs"
    >
      <h3 className="uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-600 dark:text-gray-500 text-sm sm:text-md xl:text-2xl"> {/* Responsive tracking, adjusted base text size */}
        Blogs
      </h3>
      <h3 className="uppercase tracking-[3px] text-gray-600 dark:text-gray-500 text-xs sm:text-sm"> {/* Adjusted base text size for subtitle */}
        Scroll left to see more.
      </h3>
      <div className="relative w-full flex overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-200/20 dark:scrollbar-track-gray-400/20 scrollbar-thumb-red-500/80 max-h-[80%] overflow-y-hidden pb-5">
        {blogs?.map((blog, index) => (
          <Blog key={index} blog={blog} />
        ))}
      </div>
    </motion.div>
  );
};
 