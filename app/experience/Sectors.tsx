import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface IProps {
  companyName: string;
  workDuration: string;
  title: string;
  location: string;
  description: string;
  companywebsite?: string;
  technologies: string[];
}

const Sectors = ({
  companyName,
  workDuration,
  title,
  location,
  description,
  companywebsite,
  technologies,
}: IProps) => {
  return (
    <div className="flex flex-col gap-4 mb-8 pb-8 border-b-2 border-slate-700">
      <div className="flex justify-between text-3xl font-bold">
        <h1>{companyName}</h1>
        <h1>{workDuration}</h1>
      </div>

      <div
        className="flex justify-between bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500
           bg-clip-text text-2xl font-bold  text-transparent"
      >
        <h1>{title}</h1>
        <h1>{location}</h1>
      </div>

      <div className="md:w-2/5">
        <p>{description}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {technologies.map((item) => (
          <span
            className="text-center font-bold text-base text bg-slate-800 px-4 py-1 rounded-xl border select-none"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>

      {companywebsite && (
        <div>
          <Link
            className="btn btn-outline btn-success"
            href={companywebsite}
            rel="noopener noreferrer"
            target="_blank"
          >
            Live Website <FaExternalLinkAlt />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sectors;
