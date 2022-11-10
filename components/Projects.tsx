import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
type Props = {};

export const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-5 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hiddden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20  scrollbar-thumb-red-500/80">
        {projects.map((project, index) => (
          <ProjectCard key={index} i={index + 1} />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-red-500/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};
