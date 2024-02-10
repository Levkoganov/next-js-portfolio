"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef, useState } from "react";
import Bounded from "../components/Bounded";
import RenderNameLetters from "./RenderNameLetters";
import { firstName, lastName, tagLine, textDescription } from "../../libs/constants";
import { usePageInView } from "@/app/hooks/usePageInView";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import clsx from "clsx";
import Link from "next/link";

const Introduction = () => {
  const [onHover, setOnHover] = useState(false);
  const component = useRef(null);
  const { ref } = usePageInView(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const tl2 = gsap.timeline();

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

      tl2.fromTo(
        ".scrolldownlink",
        { y: -100, opacity: 0 },
        { opacity: 1, y: 0, duration: 1, delay: 2 }
      );
    },
    { scope: component }
  );

  return (
    <Bounded ref={component} className="mainbackground">
      <div
        ref={ref}
        id="home"
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0"
      >
        <div className="flex flex-col">
          <h1
            className="mb-8 xl:text-[clamp(3rem,12vmin,12rem)] text-8xl font-extrabold leading-none tracking-tighter"
            aria-label={`${firstName} ${lastName}`}
          >
            <span className="text-slate-300 pr-6 block md:inline-block">
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

        <div className="scrolldownlink opacity-0 flex flex-col justify-center items-center ">
          <Link
            href={"#about"}
            onMouseOver={() => setOnHover(true)}
            onMouseOut={() => setOnHover(false)}
            className="btn btn-wide btn-lg btn-outline btn-warning font-normal text-xl border-2 rounded-none"
          >
            Scroll Down
            <MdKeyboardDoubleArrowDown
              className={clsx({ "animate-bounce": onHover === true })}
            />
          </Link>
        </div>
      </div>
    </Bounded>
  );
};

export default Introduction;
