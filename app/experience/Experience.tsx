"use client";

import React, { useContext, useEffect } from "react";
import Bounded from "../components/Bounded";
import HorizontalRow from "../components/HorizontalRow";
import Sectors from "./Sectors";
import { experience } from "@/constants";
import { useInView } from "react-intersection-observer";
import { ActivePageContext } from "../context/ActivePageContext";

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const context = useContext(ActivePageContext);

  useEffect(() => {
    if (inView) {
      context?.setActivePage("Experience");
    }
  }, [inView, context]);

  return (
    <Bounded className="bg-slate-800" pageid={"experience"} ref={ref}>
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
