"use client";

import { ChevronsUpDown, LogOut, UserRound, UserRoundCog } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";

export default function UserItem() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex w-full h-full rounded-md p-4 bg-white justify-between"
          variant={"outline"}
        >
          <div className="flex items-center gap-2">
            <div className="avatar rounded-full min-h-12 min-w-12 bg-emerald-500 text-white font-[700] flex items-center justify-center">
              <p>A</p>
            </div>
            <div className="flex flex-col items-start text-left">
              <p className="text-[16px] text-foreground font-semibold">Name</p>
              <p className="text-[12px] text-muted-foreground">
                email@mail.com
              </p>
            </div>
          </div>
          <div className="text-black">
            <ChevronsUpDown></ChevronsUpDown>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <UserRound />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserRoundCog />
            User Setting
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive" asChild>
            <Link className="flex gap-2 items-center" href={"/login"}>
              <LogOut />
              Logout
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
