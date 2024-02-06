import React from "react";
import Bounded from "../components/Bounded";
import HorizontalRow from "../components/HorizontalRow";
import Sectors from "./Sectors";
import { experience } from "@/constants";

const Experience = () => {
  return (
    <Bounded className="bg-slate-800" pageid={"experience"}>
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
    </Bounded>
  );
};

export default Experience;
