import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";
import styles from "../styles/Home.module.css";
import { ThemeToggle } from "./ThemeToggle"; // Import ThemeToggle
import { useTheme } from "../contexts/ThemeContext"; // Import useTheme

type Props = {
  socials: Social[];
};
export const Header = ({ socials }: Props) => {
  const { theme } = useTheme(); // Get current theme
  const [showSocials, setShowSocials] = React.useState(false);
  return (
    <>
      <header
        className={`fixed top-[27.5%] right-0 xl:sticky flex-col xl:justify-between xl:top-0 flex xl:flex-row items-end xl:items-start max-w-7xl mx-auto z-20 transition-all ease-in-out duration-500 xl:translate-x-0 ${ /* Added items-end for flex-col */
          showSocials ? "-translate-x-4" : "translate-x-20"
        }`}
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -500,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.3 }}
          className="flex flex-col xl:flex-row cursor-pointer shadow-lg shadow-red-500/10" // Removed text-gray-300 as fgColor is dynamic now
        >
          {/* Mapping through social icons */}
          {socials?.map((social) => (
            <SocialIcon
              url={social.url}
              fgColor={theme === 'dark' ? 'gray' : '#555555'} // Dark: gray, Light: darker gray
              bgColor="transparent"
              key={social._id}
              title={social.title}
            />
          ))}
        </motion.div>
        {/* Theme Toggle Button */}
        <div className="my-2 xl:my-0 xl:mx-4"> {/* Added wrapper for spacing */}
          <ThemeToggle />
        </div>
        <Link href="#contact">
          <motion.div
            className="flex flex-col xl:flex-row items-center cursor-pointer shadow-lg shadow-red-500/10" // Removed text-gray-300
            initial={{
              opacity: 0,
              x: 500,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.5 }}
          >
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor={theme === 'dark' ? 'gray' : '#555555'} // Dark: gray, Light: darker gray
              bgColor="transparent"
              title="Email"
            />
            <p className="uppercase hidden xl:inline-flex text-sm text-gray-600 dark:text-gray-400">
              Get in touch
            </p>
          </motion.div>
        </Link>
        <div
          className={`fixed top-[47.5%] right-6 xl:hidden ${ /* Changed right-24 to right-6 */
            showSocials ? "translate-x-28" : "-translate-x-0" /* This translate seems large if right-6 is used */
          } xl:none`}
          onClick={() => setShowSocials(!showSocials)}
        >
          {showSocials ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-6 h-6 ${styles.animate_bounceX} transition-all duration-300 ease-in-out text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer`} /* Increased SVG size */
            >
              <path
                fill-rule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-6 h-6 ${styles.animate_bounceX} transition-all duration-300 ease-in-out text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer`} /* Increased SVG size */
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </header>
    </>
  );
};
