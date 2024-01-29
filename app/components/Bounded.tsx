import clsx from "clsx";
import React from "react";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
};

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        // className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py:16", className)}
        className={clsx("px-4 md:px-6", className)}
        {...restProps}
      >
        {/* <div className="mx-auto w-full max-w-7x1">{children}</div> */}
        <div className="mx-auto w-full max-w-7x1">{children}</div>
      </Comp>
    );
  }
);

Bounded.displayName = "Bounded";

export default Bounded;
