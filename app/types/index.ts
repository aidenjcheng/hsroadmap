export type Interest = {
  id: string;
  name: string;
  category: string;
};

export type Major = {
  id: string;
  name: string;
  category: string;
};

export type Activity = {
  id: string;
  name: string;
  description: string;
  relatedInterests: string[];
  relatedMajors: string[];
  yearRecommended: number[];
  completed: boolean;
};

export type YearActivity = {
  id: string;
  activityId: string;
  year: number;
  name: string;
  description: string;
  completed: boolean;
};

export type RoadmapState = {
  selectedInterests: string[];
  selectedMajor: string | null;
  activities: Activity[];
};