import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
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

  const [showMobileNav, setShowMobileNav] = React.useState(false);
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="hero"
      className="relative h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden mb-32 snap-start"
    >
      <motion.div
        className="rounded-full h-32 w-32 xl:h-48 xl:w-48 relative mx-auto object-cover xl:top-28 top-12"
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
        <h2 className="test-md uppercase text-gray-500 pb-2 tracking-[15px] mt-24 animate-pulse transition-all ease-in-out duration-75">
          {pageInfo.heroTitle}
        </h2>
        <h1 className="text-xl md:text-5xl lg:text-6xl font-semibold px-10 h-[60px] mt-8">
          <span>{text}</span>
          <Cursor cursorColor="#FF1615" />
        </h1>
        <div className="sm:pt-10 mt-20 sm:block hidden">
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
      <nav className={`xl:hidden`}>
        <div
          className={`flex flex-col items-start justify-center p-4 bg-gray-200 text-red-800 z-40 opacity-1 fixed top-0 left-0 right-0 transition-all ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] duration-700  ${
            showMobileNav ? "translate-y-0" : "-translate-y-80"
          } `}
        >
          <Link href={"#about"}>
            <button
              onClick={() => setShowMobileNav(!showMobileNav)}
              className="hero_button"
            >
              About
            </button>
          </Link>
          <Link href={"#experience"}>
            <button
              className="hero_button"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              Experience
            </button>
          </Link>
          <Link href={"#skills"}>
            <button
              className="hero_button"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              Skills
            </button>
          </Link>
          <Link href={"#projects"}>
            <button
              className="hero_button"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              Projects
            </button>
          </Link>
          <Link href={"#blogs"}>
            <button
              className="hero_button"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              Blogs
            </button>
          </Link>
          <Link href={pageInfo?.resume} target="_blank">
            <button
              className="hero_button"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              Resume
            </button>
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: [0.1, 0.5, 0.8, 1], y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="fixed right-2 top-2 text-red-800 z-40 flex items-center gap-2 uppercase font-bold"
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
      </nav>
    </motion.div>
  );
};
