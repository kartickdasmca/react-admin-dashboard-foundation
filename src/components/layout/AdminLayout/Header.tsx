import { Menu,Search,Filter,Plus,Sun,Bell, Settings, ChevronDown} from 'lucide-react'
import React from 'react'
import type {HeaderProps} from '../../../types/header'
const Header = ({onSidebarToggle}:HeaderProps) => {
  return (
    <div className='bg-white/-80 dark:bg-slate-900/80 backdrop-blur-xl border-b
       border-slate-200/50 dark:border-slate-700/50 px-6 py-4'
    >
        <div className='flex items-center justify-between '>
            {/* left */}
            <div className='flex items-center space-x-4'>
               <button
                className='p-2 rounded-lg text-slate-600 dark:text-slate-300
                hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
                onClick={onSidebarToggle}
               >
               <Menu className='w-5 h-5'/>
              </button>
           
            <div className='hidden md:block'>
               <h1 className='text-2xl font-black text-slate-800 dark:text-white'>
                  Dashboard
               </h1>
               <p>Welcome back, Kartick</p>
            </div>
        </div>
        {/* Center */}
        <div className='flex-1 max-w-md mx-8'>
          <div className='relative'>
            <Search 
             className='w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400'/>
            <input 
             type="text"
             placeholder='Search...'
             className='w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border
              border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 
              dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2
              focus:ring-orange-500 focus:border-transparent transition-all'
            />
            <button className='absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5
             text-slate-400 hover:text-slate-600 dark:hover:text-slate-300
            '>
                <Filter/>
            </button>
          </div>
        </div>
        {/* Right */}
        <div className='flex items-center space-x-3'>
            {/* Action */}
           <button className='hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r
            from-orange-500 to-orange-800 text-white rounded-xl hover:shadow-lg transition-all
           '>
             <Plus className='w-4 h-4'/>
             <span className='text-sm font-medium'>New</span>
           </button>
           {/* Toggle */}
           <button className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
             <Sun className='w-5 h-5'/>
           </button>
           {/* Notification */}
           <button className='relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
              <Bell className='w-5 h-5'/>
              <span className='absolute -top-1 h-5 w-5 bg-red-500 text-white text-xs
              rounded-full flex items-center justify-center
              '>3</span>
           </button>
           {/* Setting */}
           <button className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
              <Settings className='w-5 h-5'/>
           </button>
           {/* User Profile */}
           <div className='flex items-center space-x-3 pl-3 border-1 border-slate-200 dark:border-slate-700'>
             <img 
               src='data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%20fill%3D%22none%22%20shape-rendering%3D%22auto%22%20aria-hidden%3D%22true%22%3E%3C!--%20Generated%20by%20DiceBear%20(https%3A%2F%2Fwww.dicebear.com)%20--%3E%3Cmetadata%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3Axsi%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema-instance%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Adcterms%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%22%3E%3Crdf%3ARDF%3E%3Crdf%3ADescription%3E%3Cdc%3Atitle%3EAdventurer%20Neutral%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3ELisa%20Wischofsky%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F1184595184137881796%3C%2Fdc%3Asource%3E%3Cdcterms%3Alicense%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F%3C%2Fdcterms%3Alicense%3E%3Cdc%3Arights%3ERemix%20of%20%E2%80%9CAdventurer%20Neutral%E2%80%9D%20(https%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F1184595184137881796)%20by%20%E2%80%9CLisa%20Wischofsky%E2%80%9D%2C%20licensed%20under%20%E2%80%9CCC%20BY%204.0%E2%80%9D%20(https%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F)%3C%2Fdc%3Arights%3E%3C%2Frdf%3ADescription%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cdefs%3E%3Cg%20id%3D%22eyes-variant12-b349e9ac%22%3E%3Cpath%20d%3D%22M273.61%209.48c12.94%207.4%2023.39%2019.43%2028.46%2033.49%205.72%2014.36%205.72%2030.62.54%2045.13-1.04%202.89-2.88%205.22-6.28%204.77-15.08-.73-29.98.14-45.06.56-10.03%201.09-20.04%202.15-30%203.79-10.45%201.82-20.62%204.13-30.98%206.08-4.37-.12-5.3-4.23-7.2-7.33-12.07-22.95-8.73-52.48%208.26-72.08%209.78-11.52%2023.83-19.77%2038.82-22.06a65%2065%200%200%201%2043.38%207.65%22%20fill%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M242.3%206.66c14.45-.01%2028.8%206.03%2039.38%2015.78a60%2060%200%200%201%2018.5%2035.34c1.2%2010%20.36%2020.16-3.44%2029.56l-3.28-.37c-16.46.33-32.96.93-48.66%201.5a287%20287%200%200%200-34%205.19c-6.73%201.22-13.35%203.24-20.15%204.12-7.35-12.03-10.84-27.07-8.3-41.03a59.7%2059.7%200%200%201%2018.97-34.92c11.08-10%2026.04-15.66%2040.98-15.17%22%20fill%3D%22%23ffffff%22%2F%3E%3Cpath%20d%3D%22M257.69%2052.12c4.93-2.36%2010.22-2.57%2015.57-1.95%2010.85%201.77%2019.67%2010.59%2021.6%2021.4%201.33%205.36.27%2010.28-1.4%2015.4-16.46.33-32.96.93-48.66%201.5-2.45-5.21-3.52-10.91-2.43-16.63a26.6%2026.6%200%200%201%2015.32-19.72%22%20fill%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M76.32%2023.87a54.8%2054.8%200%200%201%2033.45%2015.49c9.47%209.27%2015.55%2022.17%2016.25%2035.44a54.4%2054.4%200%200%201-6.9%2030.87c-1.14%201.88-2.88%204.02-5.02%204.7-3.02.82-6.59-.15-9.6-.82a304%20304%200%200%200-26.28-5.18c-12.88-.84-26.08-.9-38.96.07-4.8.32-9.78%201.33-14.56.99-2.32-1.08-3.7-4.2-4.57-6.47-3.37-8.83-4.98-18.73-3.32-28.12a54.87%2054.87%200%200%201%2059.5-46.97%22%20fill%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M85.78%2031.54a49.3%2049.3%200%200%201%2029.58%2025.18c4.64%209.38%206.55%2020.52%204.31%2030.82-1.3%206.2-3.31%2012.86-7.13%2018l-4.14-.7C96%20102.6%2083.5%2099.8%2071.86%2097.97c-7.6.29-15.02-.37-22.59.38-7.3.65-14.63%201.12-21.93%201.8-.66-1.14-1.33-2.25-1.9-3.45-7.24-17.7-2.91-38.73%2010.4-52.36%2012.64-13.18%2028.4-17.76%2049.95-12.8%22%20fill%3D%22%23ffffff%22%2F%3E%3Cpath%20d%3D%22M71.53%2079.97c3.98-10.32%2015.76-16.57%2026.5-13.64%2010.15%202.46%2017.57%2011.95%2017.19%2022.44.09%206.23-2.69%2011.59-6.82%2016.08-12.4-2.25-24.9-5.05-36.54-6.9l-.2-.55c-2.09-5.72-2.6-11.7-.13-17.43%22%20fill%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3Cg%20id%3D%22eyebrows-variant07-b349e9ac%22%3E%3Cpath%20d%3D%22M136.39%2044.35c.66%204.64-1.5%209.35-4.2%2013-3.6%204.46-7.82%208.36-12.86%2011.13-7.66%204.35-15.96%207.7-24.19%2010.81-23.79%208.79-48.56%2015.1-73.52%2019.48-3.35.54-6.97%201.5-10.36%201.1-1.92-.91-2-2.81-1.1-4.51%202.33-1.8%205.48-2.72%208.18-3.9q53.92-22.06%20107.8-44.19c3.36-1.25%206.59-3.38%2010.25-2.92m26.94.15c49.32%207.6%2098.68%2015.15%20148%2022.75%202.6.42%205.34.58%207.82%201.4%202.44%201.15%201.7%205.05-.96%205.27-9.59.95-19.18%201.82-28.83%201.95-15.39.1-30.64.32-45.98-1.18-20.9-1.64-42.24-4.6-62.25-11.06-6.97-2.41-14.88-5.46-20.27-10.64-1.8-1.9-4.1-4.28-3.17-7.13%201.2-2.13%203.6-1.6%205.61-1.36%22%20fill%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3Cg%20id%3D%22mouth-variant07-b349e9ac%22%3E%3Cpath%20d%3D%22M91.29%2081.72c16.47%204.71%2028.68%2020.38%2030.53%2037.23-2.5-6.68-5.83-12.9-10.89-18-7.03-7.2-17.26-12.2-27.46-11.67a28%2028%200%200%200-20.78%2010.34c-5.49%206.8-7.7%2016.06-6.72%2024.66-.69-4.65-1.85-9.1-1.76-13.88.06-8.73%203.26-17.51%209.96-23.32%207.32-6.42%2017.9-8.12%2027.12-5.36%22%20fill%3D%22%23d31e1e%22%2F%3E%3Cpath%20d%3D%22M83.47%2089.28c10.2-.52%2020.43%204.48%2027.46%2011.67%205.06%205.1%208.39%2011.32%2010.89%2018%20.52%203.48%202.26%206.4-1.37%208.77-8.33.15-16.63.8-24.96%201-12.3.95-24.75.47-36.95%201.94-1.96-1.87-2.34-3.75-2.6-6.38-.98-8.6%201.23-17.86%206.72-24.66a28%2028%200%200%201%2020.78-10.34%22%20fill%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M90.97%2095.89c12.63%203.1%2022.12%2013.94%2025.5%2026.24-18.27.41-36.53%201.67-54.77%202.21-.7-8.6%201.23-17%207.57-23.16%205.82-5.68%2013.94-7.02%2021.7-5.3%22%20fill%3D%22%23ffffff%22%2F%3E%3Cpath%20d%3D%22M120.45%20127.72c-9.3%207.26-23.55%208.73-34.96%209.1-8.66-.1-19.89-.58-26.95-6.16%2012.2-1.47%2024.63-1%2036.92-1.94%208.32-.2%2016.62-.85%2024.95-1%22%20fill%3D%22%23d31e1e%22%2F%3E%3C%2Fg%3E%3CclipPath%20id%3D%22clip-b349e9ac%22%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20rx%3D%220%22%20ry%3D%220%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg%20clip-path%3D%22url(%23clip-b349e9ac)%22%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22%23f2d3b1%22%2F%3E%3Cuse%20transform%3D%22translate(36.7%20101.2)%22%20href%3D%22%23eyes-variant12-b349e9ac%22%2F%3E%3Cuse%20transform%3D%22translate(36.64%2029.5)%22%20href%3D%22%23eyebrows-variant07-b349e9ac%22%2F%3E%3Cuse%20transform%3D%22translate(114.51%20217.6)%22%20href%3D%22%23mouth-variant07-b349e9ac%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E' 
               alt='User Profile' 
               className='w-8 h-8 rounded-full ring-2 ring-orange-500'
            />
            <div className='hidden md:block '>
               <p className='text-sm text-slate-500 dark:text-slate-400'>Kartick Das</p>
               <p className='text-xs text-slate-500 dark:text-slate-400'>Administrator</p>
            </div>
            <ChevronDown className='w-4 h-4 text-slate-400 '/>
           </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)