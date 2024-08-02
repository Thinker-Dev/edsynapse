import React from "react";
import HeaderDiv from "../icons/header";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { vonique } from "@/app/fonts";
import { Dot } from "lucide-react";
import { useGetUsers } from "@/hooks/users/useGetUsers";
import { User } from "@/_actions/user/user";

const Dasheader = () => {
  const { users, isPending, isError } = useGetUsers()
  const selectUser = (user: User) => {
    sessionStorage.setItem('user', JSON.stringify(user))
  }
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:border-none">
          <HeaderDiv />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-5 ">
          {users.map((user, key) => (
            <DropdownMenuItem className={`${vonique.className} uppercase`} onClick={() => selectUser(user)} >
              <Dot />
              {user.username}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  );
};

export default Dasheader;
