import clsx from "clsx";
import React from "react";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  pageid?: string;
};

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx("relative px-4 md:px-6 border-b-2 border-slate-900", className)}
        {...restProps}
      >
        <div className="m-auto w-full max-w-screen-2xl">
          <div id={restProps.pageid} className="flex items-center min-h-[100vh] py-24">
            {children}
          </div>
        </div>
      </Comp>
    );
  }
);

Bounded.displayName = "Bounded";

export default Bounded;
