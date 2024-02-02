import React from "react";
import Bounded from "../components/Bounded";
import HorizontalRow from "../components/HorizontalRow";
import { FaFileCode, FaRegFileCode, FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss } from "react-icons/si";
import { coreTech, secondaryTech } from "@/constants";
import nextSvg from "../favicon.ico";
import Technologies from "./Technologies";
import Image from "next/image";
import Description from "./Description";

const About = () => {
  return (
    <Bounded>
      <div id="about" className="min-h-[100vh]">
        <HorizontalRow pageName={"about"} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Description />
          <div className="flex flex-col justify-between gap-8">
            <Technologies name="Core" techs={coreTech} Icon={FaFileCode} />
            <Technologies name="Secondary" techs={secondaryTech} Icon={FaRegFileCode} />
          </div>
        </div>

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
    </Bounded>
  );
};

export default About;
