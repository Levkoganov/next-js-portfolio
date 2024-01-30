"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";
import Bounded from "../../components/Bounded";
import RenderNameLetters from "./RenderNameLetters";
import { firstName, lastName, tagLine, textDescription } from "../../../constants";
import Shapes from "../shapes/Shapes";

const Introduction = () => {
  const component = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".name-animation",
        { x: -100, rotate: -10 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
          duration: 1.5,
          transformOrigin: "left top",
          delay: 0.5,
          stagger: {
            each: 0.1,
            from: "random",
          },
        }
      );

      tl.fromTo(
        ".job-title",
        { x: 200, opacity: 0 },
        { opacity: 1, x: 0, duration: 1 },
        "-=1.5"
      );
      tl.fromTo(
        ".self-description",
        { x: -200, opacity: 0 },
        { opacity: 1, x: 0, duration: 0.8 },
        "-=1"
      );
    },
    { scope: component }
  );

  return (
    <Bounded ref={component}>
      <div className="grid min-h-[100vh] grid-cols-1 md:grid-cols-2 items-center">
        <Shapes />
        <div className="col-start-1 md:row-start-1 select-none">
          <h1
            className="mb-8 xl:text-[clamp(3rem,15vmin,15rem)] text-8xl font-extrabold leading-none tracking-tighter"
            aria-label={`${firstName} ${lastName}`}
          >
            <span className="block text-slate-300 ">
              <RenderNameLetters name={firstName} groupName={"firstName"} />
            </span>
            <span className="-mt-[.2em] text-slate-500">
              <RenderNameLetters name={lastName} groupName={"lastName"} />
            </span>
          </h1>
          <span
            className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500
           bg-clip-text text-3xl font-bold uppercase tracking-[.2em] text-transparent md:text-4x1 opacity-0"
          >
            {tagLine}
          </span>

          <span className="self-description text-slate-300 block mt-3 text-xl tracking-tighter opacity-0">
            {textDescription}
          </span>
        </div>
      </div>
    </Bounded>
  );
};

export default Introduction;
