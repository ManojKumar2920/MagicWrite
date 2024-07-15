import Image from "next/image";
import React from "react";
import MagicWriteLogo from "@/assets/logo.png";
import Switch from "../Theme/Switch";

const NavBar = () => {
  return (
    <div>
      <div className=" px-10 py-3 fixed w-full bg-[#f2f8fc] dark:bg-[#1b1c13] z-10">
        <div className=" flex justify-between items-center">
          <div className=" flex items-center gap-1">
            <Image
              src={MagicWriteLogo}
              alt="MagicWirte_Logo"
              width={30}
              height={30}
            ></Image>
            <span className=" font-bold text-[#1b1c1e] dark:text-[#f2f8fc]" >MagicWrite</span>
          </div>
          <div className= ' text-2xl'>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
