import { ICourse } from "@/_actions/course/course";
import { getCourses } from "@/_actions/course/courseService";
import { User } from "@/_actions/user/user";
import { getUsers } from "@/_actions/user/userService";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const { data, isPending, error, isError, isSuccess } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await getUsers(),
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (isSuccess) {
      return setUsers(data)
    }
  }, [isSuccess])

  return { users, isPending, isError, isSuccess }
}