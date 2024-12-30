"use client"; // Add this line to ensure the component runs on the client side

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { NavUser } from "@/components/nav-user";
import { CommandDialogComponent } from "@/components/command-dialogue";
// Menu items.
const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const currentPage = usePathname(); // Get the current path

  const data = {
    user: {
      name: "aiden",
      email: "m@example.com",
      avatar: "https://avatars.githubusercontent.com/u/79388006?v=4",
    },
  };
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <Link href="/home" className="px-1 font-medium">
              Awesome sauce
            </Link>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <CommandDialogComponent />
          </SidebarGroupContent>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`${
                      currentPage === item.url
                        ? "!text-contrast !bg-primary-surface"
                        : ""
                    }`}
                  >
                    <a href={item.url}>
                      <item.icon style={{ width: "1rem", height: "1rem" }} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarContent>
          <NavUser user={data.user} />
        </SidebarContent>
      </SidebarFooter>
    </Sidebar>
  );
}
