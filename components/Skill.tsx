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
        className="rounded-full h-20 w-20 sm:h-28 sm:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out bg-gray-50 flex items-center justify-center"
      >
        <img
          src={url}
          className="rounded-full h-15 w-15 sm:h-20 sm:w-20 xl:w-32 xl:h-32"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-95 transition duration-300 group-hover:bg-gray-50 h-24 w-24  md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold opacity-100 text-gray-800">
            <p className="text-center">{proficiency}%</p>
            <p className="text-center text-xl">{skillName}</p>
          </p>
        </div>
      </div>
    </div>
  );
};
