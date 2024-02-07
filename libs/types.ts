import { ReactNode } from "react";

export interface IExperience {
  id: number;
  companyName: string;
  workDuration: string;
  title: string;
  location: string;
  description: string;
  companywebsite?: string;
  technologies: string[];
}

export interface IStack {
  icons: any[];
  names: string[];
}

export interface ActivePageContextProviderProps {
  children: ReactNode;
}
export interface ActivePageContextType {
  activePage: string | null;
  setActivePage: React.Dispatch<React.SetStateAction<string | null>>;
}
