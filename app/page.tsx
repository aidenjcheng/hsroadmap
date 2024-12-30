"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { interests } from "./data/interests";
import { majors } from "./data/majors";
import InterestSelector from "./components/InterestSelector";
import MajorSelector from "./components/MajorSelector";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Navigation from "./components/Navigation";
import Link from "next/link";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        Hello this is the main page <Link href="/home">CLICKME</Link>
      </div>
    </>
  );
}
