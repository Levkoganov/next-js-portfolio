import React from "react";

const Footer = () => {
  return (
    <footer className="mb-4 px-4 text-center text-gray-400">
      <small className="text-s">© 2024 Lev Koganov. All rights reserved.</small>
      <p className="text-xs">
        <span className="font-semibold">
          About this website:
          <span>
            built with React & Next.js (App Router), TypeScript, Tailwind & daisyUI CSS,
            Three.js, GSAP, Vercel hosting.
          </span>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
