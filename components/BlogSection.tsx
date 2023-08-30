import React from "react";
import { motion } from "framer-motion";
import { Blog } from "./Blog";
type Props = {
  blogs: any[];
};

export const BlogSection = ({ blogs }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen space-y-8 text-center mb-48 pt-28 snap-center"
      id="blogs"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-md xl:text-2xl">
        Blogs
      </h3>
      <h3 className="uppercase tracking-[3px] text-gray-500 text-sm">
        Scroll left to see more.
      </h3>
      <div className="relative w-full flex overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20  scrollbar-thumb-red-500/80 max-h-[80%] overflow-y-hidden pb-5">
        {blogs?.map((blog, index) => (
          <Blog key={index} blog={blog} />
        ))}
      </div>
    </motion.div>
  );
};
