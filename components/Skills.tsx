import React from "react";
import { motion } from "framer-motion";
import { Skill } from "./Skill";
type Props = {};

export const Skills = (props: Props) => {
  return (
    <motion.div
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over the icons to see the proficiency.
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill directionLeft={true} skillName={"javascript"} proficiency={90} />
        <Skill directionLeft={true} skillName={"react"} proficiency={90} />
        <Skill directionLeft={true} skillName={"nodejs"} proficiency={85} />
        <Skill directionLeft={true} skillName={"express"} proficiency={70} />
        <Skill
          directionLeft={false}
          skillName={"tailwindcss"}
          proficiency={85}
        />
        <Skill directionLeft={false} skillName={"mongodb"} proficiency={70} />
        <Skill directionLeft={false} skillName={"python"} proficiency={90} />
        <Skill directionLeft={true} skillName={"java"} proficiency={90} />
      </div>
    </motion.div>
  );
};
