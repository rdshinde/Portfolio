import React from "react";
type Props = {};
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};
export const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:rdshinde2000@gmail.com?subject=${formData.subject}&body=${formData.message}`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.
          <span className="decoration-red-500/50 unserline"> Let&apos;s Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-red-500 animate-pulse" />
            <p className="text-2xl">+919175411145</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-red-500 animate-pulse" />
            <p className="text-2xl">rdshinde2000@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-red-500 animate-pulse" />
            <p className="text-2xl">123 Deveoper Lane</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="contact_input"
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="contact_input"
            />
          </div>
          <input
            {...register("subject")}
            type="text"
            placeholder="Subject"
            className="contact_input"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contact_input"
          ></textarea>
          <button
            type="submit"
            className="bg-red-500 py-5 px-10 rounded-md text-gray-800 font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
