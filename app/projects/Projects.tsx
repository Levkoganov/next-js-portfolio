"use client";

import React from "react";
import Bounded from "../components/Bounded";
import HorizontalRow from "../components/HorizontalRow";
import Card from "./Card";
import { projectsInfo } from "@/libs/constants";
import { usePageInView } from "../hooks/usePageInView";
import Wrapper from "../components/Wrapper";

const Projects = () => {
  const { ref } = usePageInView("Projects");

  return (
    <Bounded className="mainbackground">
      <Wrapper ref={ref} pageid={"projects"}>
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
      </Wrapper>
    </Bounded>
  );
};

export default Projects;
