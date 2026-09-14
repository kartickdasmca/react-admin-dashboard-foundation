import { useEffect, useState } from "react";
import {
  ChevronDown,
  X,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import { sidebarData } from "../../../data/sidebarData";
import type { SidebarProps } from "../../../types/sidebar";

interface ExtendedSidebarProps extends SidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

const Sidebar = ({
  collapsed,
  onToggle,
  mobileOpen,
  onMobileClose,
}: ExtendedSidebarProps) => {
  const location = useLocation();

  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set()
  );

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);

      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }

      return next;
    });
  };

  /*
   * Automatically expand the parent menu
   * when the current URL belongs to a submenu.
   */
  useEffect(() => {
    const parentIds = sidebarData
      .filter((item) =>
        item.submenu?.some((subitem) =>
          location.pathname.startsWith(subitem.path)
        )
      )
      .map((item) => item.id);

    if (parentIds.length === 0) {
      return;
    }

    setExpandedItems((prev) => {
      const next = new Set(prev);

      parentIds.forEach((id) => next.add(id));

      return next;
    });
  }, [location.pathname]);

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={onMobileClose}
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm md:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex w-72 flex-col
          border-r border-slate-200/70
          bg-white/95
          shadow-xl
          backdrop-blur-xl
          dark:border-slate-700/50
          dark:bg-slate-900/95
          md:static
          md:z-10
          md:shadow-none
          md:transition-[width]
          md:duration-300
          md:ease-in-out
          ${collapsed ? "md:w-20" : "md:w-72"}
          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
          transition-transform
          duration-300
          ease-in-out
        `}
      >
        {/* Logo / Sidebar header */}
        <div
          className={`
            shrink-0
            border-b border-slate-200/70
            dark:border-slate-700/50
            ${collapsed ? "p-4" : "p-5"}
          `}
        >
          <div className="flex items-center justify-between">
            <div className="flex min-w-0 items-center gap-3">
              {/* Logo */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg">
                <span className="text-lg font-bold text-white">
                  ⚡
                </span>
              </div>

              {/* Logo text */}
              {!collapsed && (
                <div className="min-w-0">
                  <h1 className="truncate text-xl font-bold text-slate-800 dark:text-white">
                    Multi Purpose
                  </h1>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Admin Panel
                  </p>
                </div>
              )}
            </div>

            {/* Mobile close */}
            <button
              type="button"
              onClick={onMobileClose}
              aria-label="Close navigation menu"
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 md:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-3 sm:p-4">
          {sidebarData.map((item) => {
            const Icon = item.icon;
            const hasSubmenu = Boolean(item.submenu?.length);
            const isExpanded = expandedItems.has(item.id);

            /*
             * Parent menu with submenu
             */
            if (hasSubmenu) {
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`${item.id}-submenu`}
                    title={collapsed ? item.label : undefined}
                    onClick={() => {
                      if (collapsed) {
                        onToggle();
                        return;
                      }

                      toggleExpanded(item.id);
                    }}
                    className="
                      flex w-full items-center justify-between
                      rounded-xl p-3 text-left
                      text-slate-600
                      transition-all duration-200
                      hover:bg-slate-100
                      dark:text-slate-300
                      dark:hover:bg-slate-800/60
                    "
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <Icon className="h-5 w-5 shrink-0" />

                      {!collapsed && (
                        <span className="truncate font-medium">
                          {item.label}
                        </span>
                      )}
                    </div>

                    {!collapsed && (
                      <ChevronDown
                        className={`
                          h-4 w-4 shrink-0
                          transition-transform duration-200
                          ${
                            isExpanded
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    )}
                  </button>

                  {/* Submenu */}
                  {!collapsed && isExpanded && (
                    <div
                      id={`${item.id}-submenu`}
                      className="ml-8 mt-1 space-y-1 border-l border-slate-200 pl-3 dark:border-slate-700"
                    >
                      {item.submenu?.map((subitem) => (
                        <NavLink
                          key={subitem.id}
                          to={subitem.path}
                          onClick={onMobileClose}
                          className={({ isActive }) => `
                            block rounded-lg px-3 py-2 text-sm
                            transition-all duration-200
                            ${
                              isActive
                                ? "bg-orange-100 font-medium text-orange-700 dark:bg-orange-500/10 dark:text-orange-400"
                                : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                            }
                          `}
                        >
                          {subitem.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            /*
             * Normal navigation item
             */
            return (
              <NavLink
                key={item.id}
                to={item.path ?? "/"}
                end={item.id === "dashboard"}
                title={collapsed ? item.label : undefined}
                onClick={onMobileClose}
                className={({ isActive }) => `
                  flex w-full items-center justify-between
                  rounded-xl p-3
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-orange-800 text-white shadow-lg shadow-orange-500/25"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60"
                  }
                `}
              >
                <div className="flex min-w-0 items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0" />

                  {!collapsed && (
                    <span className="truncate font-medium">
                      {item.label}
                    </span>
                  )}
                </div>

                {!collapsed && (
                  <div className="flex shrink-0 items-center gap-2">
                    {item.badge && (
                      <span className="rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
                        {item.badge}
                      </span>
                    )}

                    {item.count !== undefined && (
                      <span className="rounded-full bg-slate-200 px-2 py-1 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                        {item.count}
                      </span>
                    )}
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* User profile */}
        <div className="shrink-0 border-t border-slate-200/70 p-3 dark:border-slate-700/50 sm:p-4">
          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700 ring-2 ring-orange-500 dark:bg-orange-500/10 dark:text-orange-400">
              KD
            </div>

            {!collapsed && (
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-slate-800 dark:text-white">
                  Kartick Das
                </p>

                <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                  Administrator
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;