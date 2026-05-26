import React from "react";
import SearchBar from "../molecules/searchbar";
import { ModeToggle } from "../switch-theme";

const NavSection = () => {
  return (
    <header className="py-1.5 w-full flex justify-between h-14 items-center">
      <h1 className="text-2xl font-light text-slate-700 dark:text-slate-200">
        Hello Joshua!
      </h1>
      <div className="flex items-center gap-2.5">
        <div className="hidden lg:flex items-center gap-2.5">
          <SearchBar />
        </div>
        <ModeToggle />
        <div className="size-9 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-sm font-semibold text-zinc-600 dark:text-zinc-300 select-none">
          JO
        </div>
      </div>
    </header>
  );
};

export default NavSection;
