import Link from "next/link";
import React from "react";
import MagicWriteLogo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center justify-center text-center p-10 bg-[#121212] text-[#f2f8fc]">
      <div className=" flex justify-between items-center md:flex-col md:gap-10 w-full p-10 border-b">
        <div className=" flex items-center justify-center gap-1">
          <Image
            src={MagicWriteLogo}
            alt="Logo"
            width={30}
            height={30}
          ></Image>
          <span className=" text-lg font-bold">MagicWrite</span>
        </div>
        <div className=" w-[30%] md:w-full flex justify-between">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Usage</Link>
          <Link href={"/"}>Support</Link>
        </div>
        <div>
          <div className=" text-start">
            <p className=" font-bold text-slate-600">Newsletter</p>
            <div className=" flex flex-col pt-4">
              <input type="mail" name="Mail" id="mail" placeholder="Enter mail.." className=" px-4 py-2 rounded-full ring-none outline-none border border-slate-500" />
              <button className="mt-4 w-[50%] inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-purple-heart-500 to-purple-600 hover:to-purple-700 bg-white dark:bg-[#121212]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-slate-500 font-medium mt-4">2023 Magic Write. All rights reserved.</div>
    </div>
  );
};

export default Footer;
