import { headers } from "next/headers";
import clsx from "clsx";

import { getSidebarList } from "@/app/api/sidebar";

export default async function SideBar() {
  const sidebarList = await getSidebarList();

  const headersList = headers();
  const pathname = headersList.get("x-pathname") ?? "";

  return (
    <div className="lg:drawer-open">
      <input className="drawer-toggle" id="my-drawer-2" type="checkbox" />
      <div className="drawer-side">
        <label className="drawer-overlay" htmlFor="my-drawer-2"></label>
        <ul className="menu w-80 h-full bg-dark">
          {sidebarList.map((sidebarMenu) => {
            if (sidebarMenu.children) {
              return (
                <div className="collapse collapse-arrow" key={sidebarMenu.id}>
                  <input
                    type="radio"
                    aria-label={`sidebar-accordion-${sidebarMenu.id}`}
                    defaultChecked={pathname.includes(sidebarMenu.id)}
                  />
                  <div className="collapse-title font-medium">{sidebarMenu.title}</div>
                  <menu className="collapse-content">
                    {sidebarMenu.children.map((sidebarItem) => {
                      if (sidebarItem.children) {
                        const findBySlug = sidebarItem.children.find(
                          (item) => item.slug === pathname
                        );
                        return (
                          <div
                            className="collapse collapse-arrow"
                            key={sidebarItem.title}
                          >
                            <input
                              type="radio"
                              aria-label={`sidebar-menu-accordion-${sidebarItem.title}`}
                              defaultChecked={pathname === findBySlug?.slug}
                            />
                            <div className="collapse-title font-medium">
                              {sidebarItem.title}
                            </div>
                            <menu className="collapse-content">
                              {sidebarItem.children.map((sidebarChild) => {
                                return (
                                  <li key={sidebarChild.title}>
                                    <a
                                      className={clsx(
                                        "font-medium",
                                        pathname === sidebarChild.slug && "active"
                                      )}
                                      href={sidebarChild.slug}
                                    >
                                      {sidebarChild.title}
                                    </a>
                                  </li>
                                );
                              })}
                            </menu>
                          </div>
                        );
                      } else {
                        return (
                          <li key={sidebarItem.title}>
                            <a
                              className={clsx(
                                "font-medium",
                                pathname === sidebarItem.slug && "active"
                              )}
                              href={sidebarItem.slug}
                              defaultChecked={pathname === sidebarItem.slug}
                            >
                              {sidebarItem.title}
                            </a>
                          </li>
                        );
                      }
                    })}
                  </menu>
                </div>
              );
            } else {
              return (
                <li key={sidebarMenu.id}>
                  <a
                    className={clsx(
                      "font-medium",
                      pathname === sidebarMenu.slug && "active"
                    )}
                    href={sidebarMenu.slug}
                  >
                    {sidebarMenu.title}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
