import { vonique } from "@/app/fonts";
import React from "react";
import CoursesCard from "../common/courses-card";

const Courses = () => {
  return (
    <section className="space-y-10">
      <span className={`${vonique.className} uppercase text-xl `}>
        Available Courses
      </span>
      <div className="grid grid-cols-4 gap-10 px-10">
        <CoursesCard
          title="CSD 1001"
          subtitle="PRINCIPLES OF DIGITAL FORENSICS"
        />
        <CoursesCard title="CSE 0002" subtitle="Linux Administration" />
        <CoursesCard title="HUM 2003" subtitle="pRIVACY AND SECURITY" />
        <CoursesCard title="MAT 2009" subtitle="Linux Administration" />
        <CoursesCard title="CSD 3005" subtitle="dATA PRIVACY" />
        <CoursesCard title="CSD 3010" subtitle="CYBER PHYSICAL SYSTEM" />
        <CoursesCard subtitle="COMING SOON" />
        <CoursesCard subtitle="COMING SOON" />
      </div>
    </section>
  );
};

export default Courses;
