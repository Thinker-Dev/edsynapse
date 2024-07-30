import { vonique } from "@/app/fonts";
import ChaptersCard from "@/components/common/chapters-card";
import { chapters } from "@/lib/constants";
import React from "react";

const Chapters = () => {
  return (
    <div className="pt-10">
      <span className={`${vonique.className} uppercase text-xl `}>
        Chapters
      </span>
      <div className="grid grid-cols-3 gap-10">
        {chapters.map((item, index) => (
          <ChaptersCard title={item.title} img={item.img} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Chapters;
