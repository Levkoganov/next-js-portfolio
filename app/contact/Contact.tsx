"use client";

import React from "react";
import Bounded from "../components/Bounded";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import Footer from "../components/Footer";
import { usePageInView } from "../hooks/usePageInView";

const Contact = () => {
  const { ref } = usePageInView("Contact");

  return (
    <Bounded className="border-none" pageid={"contact"} ref={ref}>
      <div className="flex flex-col items-center text-center w-full">
        <h1
          className="bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500
         bg-clip-text md:text-7xl text-5xl font-extrabold uppercase tracking-[.1em] text-transparent opacity-80"
        >
          Contact Me
        </h1>
        <h1 className="text-lg mb-8">
          You can contact me at my <span className="underline">email</span> or through my{" "}
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
          Example@gmail.com
        </h1>
        <button className="btn btn-wide btn-outline  text-xl">Download Resume</button>

        <Footer />
      </div>
    </Bounded>
  );
};

export default Contact;
