import { IContent } from "@/_actions/content/content";
import { ICourse } from "@/_actions/course/course";
import { getCourses } from "@/_actions/course/courseService";
import { getRecommendations } from "@/_actions/session/sessionService";
import { User } from "@/_actions/user/user";
import { getUsers } from "@/_actions/user/userService";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useGetRecommendations = () => {
  const [recommendations, setRecommendations] = useState<IContent[]>([])
  const user = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user') as string) : ""
  const { data, isPending, error, isError, isSuccess } = useQuery({
    queryKey: ["recommendations"],
    queryFn: async () => await getRecommendations(user.id),
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (isSuccess) {
      console.log("this is the data", data)
      return setRecommendations(data)
    }
  }, [isSuccess])

  return { recommendations, isPending, isError, isSuccess }
}