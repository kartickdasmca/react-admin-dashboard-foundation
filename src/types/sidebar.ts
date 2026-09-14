import type {LucideIcon} from 'lucide-react'
export interface SidebarSubmenu {
    id: string;
    label: string;
    path:string;
}
export interface SidebarItem {
    id: string;
    icon: LucideIcon;
    label: string;
    path?:string;
    count?: number;
    badge?: string;
    submenu?: SidebarSubmenu[]
}

export interface SidebarProps {
    collapsed:boolean;
    // currentPage: string;
    // onPageChange: (page:string) => void;
    onToggle: () => void;
}