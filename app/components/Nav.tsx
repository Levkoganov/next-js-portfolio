"use client";

import { navBarItems } from "@/libs/constants";
import clsx from "clsx";
import Link from "next/link";
import React, { useContext } from "react";
import { ActivePageContext } from "../context/ActivePageContext";

const Nav = () => {
  const context = useContext(ActivePageContext);

  return (
    <div className="bg-slate-950 w-20">
      <nav className="sticky top-0 left-0 z-20 flex flex-col items-center">
        <Link
          href=""
          className="flex justify-center items-center font-black h-20 w-full text-2xl tracking-tighter bg-slate-800"
        >
          L<span className="text-yellow-500 font-black">.</span>K
        </Link>
        {navBarItems.map((page) => (
          <Link
            key={page}
            href={`#${page.toLowerCase()}`}
            style={{ writingMode: "vertical-lr" }}
            className={clsx(
              "flex w-full items-center	py-6 opacity-50 text-lg tracking-wide hover:betterhover:opacity-100 hover:betterhover:bg-slate-900 hover:betterhover:border-r border-yellow-500",
              {
                "opacity-[1] bg-slate-900 border-r": context?.activePage === page,
              }
            )}
          >
            {page}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
