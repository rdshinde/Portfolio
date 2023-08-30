import React from "react";
import { motion } from "framer-motion";
type Props = {
  blog: any;
};

export const Blog = ({ blog }: Props) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-4 items-center justify-center p-8">
      <motion.img
        src={blog.coverImage}
        alt={blog.title}
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-auto h-auto max-w-[100%] max-h-[50%] md:max-w-[50%] md:lg:max-h-[30%] lg:max-w-[40%] lg:max-h-[40%] rounded-lg object-center mx-auto"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-xl sm:text-3xl font-semibold text-center">
          {blog.title}
        </h4>
        <p className="text-large md:text-left text-justify">
          {blog.brief}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://firsteverblogs.hashnode.dev/${blog.slug}`}
          >
            <span className="text-blue-500  hover:cursor-pointer">
              &nbsp;Read More
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};
