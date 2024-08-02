import { vonique } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
}
const ChaptersCard = ({ title }: Props) => {
  return (
    <div className="chapter">
      <Link href={"course/video?chapter#"}>
        <div
          className={`flex flex-col text-center  items-center w-full space-y-2`}
        >
          <span className={`${vonique.className} uppercase text-lg pb-1`}>
            {title}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ChaptersCard;
