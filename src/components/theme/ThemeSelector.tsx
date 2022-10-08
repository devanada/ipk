import React, { Suspense, lazy, useContext } from "react";

import { ThemeContext, contextType } from "utils/themeContext";
const LightTheme = lazy(() => import("components/theme/Light"));
const DarkTheme = lazy(() => import("components/theme/Dark"));

interface Props {
  children: React.ReactNode;
}

const ThemeSelector = ({ children }: Props) => {
  const { isLight } = useContext<contextType>(ThemeContext);

  return (
    <>
      <Suspense fallback={<></>}>
        {isLight ? <LightTheme /> : <DarkTheme />}
      </Suspense>
      {children}
    </>
  );
};

export default ThemeSelector;
