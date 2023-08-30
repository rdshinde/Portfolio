import React from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import { Experience } from "../typings";
type Props = {
  experience: Experience[];
};

export const ExperienceSection = ({ experience }: Props) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative h-screen space-y-8 text-center overflow-hidden mb-16 snap-center"
        id="experience"
      >
        <h3 className="uppercase tracking-[20px] text-gray-500 text-md xl:text-2xl mb-16">
          Experience
        </h3>
        <div className="flex justify-between gap-10 overflow-x-auto snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20  scrollbar-thumb-red-500/80 pb-10">
          {experience?.map((exp) => (
            <>
              <ExperienceCard key={exp._id} experience={exp} />
            </>
          ))}
        </div>
        <div className="w-full absolute top-[10%] bg-red-500/10 left-0 h-[500px] -skew-y-12 -z-10"></div>
      </motion.div>
    </>
  );
};
