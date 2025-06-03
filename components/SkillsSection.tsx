import React from "react";
import { motion } from "framer-motion";
import { Skill } from "./Skill";
import { Skills } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  skills: Skills[];
};

export const SkillsSection = ({ skills }: Props) => {
  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden py-16 md:py-24 snap-center"
    >
      <h3 className="uppercase tracking-[0.1em] sm:tracking-[0.15em] text-gray-600 dark:text-gray-500 text-sm sm:text-base xl:text-xl"> {/* Responsive tracking and size */}
        Skills
      </h3>
      <h3 className="uppercase tracking-[3px] text-gray-600 dark:text-gray-500 text-xs sm:text-sm"> {/* Adjusted base text size */}
        Hover over the icons to see the proficiency.
      </h3>
      <motion.div
        className="grid sm:mt-0 grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-5 pt-16 lg:grid-cols-7 xl:grid-cols-7"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills?.map((skill: any, i: number) => (
          <Skill
            key={skill._id}
            proficiency={skill.progress}
            directionLeft={i > 10}
            url={urlFor(skill.icon).url()}
            skillName={skill.title}
          />
        ))}
      </div>
     
    </motion.div>
  );
};
