import React from "react";

const Footer = () => {
  return (
    <footer className="py-2 px-4 text-center text-gray-400 bottom-0 absolute">
      <small className="text-s">© 2024 Lev Koganov. All rights reserved.</small>
      <p className="text-xs">
        <span className="font-semibold">
          About this website:
          <span>
            built with React & Next.js (App Router), TypeScript, Tailwind & daisyUI CSS,
            GSAP, Vercel hosting.
          </span>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
