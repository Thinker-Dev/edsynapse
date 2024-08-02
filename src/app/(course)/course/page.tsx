"use client";

import { Center, Dashboard, Left, SideBar } from "@/components/dashboard";
import React from "react";
import Video from "@/components/course/video";
import { usePathname, useSearchParams } from "next/navigation";
import { courses } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";
import { getCourse } from "@/_actions/course/courseService";

const Page = () => {
  const searchParams = useSearchParams()
  const courseId = searchParams.get('c')

  const { data, isPending, isError, error } = useQuery({ queryKey: ['course'], queryFn: async () => await getCourse(courseId as string) })
  return (
    <Dashboard>
      <Left>
        <SideBar course={data} />
      </Left>
      <Center className="h-[calc(100vh-60px)]">
        <Video course={data} />
      </Center>
    </Dashboard>
  );
};

export default Page;
