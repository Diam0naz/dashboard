import DetailsSection from "@/components/organisms/details";
import NavSection from "@/components/organisms/nav";
import SideBar from "@/components/organisms/sidebar";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex">
      <SideBar />

      <div className="pl-[25rem] pr-[2rem] w-full flex flex-col ">
        <NavSection />
        <hr />
        <DetailsSection />
      </div>
    </div>
  );
};

export default HomePage;
