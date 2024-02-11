"use client";

import React from "react";
import Bounded from "../components/Bounded";
import HorizontalRow from "../components/HorizontalRow";
import { FaFileCode, FaRegFileCode } from "react-icons/fa";
import { coreTech, secondaryTech } from "@/libs/constants";
import Technologies from "./Technologies";
import Description from "./Description";
import { usePageInView } from "../hooks/usePageInView";
import Wrapper from "../components/Wrapper";

const About = () => {
  const { ref } = usePageInView("About");

  return (
    <Bounded className="bg-slate-800">
      <Wrapper ref={ref} pageid={"about"}>
        <HorizontalRow pageName={"about"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <Description />
          </div>
          <div className="flex flex-col justify-between gap-8">
            <Technologies name="Core" techs={coreTech} Icon={FaFileCode} />
            <Technologies name="Secondary" techs={secondaryTech} Icon={FaRegFileCode} />
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default About;
