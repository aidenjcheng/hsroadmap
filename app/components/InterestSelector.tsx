"use client";

import { Interest } from "../types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface InterestSelectorProps {
  interests: Interest[];
  selectedInterests: string[];
  onSelect: (id: string) => void;
}

export default function InterestSelector({
  interests,
  selectedInterests,
  onSelect,
}: InterestSelectorProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Select Your Interests</h2>
      <p className="text-muted-foreground">Choose all that apply to you</p>
      <div className="flex flex-wrap gap-3">
        {interests.map((interest) => (
          <Badge
            key={interest.id}
            variant="outline"
            className={cn(
              "cursor-pointer text-sm py-2 px-4  transition-all hover:hover-effect",
              selectedInterests.includes(interest.id) &&
                "hover:!shadow-none bg-contrast !text-primary-foreground"
            )}
            onClick={() => onSelect(interest.id)}
          >
            {interest.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}