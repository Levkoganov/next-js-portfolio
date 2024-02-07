"use client";

import React, { useContext, useEffect } from "react";
import Bounded from "../components/Bounded";
import HorizontalRow from "../components/HorizontalRow";
import Card from "./Card";
import { projectsInfo } from "@/constants";
import { useInView } from "react-intersection-observer";
import { ActivePageContext } from "../context/ActivePageContext";

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const context = useContext(ActivePageContext);

  useEffect(() => {
    if (inView) {
      context?.setActivePage("Projects");
    }
  }, [inView, context]);

  return (
    <Bounded pageid={"projects"} ref={ref}>
      <HorizontalRow pageName={"projects"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsInfo.map(({ projectId, header, description, stack, link }) => (
          <Card
            key={projectId}
            header={header}
            description={description}
            stack={stack}
            link={link}
          />
        ))}
      </div>
    </Bounded>
  );
};

export default Projects;
