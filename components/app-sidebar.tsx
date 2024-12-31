"use client"; // Add this line to ensure the component runs on the client side
import {
  Calendar,
  Home,
  Users,
  Search,
  Settings,
  Flame,
  Map,
} from "lucide-react";
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
export const items = [
  {
    title: "Home",
    url: "/app",
    icon: Home,
  },
  {
    title: "Groups",
    url: "/app/groups",
    icon: Users,
  },
  {
    title: "Roadmaps",
    url: "/app/roadmaps",
    icon: Map,
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
            <Link href="/app" className="px-1 font-medium">
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
                    <Link href={item.url}>
                      <item.icon
                        style={{ width: "1.1rem", height: "1.1rem" }}
                        strokeWidth={2.5}
                      />
                      <span>{item.title}</span>
                    </Link>
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
