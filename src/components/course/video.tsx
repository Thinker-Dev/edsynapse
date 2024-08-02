'use client'
import { IContent } from "@/_actions/content/content";
import { getContent, getContentByTopicId } from "@/_actions/content/contentService";
import { ICourse } from "@/_actions/course/course";
import { ICreateSession, ISession } from "@/_actions/session/session";
import { createSession } from "@/_actions/session/sessionService";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React, { IframeHTMLAttributes, useEffect, useRef, useState } from "react";

interface Props {
  course: ICourse | null | undefined;
}

const Video = ({ course }: Props) => {
  const searchParams = useSearchParams();

  const params = searchParams.get("t") ?? "";
  const content = searchParams.get("c") ?? "";
  const video = searchParams.get('v') ?? "";
  const chapter = course?.topics?.find((item) => item.id?.includes(params));
  const { data, isPending, isSuccess, isError, error } = useQuery({ queryKey: ['courseContent'], queryFn: async () => await getContent(video as string) })
  const newUser = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user') as string) : ""

  const createSessionOn = async () => {
    if (data && newUser) {
      console.log('Attempting to create session', newUser);
      try {
        await createSession({ duration: 10, content_id: data.id, user_id: newUser.id });
        console.log('Session created successfully');
      } catch (err) {
        console.error('Error creating session:', err);
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      console.log('Data fetch successful');
      createSessionOn();
    }
  }, [isSuccess]);



  return (
    <section className="space-y-4 w-full h-[calc(100%-60px)]">
      <div>
        <span className="text-xl">
          Chapter:{" "}
          <span className="font-medium">{chapter?.name}</span>
        </span>
      </div>
      {!isPending && !isError ?
        <iframe
          src={"https://www.youtube.com/embed/" + data?.url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe> : ""
      }

    </section>
  );
};

export default Video;
