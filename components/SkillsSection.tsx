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
    <motion.div
      className="relative h-screen space-y-8 text-center mb-32 snap-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="skills"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-md xl:text-2xl">
        Skills
      </h3>
      <h3 className="uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over the icons to see the proficiency.
      </h3>
      <div className="grid sm:mt-0 grid-cols-4 sm:grid-cols-5 md-grid-cols-6 gap-5 pt-16 lg:grid-cols-7 xl:grid-cols-7">
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
