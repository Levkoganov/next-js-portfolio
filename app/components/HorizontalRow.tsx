import React from "react";

interface IPros {
  pageName?: string;
}

const HorizontalRow = ({ pageName }: IPros) => {
  return (
    <div className="absolute items-center top-0 -translate-y-1/2 select-none">
      {pageName && (
        <h1
          className={`bg-gradient-to-tr from-slate-500 via-slate-200 to-slate-500
         bg-clip-text md:text-5xl text-3xl sm font-extrabold uppercase tracking-[.1em] text-transparent`}
        >
          {pageName}
        </h1>
      )}
    </div>
  );
};

export default HorizontalRow;
