"use client";
import { checkSession } from "../login/actions";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import Loader from "@/components/loader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await checkSession();

      if (isAuthenticated === false) {
        router.push("/login");
        setLoading(false);
      } else {
        setIsAuthenticated(true);
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) {
    return (
      <SidebarProvider>
        <AppSidebar />
        <main className=" min-h-screen w-full relative">
          {isMobile && <SidebarTrigger />}
          <div className="flex items-center justify-center h-full">
            <Loader />
          </div>
        </main>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        {isMobile && <SidebarTrigger />}
        {children}
      </main>
    </SidebarProvider>
  );
}
