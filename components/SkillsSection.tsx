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
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-5 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-16 sm:top-20 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over the icons to see the proficiency.
      </h3>
      <div className="grid mt-48 sm:mt-0 grid-cols-3 sm:grid-cols-5 gap-5">
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
