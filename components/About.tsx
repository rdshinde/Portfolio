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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="about"
        className="relative min-h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden py-16 md:py-24 snap-center"
      >
        <h3 className="uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-600 dark:text-gray-500 text-sm sm:text-md xl:text-2xl"> {/* Responsive tracking, adjusted base text size */}
          About
        </h3>
        <div className="xl:flex xl:flex-row xl:justify-center xl:items-center text-center flex flex-col items-center space-y-6 md:space-y-0 md:space-x-10 px-4"> {/* Added spacing and padding */}
          <motion.div
            className="flex-shrink-0 rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 xl:w-64 xl:h-64 md:rounded-lg object-cover" /* Simplified responsive image sizing, removed aspect ratio classes */
            initial={{ x: -200, opacity: 0 }} /* Adjusted initial animation */
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }} /* Adjusted duration */
            viewport={{ once: true }}
          >
            <Image
              src={urlFor(pageInfo.aboutImage).url()}
              layout="fill" /* Changed to fill to respect parent dimensions */
              objectFit="cover"
              alt="about"
              className="rounded-full md:rounded-lg"
            />
          </motion.div>
          <motion.div
            className="space-y-4 md:space-y-6 max-w-xl" /* Added max-width for text block */
            initial={{ x: 200, opacity: 0 }} /* Adjusted initial animation */
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }} /* Adjusted duration */
          >
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200">
              {pageInfo.aboutTitle}
            </h4>
            <p className="text-sm sm:text-base md:text-lg text-justify text-gray-700 dark:text-gray-300"> {/* Adjusted text sizes */}
              {pageInfo.aboutText}
            </p>
          </motion.div>
        </div>
      </motion.div>
      {/* Decorative background with responsive height, z-index to be behind content if not already */}
      <div className="w-full absolute top-[25%] md:top-[30%] bg-red-500/10 left-0 h-[30vh] sm:h-[40vh] md:h-[500px] -skew-y-12 -z-10"></div>
    </>
  );
};
