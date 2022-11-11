import React from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
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
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden"
    >
      <motion.img
        src={urlFor(pageInfo.heroImage).url()}
        initial={{ opacity: 0, y: -300 }}
        animate={{
          opacity: [0.1, 0.2, 0.5, 0.8, 0.1, 1],
          y: [-300, 0],
        }}
        transition={{ duration: 1.4 }}
        className="rounded-full h-48 w-48 relative mx-auto object-cover top-12"
      />
      <BackgroundCircles />
      <motion.div
        className="z-20"
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: [0.1, 0.5, 0.8, 1], y: 0 }}
        transition={{ duration: 2 }}
      >
        <h2 className="test-sm uppercase text-gray-500 pb-2 tracking-[15px] ">
          {pageInfo.heroTitle}
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold px-10 h-[60px]">
          <span>{text}</span>
          <Cursor cursorColor="#FF1615" />
        </h1>
        <div className="pt-10 mt-20">
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
        </div>
      </motion.div>
    </motion.div>
  );
};
