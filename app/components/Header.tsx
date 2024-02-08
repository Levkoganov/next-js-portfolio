import React from "react";
import { GoDownload } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 h-20 px-6 mx-auto flex w-full items-center justify-between backdrop-blur	">
      <div className="flex gap-6">
        <Link
          href={"https://www.linkedin.com/in/lev-koganov-b4a045211/"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin
            className="hover:text-yellow-500 transition duration-300 ease"
            size={"22px"}
          />
        </Link>

        <Link
          href={"https://github.com/Levkoganov"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub
            className="hover:text-yellow-500 transition duration-300 ease"
            size={"22px"}
          />
        </Link>
      </div>

      <button className="btn btn-outline btn-warning">
        My Resume
        <GoDownload size={"18px"} />
      </button>
    </header>
  );
};

export default Header;
