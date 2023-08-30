import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";
import styles from "../styles/Home.module.css";
type Props = {
  socials: Social[];
};
export const Header = ({ socials }: Props) => {
  const [showSocials, setShowSocials] = React.useState(false);
  return (
    <>
      <header
        className={`fixed top-[27.5%] right-0 xl:sticky flex-col xl:justify-between xl:top-0 flex xl:flex-row xl:items-start max-w-7xl mx-auto z-20 transition-all ease-in-out duration-500 xl:translate-x-0 ${
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
          className="flex flex-col xl:flex-row text-gray-300 cursor-pointer shadow-lg shadow-red-500/10" // Flex direction reversed for mobile
        >
          {/* Mapping through social icons */}
          {socials?.map((social) => (
            <SocialIcon
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
              key={social._id}
              title={social.title}
            />
          ))}
        </motion.div>
        <Link href="#contact">
          <motion.div
            className="flex flex-col xl:flex-row items-center text-gray-300 cursor-pointer shadow-lg shadow-red-500/10" // Flex direction reversed for mobile
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
              fgColor="gray"
              bgColor="transparent"
              title="Email"
            />
            <p className="uppercase hidden xl:inline-flex text-sm text-gray-400">
              Get in touch
            </p>
          </motion.div>
        </Link>
        <div
          className={`fixed top-[47.5%] right-24 xl:hidden ${
            showSocials ? "translate-x-28" : "-translate-x-0"
          } xl:none`}
          onClick={() => setShowSocials(!showSocials)}
        >
          {showSocials ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-4 h-4 ${styles.animate_bounceX} transition-all duration-300 ease-in-out hover:text-gray-400 cursor-pointer`}
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
              className={`w-4 h-4 ${styles.animate_bounceX} transition-all duration-300 ease-in-out hover:text-gray-400 cursor-pointer`}
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
