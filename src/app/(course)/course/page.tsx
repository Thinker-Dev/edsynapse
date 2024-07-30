"use client";

import {
  Center,
  Content,
  Dashboard,
  Left,
  Right,
  SideBar,
} from "@/components/dashboard";
import Chapters from "@/components/dashboard/center/chapters";
import Video from "@/components/dashboard/center/video";
import menuData from "@/components/dashboard/menuData";
import Dasheader from "@/components/header/dasheader";
import React from "react";

const Page = () => {
  return (
    <Center>
      <Video />
      <Chapters />
    </Center>
  );
};

export default Page;
