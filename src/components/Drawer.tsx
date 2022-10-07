import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useLocation } from "react-router-dom";

function Drawer() {
  let { pathname } = useLocation();

  return (
    <Sidebar
      backgroundColor="#0d1117"
      style={{ borderRight: "5px solid #161b22" }}
      breakPoint="md"
    >
      <div className="h-32 w-full flex justify-center items-center border-b-2 border-[#161b22]">
        <a href="/">
          <h1 className="font-sans text-2xl">Learn FrontEnd</h1>
        </a>
      </div>
      <Menu
        renderMenuItemStyles={({ active, disabled, level }) => ({
          ".menu-icon": {
            backgroundColor: "#e1e1e1",
          },
          ".menu-anchor": {
            backgroundColor: active ? "#161b22" : "initial",
          },
          ".sub-menu-content": {
            backgroundColor: "#0d1117",
            padding: "0px",
          },
        })}
      >
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
