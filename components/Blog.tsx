import React from "react";
import { motion } from "framer-motion";
type Props = {
  blog: any;
};

export const Blog = ({ blog }: Props) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <motion.img
        src={blog.coverImage}
        alt={blog.title}
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" md:w-[650px] h-auto rounded-lg object-cover object-center"
      />

      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-2xl sm:text-3xl font-semibold text-center">
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
