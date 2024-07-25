import { nav } from "@/lib/constants";
import Link from "next/link";
import React from "react";
import ModeToggle from "./mode-toggle";

const Header = () => {
  return (
    <header className="sticky z-50 border-b border-separator left-0 right-0 top-0 bg-white/70  dark:bg-[#111111a7] backdrop-blur-[8px]">
      <div className="max-w-screen-xl mx-auto px-28 justify-between flex items-center h-16 text-sm font-medium  ">
        <Link href={"/"}>Landing</Link>
        <nav className="flex space-x-5">
          {nav.map((item, index) => (
            <Link href={item.path} key={index} className="flex items-center">
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
