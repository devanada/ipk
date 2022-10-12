import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { HomeIcon, WrenchIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext, contextType } from "utils/themeContext";

function Drawer() {
  const { isLight } = useContext<contextType>(ThemeContext);
  let { pathname } = useLocation();

  return (
    <Sidebar
      backgroundColor={isLight ? "#fff" : "#0d1117"}
      style={{
        borderRight: isLight ? "5px solid #f6f8fa" : "5px solid #161b22",
      }}
      breakPoint="lg"
    >
      <Menu
        renderMenuItemStyles={({ active }) => ({
          ".menu-icon": {
            width: "1.5rem",
            minWidth: "1.5rem",
            height: "1.5rem",
          },
          ".menu-anchor": {
            backgroundColor: active
              ? isLight
                ? "#f6f8fa"
                : "#161b22"
              : "initial",
            color: isLight ? "#334115" : "#94A3B8",
          },
          ".sub-menu-content": {
            backgroundColor: isLight ? "#fff" : "#0d1117",
            padding: "0px",
          },
        })}
      >
        <MenuItem href="/" active={pathname === "/"} icon={<HomeIcon />}>
          Home
        </MenuItem>
        <MenuItem icon={<WrenchIcon />}>Tools</MenuItem>
        <div className="divider my-0"></div>
        <SubMenu
          label="JavaScript"
          defaultOpen={pathname.includes("javascript")}
        >
          <MenuItem
            href="/javascript/intro"
            active={pathname === "/javascript/intro"}
          >
            Introduction
          </MenuItem>
        </SubMenu>
        <SubMenu label="React" defaultOpen={pathname.includes("react")}>
          <MenuItem href="/react/intro" active={pathname === "/react/intro"}>
            Introduction
          </MenuItem>
          <SubMenu
            label="Global State"
            defaultOpen={pathname.includes("react/global-state")}
          >
            <MenuItem
              href="/react/global-state/context"
              active={pathname === "/react/global-state/context"}
            >
              Context
            </MenuItem>
            <MenuItem
              href="/react/global-state/redux"
              active={pathname === "/react/global-state/redux"}
            >
              Redux
            </MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}

export default Drawer;
