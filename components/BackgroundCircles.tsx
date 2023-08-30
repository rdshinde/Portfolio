import React from "react";
import { motion } from "framer-motion";

export const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center -top-12 xl:-top-0"
    >
      <div className="absolute border border-gray-400 h-[100px] w-[100px] xl:h-[200px] xl:w-[200px] rounded-full  animate-ping" />
      <div className="absolute border border-gray-500 h-[150px] w-[150px] xl:h-[300px] xl:w-[300px] rounded-full  animate-ping" />
      <div className="absolute border border-gray-600 h-[180px] w-[180px] xl:h-[400px] xl:w-[400px] rounded-full  animate-ping" />
      <div className="absolute border border-red-500 h-[220px] w-[220px] xl:h-[560px] xl:w-[560px] rounded-full  animate-pulse opacity-20" />
      <div className="absolute border border-gray-700 h-[300px] w-[300px] xl:h-[750px] xl:w-[750px] rounded-full  " />
    </motion.div>
  );
};
