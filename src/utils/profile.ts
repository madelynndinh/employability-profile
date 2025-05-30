import { ProfileData } from '@/types/profile';

export async function getProfileData(): Promise<ProfileData> {
    const response = await fetch('/profile.json');
    if (!response.ok) {
        throw new Error('Failed to fetch profile data');
    }
    return response.json();
} 