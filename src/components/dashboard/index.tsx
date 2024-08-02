"use client";

import { ICourse } from "@/_actions/course/course";
import { vonique } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { Item } from "@radix-ui/react-dropdown-menu";
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

const SideBar = ({ course }: { course: ICourse | null | undefined }) => {
  const searchParams = useSearchParams();
  const params = searchParams.get("t") ?? "";
  const video = searchParams.get("v") ?? "";
  return (
    <aside className="absolute left-0 top-0 flex  flex-col overflow-y-hidden  lg:static lg:translate-x-0 bg-gradient-to-b h-full from-[#0E0F2E] to-[#01021D] p-8">
      <h3
        className={`mb-4 font-medium  dark:text-white text-black text-2xl ${vonique.className}`}
      >
        {course?.name}
      </h3>
      <ul className="mb-7 flex flex-col space-y-5 ">
        {course?.topics?.map((item, index) => (
          <React.Fragment key={item.id}>
            <Link
              href={`/course?c=${course?.id}&t=${item.id}&v=${item.contents[0]?.id}`}
              key={index}
              className={`text-paragraph-light flex items-center justify-between`}
            >
              <span className="truncate w-[190px]">{item.name}</span>
              {params.includes(`${item.id}`) && (
                <div className="bg-white rounded-full ml-4  h-1 w-1" />)}
            </Link>
            {item?.contents?.map((content, index) => (
              <Link
                href={`/course?c=${course?.id}&t=${item.id}&v=${content.id}`}
                key={index}
              >
                <span className="flex text-xs text-paragraph-light " >{content.name}</span>
              </Link>

            ))}
          </React.Fragment>


        ))}
      </ul>
    </aside>
  );
};

export { Dashboard, Left, Center, Right, SideBar, Content };
