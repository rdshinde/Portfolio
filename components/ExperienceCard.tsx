import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  experience: Experience;
};

export const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[380px] md:w-[600px] xl:w-[800px]snap-center bg-[#292929] p-5 xl:p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden hover:cursor-pointer ">
      <motion.img
        src={urlFor(experience.companyImage).url()}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light text-center">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-2xl mt-1 text-center">
          {experience.company}
        </p>
        <div className="flex space-x-5 my-3 justify-center">
          {experience.technologies?.map((tech: any) => (
            <img
              key={tech._id}
              src={urlFor(tech.icon).url()}
              alt={tech.title}
              className="h-10 w-10 rounded-full"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-center text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -
          {new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg h-max overflow-scroll">
          {experience.description.map((desc: any) => (
            <li key={desc._key} className="text-gray-300">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
