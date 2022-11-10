import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
  skillName: string;
  proficiency: number;
};

export const Skill = ({ directionLeft, skillName, proficiency }: Props) => {
  return (
    <div className="group relative cursor-pointer flex items-center justify-center">
      <motion.img
        initial={{
          opacity: 0,
          x: directionLeft ? -200 : 200,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={`https://cdn.svgporn.com/logos/${skillName}.svg`}
        className="rounded-full h-24 w-24 border-gray-500 xl:w-32 xl:h-32 border filter group-hover:grayscale transition duration-300 ease-in-out object-center"
      />
      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 group-hover:bg-gray-50 h-24 w-24  md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold opacity-100 text-gray-800">
            {proficiency}%
          </p>
        </div>
      </div>
    </div>
  );
};
