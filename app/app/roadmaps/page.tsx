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

const RoadMaps = () => {
  const Items = [
    {
      title: "Goals Completed",
      date: "2021-10-10",
    },
    {
      title: "Goals Completed",
      value: "2021-10-10",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="relative py-12 px-4 max-w-screen-xl mx-auto"></div>
    </div>
  );
};
export default RoadMaps;
