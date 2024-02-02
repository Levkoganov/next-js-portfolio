import React from "react";
import Bounded from "../components/Bounded";
import HorizontalRow from "../components/HorizontalRow";

const Projects = () => {
  return (
    <Bounded>
      <div id="projects" className="min-h-[100vh]">
        <HorizontalRow pageName={"projects"} isRowReverse={true} color={2} />
      </div>
    </Bounded>
  );
};

export default Projects;
