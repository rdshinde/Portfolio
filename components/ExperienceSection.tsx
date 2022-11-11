import React from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import { Experience } from "../typings";
type Props = {
  experience: Experience[];
};

export const ExperienceSection = ({ experience }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center mt-36"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex justify-center space-x-5 overflow-x-auto p-10 min-w-[380px] sm:p-10 snap-x snap-mandatory mt-36">
        {experience?.map((exp) => (
          <ExperienceCard key={exp._id} experience={exp} />
        ))}
      </div>
    </motion.div>
  );
};
