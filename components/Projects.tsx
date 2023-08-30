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
      transition={{ duration: 1.5 }}
      className="relative h-screen space-y-8 text-center mb-48 snap-center"
      id="projects"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-md xl:text-2xl">
        Projects
      </h3>
      <h3 className="uppercase tracking-[3px] text-gray-500 text-sm">
        Scroll left to see more.
      </h3>
      <div className="relative w-full flex overflow-x-auto snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20  scrollbar-thumb-red-500/80 max-h-[90%] overflow-y-hidden pb-20">
        {projects?.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-red-500/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};
