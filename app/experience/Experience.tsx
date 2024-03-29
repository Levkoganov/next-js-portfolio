"use client";

import React from "react";
import Bounded from "../components/Bounded";
import HorizontalRow from "../components/HorizontalRow";
import Sectors from "./Sectors";
import { experience } from "@/libs/constants";

import { usePageInView } from "../hooks/usePageInView";
import Wrapper from "../components/Wrapper";

const Experience = () => {
  const { ref } = usePageInView("Experience");

  return (
    <Bounded className="bg-slate-800">
      <Wrapper ref={ref} pageid={"experience"}>
        <HorizontalRow pageName={"experience"} />
        <div>
          {experience.map((item) => (
            <Sectors
              key={item.id}
              id={item.id}
              companyName={item.companyName}
              workDuration={item.workDuration}
              title={item.title}
              location={item.location}
              description={item.description}
              companywebsite={item.companywebsite}
              technologies={item.technologies}
            />
          ))}
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default Experience;
