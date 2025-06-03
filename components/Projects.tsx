import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { Project } from "../typings";
type Props = {
  projects: Project[];
};

export const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden py-16 md:py-24 snap-center"
    >
      <h3 className="uppercase tracking-[0.1em] sm:tracking-[0.15em] text-gray-600 dark:text-gray-500 text-sm sm:text-base xl:text-xl"> {/* Responsive tracking and size */}
        Projects
      </h3>
      <h3 className="uppercase tracking-[3px] text-gray-600 dark:text-gray-500 text-xs sm:text-sm"> {/* Adjusted base text size */}
        Scroll left to see more.
      </h3>
      <div className="relative w-full flex overflow-x-auto snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-200/20 dark:scrollbar-track-gray-400/20 scrollbar-thumb-red-500/80 max-h-[90%] overflow-y-hidden pb-10 md:pb-20"> {/* Adjusted pb */}
        {projects?.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="w-full absolute top-[25%] md:top-[30%] bg-red-500/10 left-0 h-[30vh] sm:h-[40vh] md:h-[500px] -skew-y-12 -z-10"></div> {/* Responsive height and z-index */}
    </motion.div>
  );
};
