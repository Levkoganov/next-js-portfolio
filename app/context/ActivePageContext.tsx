"use client";
import { ActivePageContextType, ActivePageContextProviderProps } from "@/libs/types";
import React, { useState, createContext } from "react";

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
