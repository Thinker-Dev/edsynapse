"use client";

import { ArrowLeft, Dot, Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Profile from "../icons/profile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { vonique } from "@/app/fonts";

const CourseHeader = () => {
  const router = useRouter();
  return (
    <header
      className={`fixed justify-center flex-col items-center left-0 right-0 top-0 z-10 transition-all delay-75 bg-gradient-to-r from-[#0E0F2E] to-[#01021D]`}
    >
      <div
        className={
          "h-[60px] flex max-w-screen-xl mx-auto px-8 items-center justify-between relative bg-[#0E0F2E]"
        }
      >
        <div className="flex items-center space-x-2">
          <Button
            variant={"ghost"}
            className="space-x-4"
            onClick={() => router.back()}
          >
            <ArrowLeft />
            <span>Go Back</span>
          </Button>
        </div>
        <div className="flex items-center space-x-5">
          <div className="bg-[#121212] rounded-full px-4 py-2 flex space-x-3 items-center">
            <Search size={20} className="text-[#9CA3AF]" />
            <input
              placeholder="Search video..."
              className="text-sm outline-none"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="focus:border-none">
              <Profile />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-5 ">
              <DropdownMenuItem className={`${vonique.className} uppercase`}>
                <Dot />
                My Profile
              </DropdownMenuItem>
              <DropdownMenuItem className={`${vonique.className} uppercase `}>
                <Dot />
                Account Settings
              </DropdownMenuItem>
              <div
                className={`${vonique.className} uppercase text-red-600 font-semibold text-center py-2 cursor-pointer`}
              >
                Log out
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default CourseHeader;
