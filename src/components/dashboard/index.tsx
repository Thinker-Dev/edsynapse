"use client";

import { vonique } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const Dashboard = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className="flex" />;
};

const Content = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => (
  <main className={cn("flex mx-auto max-w-screen-xl", className)} {...props} />
);

const Left = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <aside className={cn(" w-[300px] mt-[60px]", className)} {...props} />
);

const Center = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <section
    className={cn("px-8 pt-8 mt-[60px] w-[90%]", className)}
    {...props}
  />
);
const Right = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <section
    className={cn("w-[20%] sticky top-24 h-screen overflow-y-auto", className)}
    {...props}
  />
);

const SideBar = ({ course }: { course: Course | undefined }) => {
  const searchParams = useSearchParams();
  const params = searchParams.get("v") ?? "";
  return (
    <aside className="absolute left-0 top-0 flex  flex-col overflow-y-hidden  lg:static lg:translate-x-0 bg-gradient-to-b h-full from-[#0E0F2E] to-[#01021D] p-8">
      <h3
        className={`mb-4 font-medium  dark:text-white text-black text-2xl ${vonique.className}`}
      >
        {course?.title}
      </h3>
      <ul className="mb-7 flex flex-col space-y-5 ">
        {course?.chapters.map((item, index) => (
          <Link
            href={`${course?.path}?v=${item.id}`}
            key={index}
            className={`text-paragraph-light flex items-center justify-between`}
          >
            <span className="truncate w-[190px]">{item.title}</span>
            {params.includes(`${item.id}`) && (
              <div className="bg-white rounded-full ml-4  h-1 w-1" />
            )}
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export { Dashboard, Left, Center, Right, SideBar, Content };
