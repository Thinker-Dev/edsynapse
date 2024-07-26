"use client";

import { nav } from "@/lib/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ModeToggle from "./mode-toggle";
import { roboto_mono } from "@/app/fonts";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });
  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? "fixed z-[9999]  shadow-sticky backdrop-blur-sm transition border-b bg-[#000000a8]"
          : "absolute bg-transparent py-6"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-28 justify-center flex items-center h-16 text-sm font-medium  ">
        <nav className="flex space-x-16 ">
          {nav.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className="flex items-center font-normal text-xl"
            >
              <span className={`${roboto_mono.className}`}>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
