import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  course: Course | undefined;
}

const Video = ({ course }: Props) => {
  const pathname = usePathname();
  const chapter = course?.chapters.find((item) =>
    item.link?.includes(pathname)
  );

  return (
    <section className="space-y-4 w-full">
      <div>
        <span className="text-xl">
          Chapter 1: <span className="font-medium">{chapter?.title}</span>
        </span>
      </div>
      <video controls>
        <source src="/video.mp4" type="video/mp4" className="w-full" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </section>
  );
};

export default Video;
