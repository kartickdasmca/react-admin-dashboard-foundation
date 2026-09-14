import { Filter, Search } from "lucide-react";
import { memo } from "react";

const HeaderSearch = () => {
  return (
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
  );
};

export default memo(HeaderSearch);