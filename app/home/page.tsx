"use client";

import { useAuth } from "../hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return null; // Or redirect to login
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      {/* <SidebarTrigger className="mt-1 ml-1" /> */}
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">Welcome back!</h1>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Create New Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Start planning your high school journey with a personalized
                  roadmap.
                </p>
                <Button asChild>
                  <Link href="/createroadmap">
                    <RocketIcon className="mr-2 h-4 w-4" />
                    Create Roadmap
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
