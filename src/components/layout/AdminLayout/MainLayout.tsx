import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  // Desktop sidebar state
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Mobile sidebar state
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  const handleMobileSidebarToggle = () => {
    setMobileSidebarOpen((prev) => !prev);
  };

  const handleMobileSidebarClose = () => {
    setMobileSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={handleSidebarToggle}
          mobileOpen={mobileSidebarOpen}
          onMobileClose={handleMobileSidebarClose}
        />

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <Header
            onSidebarToggle={handleSidebarToggle}
            onMobileSidebarToggle={handleMobileSidebarToggle}
          />

          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;