import React from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export const Hero = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: [...(pageInfo?.heroTexts || [])],
    loop: true,
    deleteSpeed: 40,
    typeSpeed: 70,
    delaySpeed: 2500,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, var(--accent-muted) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 section-container flex flex-col items-center text-center max-w-4xl">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-8"
          style={{
            border: "2px solid var(--border-light)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {pageInfo?.heroImage && (
            <Image
              src={urlFor(pageInfo.heroImage).url()}
              fill
              alt={pageInfo.name || "Profile"}
              className="object-cover"
              priority
            />
          )}
        </motion.div>

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-heading mb-4"
        >
          {pageInfo?.heroTitle || "Welcome"}
        </motion.p>

        {/* Typewriter text */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-display-lg md:text-display-xl font-bold min-h-[11.55rem] md:min-h-[15.75rem]"
          style={{ color: "var(--text-primary)" }}
        >
          <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="var(--text-tertiary)" />
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-body-lg mt-6 max-w-2xl leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Crafting digital experiences with precision and care.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-4 mt-10 justify-center"
        >
          <Link href="#projects" className="btn-primary" title="View my projects">
            View Work
          </Link>
          <Link href="#contact" className="btn-secondary" title="Go to contact section">
            Get in Touch
          </Link>
          {pageInfo?.resume && (
            <a
              href={pageInfo.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              title="Download resume (opens in new tab)"
            >
              Resume
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </a>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span
          className="text-overline"
          style={{ color: "var(--text-tertiary)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className="w-1 h-1.5 rounded-full"
            style={{ background: "var(--text-tertiary)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
