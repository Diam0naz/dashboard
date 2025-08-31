import React from "react";
import { HouseIcon } from "../ui/HouseIcon";
import { ZapIcon } from "../ui/ZapIcon";
import { BellRingIcon } from "../ui/BellRingIcon";
import { SettingsIcon } from "../ui/SettingsIcon";
import { DashboardIcon } from "../ui/DashboardIcon";
import logo from "@/public/pro-pick.png";
import { Button } from "../ui/button";
import { SquareArrowOutUpRightIcon } from "../ui/SquareArrowOutUpRightIcon";

const SideBar = () => {
  return (
    <>
      <div className="w-1/6 h-screen min-h-full space-y-40 py-10 flex flex-col p-3 dark:bg-black bg-zinc-100 text-stone-300 fixed top-0 left-0 z-30 box-border ">
        <div className="w-full flex items-center px-5 gap-1.5">
          <div>
            <img src={logo.src} alt="" className="size-12 rounded-full " />
          </div>
          <div>
            <div className="flex flex-col">
              <span className="text-base text-zinc-500">Jutenoh@gmail.com</span>
            </div>
          </div>
        </div>

        
        <nav className="flex flex-col items-start p-10">
          <ul className="flex flex-col w-full h-[80%] text-zinc-500 font-light items-start gap-10 ">
            <li className="flex items-center gap-3 text-base transition-all duration-500 ease-out group relative">
              <HouseIcon
                className="text-base group-hover:scale-110 transition-all duration-500 ease-out"
                size={16}
              />{" "}
              Home
              <span className="transition-all duration-500 ease-out w-0 h-0.5 absolute -bottom-1.5 left-0 group-hover:w-full bg-gradient-to-r rounded-full from-zinc-300 to-zinc-800 rotate-180"></span>
            </li>
            <li className="flex items-center gap-3 text-base transition-all duration-500 ease-out group relative">
              <DashboardIcon
                className="text-base group-hover:scale-110 transition-all duration-500 ease-out"
                size={20}
              />
              Dashboard
              <span className="transition-all duration-500 ease-out w-0 h-0.5 absolute -bottom-1.5 left-0 group-hover:w-full bg-gradient-to-r rounded-full from-zinc-300 to-zinc-800 rotate-180"></span>
            </li>
            <li className="flex items-center gap-3 text-base transition-all duration-500 ease-out group relative">
              <ZapIcon
                className="text-base group-hover:scale-110 transition-all duration-500 ease-out"
                size={20}
              />{" "}
              Events
              <span className="transition-all duration-500 ease-out w-0 h-0.5 absolute -bottom-1.5 left-0 group-hover:w-full bg-gradient-to-r rounded-full from-zinc-300 to-zinc-800 rotate-180"></span>
            </li>
            <li className="flex items-center gap-3 text-base transition-all duration-500 ease-out group relative">
              <BellRingIcon
                className="text-base group-hover:scale-110 transition-all duration-500 ease-out"
                size={20}
              />
              Notifications
              <span className="transition-all duration-500 ease-out w-0 h-0.5 absolute -bottom-1.5 left-0 group-hover:w-full bg-gradient-to-r rounded-full from-zinc-300 to-zinc-800 rotate-180"></span>
            </li>
            <li className="flex items-center gap-3 text-base transition-all duration-500 ease-out group relative">
              <SettingsIcon
                className="text-base group-hover:scale-110 transition-all duration-500 ease-out"
                size={20}
              />
              Settings
              <span className="transition-all duration-500 ease-out w-0 h-0.5 absolute -bottom-1.5 left-0 group-hover:w-full bg-gradient-to-r rounded-full from-zinc-300 to-zinc-800 rotate-180"></span>
            </li>
          </ul>
        </nav>

        <div className="flex-end px-10">
          <Button variant={"outline"}>
            <SquareArrowOutUpRightIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
