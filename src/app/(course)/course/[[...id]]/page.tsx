"use client";

import { Center, Dashboard, Left, SideBar } from "@/components/dashboard";
import React from "react";
import Video from "@/components/course/video";
import { usePathname } from "next/navigation";
import { courses } from "@/lib/constants";

const Page = () => {
  const pathname = usePathname();
  const coursePathSegment = pathname.split("/")[2];
  const course = courses.find((item) => item.path?.includes(coursePathSegment));

  return (
    <Dashboard>
      <Left>
        <SideBar course={course} />
      </Left>
      <Center>
        <Video course={course} />
      </Center>
    </Dashboard>
  );
};

export default Page;
