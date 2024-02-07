"use client";

import React, { ReactNode, useState, createContext } from "react";

interface ActivePageContextProviderProps {
  children: ReactNode;
}

interface ActivePageContextType {
  activePage: string | null;
  setActivePage: React.Dispatch<React.SetStateAction<string | null>>;
}

export const ActivePageContext = createContext<ActivePageContextType | null>(null);

export const ActivePageContextProvider = ({
  children,
}: ActivePageContextProviderProps) => {
  const [activePage, setActivePage] = useState<string | null>(null);

  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </ActivePageContext.Provider>
  );
};
