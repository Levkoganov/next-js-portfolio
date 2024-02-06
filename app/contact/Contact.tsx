import React from "react";
import Bounded from "../components/Bounded";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <Bounded className="border-none" pageid={"contact"}>
      <div className="flex flex-col items-center text-center w-full">
        <h1
          className="bg-gradient-to-tr from-slate-500 via-slate-200 to-slate-500
         bg-clip-text md:text-7xl text-5xl font-extrabold uppercase tracking-[.1em] text-transparent"
        >
          Contact Me.
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
          lev.20133@gmail.com
        </h1>
        <button className="btn btn-wide btn-outline  text-xl">Download Resume</button>

        <Footer />
      </div>
    </Bounded>
  );
};

export default Contact;
