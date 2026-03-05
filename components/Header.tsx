import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";
import { ThemeToggle } from "./ThemeToggle";

type Props = {
  socials: Social[];
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

export const Header = ({ socials }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-[var(--shadow-sm)]" : ""
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo / Name */}
          <Link href="#hero" className="group">
            <span
              className="text-title font-semibold tracking-tight transition-opacity duration-300 group-hover:opacity-70"
              style={{ color: "var(--text-primary)" }}
            >
              RS
              <span
                className="text-caption font-normal ml-1 hidden sm:inline"
                style={{ color: "var(--text-tertiary)" }}
              >
                .
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-caption font-medium transition-all duration-300 hover:opacity-60"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3">
            {/* Socials (desktop only) */}
            <div className="hidden lg:flex items-center gap-0.5">
              {socials?.slice(0, 4).map((social) => (
                <SocialIcon
                  key={social._id}
                  url={social.url}
                  fgColor="var(--text-tertiary)"
                  bgColor="transparent"
                  style={{ width: 32, height: 32 }}
                  target="_blank"
                  className="transition-opacity duration-300 hover:opacity-60"
                />
              ))}
            </div>

            <div
              className="w-px h-5 mx-1 hidden lg:block"
              style={{ background: "var(--border-light)" }}
            />

            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-[var(--accent-muted)]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                style={{ color: "var(--text-primary)" }}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 pt-20 glass md:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="text-headline font-semibold transition-opacity duration-300 hover:opacity-60"
                    style={{ color: "var(--text-primary)" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="flex items-center gap-2 mt-8">
                {socials?.map((social) => (
                  <SocialIcon
                    key={social._id}
                    url={social.url}
                    fgColor="var(--text-tertiary)"
                    bgColor="transparent"
                    style={{ width: 36, height: 36 }}
                    target="_blank"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
