"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { activities } from "../data/activities";
import RoadmapFlow from "../components/RoadmapFlow";
import { YearActivity } from "../types";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Create a separate component for the content that uses useSearchParams
function RoadmapContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedInterests = searchParams.get("interests")?.split(",") || [];
  const selectedMajor = searchParams.get("major");

  const [yearActivities, setYearActivities] = useState<YearActivity[]>(() => {
    const filteredActivities = activities.filter((activity) => {
      const matchesInterests = selectedInterests.some((interest) =>
        activity.relatedInterests.includes(interest)
      );
      const matchesMajor = selectedMajor
        ? activity.relatedMajors.includes(selectedMajor)
        : true;
      return matchesInterests || matchesMajor;
    });

    return filteredActivities.flatMap((activity) =>
      activity.yearRecommended.map((year) => ({
        id: `${activity.id}-${year}`,
        activityId: activity.id,
        year,
        name: activity.name,
        description: activity.description,
        completed: false,
      }))
    );
  });

  const handleToggleActivity = (yearActivityId: string) => {
    setYearActivities((prev) =>
      prev.map((ya) =>
        ya.id === yearActivityId ? { ...ya, completed: !ya.completed } : ya
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="ghost" onClick={() => router.back()} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <RoadmapFlow
        yearActivities={yearActivities}
        onToggleActivity={handleToggleActivity}
      />
    </div>
  );
}

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-8 px-4">
        {/* Wrap the RoadmapContent with Suspense */}
        <Suspense fallback={<div>Loading Roadmap...</div>}>
          <RoadmapContent />
        </Suspense>
      </main>
    </div>
  );
}
