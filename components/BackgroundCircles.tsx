import React from "react";
import { motion } from "framer-motion";
type Props = {};

export const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-gray-400 h-[200px] w-[200px] rounded-full mt-52 animate-ping" />
      <div className="absolute border border-gray-500 h-[300px] w-[300px] rounded-full mt-52 animate-ping" />
      <div className="absolute border border-gray-600 h-[500px] w-[500px] rounded-full mt-52 animate-ping" />
      <div className="absolute border border-red-500 h-[650px] w-[650px] rounded-full mt-52 animate-pulse opacity-20" />
      <div className="absolute border border-gray-700 h-[850px] w-[850px] rounded-full mt-52 " />
    </motion.div>
  );
};