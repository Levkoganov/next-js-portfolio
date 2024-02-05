import React from "react";
import Bounded from "../components/Bounded";
import HorizontalRow from "../components/HorizontalRow";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <Bounded>
      <div id="contact" className="min-h-[50vh]">
        <HorizontalRow />
        <div className="flex flex-col items-center text-center">
          <h1
            className=" bg-gradient-to-tr from-slate-500 via-slate-200 to-slate-500
         bg-clip-text text-5xl font-extrabold uppercase tracking-[.1em] text-transparent"
          >
            Contact Me.
          </h1>
          <h1 className="text-lg mb-8">
            You can contact me at my <span className="underline">email</span> or through
            my{" "}
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
          <h1 className="flex  text-2xl leading-none tracking-tighter mb-2">
            <MdEmail />
            lev.20133@gmail.com
          </h1>
          <button className="btn btn-wide btn-outline  text-xl">Download Resume</button>
        </div>
      </div>
    </Bounded>
  );
};

export default Contact;
