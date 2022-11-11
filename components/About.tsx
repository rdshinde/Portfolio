import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: PageInfo;
};

export const About = ({ pageInfo }: Props) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md-text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center mt-20"
      >
        <h3 className="absolute -top-24 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>
        <motion.img
          src={urlFor(pageInfo.aboutImage).url()}
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className=" md:mb-0 flex-shrink-0 object-cover object-center rounded-full w-56 h-56 md:w-64 md:h-95 md:rounded-lg xl:w-[500px] xl:h-[500px] mt-36"
        />
        <motion.div
          className="space-y-10 mt-10 px:0 md:px-10"
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-3xl md:text-4xl font-semibold text-gray-200">
            {pageInfo.aboutTitle}
          </h4>
          <p className="text-gray-300 sm:font-semibold sm:text-lg">
            {pageInfo.aboutText}
          </p>
        </motion.div>
      </motion.div>
      <div className="w-full absolute top-[30%] bg-red-500/10 left-0 h-[500px] -skew-y-12"></div>
    </>
  );
};
