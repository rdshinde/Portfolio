import React from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experience: Experience[];
};

export const ExperienceSection = ({ experience }: Props) => {
  // Sort by startDate descending (most recent first)
  const sorted = [...(experience ?? [])].sort((a, b) => {
    const da = a.startDate ? new Date(a.startDate).getTime() : 0;
    const db = b.startDate ? new Date(b.startDate).getTime() : 0;
    return db - da;
  });

  return (
    <section id="experience">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <p className="section-heading">Where I&apos;ve Worked</p>
          <h2
            className="text-display font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Experience
          </h2>
        </motion.div>

        {/* Connected wireframe cards */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connector wire running behind all cards */}
          {sorted.length > 1 && (
            <div
              className="absolute left-[27px] md:left-8 top-0 bottom-0 w-[2px]"
              style={{ background: "var(--border-light)" }}
            />
          )}

          <div className="space-y-0">
            {sorted.map((exp, index) => (
              <ExperienceCard
                key={exp._id}
                experience={exp}
                index={index}
                isLast={index === sorted.length - 1}
                total={sorted.length}
              />
            ))}
          </div>

          {/* Terminal dot */}
          {sorted.length > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: sorted.length * 0.08,
              }}
              className="relative z-10 ml-[21px] md:ml-[26px] w-3 h-3 rounded-full"
              style={{ background: "var(--border)" }}
            />
          )}
        </div>
      </div>
    </section>
  );
};
