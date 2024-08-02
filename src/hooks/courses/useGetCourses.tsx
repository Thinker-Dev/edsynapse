import { ICourse } from "@/_actions/course/course";
import { getCourses } from "@/_actions/course/courseService";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useGetCourses = () => {
  const [courses, setCourses] = useState<ICourse[]>([])
  const { data, isPending, error, isError, isSuccess } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => await getCourses(),
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (isSuccess) {
      return setCourses(data)
    }
  }, [isSuccess])

  return { courses, isPending, isError, isSuccess }
}