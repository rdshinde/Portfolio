import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "./BackgroundCircles";
import Link from "next/link";
type Props = {};

export const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, This-is-Rishikesh-Shinde",
      "Guy-who-makes-code-run-with-coffee.",
      "<Loves-to-cook    value={True} />",
      "<Loves-to-travel   value={True} />",
      "Hi, This-is-Rishikesh-Shinde",
    ],
    loop: 1,
    delaySpeed: 100,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="rounded-full h-64 w-64 relative mx-auto object-cover bottom-14"
        src="https://pbs.twimg.com/profile_images/1577564208837062656/3HOjsIom_400x400.jpg"
        alt=""
      />
      <div className="z-20">
        <h2 className="test-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Web Enthusiast
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#FF1615" />
        </h1>
        <div className="pt-10">
          <Link href={"#about"}>
            <button className="hero_button">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="hero_button">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="hero_button">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="hero_button">Projects</button>
          </Link>
          <Link href={"#blogs"}>
            <button className="hero_button">Blogs</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
