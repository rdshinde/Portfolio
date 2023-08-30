import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  experience: Experience;
};

export const ExperienceCard = ({ experience }: Props) => {
  const startDate = new Date(experience.dateStarted);
  const endDate = new Date(experience.dateEnded);
  return (
    <div className="w-screen snap-center flex justify-center flex-shrink-0">
      <article className="rounded-lg bg-[#292929] opacity-60 hover:opacity-100 transition-opacity duration-200 hover:cursor-pointer flex flex-col justify-center items-center xl:mb-20 xl:py-10 xl:px-5 px-5 py-10 xl:w-[82.5vw] w-[80vw] max-w-[450px]">
        <motion.img
          src={urlFor(experience.companyImage).url()}
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="rounded-full object-center flex flex-shrink-0 w-[100px] h-[100px] mb-2 p-1"
        />
        <div className="">
          <h4 className="text-md xl:text-2xl font-semibold text-center">
            {experience.jobTitle}
          </h4>
          <p className="font-bold text-md xl:text-2xl mt-1 text-center">
            {experience.company}
          </p>
          <div className="flex space-x-4 md:space-x-5 my-3 justify-center flex-wrap">
            {experience.technologies?.map((tech: any) => (
              <img
                key={tech._id}
                src={urlFor(tech.icon).url()}
                alt={tech.title}
                className="h-8 w-8 md:h-10 md:w-10 rounded-full"
              />
            ))}
          </div>
          <p className="uppercase py-4 text-center text-gray-400 text-sm md:text-base">
            {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
          </p>
          <ul className="space-y-3 md:space-y-4 md:text-lg">
            {experience.description.map((desc: any) => (
              <li
                key={desc._key}
                className="text-gray-400 text-sm xl:text-md text-start flex justify-start items-center"
              >
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
};
