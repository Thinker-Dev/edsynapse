"use client";

import { vonique } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Dashboard = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} />;
};

const Content = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => (
  <main
    className={cn("flex mx-auto max-w-screen-xl bg-red", className)}
    {...props}
  />
);

const Left = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <aside className={cn("w-[400px]", className)} {...props} />
);

const Center = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <section className={cn("p-10 ", className)} {...props} />
);
const Right = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <section
    className={cn("w-[20%] sticky top-24 h-screen overflow-y-auto", className)}
    {...props}
  />
);

const SideBar = ({ data }: { data: MenuTypes[] }) => {
  const pathname = usePathname();
  return (
    <aside className="absolute left-0 top-0 flex h-screen flex-col overflow-y-hidden  lg:static lg:translate-x-0 bg-gradient-to-b from-[#0E0F2E] to-[#01021D] p-8">
      {data.map((menuItem, index) => (
        <div key={index}>
          <h3
            className={`mb-4 font-medium  dark:text-white text-black text-2xl ${vonique.className}`}
          >
            {menuItem.tab}
          </h3>
          <ul className="mb-7 flex flex-col space-y-5">
            {menuItem.submenu?.map((submenuItem, index) => (
              <Link
                href={`${submenuItem.path}`}
                key={index}
                className={`dark:text-paragraph-dark text-paragraph-light hover:dark:text-white hover:text-black ${
                  (pathname === `${submenuItem.path}` ||
                    pathname.includes(`${submenuItem.path}`)) &&
                  "dark:text-white text-black"
                }`}
              >
                {submenuItem.title}
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export { Dashboard, Left, Center, Right, SideBar, Content };
