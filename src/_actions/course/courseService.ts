'use server'

import { db } from "@/providers/prisma/client"
import { ICourse } from "./course"

export const getCourses = async (): Promise<ICourse[]> => {
  const courses = await db.course.findMany({
    include: {
      topics: {
        include: {
          contents: true
        }
      }
    },
  })
  return courses as ICourse[]
}

export const getCourse = async (id: string): Promise<ICourse | null> => {
  const course = await db.course.findUnique({
    include: {
      topics: {
        include: {
          contents: true
        }
      }
    },
    where: { id }
  })


  if (course) return course

  return null
}