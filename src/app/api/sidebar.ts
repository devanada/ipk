import fs from "fs";

import { SideBarType, SidebarItem, SidebarChild } from "@/types/sidebar";
import { formatToUppercase, formatWord } from "@/utils/formatter";
import { DIR_PATH } from "@/constants/variable";

export const getSidebarList = async () => {
  const sidebarMenu = await getSidebarMenu();
  const sidebarList = await getDrawerList(sidebarMenu);
  return sidebarList;
};

export const getSidebarMenu = async () => {
  const readDir = fs.readdirSync(DIR_PATH);
  let menus: SideBarType[] = [];

  readDir.forEach((dir) => {
    const list: SideBarType = {
      id: dir,
      title: formatToUppercase(dir),
      slug: "",
      children: [],
    };
    menus.push(list);
  });

  return menus;
};

export const getDrawerList = async (menus: SideBarType[]) => {
  const dupeMenus = menus.slice();
  dupeMenus.forEach((menu) => {
    const items = fs.readdirSync(DIR_PATH + menu.id);
    items.forEach((item) => {
      const sidebarItem: SidebarItem = {
        title: formatToUppercase(formatWord(item)),
        slug: `/learning/${menu.id}-${formatWord(item)}`,
      };
      if (!item.includes(".mdx")) {
        const childs = fs.readdirSync(DIR_PATH + menu.id + `/${item}`);
        const sidebarChild: SidebarChild[] = [];
        childs.forEach((child) => {
          const temp: SidebarChild = {
            title: formatToUppercase(formatWord(child)),
            slug: `/learning/${menu.id}-${formatWord(child)}`,
          };
          sidebarChild.push(temp);
        });
        sidebarItem.children = sidebarChild;
      }
      menu.children?.push(sidebarItem);
    });
  });
  return dupeMenus;
};
