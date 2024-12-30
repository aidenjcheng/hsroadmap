'use client';

import { Activity } from '../types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

interface ActivityListProps {
  activities: Activity[];
  onToggleActivity: (id: string) => void;
}

export default function ActivityList({
  activities,
  onToggleActivity,
}: ActivityListProps) {
  const groupedByYear: { [key: number]: Activity[] } = {};
  
  activities.forEach(activity => {
    activity.yearRecommended.forEach(year => {
      if (!groupedByYear[year]) {
        groupedByYear[year] = [];
      }
      groupedByYear[year].push(activity);
    });
  });

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Your Personalized Roadmap</h2>
      {Object.entries(groupedByYear).sort(([a], [b]) => Number(a) - Number(b)).map(([year, yearActivities]) => (
        <div key={year} className="space-y-4">
          <h3 className="text-xl font-semibold">Year {year}</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {yearActivities.map((activity) => (
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
      ))}
    </div>
  );
}