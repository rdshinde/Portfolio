import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
  skillName: string;
  proficiency: number;
  url: string;
};

export const Skill = ({
  directionLeft,
  skillName,
  proficiency,
  url,
}: Props) => {
  return (
    <div className="group relative cursor-pointer flex items-center justify-center">
      <motion.div
        initial={{
          opacity: 0,
          x: directionLeft ? -200 : 200,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-full min-h-16 min-w-16 filter p-2 group-hover:grayscale transition duration-300 ease-in-out bg-gray-50 flex items-center justify-center"
      >
        <img
          src={url}
          className="rounded-full h-full w-full md:h-20 md:w-20 flex-shrink-0 object-center"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-95 transition duration-300 group-hover:bg-gray-50 h-full w-full md:h-20 md:w-20 rounded-full z-0 flex justify-center items-center">
        <div className="flex items-center justify-center">
          <p className="text-sm lg:text-md font-bold opacity-100 text-gray-800">
            <p className="text-center">{proficiency}%</p>
            <p className="text-center text-sm">{skillName}</p>
          </p>
        </div>
      </div>
    </div>
  );
};
