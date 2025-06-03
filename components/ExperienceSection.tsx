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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative min-h-screen space-y-8 text-center overflow-hidden flex flex-col items-center justify-center py-16 md:py-24" /* Adjusted padding */
        id="experience"
      >
        <h3 className="uppercase tracking-[0.1em] sm:tracking-[0.15em] text-gray-600 dark:text-gray-500 text-sm sm:text-base xl:text-xl"> {/* Responsive tracking and size */}
          Experience
        </h3>
        {/* Ensure this div takes available width for children to scroll correctly */}
        <div className="w-full flex justify-between gap-10 overflow-x-auto snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-200/20 dark:scrollbar-track-gray-400/20 scrollbar-thumb-red-500/80 pb-10">
          {experience?.map((exp) => (
            // Removed extra fragment, key should be on the direct child of map
            <ExperienceCard key={exp._id} experience={exp} />
          ))}
        </div>
        {/* Decorative background with responsive height */}
        <div className="w-full absolute top-[10%] bg-red-500/10 left-0 h-[30vh] sm:h-[40vh] md:h-[500px] -skew-y-12 -z-10"></div>
      </motion.div>
    </>
  );
};
