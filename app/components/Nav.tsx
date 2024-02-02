import { navBarItems } from "@/constants";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="bg-slate-950 w-20">
      <nav className="sticky top-0 left-0 z-20 flex flex-col items-center">
        <span className="flex justify-center items-center font-black h-20 w-full text-2xl tracking-tighter bg-slate-800">
          L<span className="text-yellow-500 font-black">.</span>K
        </span>
        {navBarItems.map((page) => (
          <Link
            key={page}
            href={`#${page.toLowerCase()}`}
            style={{ writingMode: "vertical-lr" }}
            className="flex w-full items-center	py-6 opacity-50 text-lg tracking-wide
            hover:opacity-100 hover:bg-slate-900 hover:border-r border-yellow-500"
          >
            {page}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
