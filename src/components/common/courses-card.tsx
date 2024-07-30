import { vonique } from "@/app/fonts";
import React from "react";

interface Props {
  title?: string;
  subtitle: string;
}
const CoursesCard = ({ title, subtitle }: Props) => {
  return (
    <div className="card py-5 ">
      <div
        className={`flex flex-col text-center  items-center w-full ${
          title ? "justify-between" : "justify-center"
        }`}
      >
        {title && (
          <span className={`${vonique.className} uppercase text-xl `}>
            {title}
          </span>
        )}
        <span
          className={`${vonique.className} uppercase text- text-center w-[70%]`}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default CoursesCard;
