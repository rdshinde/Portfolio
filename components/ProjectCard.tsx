import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  project: Project;
  key: number;
};
export const ProjectCard = ({ project, key }: Props) => {
  return (
    <motion.div
      key={key}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-4 sm:space-y-5 items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-8" /* Adjusted padding and vertical spacing */
    >
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
            className="w-10 h-10 sm:w-12 sm:h-12 object-fit bg-gray-100 dark:bg-gray-800 p-1 sm:p-2 rounded-full" /* Responsive tech icons */
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-center sm:justify-evenly gap-2 sm:gap-4 w-full max-w-xs sm:max-w-sm"> {/* Responsive button container */}
        <a href={project?.linkToGithub || "#"} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-transparent border border-gray-700 text-gray-700 hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-gray-100 dark:text-gray-100 dark:hover:text-gray-50 font-bold py-2 px-3 text-sm sm:text-base md:text-lg md:py-2 md:px-4 rounded shadow-sm"
          > {/* Adjusted padding/text for base */ }
            View Source
          </motion.button>
        </a>
        <a href={project?.linkToBuild || "#"} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gray-100 text-gray-800 hover:bg-red-500 hover:text-gray-50 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-red-500 dark:hover:text-gray-50 font-bold py-2 px-3 text-sm sm:text-base md:text-lg md:py-2 md:px-4 rounded shadow-sm"
          > {/* Adjusted padding/text for base */ }
            Check Build
          </motion.button>
        </a>
      </div>
      <div className="space-y-3 sm:space-y-4 md:space-y-5 max-w-xl"> {/* Added max-width for text block */}
        <h4 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold text-center text-gray-900 dark:text-gray-100"> {/* Responsive title */}
          {project.title}
        </h4>
        <p className="text-sm sm:text-base text-justify md:text-left text-gray-700 dark:text-gray-300"> {/* Responsive summary text */}
          <ul className="list-disc pl-5 space-y-1"> {/* Added list styling and spacing */}
            {project?.summary?.map((item, idx) => (
              <li key={idx}> {/* Removed sm:text-sm, inherits from p */}
                {item}
              </li>
            ))}
          </ul>
        </p>
      </div>
    </motion.div>
  );
};
