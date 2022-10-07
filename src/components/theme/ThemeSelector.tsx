import React, { Suspense, lazy, useState, useMemo } from "react";

import { ThemeContext } from "utils/themeContext";
const LightTheme = lazy(() => import("components/theme/Light"));
const DarkTheme = lazy(() => import("components/theme/Dark"));

interface Props {
  children: React.ReactNode;
}

const ThemeSelector = ({ children }: Props) => {
  const [isLight, setIsLight] = useState<boolean>(
    JSON.parse(localStorage.getItem("isLight") || "false")
  );
  const background = useMemo(() => ({ isLight, setIsLight }), [isLight]);

  return (
    <ThemeContext.Provider value={background}>
      <Suspense fallback={<></>}>
        {isLight ? <LightTheme /> : <DarkTheme />}
      </Suspense>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeSelector;
