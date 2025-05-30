import { useState, useEffect } from 'react';
import { resolveImagePatterns } from '@/utils/imageResolver';

interface Activity {
    id: number;
    title: string;
    date: string;
    location: string;
    summary: string;
    image: string[];
    certificate: string | null;
    category: string;
}

export function useActivities() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchActivities() {
            try {
                setLoading(true);
                const response = await fetch('/activities.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch activities');
                }
                const data: Activity[] = await response.json();

                // Resolve image patterns for each activity
                const activitiesWithResolvedImages = await Promise.all(
                    data.map(async (activity) => ({
                        ...activity,
                        image: await resolveImagePatterns(activity.image)
                    }))
                );

                setActivities(activitiesWithResolvedImages);
                setError(null);
            } catch (err) {
                console.error('Failed to fetch activities:', err);
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        }

        fetchActivities();
    }, []);

    return { activities, loading, error };
} 