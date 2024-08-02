import { vonique } from "@/app/fonts";
import Link from "next/link";
import React from "react";

interface Props {
  title?: string;
  subtitle: string;
  path: string;
  video_id: Chapters[];
}
const CoursesCard = ({ title, subtitle, path, video_id }: Props) => {
  return (
    <Link href={`${path}?v=${video_id[0]?.id}`}>
      <div className="card py-5 ">
        <div
          className={`flex flex-col text-center  items-center w-full ${
            title ? "justify-between" : "justify-center"
          }`}
        >
          {title && (
            <span className={`${vonique.className} uppercase text-2xl `}>
              {title}
            </span>
          )}
          <span
            className={`${vonique.className} uppercase text-2xl text-center w-[70%]`}
          >
            {subtitle}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CoursesCard;
