"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import DashboardPageTemplate from "../layout";

const Home = () => {
  const Items = [
    {
      title: "Goals Completed",
      value: 3,
    },
    {
      title: "Goals Completed",
      value: 3,
    },
  ];
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">HELLO GROUPS</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {Items.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardDescription>{item.title}</CardDescription>
                <CardTitle>{item.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
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
  );
};

export default Home;
