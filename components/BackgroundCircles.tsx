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
      className="relative flex justify-center items-center -top-8 md:-top-12 xl:-top-0" /* Adjusted top offset */
    >
      {/* Adjusted base sizes and one xl size for better scaling */}
      <div className="absolute border border-gray-300 dark:border-gray-400 h-[80px] w-[80px] md:h-[100px] md:w-[100px] xl:h-[200px] xl:w-[200px] rounded-full animate-ping" />
      <div className="absolute border border-gray-400 dark:border-gray-500 h-[120px] w-[120px] md:h-[150px] md:w-[150px] xl:h-[300px] xl:w-[300px] rounded-full animate-ping" />
      <div className="absolute border border-gray-500 dark:border-gray-600 h-[150px] w-[150px] md:h-[180px] md:w-[180px] xl:h-[400px] xl:w-[400px] rounded-full animate-ping" />
      <div className="absolute border border-red-500 h-[180px] w-[180px] md:h-[220px] md:w-[220px] xl:h-[560px] xl:w-[560px] rounded-full animate-pulse opacity-20" /> {/* Red accent - stays same */}
      <div className="absolute border border-gray-600 dark:border-gray-700 h-[240px] w-[240px] md:h-[300px] md:w-[300px] xl:h-[650px] xl:w-[650px] rounded-full" /> {/* Reduced max from 750px */}
    </motion.div>
  );
};
