"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { interests } from "../data/interests";
import { majors } from "../data/majors";
import InterestSelector from "../components/InterestSelector";
import MajorSelector from "../components/MajorSelector";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RocketIcon } from "lucide-react";
import { BreadCrumbs } from "../components/BreadCrumbs";
import Link from "next/link";
export default function CreateRoadMap() {
  const router = useRouter();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedMajor, setSelectedMajor] = useState<string | null>(null);

  const handleInterestSelect = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleMajorSelect = (id: string) => {
    setSelectedMajor(id);
  };

  const isFormValid = selectedInterests.length > 0 && selectedMajor !== null;

  const handleViewRoadmap = () => {
    if (isFormValid) {
      router.push(
        `/roadmap?interests=${selectedInterests.join(
          ","
        )}&major=${selectedMajor}`
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="py-3 border-b  pl-4 flex gap-3 items-center">
        <Link href="/home" className="flex items-center">
          <Button
            variant="ghost"
            className="p-1 h-fit hover:text-foreground text-muted-foreground"
          >
            <ArrowLeft className="w-5 h-5 cursor-pointer" />
          </Button>
        </Link>
        <BreadCrumbs />
      </div>
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              High School Roadmap Builder
            </h1>
            <p className="text-xl text-muted-foreground shadow-[0px_0px_0px_0px_rgba(25,61,221,1),0px_0px_0px_0px_rgba(25,61,221,0.05)]">
              Your path to a t20
            </p>
          </div>

          <Card className=" ">
            <CardContent className="space-y-8 pt-6">
              <InterestSelector
                interests={interests}
                selectedInterests={selectedInterests}
                onSelect={handleInterestSelect}
              />
              <MajorSelector
                majors={majors}
                selectedMajor={selectedMajor}
                onSelect={handleMajorSelect}
              />
              <div className="flex justify-center pt-4">
                <Button
                  size="lg"
                  onClick={handleViewRoadmap}
                  disabled={!isFormValid}
                  className="w-full md:w-auto"
                >
                  <RocketIcon className="mr-2 h-5 w-5" />
                  View Your Roadmap
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
