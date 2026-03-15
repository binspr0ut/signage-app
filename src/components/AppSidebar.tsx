"use client";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "./ui/sidebar";
import UserItem from "./UserItem";
import { Images, MonitorPlay, Plus, UsersRound, Video } from "lucide-react";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarGroup>
          <div className="flex justify-between">
            <Link
              href="/"
              className="h-24 w-24 rounded-full bg-blue-400 flex items-center justify-center font-bold text-white"
            >
              Logo
            </Link>

            <SidebarTrigger />
          </div>
        </SidebarGroup>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={"/add-campaign"} className="flex">
                    <MonitorPlay />
                    <p className="font-medium">Play Campaign</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={"/campaign"} className="flex">
                    <Images />
                    <p className="font-medium">Campaign</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={"/cabang"} className="flex">
                    <UsersRound />
                    <p className="font-medium">Kantor Cabang</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <UserItem></UserItem>
      </SidebarFooter>
    </Sidebar>
  );
}
