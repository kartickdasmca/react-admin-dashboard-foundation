import {
  Bell,
  ChevronDown,
  Filter,
  Menu,
  Plus,
  Search,
  Settings,
  Sun,
  Moon,
  X,
} from "lucide-react";
import { memo } from "react";
import type {HeaderProps} from '../../../types/header'
import { useLocation } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";

const pageTitles: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/analytics/overview": "Analytics Overview",
  "/admin/analytics/reports": "Analytics Reports",
  "/admin/analytics/insights": "Analytics Insights",
  "/admin/users": "Users",
  "/admin/messages": "Messages",
  "/admin/settings": "Settings",
};

const Header = ({
  onSidebarToggle,
  onMobileSidebarToggle,
}: HeaderProps) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const pageTitle = pageTitles[location.pathname] ?? "Dashboard";
  return (
    <header className="shrink-0 border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/80 sm:px-6 sm:py-4">
      <div className="flex min-h-10 items-center justify-between gap-4">

        {/* Left section */}
        <div className="flex min-w-0 items-center gap-3">

          {/* Desktop sidebar toggle */}
          <button
            type="button"
            onClick={onSidebarToggle}
            aria-label="Toggle sidebar"
            className="hidden rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:block"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Mobile sidebar toggle */}
          <button
            type="button"
            onClick={onMobileSidebarToggle}
            aria-label="Open navigation menu"
            className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Page title */}
          <div className="min-w-0">
            <h1 className="truncate text-xl font-bold text-slate-800 dark:text-white sm:text-2xl">
               {pageTitle}
            </h1>

            <p className="hidden text-sm text-slate-500 dark:text-slate-400 sm:block">
              Welcome back, Kartick
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mx-4 hidden max-w-md flex-1 lg:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-xl border border-slate-200 bg-slate-100 py-2.5 pl-10 pr-10 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-500 focus:border-transparent focus:ring-2 focus:ring-orange-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

            <button
              type="button"
              aria-label="Search filters"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-300"
            >
              <Filter className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right section */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">

          {/* New button - desktop */}
          <button
            type="button"
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-800 px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-lg lg:flex"
          >
            <Plus className="h-4 w-4" />
            <span>New</span>
          </button>

          {/* Theme - desktop */}
          <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                title={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                className="rounded-xl p-2.5 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
          </button>

          {/* Notifications */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative rounded-xl p-2.5 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Bell className="h-5 w-5" />

            <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
              3
            </span>
          </button>

          {/* Settings - desktop */}
          <button
            type="button"
            aria-label="Settings"
            className="hidden rounded-xl p-2.5 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 sm:block"
          >
            <Settings className="h-5 w-5" />
          </button>

          {/* User profile */}
          <button
            type="button"
            className="hidden items-center gap-2 border-l border-slate-200 pl-3 dark:border-slate-700 md:flex"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700 ring-2 ring-orange-500 dark:bg-orange-500/10 dark:text-orange-400">
              KD
            </div>

            <div className="hidden text-left lg:block">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Kartick Das
              </p>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Administrator
              </p>
            </div>

            <ChevronDown className="h-4 w-4 text-slate-400" />
          </button>

          {/* Mobile avatar */}
          <button
            type="button"
            aria-label="Open profile menu"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700 ring-2 ring-orange-500 md:hidden"
          >
            KD
          </button>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);