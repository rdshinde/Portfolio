import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  project: Project;
};
export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center px-16 md:px-20">
      <motion.img
        src={urlFor(project.image).url()}
        alt={project.title}
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full h-auto max-w-[100%] max-h-[50%] md:max-w-[50%] md:lg:max-h-[30%] lg:max-w-[40%] lg:max-h-[40%] rounded-lg object-center mx-auto"
      />

      <div className="flex items-baseline justify-evenly gap-4 flex-wrap">
        {project.technologies?.map((skill, index) => (
          <motion.img
            key={index}
            src={urlFor(skill.icon).url()}
            alt={skill.title}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-[50px] h-[50px] object-fit bg-gray-50 p-2 rounded-full"
          />
        ))}
      </div>
      <div className="flex items-baseline justify-evenly w-[400px] space-y-10">
        <a href={project?.linkToGithub || "#"} target="_blank" rel="noreferrer">
          <button className="bg-transparent border border-gray-100 hover:border-red-500 shadow-sm hover:bg-red-500 hover:text-gray-50 text-gray-100 font-bold py-1 px-2 text-md md:text-lg md:py-2 md:px-4 rounded">
            View Source
          </button>
        </a>
        <a href={project?.linkToBuild || "#"} target="_blank" rel="noreferrer">
          <button className="bg-gray-100 hover:bg-red-500 text-gray-800 shadow-sm font-bold py-1 px-2 text-md md:text-lg md:py-2 md:px-4 hover:text-gray-50 rounded">
            Check Build
          </button>
        </a>
      </div>
      <div className="space-y-5">
        <h4 className="text-xl xl:text-3xl font-semibold text-center">
          {project.title}
        </h4>
        <p className="text-large text-justify md:text-left">
          <ul className="list-disc">
            {project?.summary?.map((item, idx) => (
              <li key={idx} className="sm:text-sm">
                {item}
              </li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
};
