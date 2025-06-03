import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  experience: Experience;
};

export const ExperienceCard = ({ experience }: Props) => {
  const startDate = new Date(experience.dateStarted);
  // const endDate = new Date(experience.dateEnded); // We will handle endDate conditionally
  return (
    <div className="w-screen snap-center flex justify-center flex-shrink-0">
      {/* Card background: Light mode bg-gray-100, Dark mode bg-[#292929] */}
      <motion.article
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="rounded-lg bg-gray-100 dark:bg-[#292929] transition-opacity duration-200 hover:cursor-pointer flex flex-col justify-center items-center xl:mb-20 px-4 py-8 sm:px-5 sm:py-10 w-[90%] max-w-lg"
      > {/* Adjusted padding */}
        <motion.img
          src={urlFor(experience.companyImage).url()}
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="rounded-full object-cover object-center flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 mb-2 p-1" /* Responsive image size */
        />
        <div className="w-full px-2 sm:px-4"> {/* Adjusted padding */}
          <h4 className="text-base sm:text-lg md:text-xl font-semibold text-center text-gray-800 dark:text-gray-100"> {/* Responsive text size */}
            {experience.jobTitle}
          </h4>
          <p className="font-bold text-base sm:text-lg md:text-xl mt-1 text-center text-gray-700 dark:text-gray-200"> {/* Responsive text size */}
            {experience.company}
          </p>
          <div className="flex space-x-3 sm:space-x-4 my-2 sm:my-3 justify-center flex-wrap"> {/* Adjusted spacing */}
            {experience.technologies?.map((tech: any) => (
              <img
                key={tech._id}
                src={urlFor(tech.icon).url()}
                alt={tech.title}
                className="h-8 w-8 md:h-10 md:w-10 rounded-full"
              />
            ))}
          </div>
          <p className="uppercase py-3 sm:py-4 text-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm md:text-base"> {/* Responsive text and padding */}
            {startDate.toLocaleDateString()} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toLocaleDateString()}
          </p>
          <ul className="space-y-2 sm:space-y-3 list-disc pl-5 sm:pl-6 md:pl-8"> {/* Adjusted spacing and list styling */}
            {experience.description.map((desc: any) => (
              <li
                key={desc._key}
                className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base text-start" /* No flex needed if using list-disc, adjusted text size */
              >
                {/* SVG icon removed as list-disc is used now. If SVG is preferred, add flex back and remove list-disc from ul. */}
                {/* <span className="mr-2">
                  <svg ... />
                </span> */}
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </div>
  );
};
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
