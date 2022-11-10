import React from "react";
import { motion } from "framer-motion";
type Props = {};

export const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[380px] md:w-[600px] xl:w-[800px]snap-center bg-[#292929] p-5 xl:p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden hover:cursor-pointer ">
      <motion.img
        src="https://pbs.twimg.com/profile_images/1577564208837062656/3HOjsIom_400x400.jpg"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light text-center">
          Frontend Web Developer Intern
        </h4>
        <p className="font-bold text-2xl mt-1 text-center">
          Foxmula- The Smart Way
        </p>
        <div className="flex space-x-5 my-3 justify-center">
          <img
            src="https://pbs.twimg.com/profile_images/1577564208837062656/3HOjsIom_400x400.jpg"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://pbs.twimg.com/profile_images/1577564208837062656/3HOjsIom_400x400.jpg"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://pbs.twimg.com/profile_images/1577564208837062656/3HOjsIom_400x400.jpg"
            alt=""
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-center text-gray-300">
          Started Work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg h-max overflow-scroll">
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          </li>
        </ul>
      </div>
    </article>
  );
};
