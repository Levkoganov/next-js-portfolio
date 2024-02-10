import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { IStack } from "@/libs/types";

interface IProps {
  header: string;
  description: string;
  stack: IStack;
  link: string;
}

const Card = ({ header, description, stack, link }: IProps) => {
  const { icons, names } = stack;

  return (
    <div className="cardshadow card rounded-md border-2 border-slate-900 bg-slate-800  hover:-translate-y-3 hover:-translate-x-3 transition duration-200 ease-in-out">
      <div className="card-body items-center gap-8">
        <h2
          className="card-title bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500
           bg-clip-text text-3xl font-bold text-transparent"
        >
          {header}
        </h2>
        <p>{description}</p>
        <div className="card-actions column">
          <div className="grid grid-rows-2">
            <div className="grid grid-flow-col auto-cols-fr justify-items-center gap-4">
              {icons.map((item, idx) => (
                <Image
                  key={idx}
                  src={item}
                  alt="icon"
                  style={{ width: "28px", height: "28px" }}
                />
              ))}
            </div>

            <div className="grid grid-flow-col auto-cols-fr items-center justify-items-center gap-4">
              {names.map((item, idx) => (
                <p key={idx} className="text-xs">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="card-actions">
          <a href={link} target="_blank">
            <button className="btn btn-outline btn-wide bg-slate-900">
              GitHub <FaGithub size={"22px"} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
