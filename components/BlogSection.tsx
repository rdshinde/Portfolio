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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 mt-36"
    >
      <h3 className="absolute top-0 sm:top-5 uppercase tracking-[20px] text-gray-500 text-2xl">
        Blogs
      </h3>
      <h3 className="absolute top-16 sm:top-20 uppercase tracking-[3px] text-gray-500 text-sm">
        Scroll left to see more.
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hiddden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20  scrollbar-thumb-red-500/80">
        {blogs?.map((blog, index) => (
          <Blog key={index} blog={blog} />
        ))}
      </div>
    </motion.div>
  );
};
