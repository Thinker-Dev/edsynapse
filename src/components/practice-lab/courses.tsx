import { vonique } from "@/app/fonts";
import React from "react";
import CoursesCard from "../common/courses-card";
import { courses } from "@/lib/constants";

const Courses = () => {
  return (
    <section className="space-y-10">
      <span className={`${vonique.className} uppercase text-xl `}>
        Available Courses
      </span>
      <div className="grid grid-cols-4 gap-10">
        {courses.map((item, index) => (
          <CoursesCard
            title={item.title}
            subtitle={item.subtitle}
            path={item.path}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;
