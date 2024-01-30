import React from "react";
interface IProps {
  name: string;
  groupName: string;
}

const RenderNameLetters = ({ name, groupName }: IProps) => {
  return name.split("").map((letter, idx) => (
    <span
      key={idx}
      className={`name-animation name-animation-${groupName} inline-block opacity-0`}
    >
      {letter}
    </span>
  ));
};

export default RenderNameLetters;
