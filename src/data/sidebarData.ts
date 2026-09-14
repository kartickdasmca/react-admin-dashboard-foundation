import {LayoutDashboard,BarChart3, MessageSquare, Users, Settings} from 'lucide-react'
import type {SidebarItem} from "../types/sidebar"

export const sidebarData:SidebarItem[] = [
    {
      id: "dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/admin/dashboard",
      badge: "New"
    },
    {
      id: "analytics",
      icon: BarChart3,
      label: "Analytics",
      submenu: [
        {id: 'overview', label: "Overview", path:"/admin/analytics/overview"},
        {id: 'reports', label: "Reports", path:"/admin/analytics/reports"},
        {id: 'insights', label: "Insights", path:"/admin/analytics/insights"},
      ],
    },
    {
      id: "users",
      icon: Users,
      label: "Users",
      submenu: [
        {id: 'all-users', label: "All Users", path:"/admin/users/all-users"},
        {id: 'roles-permissions', label: "Roles & Permissions", path:"/admin/users/roles-permissions"},
        {id: 'user-activity', label: "User Activity", path:"/admin/users/user-activity"},
      ],
    },
    {
      id: "messages",
      icon: MessageSquare,
      label: "Messages",
      path:"/admin/messages",
      count: 9
    },
    {
      id: "settings",
      icon: Settings,
      label: "Settings",
      path: "/admin/settings"
    },
]