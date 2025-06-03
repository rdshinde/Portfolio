import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageInfo } from "../typings"; // Assuming PageInfo only for resume link, can be more specific

type Props = {
  // pageInfo: PageInfo; // Can pass full pageInfo or just the resume link
  resumeLink?: string; // Making it optional if pageInfo might not have resume
};

export const MobileNav = ({ resumeLink }: Props) => {
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  return (
    <nav className={`xl:hidden`}>
      <div
        className={`flex flex-col items-start justify-center p-4 bg-gray-200 dark:bg-gray-800 text-red-700 dark:text-red-400 z-40 opacity-1 fixed top-0 left-0 right-0 transition-all ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] duration-700 ${
          showMobileNav ? "translate-y-0" : "-translate-y-full" // Changed to -translate-y-full for complete hide
        } `}
      >
        <Link href={"#about"}>
          <button
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="hero_button py-2" // Added some padding for better tap area
          >
            About
          </button>
        </Link>
        <Link href={"#experience"}>
          <button
            className="hero_button py-2"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            Experience
          </button>
        </Link>
        <Link href={"#skills"}>
          <button
            className="hero_button py-2"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            Skills
          </button>
        </Link>
        <Link href={"#projects"}>
          <button
            className="hero_button py-2"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            Projects
          </button>
        </Link>
        <Link href={"#blogs"}>
          <button
            className="hero_button py-2"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            Blogs
          </button>
        </Link>
        {resumeLink && ( // Conditionally render if resumeLink exists
          <Link href={resumeLink} target="_blank">
            <button
              className="hero_button py-2"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              Resume
            </button>
          </Link>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 300 }} // Keep initial animation for the icon itself
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="fixed right-4 top-4 text-red-700 dark:text-red-400 z-50 flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200" // Adjusted position, added z-50, padding and hover for better UX
        onClick={() => setShowMobileNav(!showMobileNav)}
      >
        {/* Hamburger/Close Icon Logic */}
        {showMobileNav ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
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
        )}
      </motion.div>
    </nav>
  );
};
