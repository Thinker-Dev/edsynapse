"use client";

import Dasheader from "@/components/header/dasheader";
import Profile from "@/components/practice-lab/profile";
import VideosTab from "@/components/practice-lab/videos-tab";
import Footer from "@/components/footer";
import Courses from "@/components/practice-lab/courses";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto min-h-screen ">
      <div className="px-8 pt-5">
        <Dasheader />
        <Profile />
        <VideosTab />
        <Courses />
      </div>
      <Footer />
    </main>
  );
}
