import React, { useEffect } from "react";
type Props = {
  pageInfo: PageInfo;
};
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";
type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};
export const Contact = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    if (formData) {
      window.location.href = `mailto:rdshinde2000@gmail.com?subject=${formData.subject}&body=${formData.message}`;
    }
  };

  return (
    <motion.div
      className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-4 md:px-10 justify-center mx-auto items-center snap-center py-16 md:py-24" /* Main container: min-h-screen, padding, justify-center */
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="contact"
    >
      <h3 className="absolute top-16 sm:top-20 md:top-24 uppercase tracking-[0.1em] sm:tracking-[0.15em] text-gray-600 dark:text-gray-500 text-sm sm:text-base xl:text-xl"> {/* Title: Responsive tracking, size, top */}
        Contact
      </h3>

      <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-10 mt-24 sm:mt-28 md:mt-32 w-full max-w-md sm:max-w-lg md:max-w-2xl"> {/* Content wrapper: Margins, responsive spacing, max-width */}
        <h4 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-gray-100"> {/* Subtitle: Responsive text size */}
          I have got just what you need.
          <span className="decoration-red-500/50 underline">
            {" "}
            Let&apos;s Talk.
          </span>
        </h4>

        <motion.div
          className="space-y-6 sm:space-y-8" /* Adjusted spacing within contact info */
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.8 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex items-center space-x-3 sm:space-x-5 justify-center"> {/* Responsive icon and text spacing */}
            <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-red-500 animate-pulse" /> {/* Responsive icon size */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">{pageInfo.phoneNumber}</p> {/* Responsive text size */}
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex items-center space-x-3 sm:space-x-5 justify-center">
            <EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-red-500 animate-pulse" />
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">{pageInfo.email}</p>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex items-center space-x-3 sm:space-x-5 justify-center">
            <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-red-500 animate-pulse" />
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">{pageInfo.address}</p>
          </motion.div>
        </motion.div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 sm:space-y-3 w-full px-2 sm:w-fit mx-auto" /* Form width and spacing */
        >
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"> {/* Input layout: stack on xs, row on sm+ */}
            <motion.input
              initial={{
                opacity: 0,
                x: 200,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              {...register("name")}
              type="text"
              placeholder="Name"
              className="contact_input w-full"
            />
            <motion.input
              initial={{
                opacity: 0,
                x: -200,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              {...register("email")}
              type="text"
              placeholder="Email"
              className="contact_input w-full"
            />
          </div>
          <motion.input
            initial={{
              opacity: 0,
              x: -200,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            {...register("subject")}
            type="text"
            placeholder="Subject"
            className="contact_input w-full" /* Inputs take full width of their container */
          />
          <motion.textarea
            initial={{
              opacity: 0,
              x: 200,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            {...register("message")}
            placeholder="Message"
            className="contact_input  w-full"
          ></motion.textarea>
          <motion.button
            initial={{
              opacity: 0,
              y: 100,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-red-500 py-3 px-6 sm:py-4 sm:px-8 rounded-md text-gray-800 font-bold text-base sm:text-lg" /* Adjusted button padding and text size */
          >
            Submit
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};
