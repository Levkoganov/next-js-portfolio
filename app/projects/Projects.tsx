import React from "react";
import Bounded from "../components/Bounded";
import HorizontalRow from "../components/HorizontalRow";
import Card from "./Card";
import { projectsInfo } from "@/constants";

const Projects = () => {
  return (
    <Bounded>
      <div id="project" className="min-h-[100vh]">
        <HorizontalRow pageName={"projects"} isRowReverse={true} />

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
      </div>
    </Bounded>
  );
};

export default Projects;
