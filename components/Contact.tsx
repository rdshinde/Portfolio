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
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-0 md:px-10 justify-evenly mx-auto items-center snap-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="contact"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-md xl:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-28 sm:mt-20">
        <h4 className="text-xl sm:text-4xl font-semibold text-center">
          I have got just what you need.
          <span className="decoration-red-500/50 unserline">
            {" "}
            Let&apos;s Talk.
          </span>
        </h4>

        <motion.div
          className="space-y-10"
          initial={{
            opacity: 0,
          }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-red-500 animate-pulse" />
            <p className="text-lg">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-red-500 animate-pulse" />
            <p className="text-lg">{pageInfo.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-red-500 animate-pulse" />
            <p className="text-lg">{pageInfo.address}</p>
          </div>
        </motion.div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
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
            className="contact_input  w-full"
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
            type="submit"
            className="bg-red-500 py-5 px-10 rounded-md text-gray-800 font-bold text-lg"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};
