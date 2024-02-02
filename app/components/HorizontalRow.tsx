import React from "react";

interface IPros {
  pageName: string;
  isRowReverse: boolean;
  color: number;
}

interface IColorMap {
  [key: string]: string;
}

const HorizontalRow = ({ pageName, isRowReverse, color }: IPros) => {
  const colorPayload: IColorMap = {
    1: "lime",
    2: "amber",
    3: "blue",
    4: "red",
    5: "slate",
  };

  const rowReverseClassName = `flex gap-4 items-center py-20 
  ${isRowReverse && "flex-row-reverse"}`;

  return (
    <div className={rowReverseClassName}>
      <div className="w-8 h-px bg-slate-500 opacity-70"></div>
      <h1
        className={`bg-gradient-to-tr from-${colorPayload[color]}-500 via-${colorPayload[color]}-200 to-${colorPayload[color]}-500
     bg-clip-text text-5xl font-extrabold uppercase tracking-[.1em] text-transparent`}
      >
        {pageName}
      </h1>
      <div className="w-full h-px bg-slate-500 opacity-70"></div>
    </div>
  );
};

export default HorizontalRow;
