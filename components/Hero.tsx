import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { BackgroundCircles } from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import { MobileNav } from "./MobileNav"; // Import MobileNav

type Props = {
  pageInfo: PageInfo;
};

export const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [...pageInfo.heroTexts],
    loop: true,
    deleteSpeed: 40,
    typeSpeed: 70,
    delaySpeed: 2500,
  });

  // const [showMobileNav, setShowMobileNav] = React.useState(false); // Removed state
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="hero"
      className="relative min-h-screen flex flex-col space-y-6 sm:space-y-8 justify-center items-center text-center overflow-hidden py-16 md:py-24 snap-start" /* Adjusted container */
    >
      <motion.div
        className="rounded-full h-32 w-32 xl:h-48 xl:w-48 relative mx-auto object-cover xl:top-28 top-12" /* Keeping image size/pos for now */
        initial={{ opacity: 0, y: -300 }}
        animate={{
          opacity: [0.1, 0.2, 0.5, 0.8, 0.1, 1],
          y: [-300, 0],
        }}
        transition={{ duration: 1.4 }}
      >
        <Image
          src={urlFor(pageInfo.heroImage).url()}
          width={1}
          height={1}
          layout="responsive"
          objectFit="cover"
          className="rounded-full"
        />
      </motion.div>
      <BackgroundCircles />
      <motion.div
        className="z-20"
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: [0.1, 0.5, 0.8, 1], y: 0 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-sm sm:text-base uppercase text-gray-600 dark:text-gray-500 pb-2 tracking-[0.08em] sm:tracking-[0.1em] md:tracking-[0.12em] mt-12 sm:mt-16 md:mt-20 animate-pulse transition-all ease-in-out duration-75"> {/* Corrected typo, responsive tracking & margin */}
          {pageInfo.heroTitle}
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold px-4 sm:px-6 md:px-8 h-[60px] sm:h-[70px] mt-4 sm:mt-6 text-black dark:text-white"> {/* Responsive text, padding, height, margin */}
          <span>{text}</span>
          <Cursor cursorColor="#FF1615" />
        </h1>
        <div className="pt-6 sm:pt-8 mt-8 sm:mt-10 sm:block hidden"> {/* Adjusted padding and margin */}
          <Link href={"#about"}>
            <button className="hero_button">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="hero_button">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="hero_button">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="hero_button">Projects</button>
          </Link>
          <Link href={"#blogs"}>
            <button className="hero_button">Blogs</button>
          </Link>
          <Link href={pageInfo?.resume} target="_blank">
            <button className="hero_button">Resume</button>
          </Link>
        </div>
      </motion.div>
      {/* Render MobileNav component */}
      <MobileNav resumeLink={pageInfo?.resume} />
    </motion.div>
  );
};
