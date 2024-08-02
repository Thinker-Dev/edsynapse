"use server"

import { db } from "@/providers/prisma/client"
import { IContent } from "./content";

export const getContents = async (course_id: string): Promise<IContent[]> => {
  const contents = await db.content.findMany({
    where: {
      course_id
    }
  });
  return contents as IContent[]
}

export const getContent = async (id: string): Promise<IContent | null> => {
  const content = await db.content.findUnique({
    where: {
      id
    }
  });
  if (content) return content as IContent
  console.error("could not find content with id " + id)
  return null
}
export const getContentByTopicId = async (topic_id: string): Promise<IContent[]> => {
  const content = await db.content.findMany({
    where: {
      topic: { id: topic_id }
    }
  });
  return content

}
