import { vonique } from "@/app/fonts";
import ChaptersCard from "@/components/common/chapters-card";
import { chapters } from "@/lib/constants";
import React from "react";

interface Props {
  course: Course | undefined;
}

const Chapters = ({ course }: Props) => {
  return (
    <div className="pt-10">
      <span className={`${vonique.className} uppercase text-xl `}>
        Chapters
      </span>
      <div className="grid grid-cols-3 gap-10">
        {course?.chapters.map((item, index) => (
          <ChaptersCard title={item.title} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Chapters;
