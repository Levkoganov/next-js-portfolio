"use client";

import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ActivePageContext } from "../context/ActivePageContext";

export function usePageInView(pageName: string | null, pageViewSize?: number) {
  const { ref, inView } = useInView({ threshold: pageViewSize ?? 0.6 });
  const context = useContext(ActivePageContext);

  useEffect(() => {
    if (inView) {
      context?.setActivePage(pageName);
    }
  }, [context, inView, pageName]);

  return { ref };
}
