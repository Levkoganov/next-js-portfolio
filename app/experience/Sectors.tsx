import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface IProps {
  id: number;
  companyName: string;
  workDuration: string;
  title: string;
  location: string;
  description: string;
  companywebsite?: string;
  technologies: string[];
}

const Sectors = ({
  id,
  companyName,
  workDuration,
  title,
  location,
  description,
  companywebsite,
  technologies,
}: IProps) => {
  return (
    <div className="join join-vertical w-full bg-slate-900 py-2 mb-4 border-2 border-slate-700 rounded-md">
      <div className="collapse collapse-arrow join-item">
        <input type="radio" name="my-accordion-4" defaultChecked={id === 1} />
        <div className="collapse-title text-xl font-medium">
          <div className="flex justify-between md:text-3xl font-bold flex-col text-slate-300">
            <div className="flex justify-between">
              <h1>{companyName}</h1>
              <h1>{workDuration}</h1>
            </div>

            <div
              className="flex gap-2 flex-row justify-between bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500
            bg-clip-text text-lg font-semibold text-transparent"
            >
              <h1>{title}</h1>
              <h1>{location}</h1>
            </div>
          </div>
        </div>
        <div className="collapse-content flex flex-col gap-4">
          <div className="md:w-2/5">
            <p>{description}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {technologies.map((item) => (
              <span
                className="text-center font-semibold text-base bg-slate-800 px-4 py-1 rounded-md border border-slate-600 select-none"
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
      </div>
    </div>
  );
};

export default Sectors;
