import { ChevronDown, Zap } from "lucide-react"
import React , {useEffect, useState} from 'react'
import {useLocation,NavLink} from 'react-router-dom'
import {sidebarData} from "../../../data/sidebarData"
import type {SidebarProps} from '../../../types/sidebar'

const Sidebar = ({onToggle,collapsed}:SidebarProps) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleExpanded = (itemid:string) =>{
    setExpandedItems((prev)=> {
        const next = new Set(prev);
        if(next.has(itemid)){
          next.delete(itemid)
        }else{
         next.add(itemid)
       }
    return next;
    })
  }
 // Automatically expand the parent menu
 // when the current route belongs to its submenu.
  useEffect(() => {
    const activeParents = sidebarData
      .filter((item) =>
        item.submenu?.some((subitem) =>
          location.pathname.startsWith(subitem.path)
        )
      )
      .map((item) => item.id);

    setExpandedItems(new Set(activeParents));
  }, [location.pathname]);
  return (
    <aside className={`${collapsed? "w-20": "w-72"} transition duration-300 ease-in-out bg-white/80
     dark:bg-slate-900/80 backdrop-blur-xl border-r
     border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}> 
        {/* Logo */}
        <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
            <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-800 
                rounded-xl flex items-center justify-center shadow-lg'>
                   <Zap className='w-6 h-6 text-white' />
                </div>
                {/* Conditional Rendering */}
                {!collapsed && (
                    <div>
                    <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                        Business
                    </h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Admin Panel</p>
                </div>
                )}
            </div>
        </div>
        {/* Navigation */}
         {/* Navigation */}
      <nav className="flex-1 space-y-2 overflow-y-auto p-4">
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
                    }

                    toggleExpanded(item.id);
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    p-3
                    text-left
                    transition-all
                    duration-200
                    hover:bg-slate-100
                    dark:hover:bg-slate-800/50
                  "
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="h-5 w-5 shrink-0" />

                    {!collapsed && (
                      <span className="font-medium">
                        {item.label}
                      </span>
                    )}
                  </div>

                  {!collapsed && (
                    <ChevronDown
                      className={`
                        h-4 w-4
                        transition-transform
                        duration-200
                        ${isExpanded ? "rotate-180" : ""}
                      `}
                    />
                  )}
                </button>

                {/* Submenu */}
                {!collapsed && isExpanded && (
                  <div
                    id={`${item.id}-submenu`}
                    className="ml-8 mt-2 space-y-1"
                  >
                    {item.submenu?.map((subitem) => (
                      <NavLink
                        key={subitem.id}
                        to={subitem.path}
                        className={({ isActive }) => `
                          block
                          rounded-lg
                          px-3
                          py-2
                          text-sm
                          transition-all
                          duration-200
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
              to={item.path ?? "#"}
              end={item.id === "dashboard"}
              title={collapsed ? item.label : undefined}
              className={({ isActive }) => `
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                p-3
                transition-all
                duration-200
                ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-orange-800 text-white shadow-lg shadow-orange-500/25"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50"
                }
              `}
            >
              <div className="flex items-center space-x-3">
                <Icon className="h-5 w-5 shrink-0" />

                {!collapsed && (
                  <span className="font-medium">
                    {item.label}
                  </span>
                )}
              </div>

              {!collapsed && (
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span
                      className="
                        rounded-full
                        bg-red-500
                        px-2
                        py-1
                        text-xs
                        text-white
                      "
                    >
                      {item.badge}
                    </span>
                  )}

                  {item.count !== undefined && (
                    <span
                      className="
                        rounded-full
                        bg-slate-200
                        px-2
                        py-1
                        text-xs
                        text-slate-600
                        dark:bg-slate-700
                        dark:text-slate-300
                      "
                    >
                      {item.count}
                    </span>
                  )}
                </div>
              )}
            </NavLink>
          );
        })}
      </nav>
        {/* User Profile */}
        <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
           <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <img 
                src=""
                alt="user"
                className="w-10 h-10 rounded-full ring-2 ring-orange-500"
              />
              <div className="flex-1 min-w-0">
                 <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                        Kartick Das
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        Administrator
                    </p>
                 </div>
              </div>
           </div>
        </div>
    </aside>
  )
}

export default React.memo(Sidebar)