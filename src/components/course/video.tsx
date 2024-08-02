import { useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  course: Course | undefined;
}

const Video = ({ course }: Props) => {
  const searchParams = useSearchParams();
  const params = searchParams.get("v") ?? "";
  const chapter = course?.chapters.find((item) => item.id?.includes(params));

  return (
    <section className="space-y-4 w-full h-[calc(100%-60px)]">
      <div>
        <span className="text-xl">
          Chapter {chapter?.chapter_id}:{" "}
          <span className="font-medium">{chapter?.title}</span>
        </span>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${chapter?.id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </section>
  );
};

export default Video;
