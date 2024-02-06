import React from "react";
import { IconType } from "react-icons";

interface IProps {
  name: string;
  techs: string[];
  Icon: IconType;
}

const TechSection = ({ name, techs, Icon }: IProps) => {
  const gridClassName = `text-center font-semibold text-base bg-slate-900 p-2 rounded-md border border-slate-600
  ${
    name === "Core" ? "hover:bg-lime-700" : "hover:bg-yellow-400"
  } hover:text-black transform duration-100 select-none`;
  return (
    <div>
      <h1 className="flex gap-2 mb-8 text-3xl font-semibold leading-none tracking-tighter">
        <Icon color={name === "Core" ? "green" : "yellow"} />
        {name} - Technologies
      </h1>
      <div className="grid lg:grid-cols-4 md: grid-cols-3 gap-3">
        {techs.map((item) => (
          <span className={gridClassName} key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechSection;
