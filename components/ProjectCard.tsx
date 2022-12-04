import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  project: Project;
};
export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <motion.img
        src={urlFor(project.image).url()}
        alt={project.title}
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" md:w-[650px] max-h-[350px] h-auto rounded-lg object-cover object-center"
      />
      <div className="flex items-baseline justify-evenly w-[400px] space-y-10 mt-5">
        {project.technologies?.map((skill, index) => (
          <motion.img
            key={index}
            src={urlFor(skill.icon).url()}
            alt={skill.title}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-[75px] h-[75px] object-fill bg-gray-50 p-2 rounded-full"
          />
        ))}
      </div>
      <div className="flex items-baseline justify-evenly w-[400px] space-y-10 mt-5">
        <a href={project?.linkToGithub || "#"} target="_blank" rel="noreferrer">
          <button className="bg-transparent border border-gray-100 shadow-sm hover:bg-red-500 hover:text-gray-50 text-gray-100 font-bold py-2 px-4 rounded">
            View Source
          </button>
        </a>
        <a href={project?.linkToBuild || "#"} target="_blank" rel="noreferrer">
          <button className="bg-gray-100 hover:bg-red-500 text-gray-800 shadow-sm font-bold py-2 px-4 hover:text-gray-50 rounded">
            Check Build
          </button>
        </a>
      </div>
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">{project.title}</h4>
        <p className="text-large text-justify md:text-left">
          <ul className="list-disc">
            {project?.summary?.map((item, idx) => (
              <li key={idx} className="sm:text-xl">
                {item}
              </li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
};
