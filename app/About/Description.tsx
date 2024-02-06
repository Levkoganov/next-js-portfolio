import React from "react";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss } from "react-icons/si";
import Image from "next/image";
import nextSvg from "../favicon.ico";

const Description = () => {
  return (
    <div className="col-start-1 md:row-start-1">
      <h1
        className="bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500
           bg-clip-text text-3xl font-bold  tracking-[.1em] text-transparent mb-8"
      >
        Dedicated Full-Stack Software Developer based in Israel.
      </h1>
      <p className="text-lg mb-6">
        As a Full-Stack Developer i possess an impressive arsenal of skills in Javascript,
        TypeScript, React, NodeJS, HTML, CSS and much more technologies.
      </p>
      <p className="text-lg mb-6">
        I excel in designin scaling and maintaining responsive website that offer a smooth
        user experience.
      </p>
      <p className="text-lg mb-6">
        My expertise lies in crafting dynamic, engaging interfaces through writing clean
        and optimize code utilizing cutting-edge development tools and technquies.
      </p>
      <p className="text-lg mb-6">
        I am also a team player who thrives in collaborating with cross-functional teams
        to produce outstanding Web applications and software.
      </p>

      <div className="flex py-8">
        <span className="mr-5 font-semibold text-slate-200">Portfolio Stack</span>
        <span className="border-slate-600 border-r-2"></span>
        <div className="flex gap-5 items-center mx-5">
          <SiJavascript size={20} color="gold" />
          <SiTypescript size={20} color="DodgerBlue" />
          <Image src={nextSvg} alt="next" style={{ width: "24px", height: "24px" }} />
          <FaReact size={22} color="SteelBlue" />
          <SiTailwindcss size={22} color="DeepSkyBlue" />
        </div>
      </div>
    </div>
  );
};

export default Description;
