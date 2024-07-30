import { SideBar } from "@/components/dashboard";
import menuData from "@/components/dashboard/menuData";
import Dasheader from "@/components/header/dasheader";
import { Metadata } from "next";
import React from "react";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar data={menuData} />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Dasheader />
        <main>
          <div className="mx-auto max-w-screen-2xl">{props.children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
