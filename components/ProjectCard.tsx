import React from "react";
const projects = [1, 2, 3, 4, 5];
import { motion } from "framer-motion";
type Props = {
  i: number;
};
export const ProjectCard = ({ i }: Props) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <motion.img
        src="https://pbs.twimg.com/profile_images/1577564208837062656/3HOjsIom_400x400.jpg"
        alt=""
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-red-500/50 text-gray-50">
            Case Study {i} of {projects.length}
          </span>{" "}
          Swadeshi Ecomm App
        </h4>
        <p className="text-large text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit
          iure consequuntur laudantium natus sapiente incidunt blanditiis sit
          dolor provident rerum molestiae reprehenderit enim culpa inventore,
          nulla voluptatum architecto aspernatur?
        </p>
      </div>
    </div>
  );
};
