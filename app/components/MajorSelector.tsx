'use client';

import { Major } from '../types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface MajorSelectorProps {
  majors: Major[];
  selectedMajor: string | null;
  onSelect: (id: string) => void;
}

export default function MajorSelector({
  majors,
  selectedMajor,
  onSelect,
}: MajorSelectorProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Select Expected Major</h2>
      <p className="text-muted-foreground">Choose your intended college major</p>
      <Select value={selectedMajor || undefined} onValueChange={onSelect}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a major" />
        </SelectTrigger>
        <SelectContent>
          {majors.map((major) => (
            <SelectItem key={major.id} value={major.id}>
              {major.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}