import React from "react";
import { motion } from "framer-motion";
import { Skill } from "./Skill";
import { Skills } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skills: Skills[];
};

export const SkillsSection = ({ skills }: Props) => {
  return (
    <section id="skills">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <p className="section-heading">What I Work With</p>
          <h2
            className="text-display font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 md:gap-6 max-w-4xl mx-auto">
          {skills?.map((skill: any, i: number) => (
            <motion.div
              key={skill._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: i * 0.03,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true }}
            >
              <Skill
                proficiency={skill.progress}
                url={urlFor(skill.icon).url()}
                skillName={skill.title}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
