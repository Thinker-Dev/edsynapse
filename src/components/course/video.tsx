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
    <section className="space-y-4 w-full h-[calc(100%-60px)]">
      <div>
        <span className="text-xl">
          Chapter {chapter?.id}:{" "}
          <span className="font-medium">{chapter?.title}</span>
        </span>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${chapter?.video_id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </section>
  );
};

export default Video;
