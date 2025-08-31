import React from "react";
import SearchBar from "../molecules/searchbar";

const NavSection = () => {
  return (
    <>
      <header className=" py-1.5 w-full flex justify-between h-14 items-center-safe ">
        <h1 className="text-2xl font-light text-slate-700 dark:text-slate-200 mb-1">Hello Joshua!</h1>
        <div className="hidden lg:flex items-center gap-2.5">
          <SearchBar />
        </div>
      </header>
      
    </>
  );
};

export default NavSection;
