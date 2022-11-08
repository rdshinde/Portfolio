import React from "react";
import { motion } from "framer-motion";
type Props = {};

export const About = (props: Props) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md-text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>
        <motion.img
          src="https://pbs.twimg.com/profile_images/1577564208837062656/3HOjsIom_400x400.jpg"
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className=" md:mb-0 flex-shrink-0 object-cover object-center rounded-full w-56 h-56 md:w-64 md:h-95 md:rounded-lg xl:w-[500px] xl:h-[500px] mt-48"
        />
        <motion.div
          className="space-y-10 mt-36 px:0 md:px-10"
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-4xl font-semibold text-gray-200">
            Here is{" "}
            <span className="underline decoration-red-500/90">little</span>{" "}
            background.
          </h4>
          <p className="text-gray-300 font-mono">
            Hello 👋 , this is Rishikesh Shinde, a final year CS student. A
            person who is attracted by the world of computer science and curious
            as well as passionate to learn new technologies. As I am discovering
            myself everyday, I found that I have a lot of interest in Web App
            Development field, hence I am looking forward to make my career in
            web development. Other than development field, I am very curious to
            learn about newly developing Computer Architectures which includes
            quantum computing and other interesting things related to that
            domain. Other than coding I love cooking some Maharashtrian dishes.
            I also do stocking 📈, and this field is teaching me a lot things
            everyday. I like to share my new leanings as well as my experiences,
            and I share these things by writing blogs ✍🏻 on them. You can read
            my blogs here 👉
            <a
              href="https://firsteverblogs.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-400"
            >
              https://firsteverblogs.hashnode.dev
            </a>{" "}
            That's all about me in brief. Thank you! 🙏
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};
