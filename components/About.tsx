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
    <section id="about" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <p className="section-heading">Get to Know Me</p>
          <h2
            className="text-display font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            About
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-[4/5] max-w-md mx-auto w-full rounded-2xl overflow-hidden"
            style={{
              boxShadow: "var(--shadow-xl)",
            }}
          >
            {pageInfo?.aboutImage && (
              <Image
                src={urlFor(pageInfo.aboutImage).url()}
                fill
                alt="About"
                className="object-cover"
              />
            )}
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <h3
              className="text-headline font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              {pageInfo?.aboutTitle || "A bit about myself"}
            </h3>

            <p
              className="text-body-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {pageInfo?.aboutText}
            </p>

            {/* Quick info cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {pageInfo?.email && (
                <div
                  className="p-4 rounded-xl"
                  style={{ background: "var(--bg-secondary)" }}
                >
                  <p
                    className="text-overline mb-1"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    Email
                  </p>
                  <p
                    className="text-caption font-medium truncate"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {pageInfo.email}
                  </p>
                </div>
              )}
              {pageInfo?.address && (
                <div
                  className="p-4 rounded-xl"
                  style={{ background: "var(--bg-secondary)" }}
                >
                  <p
                    className="text-overline mb-1"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    Location
                  </p>
                  <p
                    className="text-caption font-medium truncate"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {pageInfo.address}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
