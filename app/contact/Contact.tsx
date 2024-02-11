"use client";

import React from "react";
import Bounded from "../components/Bounded";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import Footer from "../components/Footer";
import { usePageInView } from "../hooks/usePageInView";
import Wrapper from "../components/Wrapper";

const Contact = () => {
  const { ref } = usePageInView("Contact");

  return (
    <Bounded className="mainbackground border-none" ref={ref}>
      <Wrapper pageid={"contact"}>
        <div className="flex flex-col items-center text-center w-full">
          <h1
            className="bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500
         bg-clip-text md:text-7xl text-5xl font-extrabold uppercase tracking-[.1em] text-transparent opacity-80"
          >
            Contact Me
          </h1>
          <h1 className="text-lg mb-8">
            You can contact me at my email or through my{" "}
            <Link
              className="underline text-yellow-500"
              href={"https://www.linkedin.com/in/lev-koganov-b4a045211/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              linkedin
            </Link>
            .
          </h1>
          <h1 className="flex gap-2 text-2xl leading-none tracking-tighter mb-2">
            <MdEmail />
            levkoganov.dev@gmail.com
          </h1>

          <a href="resume.pdf" download="resume" target="_blank">
            <button className="btn btn-outline btn-wide text-slate-300 hover:bg-slate-300 hover:text-slate-950 text-xl">
              Download Resume
            </button>
          </a>

          <Footer />
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default Contact;
