import React from "react";
import Bounded from "../components/Bounded";
import HorizontalRow from "../components/HorizontalRow";
import Sectors from "./Sectors";
import { experience } from "@/constants";

const Experience = () => {
  return (
    <Bounded>
      <div id="experience" className="min-h-[100vh]">
        <HorizontalRow pageName={"experience"} />
        <div className="grid grid-cols-1">
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
      </div>
    </Bounded>
  );
};

export default Experience;
