import { vonique } from "@/app/fonts";
import React from "react";
import CoursesCard from "../common/courses-card";
import { courses } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "@/_actions/course/courseService";
import { useGetCourses } from "@/hooks/courses/useGetCourses";

const Courses = () => {
  const { courses, isPending, isError, isSuccess } = useGetCourses()

  return (
    <section className="space-y-10">
      <span className={`${vonique.className} uppercase text-xl `}>
        Available Courses
      </span>
      <div className="grid grid-cols-4 gap-10">
        {!isPending ? courses?.map((item, index) => (
          <CoursesCard
            title={item.course_alias}
            subtitle={item.name}
            path={item.id}
            video_id={item.topics}
            key={index}
          />
        )) : ""}
      </div>
    </section>
  );
};

export default Courses;
