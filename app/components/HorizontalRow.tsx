import React from "react";

interface IPros {
  pageName: string;
}

const HorizontalRow = ({ pageName }: IPros) => {
  return (
    <div className="flex gap-4 items-center py-20 ">
      <div className="md:w-8 h-px bg-slate-500 opacity-70"></div>
      <h1
        className={`bg-gradient-to-tr from-slate-500 via-slate-200 to-slate-500
         bg-clip-text text-5xl font-extrabold uppercase tracking-[.1em] text-transparent`}
      >
        {pageName}
      </h1>
      <div className="w-full h-px bg-slate-500 opacity-70"></div>
    </div>
  );
};

export default HorizontalRow;
