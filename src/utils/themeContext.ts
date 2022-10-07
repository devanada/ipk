import { createContext } from "react";

export interface contextType {
  isLight: boolean;
  setIsLight: (isLight: boolean) => void;
}

const ctx = {
  isLight: false,
  setIsLight: () => {},
};

export const ThemeContext = createContext<contextType>(ctx);
