// "use client";
import React from "react";
import Bounded from "../components/Bounded";
import HorizontalRow from "../components/HorizontalRow";
import Sectors from "./Sectors";
import { experience } from "@/constants";

const Experience = () => {
  // const [isChecked, setIsChecked] = useState(false);
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

{
  /* <div className="TEST">
  <div className="collapse collapse-arrow bg-base-200">
    <input
      type="radio"
      name="my-accordion-2"
      onClick={() => setIsChecked(!isChecked)}
      defaultChecked={true}
    />
    <div className="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div className="collapse-content">
      <p>hello</p>
    </div>
  </div>

  <div className="collapse collapse-arrow bg-base-200">
    <input
      type="radio"
      name="my-accordion-2"
      onClick={() => setIsChecked(!isChecked)}
      defaultChecked={false}
    />
    <div className="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div className="collapse-content">
      <p>hello</p>
    </div>
  </div>

  <div className="collapse collapse-arrow bg-base-200">
    <input
      type="radio"
      name="my-accordion-2"
      onClick={() => setIsChecked(!isChecked)}
      defaultChecked={false}
    />
    <div className="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div className="collapse-content">
      <p>hello</p>
    </div>
  </div>
</div>; */
}
