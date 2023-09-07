import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
        id="about"
        className="relative h-screen space-y-8 text-center overflow-hidden mb-32 snap-center"
      >
        <h3 className="uppercase tracking-[20px] text-gray-500 text-md xl:text-2xl mb-16">
          About
        </h3>
        <div className="xl:flex xl:flex-row xl:justify-center xl:items-center text-center flex flex-col items-center">
          <motion.div
            className="aspect-w-16 aspect-h-9 flex-shrink-0 object-center max-w-[40%] rounded-full w-56 h-56 md:w-64 md:h-95 md:rounded-lg xl:w-[500px] xl:h-[500px]"
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src={urlFor(pageInfo.aboutImage).url()}
              layout="responsive"
              objectFit="cover" 
              height={1}
              width={1}
              alt="about"
              className="rounded-full md:rounded-lg"
            />
          </motion.div>
          <motion.div
            className="space-y-10 mt-10 px:0 md:px-10"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-3xl md:text-4xl font-semibold text-gray-200">
              {pageInfo.aboutTitle}
            </h4>
            <p className="text-gray-300 sm:font-semibold sm:text-lg text-justify">
              {pageInfo.aboutText}
            </p>
          </motion.div>
        </div>
      </motion.div>
      <div className="w-full absolute top-[30%] bg-red-500/10 left-0 h-[500px] -skew-y-12"></div>
    </>
  );
};
