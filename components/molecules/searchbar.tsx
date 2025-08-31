import React from "react";
import { SearchIcon } from "../ui/SearchIcon";
import { Button } from "../ui/button";
import { ModeToggle } from "../switch-theme";

const SearchBar = () => {
  return (
    <>
      <ModeToggle />
      <div
        className={`flex items-center gap-1.5  rounded-lg border w-64 dark:bg-gray-700 dark:border-gray-600
            bg-zinc-50 border-gray-300
            `}>
        <Button variant={"ghost"}>
          <SearchIcon />
        </Button>
        <input
          type="text"
          placeholder="Search..."
          className={`w-full border-none outline-none text-xs 
                dark:text-gray-100 text-gray-700
              `}
        />
      </div>
    </>
  );
};

export default SearchBar;
