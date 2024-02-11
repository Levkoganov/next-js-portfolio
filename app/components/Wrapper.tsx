import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  pageid?: string;
}

const Wrapper = React.forwardRef<HTMLDivElement, WrapperProps>(
  ({ children, pageid }, ref) => {
    return (
      <>
        <span className="relative top-[16rem]" ref={ref}></span>
        <div id={pageid} className="flex items-center min-h-[100vh] py-24">
          {children}
        </div>
      </>
    );
  }
);

Wrapper.displayName = "Wrapper";

export default Wrapper;
