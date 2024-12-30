'use client';

import { YearActivity } from '../types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowDown } from 'lucide-react';

interface RoadmapFlowProps {
  yearActivities: YearActivity[];
  onToggleActivity: (id: string) => void;
}

export default function RoadmapFlow({
  yearActivities,
  onToggleActivity,
}: RoadmapFlowProps) {
  const groupedByYear: { [key: number]: YearActivity[] } = {};
  
  yearActivities.forEach(activity => {
    if (!groupedByYear[activity.year]) {
      groupedByYear[activity.year] = [];
    }
    groupedByYear[activity.year].push(activity);
  });

  const years = Object.entries(groupedByYear)
    .sort(([a], [b]) => Number(a) - Number(b));

  return (
    <div className="space-y-8 py-8">
      <h2 className="text-3xl font-bold text-center">Your High School Journey</h2>
      {years.map(([year, activities], index) => (
        <div key={year} className="relative">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-center bg-primary text-primary-foreground py-2 rounded-lg">
              Year {year}
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {activities.map((activity) => (
                <Card key={activity.id}>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={activity.id}
                        checked={activity.completed}
                        onCheckedChange={() => onToggleActivity(activity.id)}
                      />
                      <CardTitle className="text-lg">{activity.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{activity.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {index < years.length - 1 && (
            <div className="flex justify-center my-8">
              <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}