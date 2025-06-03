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
  const staggerItemVariants = {
    hidden: { opacity: 0, x: directionLeft ? -50 : 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="group relative cursor-pointer flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      variants={staggerItemVariants} // Apply item variants to the hoverable/group div
      // initial, whileInView, viewport, transition are now controlled by parent stagger in SkillsSection
    >
      <div // This div no longer needs to be motion, unless it has its own independent animation not tied to stagger.
         // For now, making it a simple div. The variant will apply to the whole skill item.
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full filter p-1 sm:p-2 group-hover:grayscale transition duration-300 ease-in-out bg-gray-100 dark:bg-gray-800 flex items-center justify-center" /* Responsive container size & padding */
      >
        <img
          src={url}
          className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /* Responsive image size, smaller than container */
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-95 transition duration-300 ease-in-out group-hover:bg-gray-100 dark:group-hover:bg-gray-800 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full z-0 flex justify-center items-center"> {/* Overlay matches container size */}
        <div className="flex flex-col items-center justify-center"> {/* Changed to flex-col for text layout */}
          <p className="text-xs sm:text-sm md:text-base font-bold text-gray-800 dark:text-gray-100"> {/* Responsive proficiency text */}
            {proficiency}%
          </p>
          <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mt-1 truncate w-full px-1 text-center"> {/* Skill name, smaller, truncated for long names */}
            {skillName}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
