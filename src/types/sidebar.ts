export interface SidebarChild {
  title: string;
  slug: string;
}

export interface SidebarItem {
  title: string;
  slug: string;
  children?: SidebarChild[];
}

export interface SideBarType {
  id: string;
  title: string;
  slug: string;
  children?: SidebarItem[];
}
