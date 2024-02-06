import React from "react";
import Bounded from "../components/Bounded";
import HorizontalRow from "../components/HorizontalRow";
import { FaFileCode, FaRegFileCode } from "react-icons/fa";
import { coreTech, secondaryTech } from "@/constants";
import Technologies from "./Technologies";
import Description from "./Description";

const About = () => {
  return (
    <Bounded className="bg-slate-800" pageid={"about"}>
      <HorizontalRow pageName={"about"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Description />
        <div className="flex flex-col gap-8">
          <Technologies name="Core" techs={coreTech} Icon={FaFileCode} />
          <Technologies name="Secondary" techs={secondaryTech} Icon={FaRegFileCode} />
        </div>
      </div>
    </Bounded>
  );
};

export default About;
