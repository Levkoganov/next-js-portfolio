import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface IStack {
  icons: any[];
  names: string[];
}

interface IProps {
  header: string;
  description: string;
  stack: IStack;
  link: string;
}

const Card = ({ header, description, stack, link }: IProps) => {
  const { icons, names } = stack;

  return (
    <div className="cardshadow card rounded-none border-x border-black bg-slate-800  hover:-translate-y-3 hover:-translate-x-3 transition duration-200 ease-in-out">
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
          <Link
            className="btn btn-outline btn-wide bg-slate-900"
            href={link}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub <FaGithub size={"22px"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
