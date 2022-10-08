import React from "react";

import Navbar from "components/Navbar";
import Drawer from "components/Drawer";

import ThemeSelector from "components/theme/ThemeSelector";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="w-full h-screen flex bg-white dark:bg-dark-gh">
      <Drawer />
      <div className="w-full h-full flex flex-col">
        <ThemeSelector>
          <Navbar />
          <div className="w-full h-full overflow-auto">{children}</div>
        </ThemeSelector>
      </div>
    </div>
  );
}

export default Layout;
